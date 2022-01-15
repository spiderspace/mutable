import {writable, type Readable} from 'svelte/store';

export interface Mutable<T> {
	subscribe: Readable<{value: T}>['subscribe'];
	update(updater?: MutableUpdater<T>): void;
	set(value: T): void;
}

// Returning `T` updates the `value` reference,
// but typical usage is to mutate `value` in the `MutableUpdater` and return nothing.
export interface MutableUpdater<T> {
	(value: T): void | T;
}

/**
 * Creates a store wrapping a mutable `value`.
 * See the sibling "mutable" store for more docs.
 *
 * To avoid unnecessary garbage creation,
 * the implementation swaps between two stable object references.
 * This breaks composability with code that
 * expects immutable references on every store change,
 * which may be too error prone for common usage.
 * See the alternative "mutable" (no "fast" prefix) version of this store
 * that creates a new wrapper object on every change.
 *
 * @param value {any}
 */
export const fastMutable = <T>(value: T): Mutable<T> => {
	let swap = false;
	const a = {value};
	const b = {value};

	const {subscribe, set} = writable(/*<{value: T}>*/ a);

	return {
		subscribe,
		update: (updater) => {
			if (updater) {
				const updated = updater(value);
				if (updated !== undefined && updated !== value) {
					value = a.value = b.value = updated;
				}
			}
			set((swap = !swap) ? b : a);
		},
		set: (v) => {
			value = a.value = b.value = v;
			set((swap = !swap) ? b : a);
		},
	};
};
