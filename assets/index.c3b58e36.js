var V=Object.defineProperty,j=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var w=(t,e,r)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,y=(t,e)=>{for(var r in e||(e={}))H.call(e,r)&&w(t,r,e[r]);if(C)for(var r of C(e))T.call(e,r)&&w(t,r,e[r]);return t},E=(t,e)=>j(t,A(e));import{c as N,T as I,E as M,a as k,b as L}from"./index.esm.4464adb4.js";import{y as h,L as m,M as P,$,P as R,az as J,aG as z,o as v,p as x,aA as U,I as F,D as q,S as p,q as b,H as g,C as f,J as D}from"./index.500a2c47.js";import{u as G}from"./hooks.25862522.js";var K=Object.defineProperty,Q=Object.defineProperties,W=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,O=(t,e,r)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Z=(t,e)=>{for(var r in e||(e={}))X.call(e,r)&&O(t,r,e[r]);if(B)for(var r of B(e))Y.call(e,r)&&O(t,r,e[r]);return t},ee=(t,e)=>Q(t,W(e));function s(t){let e=`\u8BF7\u4F7F\u7528 '@${t}' \u4E8B\u4EF6\uFF0C\u4E0D\u8981\u653E\u5728 props \u4E2D`;return e+=`
Please use '@${t}' event instead of props`,e}var S=(t,e)=>{for(const[r,a]of e)t[r]=a;return t};const te=h({props:{mode:{type:String,default:"default"},defaultContent:{type:Array,default:[]},defaultHtml:{type:String,default:""},defaultConfig:{type:Object,default:{}},modelValue:{type:String,default:""}},setup(t,e){const r=m(null),a=P(null),d=m(""),c=()=>{if(!r.value)return;const l=z(t.defaultContent);N({selector:r.value,mode:t.mode,content:l||[],html:t.defaultHtml||t.modelValue||"",config:ee(Z({},t.defaultConfig),{onCreated(o){if(a.value=o,e.emit("onCreated",o),t.defaultConfig.onCreated){const n=s("onCreated");throw new Error(n)}},onChange(o){const n=o.getHtml();if(d.value=n,e.emit("update:modelValue",n),e.emit("onChange",o),t.defaultConfig.onChange){const u=s("onChange");throw new Error(u)}},onDestroyed(o){if(e.emit("onDestroyed",o),t.defaultConfig.onDestroyed){const n=s("onDestroyed");throw new Error(n)}},onMaxLength(o){if(e.emit("onMaxLength",o),t.defaultConfig.onMaxLength){const n=s("onMaxLength");throw new Error(n)}},onFocus(o){if(e.emit("onFocus",o),t.defaultConfig.onFocus){const n=s("onFocus");throw new Error(n)}},onBlur(o){if(e.emit("onBlur",o),t.defaultConfig.onBlur){const n=s("onBlur");throw new Error(n)}},customAlert(o,n){if(e.emit("customAlert",o,n),t.defaultConfig.customAlert){const u=s("customAlert");throw new Error(u)}},customPaste:(o,n)=>{if(t.defaultConfig.customPaste){const i=s("customPaste");throw new Error(i)}let u;return e.emit("customPaste",o,n,i=>{u=i}),u}})})};function _(l){const o=a.value;if(o==null)return;const n=o.isDisabled(),u=o.isFocused(),i=JSON.stringify(o.selection);if(o.enable(),o.focus(),o.select([]),o.deleteFragment(),I.setNodes(o,{type:"paragraph"},{mode:"highest"}),o.dangerouslyInsertHtml(l),u||(o.deselect(),o.blur()),n&&(o.deselect(),o.disable()),o.isFocused())try{o.select(JSON.parse(i))}catch{o.select(M.start(o,[]))}}return $(()=>{c()}),R(()=>t.modelValue,l=>{l!==d.value&&_(l)}),{box:r}}}),oe={ref:"box",style:{height:"100%"}};function re(t,e,r,a,d,c){return v(),x("div",oe,null,512)}var ne=S(te,[["render",re]]);const ae=h({props:{editor:{type:Object},mode:{type:String,default:"default"},defaultConfig:{type:Object,default:{}}},setup(t){const e=m(null),r=a=>{if(!!e.value){if(a==null)throw new Error("Not found instance of Editor when create <Toolbar/> component");k.getToolbar(a)||L({editor:a,selector:e.value||"<div></div>",mode:t.mode,config:t.defaultConfig})}};return J(()=>{const{editor:a}=t;a!=null&&r(a)}),{selector:e}}}),le={ref:"selector"};function ue(t,e,r,a,d,c){return v(),x("div",le,null,512)}var se=S(ae,[["render",ue]]);const ie={class:"card-header"},de={class:"font-medium"},ce=D("\u7F16\u8F91\u5668\u7EC4\u4EF6\uFF0C\u91C7\u7528\u5F00\u6E90\u7684"),fe=D("wangeditor"),me={name:"reEditor"},Ce=h(E(y({},me),{setup(t){const e="default",r=P(),a=m("<p>hello</p>");$(()=>{setTimeout(()=>{a.value="<p>\u6A21\u62DF Ajax \u5F02\u6B65\u8BBE\u7F6E\u5185\u5BB9</p>"},1500)});const d={excludeKeys:"fullScreen"},c={placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9..."};U(()=>{const l=r.value;l!=null&&l.destroy()});const _=l=>{r.value=l};return(l,o)=>{const n=F("el-link"),u=F("el-card");return v(),q(u,null,{header:p(()=>[b("div",ie,[b("span",de,[ce,g(n,{href:"https://www.wangeditor.com",target:"_blank",icon:f(G)("edit"),style:{"font-size":"16px",margin:"0 4px 5px"}},{default:p(()=>[fe]),_:1},8,["icon"])])])]),default:p(()=>[g(f(se),{style:{"border-bottom":"1px solid #ccc"},editor:f(r),defaultConfig:d,mode:e},null,8,["editor"]),g(f(ne),{style:{height:"500px","overflow-y":"hidden"},modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=i=>a.value=i),defaultConfig:c,mode:e,onOnCreated:_},null,8,["modelValue"])]),_:1})}}}));export{Ce as default};
