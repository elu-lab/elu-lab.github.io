import{V as p,h}from"./VContainer.8897b6ed.js";import{b as m,V as i,d,a as _}from"./VCard.ebb476b7.js";import{h as k,_ as f}from"./_plugin-vue_export-helper.6dcd9e49.js";import{z as a,A as u,B as n,m as t,ad as o,ae as s,D as g}from"./index.f78aa920.js";import"./router.8883b33c.js";const x={key:0},y={key:1},V={key:0,class:"text-center text-h5"},w=s("span",null,"\uC911\uC559\uB300\uD559\uAD50 310\uAD00 428\uD638",-1),C=s("p",{class:"text-grey text-body-1"},"\uC11C\uC6B8\uC2DC \uB3D9\uC791\uAD6C \uD751\uC11D\uB85C 84 (\uC6B0) 06974",-1),v=[w,C],b={key:1,class:"text-center text-h5"},B=s("span",null,"Room #428, Building #310, Chung-Ang University",-1),D=s("p",{class:"text-grey text-body-1"},"84, Heukseok-ro, Dongjak-gu, Seoul 06974, Republic of Korea",-1),R=[B,D],T=s("br",null,null,-1);function H(l,c,e,S,r,A){return a(),u(p,null,{default:n(()=>[t(m,null,{default:n(()=>[t(i,{class:"v-col-12 v-col-md-6"},{default:n(()=>[t(d,null,{default:n(()=>[e.lang==="ko"?(a(),o("h2",x,"\uD559\uBD80 \uC778\uD134, \uC11D\uBC15\uC0AC\uACFC\uC815 \uD559\uC0DD \uBAA8\uC9D1\uC911")):(a(),o("h2",y,"Recruit: Internship/MS & Ph.D students"))]),_:1}),t(_,{class:"margin-inside",innerHTML:e.lang==="ko"?r.panel.ko:r.panel.en},null,8,["innerHTML"])]),_:1}),t(i,{class:"v-col-12 v-col-md-6"},{default:n(()=>[t(d,null,{default:n(()=>[s("h2",null,g(e.lang==="ko"?"\uC704\uCE58":"Location"),1)]),_:1}),t(_,null,{default:n(()=>[e.lang==="ko"?(a(),o("div",V,v)):(a(),o("div",b,R)),T,t(k,{src:"https://www.cau.ac.kr/cau/img/about/caupusmap/map.png"})]),_:1})]),_:1})]),_:1})]),_:1})}const L={name:"Contact",props:["lang"],data(){return{panel:{ko:"",en:""}}},mounted(){h(["data","panels.md"],l=>{const[c,e]=l.split("---");this.panel.ko=window.marked.parse(c),this.panel.en=window.marked.parse(e)},()=>{})}},M=f(L,[["render",H]]),G={__name:"Contact",setup(l){return(c,e)=>(a(),u(M))}};export{G as default};
