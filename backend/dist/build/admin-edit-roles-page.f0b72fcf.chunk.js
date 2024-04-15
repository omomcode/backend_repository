(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6823],{54729:(V,$,s)=>{"use strict";s.d($,{g:()=>O});var e=s(96540),y=s(78263),b=s(6442),f=s(75942);const O=(A={},x={})=>{const{id:C="",...T}=A,{get:k}=(0,y.ry)(),{locale:a}=(0,b.A)(),F=(0,y.QM)(a,{sensitivity:"base"}),{data:u,error:S,isError:N,isLoading:g,refetch:R}=(0,f.useQuery)(["roles",C,T],async()=>{const{data:Q}=await k(`/admin/roles/${C??""}`,{params:T});return Q},x);return{roles:e.useMemo(()=>{let Q=[];return u&&(Array.isArray(u.data)?Q=u.data:Q=[u.data]),[...Q].sort((oe,ee)=>F.compare(oe.name,ee.name))},[u,F]),error:S,isError:N,isLoading:g,refetch:R}}},59945:(V,$,s)=>{"use strict";s.d($,{R:()=>b});var e=s(78263),y=s(75942);const b=(f={id:null},O={})=>{const{id:A,...x}=f,{get:C}=(0,e.ry)(),{data:T,error:k,isError:a,isLoading:F,refetch:u}=(0,y.useQuery)(["roles",A,"permissions",x],async()=>{const{data:{data:S}}=await C(`/admin/roles/${A}/permissions`,{params:x});return S},O);return{permissions:T,error:k,isError:a,isLoading:F,refetch:u}}},12370:(V,$,s)=>{"use strict";s.r($),s.d($,{CreatePage:()=>me,default:()=>Te});var e=s(96540),y=s(87304),b=s(72660),f=s(61160),O=s(78738),A=s(17433),x=s(28992),C=s(63188),T=s(94482),k=s(81799),a=s(7052),F=s(73758),u=s(78263),S=s(29915),N=s(81207),g=s(7425),R=s(62193),Y=s.n(R),Q=s(6442),oe=s(13561),ee=s(56347),v=s(67336),de=s(71526),Z=s(89800),te=s(91125),w=s(59945),ue=s(20627);const Le=ue.Ik().shape({name:ue.Yj().required(u.iW.required),description:ue.Yj().required(u.iW.required)}),ce=v.Ay.div`
  border: 1px solid ${({theme:X})=>X.colors.primary200};
  background: ${({theme:X})=>X.colors.primary100};
  padding: ${({theme:X})=>`${X.spaces[2]} ${X.spaces[4]}`};
  color: ${({theme:X})=>X.colors.primary600};
  border-radius: ${({theme:X})=>X.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,me=()=>{const X=(0,ee.W5)("/settings/roles/duplicate/:id"),Ae=(0,u.hN)(),{lockApp:K,unlockApp:J}=(0,u.MA)(),{formatMessage:j}=(0,Q.A)(),[_,re]=(0,e.useState)(!1),{replace:fe}=(0,ee.W6)(),z=(0,e.useRef)(),{trackUsage:xe}=(0,u.z1)(),{post:he,put:Fe}=(0,u.ry)(),{params:Ce}=X??{},{isLoading:We,data:Ne}=(0,te.K)(Ce?.id,{cacheTime:0}),{permissions:pe,isLoading:Pe}=(0,w.R)({id:Ce?.id},{cacheTime:0,enabled:!!Ce?.id}),ke=Se=>{K(),re(!0),Ce?.id?xe("willDuplicateRole"):xe("willCreateNewRole"),Promise.resolve(he("/admin/roles",Se)).then(async({data:ae})=>{const{permissionsToSend:le}=z.current.getPermissions();return Ce?.id?xe("didDuplicateRole"):xe("didCreateNewRole"),ae.data.id&&!Y()(le)&&await Fe(`/admin/roles/${ae.data.id}/permissions`,{permissions:le}),ae}).then(ae=>{re(!1),Ae({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),fe(`/settings/roles/${ae.data.id}`)}).catch(ae=>{console.error(ae),re(!1),Ae({type:"warning",message:{id:"notification.error"}})}).finally(()=>{J()})},Ke=`${j({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,N.A)(new Date,"PPP")}`;return e.createElement(y.g,null,e.createElement(u.x7,{name:"Roles"}),e.createElement(g.l1,{initialValues:{name:"",description:Ke},onSubmit:ke,validationSchema:Le,validateOnChange:!1},({handleSubmit:Se,values:ae,errors:le,handleReset:Ee,handleChange:ne})=>e.createElement(u.lV,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(b.Q,{primaryAction:e.createElement(f.s,{gap:2},e.createElement(O.$,{variant:"secondary",onClick:()=>{Ee(),z.current.resetForm()},size:"L"},j({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(O.$,{onClick:Se,loading:_,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(u.N_,{startIcon:e.createElement(S.A,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(A.s,null,e.createElement(f.s,{direction:"column",alignItems:"stretch",gap:6},e.createElement(x.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(f.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(f.s,{justifyContent:"space-between"},e.createElement(x.a,null,e.createElement(x.a,null,e.createElement(C.o,{fontWeight:"bold"},j({id:"global.details",defaultMessage:"Details"}))),e.createElement(x.a,null,e.createElement(C.o,{variant:"pi",textColor:"neutral600"},j({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ce,null,j({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(T.x,{gap:4},e.createElement(k.E,{col:6},e.createElement(a.k,{name:"name",error:le.name&&j({id:le.name}),label:j({id:"global.name",defaultMessage:"Name"}),onChange:ne,required:!0,value:ae.name})),e.createElement(k.E,{col:6},e.createElement(F.T,{label:j({id:"global.description",defaultMessage:"Description"}),id:"description",error:le.description&&j({id:le.description}),onChange:ne},ae.description))))),!We&&!Pe?e.createElement(x.a,{shadow:"filterShadow",hasRadius:!0},e.createElement(Z.A,{isFormDisabled:!1,ref:z,permissions:pe,layout:Ne})):e.createElement(x.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(u.Bl,null))))))))};function Te(){const X=(0,oe.d4)(de.G);return e.createElement(u.kz,{permissions:X.settings.roles.create},e.createElement(me,null))}},89800:(V,$,s)=>{"use strict";s.d($,{A:()=>ts});var e=s(96540),y=s(8820),b=s(98746),f=s(95066),O=s(78263),A=s(61448),x=s.n(A),C=s(62193),T=s.n(C),k=s(5556),a=s.n(k),F=s(6442),u=s(28992),S=s(33031),N=s.n(S),g=s(67336),R=s(61160),Y=s(85930),Q=s(93861),oe=s(68230),ee=s(58156),v=s.n(ee),de=s(90179),Z=s.n(de);const te=e.createContext(null),w=()=>e.useContext(te);var ue=s(78738),be=s(52530);const Le=g.Ay.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,ce=({onClick:t,className:n,hasConditions:r,variant:o})=>{const{formatMessage:i}=(0,F.A)();return e.createElement(Le,{hasConditions:r,className:n},e.createElement(ue.$,{variant:o,startIcon:e.createElement(be.A,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};ce.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},ce.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const me=(0,g.Ay)(ce)``;var Te=s(63168),X=s(86621),Ae=s(96230),K=s(63188),J=s(53459),j=s(93117),_=s(84877),re=s(41261),fe=s(94394),z=s.n(fe),xe=s(55808),he=s.n(xe),Fe=s(51368);const Ce=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),We=t=>t.reduce((n,[r,o])=>(n.push({label:he()(r),children:o.map(i=>({label:i.displayName,value:i.id}))}),n),[]),Ne=(t,n)=>t.map(([,r])=>r).flat().reduce((r,o)=>({[o.id]:n.includes(o.id),...r}),{}),pe=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:o,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,F.A)(),p=m=>{l(i,Ne(t,m))};return e.createElement(R.s,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(R.s,{paddingLeft:6,style:{width:180}},e.createElement(K.o,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(K.o,{variant:"sigma",title:o,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${o.toLowerCase()}`,defaultMessage:o})),e.createElement(K.o,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(u.a,{style:{maxWidth:430,width:"100%"}},e.createElement(Fe.B,{id:i,customizeContent:m=>`${m.length} currently selected`,onChange:p,value:Ce(c),options:We(t),disabled:n})))};pe.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const Pe=pe,ke=(t,n)=>t.reduce((r,o)=>(r[o.id]=v()(n,o.id,!1),r),{}),Ke=(t,n)=>t.reduce((r,o)=>{const[i,l]=o,c=ke(l,n);return r[i]=c,r},{}),ae=(t,n,r)=>t.reduce((o,i)=>{const l=v()(n,[...i.pathToConditionsObject,"conditions"],{}),c=Ke(r,l);return o[i.pathToConditionsObject.join("..")]=c,o},{}),le=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:o,onToggle:i})=>{const{formatMessage:l}=(0,F.A)(),{availableConditions:c,modifiedData:d,onChangeConditions:p}=w(),m=(0,e.useMemo)(()=>Object.entries(z()(c,"category")),[c]),h=t.filter(({isDisplayed:E,hasSomeActionsSelected:B,hasAllActionsSelected:L})=>E&&(B||L)),P=(0,e.useMemo)(()=>ae(h,d,m),[h,d,m]),[D,G]=(0,e.useState)(P),I=(E,B)=>{G((0,re.Ay)(L=>{L[E]||(L[E]={}),L[E].default||(L[E].default={}),L[E].default=B}))},M=()=>{const E=Object.entries(D).reduce((B,L)=>{const[W,se]=L,U=Object.values(se).reduce((q,H)=>({...q,...H}),{});return B[W]=U,B},{});p(E),i()};return e.createElement(Te.k,{labelledBy:"condition-modal-breadcrumbs",onClose:o},e.createElement(X.r,null,e.createElement(j.B,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((E,B,L)=>e.createElement(_.m,{isCurrent:B===L.length-1,key:E},he()(l({id:E,defaultMessage:E})))))),e.createElement(Ae.c,null,h.length===0&&e.createElement(K.o,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,h.map(({actionId:E,label:B,pathToConditionsObject:L},W)=>{const se=L.join("..");return e.createElement(Pe,{key:E,arrayOfOptionsGroupedByCategory:m,label:B,isFormDisabled:r,isGrey:W%2===0,name:se,onChange:I,value:v()(D,se,{})})}))),e.createElement(J.j,{startActions:e.createElement(ue.$,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(ue.$,{onClick:M},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};le.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const Ee=le,ne=`${120/16}rem`,Me=`${200/16}rem`,je=`${53/16}rem`,ze=g.Ay.div`
  width: ${ne};
`,at=(0,g.Ay)(R.s)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ye=({children:t,isCollapsable:n,isActive:r,isFormDisabled:o,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:p,value:m})=>{const{formatMessage:h}=(0,F.A)();return e.createElement(R.s,{alignItems:"center",paddingLeft:6,style:{width:Me,flexShrink:0}},e.createElement(u.a,{paddingRight:2},e.createElement(Y.J,{name:d,"aria-label":h({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:o,onValueChange:P=>l({target:{name:d,value:P}}),indeterminate:p,value:m})),e.createElement(at,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":r,onKeyDown:({key:P})=>(P==="Enter"||P===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(K.o,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},he()(i)),t))};Ye.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ye.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const it=(0,e.memo)(Ye);var Kt=s(3176),Vt=s.n(Kt),Gt=s(23805),Re=s.n(Gt);const lt=t=>Re()(t)?Vt()(Object.values(t).map(n=>Re()(n)?lt(n):n)):[],Ie=lt,we=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Oe=t=>{const n=we(t),r=Ie(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const o=r.every(l=>l),i=r.some(l=>l)&&!o;return{hasAllActionsSelected:o,hasSomeActionsSelected:i}};var Ht=s(52766);const Ve=(0,g.Ay)(Ht.A)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ge=t=>`
  ${K.o} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Ve} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ut=(t,n,r)=>t.map(({actionId:o,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:o,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...r.split(".."),o],p=T()(l)?[...d,"properties","enabled"]:d,m=p.join(".."),h=v()(n,[...d,"conditions"],null),P=Ie(h).some(M=>M);if(T()(l)){const M=v()(n,p,!1);return{actionId:o,checkboxName:m,hasAllActionsSelected:M,hasConditions:P,hasSomeActionsSelected:M,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const D=v()(n,p,null),{hasAllActionsSelected:G,hasSomeActionsSelected:I}=Oe(D);return{actionId:o,checkboxName:m,hasAllActionsSelected:G,hasConditions:P,hasSomeActionsSelected:I,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}}),Xe=(t,n)=>`
  ${ct} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${ut} {
    display: flex;
  }
  ${me} {
    display: block;
  }
  &:hover {
   ${Ge(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:o})=>Xe(r,o)}
  }
  
`,ct=g.Ay.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${je};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,zt=g.Ay.div`
  display: inline-flex;
  min-width: 100%;

  ${me} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Xe(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Xe(t,n)}
  }
`,dt=(0,g.Ay)(R.s)`
  width: ${ne};
  position: relative;
`,ut=(0,g.Ay)(u.a)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,mt=g.Ay.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Yt=(0,g.Ay)(u.a)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,pt=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:o,label:i,onClickToggle:l,pathToData:c})=>{const[d,p]=(0,e.useState)(!1),{formatMessage:m}=(0,F.A)(),{modifiedData:h,onChangeParentCheckbox:P,onChangeSimpleCheckbox:D}=w(),G=()=>{p(U=>!U)},I=()=>{p(!1)},M=v()(h,c.split(".."),{}),E=(0,e.useMemo)(()=>Object.keys(M).reduce((U,q)=>(U[q]=Z()(M[q],"conditions"),U),{}),[M]),{hasAllActionsSelected:B,hasSomeActionsSelected:L}=Oe(E),W=(0,e.useMemo)(()=>Ut(t,h,c),[t,h,c]),se=W.some(({hasConditions:U})=>U);return e.createElement(zt,{isActive:n},e.createElement(ct,{isGrey:r},e.createElement(it,{isCollapsable:!0,isFormDisabled:o,label:i,checkboxName:c,onChange:P,onClick:l,someChecked:L,value:B,isActive:n},e.createElement(ut,{paddingLeft:2},n?e.createElement(Q.A,null):e.createElement(oe.A,null))),e.createElement(R.s,{style:{flex:1}},W.map(({actionId:U,hasConditions:q,hasAllActionsSelected:H,hasSomeActionsSelected:ye,isDisplayed:Be,isParentCheckbox:ie,checkboxName:ve,label:He})=>Be?ie?e.createElement(dt,{key:U,justifyContent:"center",alignItems:"center"},q&&e.createElement(mt,null),e.createElement(Y.J,{disabled:o,name:ve,"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${He} ${i}`}),onValueChange:$e=>{P({target:{name:ve,value:$e}})},indeterminate:ye,value:H})):e.createElement(dt,{key:U,justifyContent:"center",alignItems:"center"},q&&e.createElement(mt,null),e.createElement(Y.J,{disabled:o,indeterminate:q,name:ve,onValueChange:$e=>{D({target:{name:ve,value:$e}})},value:H})):e.createElement(ze,{key:U}))),d&&e.createElement(Ee,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:W,isFormDisabled:o,onClosed:I,onToggle:G})),e.createElement(Yt,null,e.createElement(me,{onClick:G,hasConditions:se})))};pt.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const wt=pt,Xt=g.Ay.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,gt=()=>e.createElement(Xt,null,"*"),Jt=(t,n)=>t.map(r=>{const o=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:o}}),Qt=(0,g.Ay)(u.a)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Zt=g.Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Je=t=>e.createElement(Qt,null,e.createElement(Zt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Je.defaultProps={fill:"primary200"},Je.propTypes={fill:a().string};const qt=(0,e.memo)(Je),yt=(0,g.Ay)(R.s)`
  width: ${ne};
  position: relative;
`,_t=(0,g.Ay)(R.s)`
  height: ${je};
`,en=(0,g.Ay)(u.a)`
  padding-left: ${31/16}rem;
`,tn=(0,g.Ay)(u.a)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,nn=(0,g.Ay)(R.s)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ve} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ge(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ge(n)};
`,sn=g.Ay.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Qe=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:o,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,F.A)(),{modifiedData:p,onChangeParentCheckbox:m,onChangeSimpleCheckbox:h}=w(),[P,D]=(0,e.useState)(null),G=M=>{D(E=>E===M?null:M)},I=(0,e.useMemo)(()=>P?t.find(({value:M})=>M===P):null,[P,t]);return e.createElement(en,null,e.createElement(sn,null),t.map(({label:M,value:E,required:B,children:L},W)=>{const se=W+1<t.length,U=Array.isArray(L),q=P===E;return e.createElement(tn,{key:E,isVisible:se},e.createElement(_t,null,e.createElement(qt,{color:"primary200"}),e.createElement(R.s,{style:{flex:1}},e.createElement(nn,{level:r,isActive:q,isCollapsable:U},e.createElement(at,{alignItems:"center",isCollapsable:U,...U&&{onClick:()=>G(E),"aria-expanded":q,onKeyDown:({key:H})=>(H==="Enter"||H===" ")&&G(E),tabIndex:0,role:"button"},title:M},e.createElement(K.o,{ellipsis:!0},he()(M)),B&&e.createElement(gt,null),e.createElement(Ve,{$isActive:q}))),e.createElement(R.s,{style:{flex:1}},i.map(({actionId:H,label:ye,isActionRelatedToCurrentProperty:Be})=>{if(!Be)return e.createElement(ze,{key:H});const ie=[...o.split(".."),H,"properties",c,...l.split(".."),E],ve=v()(p,ie,!1);if(!L)return e.createElement(yt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(Y.J,{disabled:n,name:ie.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${M} ${ye}`}),onValueChange:De=>{h({target:{name:ie.join(".."),value:De}})},value:ve}));const{hasAllActionsSelected:He,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(yt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(Y.J,{key:ye,disabled:n,name:ie.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${M} ${ye}`}),onValueChange:De=>{m({target:{name:ie.join(".."),value:De}})},value:He,indeterminate:$e}))})))),I&&q&&e.createElement(u.a,{paddingBottom:2},e.createElement(Qe,{isFormDisabled:n,parentName:`${l}..${E}`,pathToDataFromActionRow:o,propertyActions:i,propertyName:c,recursiveLevel:r+1,childrenForm:I.children})))}))};Qe.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const on=(0,e.memo)(Qe),rn=t=>t.reduce((r,o)=>(o.isActionRelatedToCurrentProperty&&r.push(o.actionId),r),[]),an=(t,n,r,o,i)=>{const c=rn(t).reduce((d,p)=>{const m=[...r.split(".."),p,"properties",o,i],h=v()(n,m,!1);return d[p]=h,d},{});return Oe(c)},ft=(0,g.Ay)(R.s)`
  width: ${ne};
  position: relative;
`,ln=(0,g.Ay)(R.s)`
  height: ${je};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ve} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ge(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ge(n)};
`,Ze=({childrenForm:t,label:n,isFormDisabled:r,name:o,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:p})=>{const{formatMessage:m}=(0,F.A)(),[h,P]=(0,e.useState)(null),{modifiedData:D,onChangeCollectionTypeLeftActionRowCheckbox:G,onChangeParentCheckbox:I,onChangeSimpleCheckbox:M}=w(),E=h===o,B=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),L=B.length>0,W=(0,e.useCallback)(()=>{L&&P(H=>H===o?null:o)},[L,o]),se=({target:{value:H}})=>{G(l,d,o,H)},{hasAllActionsSelected:U,hasSomeActionsSelected:q}=(0,e.useMemo)(()=>an(c,D,l,d,o),[c,D,l,d,o]);return e.createElement(e.Fragment,null,e.createElement(ln,{alignItems:"center",isCollapsable:L,isActive:E,background:p?"neutral100":"neutral0"},e.createElement(R.s,null,e.createElement(it,{onChange:se,onClick:W,isCollapsable:L,isFormDisabled:r,label:n,someChecked:q,value:U,isActive:E},i&&e.createElement(gt,null),e.createElement(Ve,{$isActive:E})),e.createElement(R.s,null,c.map(({label:H,isActionRelatedToCurrentProperty:ye,actionId:Be})=>{if(!ye)return e.createElement(ze,{key:H});const ie=[...l.split(".."),Be,"properties",d,o];if(!L){const De=v()(D,ie,!1);return e.createElement(ft,{key:Be,justifyContent:"center",alignItems:"center"},e.createElement(Y.J,{disabled:r,name:ie.join(".."),"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${H}`}),onValueChange:ns=>{M({target:{name:ie.join(".."),value:ns}})},value:De}))}const ve=v()(D,ie,{}),{hasAllActionsSelected:He,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(ft,{key:H,justifyContent:"center",alignItems:"center"},e.createElement(Y.J,{disabled:r,name:ie.join(".."),onValueChange:De=>{I({target:{name:ie.join(".."),value:De}})},"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${H}`}),value:He,indeterminate:$e}))})))),E&&e.createElement(on,{childrenForm:B,isFormDisabled:r,parentName:o,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Ze.defaultProps={childrenForm:[],required:!1},Ze.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const cn=(0,e.memo)(Ze),ht=(0,g.Ay)(R.s)`
  width: ${ne};
  flex-shrink: 0;
`,dn=(0,g.Ay)(R.s)`
  width: ${Me};
  height: ${je};
  flex-shrink: 0;
`,Ct=({headers:t,label:n})=>{const{formatMessage:r}=(0,F.A)(),o=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(R.s,null,e.createElement(dn,{alignItems:"center",paddingLeft:6},e.createElement(K.o,{variant:"sigma",textColor:"neutral500"},o)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ht,{justifyContent:"center",key:i.label},e.createElement(K.o,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ht,{key:i.label})))};Ct.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const un=Ct,mn=(t,n)=>t.map(r=>{const o=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:o}}),pn=g.Ay.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Et=({availableActions:t,childrenForm:n,isFormDisabled:r,label:o,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>mn(t,l),[t,l]);return e.createElement(pn,null,e.createElement(un,{label:o,headers:c}),e.createElement(u.a,null,n.map(({children:d,label:p,value:m,required:h},P)=>e.createElement(cn,{childrenForm:d,key:m,label:p,isFormDisabled:r,name:m,required:h,propertyActions:c,pathToData:i,propertyName:l,isOdd:P%2===0}))))};Et.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const gn=Et,yn=g.Ay.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,vt=({allActions:t,contentTypeName:n,label:r,index:o,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:p})=>{const m=(0,e.useCallback)(()=>{c(n)},[n,c]),h=(0,e.useMemo)(()=>Jt(t,n),[t,n]);return e.createElement(yn,{isActive:i},e.createElement(wt,{availableActions:h,isActive:i,isGrey:o%2===0,isFormDisabled:l,label:r,onClickToggle:m,pathToData:d}),i&&p.map(({label:P,value:D,children:G})=>e.createElement(gn,{availableActions:h,childrenForm:G,isFormDisabled:l,label:P,pathToData:d,propertyName:D,key:D})))};vt.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const fn=vt,qe=({actions:t,isFormDisabled:n,pathToData:r,subjects:o})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return o.map(({uid:d,label:p,properties:m},h)=>e.createElement(fn,{allActions:t,key:d,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:n,index:h,onClickToggleCollapse:c,pathToData:`${r}..${d}`,properties:m}))};qe.defaultProps={actions:[],subjects:[]},qe.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const hn=(0,e.memo)(qe),Cn=t=>t.filter(({subjects:n})=>n&&n.length),En=t=>t.map(({actionId:n})=>n),vn=(t,n)=>t.reduce((r,o)=>(Object.keys(n).forEach(i=>{const l=v()(n,[i,o],{}),c={[i]:we(l)};r[o]?r[o]={...r[o],...c}:r[o]=c}),r),{}),bn=(t,n)=>{const r=En(t),o=vn(r,n);return Object.keys(o).reduce((l,c)=>(l[c]=Oe(o[c]),l),{})},An=(0,g.Ay)(R.s)`
  width: ${ne};
  flex-shrink: 0;
`,_e=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:o}=(0,F.A)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=w(),c=(0,e.useMemo)(()=>Cn(t),[t]),d=(0,e.useMemo)(()=>bn(c,i[r]),[i,c,r]);return e.createElement(u.a,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Me}},e.createElement(R.s,{gap:0},c.map(({label:p,actionId:m})=>e.createElement(An,{direction:"column",alignItems:"center",justifyContent:"center",key:m,gap:3},e.createElement(K.o,{variant:"sigma",textColor:"neutral500"},o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(Y.J,{disabled:n,onValueChange:h=>{l(r,m,h)},name:m,"aria-label":o({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:v()(d,[m,"hasAllActionsSelected"],!1),indeterminate:v()(d,[m,"hasSomeActionsSelected"],!1)})))))};_e.defaultProps={actions:[]},_e.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const xn=(0,e.memo)(_e),Rn=(0,g.Ay)(u.a)`
  overflow-x: auto;
`,bt=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:o}})=>{const i=N()([...o],"label");return e.createElement(Rn,{background:"neutral0"},e.createElement(xn,{actions:r,kind:n,isFormDisabled:t}),e.createElement(hn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};bt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const At=(0,e.memo)(bt),xt=({children:t,value:n})=>e.createElement(te.Provider,{value:n},t);xt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const Tn=xt;var Pn=s(98680),Sn=s(99752),Mn=s(79335),Rt=s(29464),On=s(94482),$n=s(81799);const Dn=(t,n,r)=>t.map(o=>{const i=[...r,o.action,"properties","enabled"],l=v()(n,i,!1),c=v()(n,[...r,o.action,"conditions"],{}),d=Ie(c).some(p=>p);return{...o,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:o.displayName,actionId:o.action,pathToConditionsObject:[...r,o.action]}}),Ln=t=>{const n=Object.entries(t).reduce((o,i)=>{const[l,{conditions:c}]=i;return o[l]=c,o},{});return Ie(n).some(o=>o)},jn=g.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,In=g.Ay.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Tt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:o,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:m}=w(),{formatMessage:h}=(0,F.A)(),P=v()(d,i,{}),D=(0,e.useMemo)(()=>Object.keys(P).reduce((W,se)=>(W[se]=we(P[se]),W),{}),[P]),{hasAllActionsSelected:G,hasSomeActionsSelected:I}=Oe(D),M=()=>{c(W=>!W)},E=()=>{c(!1)},B=Dn(o,d,i),L=Ln(v()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(u.a,null,e.createElement(R.s,{justifyContent:"space-between",alignItems:"center"},e.createElement(u.a,{paddingRight:4},e.createElement(K.o,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(jn,null),e.createElement(u.a,{paddingLeft:4},e.createElement(Rt.S,{name:i.join(".."),disabled:n,onValueChange:W=>{p({target:{name:i.join(".."),value:W}})},indeterminate:I,value:G},h({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(R.s,{paddingTop:6,paddingBottom:6},e.createElement(On.x,{gap:2,style:{flex:1}},B.map(({checkboxName:W,value:se,action:U,displayName:q,hasConditions:H})=>e.createElement($n.E,{col:3,key:U},e.createElement(In,{disabled:n,hasConditions:H},e.createElement(Rt.S,{name:W,disabled:n,onValueChange:ye=>{m({target:{name:W,value:ye}})},value:se},q))))),e.createElement(me,{hasConditions:L,onClick:M}))),l&&e.createElement(Ee,{headerBreadCrumbs:[t,r],actions:B,isFormDisabled:n,onClosed:E,onToggle:M}))};Tt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const Bn=Tt,et=({childrenForm:t,kind:n,name:r,isOpen:o,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:p}=(0,F.A)(),m=()=>{c(r)},h=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Pn.n,{expanded:o,onToggle:m,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Sn.P,{title:he()(h),description:`${p({id:"Settings.permissions.category"},{category:h})} ${n==="plugins"?"plugin":n}`}),e.createElement(Mn.u,null,e.createElement(u.a,{padding:6},t.map(({actions:P,subCategoryName:D,subCategoryId:G})=>e.createElement(Bn,{key:D,actions:P,categoryName:h,isFormDisabled:i,subCategoryName:D,pathToData:[...d,G]})))))};et.defaultProps={},et.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const Fn=et,Pt=({isFormDisabled:t,kind:n,layout:r})=>{const[o,i]=(0,e.useState)(null),l=c=>{i(c===o?null:c)};return e.createElement(u.a,{padding:6,background:"neutral0"},r.map(({category:c,categoryId:d,childrenForm:p},m)=>e.createElement(Fn,{key:c,childrenForm:p,kind:n,isFormDisabled:t,isOpen:o===c,isWhite:m%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};Pt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const St=Pt;var Wn=s(55364),Nn=s.n(Wn),kn=s(63560),ge=s.n(kn);const Mt=(t,n,r)=>t.find(o=>o.action===n&&o.subject===r),Ot=(t,n=[])=>t.reduce((r,o)=>(r[o.id]=n.indexOf(o.id)!==-1,r),{}),$t=({children:t},n,r="")=>t.reduce((o,i)=>{if(i.children)return{...o,[i.value]:$t(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return o[i.value]=l,o},{}),Kn=(t,n,r)=>t.reduce((o,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=v()(r,["properties",l.value],[]),d=$t(l,c);o.properties[i]=d}return o},{properties:{}}),Vn=(t,n)=>n.reduce((r,o)=>{const i=t.find(({uid:l})=>l===o)||null;return i&&(r[o]=i),r},{}),Dt=({subjects:t},n,r,o=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Vn(t,c);if(T()(d))return i;const p=Object.keys(d).reduce((m,h)=>{const{actionId:P,applyToProperties:D}=l,M=d[h].properties.map(({value:W})=>W).every(W=>(D||[]).indexOf(W)===-1),E=Mt(o,P,h),B=Ot(r,v()(E,"conditions",[]));if(T()(D)||M)return ge()(m,[h,P],{properties:{enabled:E!==void 0},conditions:B}),m;const L=Kn(D,d[h],E);return ge()(m,[h,P],{...L,conditions:B}),m},{});return Nn()(i,p)},{}),Gn=(t,n,r)=>t.reduce((o,i)=>{const l=Mt(r,i.action,null);return o[i.action]={properties:{enabled:l!==void 0},conditions:Ot(n,l?.conditions??[])},o},{}),Hn=(t,n,r)=>t.reduce((o,i)=>(o[i.subCategoryId]=Gn(i.actions,n,r),o),{}),Lt=(t,n,r=[])=>t.reduce((o,{categoryId:i,childrenForm:l})=>{const c=Hn(l,n,r);return o[i]=c,o},{}),jt=t=>t.split(" ").join("-"),It=(t,n)=>Object.entries(z()(t,n)).map(([r,o])=>({category:r,categoryId:jt(r),childrenForm:Object.entries(z()(o,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:jt(i),actions:l}))})),Un=(t,n)=>{const{conditions:r,sections:{collectionTypes:o,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:o,singleTypes:i,plugins:It(l,"plugin"),settings:It(c,"category")},p={collectionTypes:Dt(o,o.actions||[],r,n),singleTypes:Dt(i,i.actions||[],r,n),plugins:Lt(d.plugins,r,n),settings:Lt(d.settings,r,n)};return{initialData:p,modifiedData:p,layouts:d}};var zn=s(88055),tt=s.n(zn);const Bt=t=>Object.keys(t).reduce((n,r)=>{const o=t[r];if(Re()(o)&&!x()(o,"conditions"))return{...n,[r]:Bt(o)};if(Re()(o)&&x()(o,"conditions")&&!Ie(Z()(o,"conditions")).some(l=>l)){const l=Object.keys(o.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[r]:{...o,conditions:l}}}return n[r]=o,n},{}),nt=Bt,Ft=(t,n,r=!1)=>Object.keys(t).reduce((o,i)=>{const l=t[i];return i==="conditions"&&!r?(o[i]=l,o):Re()(l)?{...o,[i]:Ft(l,n,i==="fields")}:(o[i]=n,o)},{}),Ue=Ft,Yn={initialData:{},modifiedData:{},layouts:{}},wn=(t,n)=>(0,re.Ay)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:o,actionId:i,value:l}=n,c=["modifiedData",o];Object.keys(v()(t,c)).forEach(d=>{const p=v()(t,[...c,d,i],void 0);if(p){let m=Ue(p,l);if(!l&&m.conditions){const h=Ue(m.conditions,!1);m={...m,conditions:h}}ge()(r,[...c,d,i],m)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:o,propertyName:i,rowName:l,value:c}=n;let d=tt()(t.modifiedData);const p=o.split(".."),m=v()(d,p,{});Object.keys(m).forEach(h=>{if(x()(m[h],`properties.${i}`)){const P=v()(m,[h,"properties",i,l]),D=[...p,h,"properties",i,l];if(!Re()(P))ge()(d,D,c);else{const G=Ue(P,c);ge()(d,D,G)}}}),c||(d=nt(d)),ge()(r,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(o=>{const[i,l]=o;ge()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let o=tt()(t.modifiedData);ge()(o,[...n.keys.split("..")],n.value),n.value||(o=nt(o)),ge()(r,"modifiedData",o);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:o,value:i}=n,l=[...o.split("..")];let c=tt()(t.modifiedData);const d=v()(c,l,{}),p=Ue(d,i);ge()(c,l,p),i||(c=nt(c)),ge()(r,["modifiedData"],c);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),st=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Xn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:st(r),properties:{}}},Jn=t=>Object.values(t).reduce((n,r)=>{const o=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=Xn(l);return i.push(d),i},[]);return[...n,...o]},[]),Wt=t=>Object.values(t).reduce((n,r)=>{const o=Jn(r);return[...n,...o]},[]),Nt=(t,n="")=>Object.entries(t).reduce((r,o)=>{const[i,l]=o;return Re()(l)?[...r,...Nt(l,`${n}${i}.`)]:(l&&!Re()(l)&&r.push(`${n}${i}`),r)},[]),Qn=(t,n,{conditions:r,properties:o})=>Object.entries(o).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=Nt(d),i},{action:t,subject:n,conditions:st(r),properties:{}}),Zn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:st(r)}),qn=(t,n)=>Object.entries(n).reduce((o,i)=>{const[l,c]=i;if(!Ie(c).some(m=>m))return o;if(!c?.properties?.enabled){const m=Qn(l,t,c);return[...o,m]}if(!c.properties.enabled)return o;const p=Zn(l,t,c);return o.push(p),o},[]),kt=t=>Object.entries(t).reduce((r,o)=>{const[i,l]=o,c=qn(i,l);return[...r,...c]},[]),_n=t=>{const n=Wt(t.plugins),r=Wt(t.settings),o=kt(t.collectionTypes),i=kt(t.singleTypes);return[...n,...r,...o,...i]},es=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],ot=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},o)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(wn,Yn,()=>Un(t,r)),{formatMessage:p}=(0,F.A)();(0,e.useImperativeHandle)(o,()=>({getPermissions(){const I=(0,O.iv)(i.collectionTypes,c.collectionTypes),M=(0,O.iv)(i.singleTypes,c.singleTypes),E={...I,...M};let B;return T()(E)?B=!1:B=Object.values(E).some(L=>Object.values(L).some(W=>x()(W,"conditions"))),{permissionsToSend:_n(c),didUpdateConditions:B}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const m=(I,M,E,B)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:I,propertyName:M,rowName:E,value:B})},h=(I,M,E)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:I,actionId:M,value:E})},P=I=>{d({type:"ON_CHANGE_CONDITIONS",conditions:I})},D=(0,e.useCallback)(({target:{name:I,value:M}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:I,value:M})},[]),G=(0,e.useCallback)(({target:{name:I,value:M}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:I,value:M})},[]);return e.createElement(Tn,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:P,onChangeSimpleCheckbox:D,onChangeParentCheckbox:G,onChangeCollectionTypeLeftActionRowCheckbox:m,onChangeCollectionTypeGlobalActionCheckbox:h}},e.createElement(y.f,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(b.t,null,es.map(I=>e.createElement(b.o,{key:I.id},p({id:I.labelId,defaultMessage:I.defaultMessage})))),e.createElement(f.T,{style:{position:"relative"}},e.createElement(f.K,null,e.createElement(At,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(f.K,null,e.createElement(At,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(f.K,null,e.createElement(St,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(f.K,null,e.createElement(St,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});ot.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},ot.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const ts=(0,e.memo)(ot)},49659:(V,$,s)=>{"use strict";s.r($),s.d($,{default:()=>Ae});var e=s(96540),y=s(78263),b=s(13561),f=s(56347),O=s(71526),A=s(87304),x=s(72660),C=s(61160),T=s(78738),k=s(17433),a=s(28992),F=s(29915),u=s(7425),S=s(6442),N=s(54729),g=s(91125),R=s(59945),Y=s(89800),Q=s(63188),oe=s(94482),ee=s(81799),v=s(7052),de=s(73758),Z=s(5556),te=s.n(Z);const w=({disabled:K,role:J,values:j,errors:_,onChange:re,onBlur:fe})=>{const{formatMessage:z}=(0,S.A)();return e.createElement(a.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(C.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(C.s,{justifyContent:"space-between"},e.createElement(a.a,null,e.createElement(a.a,null,e.createElement(Q.o,{fontWeight:"bold"},J?J.name:z({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.a,null,e.createElement(Q.o,{textColor:"neutral500",variant:"pi"},J?J.description:z({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(T.$,{disabled:!0,variant:"secondary"},z({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:J.usersCount}))),e.createElement(oe.x,{gap:4},e.createElement(ee.E,{col:6},e.createElement(v.k,{disabled:K,name:"name",error:_.name&&z({id:_.name}),label:z({id:"global.name",defaultMessage:"Name"}),onChange:re,onBlur:fe,required:!0,value:j.name||""})),e.createElement(ee.E,{col:6},e.createElement(de.T,{disabled:K,label:z({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&z({id:_.name}),onChange:re,onBlur:fe},j.description||"")))))};w.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},w.propTypes={disabled:te().bool,errors:te().object.isRequired,onBlur:te().func.isRequired,onChange:te().func.isRequired,role:te().object,values:te().object};const ue=w;var be=s(20627);const ce=be.Ik().shape({name:be.Yj().required(y.iW.required)}),Te=()=>{const K=(0,y.hN)(),{formatMessage:J}=(0,S.A)(),{params:{id:j}}=(0,f.W5)("/settings/roles/:id"),{put:_}=(0,y.ry)(),[re,fe]=(0,e.useState)(!1),z=(0,e.useRef)(),{lockApp:xe,unlockApp:he}=(0,y.MA)(),{trackUsage:Fe}=(0,y.z1)(),{formatAPIError:Ce}=(0,y.wq)(),{isLoading:We,data:Ne}=(0,g.K)(j,{cacheTime:0}),{roles:[pe={}],isLoading:Pe,refetch:ke}=(0,N.g)({id:j},{cacheTime:0}),{permissions:Ke,isLoading:Se}=(0,R.R)({id:j},{cacheTime:0}),ae=async Ee=>{try{xe(),fe(!0);const{permissionsToSend:ne,didUpdateConditions:Me}=z.current.getPermissions();await _(`/admin/roles/${j}`,Ee),pe.code!=="strapi-super-admin"&&(await _(`/admin/roles/${j}/permissions`,{permissions:ne}),Me&&Fe("didUpdateConditions")),z.current.setFormAfterSubmit(),await ke(),K({type:"success",message:{id:"notification.success.saved"}})}catch(ne){K({type:"warning",message:Ce(ne)})}finally{fe(!1),he()}},le=!Pe&&pe.code==="strapi-super-admin";return e.createElement(A.g,null,e.createElement(y.x7,{name:"Roles"}),e.createElement(u.l1,{enableReinitialize:!0,initialValues:{name:pe.name,description:pe.description},onSubmit:ae,validationSchema:ce,validateOnChange:!1},({handleSubmit:Ee,values:ne,errors:Me,handleChange:je,handleBlur:rt})=>e.createElement("form",{onSubmit:Ee},e.createElement(x.Q,{primaryAction:e.createElement(C.s,{gap:2},e.createElement(T.$,{disabled:pe.code==="strapi-super-admin",onClick:Ee,loading:re,size:"L"},J({id:"global.save",defaultMessage:"Save"}))),title:J({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:J({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(y.N_,{startIcon:e.createElement(F.A,null),to:"/settings/roles"},J({id:"global.back",defaultMessage:"Back"}))}),e.createElement(k.s,null,e.createElement(C.s,{direction:"column",alignItems:"stretch",gap:6},e.createElement(ue,{isLoading:Pe||Se,disabled:le,errors:Me,values:ne,onChange:je,onBlur:rt,role:pe}),!We&&!Pe&&!Se?e.createElement(a.a,{shadow:"filterShadow",hasRadius:!0},e.createElement(Y.A,{isFormDisabled:le,permissions:Ke,ref:z,layout:Ne})):e.createElement(a.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(y.Bl,null)))))))},Ae=()=>{const K=(0,b.d4)(O.G),{isLoading:J,allowedActions:{canRead:j,canUpdate:_}}=(0,y.ec)({read:K.settings.roles.read,update:K.settings.roles.update});return J?e.createElement(y.Bl,null):!j&&!_?e.createElement(f.rd,{to:"/"}):e.createElement(Te,null)}},91125:(V,$,s)=>{"use strict";s.d($,{K:()=>b});var e=s(78263),y=s(75942);const b=(f,O={})=>{const{get:A}=(0,e.ry)(),{data:x,error:C,isError:T,isLoading:k}=(0,y.useQuery)(["permissions",f],async()=>{const{data:{data:a}}=await A("/admin/permissions",{params:{role:f}});return a},O);return{data:x,error:C,isError:T,isLoading:k}}},63945:V=>{function $(s,e,y,b){for(var f=-1,O=s==null?0:s.length;++f<O;){var A=s[f];e(b,A,y(A),s)}return b}V.exports=$},62429:(V,$,s)=>{var e=s(80909);function y(b,f,O,A){return e(b,function(x,C,T){f(A,x,O(x),T)}),A}V.exports=y},42e3:(V,$,s)=>{var e=s(63945),y=s(62429),b=s(15389),f=s(56449);function O(A,x){return function(C,T){var k=f(C)?e:y,a=x?x():{};return k(C,A,b(T,2),a)}}V.exports=O},3176:(V,$,s)=>{var e=s(83120),y=1/0;function b(f){var O=f==null?0:f.length;return O?e(f,y):[]}V.exports=b},94394:(V,$,s)=>{var e=s(43360),y=s(42e3),b=Object.prototype,f=b.hasOwnProperty,O=y(function(A,x,C){f.call(A,C)?A[C].push(x):e(A,C,[x])});V.exports=O},98680:(V,$,s)=>{"use strict";s.d($,{I:()=>k,n:()=>F});var e=s(74848),y=s(96540),b=s(67336),f=s(61873),O=s(60334),A=s(63188),x=s(61160),C=s(28992);const T=({theme:u,expanded:S,variant:N,disabled:g,error:R})=>R?`1px solid ${u.colors.danger600} !important`:g?`1px solid ${u.colors.neutral150}`:S?`1px solid ${u.colors.primary600}`:N==="primary"?`1px solid ${u.colors.neutral0}`:`1px solid ${u.colors.neutral100}`,k=(0,b.Ay)(A.o)``,a=(0,b.Ay)(C.a)`
  border: ${T};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:u})=>u.colors.primary600};

    ${k} {
      color: ${({theme:u,expanded:S})=>S?void 0:u.colors.primary700};
    }

    ${A.o} {
      color: ${({theme:u,expanded:S})=>S?void 0:u.colors.primary600};
    }

    & > ${x.s} {
      background: ${({theme:u})=>u.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:u})=>u.colors.primary200};
    }
  }
`,F=({children:u,disabled:S=!1,error:N,expanded:g=!1,hasErrorMessage:R=!0,id:Y,onToggle:Q,toggle:oe,size:ee="M",variant:v="primary",shadow:de})=>{const Z=(0,O.B)(Y),te=y.useMemo(()=>({expanded:g,onToggle:Q,toggle:oe,id:Z,size:ee,variant:v,disabled:S}),[S,g,Z,Q,ee,oe,v]);return(0,e.jsxs)(f.C.Provider,{value:te,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:S,"aria-disabled":S,expanded:g,hasRadius:!0,variant:v,error:N,shadow:de,children:u}),N&&R&&(0,e.jsx)(C.a,{paddingTop:1,children:(0,e.jsx)(A.o,{variant:"pi",textColor:"danger600",children:N})})]})}},79335:(V,$,s)=>{"use strict";s.d($,{u:()=>f});var e=s(74848),y=s(61873),b=s(28992);const f=({children:O,...A})=>{const{expanded:x,id:C}=(0,y.O)();if(!x)return null;const T=`accordion-content-${C}`,k=`accordion-label-${C}`,a=`accordion-desc-${C}`;return(0,e.jsx)(b.a,{role:"region",id:T,"aria-labelledby":k,"aria-describedby":a,...A,children:O})}},61873:(V,$,s)=>{"use strict";s.d($,{C:()=>y,O:()=>b});var e=s(96540);const y=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),b=()=>(0,e.useContext)(y)},99752:(V,$,s)=>{"use strict";s.d($,{P:()=>u});var e=s(74848),y=s(52766),b=s(67336),f=s(98680),O=s(61873);const A=({expanded:S,disabled:N,variant:g})=>{let R="neutral100";return S?R="primary100":N?R="neutral150":g==="primary"&&(R="neutral0"),R};var x=s(93304),C=s(75608),T=s(61160),k=s(63188);const a=(0,b.Ay)(x.Q)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:S,expanded:N})=>N?S.colors.primary600:S.colors.neutral500};
    }
  }
`,F=(0,b.Ay)(T.s)`
  min-height: ${({theme:S,size:N})=>S.sizes.accordions[N]};
  border-radius: ${({theme:S,expanded:N})=>N?`${S.borderRadius} ${S.borderRadius} 0 0`:S.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:S})=>S.colors.primary600};
      }
    }
  }
`,u=({title:S,description:N,as:g="span",togglePosition:R="right",action:Y,...Q})=>{const{onToggle:oe,toggle:ee,expanded:v,id:de,size:Z,variant:te,disabled:w}=(0,O.O)(),ue=`accordion-content-${de}`,be=`accordion-label-${de}`,Le=`accordion-desc-${de}`,ce=Z==="M"?6:4,me=Z==="M"?ce:ce-2,Te=A({expanded:v,disabled:w,variant:te}),Ae={as:g,fontWeight:Z==="S"?"bold":void 0,id:be,textColor:v?"primary600":"neutral700",ellipsis:!0,variant:Z==="M"?"delta":void 0},K=v?"primary600":"neutral600",J=v?"primary200":"neutral200",j=Z==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{w||(ee&&!oe?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ee()):oe&&oe())},re=(0,e.jsx)(T.s,{justifyContent:"center",borderRadius:"50%",height:j,width:j,transform:v?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:J,cursor:w?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(C.I,{as:y.A,width:Z==="M"?`${11/16}rem`:`${8/16}rem`,color:v?"primary600":"neutral600"})});return(0,e.jsx)(F,{paddingBottom:me,paddingLeft:ce,paddingRight:ce,paddingTop:me,background:Te,expanded:v,size:Z,justifyContent:"space-between",cursor:w?"not-allowed":"",children:(0,e.jsxs)(T.s,{gap:3,flex:1,maxWidth:"100%",children:[R==="left"&&re,(0,e.jsx)(a,{onClick:_,"aria-disabled":w,"aria-expanded":v,"aria-controls":ue,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:v,type:"button",flex:1,minWidth:0,...Q,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f.I,{...Ae,children:S}),N&&(0,e.jsx)(k.o,{as:"p",id:Le,textColor:K,children:N})]})}),R==="right"&&(0,e.jsxs)(T.s,{gap:3,children:[re,Y]}),R==="left"&&Y]})})}},51368:(V,$,s)=>{"use strict";s.d($,{B:()=>f});var e=s(74848),y=s(67336),b=s(56977);const f=({options:A,...x})=>(0,e.jsx)(b.KF,{...x,children:A.map(C=>"children"in C?(0,e.jsx)(b.np,{label:C.label,values:C.children.map(T=>T.value.toString()),children:C.children.map(T=>(0,e.jsx)(O,{value:T.value,children:T.label},T.value))},C.label):(0,e.jsx)(b.fe,{value:C.value,children:C.label},C.value))}),O=(0,y.Ay)(b.fe)`
  padding-left: ${({theme:A})=>A.spaces[7]};
`},93117:(V,$,s)=>{"use strict";s.d($,{B:()=>T});var e=s(74848),y=s(96540),b=s(67336),f=s(17715),O=s(17937);const A=()=>(0,e.jsx)(f.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(O.o,{variant:"pi",textColor:"neutral500",children:"/"})});A.displayName="Divider";var x=s(6803);const C=(0,b.Ay)(x.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:k})=>`calc(-1*${k.spaces[2]})`};
  }
`,T=({label:k,children:a,...F})=>{const u=y.Children.toArray(a);return(0,e.jsx)(f.a,{"aria-label":k,...F,children:(0,e.jsx)(C,{as:"ol",children:y.Children.map(u,(S,N)=>{const g=u.length>1&&N+1<u.length;return(0,e.jsxs)(x.s,{inline:!0,as:"li",children:[S,g&&(0,e.jsx)(A,{})]})})})})};T.displayName="Breadcrumbs"},84877:(V,$,s)=>{"use strict";s.d($,{m:()=>f});var e=s(74848),y=s(17715),b=s(17937);const f=({children:O,isCurrent:A=!1,...x})=>(0,e.jsx)(y.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)(b.o,{variant:"pi",textColor:"neutral800",fontWeight:A?"bold":"normal","aria-current":A,...x,children:O})});f.displayName="Crumb"}}]);
