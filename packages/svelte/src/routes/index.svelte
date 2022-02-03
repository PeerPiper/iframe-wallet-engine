<script>
	import { onMount, setContext } from 'svelte';
	import Connector from '$lib/Connector.svelte';
	import GetKeys from '$lib/GetKeys.svelte';
	import { storedValue } from '$lib/stores';
	import AutoSizer from '$lib/AutoSizer.svelte';
	import Opened from '$lib/Opened.svelte';

	import Manager from '$lib/Manager.svelte';

	const STORED_VALUE = 'STORED_VALUE';
	const def = null;

	// browser functions (set in onMount to ensure browser loaded)
	let ImmortalDB, save, mounted;

	onMount(async () => {
		({ ImmortalDB } = await import('immortal-db'));
		const storedString = await ImmortalDB.get(STORED_VALUE, def);
		$storedValue = JSON.parse(storedString);

		save = () => {
			ImmortalDB.set(STORED_VALUE, JSON.stringify($storedValue)); // auto save when $storedValue changes
		};

		mounted = true;
	});

	$: if (ImmortalDB && $storedValue && save) save();

	function loadedKeys() {
		save();
		console.log('Saved loaded Keys');
	}

	// let walletReady
	// on:loadedKeys={walletReady}
</script>

<!-- Based on whether this is the Window.Top (not an iframe) or a Child (iframe) depends on which to show: -->
{#if window == window.top}
	<!-- NOT an iframe  -->
	<div class="top-wrapper">
		<svelte:component this={window.opener ? Opened : Manager}>
			<GetKeys on:loadedKeys />
		</svelte:component>
	</div>
{:else}
	<!-- Auto-resize embedded iframe -->
	<AutoSizer let:walletReady>
		<!-- walletReady gets passed from AutoSizer to GetKeys -->
		<Connector {mounted}>
			<Manager>
				<GetKeys on:loadedKeys={walletReady} />
			</Manager>
		</Connector>
	</AutoSizer>
{/if}

<!-- Note: Don't style outside of the AutoSizer, or else the sizes in the ifram will be all messed up -->
<style>
	.top-wrapper {
		margin: 1.618em;
		padding: 1.618em;
	}
</style>
