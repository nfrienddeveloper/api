import{D as x}from"./index-479eaba9.js";import{I as v}from"./index-0dbc22a4.js";import{P as w}from"./index-30e9d127.js";import{E as y}from"./data-5e46ba22.js";import{_ as k}from"./user-1-6dc19296.js";import{u as C,a as I,b as P}from"./user-4-bcaadb45.js";import{_ as M,r,o as n,c as o,b as l,w as c,a as s,t as m,g as a,F as A,p as z,m as D,f as B,d as L}from"./index-bfbdc443.js";import{b as N}from"./menu-60f67901.js";const R={components:{Pagination:w,Dropdown:x,Icon:v,MenuItem:N},data(){return{shapeLine4:y,current:1,perpage:4,pageRange:5,searchTerm:"",actions:[{name:"view",icon:"heroicons-outline:eye"},{name:"edit",icon:"heroicons:pencil-square"},{name:"delete",icon:"heroicons-outline:trash"}],options:[{value:"1",label:"1"},{value:"3",label:"3"},{value:"5",label:"5"}],teamtable:[{customer:{name:"Arlene McCoy",image:k,deg:"Ux designer"},status:"progress",time:"42.5 hours",chart:null},{customer:{name:"Arlene McCoy",image:C,deg:"Ux designer"},status:"complete",time:"42.5 hours",chart:null},{customer:{name:"Arlene McCoy",image:I,deg:"Ux designer"},status:"progress",time:"42.5 hours",chart:null},{customer:{name:"Arlene McCoy",image:P,deg:"Ux designer"},status:"complete",time:"42.5 hours",chart:null}],columns:[{label:"assignee",field:"customer"},{label:"Amount",field:"status"},{label:"time",field:"time"},{label:"chart",field:"chart"},{label:"Action",field:"action"}]}}},T={class:"-mx-6 -mb-6"},U={key:0,class:"flex items-center min-w-[150px]"},V={class:"w-8 h-8 rounded-full ltr:mr-3 rtl:ml-3 flex-none"},j=["src","alt"],E={class:"text-sm text-slate-600 dark:text-slate-300 capitalize"},F={key:1},q={key:2,class:"block min-w-[140px] text-left"},O={class:"inline-block text-center mx-auto py-1"},S={key:0,class:"flex items-center space-x-3 rtl:space-x-reverse"},G=s("span",{class:"h-[6px] w-[6px] bg-danger-500 rounded-full inline-block ring-4 ring-opacity-30 ring-danger-500"},null,-1),H=s("span",null,"In progress",-1),J=[G,H],K={key:1,class:"flex items-center space-x-3 rtl:space-x-reverse"},Q=s("span",{class:"h-[6px] w-[6px] bg-success-500 rounded-full inline-block ring-4 ring-opacity-30 ring-success-500"},null,-1),W=s("span",null,"Complete",-1),X=[Q,W],Y={key:3,class:"block min-w-[100px] text-left"},Z={key:4,class:"ltr:text-right rtl:text-left"},$={class:"text-xl"},ee={class:"text-base"},se={class:"py-4 px-3 justify-center hidden"};function te(ne,p,oe,ae,t,re){const d=r("apexchart"),u=r("Icon"),g=r("MenuItem"),_=r("Dropdown"),h=r("Pagination"),f=r("vue-good-table");return n(),o("div",T,[l(f,{columns:t.columns,styleClass:" vgt-table   lesspadding v-middle table-head  rounded-md ",rows:t.teamtable,"pagination-options":{enabled:!0,perPage:t.perpage},"sort-options":{enabled:!1}},{"table-row":c(e=>[e.column.field=="customer"?(n(),o("span",U,[s("span",V,[s("img",{src:e.row.customer.image,alt:e.row.customer.name,class:"object-cover w-full h-full rounded-full"},null,8,j)]),s("span",E,m(e.row.customer.name),1)])):a("",!0),e.column.field=="chart"?(n(),o("span",F,[l(d,{type:"area",height:"48",width:"100%",options:t.shapeLine4.chartOptions,series:t.shapeLine4.series},null,8,["options","series"])])):a("",!0),e.column.field=="status"?(n(),o("span",q,[s("span",O,[e.row.status==="progress"?(n(),o("span",S,J)):a("",!0),e.row.status==="complete"?(n(),o("span",K,X)):a("",!0)])])):a("",!0),e.column.field=="time"?(n(),o("span",Y,m(e.row.time),1)):a("",!0),e.column.field=="action"?(n(),o("div",Z,[l(_,{classMenuItems:" w-[140px]"},{menus:c(()=>[(n(!0),o(A,null,z(t.actions,(i,b)=>(n(),D(g,{key:b},{default:c(()=>[s("div",{class:B(`
                
                  ${i.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `)},[s("span",ee,[l(u,{icon:i.icon},null,8,["icon"])]),s("span",null,m(i.name),1)],2)]),_:2},1024))),128))]),default:c(()=>[s("span",$,[l(u,{icon:"heroicons-outline:dots-vertical"})])]),_:1})])):a("",!0)]),"pagination-bottom":c(e=>[s("div",se,[l(h,{total:50,current:t.current,"per-page":t.perpage,pageRange:t.pageRange,onPageChanged:p[0]||(p[0]=i=>t.current=i),pageChanged:e.pageChanged,perPageChanged:e.perPageChanged},{default:c(()=>[L(" > ")]),_:2},1032,["current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options"])])}const _e=M(R,[["render",te]]),he="/assets/sk-2fa59342.svg",fe="/assets/path-23ef6285.svg",be="/assets/file-1-4a0ee4bf.svg",xe="/assets/pdf-1-f0f1a359.svg",ve="/assets/zip-1-b46fcdb3.svg",we="/assets/pdf-2-5b9606b1.svg",ye="/assets/scr-1-f66fcf6b.svg";export{_e as T,xe as a,we as b,ye as c,be as f,fe as p,he as s,ve as z};