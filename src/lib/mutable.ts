import {writable, type Readable} from 'svelte/store';

export interface Mutable<T> {
	subscribe: Readable<{value: T}>['subscribe'];
	update(updater?: MutableUpdater<T>): void;
	set(value: T): void; // typical usage is to mutate in `update`; this updates the ref if needed
}

// Returning `T` updates the `value` reference,
// but typical usage is to mutate `value` in the `MutableUpdater` and return nothing.
export interface MutableUpdater<T> {
	(value: T): void | T;
}

/**
 * Creates a store wrapping a mutable `value`.
 * Useful for values that are expensive to copy, like large `Map`s,
 * in combination with the Svelte `immutable` compiler flag.
 *
 * Typical usage mutates `value` inside the `updater` callback and returns nothing,
 * but the `updater` can return a new reference for `value`.
 * Returning `undefined` from `updater` keeps the existing `value` reference,
 * and therefore `undefined` is not a valid `value`,
 * so prefer `null` over `undefined` to represent empty values.
 * Calling `update` with no callback triggers a change,
 * which is useful if `value` is mutated elsewhere, but that's probably an antipattern.
 *
 * Unlike `fastMutable`, this implementation creates a new object wrapper value on every change.
 * This composes with code that expects immutable references on every store change,
 * but creates a bit of garbage that's sometimes avoidable,
 * but given that the contents are typically mutable, I'm not sure it matters?
 * For discussion see: https://github.com/spiderspace/spiderspace/discussions/5
 *
 * @param value {any}
 */
export const mutable = <T>(value: T): Mutable<T> => {
	const {subscribe, set} = writable({value});
	return {
		subscribe,
		update: (updater) => {
			if (updater) {
				const updated = updater(value);
				if (updated !== undefined && updated !== value) {
					value = updated;
				}
			}
			set({value});
		},
		set: (v) => {
			value = v;
			set({value});
		},
	};
};
