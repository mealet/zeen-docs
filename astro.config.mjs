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
			// branding
			title: 'Zeen',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mealet/zeen' }],
			logo: {
				light: './public/Zeen.png',
				dark: './public/Zeen.png',
			},

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
				// Getting Started
				{
					label: 'Getting Started',
					items: [
						{
							label: 'Introduction',
							slug: 'getting-started/introduction',
						},
						{
							label: 'Installation',
							slug: 'getting-started/installation',
						},
						{
							label: 'Compiler CLI',
							slug: 'getting-started/compiler-cli',
						},
						{
							label: 'Examples',
							slug: 'getting-started/examples',
						},
					],
				},

				// Language Basics
				{
					label: 'Language Basics',
					items: [
						{
							label: 'Zeen Modules',
							slug: 'language-basics/zeen-modules',
						},
						{
							label: 'Basic Types',
							slug: 'language-basics/basic-types',
						},
						{
							label: 'Constant Literals',
							slug: 'language-basics/constant-literals',
						},
						{
							label: 'Variables and Bindings',
							slug: 'language-basics/variables-and-bindings',
						},
						{
							label: 'Operators',
							slug: 'language-basics/operators',
						},
						{
							label: 'Constructions',
							slug: 'language-basics/constructions',
						},
						{
							label: 'Arrays, Slices and Ranges',
							slug: 'language-basics/arrays-slices-ranges',
						},
						{
							label: 'Pointers',
							slug: 'language-basics/pointers',
						},
					],
				},

				// Functions & Closures
				{
					label: 'Functions & Closures',
					items: [
						{
							label: 'Functions',
							slug: 'functions-closures/functions',
						},
						{
							label: 'Closures',
							slug: 'functions-closures/closures',
						},
						{
							label: 'Structures and Methods',
							slug: 'functions-closures/structures-and-methods',
						},
						{
							label: 'Enums',
							slug: 'functions-closures/enums',
						},
						{
							label: 'Switch',
							slug: 'functions-closures/switch',
						},
						{
							label: 'Type Aliases',
							slug: 'functions-closures/type-aliases',
						},
						{
							label: 'Imports and Visibility',
							slug: 'functions-closures/imports-and-visibility',
						},
						{
							label: 'Extern',
							slug: 'functions-closures/extern',
						},
						{
							label: 'Builtin Macros',
							slug: 'functions-closures/macros-builtin',
						},
					],
				},

				// Ownership & Types
				{
					label: 'Ownership & Types',
					items: [
						{
							label: 'Stack and Heap',
							slug: 'ownership-types/stack-and-heap',
						},
						{
							label: 'Move Semantics',
							slug: 'ownership-types/move-semantics',
						},
						{
							label: 'Generic Types',
							slug: 'ownership-types/generic-types',
						},
						{
							label: 'User Interfaces',
							slug: 'ownership-types/user-interfaces',
						},
						{
							label: 'Compiler Interfaces',
							slug: 'ownership-types/compiler-interfaces',
						},
						{
							label: 'Printing and Formatting',
							slug: 'ownership-types/printing-formatting',
						},
						{
							label: 'Iterators',
							slug: 'ownership-types/iterators',
						},
					],
				},

				// Library
				{
					label: 'Library',
					collapsed: true,
					items: [
						{
							label: 'core',
							collapsed: true,
							items: [
								{
									label: 'io',
									slug: 'library/core/io',
								},
								{
									label: 'iter',
									slug: 'library/core/iter',
								},
								{
									label: 'ops',
									slug: 'library/core/ops',
								},
								{
									label: 'option',
									slug: 'library/core/option',
								},
								{
									label: 'result',
									slug: 'library/core/result',
								},
								{
									label: 'slice',
									slug: 'library/core/slice',
								},
							],
						},
						{
							label: 'std',
							collapsed: true,
							items: [
								{
									label: 'collections/',
									collapsed: true,
									items: [
										{
											label: 'list',
											slug: 'library/std/collections/list',
										},
										{
											label: 'map',
											slug: 'library/std/collections/map',
										},
										{
											label: 'set',
											slug: 'library/std/collections/set',
										},
									],
								},
								{
									label: 'c/',
									collapsed: true,
									items: [
										{
											label: 'Overview',
											slug: 'library/std/c/overview',
										},
										{
											label: 'Libc',
											slug: 'library/std/c/libc',
										},
										{
											label: 'Posix',
											slug: 'library/std/c/posix',
										},
										{
											label: 'Windows',
											slug: 'library/std/c/windows',
										},
									],
								},
								{
									label: 'alloc',
									slug: 'library/std/alloc',
								},
								{
									label: 'fn',
									slug: 'library/std/fn',
								},
								{
									label: 'fs',
									slug: 'library/std/fs',
								},
								{
									label: 'http',
									slug: 'library/std/http',
								},
								{
									label: 'io',
									slug: 'library/std/io',
								},
								{
									label: 'math',
									slug: 'library/std/math',
								},
								{
									label: 'meta',
									slug: 'library/std/meta',
								},
								{
									label: 'net',
									slug: 'library/std/net',
								},
								{
									label: 'ptr',
									slug: 'library/std/ptr',
								},
								{
									label: 'string',
									slug: 'library/std/string',
								},
							],
						},
					],
				},

				// Toolchain
				{
					label: 'Toolchain',
					items: [
						{
							label: 'Linking',
							slug: 'toolchain/linking',
						},
						{
							label: 'Conditional Compilation',
							slug: 'toolchain/conditional-compilation',
						},
					],
				},
			],
		}),
	],
});
