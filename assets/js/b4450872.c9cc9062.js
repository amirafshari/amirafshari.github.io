"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1520],{9348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(7624),r=n(5788);const s={slug:"license-plate-detector",title:"Automatic License Plate Detector",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Object Detection","Computer Vision","Deep Learning"]},a=void 0,o={permalink:"/blog/license-plate-detector",editUrl:"https://github.com/amirafshari/amirafshari.github.io/tree/main/blog/2021-09-02-license-plate-detector.md",source:"@site/blog/2021-09-02-license-plate-detector.md",title:"Automatic License Plate Detector",description:"result-9",date:"2021-09-02T00:00:00.000Z",formattedDate:"September 2, 2021",tags:[{label:"Object Detection",permalink:"/blog/tags/object-detection"},{label:"Computer Vision",permalink:"/blog/tags/computer-vision"},{label:"Deep Learning",permalink:"/blog/tags/deep-learning"}],readingTime:2.315,hasTruncateMarker:!0,authors:[{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"}],frontMatter:{slug:"license-plate-detector",title:"Automatic License Plate Detector",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Object Detection","Computer Vision","Deep Learning"]},unlisted:!1,nextItem:{title:"Train a Custom Object Detector",permalink:"/blog/train-custom-object-detector"}},l={authorsImageUrls:[void 0]},c=[{value:"Exploratory Data Analysis",id:"exploratory-data-analysis",level:2},{value:"Distributions",id:"distributions",level:3},{value:"X vs Y &amp; Height vs Width",id:"x-vs-y--height-vs-width",level:3},{value:"Tensorflow Implementation for YOLOv4",id:"tensorflow-implementation-for-yolov4",level:2},{value:"Environment Setup",id:"environment-setup",level:3},{value:"Conda Environment",id:"conda-environment",level:4},{value:"Requirements",id:"requirements",level:4},{value:"Check",id:"check",level:4},{value:"Set the environment as jupyter kernel",id:"set-the-environment-as-jupyter-kernel",level:4},{value:"Tensorflow",id:"tensorflow",level:3},{value:"Convert weights",id:"convert-weights",level:4},{value:"COCO Dataset",id:"coco-dataset",level:4},{value:"Custom Dataset",id:"custom-dataset",level:4},{value:"3. Tflite",id:"3-tflite",level:3},{value:"Convert",id:"convert",level:4},{value:"Demo",id:"demo",level:4},{value:"Metrics",id:"metrics",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.MN)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/17769927/134549834-da73a045-05c9-4d6c-8772-90c4dca67cf7.jpg",alt:"result-9"})}),"\n",(0,i.jsx)(t.h2,{id:"exploratory-data-analysis",children:"Exploratory Data Analysis"}),"\n",(0,i.jsxs)(t.p,{children:["How our data looks like?",(0,i.jsx)(t.br,{}),"\n","Annotations format (YOLO Format): [class, x_center, y_center, obj_width, obj_height]"]}),"\n",(0,i.jsx)(t.h3,{id:"distributions",children:"Distributions"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/17769927/134396237-178893ef-18f1-4df6-b3ea-fe4b235e3a27.png",alt:"1"})}),"\n",(0,i.jsx)(t.p,{children:"They make sense for number plate images"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["x values are well distributed, which means the cameraman did a good job ",":D"]}),"\n",(0,i.jsx)(t.li,{children:"y values are well distributed as well, but, most of the objects are on top of our images."}),"\n",(0,i.jsx)(t.li,{children:"both height and width make sense, because our object is licence plate and they all have almost similiar sizes."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"x-vs-y--height-vs-width",children:"X vs Y & Height vs Width"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/17769927/134396293-df5113b7-9237-4dfc-81ac-1a2bf6187826.png",alt:"2"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"As mentioned above, there is a lack in our dataset in buttom-half part of xy plane."}),"\n",(0,i.jsx)(t.li,{children:"As we can see, the center of our x axis is dense, it's beacuse humans put the object in the center of the camera."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"tensorflow-implementation-for-yolov4",children:"Tensorflow Implementation for YOLOv4"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["It's ",(0,i.jsx)(t.a,{href:"https://github.com/hunglc007/tensorflow-yolov4-tflite#traning-your-own-model",children:"recommended"})," to train your custom detector on ",(0,i.jsx)(t.a,{href:"https://amirafshari.com/blog/train-custom-object-detector",children:"darknet"}),", rather than this implemntation, and then convert your weights and use this implemntation."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"!git clone https://github.com/hunglc007/tensorflow-yolov4-tflite\n"})}),"\n",(0,i.jsx)(t.h3,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,i.jsx)(t.h4,{id:"conda-environment",children:"Conda Environment"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# Create\n# tf < 2.5 | python = 3.7\n# tf > 2.5 | python > 3.9\n!conda create --name envname python=3.7\n\n# Activate\n!activate envname\n"})}),"\n",(0,i.jsx)(t.h4,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# in tf > 2.5 both cpu and gpu use the same package\n\n# GPU\n!pip install -r requirements-gpu.txt\n\n# CPU\n!pip install -r requirements.txt\n"})}),"\n",(0,i.jsx)(t.h4,{id:"check",children:"Check"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"!conda list # installed packages in current env\n!python --version\n"})}),"\n",(0,i.jsx)(t.h4,{id:"set-the-environment-as-jupyter-kernel",children:"Set the environment as jupyter kernel"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"!pip install ipykernel\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"!python -m ipykernel install --user --name=envname\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then choose yolov4tf from kernels in your notebook"}),"\n",(0,i.jsx)(t.h3,{id:"tensorflow",children:"Tensorflow"}),"\n",(0,i.jsx)(t.h4,{id:"convert-weights",children:"Convert weights"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"!python save_model.py --weights ./data/yolov4.weights --output ./checkpoints/yolov4-416 --input_size 416 --model yolov4\n"})}),"\n",(0,i.jsx)(t.h4,{id:"coco-dataset",children:"COCO Dataset"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"!python detect.py --weights ./checkpoints/yolov4-416 --size 416 --model yolov4 --image ./data/kite.jpg\n"})}),"\n",(0,i.jsx)(t.h4,{id:"custom-dataset",children:"Custom Dataset"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Create a custom.names file in data/classes and type your class (based on your weights and training)"}),"\n",(0,i.jsx)(t.li,{children:"Call the custom.names in config.py (change coco.names to custom.names)"}),"\n",(0,i.jsx)(t.li,{children:"Change the paths in detect.py"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"!python detect.py --weights ./checkpoints/custom --size 416 --model yolov4 --image ./data/custom.jpg\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/17769927/134549864-703159d9-a8f2-41d0-b4ef-48e52bf770b9.jpg",alt:"result"})}),"\n",(0,i.jsx)(t.h3,{id:"3-tflite",children:"3. Tflite"}),"\n",(0,i.jsx)(t.p,{children:"Recommended for mobile and edge devices."}),"\n",(0,i.jsx)(t.h4,{id:"convert",children:"Convert"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# Save tf model for tflite converting\n!python save_model.py --weights ./data/yolov4.weights --output ./checkpoints/yolov4-416 --input_size 416 --model yolov4 --framework tflite\n\n# YOLOv4\n!python convert_tflite.py --weights ./checkpoints/yolov4-416 --output ./checkpoints/yolov4-416.tflite\n"})}),"\n",(0,i.jsx)(t.h4,{id:"demo",children:"Demo"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"!python detect.py --weights ./checkpoints/yolov4-416.tflite --size 416 --model yolov4 --image ./data/kite.jpg --framework tflite\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/17769927/134549834-da73a045-05c9-4d6c-8772-90c4dca67cf7.jpg",alt:"result-9"})}),"\n",(0,i.jsx)(t.h2,{id:"metrics",children:"Metrics"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Precision: 91 %"}),"\n",(0,i.jsx)(t.li,{children:"Average Precision: 89.80 %"}),"\n",(0,i.jsx)(t.li,{children:"Recall: 86 %"}),"\n",(0,i.jsx)(t.li,{children:"F1-score: 88 %"}),"\n",(0,i.jsx)(t.li,{children:"Average IoU: 74.06 %"}),"\n",(0,i.jsx)(t.li,{children:"mAP@0.5: 89.80 %"}),"\n",(0,i.jsxs)(t.li,{children:["Confusion Matrix:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"TP = 439"}),"\n",(0,i.jsx)(t.li,{children:"FP = 45"}),"\n",(0,i.jsx)(t.li,{children:"FN = 73"}),"\n",(0,i.jsx)(t.li,{children:"unique_truth_count (TP+FN) = 512"}),"\n",(0,i.jsx)(t.li,{children:"detections_count = 805"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.MN)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5788:(e,t,n)=>{n.d(t,{MN:()=>c});var i=n(1504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,p=u["".concat(l,".").concat(m)]||u[m]||h[m]||s;return n?i.createElement(p,a(a({ref:t},d),{},{components:n})):i.createElement(p,a({ref:t},d))}));d.displayName="MDXCreateElement"}}]);