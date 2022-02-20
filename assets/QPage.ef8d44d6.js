var pe=Object.defineProperty,we=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var Y=(e,n,t)=>n in e?pe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))$e.call(n,t)&&Y(e,t,n[t]);if(X)for(var t of X(n))Ee.call(n,t)&&Y(e,t,n[t]);return e},L=(e,n)=>we(e,Ce(n));import{v as u,t as T,x as s,N as Q,a1 as H,q as I,a2 as Le,R as V,a3 as Re,a4 as Te,P as ue,a5 as Pe,a6 as Me,M as se,z as R,m as oe,_ as ze,F as M,T as ce,a7 as je,l as Ne,a8 as Ae,n as G,a9 as Oe,aa as Qe}from"./vendor.166f174b.js";const U={xs:18,sm:24,md:32,lg:38,xl:46},de={size:String};function ve(e,n=U){return u(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const J="0 0 24 24",Z=e=>e,W=e=>`ionicons ${e}`,fe={"icon-":Z,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":W,"ion-ios":W,"ion-logo":W,"mdi-":e=>`mdi ${e}`,"iconfont ":Z,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ge={o_:"-outlined",r_:"-round",s_:"-sharp"},Ie=new RegExp("^("+Object.keys(fe).join("|")+")"),Ke=new RegExp("^("+Object.keys(ge).join("|")+")"),Fe=/^[Mm]\s?[-+]?\.?\d/,He=/^img:/,De=/^svguse:/,Ve=/^ion-/,We=/^[lf]a[srlbdk]? /;var ee=T({name:"QIcon",props:L(p({},de),{tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean}),setup(e,{slots:n}){const{proxy:{$q:t}}=I(),a=ve(e),m=u(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),r=u(()=>{let o,i=e.name;if(i==="none"||!i)return{none:!0};if(t.iconMapFn!==null){const h=t.iconMapFn(i);if(h!==void 0)if(h.icon!==void 0){if(i=h.icon,i==="none"||!i)return{none:!0}}else return{cls:h.cls,content:h.content!==void 0?h.content:" "}}if(Fe.test(i)===!0){const[h,x=J]=i.split("|");return{svg:!0,viewBox:x,nodes:h.split("&&").map(_=>{const[l,y,k]=_.split("@@");return s("path",{style:y,d:l,transform:k})})}}if(He.test(i)===!0)return{img:!0,src:i.substring(4)};if(De.test(i)===!0){const[h,x=J]=i.split("|");return{svguse:!0,src:h.substring(7),viewBox:x}}let b=" ";const S=i.match(Ie);if(S!==null)o=fe[S[1]](i);else if(We.test(i)===!0)o=i;else if(Ve.test(i)===!0)o=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${i.substr(3)}`;else{o="notranslate material-icons";const h=i.match(Ke);h!==null&&(i=i.substring(2),o+=ge[h[1]]),b=i}return{cls:o,content:b}});return()=>{const o={class:m.value,style:a.value,"aria-hidden":"true",role:"presentation"};return r.value.none===!0?s(e.tag,o,Q(n.default)):r.value.img===!0?s("span",o,H(n.default,[s("img",{src:r.value.src})])):r.value.svg===!0?s("span",o,H(n.default,[s("svg",{viewBox:r.value.viewBox},r.value.nodes)])):r.value.svguse===!0?s("span",o,H(n.default,[s("svg",{viewBox:r.value.viewBox},[s("use",{"xlink:href":r.value.src})])])):(r.value.cls!==void 0&&(o.class+=" "+r.value.cls),s(e.tag,o,H(n.default,[r.value.content])))}}});const me={size:{type:[Number,String],default:"1em"},color:String};function he(e){return{cSize:u(()=>e.size in U?`${U[e.size]}px`:e.size),classes:u(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var be=T({name:"QSpinner",props:L(p({},me),{thickness:{type:Number,default:5}}),setup(e){const{cSize:n,classes:t}=he(e);return()=>s("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[s("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const ye={dark:{type:Boolean,default:null}};function ke(e,n){return u(()=>e.dark===null?n.dark.isActive:e.dark)}function Ue(e,n=250){let t=!1,a;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),a=e.apply(this,arguments)),a}}function te(e,n,t,a){t.modifiers.stop===!0&&ue(e);const m=t.modifiers.color;let r=t.modifiers.center;r=r===!0||a===!0;const o=document.createElement("span"),i=document.createElement("span"),b=Pe(e),{left:S,top:h,width:x,height:_}=n.getBoundingClientRect(),l=Math.sqrt(x*x+_*_),y=l/2,k=`${(x-l)/2}px`,v=r?k:`${b.left-S-y}px`,g=`${(_-l)/2}px`,B=r?g:`${b.top-h-y}px`;i.className="q-ripple__inner",Me(i,{height:`${l}px`,width:`${l}px`,transform:`translate3d(${v},${B},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${m?" text-"+m:""}`,o.setAttribute("dir","ltr"),o.appendChild(i),n.appendChild(o);const w=()=>{o.remove(),clearTimeout(d)};t.abort.push(w);let d=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${k},${g},0) scale3d(1,1,1)`,i.style.opacity=.2,d=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,d=setTimeout(()=>{o.remove(),t.abort.splice(t.abort.indexOf(w),1)},275)},250)},50)}function ne(e,{modifiers:n,value:t,arg:a,instance:m}){const r=Object.assign({},m.$q.config.ripple,n,t);e.modifiers={early:r.early===!0,stop:r.stop===!0,center:r.center===!0,color:r.color||a,keyCodes:[].concat(r.keyCodes||13)}}var Xe=Le({name:"ripple",beforeMount(e,n){const t={enabled:n.value!==!1,modifiers:{},abort:[],start(a){t.enabled===!0&&a.qSkipRipple!==!0&&(t.modifiers.early===!0?["mousedown","touchstart"].includes(a.type)===!0:a.type==="click")&&te(a,e,t,a.qKeyEvent===!0)},keystart:Ue(a=>{t.enabled===!0&&a.qSkipRipple!==!0&&V(a,t.modifiers.keyCodes)===!0&&a.type===`key${t.modifiers.early===!0?"down":"up"}`&&te(a,e,t,!0)},300)};ne(t,n),e.__qripple=t,Re(t,"main",[[e,"mousedown","start","passive"],[e,"touchstart","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&ne(t,n)}},beforeUnmount(e){const n=e.__qripple;n.abort.forEach(t=>{t()}),Te(n,"main"),delete e._qripple}});const qe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ye=Object.keys(qe),Ge={align:{type:String,validator:e=>Ye.includes(e)}};function Je(e){return u(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${qe[n]}`})}function Ze(e){return e.appContext.config.globalProperties.$router!==void 0}function ae(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ie(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function et(e,n){for(const t in n){const a=n[t],m=e[t];if(typeof a=="string"){if(a!==m)return!1}else if(Array.isArray(m)===!1||m.length!==a.length||a.some((r,o)=>r!==m[o]))return!1}return!0}function le(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,a)=>t===n[a]):e.length===1&&e[0]===n}function tt(e,n){return Array.isArray(e)===!0?le(e,n):Array.isArray(n)===!0?le(n,e):e===n}function nt(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(tt(e[t],n[t])===!1)return!1;return!0}const xe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Se(e){const n=I(),{props:t,proxy:a}=n,m=Ze(n),r=u(()=>t.disable!==!0&&t.href!==void 0),o=u(()=>m===!0&&t.disable!==!0&&r.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),i=u(()=>{if(o.value===!0)try{return a.$router.resolve(t.to)}catch{}return null}),b=u(()=>i.value!==null),S=u(()=>r.value===!0||b.value===!0),h=u(()=>t.type==="a"||S.value===!0?"a":t.tag||e||"div"),x=u(()=>r.value===!0?{href:t.href,target:t.target}:b.value===!0?{href:i.value.href,target:t.target}:{}),_=u(()=>{if(b.value===!1)return null;const{matched:g}=i.value,{length:B}=g,w=g[B-1];if(w===void 0)return-1;const d=a.$route.matched;if(d.length===0)return-1;const $=d.findIndex(ie.bind(null,w));if($>-1)return $;const z=ae(g[B-2]);return B>1&&ae(w)===z&&d[d.length-1].path!==z?d.findIndex(ie.bind(null,g[B-2])):$}),l=u(()=>b.value===!0&&_.value>-1&&et(a.$route.params,i.value.params)),y=u(()=>l.value===!0&&_.value===a.$route.matched.length-1&&nt(a.$route.params,i.value.params)),k=u(()=>b.value===!0?y.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":l.value===!0?` ${t.activeClass}`:"":"");function v(g){return t.disable===!0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.__qNavigate!==!0&&g.defaultPrevented===!0||g.button!==void 0&&g.button!==0||t.target==="_blank"?!1:(se(g),a.$router[t.replace===!0?"replace":"push"](t.to).catch(B=>B))}return{hasRouterLink:b,hasHrefLink:r,hasLink:S,linkTag:h,linkRoute:i,linkIsActive:l,linkIsExactActive:y,linkClass:k,linkProps:x,navigateToRouterLink:v}}const re={none:0,xs:4,sm:8,md:16,lg:24,xl:32},at={xs:8,sm:10,md:14,lg:20,xl:24},it=["button","submit","reset"],lt=/[^\s]\/[^\s]/,rt=L(p(p({},de),xe),{type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:L(p({},Ge.align),{default:"center"}),stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean});function ut(e){const n=ve(e,at),t=Je(e),{hasRouterLink:a,hasLink:m,linkTag:r,linkProps:o,navigateToRouterLink:i}=Se("button"),b=u(()=>{const v=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},v,{padding:e.padding.split(/\s+/).map(g=>g in re?re[g]+"px":g).join(" "),minWidth:"0",minHeight:"0"}):v}),S=u(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),h=u(()=>e.disable!==!0&&e.loading!==!0),x=u(()=>h.value===!0?e.tabindex||0:-1),_=u(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),l=u(()=>{const v={tabindex:x.value};return m.value===!0?Object.assign(v,o.value):it.includes(e.type)===!0&&(v.type=e.type),r.value==="a"?(e.disable===!0?v["aria-disabled"]="true":v.href===void 0&&(v.role="button"),a.value!==!0&&lt.test(e.type)===!0&&(v.type=e.type)):e.disable===!0&&(v.disabled="",v["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(v,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),v}),y=u(()=>{let v;return e.color!==void 0?e.flat===!0||e.outline===!0?v=`text-${e.textColor||e.color}`:v=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(v=`text-${e.textColor}`),`q-btn--${_.value} q-btn--${e.round===!0?"round":`rectangle${S.value===!0?" q-btn--rounded":""}`}`+(v!==void 0?" "+v:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),k=u(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:y,style:b,innerClasses:k,attributes:l,hasRouterLink:a,hasLink:m,linkTag:r,navigateToRouterLink:i,isActionable:h}}const{passiveCapture:C}=je;let N=null,A=null,O=null;var gt=T({name:"QBtn",props:L(p({},rt),{percentage:Number,darkPercentage:Boolean}),emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:a}=I(),{classes:m,style:r,innerClasses:o,attributes:i,hasRouterLink:b,hasLink:S,linkTag:h,navigateToRouterLink:x,isActionable:_}=ut(e),l=R(null),y=R(null);let k=null,v,g;const B=u(()=>e.label!==void 0&&e.label!==null&&e.label!==""),w=u(()=>e.disable===!0||e.ripple===!1?!1:p({keyCodes:S.value===!0?[13,32]:[13]},e.ripple===!0?{}:e.ripple)),d=u(()=>({center:e.round})),$=u(()=>{const c=Math.max(0,Math.min(100,e.percentage));return c>0?{transition:"transform 0.6s",transform:`translateX(${c-100}%)`}:{}}),z=u(()=>e.loading===!0?{onMousedown:F,onTouchstartPassive:F,onClick:F,onKeydown:F,onKeyup:F}:_.value===!0?{onClick:P,onKeydown:j,onMousedown:Be,onTouchstartPassive:_e}:{onClick:M}),f=u(()=>p(p({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+m.value,style:r.value},i.value),z.value));function P(c){if(l.value!==null){if(c!==void 0){if(c.defaultPrevented===!0)return;const q=document.activeElement;if(e.type==="submit"&&q!==document.body&&l.value.contains(q)===!1&&q.contains(l.value)===!1){l.value.focus();const D=()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("keyup",D,C),l.value!==null&&l.value.removeEventListener("blur",D,C)};document.addEventListener("keydown",M,!0),document.addEventListener("keyup",D,C),l.value.addEventListener("blur",D,C)}}if(b.value===!0){const q=()=>{c.__qNavigate=!0,x(c)};t("click",c,q),c.defaultPrevented!==!0&&q()}else t("click",c)}}function j(c){l.value!==null&&(V(c,[13,32])===!0&&(M(c),A!==l.value&&(A!==null&&K(),l.value.focus(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",E,!0),l.value.addEventListener("blur",E,C))),t("keydown",c))}function _e(c){l.value!==null&&(N!==l.value&&(N!==null&&K(),N=l.value,k=c.target,k.addEventListener("touchcancel",E,C),k.addEventListener("touchend",E,C)),v=!0,clearTimeout(g),g=setTimeout(()=>{v=!1},200),t("touchstart",c))}function Be(c){l.value!==null&&(O!==l.value&&(O!==null&&K(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",E,C)),c.qSkipRipple=v===!0,t("mousedown",c))}function E(c){if(l.value!==null&&!(c!==void 0&&c.type==="blur"&&document.activeElement===l.value)){if(c!==void 0&&c.type==="keyup"){if(A===l.value&&V(c,[13,32])===!0){const q=new MouseEvent("click",c);q.qKeyEvent=!0,c.defaultPrevented===!0&&se(q),c.cancelBubble===!0&&ue(q),l.value.dispatchEvent(q),M(c),c.qKeyEvent=!0}t("keyup",c)}K()}}function K(c){const q=y.value;c!==!0&&(N===l.value||O===l.value)&&q!==null&&q!==document.activeElement&&(q.setAttribute("tabindex",-1),q.focus()),N===l.value&&(k!==null&&(k.removeEventListener("touchcancel",E,C),k.removeEventListener("touchend",E,C)),N=k=null),O===l.value&&(document.removeEventListener("mouseup",E,C),O=null),A===l.value&&(document.removeEventListener("keyup",E,!0),l.value!==null&&l.value.removeEventListener("blur",E,C),A=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function F(c){M(c),c.qSkipRipple=!0}return oe(()=>{K(!0)}),Object.assign(a,{click:P}),()=>{let c=[];e.icon!==void 0&&c.push(s(ee,{name:e.icon,left:e.stack===!1&&B.value===!0,role:"img","aria-hidden":"true"})),B.value===!0&&c.push(s("span",{class:"block"},[e.label])),c=H(n.default,c),e.iconRight!==void 0&&e.round===!1&&c.push(s(ee,{name:e.iconRight,right:e.stack===!1&&B.value===!0,role:"img","aria-hidden":"true"}));const q=[s("span",{class:"q-focus-helper",ref:y})];return e.loading===!0&&e.percentage!==void 0&&q.push(s("span",{class:"q-btn__progress absolute-full overflow-hidden"},[s("span",{class:"q-btn__progress-indicator fit block"+(e.darkPercentage===!0?" q-btn__progress--dark":""),style:$.value})])),q.push(s("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},c)),e.loading!==null&&q.push(s(ce,{name:"q-transition--fade"},()=>e.loading===!0?[s("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[s(be)])]:null)),ze(s(h.value,f.value,q),[[Xe,w.value,void 0,d.value]])}}});const st=[s("g",{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"},[s("circle",{cx:"5",cy:"50",r:"5"},[s("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),s("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]),s("circle",{cx:"27",cy:"5",r:"5"},[s("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),s("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]),s("circle",{cx:"49",cy:"50",r:"5"},[s("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),s("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})])])];var mt=T({name:"QSpinnerBall",props:me,setup(e){const{cSize:n,classes:t}=he(e);return()=>s("svg",{class:t.value,stroke:"currentColor",width:n.value,height:n.value,viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg"},st)}});const ot={ratio:[String,Number]};function ct(e,n){return u(()=>{const t=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(t)!==!0&&t>0?{paddingBottom:`${100/t}%`}:null})}const dt=16/9;var ht=T({name:"QImg",props:L(p({},ot),{src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},width:String,height:String,initialRatio:{type:[Number,String],default:dt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String}),emits:["load","error"],setup(e,{slots:n,emit:t}){const a=R(e.initialRatio),m=ct(e,a);let r;const o=[R(null),R(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],i=R(0),b=R(!1),S=R(!1),h=u(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),x=u(()=>({width:e.width,height:e.height})),_=u(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),l=u(()=>L(p({},e.imgStyle),{objectFit:e.fit,objectPosition:e.position}));Ne(()=>y(),k);function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function k(f){if(clearTimeout(r),S.value=!1,f===null){b.value=!1,o[0].value=null,o[1].value=null;return}b.value=!0,o[i.value].value=f}function v({target:f}){r!==null&&(clearTimeout(r),a.value=f.naturalHeight===0?.5:f.naturalWidth/f.naturalHeight,g(f,1))}function g(f,P){r===null||P===1e3||(f.complete===!0?B(f):r=setTimeout(()=>{g(f,P+1)},50))}function B(f){r!==null&&(i.value=i.value===1?0:1,o[i.value].value=null,b.value=!1,S.value=!1,t("load",f.currentSrc||f.src))}function w(f){clearTimeout(r),b.value=!1,S.value=!0,o[0].value=null,o[1].value=null,t("error",f)}function d(f,P){return s("div",{class:"q-img__container absolute-full",key:f},P)}function $(f){const P=o[f].value,j=p({key:"img_"+f,class:_.value,style:l.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,"aria-hidden":"true",draggable:e.draggable},P);return i.value===f?(j.class+=" q-img__image--waiting",Object.assign(j,{onLoad:v,onError:w})):j.class+=" q-img__image--loaded",d("img"+f,s("img",j))}function z(){return b.value!==!0?s("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Q(n[S.value===!0?"error":"default"])):s("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[s(be,{color:e.spinnerColor,size:e.spinnerSize})])}return k(y()),oe(()=>{clearTimeout(r),r=null}),()=>{const f=[];return m.value!==null&&f.push(s("div",{key:"filler",style:m.value})),S.value!==!0&&(o[0].value!==null&&f.push($(0)),o[1].value!==null&&f.push($(1))),f.push(s(ce,{name:"q-transition--fade"},z)),s("div",{class:h.value,style:x.value,role:"img","aria-label":e.alt},f)}}}),bt=T({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const t=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>s("div",{class:t.value},Q(n.default))}}),yt=T({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const t=u(()=>parseInt(e.lines,10)),a=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),m=u(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>s("div",{style:m.value,class:a.value},Q(n.default))}}),kt=T({name:"QItem",props:L(p(p({},ye),xe),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:n,emit:t}){const{proxy:{$q:a}}=I(),m=ke(e,a),{hasRouterLink:r,hasLink:o,linkProps:i,linkClass:b,linkTag:S,navigateToRouterLink:h}=Se(),x=R(null),_=R(null),l=u(()=>e.clickable===!0||o.value===!0||e.tag==="label"),y=u(()=>e.disable!==!0&&l.value===!0),k=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(m.value===!0?" q-item--dark":"")+(o.value===!0?b.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(y.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),v=u(()=>{if(e.insetLevel===void 0)return null;const d=a.lang.rtl===!0?"Right":"Left";return{["padding"+d]:16+e.insetLevel*56+"px"}});function g(d){y.value===!0&&(_.value!==null&&(d.qKeyEvent!==!0&&document.activeElement===x.value?_.value.focus():document.activeElement===_.value&&x.value.focus()),r.value===!0&&h(d),t("click",d))}function B(d){if(y.value===!0&&V(d,13)===!0){M(d),d.qKeyEvent=!0;const $=new MouseEvent("click",d);$.qKeyEvent=!0,x.value.dispatchEvent($)}t("keyup",d)}function w(){const d=Ae(n.default,[]);return y.value===!0&&d.unshift(s("div",{class:"q-focus-helper",tabindex:-1,ref:_})),d}return()=>{const d={ref:x,class:k.value,style:v.value,onClick:g,onKeyup:B};return y.value===!0?(d.tabindex=e.tabindex||"0",Object.assign(d,i.value)):l.value===!0&&(d["aria-disabled"]="true"),s(S.value,d,w())}}}),qt=T({name:"QList",props:L(p({},ye),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:n}){const t=I(),a=ke(e,t.proxy.$q),m=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>s("div",{class:m.value},Q(n.default))}}),xt=T({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:t}}=I(),a=G(Oe);G(Qe,()=>{console.error("QPage needs to be child of QPageContainer")});const m=u(()=>{const o=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const i=a.isContainer.value===!0?a.containerHeight.value:t.screen.height;return e.styleFn(o,i)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-o+"px":t.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":t.screen.height-o+"px"}}),r=u(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>s("main",{class:r.value,style:m.value},Q(n.default))}});export{ee as Q,Xe as R,ve as a,ye as b,ke as c,be as d,gt as e,xt as f,mt as g,qt as h,kt as i,bt as j,ht as k,yt as l,de as u};
