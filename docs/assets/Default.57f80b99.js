import{R as m,P as a,Q as i,U as e,m as t,V as f,I as g,W as V,K as n,X as c,Y as u}from"./@vue.4e466777.js";import{a as k,b as x,d as b,e as w,f as B,g as C,h as v,i as K,j as A,k as L,l as U}from"./vuetify.3727261d.js";import{_ as y}from"./plugin-vueexport-helper.2444895f.js";const T="/white-LI.png";function E(p,s,_,h,o,r){const d=m("router-link");return a(),i(K,{flat:"",color:"indigo-darken-3",elevation:"1",density:"compact"},{extension:e(()=>[t(k),t(x,{"fixed-tabs":"","center-active":"",modelValue:o.tab,"onUpdate:modelValue":s[0]||(s[0]=l=>o.tab=l)},{default:e(()=>[(a(!0),f(g,null,V(o.tabs,l=>(a(),i(d,{class:"text-white text-decoration-none",to:"/"+r.lang+l.path,"active-class":"indigo-lighten-2"},{default:e(()=>[t(b,{style:{"min-width":"5em"}},{default:e(()=>[n(c(l[r.lang]),1)]),_:2},1024)]),_:2},1032,["to"]))),256))]),_:1},8,["modelValue"])]),default:e(()=>[t(w,null,{default:e(()=>[t(B,{src:T,height:"100%"}),t(d,{class:"text-white text-decoration-none",to:"/"+r.lang,"active-class":"indigo-lighten-2"},{default:e(()=>[n("ELU Lab @ CAU")]),_:1},8,["to"])]),_:1}),t(C,{size:"small",onClick:r.langChange},{default:e(()=>[t(v,{class:"mr-1"},{default:e(()=>[n("mdi-translate")]),_:1}),u("span",null,c(o.isKorean?"Eng":"\uD55C\uAD6D\uC5B4"),1)]),_:1},8,["onClick"])]),_:1})}const I={name:"AppBar",data(){return{isKorean:!1,tabs:[{path:"",ko:"\uC18C\uAC1C",en:"About"},{path:"/Prof./Bugeun/Kim",ko:"\uC0AC\uB78C\uB4E4",en:"Team"},{path:"/project",ko:"\uD504\uB85C\uC81D\uD2B8",en:"Projects"},{path:"/pub",ko:"\uB17C\uBB38",en:"Papers"},{path:"/course",ko:"\uAC15\uC758",en:"Courses"},{path:"/contact",ko:"\uBB38\uC758\uD558\uAE30",en:"Contact"}],tab:""}},methods:{langChange(){this.isKorean=!this.isKorean,this.isKorean?this.$router.push({path:this.$route.path.replace("en","ko")}):this.$router.push({path:this.$route.path.replace("ko","en")})}},computed:{lang(){return this.isKorean?"ko":"en"}}},P=y(I,[["render",E]]),j={__name:"View",setup(p){return(s,_)=>{const h=m("router-view");return a(),i(A,null,{default:e(()=>[t(h)]),_:1})}}},D={class:"text-right w-100"},F=u("strong",null,"ELU Lab",-1),$={__name:"Default",setup(p){return(s,_)=>(a(),i(L,null,{default:e(()=>[t(P),t(j),t(U,{class:"d-flex flex-column px-4 py-2 bg-indigo-lighten-3"},{default:e(()=>[u("div",D,[n(c(new Date().getFullYear())+" \u2014 ",1),F,n(", Chung-Ang University, Seoul, Korea.")])]),_:1})]),_:1}))}};export{$ as default};
