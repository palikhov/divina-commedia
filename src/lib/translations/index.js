import i18n from 'sveltekit-i18n';
import lang from '$lib/translations/lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	translations: {
		it: { lang },
		en: { lang },
		ru: { lang }
	},
	loaders: [
		{
			locale: 'it',
			key: 'common',
			loader: async () => (await import('$lib/translations/it/common.json')).default
		},
		{
			locale: 'it',
			key: 'inferno',
			loader: async () => (await import('$lib/translations/it/inferno.json')).default
		},
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('$lib/translations/en/common.json')).default
		},
		{
			locale: 'en',
			key: 'inferno',
			loader: async () => (await import('$lib/translations/en/inferno.json')).default
		},
		{
			locale: 'ru',
			key: 'common',
			loader: async () => (await import('$lib/translations/ru/common.json')).default
		},
		{
			locale: 'ru',
			key: 'inferno',
			loader: async () => (await import('$lib/translations/ru/inferno.json')).default
		}
	]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);
loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
