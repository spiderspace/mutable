<script lang="ts">
	import Message from '@feltcoop/felt/ui/Message.svelte';

	import Mreows from '$lib/ui/Mreows.svelte';
</script>

<main class="markup">
	<section>
		<h1>felt-template</h1>
		<Message>hello and welcome</Message>
	</section>
	<Mreows />
</main>

<style>
	main {
		/* TODO should these be on `.column` ? */
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		/* TODO should `.column` have no min width? doesn't layout well for mobile! */
		max-width: var(--column_width);
	}
	h1 {
		text-align: center;
	}
	section {
		/* TODO should `.column-min` have no min width? */
		max-width: var(--column_width_min);
	}
</style>
