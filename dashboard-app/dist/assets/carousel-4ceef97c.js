import{C as L}from"./index-c534a797.js";import{S as k,a as S}from"./swiper.min-090b8e82.js";import{N}from"./navigation.min-50b05cd2.js";import{P as I,S as B,A,a as P,E}from"./effect-fade.min-1879e5eb.js";import{_ as h,r as n,o,m as d,w as r,c as l,p as F,a as u,t as p,g as _,n as V,F as W,b as e}from"./index-bfbdc443.js";import"./effect-virtual-transition-end-65e3f5a7.js";const $={components:{Swiper:k,SwiperSlide:S},props:{sliderPreview:{type:Number,default:1},space:{type:Number,default:0},carousels:{type:Array,default:[]}},setup(){return{modules:[N,I,B,A,P,E]}}},j={class:"pt-20 container text-center px-4 slider-content h-full w-full min-h-[300px] rounded-md flex flex-col items-center justify-center text-white"},z={class:"max-w-sm"},D={key:0,class:"text-xl font-medium text-white"},O={key:1,class:"text-sm"};function q(y,v,c,m,a,b){const s=n("swiper-slide"),t=n("swiper");return o(),d(t,{modules:m.modules,"slides-per-view":c.sliderPreview,"space-between":c.space,navigation:"",pagination:{clickable:!0},class:"main-caro"},{default:r(()=>[(o(!0),l(W,null,F(c.carousels,(i,C)=>(o(),d(s,{key:C},{default:r(()=>[u("div",{class:"single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px]",style:V({backgroundImage:"url("+i.img+")"})},[u("div",j,[u("div",z,[i.title?(o(),l("h2",D,p(i.title),1)):_("",!0),i.description?(o(),l("p",O,p(i.description),1)):_("",!0)])])],4)]),_:2},1024))),128))]),_:1},8,["modules","slides-per-view","space-between"])}const G=h($,[["render",q]]),g="/assets/c1-e1ae159b.png",f="/assets/c2-042737a0.png",x="/assets/c3-7e31ec53.png",w="/assets/c1-e1ae159b.png",H={components:{Carousel:G,Card:L},data(){return{carousels:[{img:g},{img:f},{img:x},{img:w}],carouselsWithCaption:[{img:g,title:"Lorem ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.."},{img:f,title:"Lorem ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur."},{img:x,title:"Lorem ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur."},{img:w,title:"Lorem ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]}}},J={class:"grid xl:grid-cols-2 grid-cols-1 gap-6"};function K(y,v,c,m,a,b){const s=n("Carousel",!0),t=n("Card");return o(),l("div",J,[e(t,{title:"Basic example"},{default:r(()=>[e(s,{carousels:a.carousels},null,8,["carousels"])]),_:1}),e(t,{title:"With captions"},{default:r(()=>[e(s,{carousels:a.carouselsWithCaption},null,8,["carousels"])]),_:1}),e(t,{title:"Carousel interval"},{default:r(()=>[e(s,{carousels:a.carousels,autoplay:{delay:2500,disableOnInteraction:!1}},null,8,["carousels"])]),_:1}),e(t,{title:"Crossfade"},{default:r(()=>[e(s,{carousels:a.carousels,effect:"fade"},null,8,["carousels"])]),_:1})])}const Y=h(H,[["render",K]]);export{Y as default};