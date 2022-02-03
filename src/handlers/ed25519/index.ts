import { publicKeyJwkFromPublicKey, jwkToSecretBytes } from "./utils"
import { pre, DEFAULT_NAME, wallet, assertWallet } from "../../internal/index"

let wasmWallet
let getPublicKey

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
        { pre_name: string = DEFAULT_NAME, dataLayout = {} }
    ) => {
        await assertWallet()
        if (!(pre && pre_name && pre.get(pre_name)))
            return new Error("No signer available.")
        // TODO, data layout to confirm what is being signed
        if (window.confirm(`Sign message?`)) {
            return pre.get(pre_name).sign(data)
        }
    },

    // technically verify doesn't need to be done in the wallet... but for convenience its here
    verify: (
        public_key: Uint8Array,
        message: Uint8Array,
        signature: Uint8Array
    ) => {
        return pre
            .get(pre_name)
            .verify(public_key, new Uint8Array(message), signature)
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
