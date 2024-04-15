"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5552],{37373:(N,O,s)=>{s.d(O,{j:()=>m});var e=s(71262);const m=e.c$},35552:(N,O,s)=>{s.d(O,{ProtectedSettingsPage:()=>Ce});var e=s(92132),m=s(21272),p=s(70230),b=s(71262),$=s(37373),T=s(50642),B=s(6479),M=s(57842),I=s(53900),S=s(15926),v=s(43242),f=s(44622),K=s(24122),W=s(44370),x=s(83724),U=s(32161),P=s(69564),V=s(57564),A=s(68065),F=s(81926),w=s(12050),z=s(19448),k=s(79318),q=s(70768),H=s(34508),D=s(21270),ee=s(96586),se=s(83314),Y=s(19106),ae=s(55794),te=s(43121),ne=s(32559),le=s(17840),r=s(90602),Q=s(13333),ie=s(31708),oe=s(39423),Z=s(31127),de=s(28312),h=s(54894),C=s(61535),y=s(12083),ce=s(60256),re=s(82437),a=s(39763),_e=s(74930),pe=s(2600),Te=s(5409),Be=s(51187),Ie=s(59080),Se=s(48940),Ke=s(35223);const ge=()=>{const[t,l]=m.useState(!1),d=(0,re.wA)(),n=(0,r.hN)(),{post:c}=(0,r.ry)(),{formatAPIError:i}=(0,r.wq)();return{isAdding:t,addLocale:async _=>{l(!0);try{const{data:g}=await c("/i18n/locales",_);n({type:"success",message:{id:(0,a.g)("Settings.locales.modal.create.success")}}),d({type:a.A,newLocale:g})}catch(g){throw g instanceof ce.pe?n({type:"warning",message:i(g)}):n({type:"warning",message:{id:"notification.error"}}),g}finally{l(!1)}}}},G=()=>{const{formatMessage:t}=(0,h.A)(),{notifyStatus:l}=(0,p.W)(),d=(0,r.hN)(),{get:n}=(0,r.ry)(),{isLoading:c,data:i}=(0,_e.useQuery)(["plugin-i18n","locales"],async()=>{const{data:o}=await n("/i18n/iso-locales");if(Array.isArray(o))return o;throw new Error("The response is not an array.")},{onSuccess(){l(t({id:(0,a.g)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."}))},onError(){d({type:"warning",message:{id:"notification.error"}})},initialData:[]});return{defaultLocales:i,isLoading:c}},Ee=({value:t,onClear:l,onLocaleChange:d,error:n})=>{const{formatMessage:c}=(0,h.A)(),{defaultLocales:i=[],isLoading:o}=G(),{locales:_}=(0,a.u)(),g=i.map(E=>({label:E.name,value:E.code})).filter(E=>{const u=_.find(({code:j})=>j===E.value);return!u||u.code===t}),R=t||"";return(0,e.jsx)(b.G3,{"aria-busy":o,error:n,label:c({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:R,onClear:l,onChange:E=>{const u=g.find(j=>j.value===E);u&&d({code:u.value,name:u.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"}),children:g.map(E=>(0,e.jsx)($.j,{value:E.value,children:E.label},E.value))})},J=y.Ik().shape({code:y.Yj().required(),name:y.Yj().max(50,"Settings.locales.modal.locales.displayName.error").required(r.iW.required),isDefault:y.zM()}),Me={code:"",name:"",isDefault:!1},me=({onClose:t})=>{const{isAdding:l,addLocale:d}=ge(),{formatMessage:n}=(0,h.A)(),{refetchPermissions:c}=(0,r.r5)();return(0,e.jsx)(T.k,{onClose:t,labelledBy:"add-locale-title",children:(0,e.jsx)(C.l1,{initialValues:Me,onSubmit:async i=>{await d(i),await c()},validationSchema:J,validateOnChange:!1,children:(0,e.jsxs)(r.lV,{children:[(0,e.jsx)(B.r,{children:(0,e.jsx)(M.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title",children:n({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),(0,e.jsx)(I.c,{children:(0,e.jsxs)(S.f,{label:n({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,e.jsxs)(v.s,{justifyContent:"space-between",children:[(0,e.jsx)(M.o,{as:"h2",variant:"beta",children:n({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,e.jsxs)(f.t,{children:[(0,e.jsx)(f.o,{children:n({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,e.jsx)(f.o,{children:n({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,e.jsx)(K.c,{}),(0,e.jsx)(W.a,{paddingTop:7,paddingBottom:7,children:(0,e.jsxs)(x.T,{children:[(0,e.jsx)(x.K,{children:(0,e.jsx)(he,{})}),(0,e.jsx)(x.K,{children:(0,e.jsx)(X,{})})]})})]})}),(0,e.jsx)(U.j,{startActions:(0,e.jsx)(P.$,{variant:"tertiary",onClick:t,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(P.$,{type:"submit",startIcon:(0,e.jsx)(Q.A,{}),disabled:l,children:n({id:"global.save",defaultMessage:"Save"})})})]})})})},he=()=>{const{formatMessage:t}=(0,h.A)(),{values:l,handleChange:d,setFieldValue:n,errors:c}=(0,C.j7)(),i=_=>{n("name",_.name),n("code",_.code)},o=()=>{n("displayName",""),n("code","")};return(0,e.jsxs)(V.x,{gap:4,children:[(0,e.jsx)(A.E,{col:6,children:(0,e.jsx)(Ee,{error:c.code,value:l.code,onLocaleChange:i,onClear:o})}),(0,e.jsx)(A.E,{col:6,children:(0,e.jsx)(F.k,{name:"name",label:t({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:t({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?t({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:l.name,onChange:d})})]})},X=({isDefaultLocale:t})=>{const{values:l,setFieldValue:d}=(0,C.j7)(),{formatMessage:n}=(0,h.A)();return(0,e.jsx)(w.S,{name:"isDefault",hint:n({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>d("isDefault",!l.isDefault),value:l.isDefault,disabled:t,children:n({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"})})},De=()=>{const[t,l]=(0,m.useState)(!1),d=(0,a.a)(),n=(0,r.hN)(),{del:c}=(0,r.ry)();return{isDeleting:t,deleteLocale:async o=>{try{l(!0),await c(`/i18n/locales/${o}`),n({type:"success",message:{id:(0,a.g)("Settings.locales.modal.delete.success")}}),d({type:a.D,id:o})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{l(!1)}}}},ue=({localeToDelete:t,onClose:l})=>{const{isDeleting:d,deleteLocale:n}=De(),c=Boolean(t),i=()=>n(t.id).then(l);return(0,e.jsx)(r.TM,{isConfirmButtonLoading:d,onConfirm:i,onToggleDialog:l,isOpen:c})},fe=()=>{const[t,l]=(0,m.useState)(!1),d=(0,a.a)(),n=(0,r.hN)(),{put:c}=(0,r.ry)();return{isEditing:t,editLocale:async(o,_)=>{try{l(!0);const{data:g}=await c(`/i18n/locales/${o}`,_);if("id"in g)n({type:"success",message:{id:(0,a.g)("Settings.locales.modal.edit.success")}}),d({type:a.U,editedLocale:g});else throw new Error("Invalid response")}catch{n({type:"warning",message:{id:"notification.error"}})}finally{l(!1)}}}},xe=({locale:t,onClose:l})=>{const{refetchPermissions:d}=(0,r.r5)(),{isEditing:n,editLocale:c}=fe(),{formatMessage:i}=(0,h.A)(),o=async({name:_,isDefault:g})=>{await c(t.id,{name:_,isDefault:g}),await d()};return(0,e.jsx)(T.k,{onClose:l,labelledBy:"edit-locale-title",children:(0,e.jsx)(C.l1,{initialValues:{code:t.code??"",name:t.name??"",isDefault:Boolean(t.isDefault)},onSubmit:o,validationSchema:J,children:(0,e.jsxs)(r.lV,{children:[(0,e.jsx)(B.r,{children:(0,e.jsx)(M.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title",children:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"})})}),(0,e.jsx)(I.c,{children:(0,e.jsxs)(S.f,{label:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,e.jsxs)(v.s,{justifyContent:"space-between",children:[(0,e.jsx)(M.o,{as:"h2",children:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,e.jsxs)(f.t,{children:[(0,e.jsx)(f.o,{children:i({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,e.jsx)(f.o,{children:i({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,e.jsx)(K.c,{}),(0,e.jsx)(W.a,{paddingTop:7,paddingBottom:7,children:(0,e.jsxs)(x.T,{children:[(0,e.jsx)(x.K,{children:(0,e.jsx)(Pe,{locale:t})}),(0,e.jsx)(x.K,{children:(0,e.jsx)(X,{isDefaultLocale:Boolean(t&&t.isDefault)})})]})})]})}),(0,e.jsx)(U.j,{startActions:(0,e.jsx)(P.$,{variant:"tertiary",onClick:l,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(P.$,{type:"submit",startIcon:(0,e.jsx)(Q.A,{}),disabled:n,children:i({id:"global.save",defaultMessage:"Save"})})})]})})})},Pe=({locale:t})=>{const{formatMessage:l}=(0,h.A)(),{values:d,handleChange:n,errors:c}=(0,C.j7)(),{defaultLocales:i=[]}=G(),o=i.find(_=>_.code===t.code);return(0,e.jsxs)(V.x,{gap:4,children:[(0,e.jsx)(A.E,{col:6,children:(0,e.jsx)(z.Z,{label:l({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:o?.code||t.code,disabled:!0,children:(0,e.jsx)(z.eY,{value:o?.code||t.code,children:o?.name||t.code})})}),(0,e.jsx)(A.E,{col:6,children:(0,e.jsx)(F.k,{name:"name",label:l({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:l({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?l({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:d.name,onChange:n})})]})},je=({locales:t=[],onDeleteLocale:l,onEditLocale:d,canDelete:n=!0,canEdit:c=!0})=>{const{formatMessage:i}=(0,h.A)();return(0,e.jsxs)(k.X,{colCount:4,rowCount:t.length+1,children:[(0,e.jsx)(q.d,{children:(0,e.jsxs)(H.Tr,{children:[(0,e.jsx)(D.Th,{children:(0,e.jsx)(M.o,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.id"),defaultMessage:"ID"})})}),(0,e.jsx)(D.Th,{children:(0,e.jsx)(M.o,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.displayName"),defaultMessage:"Display name"})})}),(0,e.jsx)(D.Th,{children:(0,e.jsx)(M.o,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.default-locale"),defaultMessage:"Default locale"})})}),(0,e.jsx)(D.Th,{children:(0,e.jsx)(ee.s,{children:"Actions"})})]})}),(0,e.jsx)(se.N,{children:t.map(o=>(0,e.jsxs)(H.Tr,{...(0,r.qM)({fn:()=>d(o),condition:Boolean(d)}),children:[(0,e.jsx)(D.Td,{children:(0,e.jsx)(M.o,{textColor:"neutral800",children:o.id})}),(0,e.jsx)(D.Td,{children:(0,e.jsx)(M.o,{textColor:"neutral800",children:o.name})}),(0,e.jsx)(D.Td,{children:(0,e.jsx)(M.o,{textColor:"neutral800",children:o.isDefault?i({id:(0,a.g)("Settings.locales.default"),defaultMessage:"Default"}):null})}),(0,e.jsx)(D.Td,{children:(0,e.jsxs)(v.s,{gap:1,justifyContent:"flex-end",onClick:_=>_.stopPropagation(),children:[c&&(0,e.jsx)(Y.K,{onClick:()=>d(o),label:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit"}),icon:(0,e.jsx)(ie.A,{}),borderWidth:0}),n&&!o.isDefault&&(0,e.jsx)(Y.K,{onClick:()=>l(o),label:i({id:(0,a.g)("Settings.list.actions.delete"),defaultMessage:"Delete"}),icon:(0,e.jsx)(oe.A,{}),borderWidth:0})]})})]},o.id))})]})},Oe=()=>{const[t,l]=m.useState(!1),[d,n]=m.useState(),[c,i]=m.useState(),{locales:o}=(0,a.u)(),{formatMessage:_}=(0,h.A)(),{isLoading:g,allowedActions:{canUpdate:R,canCreate:E,canDelete:u}}=(0,r.ec)(a.P),j=()=>{l(L=>!L)};(0,r.L4)();const Le=()=>n(void 0),ve=L=>{n(L)},Ae=()=>i(void 0),ye=L=>{i(L)};return g?(0,e.jsx)(r.Bl,{}):(0,e.jsxs)(ae.g,{tabIndex:-1,children:[(0,e.jsx)(te.Q,{primaryAction:(0,e.jsx)(P.$,{disabled:!E,startIcon:(0,e.jsx)(Z.A,{}),onClick:j,size:"S",children:_({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})}),title:_({id:(0,a.g)("plugin.name"),defaultMessage:"Internationalization"}),subtitle:_({id:(0,a.g)("Settings.list.description"),defaultMessage:"Configure the settings"})}),(0,e.jsx)(ne.s,{children:o?.length>0?(0,e.jsx)(je,{locales:o,canDelete:u,canEdit:R,onDeleteLocale:ve,onEditLocale:ye}):(0,e.jsx)(le.p,{icon:(0,e.jsx)(de.A,{width:void 0,height:void 0}),content:_({id:(0,a.g)("Settings.list.empty.title"),defaultMessage:"There are no locales"}),action:(0,e.jsx)(P.$,{disabled:!E,variant:"secondary",startIcon:(0,e.jsx)(Z.A,{}),onClick:j,children:_({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})})}),t&&(0,e.jsx)(me,{onClose:j}),c&&(0,e.jsx)(xe,{onClose:Ae,locale:c}),d&&(0,e.jsx)(ue,{localeToDelete:d,onClose:Le})]})},Ce=()=>(0,e.jsx)(r.kz,{permissions:a.P.read,children:(0,e.jsx)(Oe,{})})},60256:(N,O,s)=>{s.d(O,{pe:()=>p});var e=s(41629);const{Axios:m,AxiosError:p,CanceledError:b,isCancel:$,CancelToken:T,VERSION:B,all:M,Cancel:I,isAxiosError:S,spread:v,toFormData:f,AxiosHeaders:K,HttpStatusCode:W,formToJSON:x,getAdapter:U,mergeConfig:P}=e.A}}]);
