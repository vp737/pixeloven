(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(10),i=(r(0),r(175)),o={id:"cli-core-pretty",title:"PixelOven.Pretty"},c={id:"api/cli-core-pretty",title:"PixelOven.Pretty",description:"Overview",source:"@site/docs/api/cli-core-pretty.mdx",permalink:"/docs/api/cli-core-pretty",editUrl:"https://github.com/pixeloven/pixeloven/tree/master/docusaurus/docs/docs/api/cli-core-pretty.mdx",lastUpdatedBy:"Brian Gebel",lastUpdatedAt:1581439077,sidebar:"docs",previous:{title:"PixelOven.Lint",permalink:"/docs/api/cli-core-lint"},next:{title:"PixelOven.Test",permalink:"/docs/api/cli-core-test"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Prettier",id:"prettier",children:[{value:"Setup",id:"setup",children:[]},{value:"Options",id:"options",children:[]},{value:"Usage",id:"usage",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"The Pretty API provides a proxy for Prettier while providing a light abstraction for configuration. Prettier's own auto-fixing features help maintain code compliance and reduce friction between developers around formatting."),Object(i.b)("h2",{id:"prettier"},"Prettier"),Object(i.b)("p",null,"Prettier supports multiple languages out of the gate. As a result unlike ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/cli-core-lint"}),"CLI: PixelOven.Lint")," this CLI has no need for arguments to be passed to handle for different languages."),Object(i.b)("h3",{id:"setup"},"Setup"),Object(i.b)("p",null,"First be sure to create a ",Object(i.b)("strong",{parentName:"p"},"prettier.json")," file at the root of the project or in other words adjacent to the ",Object(i.b)("strong",{parentName:"p"},"package.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "trailingComma": "all",\n    "tabWidth": 4\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"It is important to note that PixelOven makes a few assumptions for ease integration and will default to Prettier's own default values if a config is not provided. The CLI will warn if this configuration is missing.")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("p",null,"For reference on all the available options please review the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://prettier.io/"}),"official documentation")," for Prettier."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once this has been confirmed all we have to do is run the following."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven pretty\n")),Object(i.b)("p",null,"We can also target specific files."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven pretty ./src/index.ts\n")),Object(i.b)("p",null,"Prettier's options can be passed through the CLI but it is highly recommended that this behavior be managed with in a ",Object(i.b)("strong",{parentName:"p"},"prettier.json")," file."))}s.isMDXComponent=!0},175:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(f,c(c({ref:t},p),{},{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);