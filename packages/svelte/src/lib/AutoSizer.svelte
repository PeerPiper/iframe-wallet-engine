<script>
	import { onMount } from 'svelte';

	let offsetHeight;
	let offsetWidth;
	let Connection;
	let connector;

	onMount(async () => {
		({ Connection } = await import('@peerpiper/iframe-wallet-engine'));
		let connection = new Connection();
		connector = await connection.init();
	});

	$: connector && offsetHeight && setHeight(offsetHeight);
	$: connector && offsetWidth && setWidth(offsetWidth);

	function setHeight(height) {
		console.log(`Setting height ${height}`);
		connector.setIframeParentHeight(height); // works
	}

	function setWidth(width) {
		console.log(`Setting width ${width}`);
		connector.setIframeParentWidth(width); // works
	}

	async function walletReady() {
		console.log(`Wallet Ready`);
		await connector;
		connector.walletReady(); // works
	}
</script>

<div class="autosizer" bind:offsetHeight bind:offsetWidth>
	<slot {walletReady} />
</div>

<style>
	.autosizer {
		margin: 0em;
		/* min-height: 100%;
        height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex-wrap: nowrap; */
	}
</style>
