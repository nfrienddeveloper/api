function p(i){const{effect:t,swiper:e,on:s,setTranslate:a,setTransition:o,overwriteParams:c,perspective:f,recreateShadows:n,getEffectParams:d}=i;s("beforeInit",()=>{if(e.params.effect!==t)return;e.classNames.push(`${e.params.containerModifierClass}${t}`),f&&f()&&e.classNames.push(`${e.params.containerModifierClass}3d`);const l=c?c():{};Object.assign(e.params,l),Object.assign(e.originalParams,l)}),s("setTranslate",()=>{e.params.effect===t&&a()}),s("setTransition",(l,u)=>{e.params.effect===t&&o(u)}),s("transitionEnd",()=>{if(e.params.effect===t&&n){if(!d||!d().slideShadows)return;e.slides.each(l=>{e.$(l).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),n()}});let r;s("virtualUpdate",()=>{e.params.effect===t&&(e.slides.length||(r=!0),requestAnimationFrame(()=>{r&&e.slides&&e.slides.length&&(a(),r=!1)}))})}function m(i,t){return i.transformEl?t.find(i.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function g({swiper:i,duration:t,transformEl:e,allSlides:s}){const{slides:a,activeIndex:o,$wrapperEl:c}=i;if(i.params.virtualTranslate&&t!==0){let f=!1,n;s?n=e?a.find(e):a:n=e?a.eq(o).find(e):a.eq(o),n.transitionEnd(()=>{if(f||!i||i.destroyed)return;f=!0,i.animating=!1;const d=["webkitTransitionEnd","transitionend"];for(let r=0;r<d.length;r+=1)c.trigger(d[r])})}}export{m as a,g as b,p as e};