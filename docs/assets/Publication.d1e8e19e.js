import{h as S,m as w,n as I}from"./util.4eab84e0.js";import{B as N}from"./bibtex-parse.1bbbaa52.js";import{_ as g}from"./lodash.82e2f9b4.js";import{P as r,V as p,m as a,U as l,Y as m,X as n,a1 as V,I as y,W as _,Q as d,Z as k,_ as f,K as b}from"./@vue.a6ed1cbc.js";import{_ as x}from"./noimg.c9d97aff.js";import{a as O,t as E,r as T,u as v,v as R,w as W,s as z,x as C,y as U,z as A,A as L,B as P,b as H,g as B,q as M}from"./vuetify.ebb4c956.js";import{_ as D}from"./plugin-vueexport-helper.2444895f.js";const K="/img/parallex/paper.png",F={class:"d-flex flex-column fill-height justify-center align-center v-col-md-6"},Y={class:"font-weight-black text-black text-shadow-white text-h3"},j={class:"v-col-12"},q={class:"text-indigo-accent-2"},G={class:"mr-2"};function J(s,e,h,Z,o,c){return r(),p("div",null,[a(O,{src:K,height:"20vh",cover:"",transition:"none"},{default:l(()=>[m("div",F,[m("h1",Y,n(h.lang==="ko"?"\uB17C\uBB38\uC2E4\uC801":"Publications"),1)])]),_:1}),a(M,null,{default:l(()=>[a(E,null,{default:l(()=>[a(T,null,{default:l(()=>[a(v,{cols:"4"},{default:l(()=>[a(R,{chips:"",multiple:"",placeholder:"Tags",modelValue:o.tagSelected,"onUpdate:modelValue":e[0]||(e[0]=i=>o.tagSelected=i),items:o.allTags,onBlur:e[1]||(e[1]=i=>c.search())},null,8,["modelValue","items"])]),_:1}),a(v,{cols:"8"},{default:l(()=>[a(W,{label:"Word to search",modelValue:o.searchWord,"onUpdate:modelValue":e[2]||(e[2]=i=>o.searchWord=i),onBlur:e[3]||(e[3]=i=>c.search()),onKeypress:[e[4]||(e[4]=V(i=>c.search(),["space"])),e[5]||(e[5]=V(i=>c.search(),["enter"]))]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),(r(!0),p(y,null,_(c.yearCategorizedItems,i=>(r(),d(T,null,{default:l(()=>[m("div",j,[m("h1",q,n(i[0]),1)]),(r(!0),p(y,null,_(i[1],t=>(r(),p("div",{class:k(t.key===o.abstractOpen?"v-col-12 v-col-md-6":"v-col-12 v-col-sm-6 v-col-md-3")},[a(z,{color:t.key===o.abstractOpen?"grey-lighten-3":"",elevation:"3",onClick:u=>c.toggleAbstract(t)},{default:l(()=>[t.key!==o.abstractOpen?(r(),d(O,{key:0,class:"align-end","lazy-src":x,src:"/img/paper/"+t.key+".png",height:"8em",cover:""},null,8,["src"])):f("",!0),a(C,{class:k(["mb-0 pb-0 mt-2",{"text-wrap":t.key===o.abstractOpen}])},{default:l(()=>[(r(!0),p(y,null,_(t.AUTHOR,u=>(r(),p("span",G,n(u)+";",1))),256))]),_:2},1032,["class"]),a(U,{class:k(["my-0 py-0",{"text-wrap":t.key===o.abstractOpen}])},{default:l(()=>[b(n(t.TITLE),1)]),_:2},1032,["class"]),t.type==="inproceedings"?(r(),d(C,{key:1,class:"mt-0 pt-0 font-italic text-right"},{default:l(()=>[b("@ "+n(t.SERIES)+" conference",1)]),_:2},1024)):t.type==="article"?(r(),d(C,{key:2,class:"mt-0 pt-0 font-italic text-right"},{default:l(()=>[b(n(t.JOURNAL)+" "+n(t.VOLUME)+", No. "+n(t.NUMBER),1)]),_:2},1024)):f("",!0),t.key===o.abstractOpen?(r(),d(C,{key:3,class:"text-wrap text-right"},{default:l(()=>[(r(!0),p(y,null,_(t.tags,u=>(r(),p("div",{class:k(["d-inline-block mx-1","text-"+c.tagColor(u)]),size:"small"},n(u),3))),256))]),_:2},1024)):f("",!0),t.key===o.abstractOpen?(r(),d(A,{key:4},{default:l(()=>[a(O,{"lazy-src":x,src:"/img/paper/"+t.key+".png","aspect-ratio":"1.66",cover:""},null,8,["src"]),m("p",null,n(t.ABSTRACT),1)]),_:2},1024)):f("",!0),t.key!==o.abstractOpen?(r(),d(A,{key:5},{default:l(()=>[(r(!0),p(y,null,_(t.tags,u=>(r(),d(L,{size:"small",color:c.tagColor(u)},{default:l(()=>[b(n(u),1)]),_:2},1032,["color"]))),256))]),_:2},1024)):f("",!0),a(P,null,{default:l(()=>[a(H),a(B,{size:"small",icon:"mdi-text",color:"blue",onClick:u=>c.toggleAbstract(t)},null,8,["onClick"]),t.DOI?(r(),d(B,{key:0,size:"small",icon:"mdi-link",color:"green",onClick:u=>c.openLink(t)},null,8,["onClick"])):f("",!0)]),_:2},1024)]),_:2},1032,["color","onClick"])],2))),256))]),_:2},1024))),256))]),_:1})])}const Q={name:"Pub",props:["lang"],data(){return{items:[],allItems:[],abstractOpen:"",allTags:[],tagSelected:[],searchWord:""}},mounted(){S(["data","publications.bib"],s=>{this.items=g.sortBy(N.entries(s).map(e=>(e.forSearch=(e.NOTE+" "+e.AUTHOR+" "+e.TITLE+" "+e.ABSTRACT).toLowerCase(),e.tags=e.NOTE?e.NOTE.split(" "):[],e.MONTH=w(e.MONTH),e.AUTHOR=I(e.AUTHOR),e)),[e=>-e.YEAR,e=>-e.MONTH]),this.allTags=g.uniq(this.items.flatMap(e=>e.tags)),this.allItems=this.items,this.tagSelected=[],this.searchWord=""},s=>{})},methods:{openLink(s){window.open("https://doi.org/"+s.DOI)},toggleAbstract(s){this.abstractOpen===s.key?this.abstractOpen="":this.abstractOpen=s.key},tagColor(s){return s.startsWith("#BK")||s.startsWith("#SCI")?"red":s.startsWith("#Domestic")?"grey":s.startsWith("#Application")?"orange":"indigo"},search(){this.items=this.allItems.filter(s=>{if(this.tagSelected&&g.some(this.tagSelected,e=>!s.tags.includes(e)))return!1;if(this.searchWord){const e=this.searchWord.split(" ");for(let h of e)if(h=h.toLowerCase(),!s.forSearch.includes(h))return!1}return!0})}},computed:{yearCategorizedItems(){return g.sortBy(Object.entries(g.groupBy(this.items,s=>s.YEAR)),s=>-s[0])}}},X=D(Q,[["render",J]]),oe={__name:"Publication",setup(s){return(e,h)=>(r(),d(X))}};export{oe as default};
//# sourceMappingURL=Publication.d1e8e19e.js.map
