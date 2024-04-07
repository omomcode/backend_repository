(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4026],{73357:(F,C,n)=>{var e=n(19931);function s(c,t){return c==null?!0:e(c,t)}F.exports=s},21069:(F,C,n)=>{"use strict";n.d(C,{C:()=>u});var e=n(74848),s=n(67336),c=n(68742),t=n(17715);const m=(0,s.Ay)(t.a)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:i})=>i}, 1fr);
  ${({theme:i,gap:g})=>(0,c.A)("gap",g,i)}
`,p=i=>{const{gap:g="0",gridCols:M=12,...l}=i;return(0,e.jsx)(m,{gap:g,gridCols:M,...l})},E=`${232/16}rem`,b=(0,s.Ay)(p)`
  width: ${E};
  background: ${({theme:i})=>i.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:i})=>i.colors.neutral200};
  z-index: 1;
`,u=({ariaLabel:i,...g})=>(0,e.jsx)(b,{"aria-label":i,as:"nav",...g})},46383:(F,C,n)=>{"use strict";n.d(C,{X:()=>fr});var e=n(74848),s=n(96540),c=n(85905),t=n(67336);const m={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};var p=n(11961);const E=r=>{const o=(0,s.useRef)();return(0,s.useEffect)(()=>{o.current=r}),o.current};var b=n(87795),u=n(17715);const i=r=>(0,e.jsx)("form",{...r,role:"search"});var g=n(11339);function M(r,o){typeof r=="function"?r(o):r!=null&&(r.current=o)}function l(...r){return o=>r.forEach(a=>M(a,o))}function I(...r){return React.useCallback(l(...r),r)}var f=n(75206);const B=(0,s.createContext)({id:"",required:!1}),R=()=>(0,s.useContext)(B);var j=n(6803);const P={S:6.5,M:10.5},k=(0,s.forwardRef)(({endAction:r,startAction:o,disabled:a=!1,onChange:d,size:A="M",...$},x)=>{const{id:h,error:y,hint:v,name:D,required:L}=R();let S;y?S=`${h}-error`:v&&(S=`${h}-hint`);const T=Boolean(y),O=z=>{!a&&d&&d(z)};return(0,e.jsxs)(w,{justifyContent:"space-between",hasError:T,disabled:a,children:[o?(0,e.jsx)(u.a,{paddingLeft:3,paddingRight:2,children:o}):null,(0,e.jsx)(G,{id:h,name:D,ref:x,"aria-describedby":S,"aria-invalid":T,"aria-disabled":a,disabled:a,"data-disabled":a?"":void 0,hasLeftAction:Boolean(o),hasRightAction:Boolean(r),onChange:O,"aria-required":L,$size:A,...$}),r?(0,e.jsx)(u.a,{paddingLeft:2,paddingRight:3,children:r}):null]})}),G=t.Ay.input`
  border: none;
  border-radius: ${({theme:r})=>r.borderRadius};
  padding-bottom: ${({$size:r})=>`${P[r]/16}rem`};
  padding-left: ${({theme:r,hasLeftAction:o})=>o?0:r.spaces[4]};
  padding-right: ${({theme:r,hasRightAction:o})=>o?0:r.spaces[4]};
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
`,w=(0,t.Ay)(j.s)`
  border: 1px solid ${({theme:r,hasError:o})=>o?r.colors.danger600:r.colors.neutral200};
  border-radius: ${({theme:r})=>r.borderRadius};
  background: ${({theme:r})=>r.colors.neutral0};
  ${(0,f.id)()}

  ${({theme:r,disabled:o})=>o?(0,t.AH)`
          color: ${r.colors.neutral600};
          background: ${r.colors.neutral150};
        `:void 0}
`;var N=n(42091);const U=(0,t.Ay)(j.s)`
  font-size: 1.6rem;
  padding: 0;
`,H=(0,s.forwardRef)(({label:r,children:o,...a},d)=>(0,e.jsxs)(U,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...a,as:"button",ref:d,children:[(0,e.jsx)(N.s,{as:"span",children:r}),(0,s.cloneElement)(o,{"aria-hidden":!0,focusable:!1})]})),J=(0,s.forwardRef)(({children:r,name:o,error:a,hint:d,id:A,required:$=!1,...x},h)=>{const y=(0,p.B)(A),v=(0,s.useMemo)(()=>({name:o,id:y,error:a,hint:d,required:$}),[a,y,d,o,$]);return(0,e.jsx)(u.a,{ref:h,...x,children:(0,e.jsx)(B.Provider,{value:v,children:r})})}),Q="[@strapi/design-system]:",_=r=>{const o=r;let a=!1;if(typeof o!="function")throw new TypeError(`${Q} once requires a function parameter`);return(...d)=>{a||(o(...d),a=!0)}};var V=n(17937);const q=_(console.warn),rr=(0,s.forwardRef)(({children:r,action:o,required:a,...d},A)=>{const{id:$,required:x}=R(),h=x||a;return a!==void 0&&q('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,e.jsxs)(er,{ref:A,variant:"pi",textColor:"neutral800",htmlFor:$,fontWeight:"bold",as:"label",...d,children:[r,h&&(0,e.jsx)(nr,{textColor:"danger600",children:"*"}),o&&(0,e.jsx)(or,{marginLeft:1,children:o})]})}),er=(0,t.Ay)(V.o)`
  display: flex;
  align-items: center;
`,nr=(0,t.Ay)(V.o)`
  line-height: 0;
`,or=(0,t.Ay)(j.s)`
  line-height: 0;

  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,sr=(0,t.Ay)(g.A)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral400};
  }
`,X=(0,t.Ay)(c.A)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral800};
  }
`,tr=t.Ay.div`
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

  ${(0,f.id)(w)}
`,ar=(0,s.forwardRef)(({name:r,size:o="M",children:a,value:d="",onClear:A,clearLabel:$,...x},h)=>{const y=(0,s.useRef)(null),v=d.length>0,D=S=>{A(S),y.current.focus()},L=l(h,y);return(0,e.jsx)(tr,{children:(0,e.jsxs)(J,{name:r,children:[(0,e.jsx)(N.s,{children:(0,e.jsx)(rr,{children:a})}),(0,e.jsx)(k,{ref:L,value:d,startAction:(0,e.jsx)(X,{"aria-hidden":!0}),size:o,endAction:v?(0,e.jsx)(H,{label:$,onClick:D,children:(0,e.jsx)(sr,{})}):void 0,...x})]})})});var ir=n(9008),lr=n(48267);const dr="tertiary",K="secondary",cr=["S","M","L"],ur=[dr,K],pr=s.forwardRef(({label:r,background:o,borderWidth:a,noBorder:d=!1,children:A,icon:$,disabled:x=!1,onClick:h,size:y=cr[0],"aria-label":v,variant:D=ur[0],...L},S)=>{const T=z=>{!x&&h&&h(z)},O=(0,e.jsxs)(Y,{"aria-disabled":x,background:x?"neutral150":o,borderWidth:d?0:a,justifyContent:"center",...L,ref:S,size:y,onClick:T,variant:D,children:[(0,e.jsx)(N.s,{as:"span",children:r??v}),s.cloneElement($||A,{"aria-hidden":!0,focusable:!1})]});return r?(0,e.jsx)(ir.m,{label:r,children:O}):O}),Y=(0,t.Ay)(lr.S)`
  background-color: ${({theme:r,variant:o})=>{if(o===K)return r.colors.primary100}};
  border-color: ${({theme:r,variant:o})=>o===K?r.colors.primary200:r.colors.neutral200};
  height: ${({theme:r,size:o})=>r.sizes.button[o]};
  width: ${({theme:r,size:o})=>r.sizes.button[o]};

  svg {
    g,
    path {
      fill: ${({theme:r,variant:o})=>o===K?r.colors.primary500:r.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:r,variant:o})=>o===K?r.colors.primary600:r.colors.neutral600};
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
`,vr=(0,t.Ay)(j.s)`
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
`,Z=(0,t.Ay)(b.c)`
  width: ${24/16}rem;
  background-color: ${({theme:r})=>r.colors.neutral200};
`,fr=({as:r="h2",label:o,searchLabel:a="",searchable:d=!1,onChange:A=()=>{},value:$="",onClear:x=()=>{},onSubmit:h=()=>{},id:y})=>{const[v,D]=(0,s.useState)(!1),L=E(v),S=(0,p.B)(y),T=(0,s.useRef)(void 0),O=(0,s.useRef)(void 0);(0,s.useEffect)(()=>{v&&T.current&&T.current.focus(),L&&!v&&O.current&&O.current.focus()},[v,L]);const z=()=>{D(W=>!W)},hr=W=>{x(W),T.current.focus()},gr=W=>{W.relatedTarget?.id!==S&&D(!1)},xr=W=>{W.key===m.ESCAPE&&D(!1)};return v?(0,e.jsxs)(u.a,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,e.jsx)(i,{children:(0,e.jsx)(ar,{name:"searchbar",value:$,onChange:A,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:xr,ref:T,onBlur:gr,onClear:hr,onSubmit:h,clearLabel:"Clear",size:"S",children:a})}),(0,e.jsx)(u.a,{paddingLeft:2,paddingTop:4,children:(0,e.jsx)(Z,{})})]}):(0,e.jsxs)(u.a,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,e.jsxs)(j.s,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,e.jsx)(V.o,{variant:"beta",as:r,children:o}),d&&(0,e.jsx)(pr,{ref:O,onClick:z,label:a,icon:(0,e.jsx)(c.A,{})})]}),(0,e.jsx)(u.a,{paddingTop:4,children:(0,e.jsx)(Z,{})})]})}},20858:(F,C,n)=>{"use strict";n.d(C,{u:()=>M});var e=n(74848),s=n(96540),c=n(29722),t=n(67336),m=n(17715),p=n(17937),E=n(6803),b=n(83055);const u=(0,t.Ay)(m.a)`
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
`,i=(0,t.Ay)(c.A)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:l,$active:I})=>I?l.colors.primary600:l.colors.neutral600};
  }
`,g=t.Ay.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,M=s.forwardRef(({children:l,icon:I=null,withBullet:f=!1,as:B=b.s,isSubSectionChild:R=!1,...j},P)=>(0,e.jsxs)(u,{as:B,icon:I,background:"neutral100",paddingLeft:R?9:7,paddingBottom:2,paddingTop:2,ref:P,...j,children:[(0,e.jsxs)(E.s,{children:[I?(0,e.jsx)(g,{children:I}):(0,e.jsx)(i,{}),(0,e.jsx)(m.a,{paddingLeft:2,children:(0,e.jsx)(p.o,{as:"span",children:l})})]}),f&&(0,e.jsx)(m.a,{as:E.s,paddingRight:4,children:(0,e.jsx)(i,{$active:!0})})]}))},34708:(F,C,n)=>{"use strict";n.d(C,{L:()=>I});var e=n(74848),s=n(96540),c=n(67336),t=n(52766),m=n(6803),p=n(17715),E=n(17937);const b=(0,c.Ay)(m.s)`
  border: none;
  padding: 0;
  background: transparent;
`,u=c.Ay.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:f})=>f?"0deg":"180deg"});
`,i=({collapsable:f=!1,label:B,onClick:R=()=>{},ariaExpanded:j,ariaControls:P})=>f?(0,e.jsxs)(b,{as:"button",onClick:R,"aria-expanded":j,"aria-controls":P,textAlign:"left",children:[(0,e.jsx)(p.a,{paddingRight:1,children:(0,e.jsx)(E.o,{variant:"sigma",textColor:"neutral600",children:B})}),f&&(0,e.jsx)(u,{rotated:j,children:(0,e.jsx)(t.A,{"aria-hidden":!0})})]}):(0,e.jsx)(b,{children:(0,e.jsx)(p.a,{paddingRight:1,children:(0,e.jsx)(E.o,{variant:"sigma",textColor:"neutral600",children:B})})});var g=n(11961),M=n(84027);const l=(0,c.Ay)(p.a)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:f})=>f.colors.neutral500};
    }
  }
`,I=({collapsable:f=!1,label:B,badgeLabel:R,children:j,id:P})=>{const[k,G]=(0,s.useState)(!0),w=(0,g.B)(P),N=()=>{G(U=>!U)};return(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(l,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,e.jsxs)(p.a,{position:"relative",paddingRight:R?6:0,children:[(0,e.jsx)(i,{onClick:N,ariaExpanded:k,ariaControls:w,collapsable:f,label:B}),R&&(0,e.jsx)(M.E,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:R})]})}),(!f||k)&&(0,e.jsx)("ol",{id:w,children:s.Children.map(j,(U,H)=>(0,e.jsx)("li",{children:U},H))})]})}},47774:(F,C,n)=>{"use strict";n.d(C,{w:()=>m});var e=n(74848),s=n(96540),c=n(17715),t=n(6803);const m=({children:p,spacing:E=2,horizontal:b=!1,...u})=>(0,e.jsx)(c.a,{paddingTop:2,paddingBottom:4,children:(0,e.jsx)(t.s,{as:"ol",gap:E,direction:b?"row":"column",alignItems:b?"center":"stretch",...u,children:s.Children.map(p,(i,g)=>(0,e.jsx)("li",{children:i},g))})})}}]);
