import{C as b}from"./index-c534a797.js";import{I as h}from"./index-f6b5bd19.js";import{_ as s,r as n,o as c,c as r,b as e,w as o,a as m}from"./index-bfbdc443.js";import{B as $}from"./index-4930b93a.js";import{D as B}from"./index-479eaba9.js";import{I as G}from"./index-0dbc22a4.js";import"./vue-cleave.min-302d2ab9.js";import"./menu-60f67901.js";import"./keyboard-16767ccf.js";import"./use-outside-click-10b1ef55.js";import"./focus-management-2ab41560.js";import"./use-resolve-button-type-fb66ebe2.js";import"./open-closed-84e398ab.js";const w={components:{InputGroup:h}},z={class:"space-y-3"};function v(a,l,i,d,u,_){const t=n("InputGroup");return c(),r("div",z,[e(t,{type:"text",prependIcon:"heroicons-outline:search"}),e(t,{type:"text",appendIcon:"heroicons-outline:search"}),e(t,{type:"text",appendIcon:"heroicons-outline:search",disabled:"",placeholder:"Disable Input Group"}),e(t,{type:"text",prependIcon:"heroicons-outline:search",isReadonly:"",placeholder:"Readonly Input Group"}),e(t,{type:"text",label:"password",name:"ps-1",placeholder:"Your password"}),e(t,{type:"text",placeholder:"Username",prepend:"@"}),e(t,{type:"text",placeholder:"Recient’s username",append:"@example.com"}),e(t,{type:"text",prepend:"https://example.com/users/",placeholder:""}),e(t,{type:"text",prepend:"$",placeholder:"100",append:"00."})])}const C=s(w,[["render",v]]),D={components:{InputGroup:h}},k={class:"space-y-2"};function S(a,l,i,d,u,_){const t=n("InputGroup");return c(),r("div",k,[e(t,{label:"Large",name:"largesize",type:"text",placeholder:"Large Input",classInput:"h-[52px]",prepend:"@"}),e(t,{label:"Default",name:"defaultsize",type:"text",placeholder:"Default Input",prepend:"@"}),e(t,{label:"Small",name:"smallsize",type:"text",placeholder:"Small Input",classInput:"h-[32px] text-sm",prepend:"@"})])}const M=s(D,[["render",S]]),H={components:{InputGroup:h}},L={class:"space-y-2"};function R(a,l,i,d,u,_){const t=n("InputGroup");return c(),r("div",L,[e(t,{label:"Large",name:"largesize2",type:"text",placeholder:"Large Input",classInput:"h-[52px]",horizontal:"",prepend:"@"}),e(t,{label:"Default",name:"defaultsize2",type:"text",placeholder:"Default Input",horizontal:"",prepend:"@"}),e(t,{label:"Small",name:"smallsize2",type:"text",placeholder:"Small Input",classInput:"h-[32px] text-sm",horizontal:"",prepend:"@"})])}const A=s(H,[["render",R]]),N={components:{InputGroup:h}},P={class:"space-y-3"};function U(a,l,i,d,u,_){const t=n("InputGroup");return c(),r("div",P,[e(t,{type:"text",prependIcon:"heroicons-outline:search",merged:""}),e(t,{type:"text",appendIcon:"heroicons-outline:search",merged:""}),e(t,{type:"text",label:"password",name:"ps-1",placeholder:"Your password",merged:""}),e(t,{type:"text",placeholder:"Username",prepend:"@",merged:""}),e(t,{type:"text",placeholder:"Recient’s username",append:"@example.com",merged:""}),e(t,{type:"text",prepend:"https://example.com/users/",placeholder:"",merged:""}),e(t,{type:"text",prepend:"$",placeholder:"100",append:"00.",merged:""})])}const V=s(N,[["render",U]]),Y={components:{InputGroup:h,Button:$}},j={class:"space-y-5"};function E(a,l,i,d,u,_){const t=n("Button"),p=n("InputGroup");return c(),r("div",j,[e(p,{type:"text",placeholder:"Button on right"},{append:o(()=>[e(t,{text:"Go",btnClass:"btn-outline-dark "})]),_:1}),e(p,{type:"text",placeholder:"Button on both side"},{prepend:o(()=>[e(t,{icon:"heroicons-outline:search",btnClass:"btn-outline-dark"})]),append:o(()=>[e(t,{text:"Search",btnClass:"btn-outline-dark"})]),_:1})])}const W=s(Y,[["render",E]]),q={components:{InputGroup:h,Dropdown:B,Button:$,Icon:G}},F={class:"space-y-5"},J={class:"btn btn-outline-dark btn-sm"},K={class:"flex justify-between items-center"},O={class:"text-lg flex-1 mr-2"},Q={class:"text-base inline-block flex-none"};function T(a,l,i,d,u,_){const t=n("Button"),p=n("Dropdown"),x=n("InputGroup"),f=n("Icon");return c(),r("div",F,[e(x,{type:"text"},{prepend:o(()=>[e(p,{classMenuItems:"left-0  w-[220px] top-[110%] "},{default:o(()=>[e(t,{text:"Action",btnClass:"btn-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:"",iconClass:"text-lg"})]),_:1})]),_:1}),e(x,{type:"text"},{prepend:o(()=>[e(p,{classMenuItems:"left-0  w-[220px] top-[110%] "},{default:o(()=>[m("button",J,[m("span",K,[m("span",O,[e(f,{icon:"heroicons-outline:pencil"})]),m("span",Q,[e(f,{icon:"heroicons-outline:chevron-right"})])])])]),_:1})]),append:o(()=>[e(p,{classMenuItems:"left-0  w-[220px] top-[110%] "},{default:o(()=>[e(t,{text:"Action",btnClass:"btn-outline-dark btn-sm",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:"",iconClass:"text-lg"})]),_:1})]),_:1})])}const X=s(q,[["render",T]]);const Z={components:{Card:b,Basic:C,Size:M,Horizental:A,Merge:V,InputGroupButton:W,inputButtonDropdown:X}},ee={class:"grid xl:grid-cols-2 grid-cols-1 gap-5"},te={class:"card-auto-height2 space-y-5"},ne={class:"xl:col-span-2"};function oe(a,l,i,d,u,_){const t=n("Basic"),p=n("Card"),x=n("Size"),f=n("Horizental"),I=n("Merge"),y=n("InputGroupButton"),g=n("inputButtonDropdown");return c(),r("div",ee,[e(p,{title:"Basic Inputs"},{default:o(()=>[e(t)]),_:1}),m("div",te,[e(p,{title:"Sizing options"},{default:o(()=>[e(x)]),_:1}),e(p,{title:"Horizontal form label sizing"},{default:o(()=>[e(f)]),_:1})]),m("div",ne,[e(p,{title:"Merged"},{default:o(()=>[e(I)]),_:1})]),e(p,{title:"Input Groups with Buttons"},{default:o(()=>[e(y)]),_:1}),e(p,{title:"Input Groups With Dropdown"},{default:o(()=>[e(g)]),_:1})])}const fe=s(Z,[["render",oe]]);export{fe as default};
