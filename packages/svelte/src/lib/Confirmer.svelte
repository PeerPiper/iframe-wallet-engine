<script>
	import { confirmationComponents } from '$lib/components/confirm/index';
	import { handlers } from '@peerpiper/iframe-wallet-engine';

	export let show;
	export let hide;

	const leaf = (obj, path) => path.split('.').reduce((value, el) => value && value[el], obj);

	let handleConfirmed;
	let handleDenied;
	let confirmSection;
	let params;

	// set confirm fn
	const confirm = async (methodName, args) => {
		confirmSection = methodName;
		params = args;
		return new Promise((resolve, reject) => {
			handleConfirmed = () => {
				confirmSection = null; // reset UI
				hide();
				resolve(true); // signal handler to continue with action
			};
			handleDenied = () => {
				confirmSection = null; // reset UI
				hide();
				resolve(false); // signal handler to continue with action
			};
		});
	};

	// pass the above confirm function to the handlers so they can use it when their methods are called
	handlers.setConfig('confirm', confirm);

	$: active = confirmSection
		? leaf(confirmationComponents, confirmSection) || confirmationComponents.Default
		: false; // picked by $confirm fn below
	$: active && show(); //trigger show
</script>

{#if active}
	<div class="active">
		<svelte:component
			this={active.component}
			props={{ method: confirmSection, params }}
			on:confirmed={handleConfirmed}
			on:denied={handleDenied}
		/>
	</div>
{/if}

<style>
	.active {
		display: flex;
		align-items: center;
		min-width: 350px;
		min-height: 50px;
		flex-direction: column;
	}
</style>
