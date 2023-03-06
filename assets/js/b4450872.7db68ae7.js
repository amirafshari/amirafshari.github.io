"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"license-plate-detector",title:"Automatic License Plate Detector",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Object Detection","Computer Vision","Deep Learning"]},l=void 0,i={permalink:"/blog/license-plate-detector",editUrl:"https://github.com/amirafshari/amirafshari.github.io/tree/main/blog/2021-09-02-license-plate-detector.md",source:"@site/blog/2021-09-02-license-plate-detector.md",title:"Automatic License Plate Detector",description:"result-9",date:"2021-09-02T00:00:00.000Z",formattedDate:"September 2, 2021",tags:[{label:"Object Detection",permalink:"/blog/tags/object-detection"},{label:"Computer Vision",permalink:"/blog/tags/computer-vision"},{label:"Deep Learning",permalink:"/blog/tags/deep-learning"}],readingTime:2.315,hasTruncateMarker:!0,authors:[{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"}],frontMatter:{slug:"license-plate-detector",title:"Automatic License Plate Detector",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Object Detection","Computer Vision","Deep Learning"]},nextItem:{title:"Train a Custom Object Detector",permalink:"/blog/train-custom-object-detector"}},s={authorsImageUrls:[void 0]},c=[{value:"Exploratory Data Analysis",id:"exploratory-data-analysis",level:2},{value:"Distributions",id:"distributions",level:3},{value:"X vs Y &amp; Height vs Width",id:"x-vs-y--height-vs-width",level:3},{value:"Tensorflow Implementation for YOLOv4",id:"tensorflow-implementation-for-yolov4",level:2},{value:"Environment Setup",id:"environment-setup",level:3},{value:"Conda Environment",id:"conda-environment",level:4},{value:"Requirements",id:"requirements",level:4},{value:"Check",id:"check",level:4},{value:"Set the environment as jupyter kernel",id:"set-the-environment-as-jupyter-kernel",level:4},{value:"Tensorflow",id:"tensorflow",level:3},{value:"Convert weights",id:"convert-weights",level:4},{value:"COCO Dataset",id:"coco-dataset",level:4},{value:"Custom Dataset",id:"custom-dataset",level:4},{value:"3. Tflite",id:"3-tflite",level:3},{value:"Convert",id:"convert",level:4},{value:"Demo",id:"demo",level:4},{value:"Metrics",id:"metrics",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/134549834-da73a045-05c9-4d6c-8772-90c4dca67cf7.jpg",alt:"result-9"})),(0,r.kt)("h2",{id:"exploratory-data-analysis"},"Exploratory Data Analysis"),(0,r.kt)("p",null,"How our data looks like?",(0,r.kt)("br",{parentName:"p"}),"\n","Annotations format (YOLO Format): ","[class, x_center, y_center, obj_width, obj_height]","  "),(0,r.kt)("h3",{id:"distributions"},"Distributions"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/134396237-178893ef-18f1-4df6-b3ea-fe4b235e3a27.png",alt:"1"})),(0,r.kt)("p",null,"They make sense for number plate images  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"x values are well distributed, which means the cameraman did a good job :D"),(0,r.kt)("li",{parentName:"ul"},"y values are well distributed as well, but, most of the objects are on top of our images."),(0,r.kt)("li",{parentName:"ul"},"both height and width make sense, because our object is licence plate and they all have almost similiar sizes.")),(0,r.kt)("h3",{id:"x-vs-y--height-vs-width"},"X vs Y & Height vs Width"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/134396293-df5113b7-9237-4dfc-81ac-1a2bf6187826.png",alt:"2"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As mentioned above, there is a lack in our dataset in buttom-half part of xy plane."),(0,r.kt)("li",{parentName:"ul"},"As we can see, the center of our x axis is dense, it's beacuse humans put the object in the center of the camera.")),(0,r.kt)("h2",{id:"tensorflow-implementation-for-yolov4"},"Tensorflow Implementation for YOLOv4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It's ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/hunglc007/tensorflow-yolov4-tflite#traning-your-own-model"},"recommended")," to train your custom detector on ",(0,r.kt)("a",{parentName:"strong",href:"https://amirafshari.com/blog/train-custom-object-detector"},"darknet"),", rather than this implemntation, and then convert your weights and use this implemntation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!git clone https://github.com/hunglc007/tensorflow-yolov4-tflite\n")),(0,r.kt)("h3",{id:"environment-setup"},"Environment Setup"),(0,r.kt)("h4",{id:"conda-environment"},"Conda Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Create\n# tf < 2.5 | python = 3.7\n# tf > 2.5 | python > 3.9\n!conda create --name envname python=3.7\n\n# Activate\n!activate envname\n")),(0,r.kt)("h4",{id:"requirements"},"Requirements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# in tf > 2.5 both cpu and gpu use the same package\n\n# GPU\n!pip install -r requirements-gpu.txt\n\n# CPU\n!pip install -r requirements.txt\n")),(0,r.kt)("h4",{id:"check"},"Check"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!conda list # installed packages in current env\n!python --version\n")),(0,r.kt)("h4",{id:"set-the-environment-as-jupyter-kernel"},"Set the environment as jupyter kernel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!pip install ipykernel\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!python -m ipykernel install --user --name=envname\n")),(0,r.kt)("p",null,"Then choose yolov4tf from kernels in your notebook"),(0,r.kt)("h3",{id:"tensorflow"},"Tensorflow"),(0,r.kt)("h4",{id:"convert-weights"},"Convert weights"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!python save_model.py --weights ./data/yolov4.weights --output ./checkpoints/yolov4-416 --input_size 416 --model yolov4\n")),(0,r.kt)("h4",{id:"coco-dataset"},"COCO Dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!python detect.py --weights ./checkpoints/yolov4-416 --size 416 --model yolov4 --image ./data/kite.jpg\n")),(0,r.kt)("h4",{id:"custom-dataset"},"Custom Dataset"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a custom.names file in data/classes and type your class (based on your weights and training)"),(0,r.kt)("li",{parentName:"ul"},"Call the custom.names in config.py (change coco.names to custom.names)"),(0,r.kt)("li",{parentName:"ul"},"Change the paths in detect.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!python detect.py --weights ./checkpoints/custom --size 416 --model yolov4 --image ./data/custom.jpg\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/134549864-703159d9-a8f2-41d0-b4ef-48e52bf770b9.jpg",alt:"result"})),(0,r.kt)("h3",{id:"3-tflite"},"3. Tflite"),(0,r.kt)("p",null,"Recommended for mobile and edge devices."),(0,r.kt)("h4",{id:"convert"},"Convert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Save tf model for tflite converting\n!python save_model.py --weights ./data/yolov4.weights --output ./checkpoints/yolov4-416 --input_size 416 --model yolov4 --framework tflite\n\n# YOLOv4\n!python convert_tflite.py --weights ./checkpoints/yolov4-416 --output ./checkpoints/yolov4-416.tflite\n")),(0,r.kt)("h4",{id:"demo"},"Demo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!python detect.py --weights ./checkpoints/yolov4-416.tflite --size 416 --model yolov4 --image ./data/kite.jpg --framework tflite\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17769927/134549834-da73a045-05c9-4d6c-8772-90c4dca67cf7.jpg",alt:"result-9"})),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Precision: 91 %"),(0,r.kt)("li",{parentName:"ul"},"Average Precision: 89.80 %"),(0,r.kt)("li",{parentName:"ul"},"Recall: 86 %"),(0,r.kt)("li",{parentName:"ul"},"F1-score: 88 %"),(0,r.kt)("li",{parentName:"ul"},"Average IoU: 74.06 %"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:mAP@0.5"},"mAP@0.5"),": 89.80 %"),(0,r.kt)("li",{parentName:"ul"},"Confusion Matrix:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TP = 439"),(0,r.kt)("li",{parentName:"ul"},"FP = 45"),(0,r.kt)("li",{parentName:"ul"},"FN = 73"),(0,r.kt)("li",{parentName:"ul"},"unique_truth_count (TP+FN) = 512"),(0,r.kt)("li",{parentName:"ul"},"detections_count = 805")))))}m.isMDXComponent=!0}}]);