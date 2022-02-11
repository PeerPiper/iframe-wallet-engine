import { publicKeyJwkFromPublicKey, jwkToSecretBytes } from "./utils"
import { pre, DEFAULT_NAME, wallet, assertWallet } from "../../internal/index"
import { getConfig } from "../index"

let wasmWallet
let getPublicKey

export const config = {
    confirm: {
        sign: () => {
            return window.confirm(`Sign this message?`)
        },
    },
}

export const ed25519 = {
    setWasmWallet: (w, publicKeyGetter) => {
        wasmWallet = w
        getPublicKey = publicKeyGetter
    },
    // TODO: Separate the key types, ed25519, RSA, BLS, etc
    generateKeypair: () => {
        if (!assertReady())
            return new Error(
                "Wallet not connected or initialized. Run connect() and await initialize() first."
            )
        let keypair = wasmWallet.generate_ed25519_keypair()
        let publicKey = keypair.public()
        let secretKey = keypair.secret()
        return { publicKey, secretKey }
    },
    sign: async (
        data: Uint8Array,
        opts = { pre_name: DEFAULT_NAME, dataLayout: {} }
    ) => {
        await assertWallet()
        if (!pre || !opts.pre_name || !pre.get(opts.pre_name))
            return new Error("No signer available.")

        const methodName = "ed25519.sign"
        const args = data
        let confirmed = await getConfig().confirm(methodName, args)
        if (!confirmed) return false

        const signature = pre.get(opts.pre_name).sign(new Uint8Array(data))
        console.log({ signature })
        return signature
    },

    // technically verify doesn't need to be done in the wallet... but for convenience its here
    verify: (
        public_key: Uint8Array,
        message: Uint8Array,
        signature: Uint8Array,
        opts = { pre_name: DEFAULT_NAME, dataLayout: {} }
    ) => {
        const verified = wallet.verify(
            new Uint8Array(public_key),
            new Uint8Array(message),
            new Uint8Array(signature)
        )
        return verified
    },
}

function toHexString(byteArray) {
    return Array.from(byteArray, function (byte) {
        return ("0" + (byte & 0xff).toString(16)).slice(-2)
    }).join("")
}

declare global {
    interface Window {
        ed25519: typeof ed25519
    }
}
