"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7706],{5228:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"turborepo_with_pnpm","metadata":{"permalink":"/khannelog/blog/turborepo_with_pnpm","source":"@site/blog/2022-08-21/1. turborepo_with_pnpm.mdx","title":"Turborpo\uc640 pnpm","description":"\u26bd\ufe0f \ubaa9\ud45c","date":"2022-08-21T00:00:00.000Z","formattedDate":"2022\ub144 8\uc6d4 21\uc77c","tags":[{"label":"pnpm","permalink":"/khannelog/blog/tags/pnpm"},{"label":"turborepo","permalink":"/khannelog/blog/tags/turborepo"},{"label":"monorepo","permalink":"/khannelog/blog/tags/monorepo"}],"readingTime":2.83,"hasTruncateMarker":true,"authors":[{"name":"khanne wayne","url":"https://github.com/IwannabeRealnerD","email":"iwannaberealnerd@gmail.com","imageURL":"https://avatars.githubusercontent.com/u/71207364?s=400&u=58acb862819034f1b588b088dcfe1c6b345ae272&v=4","key":"khanne"}],"frontMatter":{"title":"Turborpo\uc640 pnpm","slug":"turborepo_with_pnpm","authors":"khanne","tags":["pnpm","turborepo","monorepo"]},"nextItem":{"title":"pnpm vs yarn-berry","permalink":"/khannelog/blog/pnpm_vs_yarn-berry"}},"content":"## \u26bd\ufe0f \ubaa9\ud45c\\n\\n---\\n\\n:::info **`pnpm`**\uacfc \ud568\uaed8 **`Turborpo`**\ub97c \uc0ac\uc6a9\ud574 \ubcf4\uc790!\\n:::\\n\\n\x3c!--truncate--\x3e\\n\\n## \uc65c Turborepo\ub791 pnpm\uc774\uc57c?\\n\\n---\\n\\n### pnpm\\n\\n- \uc774\uc804 \uae00\uc5d0\uc11c \uc77d\uc5c8\ub358 pnpm\uc758 \uc7a5\uc810\uacfc \ucd94\uac00\ub85c\\n  - \uc77c\ub2e8 \ube60\ub974\uace0 \uacb9\uce58\ub294 node \ud328\ud0a4\uc9c0\ub4e4\uc744 hardlink, symlink\ub97c \uc774\uc6a9\ud558\uc5ec \ud574\uacb0\ud558\uae30 \ub54c\ubb38\uc5d0 \uc6a9\ub7c9 \uad00\ub9ac \uac00\ub2a5!\\n  - node_modules\uac00 hoisting \ub418\uc9c0 \uc54a\uc544 \uc720\ub839 \uc758\uc874\uc131 \ud574\uacb0 - \uc635\uc158\uc73c\ub85c hoisting \uac00\ub2a5\\n- yarn berry \ubcf4\ub2e4 \uc544\uc9c1 \uae4c\uc9c4 \uc0c1\ub300\uc801\uc73c\ub85c migration\uc5d0 \ub300\ud55c \uc704\ud5d8\uc131\uc774 \ub0ae\uc74c -> node_modules\ub97c \uc0ac\uc6a9\ud558\ub294\uac74 \uc5ec\uc804\ud788 \ub611\uac19\uc73c\ub2c8, \uc740\uadfc pnp \uae30\ub2a5\uc774 \uc544\uc9c1 \uae4c\uc9c0 \ubb38\uc81c\ub97c \ub9ce\uc774 \uc77c\uc73c\ud0b4\\n\\n### turborepo\\n\\n:::info \ube44\uad50 \ub300\uc0c1 `nx`, `turborepo`, `lerna` -> \uc18c\uac70\ubc95\uc73c\ub85c \uc120\ud0dd\ud568.\\n:::\\n\\n- **`lerna`**\ub294 \uba54\uc778\ud14c\uc774\ub108\uc758 \ubc88\uc544\uc6c3\uc73c\ub85c \uc778\ud574 nx\ub97c \ub9cc\ub4e0 nrwl\uac00 \uad00\ub9ac\ud568 [Lerna is Officially Dead](https://betterprogramming.pub/lerna-is-officially-dead-long-live-monorepos-9853c80a7b0e)\\n\\n- **`nx`**\\n\\n  - \uc18d\ub3c4 + \uae30\ub2a5 \uba74\uc5d0\uc120 \uc544\uc9c1\uae4c\uc9c0 \uae00 \uc791\uc131 \uba74\uc5d0\uc11c\ub294 nx\uac00 \uc81c\uc77c \ub9ce\uace0 \ube60\ub984\\n  - \ubaa8\ub178\ub808\ud3ec\uc5d0\uc11c \ud558\ub098\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc84\uc804\ub9cc\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ubaa8\ub178\ub808\ud3ec \ucd5c\uc0c1\ub2e8 \ub514\ub809\ud130\ub9ac\uc5d0 \ud558\ub098\uc758 package.json\uc744 \uc124\uce58\\n  - \ud504\ub85c\uc81d\ud2b8 \uac04 \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc84\uc804\uc774 \ub2e4\ub97c \uc218 \ub3c4 \uc788\ub294\ub370 \uc774\ub7f0\uc2dd\uc73c\ub85c \uc9c4\ud589\ub418\uba74 \ud504\ub85c\uc81d\ud2b8\ub9c8\ub2e4 \uc0ac\uc6a9\ub41c \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc84\uc804 \ucd94\uc801\uc774 \uadc0\ucc2e\uc544\uc9d0.\\n  - \ud50c\ub7ec\uadf8\uc778\uc5d0 \uc885\uc18d\ub41c \ub4ef\ud55c \ub290\ub08c\uc744 \ubc1b\uc558\uc74c - \ubb3c\ub860 \\"\uadf8\ub7fc \ub9cc\ub4e4\uba74\ub418\ub294\uac70\uc544\ub0d0?\\"\ub77c\ub294 \uc9c8\ubb38\uc5d0 \ubd09\ucc29\ud560 \uc218 \uc788\uc9c0\ub9cc\uc11c\ub3c4... \uadf8\ub807\uac8c \uac00\uc9c0 \ud574\uc11c \ub9cc\ub4e4\uae30\uac00 \ud760... \uace0\ubbfc\uc880 \ud574\ubcf4\uc790\\n\\n- **`turborepo`**\\n\\n  - vercel\uc5d0\uc11c \uc778\uc218\ud55c \ubaa8\ub178\ub808\ud3ec \ud504\ub85c\uc81d\ud2b8!\\n  - nx\uc5d0 \ube44\ud558\uba74 \uc870\uae08 \ub290\ub9ac\uae34 \ud558\uc9c0\ub9cc \uc5ec\uc804\ud788 \uc18d\ub3c4\uba74\uc5d0\uc11c\ub3c4 \ub098\uc058\uc9c0 \uc54a\ub2e4. - \ube44\uc2b7\ud55c \uce90\uc2f1 \uc804\ub7b5\\n  - nx\uc758 \ubcf5\uc7a1\ud568 + \ud50c\ub7ec\uadf8\uc778 \uc885\uc18d\uc131\uc774 \uc2eb\uc5b4\uc9c0\ub358 \ucc30\ub098\uc5d0... \uc694\ub7f0\uac8c \uc788\ub2e4\uace0???\\n  - \ubcf5\uc7a1\ud558\uc9c0 \uc54a\uc74c\uc5d0 \ub9e4\ub8cc \ub410\uc74c + nx\ub97c \ub3c4\uc785\ud558\uae30 \uc81c\uc77c \uaebc\ub838\ub358 single-version-policy\uac00 \uc5c6\uc74c\\n  - \uc694\ub188\uc774\ub2f7!!!\\n\\n## \uc2dc\uc791\ud558\uae30\\n\\n---\\n\\n\ubb34\uc758\ubbf8\ud55c \ucd08\uae30 \uc124\uc815\ubc95\uc740 \ub9c1\ud06c\ub85c \ub300\uccb4\ud55c\ub2e4!\\n[turborepo \uacf5\uc2dd\ubb38\uc11c](https://turborepo.org)\\n\\n## \ucc38\uc870\\n\\n---\\n\\n[Monorepo with Turborepo - vercel](https://vercel.com/templates/next.js/monorepo)\\n\\n[Turborepo\ub85c \ubaa8\ub178\ub808\ud3ec \uac1c\ubc1c \uacbd\ud5d8 \ud5a5\uc0c1\ud558\uae30 - LINE Engineering](https://engineering.linecorp.com/ko/blog/monorepo-with-turborepo)\\n\\n[\ubaa8\ub358 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud504\ub85c\uc81d\ud2b8 \uad6c\uc131\uae30\ubc95 - NAVER D2](https://d2.naver.com/helloworld/7553804)\\n\\n[Managing a full-stack, multipackage monorepo using pnpm - LogRocket](https://blog.logrocket.com/managing-full-stack-monorepo-pnpm/)"},{"id":"pnpm_vs_yarn-berry","metadata":{"permalink":"/khannelog/blog/pnpm_vs_yarn-berry","source":"@site/blog/2022-07-24/1.pnpm_yarn.mdx","title":"pnpm vs yarn-berry","description":"\u26bd\ufe0f \ubaa9\ud45c","date":"2022-07-24T00:00:00.000Z","formattedDate":"2022\ub144 7\uc6d4 24\uc77c","tags":[{"label":"pnpm","permalink":"/khannelog/blog/tags/pnpm"},{"label":"yarn","permalink":"/khannelog/blog/tags/yarn"}],"readingTime":7.51,"hasTruncateMarker":true,"authors":[{"name":"khanne wayne","url":"https://github.com/IwannabeRealnerD","email":"iwannaberealnerd@gmail.com","imageURL":"https://avatars.githubusercontent.com/u/71207364?s=400&u=58acb862819034f1b588b088dcfe1c6b345ae272&v=4","key":"khanne"}],"frontMatter":{"title":"pnpm vs yarn-berry","slug":"pnpm_vs_yarn-berry","authors":"khanne","tags":["pnpm","yarn"]},"prevItem":{"title":"Turborpo\uc640 pnpm","permalink":"/khannelog/blog/turborepo_with_pnpm"}},"content":"## \u26bd\ufe0f \ubaa9\ud45c\\n\\n---\\n\\n:::info `NPM` vs `Yarn Classic(v1)` vs `Yarn Berry(v2)` vs `PNPM`\\n:::\\n\\n\x3c!--truncate--\x3e\\n\\n- Yarn Classic\uacfc Yarn Berry\ub294 \ub2e4\ub974\ub2e4\ub294\uac78 \uc778\uc9c0\ud558\uace0 \uc77d\uc5b4\ubcf4\uc790.\\n  - \ud604\uc2dc\uc810(2022\ub144 7\uc6d4 22\uc77c) \uae30\uc900\uc73c\ub85c Yarn Classic\uc740 \uae30\ub2a5 \ucd94\uac00 \ub610\ub294 \uac1c\uc120\uc5c6\uc774 \uad00\ub9ac\ub9cc \uc9c4\ud589\ub418\ub294 \uc911\\n\\n## 1-1. npm\uacfc Yarn classic(Yarn v1)\\n\\n---\\n\\n### npm\\n\\n:::note `NPM\uc740 Node Package Manager\uc758 \uc57d\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4` - [NPM-CLI \uae43\ud5d9 \ub9c1\ud06c](https://github.com/npm/cli#is-npm-an-acronym-for-node-package-manager)\\n\\n:::\\n\\n- 2010\ub144\uc5d0 \uc2dc\uc791\ub41c \ud504\ub85c\uc81d\ud2b8\\n- NPM \uc774\ub984\uc774 **`N`**ode **`PM`**, **`N`**ew **`PM`**\uc744 \ub178\ub9ac\uace0 \ub9cc\ub4e0\uac70\ub77c\ub294\ub370\u2026 \uc57d\uac04.. \ucd08\ud07c\u2026\ud760..\u314e\u314b.\u314e.;;;\\n- \ucc98\uc74c\uc5d4 \uc5ec\ub7ec \uc774\uc288\ub4e4\uc774 \uc788\uc5c8\uc73c\ub098 \ub300\ubd80\ubd84 \ud574\uacb0 \ub41c \uc0c1\ud0dc\\n  - lock \ud30c\uc77c\uc758 \ubd80\uc7ac\\n  - \ubcf4\uc548 \uc774\uc288\\n- **`\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\uc758 \uc2dc\uc791`**\\n  - \uc774\uc804 \uae4c\uc9c4 \ud328\ud0a4\uc9c0\ub97c \ubaa8\ub450 \uc218\ub3d9\uc73c\ub85c \uc124\uce58 \ubc0f \uad00\ub9ac \ud588\uc5c8\uc74c + NPM \ubaa8\ub4c8\ub85c \ucd9c\uc2dc\ud558\uae30\uac00 \ud3b8\ud588\uc74c - \ud3b8\uc758\uc131\ub355\ubd84\uc5d0 \uc2b9\uc2b9 \uc7a5\uad6c, **\ud558\uc9c0\ub9cc..**\\n\\n### Yarn classic (Yarn v1)\\n\\n> **Yet Anoter Resource Negotiator**\\n\\n- 2016\ub144\uc5d0 \ud398\uc774\uc2a4\ubd81 + \uad6c\uae00 + \uae30\ud0c0\ub4f1\ub4f1\uc774 \ucd9c\uc2dc\ud55c \uc0c8\ub85c\uc6b4 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\\n- npm\uacfc \ub611\uac19\uc740 \uc758\uc874\uc131 \ud574\uacb0 \ubc29\uc2dd\uc744 \ucc44\ud0dd\ud568 \u2192 \uc5ec\uc804\ud788 \ube44\ud6a8\uc728\uc801\uc778 \ud328\ud0a4\uc9c0 \uc758\uc874\uc131\uad00\ub9ac\\n- \ucd9c\uc2dc \ub2f9\uc2dc\uc5d4 npm\uc5d0 \ube44\ud574 \uc0c1\ub300\uc801\uc73c\ub85c \uc88b\uc740 \uc131\ub2a5\uc73c\ub85c \uad00\uc2ec\uc744 \ubc1b\uc558\uc5c8\uc74c \u2192 \uc694\uc998\uc740 \ube44\uc2b7\ube44\uc2b7, \uac01\uc790\uc758 \uc7a5\uc810\uc744 \ub2ee\uc544\uac00\ub294 \uc911\\n- .lock \ud30c\uc77c\uc758 \uc874\uc7ac\ub97c \ucc98\uc74c\uc73c\ub85c \ub9cc\ub4ec \u2192 \uc774\ud6c4\uc5d4 npm\uc5d0\uc11c\ub3c4 .lock \ud30c\uc77c\uc744 \uc81c\uacf5\\n- 2020\ub144 \ubd80\ud130 maintenance mode\uac00 \ub428 \u2192 `\ucd94\uac00 \uae30\ub2a5 \uac1c\ubc1c \uc5c6\uc774 \uad00\ub9ac\ub9cc \uc9c4\ud589` \uc911\\n\\n### yarn\uacfc npm\uc758 \ubb38\uc81c\uc810\\n\\n- node_modules\ub97c \uc774\uc6a9\ud574 dependency\ub97c \uad00\ub9ac\ud568, \uc911\ubcf5\ub41c dependency\uac00 \ub9ce\uc74c \u2192 \uc800\uc7a5\uacf5\uac04\uc744 \ub9ce\uc774 \ucc28\uc9c0\ud568, \uc5b4\uca54\ub550 \uac19\uc740 \ud328\ud0a4\uc9c0\ub97c \uba54\ubaa8\ub9ac\uc5d0 \uc911\ubcf5\ub418\uac8c \uc778\uc2a4\ud134\uc2a4\ud654 \ud568\\n- [\uc720\ub839 \uc758\uc874\uc131(phantom dependency)](https://pnpm.io/motivation#creating-a-non-flat-node_modules-directory)\\n\\n## 1-2 pnpm\\n\\n---\\n\\n![pnpm \uc544\uc774\ub514\uc5b4 \uc0ac\uc9c4](https://iwannaberealnerd.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbc085663-6538-4769-b210-fedcbe3ae17c%2FUntitled.png?table=block&id=a00e89c2-0a2f-421b-98c3-e81c53216a71&spaceId=35999598-bd0e-4e04-a70a-5396c69f115f&width=2000&userId=&cache=v2)\\n\\n### npm, Yarn classic\uc758 node_modules \ud3c9\ud0c4\ud654\\n\\n- npm\uacfc yarn classic\uc740 \uc911\ubcf5\ub41c \ud328\ud0a4\uc9c0\ub97c **`\uadf8\ub098\ub9c8`** \uc904\uc774\uae30 \uc704\ud574 **`\ud3c9\ud0c4\ud654`**~~(\uc73c.. \uad70\ub300\uc6a9\uc5b4)~~\ub97c \uc218\ud589\ud568\\n\\n```\\n// \ud3c9\ud0c4\ud654 \uc804\\n\ud328\ud0a4\uc9c0A/node_modules/libName\\n\ud328\ud0a4\uc9c0B/node_modules/libName\\n\\n// \ud3c9\ud0c4\ud654 \ud6c4\\n\ud328\ud0a4\uc9c0A\\n\ud328\ud0a4\uc9c0B\\nlibName\\n```\\n\\n- \ud328\ud0a4\uc9c0 `A, B` \ub458\ub2e4 `libName`\uc774\ub780 \ud328\ud0a4\uc9c0\uc5d0 \uc758\uc874\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc74c\\n- A, B \uac01\uc790\uc758 node_modules \uc544\ub798\uc5d0 \ud328\ud0a4\uc9c0\uc744 \uac00\uc9c0\uace0 \uc788\uc744 \uacbd\uc6b0 \ub514\uc2a4\ud06c \uacf5\uac04\uc758 \ub0ad\ube44!\\n- \ud328\ud0a4\uc9c0 1\uc744 \ud328\ud0a4\uc9c0 A\uc640 B\uc640 \uac19\uc774 `\ub8e8\ud2b8 \ub514\ub809\ud130\ub9ac\ub85c \ud638\uc774\uc2a4\ud305` \ud568! \u2192A\uc640 B\ub294 \ud638\uc774\uc2a4\ud305\ub41c 1\uc744 \ucc38\uc870\\n- \uc774 **`\ud3c9\ud0c4\ud654`**\ub85c \uc778\ud574 \uc720\ub839 \uc758\uc874\uc131\uc774 \uc0dd\uae40 -> \uc9c1\uc811 \uc124\uce58\ud558\uc9c0 \uc54a\uc740 \ud328\ud0a4\uc9c0\uc774\uc9c0\ub9cc \ud3c9\ud0c4\ud654\ub85c\uc778\ud574 \ub8e8\ud2b8 \ub514\ub809\ud130\ub9ac\ub85c \ud638\uc774\uc2a4\ud305 \ub418\uc5b4 \uc758\ub3c4\uce58 \uc54a\uc740 \ud328\ud0a4\uc9c0 \uc0ac\uc6a9\\n\\n### content addressable store\\n\\n- \ubaa8\ub4e0(\uc11c\ub85c\ub2e4\ub978 \ud504\ub85c\uc81d\ud2b8) dependency\ub97c \ud558\ub098\uc758 \ud30c\uc77c\uc5d0\uc11c \uad00\ub9ac\\n  - \uc0ac\uc6a9\uc790\uc758 \ud648\ub514\ub809\ud130\ub9ac \uc544\ub798(~/.pnpm-store)\\n  - hardlink\ub418\uc5b4\uc788\ub294 \ud30c\uc77c\ub4e4(.pnpm-store)\uc744 symlink\ub85c \uc5f0\uacb0\\n\\n### non-flat node_modules \ub514\ub809\ud130\ub9ac\\n\\n![pnpm\uc758 hardlink, symlink](https://iwannaberealnerd.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8d652c9d-5d4a-4097-af71-9144f5150275%2Fnode-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg?table=block&id=aa1652de-10ec-4f91-86c3-5f140997c113&spaceId=35999598-bd0e-4e04-a70a-5396c69f115f&width=2000&userId=&cache=v2)\\n\\n- pnpm\uc740 \uae30\ubcf8 \uc635\uc158\uc73c\ub85c \ud3c9\ud0c4\ud654\ub418\uc9c0 \uc54a\uc740 node_modules \ub514\ub809\ud130\ub9ac \uad6c\uc870\ub97c \ub9cc\ub4ec\\n  - \uc635\uc158\uc73c\ub85c \ud3c9\ud0c4\ud654 \uac00\ub2a5\\n  ```bash\\n  # pnpm \ud504\ub85c\uc81d\ud2b8\\n  /node_modules\\n  \\t- \ub77c\uc774\ube0c\ub7ec\ub9ac A (.pnpm\uacfc symlink \ub418\uc5b4\uc788\uc74c)\\n  \\t- .pnpm\\n  \\t\\t- \ub77c\uc774\ube0c\ub7ec\ub9ac A (\ub77c\uc774\ube0c\ub7ec\ub9ac A\uc758 hardlink\ub41c \ud30c\uc77c)\\n  ```\\n- \uae30\ubcf8 \uc124\uc815\uc73c\ub85c \ud3c9\ud0c4\ud654\uac00 \uc218\ud589\ub418\uc9c0 \uc54a\uc544 `\uc720\ub839 \uc758\uc874\uc131\uc774 \uc0ac\ub77c\uc9d0`\\n- \ud504\ub85c\uc81d\ud2b8\uc758 node_modules\uc5d0\ub294 \uc2e4\uc81c \ud30c\uc77c\uc774 \uc544\ub2cc \uac01\uc790 \ud544\uc694\ud55c \ucc38\uc870\ub97c symlink\ub85c \uc5f0\uacb0 \ud6c4 \ud30c\uc77c\uc740 hardlink \uc2dc\ucf1c\uc90c\\n\\n### \ud3c9\ud0c4\ud654\ub97c \uc5c6\uc560\uae30\uc704\ud55c pnpm\uc758 \ub178\ub825\\n\\n- npm, yarn\uc774 \uac00\uc9c0\uace0 \uc788\ub358 `\ube44\ud6a8\uc728\uc801\uc778 \uc758\uc874\uc131 \uad00\ub9ac \ubc29\uc2dd\uc744 \ud574\uacb0` \u2192 content-addressable storage\ub97c \uc774\uc6a9\\n- npm, yarn\uc740 \uc2e4\uc81c \uc758\uc874\uc131 \ud30c\uc77c\ub4e4\uc740 node_modules\uc5d0 \uc874\uc7ac\ud558\ub098 pnpm\uc740 \uc0ac\uc6a9\uc790\uc758 \ud648\ub514\ub809\ud130\ub9ac \uc544\ub798(~/.pnpm-store)\uc5d0 \uc2e4\uc81c dependency\ub4e4\uc744 \uc800\uc7a5 \u2192 pnpm\uc758 node_modules\ub4e4\uc740 .pnpm-store\ub85c \ub9c1\ud06c\ub85c\ub9cc \uc874\uc7ac\ud568\\n- \uc720\ub839 \uc758\uc874\uc131\uc774 \uc874\uc7ac\ud558\uba70 \uc2e4\uc81c \uc911\ubcf5 \ud30c\uc77c\ub4e4\uc774 \ub9ce\uc774 \uc874\uc7ac\ud558\ub294 NPM\uc758 node_modules\ubcf4\ub2e4 \uc801\uc740 \uc6a9\ub7c9 \ucc28\uc9c0, \uba54\ubaa8\ub9ac\uc5d0 \uc911\ubcf5\ub41c \uc778\uc2a4\ud134\uc2a4\ub85c \uc874\uc7ac\ud558\uc9c0 \uc54a\uc74c\\n\\n### \uc11c\ub85c \ub2ee\uc544\uac00\ub294 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\\n\\n[2021\ub144 pnpm\uc758 \ubc1c\uc790\ucde8 | \uacf5\uc2dd\ubb38\uc11c](https://pnpm.io/blog/2021/12/29/yearly-update#the-competition)\\n:::note \uc774\uc81c\ub294 `\ubb50\uac00 \ub354 \uc6d4\ub4f1\ud788 \ub354 \uc88b\ub2e4`\uac00 \ubb34\uc758\ubbf8\ud574 \uc9c0\uc9c0 \uc54a\uc558\uc744\uae4c..? \ud558\ub294 \uc0dd\uac01\uc774..\\n~~\ubb3c\ub860 npm \ub108 \ube7c\uad6c ^^~~\\n:::\\n\\n- yarn - content-addressable storage \ub3c4\uc785 \uc608\uc815\\n- npm - symlink\ub97c \ud65c\uc6a9\ud55c node_modules \ubc29\uc2dd \ub3c4\uc785 \uc608\uc815\\n\\n## 1-3 Yarn berry\\n\\n---\\n\\n- 2020\ub144\uc5d0 \ub9b4\ub9ac\uc988 \u2192 \uae30\uc874 Yarn\uacfc \uc804\ud600\ub2e4\ub978 \ucf54\ub4dc\ubca0\uc774\uc2a4\\n\\n### PnP(Plug n Play)\\n\\n- \ub2e4\ub978 \uad00\ub9ac\uc790\ub4e4\uacfc \ub2e4\ub974\uac8c `node_modules\ub300\uc2e0 .pnp.cjs\ub97c \uc0dd\uc131`\ud568\\n- \uc911\ucca9\ub41c node_modules\uc640\ub294 \ub2e4\ub974\uac8c \ud558\ub098\uc758 \ud30c\uc77c\ub85c \uc874\uc7ac\\n  - \uc758\uc874\uc131 \uac80\uc0c9\uc774 \ud6a8\uc728\uc801\uc73c\ub85c \uc218\ud589\ub428 \u2192 \ube68\ub77c\uc9d0\\n  - \uc911\ucca9\ub41c \ud30c\uc77c\uad6c\uc870\uc778 node_modules\ub97c \uc21c\ud68c\ud558\uba70 \ucc3e\uc744 \ud544\uc694\uac00 \uc5c6\uc74c \u2192 `.pnp.cjs\uc5d0 \uc2e4\uc81c \ud328\ud0a4\uc9c0 \uc800\uc7a5 \uc704\uce58 \ubc14\ub85c \ucc38\uc870\uac00\ub2a5`\\n  - package\ub97c \uac80\uc0c9\ud55c \ud6c4 \uac70\uc758 \uc989\uac01\uc801\uc73c\ub85c \ud398\uc774\uc9c0\ub97c \ucc3e\uc544\uac08 \uc218 \uc788\uac8c \ub428\\n- \uc2e4\uc81c \ud328\ud0a4\uc9c0\ub4e4\uc740 \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud130\ub9ac\uc5d0 `.yarn/cache/\uc5d0 zip \ud30c\uc77c\ub85c \uc874\uc7ac` \u2192 \ub514\uc2a4\ud06c\ub97c \ucc28\uc9c0\ud558\ub294 \uc6a9\ub7c9\uc774 \ub354\uc904\uc5b4\ub4ec\\n- \uc758\uc874\uc131 \ud638\uc774\uc2a4\ud305\uc774 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uc544 \uc720\ub839 \uc758\uc874\uc131\uc774 \uc0ac\ub77c\uc9d0\\n\\n### Zero Install\\n\\n- \uae30\uc874 npm\uacfc \ub2e4\ub978 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\ub4e4\uc740 \ube0c\ub79c\uce58\ub97c \ubc14\uafb8\uac70\ub098 \ub9ac\ud3ec\uc9c0\ud130\ub9ac\ub97c \ub2f9\uaca8\uc654\uc744 \ub54c npm i, yarn install\ub85c \ud328\ud0a4\uc9c0\ub4e4\uc744 \uc124\uce58 \u2192 `node_modules\uac00 \ub108\ubb34 \ubb34\uac70\uc6e0\uae30 \ub54c\ubb38\uc5d0 \ub9ac\ud3ec\uc9c0\ud130\ub9ac\uc5d0 \uac19\uc774 \uc5c5\ub85c\ub4dc \ubd88\uac00`\\n- Yarn berry\uc5d0\uc11c\ub294 \ud328\ud0a4\uc9c0\uac00 zip \ud30c\uc77c\ub85c \uc555\ucd95\ub418\uc5b4 \uc874\uc7ac\ud558\uae30 \ub54c\ubb38\uc5d0 \uc6a9\ub7c9\uc774 \ud604\uc800\ud788 \ub0ae\uc74c + \uc911\ubcf5\ub41c \ud328\ud0a4\uc9c0\uac00 \ucd5c\uc18c\ud654\ub410\uc73c\ubbc0\ub85c \uae30\uc874 node_modules\uc5d0 \ube44\ud574 \uc6a9\ub7c9\uc774 \ub9e4\uc6b0 \ub0ae\uc74c \u2192 \ub9ac\ud3ec\uc800\ud130\ub9ac\uc5d0 \uc5c5\ub85c\ub4dc\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5\\n- \ube0c\ub79c\uce58\ub97c \ubc14\uafb8\uac70\ub098 \ub9ac\ud3ec\uc9c0\ud130\ub9ac\ub97c \uc0c8\ub85c \ub2f9\uaca8\uc654\uc744 \ub54c `install \uc5c6\uc774 \ubc14\ub85c \uc0ac\uc6a9 \uac00\ub2a5`"}]}')}}]);