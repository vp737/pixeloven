(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(10),o=(n(0),n(175)),i={id:"cli-core-installation",title:"Installation"},c={id:"api/cli-core-installation",title:"Installation",description:"The core CLI along with a few critical Addons are installed while creating a new project when following our Getting Started documentation. It is recomended users follow these sections first before attempting more customized setups.",source:"@site/docs/api/cli-core-installation.mdx",permalink:"/docs/api/cli-core-installation",editUrl:"https://github.com/pixeloven/pixeloven/tree/master/docusaurus/docs/docs/api/cli-core-installation.mdx",lastUpdatedBy:"Brian Gebel",lastUpdatedAt:1581439077,sidebar:"docs",previous:{title:"Intro",permalink:"/docs/getting-started/intro"},next:{title:"PixelOven.Compile",permalink:"/docs/api/cli-core-compile"}},l=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Installation",id:"installation",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The core CLI along with a few critical Addons are installed while creating a new project when following our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/intro"}),"Getting Started")," documentation. It is recomended users follow these sections first before attempting more customized setups."),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("p",null,"The core CLI requires ",Object(o.b)("strong",{parentName:"p"},"@pixeloven/cli")," to be installed as it boostraps the core CLI along with any addons that might be installed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev @pixeloven/cli\n")),Object(o.b)("p",null,"or yarn"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev @pixeloven/cli\n")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"To install the core CLI simply run the following with NPM"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev @pixeloven/cli-core\n")),Object(o.b)("p",null,"or yarn"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev @pixeloven/cli-core\n")))}p.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);