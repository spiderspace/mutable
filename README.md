# mutable

> using mutable values in Svelte stores with the `immutable` compiler option

> **work in progress**: experimental

| [🕸️](https://www.spiderspace.org)                                      | [🐙🐱](https://github.com/spiderspace)                                | 🧪                                                                          |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [www.spiderspace.org](https://www.spiderspace.org)                     | [spiderspace/spiderspace](https://github.com/spiderspace/spiderspace) | Svelte; safe&serializable layout&content blocks                             |
| [spiderspace.github.io/about](https://spiderspace.github.io/about)     | [spiderspace/about](https://github.com/spiderspace/about)             | Svelte+[iconify](https://github.com/iconify); spiderspace is web prototypes |
| [spiderspace.github.io/mutable](https://spiderspace.github.io/mutable) | **spiderspace/mutable**                                               | Svelte; mutable store values w/ `immutable` on                              |

## who is this for?

Svelte users using
[the `immutable` compiler option](https://svelte.dev/docs#compile-time-svelte-compile)
who either:

- want to optimize their apps' performance for usecases like large collections without
  turning to heavyweight opinionated immutable data structures libraries
- need to use unclonable objects like
  [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
  in stores without breaking their reactivity in components

> How many users opt in to use the `immutable` compiler option?
> I made [this Twitter poll](https://twitter.com/ryanatkn/status/1482390036943360010)
> to get an idea, but remember, it's just a selection of Twitter users.

## problem?

The [`immutable` compiler option](https://svelte.dev/docs#compile-time-svelte-compile),
which is `false` by default in Svelte and SvelteKit,
can sometimes improve performance as demonstrated in
[the official example](https://svelte.dev/examples/immutable-data).
To learn more, see
[this section below](https://github.com/spiderspace/mutable#more-about-immutable).

Better performance you say? Sounds great, right?
Unfortunately immutability is incompatible with some common patterns.

Many Svelte developers prefer to write code that mutates objects,
and the language makes this very terse, like binding to store properties.
(e.g. `<input bind:value={$store.text} />`)
Let's consider this class of problem solvable; developers who choose immutability
will need to avoid certain kinds of mutation. That's just part of the deal.

However, immutability also causes problems in two cases that motivated this library:

1. putting an unclonable object like a
   [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
   in a store and expecting reactivity to work -- see
   [this minimal REPL example](https://svelte.dev/repl/32ab0ddd41734ca0872a641dd5d8b55f?version=3.46.2)
2. large arrays, maps, and other collections that are too expensive to copy,
   where mutation is acceptable if we can get store reactivity to work
   in components with `immutable` enabled

To address the second usecase, we could use a library with efficient immutable data structures,
but then we're no longer using plain JS values
and our related code and familiar patterns may be incompatible.
Libraries like [Immutable.js](https://github.com/immutable-js/immutable-js/)
have APIs that diverge from plain JS data structures,
and they're not light dependencies. (version 4 is 65k minified)
Libraries like [Immer](https://github.com/immerjs/immer)
make our normal JS code _mostly_ compatible, but they're inefficient for large collections;
we want to avoid copying large data structures.

And furthermore, libraries like Immutable.js and Immer do not work with with `WeakMap`s,
so neither works for the first usecase.
(however niche the usecases may be, I have them!
hence this overly detailed document that will interest few people)

We could try to enable `immutable` globally and opt out on a per-component basis, or vice versa,
but this is error prone and adds a lot of mental overhead,
and it loses the efficiency of the `immutable` option for the rest of the component.
If you enable `immutable` globally and forget to disable it
in a component where you use a `WeakMap` in a `writable`, for example,
your component will silently not react to changes;
silent bugs can be quite painful.
Overall I think it's best to wrap corner case objects with a custom store,
so the mental overhead is localized to each data object.

Is there a sweet spot for these usecases? Can we enable the immutable option globally
while treating large collections as reactive mutable values?

## solution?

This project proposes two custom stores to address the usecases outlined above:
[`mutable`](/src/lib/mutable.ts) and
[`fastMutable`](src/lib/fastMutable.ts).
The solutions (and this document) are a WIP and
[I could use some help and feedback](https://github.com/spiderspace/spiderspace/discussions/5).
The stores' code is trivial, but there's a bunch of details to think through,
and the main goals of this repo are to 1) develop good answers for the two usescases,
and 2) better understand the subtleties of the `immutable` option.

The code is deployed to
[spiderspace.github.io/mutable](https://spiderspace.github.io/mutable).
There's also
[a REPL demo](https://svelte.dev/repl/0d7852935b2247a89cb04255f374a309?version=3.46.1)
but I'm no longer updating it.

- usecases with `immutable` enabled:
  - `WeakMap` and similar mutable unclonable objects in stores
  - large mutable maps, arrays, and other collections
    (often containing stores, like for client-side indexes of reactive backend state)
- implementations
  - [`mutable`](/src/lib/mutable.ts),
    that wraps every store change in a new object reference as a `value` property
  - [`fastMutable`](/src/lib/fastMutable.ts) that tries to be efficient
    (maybe [too clever](https://github.com/spiderspace/spiderspace/discussions/5))
- want to help?
  - visit [the spiderspace discussion post](https://github.com/spiderspace/spiderspace/discussions/5)
  - share your thoughts on Twitter or YouTube (TODO make a video and tweet?)
  - if you'd prefer to discuss privately, email me at mail at ryanatkn.com
- see also
  - [Twitter poll](https://twitter.com/ryanatkn/status/1482390036943360010)
    asking users if/how they use `immutable`

## discussion and questions

See [this GitHub discussion](https://github.com/spiderspace/spiderspace/discussions/5)
for the questions I'm trying to answer.
Your input is appreciated!

## more about `immutable`

Svelte defaults to `immutable: false`, so
[most Svelte developers don't use it](https://twitter.com/ryanatkn/status/1482390036943360010),
and the usecases outlined above are niche.
The [official example](https://svelte.dev/examples/immutable-data) demonstrates why you might care.
Here's how [the docs](https://svelte.dev/docs#compile-time-svelte-compile)
describe the feature:

> If `true`, tells the compiler that you promise not to mutate any objects.
> This allows it to be less conservative about checking whether values have changed.

### how to enable `immutable`?

Two ways:

1. globally: set `immutable: true` in the
   [SvelteKit config](https://kit.svelte.dev/docs#configuration).
   See this project's [`svelte.config.js`](/svelte.config.js) for an example.
2. locally per component:
   [`<svelte:options immutable={true} />`](https://svelte.dev/docs#template-syntax-svelte-options)

### how does `immutable` work?

The option
[tells the Svelte compiler to swap](https://github.com/sveltejs/svelte/blob/a4e4027f794dad93bcd6ffd74c1a19a9ce9ef6ac/src/compiler/compile/render_dom/index.ts#L122)
this function:

[sveltejs/svelte/src/runtime/internal/utils.ts](https://github.com/sveltejs/svelte/blob/a4e4027f794dad93bcd6ffd74c1a19a9ce9ef6ac/src/runtime/internal/utils.ts#L39)

```js
export function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}
```

for this one:

[svelte/svelte/src/runtime/internal/utils.ts](https://github.com/sveltejs/svelte/blob/a4e4027f794dad93bcd6ffd74c1a19a9ce9ef6ac/src/runtime/internal/utils.ts#L53)

```js
export function not_equal(a, b) {
	return a != a ? b == b : a !== b;
}
```

The difference is this clause:

```js
|| (a && typeof a === 'object') || typeof a === 'function'
```

With `immutable` enabled, objects and functions are compared with `===`.
With it disabled, the code has to assume objects and functions change every time they're checked.

### `immutable` recipe?

SvelteSociety has a recipe on
["Using the `immutable` Compiler Option"](https://sveltesociety.dev/recipes/svelte-language-fundamentals/options-immutable).
I was disappointed to discover that the content was written mostly by me,
from a while back, and it could use some love.
It explains the basics, but doesn't explore related patterns and issues.
This document (and
[code](https://spiderspace.github.io/mutable)?)
may be suitable for repurposing into a recipe,
and the license is public domain so anyone can do whatever with it.
The main problem with making this a recipe
is that it's written as two documents with different content:
a markdown readme and [a deployed Svelte website](https://spiderspace.github.io/mutable).

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

This project uses [`prismjs`](https://github.com/PrismJS/prism/)
to generate static HTML at buildtime for syntax highlighting,
so no runtime scripts are needed.
It'd be neat to do this without
[the roundabout codegen strategy](/src/lib/examples.gen.json.ts) assisted by
[Gro](https://github.com/feltcoop/gro/blob/main/src/docs/gen.md),
and instead have all of the code inline in the components.
(but without adding runtime JS!)

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
