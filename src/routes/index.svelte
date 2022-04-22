<script>
	import { t } from '$lib/translations';

	const cantos = [
		{
			number: 1,
			lenght: 136
		},
		{
			number: 2,
			lenght: 142
		}
	];

	function convertToRoman(num) {
		var roman = {
			M: 1000,
			CM: 900,
			D: 500,
			CD: 400,
			C: 100,
			XC: 90,
			L: 50,
			XL: 40,
			X: 10,
			IX: 9,
			V: 5,
			IV: 4,
			I: 1
		};
		var str = '';

		for (var i of Object.keys(roman)) {
			var q = Math.floor(num / roman[i]);
			num -= q * roman[i];
			str += i.repeat(q);
		}

		return str;
	}
</script>

<svelte:head>
	<title>{$t('common.title')} – {$t('common.author')}</title>
</svelte:head>

<h1 class="font-extrabold text-3xl mb-10">
	{$t('common.inferno')}
</h1>

{#each cantos as canto}
	<a href="#canto-{canto.number}" id="canto-{canto.number}"
		><h2 class="font-bold text-2xl my-6">
			{$t('common.canto')}
			{convertToRoman(canto.number)}
		</h2>
	</a>
	<div class="text-base md:text-lg">
		{#each { length: canto.lenght } as _, _i}
			{@const i = _i + 1}
			<p class={i % 3 === 0 ? 'mb-6' : ''}>
				<span class="text-gray-300 absolute -ml-10 unselectable">{i}</span>
				{$t('inferno.canto' + canto.number + '.' + i)}
			</p>
		{/each}
	</div>
{/each}
