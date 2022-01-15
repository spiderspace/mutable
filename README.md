# svelte-mutable-store

> using mutable values in Svelte stores with the immutable compiler flag

> **work in progress**: experimental

| [🕸️](https://www.spiderspace.org)                                  | [🐙🐱](https://github.com/spiderspace)                                                  | 🧪                                                                          |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [**www.spiderspace.org**](https://www.spiderspace.org)             | **spiderspace/spiderspace**                                                             | Svelte; safe&serializable layout&content blocks                             |
| [spiderspace.github.io/about](https://spiderspace.github.io/about) | [spiderspace/about](https://github.com/spiderspace/about)                               | Svelte+[iconify](https://github.com/iconify); spiderspace is web prototypes |
| spiderspace.github.io/svelte-mutable-store                         | [spiderspace/svelte-mutable-store](https://github.com/spiderspace/svelte-mutable-store) | mutable values in Svelte stores with `immutable` enabled                    |

## problem?

> deployed to
> [spiderspace.github.io/svelte-mutable-store](https://spiderspace.github.io/svelte-mutable-store),
> and see also [this REPL](https://svelte.dev/repl/0d7852935b2247a89cb04255f374a309?version=3.46.1)

The `immutable` compiler flag, which is `false` by default in Svelte and SvelteKit,
can sometimes improve performance as demonstrated in this official example:
https://svelte.dev/examples/immutable-data

You can enable it app-wide in SvelteKit through the config's `compilerOptions`:
see https://kit.svelte.dev/docs#configuration
and https://svelte.dev/docs#compile-time-svelte-compile

Sounds great, right? The problem is immutability doesn't work by default with some patterns.
One such usecase I've encountered is with large arrays, maps, and similar collections.
I want reactivity when those collections change, but treating them as immutable,
and cloning on every change, is not a good solution when the collections grow large.
I could use a library that adds immutable data structures with efficient structural sharing,
but then we're no longer using plain JS values, and our related code may be incompatible.

You can enable immutability globally and opt out on a per-component basis, or vice versa,
but this is error prone and adds a lot of mental overhead.
Can we get the best of both worlds, and keep the immutable flag enabled globally
while treating the collections as reactive mutable values?

This REPL demonstrates two custom stores to help solve this problem.
The solutions are imperfect and I could use some help and feedback.
There are additional notes and questions at the end of the page.

example: https://svelte.dev/examples/immutable-data

the `immutable` compiler option: https://svelte.dev/docs#template-syntax-svelte-options

SvelteKit or bundler config: `immutable: true`

Svelte component override: `<svelte:options immutable={true}>`

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

## solution?

https://svelte.dev/repl/0d7852935b2247a89cb04255f374a309?version=3.46.1

Why make a video? This is complex and I need help and opinions.
I don't have a blogging setup but maybe this would be a good first post.
It's both a niche and advanced topic,
particularly because Svelte defaults to `immutable: false`.

- usecases:
  - large maps and arrays of stores (client-side indexes of reactive backend state)
- implementations
  - `mutable` that tries to be efficient (maybe too clever)
  - `pure` that is slightly less efficient than `mutable`
- questions
  - is `mutable` a footgun?
  - names?
  - `set` method? (maybe for `bind:` patterns?)
- want to help?
  - please share your thoughts on Twitter or YouTube!
  - if you'd prefer to discuss privately, email me at mail@ryanatkn.com
- see also
  - Twitter poll
  - lihautan's immer video

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
