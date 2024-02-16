import{C as k}from"./index-c534a797.js";import{T as $}from"./index-032f356c.js";import{C as h}from"./index-e2e49b53.js";import{B as b}from"./index-4930b93a.js";import{_ as l,r as t,o as c,c as r,b as e,a as y,w as u}from"./index-bfbdc443.js";import{I as f}from"./index-f6b5bd19.js";import{S as v}from"./index-8f9ef5d2.js";import"./index-0dbc22a4.js";import"./vue-cleave.min-302d2ab9.js";import"./ck-white-c040c98a.js";const g={components:{Textinput:$,Checkbox:h,Button:b}},F={class:"space-y-4"},w={class:"ml-[124px] space-y-4"};function T(s,p,i,m,_,d){const o=t("Textinput"),n=t("Checkbox"),a=t("Button");return c(),r("div",F,[e(o,{label:"Full name",name:"h_Fullname",type:"text",placeholder:"Full name",horizontal:""}),e(o,{label:"Email",name:"h_email",type:"email",placeholder:"Type your email",horizontal:""}),e(o,{label:"Phone",name:"h_phone",type:"phone",placeholder:"Type your email",horizontal:""}),e(o,{label:"Password",name:"h_password",type:"Password",placeholder:"8+ characters, 1 capitat letter ",horizontal:""}),y("div",w,[e(n,{label:"Remember me",checked:""}),e(a,{text:"Submit",btnClass:"btn-dark"})])])}const z=l(g,[["render",T]]),B={components:{InputGroup:f,Checkbox:h,Button:b}},P={class:"space-y-4"},V={class:"ml-[124px] space-y-4"};function S(s,p,i,m,_,d){const o=t("InputGroup"),n=t("Checkbox"),a=t("Button");return c(),r("div",P,[e(o,{label:"Full name",name:"hi_Fullname",type:"text",placeholder:"Full name",horizontal:"",prependIcon:"heroicons-outline:user",merged:""}),e(o,{label:"Email",name:"hi_email",type:"email",placeholder:"Type your email",prependIcon:"heroicons-outline:mail",horizontal:"",merged:""}),e(o,{label:"Phone",name:"hi_phone",type:"phone",placeholder:"Type your email",prependIcon:"heroicons-outline:phone",horizontal:"",merged:""}),e(o,{label:"Password",name:"hi_password",type:"Password",placeholder:"8+ characters, 1 capitat letter ",prependIcon:"heroicons-outline:lock-closed",horizontal:"",merged:""}),y("div",V,[e(n,{label:"Remember me"}),e(a,{text:"Submit",btnClass:"btn-dark"})])])}const H=l(B,[["render",S]]),E={components:{Textinput:$,Checkbox:h,Button:b}},G={class:"space-y-4"};function R(s,p,i,m,_,d){const o=t("Textinput"),n=t("Checkbox"),a=t("Button");return c(),r("div",G,[e(o,{label:"Full name",name:"v_Fullname",type:"text",placeholder:"Full name"}),e(o,{label:"Email",name:"v_email",type:"email",placeholder:"Type your email"}),e(o,{label:"Phone",name:"v_phone",type:"phone",placeholder:"Type your email"}),e(o,{label:"Password",name:"v_password",type:"Password",placeholder:"8+ characters, 1 capitat letter "}),e(n,{label:"Remember me"}),e(a,{text:"Submit",btnClass:"btn-dark"})])}const M=l(E,[["render",R]]),N={components:{InputGroup:f,Checkbox:h,Button:b}},W={class:"space-y-4"};function j(s,p,i,m,_,d){const o=t("InputGroup"),n=t("Checkbox"),a=t("Button");return c(),r("div",W,[e(o,{label:"Full name",name:"vi_Fullname",type:"text",placeholder:"Full name",prependIcon:"heroicons-outline:user",merged:""}),e(o,{label:"Email",name:"vi_email",type:"email",placeholder:"Type your email",prependIcon:"heroicons-outline:mail",merged:""}),e(o,{label:"Phone",name:"vi_phone",type:"phone",placeholder:"Type your email",prependIcon:"heroicons-outline:phone",merged:""}),e(o,{label:"Password",name:"vi_password",type:"Password",placeholder:"8+ characters, 1 capitat letter ",prependIcon:"heroicons-outline:lock-closed",merged:""}),e(n,{label:"Remember me"}),e(a,{text:"Submit",btnClass:"btn-dark"})])}const q=l(N,[["render",j]]),A={components:{Textinput:$,Checkbox:h,Button:b,Select:v}},D={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},J={class:"space-y-5"};function K(s,p,i,m,_,d){const o=t("Textinput"),n=t("Select"),a=t("Checkbox"),x=t("Button");return c(),r("div",D,[e(o,{label:"Full name",name:"hmi_Fullname",type:"text",placeholder:"Full name"}),e(o,{label:"Email",name:"hmi_email",type:"email",placeholder:"Type your email"}),e(o,{label:"Phone",name:"hmi_phone",type:"phone",placeholder:"Type your email"}),e(o,{label:"Password",name:"hmi_password",type:"Password",placeholder:"8+ characters, 1 capitat letter "}),e(o,{label:"Company",name:"hmi_commpanyname",type:"text",placeholder:"Company name"}),e(n,{label:"Country",name:"hmi_country"}),y("div",J,[e(a,{label:"Remember me"}),e(x,{text:"Submit",btnClass:"btn-dark"})])])}const L=l(A,[["render",K]]);const O={components:{Card:k,Horizental:z,HorizentalIcon:H,Vertical:M,VerticalIcon:q,MultipuleCloumn:L}},Q={class:"grid xl:grid-cols-2 grid-cols-1 gap-5"},U={class:"xl:col-span-2"};function X(s,p,i,m,_,d){const o=t("Horizental"),n=t("Card"),a=t("HorizentalIcon"),x=t("Vertical"),C=t("VerticalIcon"),I=t("MultipuleCloumn");return c(),r("div",Q,[e(n,{title:"Horizontal Form"},{default:u(()=>[e(o)]),_:1}),e(n,{title:"Horizontal Form With Icons"},{default:u(()=>[e(a)]),_:1}),e(n,{title:"Vertical Form"},{default:u(()=>[e(x)]),_:1}),e(n,{title:"Vertical Form with Icon"},{default:u(()=>[e(C)]),_:1}),y("div",U,[e(n,{title:"Multiple Column"},{default:u(()=>[e(I)]),_:1})])])}const se=l(O,[["render",X]]);export{se as default};