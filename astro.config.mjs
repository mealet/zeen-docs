// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import zeenGrammarFile from './src/assets/zeen.tmLanguage.json';

const zeenLanguage = {
	...zeenGrammarFile,
	aliases: ['zeen', 'zn']
}

export const locales = {
	root: { label: 'English', lang: 'en' },
	ru: { label: 'Русский', lang: 'ru' },
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			// branding
			title: 'Zeen',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mealet/zeen' }],
			logo: {
				light: './public/Zeen.png',
				dark: './public/Zeen.png',
			},

			// i18n
			locales: locales,

			// code highlight
			expressiveCode: {
				themes: ['kanagawa-wave'],
				shiki: {
					langs: [zeenLanguage]
				},
			},

			// custom styles
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/landing.css',
			],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro'
			},

			// sidebar
			sidebar: [
				{
					label: 'Getting Started',
					translations: {
						ru: 'Начало',
					},
					items: [
						{
							label: 'Introduction',
							slug: 'getting-started/introduction',
							translations: {
								ru: 'Вступление'
							}
						},
						{
							label: 'Examples',
							slug: 'getting-started/examples',
							translations: {
								ru: 'Примеры'
							}
						},
					],
				},
			],
		}),
	],
});
