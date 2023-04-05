import{h as f,m as V,n as M}from"./util.71f2e468.js";import{_ as h}from"./lodash.82e2f9b4.js";import{B as T}from"./bibtex-parse.1bbbaa52.js";import{_ as C}from"./team.dcafdadb.js";import{_ as g}from"./noimg.5dd472c1.js";import{n as B,o as O,q as P,r as p,s as b,t as k,a as v,f as x,p as A}from"./vuetify.7ced8f5b.js";import{P as l,V as i,Y as n,X as o,m as a,U as d,I as y,W as N,_ as R,K as m,Q as D}from"./@vue.4e466777.js";import{_ as H}from"./plugin-vueexport-helper.2444895f.js";const I={style:{background:"#cecece",height:"20vh",width:"100%"}},S=n("td",null,[n("img",{src:C,style:{height:"20vh"}})],-1),E={class:"text-white text-shadow text-h3 font-weight-black text-center"},L=n("p",{class:"text-h5 text-red-darken-3"},[m("\uC5F0\uAD6C\uC2E4\uC758 \uCCAB \uD559\uBD80\uC0DD \uC778\uD134, \uC11D\uBC15\uC0AC\uACFC\uC815 \uD559\uC0DD\uC744 \uBAA8\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. '\uBB38\uC758\uD558\uAE30'\uB97C \uB20C\uB7EC \uBB38\uC758\uD574\uC8FC\uC138\uC694!"),n("br"),m("We're looking for the first MS/PhD students and interns who are interested in our study!"),n("br"),m("If you're interested in our study, please contact advisor through 'Contact' tab.")],-1),U={class:"v-col-12"},z={class:"text-indigo-accent-2"},W={class:"v-col-2"},Y={key:0,class:"font-weight-black text-h6"},j={key:1,class:"font-weight-black text-h6"},q={key:0,class:"v-col-12"},F={class:"text-indigo-accent-2"},G={class:"v-col-2"},K={key:0,class:"font-weight-black text-h6"},Q={key:1,class:"font-weight-black text-h6"};function X(e,t,r,u,_,c){return l(),i("div",null,[n("table",I,[n("tr",null,[S,n("td",null,[n("div",E,o(r.lang==="ko"?"\uC5F0\uAD6C\uC2E4 \uC0AC\uB78C\uB4E4":"Our Team"),1)])])]),a(A,null,{default:d(()=>[a(B,{class:"my-5",icon:"mdi-bullhorn",color:"red"},{default:d(()=>[a(O,null,{default:d(()=>[L]),_:1})]),_:1}),a(P,null,{default:d(()=>[n("div",U,[n("h1",z,o(r.lang==="ko"?"\uD604\uC7AC \uAD6C\uC131\uC6D0":"Present Members"),1)]),(l(!0),i(y,null,N(c.presentMembers,s=>(l(),i("div",W,[a(p,{class:"rounded-5",elevation:"3",onClick:w=>e.$router.push("/"+r.lang+"/"+s.path)},{default:d(()=>[a(b,{class:"align-end","lazy-src":g,src:s.image,"aspect-ratio":"0.75",cover:""},null,8,["src"]),a(k,null,{default:d(()=>[r.lang==="en"?(l(),i("div",Y,o(c.getRole(s.role,"en"))+" "+o(s.fullName),1)):(l(),i("div",j,o(s.koreanName)+" "+o(s.role),1)),a(v),a(x,{icon:"mdi-card-account-details"})]),_:2},1024)]),_:2},1032,["onClick"])]))),256)),c.alumniMembers.length?(l(),i("div",q,[n("h1",F,o(r.lang==="ko"?"\uC878\uC5C5/\uD1F4\uC9C1\uD55C \uAD6C\uC131\uC6D0":"Alumni Members"),1)])):R("",!0),(l(!0),i(y,null,N(c.alumniMembers,s=>(l(),i("div",G,[a(p,{class:"rounded-5",elevation:"3",onClick:w=>e.$router.push("/"+r.lang+"/"+s.path)},{default:d(()=>[a(b,{class:"align-end","lazy-src":g,src:s.image,"aspect-ratio":"0.75",cover:""},null,8,["src"]),a(k,null,{default:d(()=>[r.lang==="en"?(l(),i("div",K,o(c.getRole(s.role,"en"))+" "+o(s.fullName),1)):(l(),i("div",Q,o(s.koreanName)+" "+o(s.role),1)),a(v),a(x,{icon:"mdi-card-account-details"})]),_:2},1024)]),_:2},1032,["onClick"])]))),256))]),_:1})]),_:1})])}const J={name:"Team",props:["lang"],data(){return{members:[],publications:[]}},mounted(){f(["data","member-list.txt"],e=>{this.members=e.split(`
`).map(t=>{const[r,u,_,c,s]=t.split(",");return{familyName:r,givenName:u,fullName:u+" "+r,koreanName:_,role:c,image:"/img/members/"+u.toLowerCase()+"-"+r.toLowerCase()+".jpg",path:c+"/"+u+"/"+r,isAlumni:s==="\uC878\uC5C5"}})},()=>{}),f(["data","publications.bib"],e=>{this.publications=h.sortBy(T.entries(e).map(t=>(t.tags=t.NOTE?t.NOTE.split(" "):[],t.MONTH=V(t.MONTH),t.AUTHOR=M(t.AUTHOR),t)),[t=>-t.YEAR,t=>-t.MONTH])},e=>{})},methods:{getRole(e,t){return t==="en"?e:e==="Prof."?"\uAD50\uC218":e==="Researcher"?"\uC5F0\uAD6C\uC6D0":e==="Ph.D student"?"\uBC15\uC0AC\uACFC\uC815":e==="M.S. student"?"\uC11D\uC0AC\uACFC\uC815":e==="Ph.D."?"\uBC15\uC0AC":e==="M.S."?"\uC11D\uC0AC":"\uD559\uBD80\uC0DD \uC778\uD134"},openLink(e){e.DOI&&window.open("https://doi.org/"+e.DOI)}},computed:{presentMembers(){return h.filter(this.members,e=>!e.isAlumni)},alumniMembers(){return h.filter(this.members,e=>e.isAlumni)}}},Z=H(J,[["render",X]]),le={__name:"Team",setup(e){return(t,r)=>(l(),D(Z))}};export{le as default};