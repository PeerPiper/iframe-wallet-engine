import { getWallet } from "@peerpiper/wasm-wallet-bindings"
import { connectToParent } from "penpal"

// import * as Wallets from "./functions/Wallets"
// import * as Connect from "./functions/Connect"
// import * as Channel from "./functions/Channels"
// import * as Utils from "./functions/Utils"
// import * as ConnectorTypes from "./types/connector.d"

export { handlers } from "./handlers"
export { CONSTANTS } from "./constants"
export { Connection } from "./functions/Connection"
export * as internals from "./internal/index"

// export {
//     Channel,
//     Connect,
//     Wallets,
//     Utils,
//     addProvider,
//     getWallet,
//     LedgerProviderData,
// }

// export { ConnectorTypes }
