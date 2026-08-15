// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import starlightRosePine from 'starlight-theme-rose-pine';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zeen',
			// plugins: [starlightRosePine()],
			logo: {
				light: './src/assets/Zeen.png',
				dark: './src/assets/Zeen.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mealet/zeen' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
