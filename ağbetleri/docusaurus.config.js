// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hacı İbrahim DELİCE',
  tagline: 'Prof. Dr.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ibrahimdelice.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ibrahimdelice', // Usually your GitHub org/user name.
  projectName: 'ibrahimdelice.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'az', 'kk', 'ky', 'tk', 'ug', 'gag', 'en',],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ibrahimdelice/ibrahimdelice.github.io/edit/main/ağbetleri/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ibrahimdelice/ibrahimdelice.github.io/edit/main/ağbetleri/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ibrahim_DELİCE.png',
      navbar: {
        title: 'İbrahim DELİCE',
        logo: {
          alt: 'İbrahim DELİCE',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/makaleler',
            position: 'left',
            label: 'Makaleler',
          },
          {
            to: '/bildiriler',
            position: 'left',
            label: 'Bildiriler',
          },
          {
            to: '/kitaplar',
            position: 'left',
            label: 'Kitaplar',
          },
          {
            to: '/kitap_bolumleri',
            position: 'left',
            label: 'Kitap Bölümleri',
          },
          {
            to: '/şiirler',
            position: 'left',
            label: 'Şiirler',
          },
          { to: '/blog', label: 'Günce', position: 'left' },
          {
            href: 'https://github.com/ibrahimdelice',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/yjhvZVzEK8',
            label: 'Discord',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'İçerikler',
            items: [
              {
                to: '/makaleler/',
                label: 'Makaleler',
              },
              {
                to: '/şiirler/',    // ./docs-api/Intro.md
                label: 'Şiirler',
              },
              {
                to: '/bildiriler/',    // ./docs-api/Intro.md
                label: 'Bildiriler',
              },
              {
                to: '/kitaplar/',    // ./docs-api/Intro.md
                label: 'Kitaplar',
              },
              {
                to: '/kitap_Bolumleri/',    // ./docs-api/Intro.md
                label: 'Kitap Bölümleri',
              },
              {
                label: 'Günce',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Nerelerdeyim?',
            items: [
              {
                label: 'Facebook/hidelice',
                href: 'https://www.facebook.com/hidelice',
              },
              {
                label: 'Linkedin/hacı-ibrahim-delice-60438147',
                href: 'https://www.linkedin.com/in/hac%C4%B1-ibrahim-delice-60438147/',
              },
              {
                label: 'Twitter/ibrahimdelice',
                href: 'https://twitter.com/ibrahimdelice',
              },
            ],
          },
          {
            title: 'Daha',
            items: [

              {
                label: 'GitHub/ibrahimdelice',
                href: 'https://github.com/ibrahimdelice',
              },
            ],
          },
        ],
        copyright: `Saklıhakklar © ${new Date().getFullYear()} Hacı İbrahim DELİCE'nin resmî betlerini Volkan TAŞ Docusaurus'u kullanarak kurmuştur.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      themes: ['docusaurus-theme-search-typesense'],
      typesense: {
        // Replace this with the name of your index/collection.
        // It should match the "index_name" entry in the scraper's "config.json" file.
        typesenseCollectionName: 'docusaurus-2',

        typesenseServerConfig: {
          nodes: [
            {
              host: 'xxx-1.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
            {
              host: 'xxx-2.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
            {
              host: 'xxx-3.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'xyz',
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'shiirler',
        path: 'şiirler',
        routeBasePath: 'şiirler',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl:
            'https://github.com/ibrahimdelice/ibrahimdelice.github.io/edit/main/ağbetleri/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kitaplar',
        path: 'kitaplar',
        routeBasePath: 'kitaplar',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kitap_bolumleri',
        path: 'kitap_bolumleri',
        routeBasePath: 'kitap_bolumleri',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'bildiriler',
        path: 'bildiriler',
        routeBasePath: 'bildiriler',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'makaleler',
        path: 'makaleler',
        routeBasePath: 'makaleler',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};

module.exports = config;