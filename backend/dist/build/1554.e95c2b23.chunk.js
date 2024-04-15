"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[1554],{32559:(O,g,i)=>{i.d(g,{s:()=>a});var t=i(92132),r=i(44370);const a=({children:o})=>(0,t.jsx)(r.a,{paddingLeft:10,paddingRight:10,children:o})},43121:(O,g,i)=>{i.d(g,{$:()=>j,Q:()=>b});var t=i(92132),r=i(21272),a=i(63891);const o=c=>{const m=(0,r.useRef)(null),[d,n]=(0,r.useState)(!0),x=([D])=>{n(D.isIntersecting)};return(0,r.useEffect)(()=>{const D=m.current,K=new IntersectionObserver(x,c);return D&&K.observe(m.current),()=>{D&&K.disconnect()}},[m,c]),[m,d]};var _=i(23169);const e=(c,m)=>{const d=(0,_.c)(m);(0,r.useLayoutEffect)(()=>{const n=new ResizeObserver(d);return Array.isArray(c)?c.forEach(x=>{x.current&&n.observe(x.current)}):c.current&&n.observe(c.current),()=>{n.disconnect()}},[c,d])};var s=i(44370),p=i(43242),E=i(57842);const b=c=>{const m=(0,r.useRef)(null),[d,n]=(0,r.useState)(null),[x,D]=o({root:null,rootMargin:"0px",threshold:0});return e(x,()=>{x.current&&n(x.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{m.current&&n(m.current.getBoundingClientRect())},[m]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:d?.height},ref:x,children:D&&(0,t.jsx)(j,{ref:m,...c})}),!D&&(0,t.jsx)(j,{...c,sticky:!0,width:d?.width})]})};b.displayName="HeaderLayout";const B=(0,a.Ay)(s.a)`
  width: ${({width:c})=>c?`${c/16}rem`:void 0};
  z-index: ${({theme:c})=>c.zIndices[1]};
`,j=r.forwardRef(({navigationAction:c,primaryAction:m,secondaryAction:d,subtitle:n,title:x,sticky:D,width:K,...R},W)=>{const V=typeof n=="string";return D?(0,t.jsx)(B,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:K,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(p.s,{justifyContent:"space-between",children:[(0,t.jsxs)(p.s,{children:[c&&(0,t.jsx)(s.a,{paddingRight:3,children:c}),(0,t.jsxs)(s.a,{children:[(0,t.jsx)(E.o,{variant:"beta",as:"h1",...R,children:x}),V?(0,t.jsx)(E.o,{variant:"pi",textColor:"neutral600",children:n}):n]}),d?(0,t.jsx)(s.a,{paddingLeft:4,children:d}):null]}),(0,t.jsx)(p.s,{children:m?(0,t.jsx)(s.a,{paddingLeft:2,children:m}):void 0})]})}):(0,t.jsxs)(s.a,{ref:W,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,t.jsx)(s.a,{paddingBottom:2,children:c}):null,(0,t.jsxs)(p.s,{justifyContent:"space-between",children:[(0,t.jsxs)(p.s,{minWidth:0,children:[(0,t.jsx)(E.o,{as:"h1",variant:"alpha",...R,children:x}),d?(0,t.jsx)(s.a,{paddingLeft:4,children:d}):null]}),m]}),V?(0,t.jsx)(E.o,{variant:"epsilon",textColor:"neutral600",as:"p",children:n}):n]})})},53432:(O,g,i)=>{i.d(g,{P:()=>e});var t=i(92132),r=i(63891),a=i(44370);const o=(0,r.Ay)(a.a)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,_=(0,r.Ay)(a.a)`
  overflow-x: hidden;
`,e=({sideNav:s,children:p})=>(0,t.jsxs)(o,{hasSideNav:Boolean(s),children:[s,(0,t.jsx)(_,{paddingBottom:10,children:p})]})},55794:(O,g,i)=>{i.d(g,{g:()=>_});var t=i(92132),r=i(63891),a=i(44370);const o=(0,r.Ay)(a.a)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,_=({labelledBy:e="main-content-title",...s})=>(0,t.jsx)(o,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...s})},94061:(O,g,i)=>{i.d(g,{a:()=>_});var t=i(63891),r=i(28672),a=i(5146);const o={color:!0,cursor:!0,height:!0,width:!0},_=t.Ay.div.withConfig({shouldForwardProp:(e,s)=>!o[e]&&s(e)})`
  // Font
  font-size: ${({fontSize:e,theme:s})=>(0,a.K)(s.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:s})=>(0,a.K)(e.colors,s,s)};
  color: ${({theme:e,color:s})=>(0,a.K)(e.colors,s,void 0)};

  // Spaces
  ${({theme:e,padding:s})=>(0,r.A)("padding",s,e)}
  ${({theme:e,paddingTop:s})=>(0,r.A)("padding-top",s,e)}
  ${({theme:e,paddingRight:s})=>(0,r.A)("padding-right",s,e)}
  ${({theme:e,paddingBottom:s})=>(0,r.A)("padding-bottom",s,e)}
  ${({theme:e,paddingLeft:s})=>(0,r.A)("padding-left",s,e)}
  ${({theme:e,marginLeft:s})=>(0,r.A)("margin-left",s,e)}
  ${({theme:e,marginRight:s})=>(0,r.A)("margin-right",s,e)}
  ${({theme:e,marginTop:s})=>(0,r.A)("margin-top",s,e)}
  ${({theme:e,marginBottom:s})=>(0,r.A)("margin-bottom",s,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:s})=>s?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:s})=>s?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:s,borderRadius:p})=>s?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:s})=>(0,a.K)(s.colors,e,void 0)};
  border: ${({theme:e,borderColor:s,borderStyle:p,borderWidth:E})=>{if(s&&!p&&typeof E>"u")return`1px solid ${e.colors[s]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:s})=>(0,a.K)(e.shadows,s,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:s})=>e?e(s):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  right: ${({right:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  top: ${({top:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  bottom: ${({bottom:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  min-width: ${({minWidth:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  height: ${({height:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  min-height: ${({minHeight:e,theme:s})=>(0,a.K)(s.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:s})=>(0,a.K)(e.lineHeights,s,s)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},83997:(O,g,i)=>{i.d(g,{s:()=>_});var t=i(63891),r=i(28672),a=i(94061);const o={direction:!0},_=(0,t.Ay)(a.a).withConfig({shouldForwardProp:(e,s)=>!o[e]&&s(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:s})=>s?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:s})=>(0,r.A)("gap",e,s)};
  justify-content: ${({justifyContent:e})=>e};
`},30893:(O,g,i)=>{i.d(g,{o:()=>m});var t=i(63891);const r="alpha",a="beta",o="delta",_="epsilon",e="omega",s="pi",p="sigma",E=[r,a,o,_,e,s,p],b=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,B=({variant:d=e,theme:n})=>{switch(d){case r:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case a:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case o:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case _:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case s:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case p:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var j=i(5146);const c={fontSize:!0,fontWeight:!0},m=t.Ay.span.withConfig({shouldForwardProp:(d,n)=>!c[d]&&n(d)})`
  ${B}
  ${b}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:n})=>(0,j.K)(d.fontWeights,n,void 0)};
  font-size: ${({theme:d,fontSize:n})=>(0,j.K)(d.fontSizes,n,void 0)};
  line-height: ${({theme:d,lineHeight:n})=>(0,j.K)(d.lineHeights,n,n)};
  color: ${({theme:d,textColor:n})=>d.colors[n||"neutral800"]};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},28672:(O,g,i)=>{i.d(g,{A:()=>t});const t=(r,a,o)=>{if(!a)return;if(typeof a=="object")return(Array.isArray(a)?a:[a?.desktop,a?.tablet,a?.mobile]).reduce((p,E,b)=>{if(E)switch(b){case 0:return`${p}${r}: ${o.spaces[E]};`;case 1:return`${p}${o.mediaQueries.tablet}{${r}: ${o.spaces[E]};}`;case 2:return`${p}${o.mediaQueries.mobile}{${r}: ${o.spaces[E]};}`;default:return p}return p},"");const _=o.spaces[a]??a;return`${r}: ${_};`}},5146:(O,g,i)=>{i.d(g,{K:()=>a});function t(o,_){return typeof o=="string"?!1:_ in o}function r(o){return o&&typeof o=="object"&&!Array.isArray(o)}function a(o,_,e){return _&&t(o,_)?o[_]:e}},37679:(O,g,i)=>{i.d(g,{B:()=>E});var t=i(92132),r=i(21272),a=i(63891),o=i(94061),_=i(30893);const e=()=>(0,t.jsx)(o.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(_.o,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var s=i(83997);const p=(0,a.Ay)(s.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:b})=>`calc(-1*${b.spaces[2]})`};
  }
`,E=({label:b,children:B,...j})=>{const c=r.Children.toArray(B);return(0,t.jsx)(o.a,{"aria-label":b,...j,children:(0,t.jsx)(p,{as:"ol",children:r.Children.map(c,(m,d)=>{const n=c.length>1&&d+1<c.length;return(0,t.jsxs)(s.s,{inline:!0,as:"li",children:[m,n&&(0,t.jsx)(e,{})]})})})})};E.displayName="Breadcrumbs"},60043:(O,g,i)=>{i.d(g,{m:()=>o});var t=i(92132),r=i(94061),a=i(30893);const o=({children:_,isCurrent:e=!1,...s})=>(0,t.jsx)(r.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(a.o,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...s,children:_})});o.displayName="Crumb"},51554:(O,g,i)=>{i.r(g),i.d(g,{ProvidersPage:()=>ce,default:()=>xe});var t=i(92132),r=i(21272),a=i(44158),o=i(81926),_=i(50642),e=i(6479),s=i(53900),p=i(43242),E=i(57564),b=i(68065),B=i(32161),j=i(69564),c=i(53432),m=i(55794),d=i(43121),n=i(32559),x=i(79318),D=i(70768),K=i(34508),R=i(21270),W=i(57842),V=i(96586),pe=i(83314),fe=i(19106),f=i(90602),me=i(31708),Ee=i(39404),k=i(54894),G=i(74930),ve=i(37679),Pe=i(60043),Me=i(61535),l=i(33544),v=i(60828),Re=i(77965),u=i(12083);const X=({description:M,disabled:z,intlLabel:I,error:A,name:L,onChange:w,placeholder:P,providerToEditName:U,type:C,value:$})=>{const{formatMessage:y}=(0,k.A)(),S=L==="noName"?`${window.strapi.backendURL}/api/connect/${U}/callback`:$,F=y({id:I.id,defaultMessage:I.defaultMessage},{provider:U,...I.values}),T=M?y({id:M.id,defaultMessage:M.defaultMessage},{provider:U,...M.values}):"";if(C==="bool")return(0,t.jsx)(a.l,{"aria-label":L,checked:$,disabled:z,hint:T,label:F,name:L,offLabel:y({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:y({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:N=>{w({target:{name:L,value:N.target.checked}})}});const se=P?y({id:P.id,defaultMessage:P.defaultMessage},{...P.values}):"",te=A?y({id:A,defaultMessage:A}):"";return(0,t.jsx)(o.k,{"aria-label":L,disabled:z,error:te,label:F,name:L,onChange:w,placeholder:se,type:C,value:S})};X.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},X.propTypes={description:l.shape({id:l.string.isRequired,defaultMessage:l.string.isRequired,values:l.object}),disabled:l.bool,error:l.string,intlLabel:l.shape({id:l.string.isRequired,defaultMessage:l.string.isRequired,values:l.object}).isRequired,name:l.string.isRequired,onChange:l.func.isRequired,placeholder:l.shape({id:l.string.isRequired,defaultMessage:l.string.isRequired,values:l.object}),providerToEditName:l.string.isRequired,type:l.string.isRequired,value:l.oneOfType([l.bool,l.string])};const J=({headerBreadcrumbs:M,initialData:z,isSubmiting:I,layout:A,isOpen:L,onSubmit:w,onToggle:P,providerToEditName:U})=>{const{formatMessage:C}=(0,k.A)();return L?(0,t.jsxs)(_.k,{onClose:P,labelledBy:"title",children:[(0,t.jsx)(e.r,{children:(0,t.jsx)(ve.B,{label:M.join(", "),children:M.map(($,y,S)=>(0,t.jsx)(Pe.m,{isCurrent:y===S.length-1,children:$},$))})}),(0,t.jsx)(Me.l1,{onSubmit:$=>w($),initialValues:z,validationSchema:A.schema,validateOnChange:!1,children:({errors:$,handleChange:y,values:S})=>(0,t.jsxs)(f.lV,{children:[(0,t.jsx)(s.c,{children:(0,t.jsx)(p.s,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(E.x,{gap:5,children:A.form.map(F=>F.map(T=>(0,t.jsx)(b.E,{col:T.size,xs:12,children:(0,t.jsx)(X,{...T,error:$[T.name],onChange:y,value:S[T.name],providerToEditName:U})},T.name)))})})}),(0,t.jsx)(B.j,{startActions:(0,t.jsx)(j.$,{variant:"tertiary",onClick:P,type:"button",children:C({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,t.jsx)(j.$,{type:"submit",loading:I,children:C({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};J.defaultProps={initialData:null,providerToEditName:null},J.propTypes={headerBreadcrumbs:l.arrayOf(l.string).isRequired,initialData:l.object,layout:l.shape({form:l.arrayOf(l.array),schema:l.object}).isRequired,isOpen:l.bool.isRequired,isSubmiting:l.bool.isRequired,onSubmit:l.func.isRequired,onToggle:l.func.isRequired,providerToEditName:l.string};const ae={id:(0,v.g)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},re={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},Z={id:(0,v.g)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},q={id:(0,v.g)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},oe={id:(0,v.g)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},de={id:(0,v.g)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},Y={id:(0,v.g)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},le={id:(0,v.g)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},ee={email:{form:[[{intlLabel:q,name:"enabled",type:"bool",description:Z,size:6}]],schema:u.Ik().shape({enabled:u.lc().required(f.iW.required)})},providers:{form:[[{intlLabel:q,name:"enabled",type:"bool",description:Z,size:6,validations:{required:!0}}],[{intlLabel:oe,name:"key",type:"text",placeholder:Y,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:Y,size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:de,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:u.Ik().shape({enabled:u.lc().required(f.iW.required),key:u.Yj().when("enabled",{is:!0,then:u.Yj().required(f.iW.required),otherwise:u.Yj()}),secret:u.Yj().when("enabled",{is:!0,then:u.Yj().required(f.iW.required),otherwise:u.Yj()}),callback:u.Yj().when("enabled",{is:!0,then:u.Yj().required(f.iW.required),otherwise:u.Yj()})})},providersWithSubdomain:{form:[[{intlLabel:q,name:"enabled",type:"bool",description:Z,size:6,validations:{required:!0}}],[{intlLabel:oe,name:"key",type:"text",placeholder:Y,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:Y,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,v.g)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:Y,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,v.g)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,v.g)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:de,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:u.Ik().shape({enabled:u.lc().required(f.iW.required),key:u.Yj().when("enabled",{is:!0,then:u.Yj().required(f.iW.required),otherwise:u.Yj()}),secret:u.Yj().when("enabled",{is:!0,then:u.Yj().required(f.iW.required),otherwise:u.Yj()}),subdomain:u.Yj().when("enabled",{is:!0,then:u.Yj().required(f.iW.required),otherwise:u.Yj()}),callback:u.Yj().when("enabled",{is:!0,then:u.Yj().required(f.iW.required),otherwise:u.Yj()})})}},ce=()=>{const{formatMessage:M,locale:z}=(0,k.A)(),I=(0,G.useQueryClient)(),{trackUsage:A}=(0,f.z1)(),[L,w]=r.useState(!1),[P,U]=r.useState(null),C=(0,f.hN)(),{lockApp:$,unlockApp:y}=(0,f.MA)(),{get:S,put:F}=(0,f.ry)(),{formatAPIError:T}=(0,f.wq)(),se=(0,f.QM)(z,{sensitivity:"base"});(0,f.L4)();const{isLoading:te,allowedActions:{canUpdate:N}}=(0,f.ec)({update:v.P.updateProviders}),{isLoading:ye,data:ie}=(0,G.useQuery)(["users-permissions","get-providers"],async()=>{const{data:h}=await S("/users-permissions/providers");return h},{initialData:{}}),ue=(0,G.useMutation)(h=>F("/users-permissions/providers",h),{async onSuccess(){await I.invalidateQueries(["users-permissions","providers"]),C({type:"success",message:{id:(0,v.g)("notification.success.submit")}}),A("didEditAuthenticationProvider"),ne(),y()},onError(h){C({type:"warning",message:T(h)}),y()},refetchActive:!1}),Q=Object.entries(ie).reduce((h,[H,De])=>{const{icon:ge,enabled:$e,subdomain:Le}=De;return h.push({name:H,icon:ge==="envelope"?["fas","envelope"]:["fab",ge],enabled:$e,subdomain:Le}),h},[]).sort((h,H)=>se.compare(h.name,H.name)),be=ye||te,_e=r.useMemo(()=>P?!!Q.find(H=>H.name===P)?.subdomain:!1,[Q,P]),je=r.useMemo(()=>P==="email"?ee.email:_e?ee.providersWithSubdomain:ee.providers,[P,_e]),ne=()=>{w(h=>!h)},he=h=>{N&&(U(h.name),ne())},Oe=async h=>{$(),A("willEditAuthenticationProvider"),ue.mutate({providers:{...ie,[P]:h}})};return(0,t.jsxs)(c.P,{children:[(0,t.jsx)(f.x7,{name:M({id:(0,v.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,t.jsxs)(m.g,{children:[(0,t.jsx)(d.Q,{title:M({id:(0,v.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),be?(0,t.jsx)(f.Bl,{}):(0,t.jsx)(n.s,{children:(0,t.jsxs)(x.X,{colCount:3,rowCount:Q.length+1,children:[(0,t.jsx)(D.d,{children:(0,t.jsxs)(K.Tr,{children:[(0,t.jsx)(R.Th,{children:(0,t.jsx)(W.o,{variant:"sigma",textColor:"neutral600",children:M({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(R.Th,{children:(0,t.jsx)(W.o,{variant:"sigma",textColor:"neutral600",children:M({id:(0,v.g)("Providers.status"),defaultMessage:"Status"})})}),(0,t.jsx)(R.Th,{children:(0,t.jsx)(W.o,{variant:"sigma",children:(0,t.jsx)(V.s,{children:M({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,t.jsx)(pe.N,{children:Q.map(h=>(0,t.jsxs)(K.Tr,{...(0,f.qM)({fn:()=>he(h),condition:N}),children:[(0,t.jsx)(R.Td,{width:"45%",children:(0,t.jsx)(W.o,{fontWeight:"semiBold",textColor:"neutral800",children:h.name})}),(0,t.jsx)(R.Td,{width:"65%",children:(0,t.jsx)(W.o,{textColor:h.enabled?"success600":"danger600","data-testid":`enable-${h.name}`,children:h.enabled?M({id:"global.enabled",defaultMessage:"Enabled"}):M({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,t.jsx)(R.Td,{...f.dG,children:N&&(0,t.jsx)(fe.K,{onClick:()=>he(h),noBorder:!0,icon:(0,t.jsx)(me.A,{}),label:"Edit"})})]},h.name))})]})})]}),(0,t.jsx)(J,{initialData:ie[P],isOpen:L,isSubmiting:ue.isLoading,layout:je,headerBreadcrumbs:[M({id:(0,v.g)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),Ee(P)],onToggle:ne,onSubmit:Oe,providerToEditName:P})]})},xe=()=>(0,t.jsx)(f.kz,{permissions:v.P.readProviders,children:(0,t.jsx)(ce,{})})}}]);
