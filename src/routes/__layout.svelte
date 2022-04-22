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

<div class="mx-auto max-w-6xl p-16 font-serif">
	<div class="mb-10">
		<select bind:value={$locale} class="border rounded py-2 px-6">
			{#each $locales as value}
				<option {value}>{$t(`lang.${value}`)}</option>
			{/each}
		</select>
	</div>
	<slot />
</div>
