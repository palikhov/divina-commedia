<script context="module">
	import { t, locales, locale, loadTranslations } from '$lib/translations';
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async (params) => {
		console.log(params);
		let lang = params.url.searchParams.get('lang') || 'it';
		await loadTranslations(lang); // keep this just before the `return`
		return {};
	};
</script>

<script>
	import '../app.css';
</script>

<div class="mx-auto sticky top-0 z-50 p-2 max-w-2xl bg-amber-50 flex flex-row items-center">
	<a
		href="/?lang={$locale}"
		type="button"
		class="mr-4 px-4 py-2 text-xl font-medium rounded shadow-sm text-white bg-amber-900 hover:bg-amber-700"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
			/>
		</svg>
	</a>

	<select bind:value={$locale} class="w-full rounded border border-amber-900 bg-amber-50 py-2 px-6">
		{#each $locales as value}
			<option {value}>{$t(`lang.${value}`)}</option>
		{/each}
	</select>
</div>

<div class="mx-auto max-w-2xl pl-12 pr-0 font-serif mt-12">
	<slot />
	<div class="my-20 text-stone-500">{$t('common.copyright')}</div>
</div>
