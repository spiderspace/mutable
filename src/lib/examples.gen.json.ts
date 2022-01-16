import {type Gen} from '@feltcoop/gro';
import Prism from 'prismjs';

const data = {
	ARead: `$writableMap.get('a')`,
	AWrite: `$writableMap.set('a', $writableMap.get('a') + 1);
$writableMap = $writableMap;`,
	BRead: `$writableMapCloned.get('a')`,
	BWrite: `$writableMapCloned.set('a', $writableMapCloned.get('a') + 1);
$writableMapCloned = new Map($writableMapCloned);`,
	CRead: `$derivedWritableMap.value.get('a')`,
	CWrite: `const derivedWritableMap = derived(writableMap, ($v) => ({value: $v}));`,
	DRead: `$mutableMap.value.get('a')`,
	DWrite: `mutableMap.update(($v) => {
	$v.set('a', $v.get('a') + 1);
});`,
	ERead: `$fastMutableMap.value.get('a')`,
	EWrite: `fastMutableMap.update(($v) => {
	$v.set('a', $v.get('a') + 1);
});`,
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
