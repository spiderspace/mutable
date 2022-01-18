<script lang="ts">
	import {writable, derived} from 'svelte/store';
	import {mutable} from '$lib/mutable';
	import {fastMutable} from '$lib/fastMutable';
	import examples from '$lib/examples.json';

	const data: [any, any][] = [['a', 1]]; // pretend there's lots of data here; cloning usually performs fine with small data

	const writableMap = writable(new Map(data)); // A.
	const writableMapCloned = writable(new Map(data)); // B.
	const derivedWritableMap = derived(writableMap, ($v) => ({value: $v})); // C.
	const mutableMap = mutable(new Map(data)); // D.
	const fastMutableMap = fastMutable(new Map(data)); // E.
	const mutableMapManual = mutable(new Map(data)); // F.

	const toHue = (count: number) => count * 37 + '';
</script>

<main class="markup column">
	<header>
		<h1><a href="https://github.com/spiderspace/mutable">mutable</a></h1>
		<blockquote>
			using mutable values in Svelte stores with the <code>immutable</code> compiler flag —
			<a href="https://github.com/spiderspace/mutable">learn more on GitHub</a>
		</blockquote>
	</header>

	<button
		on:click={() => {
			// A. A `writable` store that doesn't work because
			// it tries to mutate with under the `immutable=true` compiler option.
			$writableMap.set('a', $writableMap.get('a') + 1);
			$writableMap = $writableMap;

			// B. A `writable` store that works because it's inefficiently cloned.
			$writableMapCloned.set('a', $writableMapCloned.get('a') + 1);
			$writableMapCloned = new Map($writableMapCloned);
			// or use `update` instead:
			// writableMapCloned.update(($v) => {
			// 	$v.set('a', $v.get('a') + 1);
			// 	return new Map($v);
			// });

			// C. See `derivedWritableMap` above.

			// D. A `mutable` store from a library that allows mutation with `immutable=true`
			// as efficently as possible, but doesn't compose as an immutable value stream,
			// because every other value is referentially equal to avoid garbage.
			mutableMap.update(($v) => {
				$v.set('a', $v.get('a') + 1);
			});

			// E. A `fastMutable` store from a library that allows mutation with `immutable=true`.
			fastMutableMap.update(($v) => {
				$v.set('a', $v.get('a') + 1);
			});

			// F. A `mutable` store that updates through what seems like an antipattern.
			// Note that unlike the `update` method used in D., we have to use `.value` here.
			$mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
			mutableMapManual.update();
			// or using `set`:
			// $mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
			// $mutableMapManual = $mutableMapManual.value;
		}}
	>
		click me to make number++ go up
	</button>

	<h2>
		A. <code>writable</code> store (broken! D:)
	</h2>
	<section style:--hue={toHue($writableMap.get('a'))}>
		<pre class="panel-inset">
			{@html examples.ADef}
		</pre>
		<div class="count-with-label">
			<p class="count-wrapper panel-outset">
				<span class="count">{$writableMap.get('a')}</span>
				<span class="read-example">{@html examples.ARead}</span>
			</p>
			<p class="count-label">
				fails to update as a <code>writable</code> store because <code>immutable={'{'}true}</code> and
				we're mutating the map
			</p>
		</div>
		<pre class="panel-inset">
			{@html examples.AWrite}
		</pre>
	</section>

	<h2>
		B. cloned <code>writable</code> store
	</h2>
	<section style:--hue={toHue($writableMapCloned.get('a'))}>
		<pre class="panel-inset">
			{@html examples.BDef}
		</pre>
		<div class="count-with-label">
			<p class="count-wrapper panel-outset">
				<span class="count">{$writableMapCloned.get('a')}</span>
				<span class="read-example">{@html examples.BRead}</span>
			</p>
			<p class="count-label">
				works for <code>Map</code>, but in some cases, causes tremendous garbage and slowness; also,
				it does not work for <code>WeakMap</code>, one of the motivating usecases for this document
			</p>
		</div>
		<pre class="panel-inset">
			{@html examples.BWrite}
		</pre>
	</section>

	<hr />
	<blockquote style="margin-bottom: 0">
		in the examples below, notice that you need to access <code>.value</code> for reads, unlike above
	</blockquote>
	<hr />

	<h2>
		C. <code>derived</code> from <code>writable</code> store
	</h2>
	<section style:--hue={toHue($derivedWritableMap.value.get('a'))}>
		<pre class="panel-inset">
			{@html examples.CDef}
		</pre>
		<div class="count-with-label">
			<p class="count-wrapper panel-outset">
				<span class="count">{$derivedWritableMap.value.get('a')}</span>
				<span class="read-example">{@html examples.CRead}</span>
			</p>
			<p class="count-label">
				works with no new modules, and doesn't clone the map, but now we're juggling two stores, one
				for writes and one for reads; is error prone because reading the <code>writable</code> isn't
				reactive!
			</p>
		</div>
		<pre class="panel-inset">
			{@html examples.CWrite}
		</pre>
	</section>

	<h2>
		D. <code
			><a href="https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts">mutable</a
			></code
		> store
	</h2>
	<section style:--hue={toHue($mutableMap.value.get('a'))}>
		<pre class="panel-inset">
			{@html examples.DDef}
		</pre>
		<div class="count-with-label">
			<p class="count-wrapper panel-outset">
				<span class="count">{$mutableMap.value.get('a')}</span>
				<span class="read-example">{@html examples.DRead}</span>
			</p>
			<p class="count-label">
				works because it's a <code
					><a href="https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts">mutable</a
					></code
				>
				store; doesn't clone the map; however notice that you need to access <code>.value</code> on reads
			</p>
		</div>
		<pre class="panel-inset">
			{@html examples.DWrite}
		</pre>
	</section>

	<h2>
		E. <code
			><a href="https://github.com/spiderspace/mutable/blob/main/src/lib/fastMutable.ts"
				>fastMutable</a
			></code
		> store
	</h2>
	<section style:--hue={toHue($fastMutableMap.value.get('a'))}>
		<pre class="panel-inset">
			{@html examples.EDef}
		</pre>
		<div class="count-with-label">
			<p class="count-wrapper panel-outset">
				<span class="count">{$fastMutableMap.value.get('a')}</span>
				<span class="read-example">{@html examples.ERead}</span>
			</p>
			<p class="count-label">
				works because it's a <code
					><a href="https://github.com/spiderspace/mutable/blob/main/src/lib/fastMutable.ts"
						>fastMutable</a
					></code
				>
				store, which compared to
				<code
					><a href="https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts">mutable</a
					></code
				> is slightly more efficient because it swaps between two stable object references, so there's
				no extra garbage created, but it doesn't compose as an immutable value stream, so it may be a
				dangerously too-clever design
			</p>
		</div>
		<pre class="panel-inset">
			{@html examples.EWrite}
		</pre>
	</section>

	<h2>
		F. <code
			><a href="https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts">mutable</a
			></code
		> store with manual update and set
	</h2>
	<pre class="panel-inset">
		{@html examples.FDef}
	</pre>
	<section style:--hue={toHue($mutableMapManual.value.get('a'))}>
		<div class="count-with-label">
			<p class="count-wrapper panel-outset">
				<span class="count">{$mutableMapManual.value.get('a')}</span>
				<span class="read-example">{@html examples.FRead}</span>
			</p>
			<p class="count-label">
				works because it's a <code
					><a href="https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts">mutable</a
					></code
				>
				store, but mutates the value directly and then manually calls <code>.update()</code>, which
				may be an antipattern
			</p>
		</div>
		<pre class="panel-inset">
			{@html examples.F1Write}
		</pre>
		<p>
			an alternative using the store's <code>set</code> method, which is extra awkward because of
			the <code>.value</code>:
		</p>
		<pre class="panel-inset">
			{@html examples.F2Write}
		</pre>
		<p>
			and you can set a new value if you need to, but if this is all you need, prefer a <code
				>writable</code
			>:
		</p>
		<pre class="panel-inset">
			{@html examples.F3Write}
		</pre>
		<p>or:</p>
		<pre class="panel-inset">
			{@html examples.F4Write}
		</pre>
	</section>

	<hr />
	<footer class="markup">
		<p>
			want to discuss or help with some open questions? <a
				href="https://github.com/spiderspace/spiderspace/discussions/5">go here</a
			>
		</p>
		<p>
			<a href="https://github.com/spiderspace/mutable"
				>get the docs and public domain source code on GitHub</a
			>
		</p>
	</footer>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		/* TODO remove this after updating Felt */
		min-width: 0;
	}
	h1 {
		text-align: center;
	}
	pre {
		padding: var(--spacing_lg);
		margin: var(--spacing_lg) 0;
		overflow: auto;
	}
	code {
		background: hsl(17, 20%, 92%);
		padding: 0 0.5em;
		white-space: nowrap;
	}
	button {
		font-weight: bold;
		font-size: 1.5em;
		color: var(--orange);
		border: 2px solid var(--orange);
	}
	.count-with-label {
		display: flex;
	}
	.count-wrapper {
		display: flex;
	}
	.count {
		display: flex;
		align-items: center;
		background-color: hsl(var(--hue), 70%, 90%);
		padding: var(--spacing_sm) var(--spacing_lg);
		font-size: var(--font_size_xl);
	}
	.read-example {
		display: flex;
		align-items: center;
		padding: var(--spacing_lg);
	}
	.count-label {
		padding: var(--spacing_lg);
	}
	h2 {
		margin-top: 1.5em;
	}
	footer {
		display: flex;
		align-items: center;
		padding-bottom: var(--spacing_xl5);
	}
	@media (max-width: 600px) {
		.count-with-label {
			flex-wrap: wrap;
		}
		.count-wrapper {
			flex-wrap: wrap;
		}
		.count-label {
			padding: 0;
		}
	}
</style>
