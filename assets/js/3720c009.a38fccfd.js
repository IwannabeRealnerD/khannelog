"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3751],{8214:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(9496),n=a(5924),r=a(7598),c=a(7302),s=a(3780),m=a(5500),o=a(4384),i=a(3032);function u(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(i.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(o.Z,{tags:t}))))))}},7753:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9496),n=a(5924),r=a(549);const c="tag__DSG",s="tagRegular_t5z_",m="tagWithCount_xHDw";function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(c,o?m:s)},a,o&&l.createElement("span",null,o))}},4384:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(9496),n=a(7598),r=a(7753);const c="tag_aq96";function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(r.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},7598:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(2909);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);