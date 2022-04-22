<script context="module">
	import { t, locales, locale, loadTranslations } from '$lib/translations';
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async () => {
		const initialLocale = 'it'; // get from cookie / url / fetch from server...
		await loadTranslations(initialLocale); // keep this just before the `return`
		return {};
	};
</script>

<script>
	import '../app.css';
	import { writable } from 'svelte/store';
	const count = writable(3);
</script>

<div class="sticky top-0 z-50 mb-10 bg-gray-100">
	<select bind:value={$locale} class="w-full rounded border py-2 px-6">
		{#each $locales as value}
			<option {value}>{$t(`lang.${value}`)}</option>
		{/each}
	</select>
</div>

<div class="mx-auto max-w-6xl pl-12 pr-0 font-serif">
	<slot />
</div>
