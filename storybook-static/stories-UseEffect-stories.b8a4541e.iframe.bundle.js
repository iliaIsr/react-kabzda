/*! For license information please see stories-UseEffect-stories.b8a4541e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_kabzda=self.webpackChunkreact_kabzda||[]).push([[27],{"./src/stories/UseEffect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SetTimeOutExample:()=>SetTimeOutExample,SimpleExample:()=>SimpleExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"useEffect demo"},SimpleExample=()=>{const[counter,setCounter]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),[fake,setFake]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{console.log("counter:",counter),document.title=counter.toString()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["HELLO ",counter,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>setCounter(counter+1),children:"+"}),"It's Fake ",fake,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>setFake(fake+10),children:"X"})]})},SetTimeOutExample=()=>{const[counter,setCounter]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),[fake,setFake]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);return console.log("setTimeOutExample"),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setInterval((()=>{console.log("setTimeOut"),document.title=counter.toString(),setCounter((prevState=>prevState+1)),setCounter(counter+1)}),1e3)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{children:[" HELLO ",counter]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{children:["It's Fake ",fake," "]})]})};SimpleExample.parameters={...SimpleExample.parameters,docs:{...SimpleExample.parameters?.docs,source:{originalSource:"() => {\n  const [counter, setCounter] = useState(1);\n  const [fake, setFake] = useState(10);\n  useEffect(() => {\n    debugger;\n    console.log('counter:', counter);\n    document.title = counter.toString();\n  }, []);\n  return <>\r\n       HELLO {counter}\r\n    <button onClick={() => setCounter(counter + 1)}>+</button>\r\n        It's Fake {fake}\r\n        <button onClick={() => setFake(fake + 10)}>X</button>\r\n    </>;\n}",...SimpleExample.parameters?.docs?.source}}},SetTimeOutExample.parameters={...SetTimeOutExample.parameters,docs:{...SetTimeOutExample.parameters?.docs,source:{originalSource:"() => {\n  const [counter, setCounter] = useState(1);\n  const [fake, setFake] = useState(10);\n  console.log('setTimeOutExample');\n  //\n  // useEffect(()=>{\n  //     setTimeout(()=>{\n  //         console.log('setTimeOut')\n  //         document.title=counter.toString()\n  //     },1000)\n  // },[counter])\n\n  useEffect(() => {\n    setInterval(() => {\n      console.log('setTimeOut');\n      document.title = counter.toString();\n      setCounter(prevState => prevState + 1);\n      setCounter(counter + 1);\n    }, 1000);\n  }, []);\n  return <>\r\n       <p> HELLO {counter}</p>\r\n        {/*<button onClick={()=>setCounter(counter+1)}>+</button>*/}\r\n       <p>It's Fake {fake} </p>\r\n        {/*<button onClick={()=>setFake(fake+10)}>X</button>*/}\r\n    </>;\n}",...SetTimeOutExample.parameters?.docs?.source}}};const __namedExportsOrder=["SimpleExample","SetTimeOutExample"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);