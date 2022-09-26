// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "khannelog",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/khannelog/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "iwannaberealnerd", // Usually your GitHub org/user name.
  projectName: "khannelog", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          routeBasePath: "/",
          blogSidebarTitle: "모든 게시글",
          blogSidebarCount: "ALL", showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "KhanneLog",
        logo: {
          alt: "",
          src: "img/logo.png",
        },
        items: [
          // { to: "/", label: "Develog", position: "left" },
          {
            type: "doc",
            docId: "r1250rs/index",
            label: "R1250RS",
          },
          {
            href: "https://iwannaberealnerd.notion.site/17a613c05d454bc8a3be44422b88599d",
            label: "내가본것",
            position: "left",
          },
          {
            href: "https://github.com/iwannaberealnerd",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/iwannaberealnerd",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} khannelog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
