// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import zeenGrammarFile from './src/assets/zeen.tmLanguage.json';

const zeenLanguage = {
	...zeenGrammarFile,
	aliases: ['zeen', 'zn']
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zeen',
			logo: {
				light: './public/Zeen.png',
				dark: './public/Zeen.png',
			},
			expressiveCode: {
				themes: ['kanagawa-wave'],
				shiki: {
					langs: [zeenLanguage]
				},
			},
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/landing.css',
			],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro'
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mealet/zeen' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Examples', slug: 'getting-started/examples' },
					],
				},
			],
		}),
	],
});
