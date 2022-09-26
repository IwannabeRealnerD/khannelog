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
          blogSidebarCount: "ALL",
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
          // {
          //   type: "dropdown",
          //   position: "left",
          //   label: "Develog",
          //   items: [
          //     {
          //       type: "doc",
          //       docId: "develog/index",
          //       label: "index.tsx",
          //     },
          //     {
          //       type: "doc",
          //       docId: "develog/a11y/index",
          //       label: "A11y",
          //     },
          //   ],
          // },
          { to: "/", label: "Develog", position: "left" },
          {
            type: "dropdown",
            position: "left",
            label: "Lifelog",
            items: [
              {
                type: "doc",
                docId: "lifelog/index",
                label: "index.tsx",
              },
              {
                type: "doc",
                docId: "lifelog/r1250rs/index",
                label: "R1250RS",
              },
            ],
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
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
