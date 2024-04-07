(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8264],{31431:(m,i,t)=>{var o=t(72552),s=t(40346),n="[object Boolean]";function c(h){return h===!0||h===!1||s(h)&&o(h)==n}m.exports=c},11741:(m,i,t)=>{var o=t(98023);function s(n){return o(n)&&n!=+n}m.exports=s},98023:(m,i,t)=>{var o=t(72552),s=t(40346),n="[object Number]";function c(h){return typeof h=="number"||s(h)&&o(h)==n}m.exports=c},98680:(m,i,t)=>{"use strict";t.d(i,{I:()=>l,n:()=>b});var o=t(74848),s=t(96540),n=t(67336),c=t(61873),h=t(60334),u=t(63188),M=t(61160),_=t(28992);const v=({theme:a,expanded:r,variant:d,disabled:f,error:p})=>p?`1px solid ${a.colors.danger600} !important`:f?`1px solid ${a.colors.neutral150}`:r?`1px solid ${a.colors.primary600}`:d==="primary"?`1px solid ${a.colors.neutral0}`:`1px solid ${a.colors.neutral100}`,l=(0,n.Ay)(u.o)``,x=(0,n.Ay)(_.a)`
  border: ${v};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:a})=>a.colors.primary600};

    ${l} {
      color: ${({theme:a,expanded:r})=>r?void 0:a.colors.primary700};
    }

    ${u.o} {
      color: ${({theme:a,expanded:r})=>r?void 0:a.colors.primary600};
    }

    & > ${M.s} {
      background: ${({theme:a})=>a.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:a})=>a.colors.primary200};
    }
  }
`,b=({children:a,disabled:r=!1,error:d,expanded:f=!1,hasErrorMessage:p=!0,id:A,onToggle:y,toggle:O,size:D="M",variant:E="primary",shadow:P})=>{const C=(0,h.B)(A),L=s.useMemo(()=>({expanded:f,onToggle:y,toggle:O,id:C,size:D,variant:E,disabled:r}),[r,f,C,y,D,O,E]);return(0,o.jsxs)(c.C.Provider,{value:L,children:[(0,o.jsx)(x,{"data-strapi-expanded":f,disabled:r,"aria-disabled":r,expanded:f,hasRadius:!0,variant:E,error:d,shadow:P,children:a}),d&&p&&(0,o.jsx)(_.a,{paddingTop:1,children:(0,o.jsx)(u.o,{variant:"pi",textColor:"danger600",children:d})})]})}},79335:(m,i,t)=>{"use strict";t.d(i,{u:()=>c});var o=t(74848),s=t(61873),n=t(28992);const c=({children:h,...u})=>{const{expanded:M,id:_}=(0,s.O)();if(!M)return null;const v=`accordion-content-${_}`,l=`accordion-label-${_}`,x=`accordion-desc-${_}`;return(0,o.jsx)(n.a,{role:"region",id:v,"aria-labelledby":l,"aria-describedby":x,...u,children:h})}},61873:(m,i,t)=>{"use strict";t.d(i,{C:()=>s,O:()=>n});var o=t(96540);const s=(0,o.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,o.useContext)(s)},99752:(m,i,t)=>{"use strict";t.d(i,{P:()=>a});var o=t(74848),s=t(52766),n=t(67336),c=t(98680),h=t(61873);const u=({expanded:r,disabled:d,variant:f})=>{let p="neutral100";return r?p="primary100":d?p="neutral150":f==="primary"&&(p="neutral0"),p};var M=t(93304),_=t(75608),v=t(61160),l=t(63188);const x=(0,n.Ay)(M.Q)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:r,expanded:d})=>d?r.colors.primary600:r.colors.neutral500};
    }
  }
`,b=(0,n.Ay)(v.s)`
  min-height: ${({theme:r,size:d})=>r.sizes.accordions[d]};
  border-radius: ${({theme:r,expanded:d})=>d?`${r.borderRadius} ${r.borderRadius} 0 0`:r.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }
`,a=({title:r,description:d,as:f="span",togglePosition:p="right",action:A,...y})=>{const{onToggle:O,toggle:D,expanded:E,id:P,size:C,variant:L,disabled:$}=(0,h.O)(),k=`accordion-content-${P}`,R=`accordion-label-${P}`,N=`accordion-desc-${P}`,B=C==="M"?6:4,I=C==="M"?B:B-2,F=u({expanded:E,disabled:$,variant:L}),H={as:f,fontWeight:C==="S"?"bold":void 0,id:R,textColor:E?"primary600":"neutral700",ellipsis:!0,variant:C==="M"?"delta":void 0},G=E?"primary600":"neutral600",z=E?"primary200":"neutral200",w=C==="M"?`${32/16}rem`:`${24/16}rem`,W=()=>{$||(D&&!O?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),D()):O&&O())},U=(0,o.jsx)(v.s,{justifyContent:"center",borderRadius:"50%",height:w,width:w,transform:E?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:z,cursor:$?"not-allowed":"pointer",onClick:W,shrink:0,children:(0,o.jsx)(_.I,{as:s.A,width:C==="M"?`${11/16}rem`:`${8/16}rem`,color:E?"primary600":"neutral600"})});return(0,o.jsx)(b,{paddingBottom:I,paddingLeft:B,paddingRight:B,paddingTop:I,background:F,expanded:E,size:C,justifyContent:"space-between",cursor:$?"not-allowed":"",children:(0,o.jsxs)(v.s,{gap:3,flex:1,maxWidth:"100%",children:[p==="left"&&U,(0,o.jsx)(x,{onClick:W,"aria-disabled":$,"aria-expanded":E,"aria-controls":k,"aria-labelledby":R,"data-strapi-accordion-toggle":!0,expanded:E,type:"button",flex:1,minWidth:0,...y,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.I,{...H,children:r}),d&&(0,o.jsx)(l.o,{as:"p",id:N,textColor:G,children:d})]})}),p==="right"&&(0,o.jsxs)(v.s,{gap:3,children:[U,A]}),p==="left"&&A]})})}},29915:(m,i,t)=>{"use strict";t.d(i,{A:()=>n});var o=t(74848);const s=c=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,o.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=s},92643:(m,i,t)=>{"use strict";t.d(i,{A:()=>n});var o=t(74848);const s=c=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:[(0,o.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),n=s},70306:(m,i,t)=>{"use strict";t.d(i,{A:()=>n});var o=t(74848);const s=c=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,o.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),n=s},20105:(m,i,t)=>{"use strict";t.d(i,{A:()=>n});var o=t(74848);const s=c=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:[(0,o.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,o.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),n=s},96808:(m,i,t)=>{"use strict";t.d(i,{N:()=>v});var o=t(74848),s=t(96540),n=t(17716),c=t(67336),h=t(75206),u=t(83055),M=t(17937);const _=(0,c.Ay)(u.s)`
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
`,v=s.forwardRef(({children:l,href:x,disabled:b=!1,startIcon:a,endIcon:r,isExternal:d=!0,...f},p)=>(0,o.jsxs)(_,{ref:p,href:x,disabled:b,isExternal:d,...f,children:[a,(0,o.jsx)(M.o,{textColor:b?"neutral600":"primary600",children:l}),r,x&&!r&&d&&(0,o.jsx)(n.A,{})]}));v.displayName="Link"},51936:(m,i,t)=>{"use strict";t.d(i,{UC:()=>w,q7:()=>W,JU:()=>U,bL:()=>G,G5:()=>tt,x8:()=>Y,ZP:()=>q,l9:()=>z});var o=t(74848),s=t(96540),n=t(27849),c=t(52766),h=t(41356),u=t(67336),M=t(27741),_=t(96808),v=t(37164),l=t(28156),x=t(77200),b=t(48267),a=t(17715),r=t(17937),d=t(6803);const f=(0,u.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,p=(0,u.Ay)(v.A)`
  animation: ${f} 2s infinite linear;
  will-change: transform;
`,A=(0,u.Ay)(b.S)`
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
`,y=s.forwardRef(({variant:e=l.qN,startIcon:g,endIcon:j,disabled:T=!1,children:J,onClick:S,size:K=l.GO[0],loading:V=!1,fullWidth:Z=!1,...ot},nt)=>{const Q=T||V,rt=et=>{!Q&&S&&S(et)};return(0,o.jsxs)(A,{ref:nt,"aria-disabled":Q,disabled:Q,size:K,variant:e,onClick:rt,fullWidth:Z,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:Z,justifyContent:Z?"center":void 0,paddingLeft:4,paddingRight:4,width:Z?"100%":void 0,...ot,children:[(g||V)&&(0,o.jsx)(a.a,{"aria-hidden":!0,children:V?(0,o.jsx)(p,{}):g}),(0,o.jsx)(r.o,{variant:K==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:J}),j&&(0,o.jsx)(d.s,{"aria-hidden":!0,children:j})]})});y.displayName="Button";const O=n.bL,D=(0,s.forwardRef)(({size:e,endIcon:g=(0,o.jsx)(c.A,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...j},T)=>(0,o.jsx)(n.l9,{asChild:!0,children:(0,o.jsx)(y,{ref:T,type:"button",variant:"ghost",endIcon:g,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...j})})),E=(0,s.forwardRef)(({children:e,intersectionId:g,popoverPlacement:j="bottom-start",...T},J)=>{const[S,K]=j.split("-");return(0,o.jsx)(n.ZL,{children:(0,o.jsx)(n.UC,{align:K,side:S,loop:!0,asChild:!0,children:(0,o.jsxs)(P,{ref:J,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...T,children:[e,(0,o.jsx)(a.a,{id:g,width:"100%",height:"1px"})]})})})}),P=(0,u.Ay)(d.s)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,C=({onSelect:e,disabled:g=!1,...j})=>(0,o.jsx)(n.q7,{asChild:!0,onSelect:e,disabled:g,children:j.isLink||j.isExternal?(0,o.jsx)(k,{color:"neutral800",...j,isExternal:j.isExternal??!1,children:(0,o.jsx)(r.o,{children:j.children})}):(0,o.jsx)($,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...j,children:(0,o.jsx)(r.o,{children:j.children})})}),L=({theme:e})=>(0,u.AH)`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${r.o} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${r.o} {
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
`,$=(0,u.Ay)(d.s)`
  ${L}
`,k=(0,u.Ay)(_.N)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:g})=>(0,M.K)(e.colors,g,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${L}
`,R=(0,s.forwardRef)((e,g)=>(0,o.jsx)(n.JU,{asChild:!0,children:(0,o.jsx)(N,{ref:g,variant:"sigma",textColor:"neutral600",...e})})),N=(0,u.Ay)(r.o)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,B=n.Pb,I=(0,s.forwardRef)(({disabled:e=!1,...g},j)=>(0,o.jsx)(n.ZP,{asChild:!0,disabled:e,children:(0,o.jsxs)(F,{ref:j,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...g,children:[(0,o.jsx)(r.o,{children:g.children}),(0,o.jsx)(X,{height:12,width:12})]})})),F=(0,u.Ay)($)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,X=(0,u.Ay)(h.A)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,H=(0,s.forwardRef)((e,g)=>(0,o.jsx)(n.ZL,{children:(0,o.jsx)(n.G5,{sideOffset:8,asChild:!0,children:(0,o.jsx)(P,{ref:g,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),G=O,z=D,w=E,W=C,U=R,Y=B,q=I,tt=H},20230:(m,i,t)=>{"use strict";t.d(i,{Dr:()=>h});var o=t(74848),s=t(96540),n=t(51936);const c=({children:u,onOpen:M,onClose:_,popoverPlacement:v,onReachEnd:l,...x})=>{const b=useRef(null),[a,r]=useState(!1),d=y=>{l&&l(y)},f=y=>{y&&typeof M=="function"?M():!y&&typeof _=="function"&&_(),r(y)},p=useId(),A=`intersection-${stripReactIdOfColon(p)}`;return useIntersection(b,d,{selectorToWatch:`#${A}`,skipWhen:!a}),jsxs(Root,{onOpenChange:f,children:[jsx(Trigger,{...x,children:x.label}),jsx(Content,{intersectionId:A,popoverPlacement:v,children:u})]})},h=n.q7},53110:(m,i,t)=>{"use strict";t.d(i,{pe:()=>n});var o=t(96275);const{Axios:s,AxiosError:n,CanceledError:c,isCancel:h,CancelToken:u,VERSION:M,all:_,Cancel:v,isAxiosError:l,spread:x,toFormData:b,AxiosHeaders:a,HttpStatusCode:r,formToJSON:d,getAdapter:f,mergeConfig:p}=o.A}}]);
