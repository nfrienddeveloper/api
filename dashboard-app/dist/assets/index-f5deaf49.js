import{B as d}from"./index-4930b93a.js";import{_ as p,r as l,o as r,c,F as h,p as _,m,f as y,b as t,w as a,a as e}from"./index-bfbdc443.js";import{C as f}from"./index-c534a797.js";import"./index-0dbc22a4.js";const w={components:{Button:d},props:{btnClass:{type:String,default:"btn-outline-primary"},groupButtons:{type:Array,default:()=>[{title:"Weekly"},{title:"Monthly"},{title:"Yearly"}]}},data(){return{activeIndex:0}}},k={class:"btn-group"};function v(u,x,b,g,o,C){const n=l("Button");return r(),c("div",k,[(r(!0),c(h,null,_(b.groupButtons,(s,i)=>(r(),m(n,{key:i,text:s.title,class:y({active:o.activeIndex===i}),onClick:Y=>o.activeIndex=o.activeIndex===i?null:i,btnClass:b.btnClass,icon:s.icon,iconPosition:s.iconPosition},null,8,["text","class","onClick","btnClass","icon","iconPosition"]))),128))])}const L=p(w,[["render",v]]);const B={components:{Button:d,GroupButton:L,Card:f},data(){return{prevNext:[{title:"Back",icon:"heroicons-outline:chevron-left"},{title:"Next",icon:"heroicons-outline:chevron-right",iconPosition:"right"}]}}},D={class:"grid xl:grid-cols-2 grid-cols-1 gap-6"},I={class:"btn-group-example"},R={class:"btn-group-example"},P={class:"btn-group-example"},W={class:"btn-group-example"},N={class:"btn-group-example"},G={class:"btn-group-example"},$={class:"btn-group-example"},S={class:"btn-group-example"},z={class:"btn-group-example"},F={class:"btn-group-example"},O={class:"btn-group-example"},V={class:"btn-group"},j={class:"grid grid-cols-1 gap-4"},A={class:"grid grid-cols-1 gap-4"},E={class:"btn-group-example"};function M(u,x,b,g,o,C){const n=l("Button"),s=l("Card"),i=l("GroupButton");return r(),c("div",D,[t(s,{title:"Basic"},{default:a(()=>[e("div",I,[t(n,{text:"primary",btnClass:"btn-primary "}),t(n,{text:"secondary",btnClass:"btn-secondary"}),t(n,{text:"success",btnClass:"btn-success"}),t(n,{text:"info",btnClass:"btn-info"}),t(n,{text:"warning",btnClass:"btn-warning"}),t(n,{text:"danger",btnClass:"btn-danger"}),t(n,{text:"Dark",btnClass:"btn-dark"}),t(n,{text:"Light",btnClass:"btn-light"}),t(n,{text:"White",btnClass:"bg-white text-slate-900"})])]),_:1}),t(s,{title:"Outline"},{default:a(()=>[e("div",R,[t(n,{text:"primary",btnClass:"btn-outline-primary"}),t(n,{text:"secondary",btnClass:"btn-outline-secondary"}),t(n,{text:"success",btnClass:"btn-outline-success"}),t(n,{text:"info",btnClass:"btn-outline-info"}),t(n,{text:"warning",btnClass:"btn-outline-warning"}),t(n,{text:"danger",btnClass:"btn-outline-danger"}),t(n,{text:"dark",btnClass:"btn-outline-dark"}),t(n,{text:"light",btnClass:"btn-outline-light"})])]),_:1}),t(s,{title:"Light Color"},{default:a(()=>[e("div",P,[t(n,{text:"primary",btnClass:"btn-primary light"}),t(n,{text:"secondary",btnClass:" btn-secondary light"}),t(n,{text:"success",btnClass:" btn-success light"}),t(n,{text:"info",btnClass:" btn-info light"}),t(n,{text:"warning",btnClass:" btn-warning light"}),t(n,{text:"danger",btnClass:" btn-danger light"}),t(n,{text:"Dark",btnClass:" btn-dark light"}),t(n,{text:"Light",btnClass:" btn-light light"})])]),_:1}),t(s,{title:"Raised"},{default:a(()=>[e("div",W,[t(n,{text:"primary",btnClass:"btn-primary shadow-base2"}),t(n,{text:"secondary",btnClass:" btn-secondary shadow-base2"}),t(n,{text:"success",btnClass:" btn-success shadow-base2"}),t(n,{text:"info",btnClass:" btn-info shadow-base2"}),t(n,{text:"warning",btnClass:" btn-warning shadow-base2"}),t(n,{text:"danger",btnClass:" btn-danger shadow-base2"}),t(n,{text:"Dark",btnClass:" btn-dark shadow-base2"}),t(n,{text:"Light",btnClass:" btn-light shadow-base2"}),t(n,{text:"White",btnClass:" bg-white text-slate-900 shadow-base2"})])]),_:1}),t(s,{title:"Rounded"},{default:a(()=>[e("div",N,[t(n,{text:"primary",btnClass:"btn-primary rounded-[999px]"}),t(n,{text:"secondary",btnClass:" btn-secondary rounded-[999px]"}),t(n,{text:"success",btnClass:" btn-success rounded-[999px]"}),t(n,{text:"info",btnClass:" btn-info rounded-[999px]"}),t(n,{text:"warning",btnClass:" btn-warning rounded-[999px]"}),t(n,{text:"danger",btnClass:" btn-danger rounded-[999px]"}),t(n,{text:"Dark",btnClass:" btn-dark rounded-[999px]"}),t(n,{text:"Light",btnClass:" btn-light rounded-[999px]"}),t(n,{text:"White",btnClass:" bg-white text-slate-900 rounded-[999px]"})])]),_:1}),t(s,{title:"Rounded Outline"},{default:a(()=>[e("div",G,[t(n,{text:"primary",btnClass:"btn-outline-primary rounded-[999px]"}),t(n,{text:"secondary",btnClass:"btn-outline-secondary rounded-[999px]"}),t(n,{text:"success",btnClass:"btn-outline-success rounded-[999px]"}),t(n,{text:"info",btnClass:"btn-outline-info rounded-[999px]"}),t(n,{text:"warning",btnClass:"btn-outline-warning rounded-[999px]"}),t(n,{text:"danger",btnClass:"btn-outline-danger rounded-[999px]"}),t(n,{text:"dark",btnClass:"btn-outline-dark rounded-[999px]"}),t(n,{text:"light",btnClass:"btn-outline-light rounded-[999px]"})])]),_:1}),t(s,{title:"Icon"},{default:a(()=>[e("div",$,[t(n,{icon:"heroicons-outline:newspaper",text:"Left Icon",btnClass:"btn-primary "}),t(n,{icon:"heroicons-outline:newspaper",text:"Left Icon",btnClass:"btn-outline-primary "}),t(n,{icon:"heroicons-outline:newspaper",text:"Right Icon",btnClass:"btn-primary ",iconPosition:"right"}),t(n,{icon:"heroicons-outline:newspaper",text:"Right Icon",btnClass:"btn-outline-primary ",iconPosition:"right"}),t(n,{icon:"heroicons-outline:newspaper",btnClass:"btn-outline-primary"}),t(n,{icon:"heroicons-outline:newspaper",btnClass:"btn-primary"})])]),_:1}),t(s,{title:"Icon Rounded"},{default:a(()=>[e("div",S,[t(n,{icon:"heroicons-outline:newspaper",text:"Left Icon",btnClass:"btn-primary  rounded-[999px]"}),t(n,{icon:"heroicons-outline:newspaper",text:"Left Icon",btnClass:"btn-outline-primary rounded-[999px] "}),t(n,{icon:"heroicons-outline:newspaper",text:"Right Icon",btnClass:"btn-primary rounded-[999px]",iconPosition:"right"}),t(n,{icon:"heroicons-outline:newspaper",text:"Right Icon",btnClass:"btn-outline-primary rounded-[999px]",iconPosition:"right"}),t(n,{icon:"heroicons-outline:newspaper",btnClass:"btn-outline-primary  rounded-[999px]"}),t(n,{icon:"heroicons-outline:newspaper",btnClass:"btn-primary  rounded-[999px]"}),t(n,{icon:"heroicons-outline:newspaper",btnClass:"btn-primary  p-0 h-12 w-12 flex items-center justify-center rounded-full"})])]),_:1}),t(s,{title:"Size"},{default:a(()=>[e("div",z,[t(n,{text:"Large Button",btnClass:"btn-primary btn-xl"}),t(n,{text:"Default",btnClass:"btn-primary"}),t(n,{text:"Small",btnClass:"btn-primary btn-sm"})])]),_:1}),t(s,{title:"Disabled"},{default:a(()=>[e("div",F,[t(n,{text:"primary",btnClass:"btn-primary ",isDisabled:""}),t(n,{text:"secondary",btnClass:" btn-secondary",isDisabled:""}),t(n,{text:"success",btnClass:" btn-success",isDisabled:""}),t(n,{text:"info",btnClass:" btn-info",isDisabled:""}),t(n,{text:"warning",btnClass:" btn-warning",isDisabled:""}),t(n,{text:"danger",btnClass:" btn-danger",isDisabled:""}),t(n,{text:"Dark",btnClass:" btn-dark",isDisabled:""}),t(n,{text:"Light",btnClass:" btn-light",isDisabled:""}),t(n,{text:"White",btnClass:" bg-white text-slate-900",isDisabled:""})])]),_:1}),t(s,{title:"Loading"},{default:a(()=>[e("div",O,[t(n,{text:"primary",btnClass:"btn-primary ",isLoading:""}),t(n,{text:"secondary",btnClass:" btn-secondary",isLoading:""}),t(n,{text:"success",btnClass:" btn-success",isLoading:""}),t(n,{text:"info",btnClass:" btn-info",isLoading:""}),t(n,{text:"warning",btnClass:" btn-warning",isLoading:""}),t(n,{text:"danger",btnClass:" btn-danger",isLoading:""}),t(n,{text:"Dark",btnClass:" btn-dark",isLoading:""}),t(n,{text:"Light",btnClass:" btn-light",isLoading:""}),t(n,{text:"White",btnClass:" bg-white text-slate-900",isLoading:""})])]),_:1}),t(s,{title:"Group Button"},{default:a(()=>[e("div",V,[e("div",j,[t(i),t(i,{btnClass:"btn-primary"}),t(i,{btnClass:"btn-secondary"}),t(i,{btnClass:"btn-outline-dark",groupButtons:o.prevNext},null,8,["groupButtons"]),t(i,{btnClass:"btn-primary",groupButtons:o.prevNext},null,8,["groupButtons"])])])]),_:1}),t(s,{title:"Block"},{default:a(()=>[e("div",A,[t(n,{text:"primary",btnClass:"btn-primary block-btn",type:"submit"}),t(n,{icon:"heroicons-outline:newspaper",text:"Left Icon",btnClass:"btn-secondary block-btn"}),t(n,{icon:"heroicons-outline:newspaper",text:"Right Icon",btnClass:" btn-success block-btn",iconPosition:"right"})])]),_:1}),t(s,{title:"Router Link"},{default:a(()=>[e("div",E,[t(n,{text:"primary",btnClass:"btn-primary",link:"/app/home"}),t(n,{text:"secondary",btnClass:" btn-secondary",link:"/app/home"}),t(n,{text:"success",btnClass:" btn-success",link:"/app/home"}),t(n,{text:"info",btnClass:" btn-info",link:"/app/home"}),t(n,{text:"warning",btnClass:" btn-warning",link:"/app/home"}),t(n,{text:"danger",btnClass:" btn-danger",link:"/app/home"}),t(n,{text:"Dark",btnClass:" btn-dark",link:"/app/home"}),t(n,{text:"Light",btnClass:" btn-light",link:"/app/home"}),t(n,{text:"White",btnClass:" bg-white text-slate-900",link:"/app/home"})])]),_:1})])}const Q=p(B,[["render",M]]);export{Q as default};