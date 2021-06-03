import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import { navbar, sidebar } from './configs/index';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/', // 用于部署时的子路径
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/logo.png`,
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'English',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: '中文',
    },
  },
  themeConfig: {
    logo: '/images/icon.png',
    repo: 'vuepress/vuepress-next',
    docsDir: 'docs',
    locales: {
      '/en/': {

      },
      '/zh/': {
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        sidebar: sidebar.zh,
      }
    }
  },
  plugins: [
    // ['@vuepress/plugin-debug'],
    // [
    //   '@vuepress/plugin-docsearch',
    //   {
    //     apiKey: '3a539aab83105f01761a137c61004d85',
    //     indexName: 'vuepress',
    //     searchParameters: {
    //       facetFilters: ['tags:v2'],
    //     },
    //     locales: {
    //       '/zh/': {
    //         placeholder: '搜索文档',
    //       },
    //     },
    //   },
    // ],
  ]
})