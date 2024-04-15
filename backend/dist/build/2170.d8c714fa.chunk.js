(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2170],{84624:(m,i,t)=>{var o=t(81204),s=t(51646),r="[object Boolean]";function c(h){return h===!0||h===!1||s(h)&&o(h)==r}m.exports=c},54257:(m,i,t)=>{var o=t(16819);function s(r){return o(r)&&r!=+r}m.exports=s},16819:(m,i,t)=>{var o=t(81204),s=t(51646),r="[object Number]";function c(h){return typeof h=="number"||s(h)&&o(h)==r}m.exports=c},47098:(m,i,t)=>{"use strict";t.d(i,{I:()=>l,n:()=>A});var o=t(92132),s=t(21272),r=t(63891),c=t(99251),h=t(54844),u=t(57842),E=t(43242),v=t(44370);const _=({theme:a,expanded:n,variant:d,disabled:f,error:p})=>p?`1px solid ${a.colors.danger600} !important`:f?`1px solid ${a.colors.neutral150}`:n?`1px solid ${a.colors.primary600}`:d==="primary"?`1px solid ${a.colors.neutral0}`:`1px solid ${a.colors.neutral100}`,l=(0,r.Ay)(u.o)``,x=(0,r.Ay)(v.a)`
  border: ${_};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:a})=>a.colors.primary600};

    ${l} {
      color: ${({theme:a,expanded:n})=>n?void 0:a.colors.primary700};
    }

    ${u.o} {
      color: ${({theme:a,expanded:n})=>n?void 0:a.colors.primary600};
    }

    & > ${E.s} {
      background: ${({theme:a})=>a.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:a})=>a.colors.primary200};
    }
  }
`,A=({children:a,disabled:n=!1,error:d,expanded:f=!1,hasErrorMessage:p=!0,id:b,onToggle:y,toggle:O,size:P="M",variant:M="primary",shadow:$})=>{const C=(0,h.B)(b),L=s.useMemo(()=>({expanded:f,onToggle:y,toggle:O,id:C,size:P,variant:M,disabled:n}),[n,f,C,y,P,O,M]);return(0,o.jsxs)(c.C.Provider,{value:L,children:[(0,o.jsx)(x,{"data-strapi-expanded":f,disabled:n,"aria-disabled":n,expanded:f,hasRadius:!0,variant:M,error:d,shadow:$,children:a}),d&&p&&(0,o.jsx)(v.a,{paddingTop:1,children:(0,o.jsx)(u.o,{variant:"pi",textColor:"danger600",children:d})})]})}},80725:(m,i,t)=>{"use strict";t.d(i,{u:()=>c});var o=t(92132),s=t(99251),r=t(44370);const c=({children:h,...u})=>{const{expanded:E,id:v}=(0,s.O)();if(!E)return null;const _=`accordion-content-${v}`,l=`accordion-label-${v}`,x=`accordion-desc-${v}`;return(0,o.jsx)(r.a,{role:"region",id:_,"aria-labelledby":l,"aria-describedby":x,...u,children:h})}},99251:(m,i,t)=>{"use strict";t.d(i,{C:()=>s,O:()=>r});var o=t(21272);const s=(0,o.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),r=()=>(0,o.useContext)(s)},96294:(m,i,t)=>{"use strict";t.d(i,{P:()=>a});var o=t(92132),s=t(28556),r=t(63891),c=t(47098),h=t(99251);const u=({expanded:n,disabled:d,variant:f})=>{let p="neutral100";return n?p="primary100":d?p="neutral150":f==="primary"&&(p="neutral0"),p};var E=t(43274),v=t(27026),_=t(43242),l=t(57842);const x=(0,r.Ay)(E.Q)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:n,expanded:d})=>d?n.colors.primary600:n.colors.neutral500};
    }
  }
`,A=(0,r.Ay)(_.s)`
  min-height: ${({theme:n,size:d})=>n.sizes.accordions[d]};
  border-radius: ${({theme:n,expanded:d})=>d?`${n.borderRadius} ${n.borderRadius} 0 0`:n.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.primary600};
      }
    }
  }
`,a=({title:n,description:d,as:f="span",togglePosition:p="right",action:b,...y})=>{const{onToggle:O,toggle:P,expanded:M,id:$,size:C,variant:L,disabled:D}=(0,h.O)(),k=`accordion-content-${$}`,R=`accordion-label-${$}`,N=`accordion-desc-${$}`,B=C==="M"?6:4,I=C==="M"?B:B-2,F=u({expanded:M,disabled:D,variant:L}),H={as:f,fontWeight:C==="S"?"bold":void 0,id:R,textColor:M?"primary600":"neutral700",ellipsis:!0,variant:C==="M"?"delta":void 0},G=M?"primary600":"neutral600",J=M?"primary200":"neutral200",w=C==="M"?`${32/16}rem`:`${24/16}rem`,W=()=>{D||(P&&!O?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),P()):O&&O())},U=(0,o.jsx)(_.s,{justifyContent:"center",borderRadius:"50%",height:w,width:w,transform:M?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:J,cursor:D?"not-allowed":"pointer",onClick:W,shrink:0,children:(0,o.jsx)(v.I,{as:s.A,width:C==="M"?`${11/16}rem`:`${8/16}rem`,color:M?"primary600":"neutral600"})});return(0,o.jsx)(A,{paddingBottom:I,paddingLeft:B,paddingRight:B,paddingTop:I,background:F,expanded:M,size:C,justifyContent:"space-between",cursor:D?"not-allowed":"",children:(0,o.jsxs)(_.s,{gap:3,flex:1,maxWidth:"100%",children:[p==="left"&&U,(0,o.jsx)(x,{onClick:W,"aria-disabled":D,"aria-expanded":M,"aria-controls":k,"aria-labelledby":R,"data-strapi-accordion-toggle":!0,expanded:M,type:"button",flex:1,minWidth:0,...y,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.I,{...H,children:n}),d&&(0,o.jsx)(l.o,{as:"p",id:N,textColor:G,children:d})]})}),p==="right"&&(0,o.jsxs)(_.s,{gap:3,children:[U,b]}),p==="left"&&b]})})}},95065:(m,i,t)=>{"use strict";t.d(i,{A:()=>r});var o=t(92132);const s=c=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,o.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),r=s},22169:(m,i,t)=>{"use strict";t.d(i,{A:()=>r});var o=t(92132);const s=c=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:[(0,o.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),r=s},83016:(m,i,t)=>{"use strict";t.d(i,{A:()=>r});var o=t(92132);const s=c=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,o.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),r=s},30431:(m,i,t)=>{"use strict";t.d(i,{A:()=>r});var o=t(92132);const s=c=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:[(0,o.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,o.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),r=s},21610:(m,i,t)=>{"use strict";t.d(i,{N:()=>_});var o=t(92132),s=t(21272),r=t(44010),c=t(63891),h=t(78732),u=t(85329),E=t(30893);const v=(0,c.Ay)(u.s)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:l})=>l.spaces[2]};
  pointer-events: ${({disabled:l})=>l?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:l,theme:x})=>l?x.colors.neutral600:x.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:l})=>l.colors.primary500};
  }

  &:active {
    color: ${({theme:l})=>l.colors.primary700};
  }

  ${h.AP};
`,_=s.forwardRef(({children:l,href:x,disabled:A=!1,startIcon:a,endIcon:n,isExternal:d=!0,...f},p)=>(0,o.jsxs)(v,{ref:p,href:x,disabled:A,isExternal:d,...f,children:[a,(0,o.jsx)(E.o,{textColor:A?"neutral600":"primary600",children:l}),n,x&&!n&&d&&(0,o.jsx)(r.A,{})]}));_.displayName="Link"},52183:(m,i,t)=>{"use strict";t.d(i,{UC:()=>w,q7:()=>W,JU:()=>U,bL:()=>G,G5:()=>tt,x8:()=>Y,ZP:()=>q,l9:()=>J});var o=t(92132),s=t(21272),r=t(96234),c=t(28556),h=t(4702),u=t(63891),E=t(5146),v=t(21610),_=t(16034),l=t(86550),x=t(11270),A=t(76325),a=t(94061),n=t(30893),d=t(83997);const f=(0,u.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,p=(0,u.Ay)(_.A)`
  animation: ${f} 2s infinite linear;
  will-change: transform;
`,b=(0,u.Ay)(A.S)`
  height: ${({theme:e,size:g})=>e.sizes.button[g]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${x.mc}

    &:active {
      ${x.mc}
    }
  }

  &:hover {
    ${x.AD}
  }

  &:active {
    ${x.qL}
  }

  ${x.Bc}
`,y=s.forwardRef(({variant:e=l.qN,startIcon:g,endIcon:j,disabled:T=!1,children:V,onClick:S,size:K=l.GO[0],loading:z=!1,fullWidth:Z=!1,...ot},rt)=>{const Q=T||z,nt=et=>{!Q&&S&&S(et)};return(0,o.jsxs)(b,{ref:rt,"aria-disabled":Q,disabled:Q,size:K,variant:e,onClick:nt,fullWidth:Z,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:Z,justifyContent:Z?"center":void 0,paddingLeft:4,paddingRight:4,width:Z?"100%":void 0,...ot,children:[(g||z)&&(0,o.jsx)(a.a,{"aria-hidden":!0,children:z?(0,o.jsx)(p,{}):g}),(0,o.jsx)(n.o,{variant:K==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:V}),j&&(0,o.jsx)(d.s,{"aria-hidden":!0,children:j})]})});y.displayName="Button";const O=r.bL,P=(0,s.forwardRef)(({size:e,endIcon:g=(0,o.jsx)(c.A,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...j},T)=>(0,o.jsx)(r.l9,{asChild:!0,children:(0,o.jsx)(y,{ref:T,type:"button",variant:"ghost",endIcon:g,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...j})})),M=(0,s.forwardRef)(({children:e,intersectionId:g,popoverPlacement:j="bottom-start",...T},V)=>{const[S,K]=j.split("-");return(0,o.jsx)(r.ZL,{children:(0,o.jsx)(r.UC,{align:K,side:S,loop:!0,asChild:!0,children:(0,o.jsxs)($,{ref:V,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...T,children:[e,(0,o.jsx)(a.a,{id:g,width:"100%",height:"1px"})]})})})}),$=(0,u.Ay)(d.s)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,C=({onSelect:e,disabled:g=!1,...j})=>(0,o.jsx)(r.q7,{asChild:!0,onSelect:e,disabled:g,children:j.isLink||j.isExternal?(0,o.jsx)(k,{color:"neutral800",...j,isExternal:j.isExternal??!1,children:(0,o.jsx)(n.o,{children:j.children})}):(0,o.jsx)(D,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...j,children:(0,o.jsx)(n.o,{children:j.children})})}),L=({theme:e})=>(0,u.AH)`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${n.o} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${n.o} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,D=(0,u.Ay)(d.s)`
  ${L}
`,k=(0,u.Ay)(v.N)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:g})=>(0,E.K)(e.colors,g,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${L}
`,R=(0,s.forwardRef)((e,g)=>(0,o.jsx)(r.JU,{asChild:!0,children:(0,o.jsx)(N,{ref:g,variant:"sigma",textColor:"neutral600",...e})})),N=(0,u.Ay)(n.o)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,B=r.Pb,I=(0,s.forwardRef)(({disabled:e=!1,...g},j)=>(0,o.jsx)(r.ZP,{asChild:!0,disabled:e,children:(0,o.jsxs)(F,{ref:j,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...g,children:[(0,o.jsx)(n.o,{children:g.children}),(0,o.jsx)(X,{height:12,width:12})]})})),F=(0,u.Ay)(D)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,X=(0,u.Ay)(h.A)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,H=(0,s.forwardRef)((e,g)=>(0,o.jsx)(r.ZL,{children:(0,o.jsx)(r.G5,{sideOffset:8,asChild:!0,children:(0,o.jsx)($,{ref:g,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),G=O,J=P,w=M,W=C,U=R,Y=B,q=I,tt=H},5336:(m,i,t)=>{"use strict";t.d(i,{Dr:()=>h});var o=t(92132),s=t(21272),r=t(52183);const c=({children:u,onOpen:E,onClose:v,popoverPlacement:_,onReachEnd:l,...x})=>{const A=useRef(null),[a,n]=useState(!1),d=y=>{l&&l(y)},f=y=>{y&&typeof E=="function"?E():!y&&typeof v=="function"&&v(),n(y)},p=useId(),b=`intersection-${stripReactIdOfColon(p)}`;return useIntersection(A,d,{selectorToWatch:`#${b}`,skipWhen:!a}),jsxs(Root,{onOpenChange:f,children:[jsx(Trigger,{...x,children:x.label}),jsx(Content,{intersectionId:b,popoverPlacement:_,children:u})]})},h=r.q7},60256:(m,i,t)=>{"use strict";t.d(i,{pe:()=>r});var o=t(41629);const{Axios:s,AxiosError:r,CanceledError:c,isCancel:h,CancelToken:u,VERSION:E,all:v,Cancel:_,isAxiosError:l,spread:x,toFormData:A,AxiosHeaders:a,HttpStatusCode:n,formToJSON:d,getAdapter:f,mergeConfig:p}=o.A}}]);
