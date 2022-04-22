<script>
	import { t } from '$lib/translations';
	import { page } from '$app/stores';

	let book = $page.params.book;

	let cantos = [];

	if (book == 'inferno') {
		cantos = [
			{
				number: 1,
				lenght: 136
			},
			{
				number: 2,
				lenght: 142
			}
		];
	} else if (book == 'purgatory') {
		cantos = [
			{
				number: 1,
				lenght: 136
			},
			{
				number: 2,
				lenght: 142
			}
		];
	} else {
		cantos = [
			{
				number: 1,
				lenght: 136
			},
			{
				number: 2,
				lenght: 142
			}
		];
	}
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
	<title>{$t('common.' + book)} - {$t('common.title')}</title>
	<meta name="description" content="{$t('common.author')} - {$t('common.title')} - {$t('common.' + book)} " />
</svelte:head>

<h1 class="mb-6 text-3xl font-extrabold">
	{$t('common.' + book)}
</h1>

<ul>
	{#each cantos as canto}
		<li>
			<a class="text-orange-500 hover:underline hover:text-orange-700" href="#canto-{canto.number}"
				>{$t('common.canto')} {convertToRoman(canto.number)}</a
			>
		</li>
	{/each}
</ul>

{#each cantos as canto}
	<a href="#canto-{canto.number}" id="canto-{canto.number}"
		><h2 class="mb-6 pt-20 text-2xl font-bold">
			{$t('common.canto')}
			{convertToRoman(canto.number)}
		</h2>
	</a>
	<div class="text-base md:text-xl">
		{#each { length: canto.lenght } as _, _i}
			{@const i = _i + 1}
			<p class={i % 3 === 0 ? 'mb-6' : ''}>
				<span class="unselectable absolute -ml-10 text-stone-300">{i}</span>
				{$t(book + '.canto' + canto.number + '.' + i)}
			</p>
		{/each}
	</div>
{/each}
