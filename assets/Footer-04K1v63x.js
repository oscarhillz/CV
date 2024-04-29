import{r as D,j as i,L as G}from"./index-COqtTkf_.js";import{E as H,a as _,F as I,_ as u,G as M,H as U,I as q,m as T,c as B,J,j as Q,d as K,s as X,u as Y,A as Z,B as ee,C as te,D as se}from"./GitHub-H6gzbS3L.js";const oe=["ownerState"],ne=["variants"],re=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ie(e){return Object.keys(e).length===0}function ae(e){return typeof e=="string"&&e.charCodeAt(0)>96}function P(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const le=M(),ce=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function C({defaultTheme:e,theme:o,themeId:t}){return ie(o)?e:o[t]||o}function ue(e){return e?(o,t)=>t[e]:null}function w(e,o){let{ownerState:t}=o,c=_(o,oe);const a=typeof e=="function"?e(u({ownerState:t},c)):e;if(Array.isArray(a))return a.flatMap(p=>w(p,u({ownerState:t},c)));if(a&&typeof a=="object"&&Array.isArray(a.variants)){const{variants:p=[]}=a;let n=_(a,ne);return p.forEach(r=>{let l=!0;typeof r.props=="function"?l=r.props(u({ownerState:t},c,t)):Object.keys(r.props).forEach(m=>{(t==null?void 0:t[m])!==r.props[m]&&c[m]!==r.props[m]&&(l=!1)}),l&&(Array.isArray(n)||(n=[n]),n.push(typeof r.style=="function"?r.style(u({ownerState:t},c,t)):r.style))}),n}return a}function de(e={}){const{themeId:o,defaultTheme:t=le,rootShouldForwardProp:c=P,slotShouldForwardProp:a=P}=e,p=s=>U(u({},s,{theme:C(u({},s,{defaultTheme:t,themeId:o}))}));return p.__mui_systemSx=!0,(s,n={})=>{H(s,d=>d.filter(h=>!(h!=null&&h.__mui_systemSx)));const{name:r,slot:l,skipVariantsResolver:m,skipSx:v,overridesResolver:g=ue(ce(l))}=n,R=_(n,re),W=m!==void 0?m:l&&l!=="Root"&&l!=="root"||!1,$=v||!1;let j,b=P;l==="Root"||l==="root"?b=c:l?b=a:ae(s)&&(b=void 0);const O=I(s,u({shouldForwardProp:b,label:j},R)),F=d=>typeof d=="function"&&d.__emotion_real!==d||q(d)?h=>w(d,u({},h,{theme:C({theme:h.theme,defaultTheme:t,themeId:o})})):d,L=(d,...h)=>{let N=F(d);const S=h?h.map(F):[];r&&g&&S.push(x=>{const f=C(u({},x,{defaultTheme:t,themeId:o}));if(!f.components||!f.components[r]||!f.components[r].styleOverrides)return null;const y=f.components[r].styleOverrides,k={};return Object.entries(y).forEach(([E,V])=>{k[E]=w(V,u({},x,{theme:f}))}),g(x,k)}),r&&!W&&S.push(x=>{var f;const y=C(u({},x,{defaultTheme:t,themeId:o})),k=y==null||(f=y.components)==null||(f=f[r])==null?void 0:f.variants;return w({variants:k},u({},x,{theme:y}))}),$||S.push(p);const z=S.length-h.length;if(Array.isArray(d)&&z>0){const x=new Array(z).fill("");N=[...d,...x],N.raw=[...d.raw,...x]}const A=O(N,...S);return s.muiName&&(A.muiName=s.muiName),A};return O.withConfig&&(L.withConfig=O.withConfig),L}}const me=de(),fe=["className","component","disableGutters","fixed","maxWidth","classes"],pe=M(),he=me("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`maxWidth${T(String(t.maxWidth))}`],t.fixed&&o.fixed,t.disableGutters&&o.disableGutters]}}),xe=e=>J({props:e,name:"MuiContainer",defaultTheme:pe}),ve=(e,o)=>{const t=r=>K(o,r),{classes:c,fixed:a,disableGutters:p,maxWidth:s}=e,n={root:["root",s&&`maxWidth${T(String(s))}`,a&&"fixed",p&&"disableGutters"]};return Q(n,t,c)};function be(e={}){const{createStyledComponent:o=he,useThemeProps:t=xe,componentName:c="MuiContainer"}=e,a=o(({theme:s,ownerState:n})=>u({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}}),({theme:s,ownerState:n})=>n.fixed&&Object.keys(s.breakpoints.values).reduce((r,l)=>{const m=l,v=s.breakpoints.values[m];return v!==0&&(r[s.breakpoints.up(m)]={maxWidth:`${v}${s.breakpoints.unit}`}),r},{}),({theme:s,ownerState:n})=>u({},n.maxWidth==="xs"&&{[s.breakpoints.up("xs")]:{maxWidth:Math.max(s.breakpoints.values.xs,444)}},n.maxWidth&&n.maxWidth!=="xs"&&{[s.breakpoints.up(n.maxWidth)]:{maxWidth:`${s.breakpoints.values[n.maxWidth]}${s.breakpoints.unit}`}}));return D.forwardRef(function(n,r){const l=t(n),{className:m,component:v="div",disableGutters:g=!1,fixed:R=!1,maxWidth:W="lg"}=l,$=_(l,fe),j=u({},l,{component:v,disableGutters:g,fixed:R,maxWidth:W}),b=ve(j,c);return i.jsx(a,u({as:v,ownerState:j,className:B(b.root,m),ref:r},$))})}const Se=be({createStyledComponent:X("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`maxWidth${T(String(t.maxWidth))}`],t.fixed&&o.fixed,t.disableGutters&&o.disableGutters]}}),useThemeProps:e=>Y({props:e,name:"MuiContainer"})}),ye=Se;function ge(){const e=[i.jsx(Z,{fontSize:"large"}),i.jsx(ee,{fontSize:"large"}),i.jsx(te,{fontSize:"large"}),i.jsx(se,{fontSize:"large"})],o=["https://twitter.com/oscarhillz","https://www.linkedin.com/in/oscarhillz","https://www.instagram.com/oscarhillz/","https://www.github.com/oscarhillz/"],t=["Home","About","Projects","Services","Contact"];return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"footer-img",children:i.jsx("div",{className:"footer-img-circle"})}),i.jsx("div",{className:"footer-text",children:i.jsxs(ye,{children:[i.jsx("h2",{children:"Oscar Hill"}),i.jsx("p",{children:"I design and develop custom software solutions, spanning both front end and back end. I collaborate with you from the initial phase to the final delivery, ensuring your goals are met and that you achieve the best possible outcomes."})]})}),i.jsx("div",{className:"footer-icons",children:e.map((c,a)=>i.jsx(G,{target:"_blank",to:o[a],"aria-label":"Link",children:c},a))}),i.jsxs("div",{className:"footer-quicklinks",children:[i.jsx("h2",{children:"Quick Links"}),t.map((c,a)=>i.jsx(G,{to:`/CV/${c}`,onClick:()=>window.scrollTo(0,0),"aria-label":"Link",children:c},a))]}),i.jsx("hr",{}),i.jsx("div",{className:"footer-final",children:i.jsx("p",{children:"© Oscar Hill 2024"})})]})}const Ce=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));export{ye as C,ge as F,Ce as a};
