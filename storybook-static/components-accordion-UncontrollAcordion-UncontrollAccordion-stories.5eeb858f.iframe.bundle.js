/*! For license information please see components-accordion-UncontrollAcordion-UncontrollAccordion-stories.5eeb858f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_kabzda=self.webpackChunkreact_kabzda||[]).push([[695],{"./src/components/accordion/UncontrollAcordion/UncontrollAccordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,collapsetAuto:()=>collapsetAuto,default:()=>UncontrollAccordion_stories});var react=__webpack_require__("./node_modules/react/index.js");const reducer=(state,action)=>{if("TOGGLE-COLLAPSED"===action.type)return{...state,collapsed:!state.collapsed};throw new Error("Bad action type")};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const style={cursor:"pointer"};function UncontrollAcordion(props){let[state,dispatch]=(0,react.useReducer)(reducer,{collapsed:!1});return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(AccordionTitle,{title:props.titleValue,onClick:()=>{dispatch({type:"TOGGLE-COLLAPSED"})}}),!state.collapsed&&(0,jsx_runtime.jsx)(AcordionBody,{})]})}function AccordionTitle(props){return(0,jsx_runtime.jsx)("h3",{style,onClick:()=>{props.onClick()},children:props.title})}function AcordionBody(){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"1"}),(0,jsx_runtime.jsx)("li",{children:"2"}),(0,jsx_runtime.jsx)("li",{children:"3"})]})})}UncontrollAcordion.__docgenInfo={description:"",methods:[],displayName:"UncontrollAcordion",props:{titleValue:{required:!0,tsType:{name:"string"},description:""}}};const UncontrollAccordion_stories={title:"UncontrollAcordion",components:UncontrollAcordion},collapsetAuto=()=>(0,jsx_runtime.jsx)(UncontrollAcordion,{titleValue:"Users"});collapsetAuto.parameters={...collapsetAuto.parameters,docs:{...collapsetAuto.parameters?.docs,source:{originalSource:"() => <UncontrollAcordion titleValue={'Users'} />",...collapsetAuto.parameters?.docs?.source}}};const __namedExportsOrder=["collapsetAuto"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);