import{_ as c,o as t,c as l,f as o,t as n,g as i,a as d,F as f,p as m,a1 as y}from"./index-bfbdc443.js";const b={props:{placeholder:{type:String,default:"Select Option"},label:{type:String},classLabel:{type:String,default:" "},classInput:{type:String,default:"classinput"},name:{type:String},modelValue:{default:""},error:{type:String},isReadonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1},validate:{type:String},msgTooltip:{type:Boolean,default:!1},formatter:{type:Function,default:a=>a},description:{type:String},size:{type:String},multiple:{type:Boolean,default:!1},options:{type:Array,default:()=>[{value:"",label:"Select Option"},{value:"",label:"Select Option2"}]}}},_=["for"],v={class:"relative"},g=["name","value","error","id","readonly","disabled","validate","formatter","size","multiple"],x={value:"",disabled:"",selected:""},k=["value"],S={key:3,class:"block text-secondary-500 font-light leading-4 text-xs mt-2"};function h(a,r,e,p,B,z){return t(),l("div",{class:o(["fromGroup relative",`${e.error?"has-error":""}  ${e.horizontal?"flex":""}  ${e.validate?"is-valid":""} `])},[e.label?(t(),l("label",{key:0,class:o(`${e.classLabel} inline-block input-label `),for:e.name},n(e.label),11,_)):i("",!0),d("div",v,[d("select",{name:e.name,class:o(`${e.classInput} input-control block w-full focus:outline-none min-h-[40px] `),value:e.modelValue,onInput:r[0]||(r[0]=s=>a.$emit("update:modelValue",s.target.value)),error:e.error,id:e.name,readonly:e.isReadonly,disabled:e.disabled,validate:e.validate,formatter:e.formatter,size:e.size,multiple:e.multiple},[d("option",x,n(e.placeholder),1),!a.$slots.default&&e.options?(t(!0),l(f,{key:0},m(e.options,(s,u)=>(t(),l("option",{value:s.value,key:u},n(s.label),9,k))),128)):i("",!0),a.$slots.default?y(a.$slots,"default",{key:1},void 0,!0):i("",!0)],42,g)]),e.error?(t(),l("span",{key:1,class:o(["mt-2",e.msgTooltip?" inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded":" text-danger-500 block text-sm"])},n(e.error),3)):i("",!0),e.validate?(t(),l("span",{key:2,class:o(["mt-2",e.msgTooltip?" inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded":" text-success-500 block text-sm"])},n(e.validate),3)):i("",!0),e.description?(t(),l("span",S,n(e.description),1)):i("",!0)],2)}const I=c(b,[["render",h],["__scopeId","data-v-da55253b"]]);export{I as S};