<script lang="ts">
	import {writable, derived} from 'svelte/store'; // using `writable`+cloning is inefficient and `derived` is unwieldy
	import {mutable} from '$lib/mutable'; // slightly less efficient than `fastMutable` but composes with pure code
	import {fastMutable} from '$lib/fastMutable'; // this one is more efficient but doesn't compose with pure code

	const data: [any, any][] = [['a', 1]]; // pretend there's lots of data here; cloning usually performs fine with small data

	const writableMap = writable(new Map(data)); // A.
	const writableMapCloned = writable(new Map(data)); // B.
	const derivedWritableMap = derived(writableMap, ($v) => ({value: $v})); // C.
	const mutableMap = mutable(new Map(data)); // D.
	const mutableMapAntipattern = mutable(new Map(data)); // E.
	const fastMutableMap = fastMutable(new Map(data)); // F.

	const toHue = (count: number) => count * 37 + '';
</script>

<main class="markup">
	<header>
		<h1><a href="https://github.com/spiderspace/svelte-mutable-store">svelte-mutable-store</a></h1>
		<blockquote>
			using mutable values in Svelte stores with the <code>immutable</code> compiler flag
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

			// E. A `mutable` store that updates through what seems like an antipattern.
			// Note that unlike the `update` method used in D., we have to use `.value` here.
			$mutableMapAntipattern.value.set('a', $mutableMapAntipattern.value.get('a') + 1);
			mutableMapAntipattern.update();
			// or using `set`:
			// $mutableMapAntipattern.value.set('a', $mutableMapAntipattern.value.get('a') + 1);
			// $mutableMapAntipattern = $mutableMapAntipattern.value;

			// F. A `fastMutable` store from a library that allows mutation with `immutable=true`.
			fastMutableMap.update(($v) => {
				$v.set('a', $v.get('a') + 1);
			});
		}}
	>
		click me to make number++ go up
	</button>

	<h2>
		A. <code>writable</code> store (broken! D:)
	</h2>
	<section style:--hue={toHue($writableMap.get('a'))}>
		<div>
			<span class="count">{$writableMap.get('a')}</span>
			← fails to update as a <code>writable</code> store because <code>immutable={'{'}true}</code>
		</div>
		<pre class="panel-inset">
$writableMap.set('a', $writableMap.get('a') + 1);
$writableMap = $writableMap;
		</pre>
	</section>

	<h2>
		B. cloned <code>writable</code> store
	</h2>
	<section style:--hue={toHue($writableMapCloned.get('a'))}>
		<div>
			<span class="count">{$writableMapCloned.get('a')}</span>
			← works, but causes heart pain and in some cases tremendous garbage and slowness
		</div>
		<pre class="panel-inset">
$writableMapCloned.set('a', $writableMapCloned.get('a') + 1);
$writableMapCloned = new Map($writableMapCloned);
		</pre>
	</section>

	<blockquote>
		in the examples below, notice that you need to access <code>.value</code> for reads, unlike above
	</blockquote>

	<h2>
		C. <code>derived</code> from <code>writable</code> store
	</h2>
	<section style:--hue={toHue($derivedWritableMap.value.get('a'))}>
		<div>
			<span class="count">{$derivedWritableMap.value.get('a')}</span>
			← works with no new libraries, and doesn't clone the map, but we're juggling two stores, one for
			writes and one for reads, and it creates garbage every change
		</div>
		<pre class="panel-inset">
const derivedWritableMap = derived(writableMap, ($v) => ({'{'}value: $v}));
		</pre>
	</section>

	<h2>
		D. <code>mutable</code> store
	</h2>
	<section style:--hue={toHue($mutableMap.value.get('a'))}>
		<div>
			<span class="count">{$mutableMap.value.get('a')}</span>
			← works because it's a <code>mutable</code> store; doesn't clone the map; however notice that
			you need to access <code>.value</code>
		</div>
		<pre class="panel-inset">
mutableMap.update(($v) => {'{'}
	$v.set('a', $v.get('a') + 1);
});
		</pre>
	</section>

	<h2>
		E. <code>mutable</code> store antipattern
	</h2>
	<section style:--hue={toHue($mutableMapAntipattern.value.get('a'))}>
		<div>
			<span class="count">{$mutableMapAntipattern.value.get('a')}</span>
			← works because it's a <code>mutable</code> store, but mutates the value directly and then
			manually calls <code>.update()</code>, which seems like an antipattern
		</div>
		<pre class="panel-inset">
$mutableMapAntipattern.value.set('a', $mutableMapAntipattern.value.get('a') + 1);
mutableMapAntipattern.update();
		</pre>
	</section>

	<h2>
		F. <code>fastMutable</code> store
	</h2>
	<section style:--hue={toHue($fastMutableMap.value.get('a'))}>
		<div>
			<span class="count">{$fastMutableMap.value.get('a')}</span>
			← works because it's a <code>fastMutable</code> store, which compared to
			<code>mutable</code> is slightly more efficient because it swaps between two stable object references,
			but it doesn't compose as an immutable value stream
		</div>
		<pre class="panel-inset">
fastMutableMap.update(($v) => {'{'}
	$v.set('a', $v.get('a') + 1);
});
		</pre>
	</section>

	<hr />

	<h2>notes:</h2>
	<ul>
		<li>
			Why care about the immutable option? See this example: <a
				href="https://svelte.dev/examples/immutable-data"
				>https://svelte.dev/examples/immutable-data</a
			>
		</li>
		<li>
			The usecases motivating these stores: large maps and other collections (often containing
			stores) for complex client-side indexing.
		</li>
		<li>
			Can we solve this problem with a better pattern than these custom stores? Am I missing
			something?
		</li>
		<li>
			Is <code>fastMutable</code>'s strategy of swapping between two stable references a dangerous
			footgun? It doesn't compose with code that expects every change to be referentially unique.
			Should the <code>mutable</code> implementation be preferred in all cases?
		</li>
		<li>
			Are there bettes names than <code>mutable</code> and <code>fastMutable</code>?
		</li>
		<li>
			Add a <code>set</code> store method? Probably useful for <code>bind:</code> usage in some cases
			and less code than `update` to replace references.
		</li>
	</ul>
	<hr />
	<footer>
		<a href="https://github.com/spiderspace/svelte-mutable-store"
			>public domain source code on GitHub
		</a>
	</footer>
</main>

<style>
	main {
		/* TODO should these be on `.column` ? */
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		/* TODO should `.column` have no min width? doesn't layout well for mobile! */
		max-width: var(--column_width);
	}
	h1 {
		text-align: center;
	}
	pre {
		padding: var(--spacing_lg);
		margin-top: var(--spacing_lg);
	}
	code {
		background: hsl(17, 20%, 92%);
		padding: 0.1em 0.5em;
		white-space: nowrap;
	}
	button {
		font-weight: bold;
		font-size: 1.5em;
		color: #339;
		border: 2px solid #339;
	}
	.count {
		background-color: hsl(var(--hue), 70%, 90%);
		padding: 0.2em 1em;
	}
	h2 {
		margin-top: 1.5em;
	}
	footer {
		display: flex;
		justify-content: center;
		padding-bottom: var(--spacing_xl3);
	}
</style>
