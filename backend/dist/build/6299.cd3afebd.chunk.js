(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6299],{81185:(F,C,o)=>{var n=o(19303);function t(c,s){return c==null?!0:n(c,s)}F.exports=t},64310:(F,C,o)=>{"use strict";o.d(C,{C:()=>u});var n=o(92132),t=o(63891),c=o(28672),s=o(94061);const m=(0,t.Ay)(s.a)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:i})=>i}, 1fr);
  ${({theme:i,gap:g})=>(0,c.A)("gap",g,i)}
`,p=i=>{const{gap:g="0",gridCols:M=12,...l}=i;return(0,n.jsx)(m,{gap:g,gridCols:M,...l})},E=`${232/16}rem`,A=(0,t.Ay)(p)`
  width: ${E};
  background: ${({theme:i})=>i.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:i})=>i.colors.neutral200};
  z-index: 1;
`,u=({ariaLabel:i,...g})=>(0,n.jsx)(A,{"aria-label":i,as:"nav",...g})},98278:(F,C,o)=>{"use strict";o.d(C,{X:()=>hr});var n=o(92132),t=o(21272),c=o(67067),s=o(63891);const m={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};var p=o(84175);const E=r=>{const e=(0,t.useRef)();return(0,t.useEffect)(()=>{e.current=r}),e.current};var A=o(48653),u=o(94061);const i=r=>(0,n.jsx)("form",{...r,role:"search"});var g=o(98889);function M(r,e){typeof r=="function"?r(e):r!=null&&(r.current=e)}function l(...r){return e=>r.forEach(a=>M(a,e))}function I(...r){return React.useCallback(l(...r),r)}var h=o(78732);const B=(0,t.createContext)({id:"",required:!1}),R=()=>(0,t.useContext)(B);var j=o(83997);const P={S:6.5,M:10.5},k=(0,t.forwardRef)(({endAction:r,startAction:e,disabled:a=!1,onChange:d,size:b="M",...$},x)=>{const{id:f,error:y,hint:v,name:D,required:L}=R();let S;y?S=`${f}-error`:v&&(S=`${f}-hint`);const T=Boolean(y),O=z=>{!a&&d&&d(z)};return(0,n.jsxs)(w,{justifyContent:"space-between",hasError:T,disabled:a,children:[e?(0,n.jsx)(u.a,{paddingLeft:3,paddingRight:2,children:e}):null,(0,n.jsx)(G,{id:f,name:D,ref:x,"aria-describedby":S,"aria-invalid":T,"aria-disabled":a,disabled:a,"data-disabled":a?"":void 0,hasLeftAction:Boolean(e),hasRightAction:Boolean(r),onChange:O,"aria-required":L,$size:b,...$}),r?(0,n.jsx)(u.a,{paddingLeft:2,paddingRight:3,children:r}):null]})}),G=s.Ay.input`
  border: none;
  border-radius: ${({theme:r})=>r.borderRadius};
  padding-bottom: ${({$size:r})=>`${P[r]/16}rem`};
  padding-left: ${({theme:r,hasLeftAction:e})=>e?0:r.spaces[4]};
  padding-right: ${({theme:r,hasRightAction:e})=>e?0:r.spaces[4]};
  padding-top: ${({$size:r})=>`${P[r]/16}rem`};
  cursor: ${r=>r["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:r})=>r.colors.neutral800};
  font-weight: 400;
  font-size: ${r=>r.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:r})=>r.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,w=(0,s.Ay)(j.s)`
  border: 1px solid ${({theme:r,hasError:e})=>e?r.colors.danger600:r.colors.neutral200};
  border-radius: ${({theme:r})=>r.borderRadius};
  background: ${({theme:r})=>r.colors.neutral0};
  ${(0,h.id)()}

  ${({theme:r,disabled:e})=>e?(0,s.AH)`
          color: ${r.colors.neutral600};
          background: ${r.colors.neutral150};
        `:void 0}
`;var N=o(98765);const U=(0,s.Ay)(j.s)`
  font-size: 1.6rem;
  padding: 0;
`,H=(0,t.forwardRef)(({label:r,children:e,...a},d)=>(0,n.jsxs)(U,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...a,as:"button",ref:d,children:[(0,n.jsx)(N.s,{as:"span",children:r}),(0,t.cloneElement)(e,{"aria-hidden":!0,focusable:!1})]})),J=(0,t.forwardRef)(({children:r,name:e,error:a,hint:d,id:b,required:$=!1,...x},f)=>{const y=(0,p.B)(b),v=(0,t.useMemo)(()=>({name:e,id:y,error:a,hint:d,required:$}),[a,y,d,e,$]);return(0,n.jsx)(u.a,{ref:f,...x,children:(0,n.jsx)(B.Provider,{value:v,children:r})})}),Q="[@strapi/design-system]:",_=r=>{const e=r;let a=!1;if(typeof e!="function")throw new TypeError(`${Q} once requires a function parameter`);return(...d)=>{a||(e(...d),a=!0)}};var V=o(30893);const q=_(console.warn),rr=(0,t.forwardRef)(({children:r,action:e,required:a,...d},b)=>{const{id:$,required:x}=R(),f=x||a;return a!==void 0&&q('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,n.jsxs)(nr,{ref:b,variant:"pi",textColor:"neutral800",htmlFor:$,fontWeight:"bold",as:"label",...d,children:[r,f&&(0,n.jsx)(or,{textColor:"danger600",children:"*"}),e&&(0,n.jsx)(er,{marginLeft:1,children:e})]})}),nr=(0,s.Ay)(V.o)`
  display: flex;
  align-items: center;
`,or=(0,s.Ay)(V.o)`
  line-height: 0;
`,er=(0,s.Ay)(j.s)`
  line-height: 0;

  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,tr=(0,s.Ay)(g.A)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral400};
  }
`,X=(0,s.Ay)(c.A)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral800};
  }
`,sr=s.Ay.div`
  border-radius: ${({theme:r})=>r.borderRadius};
  box-shadow: ${({theme:r})=>r.shadows.filterShadow};

  &:focus-within {
    ${X} {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }

  ${w} {
    border: 1px solid transparent;
  }

  ${(0,h.id)(w)}
`,ar=(0,t.forwardRef)(({name:r,size:e="M",children:a,value:d="",onClear:b,clearLabel:$,...x},f)=>{const y=(0,t.useRef)(null),v=d.length>0,D=S=>{b(S),y.current.focus()},L=l(f,y);return(0,n.jsx)(sr,{children:(0,n.jsxs)(J,{name:r,children:[(0,n.jsx)(N.s,{children:(0,n.jsx)(rr,{children:a})}),(0,n.jsx)(k,{ref:L,value:d,startAction:(0,n.jsx)(X,{"aria-hidden":!0}),size:e,endAction:v?(0,n.jsx)(H,{label:$,onClick:D,children:(0,n.jsx)(tr,{})}):void 0,...x})]})})});var ir=o(21399),lr=o(76325);const dr="tertiary",K="secondary",cr=["S","M","L"],ur=[dr,K],pr=t.forwardRef(({label:r,background:e,borderWidth:a,noBorder:d=!1,children:b,icon:$,disabled:x=!1,onClick:f,size:y=cr[0],"aria-label":v,variant:D=ur[0],...L},S)=>{const T=z=>{!x&&f&&f(z)},O=(0,n.jsxs)(Y,{"aria-disabled":x,background:x?"neutral150":e,borderWidth:d?0:a,justifyContent:"center",...L,ref:S,size:y,onClick:T,variant:D,children:[(0,n.jsx)(N.s,{as:"span",children:r??v}),t.cloneElement($||b,{"aria-hidden":!0,focusable:!1})]});return r?(0,n.jsx)(ir.m,{label:r,children:O}):O}),Y=(0,s.Ay)(lr.S)`
  background-color: ${({theme:r,variant:e})=>{if(e===K)return r.colors.primary100}};
  border-color: ${({theme:r,variant:e})=>e===K?r.colors.primary200:r.colors.neutral200};
  height: ${({theme:r,size:e})=>r.sizes.button[e]};
  width: ${({theme:r,size:e})=>r.sizes.button[e]};

  svg {
    g,
    path {
      fill: ${({theme:r,variant:e})=>e===K?r.colors.primary500:r.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:r,variant:e})=>e===K?r.colors.primary600:r.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral600};
      }
    }
  }
`,vr=(0,s.Ay)(j.s)`
  & span:first-child button {
    border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-radius: ${({theme:r})=>`${r.borderRadius} 0 0 ${r.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:r})=>`0 ${r.borderRadius} ${r.borderRadius} 0`};
  }

  & ${Y} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:r})=>r.colors.neutral100};

      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:r})=>r.colors.neutral150};
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral600};
        }
      }
    }
  }
`,Z=(0,s.Ay)(A.c)`
  width: ${24/16}rem;
  background-color: ${({theme:r})=>r.colors.neutral200};
`,hr=({as:r="h2",label:e,searchLabel:a="",searchable:d=!1,onChange:b=()=>{},value:$="",onClear:x=()=>{},onSubmit:f=()=>{},id:y})=>{const[v,D]=(0,t.useState)(!1),L=E(v),S=(0,p.B)(y),T=(0,t.useRef)(void 0),O=(0,t.useRef)(void 0);(0,t.useEffect)(()=>{v&&T.current&&T.current.focus(),L&&!v&&O.current&&O.current.focus()},[v,L]);const z=()=>{D(W=>!W)},fr=W=>{x(W),T.current.focus()},gr=W=>{W.relatedTarget?.id!==S&&D(!1)},xr=W=>{W.key===m.ESCAPE&&D(!1)};return v?(0,n.jsxs)(u.a,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,n.jsx)(i,{children:(0,n.jsx)(ar,{name:"searchbar",value:$,onChange:b,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:xr,ref:T,onBlur:gr,onClear:fr,onSubmit:f,clearLabel:"Clear",size:"S",children:a})}),(0,n.jsx)(u.a,{paddingLeft:2,paddingTop:4,children:(0,n.jsx)(Z,{})})]}):(0,n.jsxs)(u.a,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,n.jsxs)(j.s,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,n.jsx)(V.o,{variant:"beta",as:r,children:e}),d&&(0,n.jsx)(pr,{ref:O,onClick:z,label:a,icon:(0,n.jsx)(c.A,{})})]}),(0,n.jsx)(u.a,{paddingTop:4,children:(0,n.jsx)(Z,{})})]})}},63996:(F,C,o)=>{"use strict";o.d(C,{u:()=>M});var n=o(92132),t=o(21272),c=o(47576),s=o(63891),m=o(94061),p=o(30893),E=o(83997),A=o(85329);const u=(0,s.Ay)(m.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:l})=>l.colors.neutral800};
  svg > * {
    fill: ${({theme:l})=>l.colors.neutral600};
  }

  &.active {
    ${({theme:l})=>`
      background-color: ${l.colors.primary100};
      border-right: 2px solid ${l.colors.primary600};
      svg > * {
        fill: ${l.colors.primary700};
      }
      ${p.o} {
        color: ${l.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,i=(0,s.Ay)(c.A)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:l,$active:I})=>I?l.colors.primary600:l.colors.neutral600};
  }
`,g=s.Ay.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,M=t.forwardRef(({children:l,icon:I=null,withBullet:h=!1,as:B=A.s,isSubSectionChild:R=!1,...j},P)=>(0,n.jsxs)(u,{as:B,icon:I,background:"neutral100",paddingLeft:R?9:7,paddingBottom:2,paddingTop:2,ref:P,...j,children:[(0,n.jsxs)(E.s,{children:[I?(0,n.jsx)(g,{children:I}):(0,n.jsx)(i,{}),(0,n.jsx)(m.a,{paddingLeft:2,children:(0,n.jsx)(p.o,{as:"span",children:l})})]}),h&&(0,n.jsx)(m.a,{as:E.s,paddingRight:4,children:(0,n.jsx)(i,{$active:!0})})]}))},87419:(F,C,o)=>{"use strict";o.d(C,{L:()=>I});var n=o(92132),t=o(21272),c=o(63891),s=o(28556),m=o(83997),p=o(94061),E=o(30893);const A=(0,c.Ay)(m.s)`
  border: none;
  padding: 0;
  background: transparent;
`,u=c.Ay.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:h})=>h?"0deg":"180deg"});
`,i=({collapsable:h=!1,label:B,onClick:R=()=>{},ariaExpanded:j,ariaControls:P})=>h?(0,n.jsxs)(A,{as:"button",onClick:R,"aria-expanded":j,"aria-controls":P,textAlign:"left",children:[(0,n.jsx)(p.a,{paddingRight:1,children:(0,n.jsx)(E.o,{variant:"sigma",textColor:"neutral600",children:B})}),h&&(0,n.jsx)(u,{rotated:j,children:(0,n.jsx)(s.A,{"aria-hidden":!0})})]}):(0,n.jsx)(A,{children:(0,n.jsx)(p.a,{paddingRight:1,children:(0,n.jsx)(E.o,{variant:"sigma",textColor:"neutral600",children:B})})});var g=o(84175),M=o(10573);const l=(0,c.Ay)(p.a)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:h})=>h.colors.neutral500};
    }
  }
`,I=({collapsable:h=!1,label:B,badgeLabel:R,children:j,id:P})=>{const[k,G]=(0,t.useState)(!0),w=(0,g.B)(P),N=()=>{G(U=>!U)};return(0,n.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(l,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsxs)(p.a,{position:"relative",paddingRight:R?6:0,children:[(0,n.jsx)(i,{onClick:N,ariaExpanded:k,ariaControls:w,collapsable:h,label:B}),R&&(0,n.jsx)(M.E,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:R})]})}),(!h||k)&&(0,n.jsx)("ol",{id:w,children:t.Children.map(j,(U,H)=>(0,n.jsx)("li",{children:U},H))})]})}},29404:(F,C,o)=>{"use strict";o.d(C,{w:()=>m});var n=o(92132),t=o(21272),c=o(94061),s=o(83997);const m=({children:p,spacing:E=2,horizontal:A=!1,...u})=>(0,n.jsx)(c.a,{paddingTop:2,paddingBottom:4,children:(0,n.jsx)(s.s,{as:"ol",gap:E,direction:A?"row":"column",alignItems:A?"center":"stretch",...u,children:t.Children.map(p,(i,g)=>(0,n.jsx)("li",{children:i},g))})})}}]);
