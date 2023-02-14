import{p as U,i as G,c as v,r as w,a as z,g as ie,o as ue,b as $,d as Ve,e as re,f as Se,h as Ie,j as $e,k as Be,l as J,m as a,n as ce,t as W,q as de,s as Te,u as we,v as Ce,w as ve,x as Q,y as me,z as ee,A as te,B as p,C as T,D as H,E as ke,F as Ae}from"./index.f78aa920.js";import{m as oe,u as C,a as Pe,b as Re,c as Le,d as ze,e as He,f as Ke,g as Ee,V as X,h as Me,_ as Ne}from"./_plugin-vue_export-helper.6dcd9e49.js";import{V as K}from"./VBtn.86f6ad13.js";import{V as De}from"./index.e80aa9ce.js";import{u as Oe}from"./resizeObserver.a1e830eb.js";import"./router.8883b33c.js";const j=Symbol.for("vuetify:layout"),fe=Symbol.for("vuetify:layout-item"),se=1e3,je=U({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ue=U({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function qe(){const e=G(j);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Fe(e){var c;const n=G(j);if(!n)throw new Error("[Vuetify] Could not find injected layout");const o=(c=e.id)!=null?c:`layout-item-${Ve()}`,t=ie("useLayoutItem");re(fe,{id:o});const l=w(!1);Se(()=>l.value=!0),Ie(()=>l.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:i}=n.register(t,{...e,active:v(()=>l.value?!1:e.active.value),id:o});return $e(()=>n.unregister(o)),{layoutItemStyles:s,layoutRect:n.layoutRect,layoutItemScrimStyles:i}}const Ze=(e,n,o,t)=>{let l={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...l}}];for(const i of e){const c=n.get(i),f=o.get(i),b=t.get(i);if(!c||!f||!b)continue;const m={...l,[c.value]:parseInt(l[c.value],10)+(b.value?parseInt(f.value,10):0)};s.push({id:i,layer:m}),l=m}return s};function Xe(e){const n=G(j,null),o=v(()=>n?n.rootZIndex.value-100:se),t=w([]),l=z(new Map),s=z(new Map),i=z(new Map),c=z(new Map),f=z(new Map),{resizeRef:b,contentRect:m}=Oe(),V=v(()=>{var u;const r=new Map,y=(u=e.overlaps)!=null?u:[];for(const x of y.filter(d=>d.includes(":"))){const[d,h]=x.split(":");if(!t.value.includes(d)||!t.value.includes(h))continue;const B=l.get(d),P=l.get(h),R=s.get(d),O=s.get(h);!B||!P||!R||!O||(r.set(h,{position:B.value,amount:parseInt(R.value,10)}),r.set(d,{position:P.value,amount:-parseInt(O.value,10)}))}return r}),g=v(()=>{const r=[...new Set([...i.values()].map(u=>u.value))].sort((u,x)=>u-x),y=[];for(const u of r){const x=t.value.filter(d=>{var h;return((h=i.get(d))==null?void 0:h.value)===u});y.push(...x)}return Ze(y,l,s,c)}),k=v(()=>!Array.from(f.values()).some(r=>r.value)),S=v(()=>g.value[g.value.length-1].layer),E=v(()=>({"--v-layout-left":$(S.value.left),"--v-layout-right":$(S.value.right),"--v-layout-top":$(S.value.top),"--v-layout-bottom":$(S.value.bottom),...k.value?void 0:{transition:"none"}})),I=v(()=>g.value.slice(1).map((r,y)=>{let{id:u}=r;const{layer:x}=g.value[y],d=s.get(u),h=l.get(u);return{id:u,...x,size:Number(d.value),position:h.value}})),A=r=>I.value.find(y=>y.id===r),M=ie("createLayout"),N=w(!1);ue(()=>{N.value=!0}),re(j,{register:(r,y)=>{let{id:u,order:x,position:d,layoutSize:h,elementSize:B,active:P,disableTransitions:R,absolute:O}=y;i.set(u,x),l.set(u,d),s.set(u,h),c.set(u,P),R&&f.set(u,R);const ae=Be(fe,M==null?void 0:M.vnode).indexOf(r);ae>-1?t.value.splice(ae,0,u):t.value.push(u);const le=v(()=>I.value.findIndex(L=>L.id===u)),q=v(()=>o.value+g.value.length*2-le.value*2),be=v(()=>{const L=d.value==="left"||d.value==="right",F=d.value==="right",xe=d.value==="bottom",ne={[d.value]:0,zIndex:q.value,transform:`translate${L?"X":"Y"}(${(P.value?0:-110)*(F||xe?-1:1)}%)`,position:O.value||o.value!==se?"absolute":"fixed",...k.value?void 0:{transition:"none"}};if(!N.value)return ne;const _=I.value[le.value];if(!_)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const Z=V.value.get(u);return Z&&(_[Z.position]+=Z.amount),{...ne,height:L?`calc(100% - ${_.top}px - ${_.bottom}px)`:B.value?`${B.value}px`:void 0,left:F?void 0:`${_.left}px`,right:F?`${_.right}px`:void 0,top:d.value!=="bottom"?`${_.top}px`:void 0,bottom:d.value!=="top"?`${_.bottom}px`:void 0,width:L?B.value?`${B.value}px`:void 0:`calc(100% - ${_.left}px - ${_.right}px)`}}),_e=v(()=>({zIndex:q.value-1}));return{layoutItemStyles:be,layoutItemScrimStyles:_e,zIndex:q}},unregister:r=>{i.delete(r),l.delete(r),s.delete(r),c.delete(r),f.delete(r),t.value=t.value.filter(y=>y!==r)},mainRect:S,mainStyles:E,getLayoutItem:A,items:I,layoutRect:m,rootZIndex:o});const D=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),he=v(()=>({zIndex:o.value,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:D,layoutStyles:he,getLayoutItem:A,items:I,layoutRect:m,layoutRef:b}}const pe=U({text:String,...oe()},"v-toolbar-title"),ge=J()({name:"VToolbarTitle",props:pe(),setup(e,n){let{slots:o}=n;return C(()=>{var t;const l=!!(o.default||o.text||e.text);return a(e.tag,{class:"v-toolbar-title"},{default:()=>[l&&a("div",{class:"v-toolbar-title__placeholder"},[o.text?o.text():e.text,(t=o.default)==null?void 0:t.call(o)])]})}),{}}}),We=[null,"prominent","default","comfortable","compact"],ye=U({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>We.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Pe(),...Re(),...Le(),...oe({tag:"header"}),...ce()},"v-toolbar"),Y=J()({name:"VToolbar",props:ye(),setup(e,n){var o;let{slots:t}=n;const{backgroundColorClasses:l,backgroundColorStyles:s}=ze(W(e,"color")),{borderClasses:i}=He(e),{elevationClasses:c}=Ke(e),{roundedClasses:f}=Ee(e),{themeClasses:b}=de(e),m=w(!!(e.extended||(o=t.extension)!=null&&o.call(t))),V=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=v(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Te({VBtn:{variant:"text"}}),C(()=>{var k,S,E,I,A;const M=!!(e.title||t.title),N=!!(t.image||e.image),D=(k=t.extension)==null?void 0:k.call(t);return m.value=!!(e.extended||D),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,i.value,c.value,f.value,b.value],style:[s.value]},{default:()=>[N&&a("div",{key:"image",class:"v-toolbar__image"},[a(X,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(S=t.image)==null?void 0:S.call(t):a(Me,null,null)]})]),a(X,{defaults:{VTabs:{height:$(V.value)}}},{default:()=>[a("div",{class:"v-toolbar__content",style:{height:$(V.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(E=t.prepend)==null?void 0:E.call(t)]),M&&a(ge,{key:"title",text:e.title},{text:t.title}),(I=t.default)==null?void 0:I.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(A=t.append)==null?void 0:A.call(t)])])]}),a(X,{defaults:{VTabs:{height:$(g.value)}}},{default:()=>[a(De,null,{default:()=>[m.value&&a("div",{class:"v-toolbar__extension",style:{height:$(g.value)}},[D])]})]})]})}),{contentHeight:V,extensionHeight:g}}});function Ye(e){var n;return we(e,Object.keys((n=Y==null?void 0:Y.props)!=null?n:{}))}const Ge=J()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ye(),...Ue(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const t=w(),l=Ce(e,"modelValue"),s=v(()=>{var V,g;var c,f;const b=(V=(c=t.value)==null?void 0:c.contentHeight)!=null?V:0,m=(g=(f=t.value)==null?void 0:f.extensionHeight)!=null?g:0;return b+m}),{layoutItemStyles:i}=Fe({id:e.name,order:v(()=>parseInt(e.order,10)),position:W(e,"location"),layoutSize:s,elementSize:s,active:l,absolute:W(e,"absolute")});return C(()=>{const[c]=Ye(e);return a(Y,ve({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...i.value,height:void 0}},c),o)}),{}}}),Je=Q({name:"VAppBarTitle",props:pe(),setup(e,n){let{slots:o}=n;return C(()=>a(ge,ve(e,{class:"v-app-bar-title"}),o)),{}}});function Qe(e,n,o,t,l,s){const i=me("router-link");return ee(),te(Ge,{flat:"",color:"indigo-darken-3",elevation:"1"},{default:p(()=>[a(Je,null,{default:p(()=>[T("ELU Lab @ CAU")]),_:1}),a(i,{class:"text-white text-decoration-none",to:"/"+s.lang,"active-class":"indigo-lighten-2"},{default:p(()=>[a(K,null,{default:p(()=>[T(H(l.isKorean?"\uC18C\uAC1C":"About"),1)]),_:1})]),_:1},8,["to"]),a(i,{class:"text-white text-decoration-none",to:"/"+s.lang+"/team","active-class":"indigo-lighten-2"},{default:p(()=>[a(K,null,{default:p(()=>[T(H(l.isKorean?"\uC0AC\uB78C\uB4E4":"People"),1)]),_:1})]),_:1},8,["to"]),a(i,{class:"text-white text-decoration-none",to:"/"+s.lang+"/pub","active-class":"indigo-lighten-2"},{default:p(()=>[a(K,null,{default:p(()=>[T(H(l.isKorean?"\uB17C\uBB38":"Publication"),1)]),_:1})]),_:1},8,["to"]),a(i,{class:"text-white text-decoration-none",to:"/"+s.lang+"/contact","active-class":"indigo-lighten-2"},{default:p(()=>[a(K,null,{default:p(()=>[T(H(l.isKorean?"\uBB38\uC758\uD558\uAE30":"Contact"),1)]),_:1})]),_:1},8,["to"]),a(K,{onClick:s.langChange},{default:p(()=>[T("["+H(l.isKorean?"Eng":"\uD55C\uAD6D\uC5B4")+"]",1)]),_:1},8,["onClick"])]),_:1})}const et={name:"AppBar",data(){return{isKorean:!0}},methods:{langChange(){this.isKorean=!this.isKorean,this.isKorean?this.$router.push({path:this.$route.path.replace("en","ko")}):this.$router.push({path:this.$route.path.replace("ko","en")})}},computed:{lang(){return this.isKorean?"ko":"en"}}},tt=Ne(et,[["render",Qe]]);function ot(){const e=w(!1);return ue(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:ke(e)}}const at=Q({name:"VMain",props:{scrollable:Boolean,...oe({tag:"main"})},setup(e,n){let{slots:o}=n;const{mainStyles:t}=qe(),{ssrBootStyles:l}=ot();return C(()=>{var s,i;return a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,l.value]},{default:()=>[e.scrollable?a("div",{class:"v-main__scroller"},[(s=o.default)==null?void 0:s.call(o)]):(i=o.default)==null?void 0:i.call(o)]})}),{}}}),lt={__name:"View",setup(e){return(n,o)=>{const t=me("router-view");return ee(),te(at,null,{default:p(()=>[a(t)]),_:1})}}};const nt=Q({name:"VApp",props:{...je({fullHeight:!0}),...ce()},setup(e,n){let{slots:o}=n;const t=de(e),{layoutClasses:l,layoutStyles:s,getLayoutItem:i,items:c,layoutRef:f}=Xe(e),{rtlClasses:b}=Ae();return C(()=>{var m;return a("div",{ref:f,class:["v-application",t.themeClasses.value,l.value,b.value],style:s.value},[a("div",{class:"v-application__wrap"},[(m=o.default)==null?void 0:m.call(o)])])}),{getLayoutItem:i,items:c,theme:t}}}),mt={__name:"Default",setup(e){return(n,o)=>(ee(),te(nt,null,{default:p(()=>[a(tt),a(lt)]),_:1}))}};export{mt as default};
