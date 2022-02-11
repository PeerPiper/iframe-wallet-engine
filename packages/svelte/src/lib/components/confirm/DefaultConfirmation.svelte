<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let props;

	export function handleConfirm() {
		let value = true;
		dispatch('confirmed', { value });
	}

	export function handleDenied() {
		let value = false;
		dispatch('denied', { value });
	}
</script>

<div>
	<!-- *also* pass handleConfirm up to slot parent, so they can trigger it with their custom button -->
	<slot {handleConfirm} {props}>
		<div class="attention">
			<!-- this is default content, override with slot -->
			<div>
				⚠️ Authorize {props.method} from your wallet?
			</div>
			<div class="submit">
				<button class="yellow" on:click={handleDenied}>No</button>
				<button on:click={handleConfirm}>Yes</button>
			</div>
		</div>
	</slot>
</div>

<style>
	div.attention {
		display: flex;
		flex-direction: column;
		background-color: #fff9c4;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
	}
	div {
		padding: 0.5em;
		margin: 0.5em;
		width: fit-content;
	}

	.submit > button:not(:disabled) {
		background-color: #4caf50; /* Green */
	}

	.submit > button:disabled {
		background-color: rgb(126, 126, 126) !important; /* Grey */
	}

	.submit > button {
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin-left: auto;
		border-radius: 2px;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
	}

	button {
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		width: fit-content;
		margin-left: auto;
		margin-top: 0.5em;
		margin-bottom: 1em;
		border-radius: 2px;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
	}

	button.yellow {
		background-color: rgba(230, 226, 10, 0.82) !important;
	}

	button.ready {
		background-color: rgb(47, 137, 255, 0.82);
	}

	button.green {
		background-color: #4caf50;
	}
</style>
