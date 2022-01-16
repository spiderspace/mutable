import {type Gen} from '@feltcoop/gro';
import Prism from 'prismjs';

const data = {
	ADef: `const writableMap = writable(new Map(data));`,
	ARead: `$writableMap.get('a')`,
	AWrite: `$writableMap.set('a', $writableMap.get('a') + 1);
$writableMap = $writableMap;`,
	BDef: `const writableMapCloned = writable(new Map(data));`,
	BRead: `$writableMapCloned.get('a')`,
	BWrite: `$writableMapCloned.set('a', $writableMapCloned.get('a') + 1);
$writableMapCloned = new Map($writableMapCloned);`,
	CDef: `const derivedWritableMap = derived(writableMap, ($v) => ({value: $v}));`,
	CRead: `$derivedWritableMap.value.get('a')`,
	DDef: `const mutableMap = mutable(new Map(data));`,
	DRead: `$mutableMap.value.get('a')`,
	DWrite: `mutableMap.update(($v) => {
	$v.set('a', $v.get('a') + 1);
});`,
	EDef: `const fastMutableMap = fastMutable(new Map(data));`,
	ERead: `$fastMutableMap.value.get('a')`,
	EWrite: `fastMutableMap.update(($v) => {
	$v.set('a', $v.get('a') + 1);
});`,
	FDef: `const mutableMapManual = mutable(new Map(data));`,
	FRead: `$mutableMapManual.value.get('a')`,
	F1Write: `$mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
mutableMapManual.update();`,
	F2Write: `$mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
$mutableMapManual = $mutableMapManual.value;`,
	F3Write: `$mutableMapManual = new Map([/*...*/]);`,
	F4Write: `mutableMapManual.update(() => new Map([/*...*/]));`,
};

export const gen: Gen = async () => {
	return `
{
  ${Object.entries(data)
		.map(
			([key, value]) =>
				`${JSON.stringify(key)}: ${JSON.stringify(
					Prism.highlight(value, Prism.languages.javascript, 'javascript'),
				)}`,
		)
		.join(',')}
}
`.trim();
};
