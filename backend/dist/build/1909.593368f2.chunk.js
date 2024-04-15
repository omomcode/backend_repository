"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[1909],{32559:(j,_,t)=>{t.d(_,{s:()=>p});var e=t(92132),o=t(44370);const p=({children:E})=>(0,e.jsx)(o.a,{paddingLeft:10,paddingRight:10,children:E})},43121:(j,_,t)=>{t.d(_,{$:()=>y,Q:()=>P});var e=t(92132),o=t(21272),p=t(63891);const E=n=>{const i=(0,o.useRef)(null),[s,d]=(0,o.useState)(!0),r=([g])=>{d(g.isIntersecting)};return(0,o.useEffect)(()=>{const g=i.current,f=new IntersectionObserver(r,n);return g&&f.observe(i.current),()=>{g&&f.disconnect()}},[i,n]),[i,s]};var v=t(23169);const x=(n,i)=>{const s=(0,v.c)(i);(0,o.useLayoutEffect)(()=>{const d=new ResizeObserver(s);return Array.isArray(n)?n.forEach(r=>{r.current&&d.observe(r.current)}):n.current&&d.observe(n.current),()=>{d.disconnect()}},[n,s])};var c=t(44370),M=t(43242),O=t(57842);const P=n=>{const i=(0,o.useRef)(null),[s,d]=(0,o.useState)(null),[r,g]=E({root:null,rootMargin:"0px",threshold:0});return x(r,()=>{r.current&&d(r.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{i.current&&d(i.current.getBoundingClientRect())},[i]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:s?.height},ref:r,children:g&&(0,e.jsx)(y,{ref:i,...n})}),!g&&(0,e.jsx)(y,{...n,sticky:!0,width:s?.width})]})};P.displayName="HeaderLayout";const D=(0,p.Ay)(c.a)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,y=o.forwardRef(({navigationAction:n,primaryAction:i,secondaryAction:s,subtitle:d,title:r,sticky:g,width:f,...a},A)=>{const h=typeof d=="string";return g?(0,e.jsx)(D,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:f,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(M.s,{justifyContent:"space-between",children:[(0,e.jsxs)(M.s,{children:[n&&(0,e.jsx)(c.a,{paddingRight:3,children:n}),(0,e.jsxs)(c.a,{children:[(0,e.jsx)(O.o,{variant:"beta",as:"h1",...a,children:r}),h?(0,e.jsx)(O.o,{variant:"pi",textColor:"neutral600",children:d}):d]}),s?(0,e.jsx)(c.a,{paddingLeft:4,children:s}):null]}),(0,e.jsx)(M.s,{children:i?(0,e.jsx)(c.a,{paddingLeft:2,children:i}):void 0})]})}):(0,e.jsxs)(c.a,{ref:A,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(c.a,{paddingBottom:2,children:n}):null,(0,e.jsxs)(M.s,{justifyContent:"space-between",children:[(0,e.jsxs)(M.s,{minWidth:0,children:[(0,e.jsx)(O.o,{as:"h1",variant:"alpha",...a,children:r}),s?(0,e.jsx)(c.a,{paddingLeft:4,children:s}):null]}),i]}),h?(0,e.jsx)(O.o,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},55794:(j,_,t)=>{t.d(_,{g:()=>v});var e=t(92132),o=t(63891),p=t(44370);const E=(0,o.Ay)(p.a)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,v=({labelledBy:x="main-content-title",...c})=>(0,e.jsx)(E,{"aria-labelledby":x,as:"main",id:"main-content",tabIndex:-1,...c})},1909:(j,_,t)=>{t.r(_),t.d(_,{default:()=>F});var e=t(92132),o=t(21272),p=t(70230),E=t(55794),v=t(43121),x=t(32559),c=t(69564),M=t(44370),O=t(43242),P=t(57842),D=t(57564),y=t(68065),n=t(45024),i=t(89787),s=t(90602),d=t(13333),r=t(61535),g=t(54894),f=t(74930),a=t(60828),A=t(77965),h=t(12083);const U=[{intlLabel:{id:(0,a.g)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,a.g)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.g)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,a.g)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.g)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,a.g)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,a.g)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,a.g)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,a.g)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.g)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,a.g)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,a.g)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}],B=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),K=h.Ik().shape({email_confirmation_redirection:h.gl().when("email_confirmation",{is:!0,then:h.Yj().matches(B).required(),otherwise:h.Yj().nullable()}),email_reset_password:h.Yj(s.iW.string).matches(B,s.iW.regex).nullable()}),F=()=>(0,e.jsx)(s.kz,{permissions:a.P.readAdvancedSettings,children:(0,e.jsx)(z,{})}),z=()=>{const{formatMessage:m}=(0,g.A)(),L=(0,s.hN)(),{lockApp:w,unlockApp:C}=(0,s.MA)(),{notifyStatus:N}=(0,p.W)(),H=(0,f.useQueryClient)(),{get:Q,put:$}=(0,s.ry)(),{formatAPIError:V}=(0,s.wq)();(0,s.L4)();const{isLoading:Y,allowedActions:{canUpdate:b}}=(0,s.ec)({update:a.P.updateAdvancedSettings}),{isLoading:G,data:I}=(0,f.useQuery)(["users-permissions","advanced"],async()=>{const{data:u}=await Q("/users-permissions/advanced");return u},{onSuccess(){N(m({id:(0,a.g)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){L({type:"warning",message:{id:(0,a.g)("notification.error"),defaultMessage:"An error occured"}})}}),X=Y||G,S=(0,f.useMutation)(u=>$("/users-permissions/advanced",u),{async onSuccess(){await H.invalidateQueries(["users-permissions","advanced"]),L({type:"success",message:{id:(0,a.g)("notification.success.saved"),defaultMessage:"Saved"}}),C()},onError(u){L({type:"warning",message:V(u)}),C()},refetchActive:!0}),{isLoading:J}=S,Z=async u=>{w(),S.mutate({...u,email_confirmation_redirection:u.email_confirmation?u.email_confirmation_redirection:""})};return X?(0,e.jsxs)(E.g,{"aria-busy":"true",children:[(0,e.jsx)(s.x7,{name:m({id:(0,a.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(v.Q,{title:m({id:(0,a.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(x.s,{children:(0,e.jsx)(s.Bl,{})})]}):(0,e.jsxs)(E.g,{"aria-busy":J,children:[(0,e.jsx)(s.x7,{name:m({id:(0,a.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(r.l1,{onSubmit:Z,initialValues:I.settings,validateOnChange:!1,validationSchema:K,enableReinitialize:!0,children:({errors:u,values:R,handleChange:W,isSubmitting:k,dirty:q})=>(0,e.jsxs)(s.lV,{children:[(0,e.jsx)(v.Q,{title:m({id:(0,a.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:(0,e.jsx)(c.$,{loading:k,type:"submit",disabled:b?!q:!b,startIcon:(0,e.jsx)(d.A,{}),size:"S",children:m({id:"global.save",defaultMessage:"Save"})})}),(0,e.jsx)(x.s,{children:(0,e.jsx)(M.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(O.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(P.o,{variant:"delta",as:"h2",children:m({id:"global.settings",defaultMessage:"Settings"})}),(0,e.jsxs)(D.x,{gap:6,children:[(0,e.jsx)(y.E,{col:6,s:12,children:(0,e.jsx)(n.l,{label:m({id:(0,a.g)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:R.default_role,hint:m({id:(0,a.g)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:l=>W({target:{name:"default_role",value:l}}),children:I.roles.map(l=>(0,e.jsx)(i.c,{value:l.type,children:l.name},l.type))})}),U.map(l=>{let T=R[l.name];return T||(T=l.type==="bool"?!1:""),(0,e.jsx)(y.E,{...l.size,children:(0,e.jsx)(s.ah,{...l,value:T,error:u[l.name],disabled:l.name==="email_confirmation_redirection"&&R.email_confirmation===!1,onChange:W})},l.name)})]})]})})})]})})]})}}}]);
