"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1586],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=r,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={slug:"housing-data-analysis",title:"Housing Data Analysis",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Data Analysis","Data Visualization"]},o=void 0,s={permalink:"/blog/housing-data-analysis",editUrl:"https://github.com/amirafshari/amirafshari.github.io/tree/main/blog/2020-08-28-housing-data-analysis.md",source:"@site/blog/2020-08-28-housing-data-analysis.md",title:"Housing Data Analysis",description:"density2",date:"2020-08-28T00:00:00.000Z",formattedDate:"August 28, 2020",tags:[{label:"Data Analysis",permalink:"/blog/tags/data-analysis"},{label:"Data Visualization",permalink:"/blog/tags/data-visualization"}],readingTime:.42,hasTruncateMarker:!0,authors:[{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"}],frontMatter:{slug:"housing-data-analysis",title:"Housing Data Analysis",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Data Analysis","Data Visualization"]},prevItem:{title:"Persian Podcasts on Spotify",permalink:"/blog/spotify-persian-podcasts"}},u={authorsImageUrls:[void 0]},l=[{value:"Ocean Proximity Count",id:"ocean-proximity-count",level:2},{value:"Where are the most populated areas?",id:"where-are-the-most-populated-areas",level:2},{value:"Population Density Recongnition",id:"population-density-recongnition",level:3},{value:"Correlations",id:"correlations",level:2},{value:"Median Income vs Median House Value (Strongest Correlation)",id:"median-income-vs-median-house-value-strongest-correlation",level:3},{value:"Distribution of Features",id:"distribution-of-features",level:2},{value:"Outliers",id:"outliers",level:2}],c={toc:l},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138718424-6f6cd0c6-c5a6-4442-a058-80968fc29035.png",alt:"density2"})),(0,r.kt)("p",null,"This dataset is based on data from the 1990 California census. Our dataset consist of 26k samples with 10 features."),(0,r.kt)("p",null,"features = ","[longitude, latitude, housing_median_age, total_rooms, total_bedrooms, population, households, median_income, median_house_value, ocean_proximity]"),(0,r.kt)("h2",{id:"ocean-proximity-count"},"Ocean Proximity Count"),(0,r.kt)("p",null,"Ocean Proximity is our only categorical data in this dataset."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138718362-f419fed8-b34c-41cb-9cb2-09f3ce13e5e5.png",alt:"ocean_proximity"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138718371-c17dede1-247e-4090-b54f-6d650121d9cb.png",alt:"ocean_proximity-pie"})),(0,r.kt)("h2",{id:"where-are-the-most-populated-areas"},"Where are the most populated areas?"),(0,r.kt)("h3",{id:"population-density-recongnition"},"Population Density Recongnition"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138718446-ca1aab50-45b3-4094-86ef-bcb9a4fb07fc.png",alt:"density"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138718413-3e29fa00-2f4f-4967-a752-39ce56fb455b.png",alt:"density1"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138718424-6f6cd0c6-c5a6-4442-a058-80968fc29035.png",alt:"density2"})),(0,r.kt)("h2",{id:"correlations"},"Correlations"),(0,r.kt)("h3",{id:"median-income-vs-median-house-value-strongest-correlation"},"Median Income vs Median House Value (Strongest Correlation)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138719144-34f2ed03-e332-4646-811b-3569a8d5f7ae.png",alt:"correlations"})),(0,r.kt)("h2",{id:"distribution-of-features"},"Distribution of Features"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138719163-09cf03d6-64e9-409e-b647-66529e2abb73.png",alt:"feature-distribution"})),(0,r.kt)("h2",{id:"outliers"},"Outliers"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/138719182-5addddd8-398f-4cb5-9bd7-b293820d9ff2.png",alt:"outliers"})))}m.isMDXComponent=!0}}]);