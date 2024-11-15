/*! For license information please see components-rating-Rating-stories.a210784d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_kabzda=self.webpackChunkreact_kabzda||[]).push([[655],{"./src/components/rating/Rating.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,changeStars:()=>changeStars,default:()=>Rating_stories,fiveStars:()=>fiveStars,fourStars:()=>fourStars,oneStars:()=>oneStars,threeStars:()=>threeStars,twoStars:()=>twoStars,zeroStars:()=>zeroStars});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Rating(props){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Star,{selected:props.value>0,onClick:props.onClick,value:1}),(0,jsx_runtime.jsx)(Star,{selected:props.value>1,onClick:props.onClick,value:2}),(0,jsx_runtime.jsx)(Star,{selected:props.value>2,onClick:props.onClick,value:3}),(0,jsx_runtime.jsx)(Star,{selected:props.value>3,onClick:props.onClick,value:4}),(0,jsx_runtime.jsx)(Star,{selected:props.value>4,onClick:props.onClick,value:5})]})}function Star(props){return(0,jsx_runtime.jsx)("span",{onClick:()=>{props.onClick(props.value)},children:props.selected?(0,jsx_runtime.jsx)("b",{children:"star "}):"star "})}Rating.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{value:{required:!0,tsType:{name:"union",raw:"0|1|2|3|4|5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(value:RatingValueType)=>void",signature:{arguments:[{type:{name:"union",raw:"0|1|2|3|4|5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},name:"value"}],return:{name:"void"}}},description:""}}};const Rating_stories={title:"Rating",component:Rating},zeroStars=()=>(0,jsx_runtime.jsx)(Rating,{value:0,onClick:x=>x}),oneStars=()=>(0,jsx_runtime.jsx)(Rating,{value:1,onClick:x=>x}),twoStars=()=>(0,jsx_runtime.jsx)(Rating,{value:2,onClick:x=>x}),threeStars=()=>(0,jsx_runtime.jsx)(Rating,{value:3,onClick:x=>x}),fourStars=()=>(0,jsx_runtime.jsx)(Rating,{value:4,onClick:x=>x}),fiveStars=()=>(0,jsx_runtime.jsx)(Rating,{value:5,onClick:x=>x}),changeStars=()=>{const[value,setValue]=(0,react.useState)(0);return(0,jsx_runtime.jsx)(Rating,{value,onClick:setValue})};zeroStars.parameters={...zeroStars.parameters,docs:{...zeroStars.parameters?.docs,source:{originalSource:"() => <Rating value={0} onClick={x => x} />",...zeroStars.parameters?.docs?.source}}},oneStars.parameters={...oneStars.parameters,docs:{...oneStars.parameters?.docs,source:{originalSource:"() => <Rating value={1} onClick={x => x} />",...oneStars.parameters?.docs?.source}}},twoStars.parameters={...twoStars.parameters,docs:{...twoStars.parameters?.docs,source:{originalSource:"() => <Rating value={2} onClick={x => x} />",...twoStars.parameters?.docs?.source}}},threeStars.parameters={...threeStars.parameters,docs:{...threeStars.parameters?.docs,source:{originalSource:"() => <Rating value={3} onClick={x => x} />",...threeStars.parameters?.docs?.source}}},fourStars.parameters={...fourStars.parameters,docs:{...fourStars.parameters?.docs,source:{originalSource:"() => <Rating value={4} onClick={x => x} />",...fourStars.parameters?.docs?.source}}},fiveStars.parameters={...fiveStars.parameters,docs:{...fiveStars.parameters?.docs,source:{originalSource:"() => <Rating value={5} onClick={x => x} />",...fiveStars.parameters?.docs?.source}}},changeStars.parameters={...changeStars.parameters,docs:{...changeStars.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState<1 | 2 | 3 | 4 | 5 | 0>(0);\n  return <Rating value={value} onClick={setValue} />;\n}",...changeStars.parameters?.docs?.source}}};const __namedExportsOrder=["zeroStars","oneStars","twoStars","threeStars","fourStars","fiveStars","changeStars"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);