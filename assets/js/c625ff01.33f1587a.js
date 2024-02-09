"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[476],{1296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7624),r=n(5788);const i={slug:"train-custom-object-detector",title:"Train a Custom Object Detector",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Object Detection","Computer Vision","Deep Learning"]},o=void 0,s={permalink:"/blog/train-custom-object-detector",editUrl:"https://github.com/amirafshari/amirafshari.github.io/tree/main/blog/2021-08-28-train-custom-object-detector.md",source:"@site/blog/2021-08-28-train-custom-object-detector.md",title:"Train a Custom Object Detector",description:"download",date:"2021-08-28T00:00:00.000Z",formattedDate:"August 28, 2021",tags:[{label:"Object Detection",permalink:"/blog/tags/object-detection"},{label:"Computer Vision",permalink:"/blog/tags/computer-vision"},{label:"Deep Learning",permalink:"/blog/tags/deep-learning"}],readingTime:2.22,hasTruncateMarker:!0,authors:[{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"}],frontMatter:{slug:"train-custom-object-detector",title:"Train a Custom Object Detector",authors:{name:"Amir Afshari",title:"Machine Learning Engineer",url:"https://github.com/amirafshari",image_url:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4",imageURL:"https://avatars.githubusercontent.com/u/17769927?s=400&u=d630f608970a53d00295f2e87e88526b41b7d0b1&v=4"},tags:["Object Detection","Computer Vision","Deep Learning"]},unlisted:!1,prevItem:{title:"Automatic License Plate Detector",permalink:"/blog/license-plate-detector"},nextItem:{title:"Persian Podcasts on Spotify",permalink:"/blog/spotify-persian-podcasts"}},c={authorsImageUrls:[void 0]},l=[{value:"Darknet Configurations",id:"darknet-configurations",level:2},{value:"GPU",id:"gpu",level:3},{value:"Weights",id:"weights",level:3},{value:"Generate train.txt and test.txt",id:"generate-traintxt-and-testtxt",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Training",id:"training",level:2},{value:"Configurations",id:"configurations-1",level:3},{value:"Train",id:"train",level:3},{value:"Restart",id:"restart",level:3},{value:"Sanity Check",id:"sanity-check",level:2},{value:"Setup",id:"setup",level:4},{value:"COCO Dataset",id:"coco-dataset",level:4},{value:"Custom Dataset",id:"custom-dataset",level:4},{value:"Metrics",id:"metrics",level:2}];function d(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.MN)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/17769927/138662797-827178bd-ce03-4896-b093-1705c3ac6d4f.png",alt:"download"})}),"\n",(0,a.jsx)(t.h2,{id:"darknet-configurations",children:"Darknet Configurations"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["This documentation is for Google Colab. If you want to know how to compile darknet on your linux local machine (Ubuntu 20.04), please read ",(0,a.jsx)(t.a,{href:"https://github.com/amirafshari/LPD-YOLOv4/blob/master/darknet-linux.md",children:"this documentation"}),"."]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# clone repo\n#!git clone https://github.com/AlexeyAB/darknet\n!git clone https://github.com/amirafshari/LPD-YOLOv4\n"})}),"\n",(0,a.jsx)(t.h3,{id:"gpu",children:"GPU"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# change makefile to have GPU and OPENCV enabled\n%cd darknet\n!sed -i 's/OPENCV=0/OPENCV=1/' Makefile\n!sed -i 's/GPU=0/GPU=1/' Makefile\n!sed -i 's/CUDNN=0/CUDNN=1/' Makefile\n!sed -i 's/CUDNN_HALF=0/CUDNN_HALF=1/' Makefile\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# verify CUDA\n!/usr/local/cuda/bin/nvcc --version\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# make darknet\n!make\n"})}),"\n",(0,a.jsx)(t.h3,{id:"weights",children:"Weights"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# pre-trained weights on MS COCO dataset\n!wget https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v3_optimal/yolov4.weights\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# pre-trained weights for the convolutional layers\n!wget https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v3_optimal/yolov4.conv.137\n"})}),"\n",(0,a.jsx)(t.h3,{id:"generate-traintxt-and-testtxt",children:"Generate train.txt and test.txt"}),"\n",(0,a.jsx)(t.p,{children:"These files are not in the official repo, but you can find them in my repository."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!python generate_train.py\n!python generate_test.py\n"})}),"\n",(0,a.jsx)(t.h3,{id:"configurations",children:"Configurations"}),"\n",(0,a.jsx)(t.p,{children:"We need to change/create these files (I configured them for our object (which is license plate), and put them in this repository):"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"data/obj.names"}),"\n",(0,a.jsx)(t.li,{children:"data/obj.data"}),"\n",(0,a.jsx)(t.li,{children:"cfg/yolov4-custom.cgf"}),"\n",(0,a.jsx)(t.li,{children:"cfg/yolov4-obj.cfg"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"training",children:"Training"}),"\n",(0,a.jsx)(t.h3,{id:"configurations-1",children:"Configurations"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/AlexeyAB/darknet#how-to-train-to-detect-your-custom-objects",children:"https://github.com/AlexeyAB/darknet#how-to-train-to-detect-your-custom-objects"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"1 Epoch = images_in_train_txt / batch = 2000 / 32 = 62.5"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"train",children:"Train"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Access Denied Error\n!chmod +x ./darknet\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# set custom cfg to train mode \n%cd cfg\n!sed -i 's/batch=1/batch=64/' yolov4-obj.cfg\n!sed -i 's/subdivisions=1/subdivisions=16/' yolov4-obj.cfg\n%cd ..\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!./darknet detector train ./data/obj.data ./cfg/yolov4-obj.cfg yolov4.conv.137 -dont_show -map\n"})}),"\n",(0,a.jsx)(t.h3,{id:"restart",children:"Restart"}),"\n",(0,a.jsxs)(t.p,{children:["In case of intruption, we can restart training from our last weight.",(0,a.jsx)(t.br,{}),"\n","(every 100 iterations our weights are saved to backup folder in yolov4-obj_last.weights) (~every 30 minutes)",(0,a.jsx)(t.br,{}),"\n","(every 1000 iterations our weight are saved to backup folder in yolo-obj_xxxx.weights)"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!./darknet detector train ./data/obj.data ./cfg/yolov4-obj.cfg ./backup/yolov4-obj_last.weights -dont_show -map\n"})}),"\n",(0,a.jsx)(t.h2,{id:"sanity-check",children:"Sanity Check"}),"\n",(0,a.jsx)(t.h4,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# set custom cfg to test mode \n%cd cfg\n!sed -i 's/batch=64/batch=1/' yolov4-obj.cfg\n!sed -i 's/subdivisions=16/subdivisions=1/' yolov4-obj.cfg\n%cd ..\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'def imShow(path):\n  import cv2\n  import matplotlib.pyplot as plt\n  %matplotlib inline\n\n  image = cv2.imread(path)\n  height, width = image.shape[:2]\n  resized_image = cv2.resize(image,(3*width, 3*height), interpolation = cv2.INTER_CUBIC)\n\n  fig = plt.gcf()\n  fig.set_size_inches(18, 10)\n  plt.axis("off")\n  plt.imshow(cv2.cvtColor(resized_image, cv2.COLOR_BGR2RGB))\n  plt.show()\n'})}),"\n",(0,a.jsx)(t.h4,{id:"coco-dataset",children:"COCO Dataset"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!./darknet detector test cfg/coco.data cfg/yolov4.cfg yolov4.weights data/person.jpg\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"imShow('./predictions.jpg')\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/17769927/138662797-827178bd-ce03-4896-b093-1705c3ac6d4f.png",alt:"download"})}),"\n",(0,a.jsx)(t.h4,{id:"custom-dataset",children:"Custom Dataset"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!./darknet detector test ./data/obj.data ./cfg/yolov4-obj.cfg ./backup/yolov4-obj_last.weights ../Cars354.png -thresh 0.3\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"imShow('./predictions.jpg')\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/17769927/134551901-37ff3f6d-37ae-42dc-96c3-8064786355fe.jpg",alt:"result-4"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"To process a list of images data/train.txt and save results of detection to result.json file use"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!./darknet detector test data/obj.data cfg/yolov4-obj.cfg backup/yolov4-obj_last.weights -ext_output -dont_show -out result.json < data/test.txt\n"})}),"\n",(0,a.jsx)(t.h2,{id:"metrics",children:"Metrics"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Use -map flag while training for charts"}),(0,a.jsx)(t.br,{}),"\n","mAP-chart (red-line) and Loss-chart (blue-line) will be saved in root directory.",(0,a.jsx)(t.br,{}),"\n","mAP will be calculated for each 4 Epochs ~ 240 batches"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!./darknet detector map data/obj.data cfg/yolov4-obj.cfg backup/custom.weights\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.MN)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5788:(e,t,n)=>{n.d(t,{MN:()=>l});var a=n(1504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,p=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(p,o(o({ref:t},h),{},{components:n})):a.createElement(p,o({ref:t},h))}));h.displayName="MDXCreateElement"}}]);