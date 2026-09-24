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
				// Getting Started
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
							label: 'Installation',
							slug: 'getting-started/installation',
							translations: {
								ru: 'Установка'
							}
						},
						{
							label: 'Compiler CLI',
							slug: 'getting-started/compiler-cli',
							translations: {
								ru: 'Компилятор CLI'
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

				// Language Basics
				{
					label: 'Language Basics',
					translations: {
						ru: 'Основы языка',
					},
					items: [
						{
							label: 'Zeen Modules',
							slug: 'language-basics/zeen-modules',
							translations: {
								ru: 'Модули в Zeen'
							}
						},
						{
							label: 'Basic Types',
							slug: 'language-basics/basic-types',
							translations: {
								ru: 'Базовые Типы'
							}
						},
						{
							label: 'Constant Literals',
							slug: 'language-basics/constant-literals',
							translations: {
								ru: 'Литералы'
							}
						},
						{
							label: 'Variables and Bindings',
							slug: 'language-basics/variables-and-bindings',
							translations: {
								ru: 'Переменные и Привязки'
							}
						},
						{
							label: 'Operators',
							slug: 'language-basics/operators',
							translations: {
								ru: 'Операторы'
							}
						},
						{
							label: 'Constructions',
							slug: 'language-basics/constructions',
							translations: {
								ru: 'Конструкции'
							}
						},
						{
							label: 'Arrays, Slices and Ranges',
							slug: 'language-basics/arrays-slices-ranges',
							translations: {
								ru: 'Массивы, Слайсы и Диапазоны'
							}
						},
						{
							label: 'Pointers',
							slug: 'language-basics/pointers',
							translations: {
								ru: 'Указатели'
							}
						},
					],
				},

				// Functions & Closures
				{
					label: 'Functions & Closures',
					translations: {
						ru: 'Функции и Замыкания',
					},
					items: [
						{
							label: 'Functions',
							slug: 'functions-closures/functions',
							translations: {
								ru: 'Функции'
							}
						},
						{
							label: 'Closures',
							slug: 'functions-closures/closures',
							translations: {
								ru: 'Замыкания'
							}
						},
						{
							label: 'Structures and Methods',
							slug: 'functions-closures/structures-and-methods',
							translations: {
								ru: 'Структуры и Методы'
							}
						},
						{
							label: 'Enums',
							slug: 'functions-closures/enums',
							translations: {
								ru: 'Перечисления (enums)'
							}
						},
						{
							label: 'Switch',
							slug: 'functions-closures/switch',
							translations: {
								ru: 'Switch'
							}
						},
						{
							label: 'Type Aliases',
							slug: 'functions-closures/type-aliases',
							translations: {
								ru: 'Алиасы типов'
							}
						},
						{
							label: 'Imports and Visibility',
							slug: 'functions-closures/imports-and-visibility',
							translations: {
								ru: 'Импорты и Публичность'
							}
						},
						{
							label: 'Extern',
							slug: 'functions-closures/extern',
							translations: {
								ru: 'Сторонние элементы (extern)'
							}
						},
						{
							label: 'Builtin Macros',
							slug: 'functions-closures/macros-builtin',
							translations: {
								ru: 'Встроенные макросы'
							}
						},
						{
							label: 'Conditional Compilation',
							slug: 'functions-closures/conditional-compilation',
							translations: {
								ru: 'Условная компиляция'
							}
						},
					],
				},

				// Ownership & Types
				{
					label: 'Ownership & Types',
					translations: {
						ru: 'Владение и Типы',
					},
					items: [
						{
							label: 'Stack and Heap',
							slug: 'ownership-types/stack-and-heap',
							translations: {
								ru: 'Стэк и Куча'
							}
						},
						{
							label: 'Move Semantics',
							slug: 'ownership-types/move-semantics',
							translations: {
								ru: 'Move Семантика'
							}
						},
						{
							label: 'Generic Types',
							slug: 'ownership-types/generic-types',
							translations: {
								ru: 'Общие Типы (Generic)'
							}
						},
						{
							label: 'User Interfaces',
							slug: 'ownership-types/user-interfaces',
							translations: {
								ru: 'Пользовательские Интерфейсы'
							}
						},
						{
							label: 'Compiler Interfaces',
							slug: 'ownership-types/compiler-interfaces',
							translations: {
								ru: 'Интерфейсы Компилятора'
							}
						},
						{
							label: 'Printing and Formatting',
							slug: 'ownership-types/printing-formatting',
							translations: {
								ru: 'Печать и Форматирование'
							}
						},
						{
							label: 'Iterators',
							slug: 'ownership-types/iterators',
							translations: {
								ru: 'Итераторы'
							}
						},
					],
				},

				// Library
				{
					label: 'Library',
					translations: {
						ru: 'Библиотека',
					},
					collapsed: true,
					items: [
						{
							label: 'core',
							translations: {
								ru: 'core',
							},
							collapsed: true,
							items: [
								{
									label: 'ops',
									slug: 'library/core/ops',
									translations: { ru: 'ops' }
								},
								{
									label: 'io',
									slug: 'library/core/io',
									translations: { ru: 'io' }
								},
								{
									label: 'option',
									slug: 'library/core/option',
									translations: { ru: 'option' }
								},
								{
									label: 'result',
									slug: 'library/core/result',
									translations: { ru: 'result' }
								},
								{
									label: 'iter',
									slug: 'library/core/iter',
									translations: { ru: 'iter' }
								},
								{
									label: 'slice',
									slug: 'library/core/slice',
									translations: { ru: 'slice' }
								},
							],
						},
						{
							label: 'std',
							translations: {
								ru: 'std',
							},
							collapsed: true,
							items: [
								{
									label: 'collections/',
									translations: {
										ru: 'collections/',
									},
									collapsed: true,
									items: [
										{
											label: 'list',
											slug: 'library/std/collections/list',
											translations: { ru: 'list' }
										},
										{
											label: 'map',
											slug: 'library/std/collections/map',
											translations: { ru: 'map' }
										},
										{
											label: 'set',
											slug: 'library/std/collections/set',
											translations: { ru: 'set' }
										},
									],
								},
								{
									label: 'c/',
									translations: {
										ru: 'c/',
									},
									collapsed: true,
									items: [
										{
											label: 'overview',
											slug: 'library/std/c/overview',
											translations: { ru: 'overview' }
										},
										{
											label: 'libc',
											slug: 'library/std/c/libc',
											translations: { ru: 'libc' }
										},
										{
											label: 'posix',
											slug: 'library/std/c/posix',
											translations: { ru: 'posix' }
										},
										{
											label: 'windows',
											slug: 'library/std/c/windows',
											translations: { ru: 'windows' }
										},
									],
								},
								{
									label: 'alloc',
									slug: 'library/std/alloc',
									translations: { ru: 'alloc' }
								},
								{
									label: 'fn',
									slug: 'library/std/fn',
									translations: { ru: 'fn' }
								},
								{
									label: 'string',
									slug: 'library/std/string',
									translations: { ru: 'string' }
								},
								{
									label: 'math',
									slug: 'library/std/math',
									translations: { ru: 'math' }
								},
								{
									label: 'meta',
									slug: 'library/std/meta',
									translations: { ru: 'meta' }
								},
								{
									label: 'io',
									slug: 'library/std/io',
									translations: { ru: 'io' }
								},
								{
									label: 'fs',
									slug: 'library/std/fs',
									translations: { ru: 'fs' }
								},
								{
									label: 'net',
									slug: 'library/std/net',
									translations: { ru: 'net' }
								},
								{
									label: 'http',
									slug: 'library/std/http',
									translations: { ru: 'http' }
								},
							],
						},
					],
				},

				// Toolchain
				{
					label: 'Toolchain',
					translations: {
						ru: 'Тулчейн',
					},
					items: [
						{
							label: 'Targets',
							slug: 'toolchain/targets',
							translations: {
								ru: 'Таргеты'
							}
						},
						{
							label: 'Linking',
							slug: 'toolchain/linking',
							translations: {
								ru: 'Линковка'
							}
						},
					],
				},
			],
		}),
	],
});
