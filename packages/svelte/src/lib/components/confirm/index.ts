import { handlers } from '@peerpiper/iframe-wallet-engine';
import DefaultConfirmation from './DefaultConfirmation.svelte';
import Connect from './Connect.svelte';
// import ArweaveSign from '../arweave/ConfirmSign.svelte';

let confirmationComponents = {
	Default: { component: DefaultConfirmation }
};

// setup boring defaults, can be overriden with fanicer by users
for (const [key, value] of Object.entries(handlers)) {
	confirmationComponents[key] = { component: DefaultConfirmation };
}

// Customize certain confirmation components
let customizedComponents = {
	connect: { component: Connect },
	ed25519: {
		// sign: {}
	},
	arweaveWalletAPI: {
		sign: {
			// component: ArweaveSign
		}
	}
};

confirmationComponents = { ...confirmationComponents, ...customizedComponents };

export { confirmationComponents };
