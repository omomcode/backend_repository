"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9651],{32559:($,g,i)=>{i.d(g,{s:()=>n});var s=i(92132),o=i(44370);const n=({children:l})=>(0,s.jsx)(o.a,{paddingLeft:10,paddingRight:10,children:l})},43121:($,g,i)=>{i.d(g,{$:()=>O,Q:()=>M});var s=i(92132),o=i(21272),n=i(63891);const l=d=>{const m=(0,o.useRef)(null),[r,a]=(0,o.useState)(!0),f=([y])=>{a(y.isIntersecting)};return(0,o.useEffect)(()=>{const y=m.current,B=new IntersectionObserver(f,d);return y&&B.observe(m.current),()=>{y&&B.disconnect()}},[m,d]),[m,r]};var p=i(23169);const e=(d,m)=>{const r=(0,p.c)(m);(0,o.useLayoutEffect)(()=>{const a=new ResizeObserver(r);return Array.isArray(d)?d.forEach(f=>{f.current&&a.observe(f.current)}):d.current&&a.observe(d.current),()=>{a.disconnect()}},[d,r])};var t=i(44370),E=i(43242),h=i(57842);const M=d=>{const m=(0,o.useRef)(null),[r,a]=(0,o.useState)(null),[f,y]=l({root:null,rootMargin:"0px",threshold:0});return e(f,()=>{f.current&&a(f.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{m.current&&a(m.current.getBoundingClientRect())},[m]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{height:r?.height},ref:f,children:y&&(0,s.jsx)(O,{ref:m,...d})}),!y&&(0,s.jsx)(O,{...d,sticky:!0,width:r?.width})]})};M.displayName="HeaderLayout";const R=(0,n.Ay)(t.a)`
  width: ${({width:d})=>d?`${d/16}rem`:void 0};
  z-index: ${({theme:d})=>d.zIndices[1]};
`,O=o.forwardRef(({navigationAction:d,primaryAction:m,secondaryAction:r,subtitle:a,title:f,sticky:y,width:B,...b},I)=>{const K=typeof a=="string";return y?(0,s.jsx)(R,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:B,"data-strapi-header-sticky":!0,children:(0,s.jsxs)(E.s,{justifyContent:"space-between",children:[(0,s.jsxs)(E.s,{children:[d&&(0,s.jsx)(t.a,{paddingRight:3,children:d}),(0,s.jsxs)(t.a,{children:[(0,s.jsx)(h.o,{variant:"beta",as:"h1",...b,children:f}),K?(0,s.jsx)(h.o,{variant:"pi",textColor:"neutral600",children:a}):a]}),r?(0,s.jsx)(t.a,{paddingLeft:4,children:r}):null]}),(0,s.jsx)(E.s,{children:m?(0,s.jsx)(t.a,{paddingLeft:2,children:m}):void 0})]})}):(0,s.jsxs)(t.a,{ref:I,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:d?6:8,background:"neutral100","data-strapi-header":!0,children:[d?(0,s.jsx)(t.a,{paddingBottom:2,children:d}):null,(0,s.jsxs)(E.s,{justifyContent:"space-between",children:[(0,s.jsxs)(E.s,{minWidth:0,children:[(0,s.jsx)(h.o,{as:"h1",variant:"alpha",...b,children:f}),r?(0,s.jsx)(t.a,{paddingLeft:4,children:r}):null]}),m]}),K?(0,s.jsx)(h.o,{variant:"epsilon",textColor:"neutral600",as:"p",children:a}):a]})})},55794:($,g,i)=>{i.d(g,{g:()=>p});var s=i(92132),o=i(63891),n=i(44370);const l=(0,o.Ay)(n.a)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,p=({labelledBy:e="main-content-title",...t})=>(0,s.jsx)(l,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...t})},94061:($,g,i)=>{i.d(g,{a:()=>p});var s=i(63891),o=i(28672),n=i(5146);const l={color:!0,cursor:!0,height:!0,width:!0},p=s.Ay.div.withConfig({shouldForwardProp:(e,t)=>!l[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>(0,n.K)(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>(0,n.K)(e.colors,t,t)};
  color: ${({theme:e,color:t})=>(0,n.K)(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>(0,o.A)("padding",t,e)}
  ${({theme:e,paddingTop:t})=>(0,o.A)("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>(0,o.A)("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>(0,o.A)("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>(0,o.A)("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>(0,o.A)("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>(0,o.A)("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>(0,o.A)("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>(0,o.A)("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:E})=>t?e.borderRadius:E};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>(0,n.K)(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:E,borderWidth:h})=>{if(t&&!E&&typeof h>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>(0,n.K)(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>(0,n.K)(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>(0,n.K)(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>(0,n.K)(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>(0,n.K)(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>(0,n.K)(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>(0,n.K)(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>(0,n.K)(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>(0,n.K)(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>(0,n.K)(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>(0,n.K)(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>(0,n.K)(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},83997:($,g,i)=>{i.d(g,{s:()=>p});var s=i(63891),o=i(28672),n=i(94061);const l={direction:!0},p=(0,s.Ay)(n.a).withConfig({shouldForwardProp:(e,t)=>!l[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>(0,o.A)("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`},30893:($,g,i)=>{i.d(g,{o:()=>m});var s=i(63891);const o="alpha",n="beta",l="delta",p="epsilon",e="omega",t="pi",E="sigma",h=[o,n,l,p,e,t,E],M=({ellipsis:r=!1})=>r&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,R=({variant:r=e,theme:a})=>{switch(r){case o:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[5]};
        line-height: ${a.lineHeights[2]};
      `;case n:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[4]};
        line-height: ${a.lineHeights[1]};
      `;case l:return`
        font-weight: ${a.fontWeights.semiBold};
        font-size: ${a.fontSizes[3]};
        line-height: ${a.lineHeights[2]};
      `;case p:return`
        font-size: ${a.fontSizes[3]};
        line-height: ${a.lineHeights[6]};
      `;case e:return`
        font-size: ${a.fontSizes[2]};
        line-height: ${a.lineHeights[4]};
      `;case t:return`
        font-size: ${a.fontSizes[1]};
        line-height: ${a.lineHeights[3]};
      `;case E:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[0]};
        line-height: ${a.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${a.fontSizes[2]};
      `}};var O=i(5146);const d={fontSize:!0,fontWeight:!0},m=s.Ay.span.withConfig({shouldForwardProp:(r,a)=>!d[r]&&a(r)})`
  ${R}
  ${M}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:r,fontWeight:a})=>(0,O.K)(r.fontWeights,a,void 0)};
  font-size: ${({theme:r,fontSize:a})=>(0,O.K)(r.fontSizes,a,void 0)};
  line-height: ${({theme:r,lineHeight:a})=>(0,O.K)(r.lineHeights,a,a)};
  color: ${({theme:r,textColor:a})=>r.colors[a||"neutral800"]};
  text-align: ${({textAlign:r})=>r};
  text-decoration: ${({textDecoration:r})=>r};
  text-transform: ${({textTransform:r})=>r};
`},28672:($,g,i)=>{i.d(g,{A:()=>s});const s=(o,n,l)=>{if(!n)return;if(typeof n=="object")return(Array.isArray(n)?n:[n?.desktop,n?.tablet,n?.mobile]).reduce((E,h,M)=>{if(h)switch(M){case 0:return`${E}${o}: ${l.spaces[h]};`;case 1:return`${E}${l.mediaQueries.tablet}{${o}: ${l.spaces[h]};}`;case 2:return`${E}${l.mediaQueries.mobile}{${o}: ${l.spaces[h]};}`;default:return E}return E},"");const p=l.spaces[n]??n;return`${o}: ${p};`}},5146:($,g,i)=>{i.d(g,{K:()=>n});function s(l,p){return typeof l=="string"?!1:p in l}function o(l){return l&&typeof l=="object"&&!Array.isArray(l)}function n(l,p,e){return p&&s(l,p)?l[p]:e}},37679:($,g,i)=>{i.d(g,{B:()=>h});var s=i(92132),o=i(21272),n=i(63891),l=i(94061),p=i(30893);const e=()=>(0,s.jsx)(l.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,s.jsx)(p.o,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var t=i(83997);const E=(0,n.Ay)(t.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:M})=>`calc(-1*${M.spaces[2]})`};
  }
`,h=({label:M,children:R,...O})=>{const d=o.Children.toArray(R);return(0,s.jsx)(l.a,{"aria-label":M,...O,children:(0,s.jsx)(E,{as:"ol",children:o.Children.map(d,(m,r)=>{const a=d.length>1&&r+1<d.length;return(0,s.jsxs)(t.s,{inline:!0,as:"li",children:[m,a&&(0,s.jsx)(e,{})]})})})})};h.displayName="Breadcrumbs"},60043:($,g,i)=>{i.d(g,{m:()=>l});var s=i(92132),o=i(94061),n=i(30893);const l=({children:p,isCurrent:e=!1,...t})=>(0,s.jsx)(o.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,s.jsx)(n.o,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...t,children:p})});l.displayName="Crumb"},99651:($,g,i)=>{i.r(g),i.d(g,{default:()=>se});var s=i(92132),o=i(21272),n=i(50642),l=i(6479),p=i(53900),e=i(57564),t=i(68065),E=i(168),h=i(32161),M=i(69564),R=i(79318),O=i(70768),d=i(34508),m=i(21270),r=i(96586),a=i(57842),f=i(83314),y=i(27026),B=i(19106),b=i(70230),I=i(55794),K=i(43121),F=i(32559),c=i(90602),W=i(54894),U=i(74930),_=i(60828),ge=i(77965),J=i(37679),w=i(60043),Z=i(61535),x=i(33544),A=i(12083),k=i(4032),H=i(31708),q=i(13333);const ee=A.Ik().shape({options:A.Ik().shape({from:A.Ik().shape({name:A.Yj().required(c.iW.required),email:A.Yj().email(c.iW.email).required(c.iW.required)}).required(),response_email:A.Yj().email(c.iW.email),object:A.Yj().required(c.iW.required),message:A.Yj().required(c.iW.required)}).required(c.iW.required)}),N=({template:u,onToggle:D,onSubmit:j})=>{const{formatMessage:v}=(0,W.A)();return(0,s.jsxs)(n.k,{onClose:D,labelledBy:`${v({id:(0,_.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${v({id:(0,_.g)(u.display),defaultMessage:u.display})}`,children:[(0,s.jsx)(l.r,{children:(0,s.jsxs)(J.B,{label:`${v({id:(0,_.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${v({id:(0,_.g)(u.display),defaultMessage:u.display})}`,children:[(0,s.jsx)(w.m,{children:v({id:(0,_.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,s.jsx)(w.m,{isCurrent:!0,children:v({id:(0,_.g)(u.display),defaultMessage:u.display})})]})}),(0,s.jsx)(Z.l1,{onSubmit:j,initialValues:u,validateOnChange:!1,validationSchema:ee,enableReinitialize:!0,children:({errors:T,values:C,handleChange:L,isSubmitting:S})=>(0,s.jsxs)(c.lV,{children:[(0,s.jsx)(p.c,{children:(0,s.jsxs)(e.x,{gap:5,children:[(0,s.jsx)(t.E,{col:6,s:12,children:(0,s.jsx)(c.ah,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:L,value:C.options.from.name,error:T?.options?.from?.name,type:"text"})}),(0,s.jsx)(t.E,{col:6,s:12,children:(0,s.jsx)(c.ah,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:L,value:C.options.from.email,error:T?.options?.from?.email,type:"text"})}),(0,s.jsx)(t.E,{col:6,s:12,children:(0,s.jsx)(c.ah,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:L,value:C.options.response_email,error:T?.options?.response_email,type:"text"})}),(0,s.jsx)(t.E,{col:6,s:12,children:(0,s.jsx)(c.ah,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:L,value:C.options.object,error:T?.options?.object,type:"text"})}),(0,s.jsx)(t.E,{col:12,s:12,children:(0,s.jsx)(E.T,{label:v({id:(0,_.g)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:L,value:C.options.message,error:T?.options?.message&&v({id:T.options.message,defaultMessage:T.options.message})})})]})}),(0,s.jsx)(h.j,{startActions:(0,s.jsx)(M.$,{onClick:D,variant:"tertiary",children:"Cancel"}),endActions:(0,s.jsx)(M.$,{loading:S,type:"submit",children:"Finish"})})]})})]})};N.propTypes={template:x.shape({display:x.string,icon:x.string,options:x.shape({from:x.shape({name:x.string,email:x.string}),message:x.string,object:x.string,response_email:x.string})}).isRequired,onSubmit:x.func.isRequired,onToggle:x.func.isRequired};const Q=({canUpdate:u,onEditClick:D})=>{const{formatMessage:j}=(0,W.A)();return(0,s.jsxs)(R.X,{colCount:3,rowCount:3,children:[(0,s.jsx)(O.d,{children:(0,s.jsxs)(d.Tr,{children:[(0,s.jsx)(m.Th,{width:"1%",children:(0,s.jsx)(r.s,{children:j({id:(0,_.g)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,s.jsx)(m.Th,{children:(0,s.jsx)(a.o,{variant:"sigma",textColor:"neutral600",children:j({id:(0,_.g)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,s.jsx)(m.Th,{width:"1%",children:(0,s.jsx)(r.s,{children:j({id:(0,_.g)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,s.jsxs)(f.N,{children:[(0,s.jsxs)(d.Tr,{...(0,c.qM)({fn:()=>D("reset_password")}),children:[(0,s.jsx)(m.Td,{children:(0,s.jsx)(y.I,{children:(0,s.jsx)(k.A,{"aria-label":j({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,s.jsx)(m.Td,{children:(0,s.jsx)(a.o,{children:j({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,s.jsx)(m.Td,{...c.dG,children:(0,s.jsx)(B.K,{onClick:()=>D("reset_password"),label:j({id:(0,_.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:u&&(0,s.jsx)(H.A,{})})})]}),(0,s.jsxs)(d.Tr,{...(0,c.qM)({fn:()=>D("email_confirmation")}),children:[(0,s.jsx)(m.Td,{children:(0,s.jsx)(y.I,{children:(0,s.jsx)(q.A,{"aria-label":j({id:(0,_.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,s.jsx)(m.Td,{children:(0,s.jsx)(a.o,{children:j({id:(0,_.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,s.jsx)(m.Td,{...c.dG,children:(0,s.jsx)(B.K,{onClick:()=>D("email_confirmation"),label:j({id:(0,_.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:u&&(0,s.jsx)(H.A,{})})})]})]})]})};Q.propTypes={canUpdate:x.bool.isRequired,onEditClick:x.func.isRequired};const se=()=>(0,s.jsx)(c.kz,{permissions:_.P.readEmailTemplates,children:(0,s.jsx)(te,{})}),te=()=>{const{formatMessage:u}=(0,W.A)(),{trackUsage:D}=(0,c.z1)(),{notifyStatus:j}=(0,b.W)(),v=(0,c.hN)(),{lockApp:T,unlockApp:C}=(0,c.MA)(),L=(0,U.useQueryClient)(),{get:S,put:ie}=(0,c.ry)(),{formatAPIError:V}=(0,c.wq)();(0,c.L4)();const[ae,ne]=o.useState(!1),[Y,oe]=o.useState(null),{isLoading:re,allowedActions:{canUpdate:le}}=(0,c.ec)({update:_.P.updateEmailTemplates}),{isLoading:de,data:G}=(0,U.useQuery)(["users-permissions","email-templates"],async()=>{const{data:P}=await S("/users-permissions/email-templates");return P},{onSuccess(){j(u({id:(0,_.g)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(P){v({type:"warning",message:V(P)})}}),me=re||de,z=()=>{ne(P=>!P)},ce=P=>{oe(P),z()},X=(0,U.useMutation)(P=>ie("/users-permissions/email-templates",{"email-templates":P}),{async onSuccess(){await L.invalidateQueries(["users-permissions","email-templates"]),v({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),D("didEditEmailTemplates"),C(),z()},onError(P){v({type:"warning",message:V(P)}),C()},refetchActive:!0}),_e=P=>{T(),D("willEditEmailTemplates");const pe={...G,[Y]:P};X.mutate(pe)};return me?(0,s.jsxs)(I.g,{"aria-busy":"true",children:[(0,s.jsx)(c.x7,{name:u({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(K.Q,{title:u({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(F.s,{children:(0,s.jsx)(c.Bl,{})})]}):(0,s.jsxs)(I.g,{"aria-busy":X.isLoading,children:[(0,s.jsx)(c.x7,{name:u({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(K.Q,{title:u({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsxs)(F.s,{children:[(0,s.jsx)(Q,{onEditClick:ce,canUpdate:le}),ae&&(0,s.jsx)(N,{template:G[Y],onToggle:z,onSubmit:_e})]})]})}}}]);
