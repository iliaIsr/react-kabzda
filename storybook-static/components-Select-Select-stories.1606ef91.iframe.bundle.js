/*! For license information please see components-Select-Select-stories.1606ef91.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_kabzda=self.webpackChunkreact_kabzda||[]).push([[925],{"./src/components/Select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WitchOutValue:()=>WitchOutValue,WitchValue:()=>WitchValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});var react=__webpack_require__("./node_modules/react/index.js");const Select_module_select="Select_select__kLKnz",Select_module_main="Select_main__wlFdY",Select_module_items="Select_items__LB-lu",Select_module_item="Select_item__aCPqW",Select_module_selected="Select_selected__BD49T";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Select(props){const[active,setActive]=(0,react.useState)(!1),[hoveredElementValue,setHoveredElementValue]=(0,react.useState)(props.value);console.log("rrr",(0,react.useState)(props.value));const selectedItem=props.items.find((el=>el.value===props.value)),hoveredItem=props.items.find((el=>el.value===hoveredElementValue));(0,react.useEffect)((()=>{setHoveredElementValue(props.value)}),[props.value]);const toggleItems=()=>setActive(!active);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:Select_module_select,onKeyUp:e=>{e.key;for(let i=0;i<props.items.length;i++)if(props.items[i].value===hoveredElementValue){const pretendentElement="ArrowDown"===e.key?props.items[i+1]:props.items[i-1];if(pretendentElement)return void props.onChange(pretendentElement.value)}selectedItem||props.onChange(props.items[0].value),props.onChange(props.items[0].value),"Enter"!==e.key&&"Escape"!==e.key||setActive(!1)},tabIndex:0,children:[(0,jsx_runtime.jsx)("span",{className:Select_module_main,onClick:toggleItems,children:selectedItem&&selectedItem.title}),active&&(0,jsx_runtime.jsx)("div",{className:Select_module_items,children:props.items.map((i=>(0,jsx_runtime.jsx)("div",{onMouseEnter:()=>{setHoveredElementValue(i.value)},onClick:()=>{var value;value=i.value,props.onChange(value),toggleItems()},className:Select_module_item+" "+(hoveredItem===i?Select_module_selected:""),children:i.title},i.value)))})]})})}Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"any"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n    title: string\r\n    value: any\r\n}",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}],raw:"ItemType[]"},description:""}}};const Select_stories={title:"Select",component:Select},WitchValue=()=>{const[value,setValue]=(0,react.useState)("2");return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Select,{onChange:setValue,value,items:[{value:"1",title:"Vitebsk"},{value:"2",title:"Moscow"},{value:"3",title:"Kyev"}]})})},WitchOutValue=()=>{const[value,setValue]=(0,react.useState)(null);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Select,{onChange:setValue,value,items:[{value:"1",title:"Minsk"},{value:"2",title:"Moscow"},{value:"3",title:"Kyev"}]})})};WitchValue.parameters={...WitchValue.parameters,docs:{...WitchValue.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState('2');\n  return <>\r\n        <Select onChange={setValue} value={value} items={[{\n      value: '1',\n      title: \"Vitebsk\"\n    }, {\n      value: '2',\n      title: \"Moscow\"\n    }, {\n      value: '3',\n      title: 'Kyev'\n    }]} />\r\n    </>;\n}",...WitchValue.parameters?.docs?.source}}},WitchOutValue.parameters={...WitchOutValue.parameters,docs:{...WitchOutValue.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState(null);\n  return <>\r\n        <Select onChange={setValue} value={value} items={[{\n      value: '1',\n      title: \"Minsk\"\n    }, {\n      value: '2',\n      title: \"Moscow\"\n    }, {\n      value: '3',\n      title: 'Kyev'\n    }]} />\r\n    </>;\n}",...WitchOutValue.parameters?.docs?.source}}};const __namedExportsOrder=["WitchValue","WitchOutValue"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);