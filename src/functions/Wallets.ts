// import { ArweaveProvider, arweave } from "$lib/store/ArweaveStore"
// import { LedgerProvider } from "$lib/providers/Ledger"
import { Channel } from "./Channels"
import {
    passwordEncrypt,
    passwordDecrypt,
    pkcs8ToJwk,
} from "$lib/functions/Crypto"
import { download } from "./Utils"

import type { JWKInterface } from "arweave/web/lib/wallet"

import { getWallet } from "@peerpiper/wasm-wallet-bindings"

export type Pre = {
    self_encrypt: Function
    self_decrypt: Function
    generate_re_key: Function
}

export type Proxcryptor = {
    pre: Pre
}

let wallet

async function loadWallet() {
    wallet = await getWallet()
    return wallet
}

export { getWallet }

async function assertWallet() {
    if (!wallet) return await getWallet()
}

const WalletsChannel = new Channel("wallets", undefined, [])

export const WalletsData: WalletDataInterface[] = {
    get() {
        return WalletsChannel.state as any
    },
    set(value) {
        WalletsChannel.set(value)
    },
}

export const ProviderRegistry = {
    // arweave: ArweaveProvider,
    // ledger: LedgerProvider,
}

function selectProvider(wallet: WalletDataInterface) {
    if (wallet.provider && ProviderRegistry[wallet.provider]) {
        return ProviderRegistry[wallet.provider]
    }
    for (const provider of Object.values(ProviderRegistry)) {
        if (provider.isProviderFor?.(wallet)) {
            return provider
        }
    }
    return ProviderRegistry["arweave"]
}

type GConstructor<T = {}> = new (...args: any[]) => T

function setProvider<TBase extends GConstructor<Provider>>(Base: TBase) {
    return class WalletProxy extends Base {
        #wallet: WalletDataInterface
        constructor(...args: any[]) {
            super(...args)
            this.#wallet = args[0]
        }
        get id() {
            return this.#wallet.id + ""
        }
        async getPrivateKey() {}
    }
}

const WalletsStore: { [id: string]: WalletProxy } = {}

export const Wallets: WalletProxy[] = { id: 0 }

// {
//     get() {
//         const runningWallets = Object.keys(WalletsStore)
//         const storageWallets = WalletsData.value.map((w) => w.id + "")
//         for (const id of [...runningWallets, ...storageWallets]) {
//             if (runningWallets.includes(id) && !storageWallets.includes(id)) {
//                 WalletsStore[id].destructor?.()
//                 delete WalletsStore[id]
//             }
//             if (!runningWallets.includes(id) && storageWallets.includes(id)) {
//                 const wallet = WalletsData.value.find((w) => w.id == id)!
//                 const selectedProvider = selectProvider(wallet)!
//                 const dynamicClass = setProvider(selectedProvider)
//                 WalletsStore[id] = new dynamicClass(wallet)
//             }
//         }
//         return Object.values(WalletsStore).sort(
//             (a, b) =>
//                 WalletsData.value.findIndex((w) => w.id == a.id) -
//                 WalletsData.value.findIndex((w) => w.id == b.id)
//         )
//     },
//     set(value) {
//         WalletsData.value = WalletsData.value
//             .filter((w) => value.find((v) => v.id == w.id))
//             .sort(
//                 (a, b) =>
//                     value.findIndex((w) => w.id == a.id) -
//                     value.findIndex((w) => w.id == b.id)
//             )
//     },
// }

export function getWalletById(walletId?: number | string) {
    return Wallets.find((wallet) => wallet.id == walletId)
}

export async function generateMnemonic() {
    await assertWallet()
    return wallet.generate_mnemonic()
}

export async function mnemonicToSeed(mnemonic: string) {
    await assertWallet()
    return wallet.mnemonic_to_seed(mnemonic)
}

export async function validateMnemonic(mnemonic: string) {
    return wallet.recoverMnemonic(mnemonic)
}

export async function addMnemonic(mnemonic: string) {
    let keyPair = await wallet.getKeyPairFromMnemonic(
        mnemonic,
        { id: "ed25519" },
        { privateKeyFormat: "jwk" }
    )
    return addWallet(jwk as JWKInterface)
}

export async function mnemonicToMaster(mnemonic: string): Proxcryptor {
    await assertWallet()
    return wallet.seed_to_proxcryptor(mnemonic)
}

export async function addWallet(jwkObj: JWKInterface) {
    const jwk = jwkObj || (await arweave.wallets.generate())
    const jwkString = JSON.stringify(jwk)
    const existing = WalletsData.value.find(
        (w) => JSON.stringify(w.jwk) === jwkString
    )
    if (existing) {
        return existing.id
    }
    const key = (await arweave.wallets.jwkToAddress(jwk)) as string
    if (!jwkObj) {
        download(key, jwkString)
    }
    const wallet = { id: getNewId(), jwk }
    WalletsData.value.push(wallet)
    return wallet.id
}

export async function addAddress(addressSource: any) {
    let key = typeof addressSource === "string" && addressSource
    key ||= addressSource.key
    key ||= await addressSource.getActiveAddress?.()
    if (!key) {
        return
    }
    const wallet = { id: getNewId(), arweave: { key } }
    WalletsData.value.push(wallet)
    return wallet.id
}

export async function addProvider(provider: ProviderData) {
    const importData = await provider.getImportData()
    const wallet = { id: getNewId(), ...importData }
    WalletsData.value.push(wallet)
    return wallet.id
}

export function deleteWallet(wallet: WalletDataInterface) {
    Wallets.value = Wallets.value.filter((w) => w.id !== wallet.id)
}

function getNewId() {
    let i = 0
    while (WalletsData.value.find((w) => +w.id === i)) {
        i++
    }
    return i + ""
}
