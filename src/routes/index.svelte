<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>{$t('common.author')} – {$t('common.title')}</title>
	<meta name="description" content="EN, IT & RU translation of Divine Comedy by Dante Alighieri" />
</svelte:head>

<h1 class="mb-6 ">
	<span class="text-2xl font-bold">{$t('common.author')}</span>
	<br />
	<span class="text-4xl font-extrabold">{$t('common.title')}</span>
</h1>

<ul class="text-xl">
	<li>
		<a href="/inferno?lang={$t('common.lang')}" class="text-orange-500 hover:text-orange-700 hover:underline">{$t('common.inferno')}</a>
	</li>
	<li>
		<a href="/purgatorio?lang={$t('common.lang')}" class="text-orange-500 line-through hover:text-orange-700 hover:underline"
			>{$t('common.purgatorio')}</a
		>
	</li>
	<li>
		<a href="/paradiso?lang={$t('common.lang')}" class="text-orange-500 line-through hover:text-orange-700 hover:underline"
			>{$t('common.paradiso')}</a
		>
	</li>
</ul>
