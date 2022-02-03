import { getWallet } from "@peerpiper/wasm-wallet-bindings"
import type { Proxcryptor } from "../types/proxcryptor"
import { publicKeyJwkFromPublicKey } from "../handlers/ed25519/utils.ts"

export const DEFAULT_PROXCRYPTOR_NAME = "DEFAULT_PROXCRYPTOR_NAME"
export const pre = new Map()
export let keys = new Map()

export const DEFAULT_NAME = "Master Key"

export let wallet

loadWallet() // premptively load it

function browser() {
    return ![(typeof window, typeof document)].includes("undefined")
}

async function loadWallet() {
    if (!browser()) return // skip non-browser enviroments
    const resolved = await getWallet()
    wallet = resolved
}

export async function assertWallet() {
    if (!wallet) await wallet
}

let config: { [Key: string]: any } = {}

export const setConfig = (key: string, value: any) => {
    config[key] = value
}

export const getConfig = () => {
    return config
}

export const generateMnemonic = async function () {
    await assertWallet()
    console.log("generating Mnemonic")
    return wallet.generate_mnemonic()
}

export const loadMnemonicInProxcryptor = async function (
    mnemonic: string,
    pre_name?: string = DEFAULT_NAME
): Proxcryptor {
    await assertWallet()
    const proxcryptor = wallet.mnemonic_to_proxcryptor(mnemonic)
    pre.set(pre_name, proxcryptor)
    return pre_name
}

export const getLoadedKeys = () => {
    let results = []

    for (let [pre_name, proxcryptor] of pre.entries()) {
        results.push({
            name: pre_name,
            publicKey: proxcryptor.public_key(),
            publicKeyJWK: proxcryptor.public_key_jwk(),
            publicKeyBase58: proxcryptor.public_key_base58(),
        })
    }

    return results
}
