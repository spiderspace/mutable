import {type Gen} from '@feltcoop/gro';
import Prism from 'prismjs';

const data = {
	A: `$writableMap.set('a', $writableMap.get('a') + 1);
$writableMap = $writableMap;`,
	B: `$writableMapCloned.set('a', $writableMapCloned.get('a') + 1);
$writableMapCloned = new Map($writableMapCloned);`,
	C: `const derivedWritableMap = derived(writableMap, ($v) => ({value: $v}));`,
	D: `mutableMap.update(($v) => {
	$v.set('a', $v.get('a') + 1);
});`,
	E: `fastMutableMap.update(($v) => {
	$v.set('a', $v.get('a') + 1);
});`,
	F1: `$mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
mutableMapManual.update();`,
	F2: `$mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
$mutableMapManual = $mutableMapManual.value;`,
	F3: `$mutableMapManual = new Map([/*...*/]);`,
	F4: `mutableMapManual.update(() => new Map([/*...*/]));`,
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
