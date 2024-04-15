"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2714],{55105:(L,m,t)=>{t.r(m),t.d(m,{SettingsPage:()=>S,default:()=>N});var e=t(21272),i=t(55794),f=t(43121),h=t(69564),v=t(32559),E=t(53432),s=t(43242),p=t(44370),b=t(57842),j=t(57564),M=t(68065),x=t(44158),n=t(90602),o=t(13333),d=t(56336),l=t.n(d),c=t(14718),u=t(54894),y=t(74930),T=t(85022),g=t(50314);const A=a=>a;var U=t(88761),W=t(48940),H=t.n(W);const K={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},G=(a,O)=>(0,U.Ay)(a,D=>{switch(O.type){case"GET_DATA_SUCCEEDED":{D.initialData=O.data,D.modifiedData=O.data;break}case"ON_CHANGE":{H()(D,["modifiedData",...O.keys.split(".")],O.value);break}default:return a}}),S=()=>{const{formatMessage:a}=(0,u.A)(),{lockApp:O,unlockApp:D}=(0,n.MA)(),F=(0,n.hN)(),{get:$,put:Q}=(0,n.ry)();(0,n.L4)();const[{initialData:V,modifiedData:C},R]=(0,e.useReducer)(G,K,A),{data:P,isLoading:k,refetch:J}=(0,y.useQuery)({queryKey:["upload","settings"],async queryFn(){const{data:{data:r}}=await $("/upload/settings");return r}});e.useEffect(()=>{P&&R({type:"GET_DATA_SUCCEEDED",data:P})},[P]);const I=l()(V,C),{mutateAsync:X,isLoading:Y}=(0,y.useMutation)({async mutationFn(r){return Q("/upload/settings",r)},onSuccess(){J(),F({type:"success",message:{id:"notification.form.success.fields"}})},onError(r){console.error(r)}}),Z=async r=>{r.preventDefault(),!I&&(O(),await X(C),D())},B=({target:{name:r,value:w}})=>{R({type:"ON_CHANGE",keys:r,value:w})};return e.createElement(i.g,{tabIndex:-1},e.createElement(c.m,{title:a({id:(0,g.gT)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:Z},e.createElement(f.Q,{title:a({id:(0,g.gT)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(h.$,{disabled:I,loading:Y,type:"submit",startIcon:e.createElement(o.A,null),size:"S"},a({id:"global.save",defaultMessage:"Save"})),subtitle:a({id:(0,g.gT)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(v.s,null,k?e.createElement(n.Bl,null):e.createElement(E.P,null,e.createElement(s.s,{direction:"column",alignItems:"stretch",gap:12},e.createElement(p.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(s.s,null,e.createElement(b.o,{variant:"delta",as:"h2"},a({id:(0,g.gT)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(j.x,{gap:6},e.createElement(M.E,{col:6,s:12},e.createElement(x.l,{"aria-label":"responsiveDimensions",checked:C.responsiveDimensions,hint:a({id:(0,g.gT)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:a({id:(0,g.gT)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:r=>{B({target:{name:"responsiveDimensions",value:r.target.checked}})}})),e.createElement(M.E,{col:6,s:12},e.createElement(x.l,{"aria-label":"sizeOptimization",checked:C.sizeOptimization,hint:a({id:(0,g.gT)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:a({id:(0,g.gT)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:r=>{B({target:{name:"sizeOptimization",value:r.target.checked}})}})),e.createElement(M.E,{col:6,s:12},e.createElement(x.l,{"aria-label":"autoOrientation",checked:C.autoOrientation,hint:a({id:(0,g.gT)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:a({id:(0,g.gT)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:r=>{B({target:{name:"autoOrientation",value:r.target.checked}})}}))))))))))},N=()=>e.createElement(n.kz,{permissions:T.Jj.settings},e.createElement(S,null))},32559:(L,m,t)=>{t.d(m,{s:()=>f});var e=t(92132),i=t(44370);const f=({children:h})=>(0,e.jsx)(i.a,{paddingLeft:10,paddingRight:10,children:h})},43121:(L,m,t)=>{t.d(m,{$:()=>x,Q:()=>j});var e=t(92132),i=t(21272),f=t(63891);const h=n=>{const o=(0,i.useRef)(null),[d,l]=(0,i.useState)(!0),c=([u])=>{l(u.isIntersecting)};return(0,i.useEffect)(()=>{const u=o.current,y=new IntersectionObserver(c,n);return u&&y.observe(o.current),()=>{u&&y.disconnect()}},[o,n]),[o,d]};var v=t(23169);const E=(n,o)=>{const d=(0,v.c)(o);(0,i.useLayoutEffect)(()=>{const l=new ResizeObserver(d);return Array.isArray(n)?n.forEach(c=>{c.current&&l.observe(c.current)}):n.current&&l.observe(n.current),()=>{l.disconnect()}},[n,d])};var s=t(44370),p=t(43242),b=t(57842);const j=n=>{const o=(0,i.useRef)(null),[d,l]=(0,i.useState)(null),[c,u]=h({root:null,rootMargin:"0px",threshold:0});return E(c,()=>{c.current&&l(c.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{o.current&&l(o.current.getBoundingClientRect())},[o]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:d?.height},ref:c,children:u&&(0,e.jsx)(x,{ref:o,...n})}),!u&&(0,e.jsx)(x,{...n,sticky:!0,width:d?.width})]})};j.displayName="HeaderLayout";const M=(0,f.Ay)(s.a)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,x=i.forwardRef(({navigationAction:n,primaryAction:o,secondaryAction:d,subtitle:l,title:c,sticky:u,width:y,...T},g)=>{const z=typeof l=="string";return u?(0,e.jsx)(M,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:y,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(p.s,{justifyContent:"space-between",children:[(0,e.jsxs)(p.s,{children:[n&&(0,e.jsx)(s.a,{paddingRight:3,children:n}),(0,e.jsxs)(s.a,{children:[(0,e.jsx)(b.o,{variant:"beta",as:"h1",...T,children:c}),z?(0,e.jsx)(b.o,{variant:"pi",textColor:"neutral600",children:l}):l]}),d?(0,e.jsx)(s.a,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(p.s,{children:o?(0,e.jsx)(s.a,{paddingLeft:2,children:o}):void 0})]})}):(0,e.jsxs)(s.a,{ref:g,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(s.a,{paddingBottom:2,children:n}):null,(0,e.jsxs)(p.s,{justifyContent:"space-between",children:[(0,e.jsxs)(p.s,{minWidth:0,children:[(0,e.jsx)(b.o,{as:"h1",variant:"alpha",...T,children:c}),d?(0,e.jsx)(s.a,{paddingLeft:4,children:d}):null]}),o]}),z?(0,e.jsx)(b.o,{variant:"epsilon",textColor:"neutral600",as:"p",children:l}):l]})})},53432:(L,m,t)=>{t.d(m,{P:()=>E});var e=t(92132),i=t(63891),f=t(44370);const h=(0,i.Ay)(f.a)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,v=(0,i.Ay)(f.a)`
  overflow-x: hidden;
`,E=({sideNav:s,children:p})=>(0,e.jsxs)(h,{hasSideNav:Boolean(s),children:[s,(0,e.jsx)(v,{paddingBottom:10,children:p})]})},55794:(L,m,t)=>{t.d(m,{g:()=>v});var e=t(92132),i=t(63891),f=t(44370);const h=(0,i.Ay)(f.a)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,v=({labelledBy:E="main-content-title",...s})=>(0,e.jsx)(h,{"aria-labelledby":E,as:"main",id:"main-content",tabIndex:-1,...s})}}]);