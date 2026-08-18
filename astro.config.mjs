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
							label: 'Examples',
							slug: 'getting-started/examples',
							translations: {
								ru: 'Примеры'
							}
						},
						{
							label: 'Installation',
							slug: 'getting-started/installation',
							translations: {
								ru: 'Установка'
							}
						}
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
							label: 'Basic Types',
							slug: 'language-basics/basic-types',
							translations: {
								ru: 'Базовые Типы'
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

				// Advanced Declarations
				{
					label: 'Advanced Declarations',
					translations: {
						ru: 'Продвинутые декларации',
					},
					items: [
						{
							label: 'Functions',
							slug: 'advanced-declarations/functions',
							translations: {
								ru: 'Функции'
							}
						},

						{
							label: 'Imports and Visibility',
							slug: 'advanced-declarations/imports-and-visibility',
							translations: {
								ru: 'Импорты и Публичность'
							}
						},

						{
							label: 'Structures and Methods',
							slug: 'advanced-declarations/structures-and-methods',
							translations: {
								ru: 'Структуры и Методы'
							}
						},

						{
							label: 'Enums',
							slug: 'advanced-declarations/enums',
							translations: {
								ru: 'Перечисления (enums)'
							}
						},

						{
							label: 'Extern Elements',
							slug: 'advanced-declarations/extern-elements',
							translations: {
								ru: 'Сторонние элементы (extern)'
							}
						},
					],
				},

				{
					label: 'Advanced Type System',
					translations: {
						ru: 'Продвинутые декларации',
					},
					items: [
						{
							label: 'Stack and Heap',
							slug: 'advanced-type-system/stack-and-heap',
							translations: {
								ru: 'Стэк и Куча'
							}
						},

						{
							label: 'Move Semantics',
							slug: 'advanced-type-system/move-semantics',
							translations: {
								ru: 'Move Семантика'
							}
						},

						{
							label: 'User Interfaces',
							slug: 'advanced-type-system/user-interfaces',
							translations: {
								ru: 'Пользовательские Интерфейсы'
							}
						},

						{
							label: 'Compiler Interfaces',
							slug: 'advanced-type-system/compiler-interfaces',
							translations: {
								ru: 'Интерфейсы Компилятора'
							}
						},

						{
							label: 'Generic Types',
							slug: 'advanced-type-system/generic-types',
							translations: {
								ru: 'Общие Типы (Generic)'
							}
						},
					],
				},
			],
		}),
	],
});
