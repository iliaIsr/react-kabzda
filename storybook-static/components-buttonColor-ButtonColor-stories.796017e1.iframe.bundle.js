/*! For license information please see components-buttonColor-ButtonColor-stories.796017e1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_kabzda=self.webpackChunkreact_kabzda||[]).push([[799],{"./src/components/buttonColor/ButtonColor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonJob:()=>ButtonJob,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ButtonColor_stories});var react=__webpack_require__("./node_modules/react/index.js");const Button_module_butColor1="Button_butColor1__15MwT",Button_module_butColor2="Button_butColor2__Tjo7C",Button_module_butColor3="Button_butColor3__rmQno",Button_module_butColor4="Button_butColor4__fVWDR";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonColor=props=>{const[color,setColor]=(0,react.useState)(1);return(0,jsx_runtime.jsx)("button",{className:1===color?Button_module_butColor1:2===color?Button_module_butColor2:3===color?Button_module_butColor3:Button_module_butColor4,onClick:()=>{4===color?(setColor(1),console.log(color)):(setColor(color+1),console.log(color))},children:props.title})};ButtonColor.__docgenInfo={description:"",methods:[],displayName:"ButtonColor",props:{title:{required:!0,tsType:{name:"string"},description:""}}};const ButtonColor_stories={title:"ButtonColor",component:ButtonColor},ButtonJob=()=>(0,jsx_runtime.jsx)(ButtonColor,{title:"color"});ButtonJob.parameters={...ButtonJob.parameters,docs:{...ButtonJob.parameters?.docs,source:{originalSource:"() => {\n  return <ButtonColor title={'color'} />;\n}",...ButtonJob.parameters?.docs?.source}}};const __namedExportsOrder=["ButtonJob"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);