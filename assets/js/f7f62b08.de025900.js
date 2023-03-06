"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,f=p["".concat(s,".").concat(b)]||p[b]||m[b]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={slug:"train-custom-object-detector",title:"Train a Custom Object Detector",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Object Detection","Computer Vision","Deep Learning"]},i=void 0,c={permalink:"/blog/train-custom-object-detector",editUrl:"https://github.com/amirafshari/amirafshari.github.io/tree/main/blog/2021-08-28-train-custom-object-detector.md",source:"@site/blog/2021-08-28-train-custom-object-detector.md",title:"Train a Custom Object Detector",description:"download",date:"2021-08-28T00:00:00.000Z",formattedDate:"August 28, 2021",tags:[{label:"Object Detection",permalink:"/blog/tags/object-detection"},{label:"Computer Vision",permalink:"/blog/tags/computer-vision"},{label:"Deep Learning",permalink:"/blog/tags/deep-learning"}],readingTime:2.22,hasTruncateMarker:!0,authors:[{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"}],frontMatter:{slug:"train-custom-object-detector",title:"Train a Custom Object Detector",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Object Detection","Computer Vision","Deep Learning"]},prevItem:{title:"Automatic License Plate Detector",permalink:"/blog/license-plate-detector"},nextItem:{title:"Persian Podcasts on Spotify",permalink:"/blog/spotify-persian-podcasts"}},s={authorsImageUrls:[void 0]},u=[],l={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138662797-827178bd-ce03-4896-b093-1705c3ac6d4f.png",alt:"download"})))}m.isMDXComponent=!0}}]);