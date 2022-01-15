# svelte-mutable

> using mutable values in Svelte stores with the immutable compiler option

> **work in progress**: experimental

| [🕸️](https://www.spiderspace.org)                                                    | [🐙🐱](https://github.com/spiderspace)                                | 🧪                                                                          |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [www.spiderspace.org](https://www.spiderspace.org)                                   | [spiderspace/spiderspace](https://github.com/spiderspace/spiderspace) | Svelte; safe&serializable layout&content blocks                             |
| [spiderspace.github.io/about](https://spiderspace.github.io/about)                   | [spiderspace/about](https://github.com/spiderspace/about)             | Svelte+[iconify](https://github.com/iconify); spiderspace is web prototypes |
| [spiderspace.github.io/svelte-mutable](https://spiderspace.github.io/svelte-mutable) | **spiderspace/svelte-mutable**                                        | mutable values in Svelte stores with `immutable` enabled                    |

## problem?

> deployed to
> [spiderspace.github.io/svelte-mutable](https://spiderspace.github.io/svelte-mutable),
> and see also [this REPL](https://svelte.dev/repl/0d7852935b2247a89cb04255f374a309?version=3.46.1)

The [`immutable` compiler option](https://svelte.dev/docs#compile-time-svelte-compile),
which is `false` by default in Svelte and SvelteKit,
can sometimes improve performance as demonstrated in
[the official example](https://svelte.dev/examples/immutable-data).

You can enable it app-wide in SvelteKit with
[the config's `compilerOptions`](https://kit.svelte.dev/docs#configuration)
or locally per component
[with `<svelte:options>`](https://svelte.dev/docs#template-syntax-svelte-options).

Better performance you say? Sounds great, right?
The problem is immutability is incompatible with some patterns.
Many Svelte developers prefer to write code that mutates objects,
and the language makes this very terse, like binding to store properties.
(e.g. `<input bind:value={$store.text} />`)

Immutability also causes problems with large arrays, maps, and other collections.
Let's say we want reactivity when those collections change and we have `immutable` enabled.
Treating them as immutable and cloning on every change
can cause performance problems when the collections grow large.
This is the motivating usecase for this project: large JS collections like `Map`s and arrays.

We could use a library with immutable data structures (perhaps with efficient structural sharing),
but then we're no longer using plain JS values
and our related code and familiar patterns may be incompatible.
Libraries like [Immutable.js](https://github.com/immutable-js/immutable-js/)
have APIs that diverge from plain JS data structures, and they're not light dependencies.
Libraries like [immer](https://github.com/immerjs/immer)
make our normal JS code _mostly_ compatible, but they're inefficient for large collections;
we want to avoid copying large data structures.

We could try to enable `immutable` globally and opt out on a per-component basis, or vice versa,
but this is error prone and adds a lot of mental overhead,
and it loses the efficiency of the `immutable` option for the rest of the component.

Is there a sweet spot for this use case? Can we enable the immutable option globally
while treating large collections as reactive mutable values?

## solution?

This project demonstrates two custom stores to help solve this problem:
[`mutable`](/src/lib/mutable.ts) and
[`fastMutable`](src/lib/fastMutable.ts).
The solutions are a WIP and I could use some help and feedback.
There are additional notes and questions below.

The code is deployed to
[spiderspace.github.io/svelte-mutable](https://spiderspace.github.io/svelte-mutable)
and there's also
[this REPL demonstration](https://svelte.dev/repl/0d7852935b2247a89cb04255f374a309?version=3.46.1).

- usecases:
  - large maps and arrays of stores (client-side indexes of reactive backend state)
- implementations
  - `mutable`, that wraps every store change in a new object reference as a `value` property
  - `fastMutable` that tries to be efficient (maybe too clever)
- questions
  - is `fastMutable` a footgun?
  - names?
  - `set` method? (maybe for `bind:` patterns?) guidance against using it?
- want to help?
  - spiderspace discussions post (TODO make this post and link it)
  - please share your thoughts on Twitter or YouTube! (TODO make a video and tweet?)
  - if you'd prefer to discuss privately, email me at mail@ryanatkn.com
- see also
  - [Twitter poll](https://twitter.com/ryanatkn/status/1482390036943360010)
    asking users if they use `immutable`

## alternatives?

- lightweight immutable data structures for maps and arrays that have structural sharing?

## more info

This is both a niche and advanced topic,
particularly because Svelte defaults to `immutable: false`.
Many developers don't know or care about it,
and the usecase motivating these stores is niche.
(large data collections that cause performance problems when cloned)

### how to enable `immutable`?

Two ways:

1. globally: set `immutable: true` in the
   [SvelteKit config](https://kit.svelte.dev/docs#configuration).
   See this project's [`svelte.config.js`](/svelte.config.js) for an example.
2. locally per component:
   [`<svelte:options immutable={true}>`](https://svelte.dev/docs#template-syntax-svelte-options)

### how does `immutable` work?

The option tells the Svelte compiler to
[swap this function](https://github.com/sveltejs/svelte/blob/a4e4027f794dad93bcd6ffd74c1a19a9ce9ef6ac/src/compiler/compile/render_dom/index.ts#L122):

[src/runtime/internal/utils.ts](https://github.com/sveltejs/svelte/blob/a4e4027f794dad93bcd6ffd74c1a19a9ce9ef6ac/src/runtime/internal/utils.ts#L39)

```js
export function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}
```

for this one:

[src/runtime/internal/utils.ts](https://github.com/sveltejs/svelte/blob/a4e4027f794dad93bcd6ffd74c1a19a9ce9ef6ac/src/runtime/internal/utils.ts#L53)

```js
export function not_equal(a, b) {
	return a != a ? b == b : a !== b;
}
```

## usage

```bash
npm i
# then
npm run dev
# or
gro dev # npm i -g @feltcoop/gro
```

> learn more about [SvelteKit](https://github.com/sveltejs/kit),
> [Vite](https://github.com/vitejs/vite), and [Gro](https://github.com/feltcoop/gro)

## build

```bash
npm run build
# or
gro build
```

## deploy

[Deploy](https://github.com/feltcoop/gro/blob/main/src/docs/deploy.md)
(build, commit, and push) to the `deploy` branch, e.g. for GitHub Pages:

```bash
npm run deploy
# or
gro deploy
```

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[Svelte](https://github.com/sveltejs/svelte) ∙
[SvelteKit](https://github.com/sveltejs/kit) ∙
[Vite](https://github.com/vitejs/vite) ∙
[esbuild](https://github.com/evanw/esbuild) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[Prettier](https://github.com/prettier/prettier) ∙
[Felt](https://github.com/feltcoop/felt) ∙
[Gro](https://github.com/feltcoop/gro) ∙
[@lukeed\/\*](https://github.com/lukeed)
& [more](package.json)

## license [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain ⚘ [The Unlicense](license)
