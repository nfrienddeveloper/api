import{_ as p,z as c,A as b,q as f,o as t,c as o,a as n,Q as k,S as g,ao as h,f as i,g as u,t as C,a1 as v}from"./index-bfbdc443.js";import{_ as y}from"./ck-white-c040c98a.js";const V=c({name:"Checkbox",inheritAttrs:!1,props:{label:{type:String},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:"checkbox"},activeClass:{type:String,default:" ring-black-500  bg-slate-900 dark:bg-slate-700 dark:ring-slate-700 "},value:{type:null},modelValue:{type:null}},emits:{"update:modelValue":e=>({modelValue:e})},setup(e,a){const l=b(e.checked),r=()=>{l.value=!l.value};return{localValue:f({get:()=>e.modelValue,set:d=>a.emit("update:modelValue",d)}),ck:l,onChange:r}}}),S=["disabled","name","value"],$={key:0,src:y,alt:"",class:"h-[10px] w-[10px] block m-auto"},B={key:0,class:"text-slate-500 dark:text-slate-400 text-sm leading-6"};function w(e,a,l,r,m,d){return t(),o("div",null,[n("label",{class:i(["flex items-center",e.disabled?" cursor-not-allowed opacity-50":"cursor-pointer"])},[k(n("input",h({type:"checkbox",class:"hidden",disabled:e.disabled,name:e.name,onChange:a[0]||(a[0]=(...s)=>e.onChange&&e.onChange(...s)),value:e.value,"onUpdate:modelValue":a[1]||(a[1]=s=>e.localValue=s)},e.$attrs),null,16,S),[[g,e.localValue]]),n("span",{class:i(["h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150",e.ck?e.activeClass+" ring-2 ring-offset-2 dark:ring-offset-slate-800 ":"bg-slate-100 dark:bg-slate-600 dark:border-slate-600"])},[e.ck?(t(),o("img",$)):u("",!0)],2),e.label?(t(),o("span",B,C(e.label),1)):u("",!0),v(e.$slots,"labelHtml")],2)])}const D=p(V,[["render",w]]);export{D as C};
