(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(10),l=(n(0),n(166)),o={id:"cli-addon-generators",title:"PixelOven.Generate"},i={id:"api/cli-addon-generators",title:"PixelOven.Generate",description:"This addon features an interactive CLI for generating common project files. The goal of this addon is to reduce the need for repeative boilerplating usually required by developers.",source:"@site/docs/api/cli-addon-generators.mdx",permalink:"/docs/api/cli-addon-generators",editUrl:"https://github.com/pixeloven/pixeloven/tree/master/docusaurus/docs/docs/api/cli-addon-generators.mdx",lastUpdatedBy:"Brian Gebel",lastUpdatedAt:1581439077,sidebar:"docs",previous:{title:"PixelOven.Test",permalink:"/docs/api/cli-core-test"},next:{title:"PixelOven.Story",permalink:"/docs/api/cli-addon-storybook"}},c=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"Usage",id:"usage",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This addon features an interactive CLI for generating common project files. The goal of this addon is to reduce the need for repeative boilerplating usually required by developers."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note the current version of this extension only supports react as that is the primary use case for PixelOven. Though our ultimate goal is to provide a more general development platform we want to first nail this subset before conquering others.")),Object(l.b)("p",null,"To install this addon simply run the following with NPM"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev @pixeloven/cli-addon-generators\n")),Object(l.b)("p",null,"or yarn"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev @pixeloven/cli-addon-generators\n")),Object(l.b)("h2",{id:"api-reference"},"API Reference"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#cli-pixelovengenerate"}),Object(l.b)("inlineCode",{parentName:"a"},"generate"))),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CLI entry point for interactive project generators.")))),Object(l.b)("p",null,"All arguments and options for this addon are optional. The entire CLI is interactive and provides a more traditional experience for convenience."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"<type>")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"null")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Shortcuts the first part of the interactive menu.")))),Object(l.b)("p",null,"As mentioned above these types are optional and simply shortcut the first part of the interactive menu. The below types have a a 1:1 relationship with the first part of the interactive menu."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"app")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Starts the interactive menu for creating a new App.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"component")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Starts the interactive menu for generating a React component.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"package")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Starts the interactive menu for creating a new Package.")))),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("p",null,"Providing a type to generate is entirely optional. This argument is provided to help shortcuts the menu for a slightly more customized experience."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven generate <type[optional]>\n")),Object(l.b)("p",null,"To run the full interactive CLI simply run the following."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven generate\n")),Object(l.b)("p",null,"Finally, here is an example of how you might use these shortcuts to start the component generator."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven generate component\n")))}p.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(o,".").concat(d)]||u[d]||s[d]||l;return n?r.a.createElement(O,i({ref:t},b,{components:n})):r.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);