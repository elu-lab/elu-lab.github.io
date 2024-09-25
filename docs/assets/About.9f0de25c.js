import{h as p,m as u}from"./util.a388c9d4.js";import{_ as c}from"./lodash.82e2f9b4.js";import{B as m}from"./bibtex-parse.1bbbaa52.js";import{m as x,n as w,o as y,p as k,h as L,q as E}from"./vuetify.62fede60.js";import{R as a,W as l,l as i,V as h,Z as t,O as o,Y as _,F as v,X as N,S as b,_ as T}from"./@vue.f6e88dbc.js";import{_ as A}from"./plugin-vueexport-helper.2444895f.js";const M="/img/parallex/intro.jpg",B={class:"d-flex flex-column fill-height justify-center align-center text-white text-shadow"},P={key:0,class:"font-weight-black text-h3"},S=t("span",{class:"d-inline-block mx-1"},"Explainable",-1),V=t("span",{class:"d-inline-block mx-1"},"Language",-1),U=t("span",{class:"d-inline-block mx-1"},"Understanding",-1),R=t("span",{class:"d-inline-block mx-1"},"(ELU) Lab",-1),I=[S,V,U,R],O={key:1,class:"font-weight-black text-h3"},C=t("span",{class:"d-inline-block mx-1"},"\uC124\uBA85\uAC00\uB2A5\uD55C",-1),q=t("span",{class:"d-inline-block mx-1"},"\uC5B8\uC5B4\uC774\uD574",-1),G=t("span",{class:"d-inline-block mx-1"},"\uC5F0\uAD6C\uC2E4",-1),D=t("span",{class:"d-inline-block mx-1"},"(ELU lab)",-1),H=[C,q,G,D],$={key:0,class:"mt-10 text-body-1 text-lg-h6"},Y=t("p",{class:"my-2"},[t("b",null,"Explanable Language Understanding Lab"),t("span",{class:"font-weight-light"},"(ELU lab, pronouncing as /i.lu.l\xE6b/) at Chung-Ang University aims to develop an"),t("b",{class:"text-blue-accent-3 mx-1"},"Natural Language Processing (NLP)"),t("span",{class:"font-weight-light"},"techniques that can interact with humans through languages."),t("br"),t("span",{class:"font-weight-light"},"Specifically, we focus on these areas:")],-1),Z=t("ul",{class:"mx-5"},[t("li",{class:"my-2"},[t("b",{class:"text-blue-accent-4"},"Explainable LLM"),t("span",{class:"font-weight-light"},": Studies that identify the capabilities of LLM technology, including GPT, and suggest some improvements"),t("br"),t("span",{class:"font-weight-light text-caption text-lg-body-1"},"E.g., Generative Agents, Machine-generated Contents Detection, etc.")]),t("li",{class:"my-2"},[t("b",{class:"text-blue-accent-3"},"Language-based interaction"),t("span",{class:"font-weight-light"},": Research for improving the quality of language-driven interaction between humans and AI"),t("br"),t("span",{class:"font-weight-light text-caption text-lg-body-1"},"E.g., Text-to-Speech, Speech synthesis, etc.")]),t("li",{class:"my-2"},[t("b",{class:"text-blue-accent-2"},"Language understanding"),t("span",{class:"font-weight-light"},": Research for making LLM do mathematical/logical reasoning based on textual data."),t("br"),t("span",{class:"font-weight-light text-caption text-lg-body-1"},"E.g., Mathematical Proving, etc.")])],-1),j=t("p",{class:"my-2 font-weight-light"},"As the world is changing rapidly, we also welcome other research topics which are not listed above. If that's related to natural language processing, any research topic you want is fine. And we believe that, by building up those studies, we can one day create technologies that are good for society.",-1),z=[Y,Z,j],F={key:1,class:"mt-10 text-body-1 text-lg-h6"},W=t("p",{class:"my-2"},[t("span",{class:"font-weight-light"},"\uC911\uC559\uB300\uD559\uAD50 \xA0"),t("b",null,"\uC124\uBA85\uAC00\uB2A5\uD55C \uC5B8\uC5B4\uC774\uD574 \uC5F0\uAD6C\uC2E4"),t("span",{class:"font-weight-light"},"(ELU lab, \uC774\uB8E8\uB7A9)\uC740 \uC0AC\uB78C\uACFC \uC5B8\uC5B4\uB85C \uC758\uC0AC\uC18C\uD1B5\uC774 \uAC00\uB2A5\uD55C"),t("b",{class:"text-blue-accent-3 mx-1"},"\uC790\uC5F0\uC5B4\uCC98\uB9AC"),t("span",{class:"font-weight-light"},"\uC778\uACF5\uC9C0\uB2A5\uC744 \uC5F0\uAD6C\uD558\uB294 \uC5F0\uAD6C\uC2E4\uC785\uB2C8\uB2E4."),t("br"),t("span",{class:"font-weight-light"},"\uD2B9\uD788, \uC6B0\uB9AC \uC5F0\uAD6C\uC2E4\uC740 \uC544\uB798\uC640 \uAC19\uC740 \uC8FC\uC81C\uC5D0 \uAD00\uC2EC\uC744 \uB450\uACE0 \uC788\uC2B5\uB2C8\uB2E4.")],-1),J=t("ul",{class:"mx-5"},[t("li",{class:"my-2"},[t("b",{class:"text-blue-accent-4"},"\uC124\uBA85\uAC00\uB2A5\uD55C \uAE30\uC220"),t("span",{class:"font-weight-light"},": GPT\uB97C \uBE44\uB86F\uD55C LLM \uAE30\uC220\uC758 \uB2A5\uB825\uC744 \uD30C\uC545\uD558\uACE0 \uAC1C\uC120\uBC29\uC548\uC744 \uC81C\uC2DC\uD558\uB294 \uC5F0\uAD6C"),t("br"),t("span",{class:"font-weight-light text-caption text-lg-body-1"},"\uC608) \uC0DD\uC131\uD615 \uC5D0\uC774\uC804\uD2B8(Generative Agent), \uC0DD\uC131\uB41C \uCF58\uD150\uCE20 \uD0D0\uC9C0 (Machine-generated Contents Detection) \uB4F1")]),t("li",{class:"my-2"},[t("b",{class:"text-blue-accent-3"},"\uC5B8\uC5B4\uC801 \uC18C\uD1B5 \uAE30\uC220"),t("span",{class:"font-weight-light"},": \uC778\uAC04\uACFC AI \uC0AC\uC774\uC758 \uC5B8\uC5B4 \uAE30\uBC18 \uC0C1\uD638\uC791\uC6A9\uC5D0 \uD544\uC694\uD55C \uAE30\uC220 \uC5F0\uAD6C"),t("br"),t("span",{class:"font-weight-light text-caption text-lg-body-1"},"\uC608) \uD14D\uC2A4\uD2B8\uAE30\uBC18 \uC74C\uC131 \uD569\uC131 (Text-to-speech, Speech synthesis) \uB4F1")]),t("li",{class:"my-2"},[t("b",{class:"text-blue-accent-2"},"\uC5B8\uC5B4 \uC774\uD574 \uAE30\uC220"),t("span",{class:"font-weight-light"},": \uD14D\uC2A4\uD2B8 \uB4F1 \uB370\uC774\uD130\uB97C \uAE30\uBC18\uC73C\uB85C \uC218\uB9AC\uC801/\uB17C\uB9AC\uC801 \uCD94\uB860\uC744 \uC218\uD589\uD558\uB294 \uAE30\uC220 \uC5F0\uAD6C"),t("br"),t("span",{class:"font-weight-light text-caption text-lg-body-1"},"\uC608) \uC218\uD559 \uC99D\uBA85 (Mathematical Proving) \uB4F1")])],-1),X=t("p",{class:"my-2 font-weight-light"},[o("\uC138\uC0C1\uC774 \uBE60\uB974\uAC8C \uBCC0\uD654\uD558\uACE0 \uC788\uC5B4, \uC704\uC758 \uC5F0\uAD6C \uC8FC\uC81C\uB294 \uC5B8\uC81C\uB4E0\uC9C0 \uBCC0\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB54C\uBB38\uC5D0, \uC6B0\uB9AC\uB294 \uC704\uC5D0 \uC801\uD78C \uC138 \uBD84\uC57C \uC678\uC758 \uB2E4\uB978 \uBD84\uC57C \uC5F0\uAD6C\uC8FC\uC81C\uB3C4 \uD658\uC601\uD569\uB2C8\uB2E4."),t("br"),o("\uC790\uC5F0\uC5B4\uCC98\uB9AC\uB098 \uC74C\uC131\uD569\uC131\uACFC \uAD00\uB828\uC774 \uC788\uB2E4\uBA74 \uD559\uC0DD\uC5EC\uB7EC\uBD84\uC774 \uC6D0\uD558\uB294 \uC5B4\uB5A4 \uC5F0\uAD6C\uB77C\uB3C4 \uC88B\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uD55C \uC5F0\uAD6C\uB4E4\uC774 \uC313\uC774\uB2E4 \uBCF4\uBA74, \uC5B8\uC820\uAC00 \uC0AC\uD68C\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uB294 \uAE30\uC220\uB4E4\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC744\uD14C\uB2C8\uAE4C\uC694.")],-1),K=[W,J,X],Q={class:"mt-10"},tt={key:0,class:"text-h6 text-red-accent-3 text-center"},et=t("br",null,null,-1),st=t("a",{href:"https://forms.gle/u32h6cBpgZNPhLAq6"},"\uC124\uBB38",-1),nt=t("a",{href:"/#/ko/contact"},"[\uBB38\uC758\uD558\uAE30]",-1),at={key:1,class:"text-h6 text-red-accent-3 text-center"},ot=t("br",null,null,-1),lt=t("a",{href:"https://forms.gle/u32h6cBpgZNPhLAq6"},"the application form\xA0",-1),ct=t("a",{href:"/#/ko/contact"},"'Contact'\xA0",-1),it=["innerHTML"];function rt(s,e,n,g,d,f){return a(),l("div",null,[i(x,{src:M,height:"40vh",scale:".5"},{default:h(()=>[t("div",B,[n.lang==="en"?(a(),l("h1",P,I)):(a(),l("h1",O,H))])]),_:1}),i(E,null,{default:h(()=>[n.lang==="en"?(a(),l("div",$,z)):(a(),l("div",F,K)),t("div",Q,[n.lang==="ko"?(a(),l("p",tt,[o("\uC5F0\uAD6C\uC2E4\uC758 \uD559\uBD80\uC0DD \uC778\uD134(\uC2A4\uD130\uB514 \uD3EC\uD568)\uC744 \uBAA8\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."),et,o("\uAD00\uC2EC\uC774 \uC788\uB2E4\uBA74\xA0"),st,o("\uC744 \uC751\uB2F5\uD558\uAC70\uB098,\xA0"),nt,o("\uB97C \uB20C\uB7EC \uBB38\uC758\uD574\uC8FC\uC138\uC694.")])):(a(),l("p",at,[o("We're looking for undergraduate interns (or students) who are interested in our study!"),ot,o("If you're interested in our study, please fill\xA0"),lt,o("or contact advisor through\xA0"),ct,o("tab.")]))]),i(w,{class:"my-10"}),t("h2",null,_(n.lang==="ko"?"\uCD5C\uADFC \uC18C\uC2DD":"Recent News"),1),(a(!0),l(v,null,N(f.recentNews,r=>(a(),b(y,{class:"my-1"},{default:h(()=>[i(k,null,{default:h(()=>[t("p",null,[i(L,{class:"mr-2",size:"tiny",icon:r.icon},null,8,["icon"]),t("span",{class:T(["font-weight-black","text-"+r.color])},_(r.date),3),t("span",{class:"font-weight-light",innerHTML:r.content},null,8,it)])]),_:2},1024)]),_:2},1024))),256))]),_:1})])}const ht={name:"About",props:["lang"],data(){return{news:[],acceptance:[]}},mounted(){p(["data","news.md"],s=>{this.news=c.map(s.split("---"),e=>{const[n,g,d]=e.trim().split("|");return{date:n,lang:g,icon:"mdi-bullhorn",color:"red-accent-2",content:window.marked.parse(d).replace(/<strong>/g,'<strong class="font-weight-bold">')}})},()=>{}),p(["data","publications.bib"],s=>{this.acceptance=m.entries(s).filter(e=>e.type!="misc").flatMap(e=>{const n=e.type==="inproceedings"?e.SERIES:e.JOURNAL+" "+e.VOLUME+", No."+e.NUMBER;return[{date:e.YEAR+"/"+u(e.MONTH),lang:"ko",icon:"mdi-book",color:"indigo-lighten-2",content:window.marked.parse(`${n}\uC5D0 \uC6B0\uB9AC \uC5F0\uAD6C\uC2E4\uC758 \uB17C\uBB38 "${e.TITLE}"\uC774 \uAC8C\uC7AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. <span class="text-grey">`+e.NOTE+"</span>")},{date:e.YEAR+"/"+u(e.MONTH),lang:"en",icon:"mdi-book",color:"indigo-lighten-2",content:window.marked.parse(`Our paper titled "${e.TITLE}" is accepted to ${n}. <span class="text-grey">`+e.NOTE+"</span>")}]})},s=>{console.log(s)})},computed:{langSafe(){return this.lang?this.lang:"ko"},recentNews(){return c.take(c.reverse(c.sortBy(c.filter(c.concat(this.news,this.acceptance),s=>s.lang===this.langSafe),[s=>s.date])),20)}}},gt=A(ht,[["render",rt]]),mt={__name:"About",setup(s){return(e,n)=>(a(),b(gt))}};export{mt as default};
//# sourceMappingURL=About.9f0de25c.js.map