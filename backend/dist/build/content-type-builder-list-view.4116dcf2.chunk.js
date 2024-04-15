"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5472],{72019:(oe,O,n)=>{n.r(O),n.d(O,{default:()=>lt});var e=n(96540),v=n(72660),m=n(61160),j=n(78738),X=n(17433),g=n(28992),r=n(78263),M=n(23165),W=n(4255),D=n(23822),G=n(29915),z=n(58156),l=n.n(z),f=n(61448),x=n.n(f),b=n(2404),T=n.n(b),I=n(55808),Z=n.n(I),k=n(6442),Q=n(56347),J=n(64060),ge=n(17186),fe=n(12846),_=n(25392),A=n(63188),Be=n(32033),je=n(5556),o=n.n(je),H=n(44033),ye=n(65387),C=n(45489),$=n(67336);const he=$.Ay.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,r.a8)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,r.a8)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:s})=>a?`background-color: ${s.colors.primary200};`:t?`background-color: ${s.colors.primary200};`:`background: ${s.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function ae({customRowComponent:t,component:a,isFromDynamicZone:s,isNestedInDZComponent:i,firstLoopComponentUid:u}){const{modifiedData:d}=(0,H.A)(),{schema:{attributes:y}}=l()(d,["components",a],{schema:{attributes:[]}});return e.createElement(he,{isChildOfDynamicZone:s,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(Te,{customRowComponent:t,items:y,targetUid:a,firstLoopComponentUid:u||a,editTarget:"components",isFromDynamicZone:s,isNestedInDZComponent:i,isSub:!0,secondLoopComponentUid:u?a:null})))}ae.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},ae.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const Ee=ae;var Ie=n(11339),Fe=n(75608),be=n(45492);function re({isActive:t,icon:a}){return e.createElement(m.s,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%"},e.createElement(Fe.I,{as:be.z[a]||be.z.cube,height:5,width:5}))}re.defaultProps={isActive:!1,icon:"Cube"},re.propTypes={isActive:o().bool,icon:o().string};const Ce=(0,$.Ay)(g.a)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,r.a8)(8)};

  svg {
    width: ${(0,r.a8)(10)};
    height: ${(0,r.a8)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Pe=(0,$.Ay)(m.s)`
  width: ${(0,r.a8)(140)};
  height: ${(0,r.a8)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${Ce} {
      display: block;
    }

    ${A.o} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`;function le({component:t,dzName:a,index:s,isActive:i,isInDevelopmentMode:u,onClick:d}){const{modifiedData:y,removeComponentFromDynamicZone:F}=(0,H.A)(),{schema:{icon:L,displayName:R}}=l()(y,["components",t],{schema:{}}),h=c=>{c.stopPropagation(),F(a,s)};return e.createElement(Pe,{alignItems:"center",direction:"column",className:i?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:d,role:"tab",tabIndex:i?0:-1,cursor:"pointer","aria-selected":i,"aria-controls":`dz-${a}-panel-${s}`,id:`dz-${a}-tab-${s}`},e.createElement(re,{icon:L,isActive:i}),e.createElement(g.a,{marginTop:1,maxWidth:"100%"},e.createElement(A.o,{variant:"pi",fontWeight:"bold",ellipsis:!0},R)),u&&e.createElement(Ce,{as:"button",onClick:h},e.createElement(Ie.A,null)))}le.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},le.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const ke=le,Se=(0,$.Ay)(M.A)`
  width: ${(0,r.a8)(32)};
  height: ${(0,r.a8)(32)};
  padding: ${(0,r.a8)(9)};
  border-radius: ${(0,r.a8)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,we=(0,$.Ay)(g.a)`
  height: ${(0,r.a8)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Oe=(0,$.Ay)(m.s)`
  width: 100%;
  overflow-x: auto;
`,We=(0,$.Ay)(g.a)`
  padding-top: ${(0,r.a8)(90)};
`,Ue=(0,$.Ay)(m.s)`
  flex-shrink: 0;
  width: ${(0,r.a8)(140)};
  height: ${(0,r.a8)(80)};
  justify-content: center;
  align-items: center;
`;function se({customRowComponent:t,components:a,addComponent:s,name:i,targetUid:u}){const{isInDevelopmentMode:d}=(0,H.A)(),[y,F]=(0,e.useState)(0),{formatMessage:L}=(0,k.A)(),R=c=>{y!==c&&F(c)},h=()=>{s(i)};return e.createElement(he,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(we,{paddingLeft:8},e.createElement(Oe,{gap:2},d&&e.createElement("button",{type:"button",onClick:h},e.createElement(Ue,{direction:"column",alignItems:"stretch",gap:1},e.createElement(Se,null),e.createElement(A.o,{variant:"pi",fontWeight:"bold",textColor:"primary600"},L({id:(0,C.A)("button.component.add"),defaultMessage:"Add a component"})))),e.createElement(m.s,{role:"tablist",gap:2},a.map((c,p)=>e.createElement(ke,{key:c,dzName:i,index:p,component:c,isActive:y===p,isInDevelopmentMode:d,onClick:()=>R(p)}))))),e.createElement(We,null,a.map((c,p)=>{const E={customRowComponent:t,component:c};return e.createElement(g.a,{id:`dz-${i}-panel-${p}`,role:"tabpanel",tabindex:0,"aria-labelledby":`dz-${i}-tab-${p}`,key:c,style:{display:y===p?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(Ee,{...E,isFromDynamicZone:!0,targetUid:u,key:c}))))}))))}se.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},se.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const Ne=se,ze=(0,$.Ay)(g.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,Ze=(0,$.Ay)(g.a)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,ve=({children:t,icon:a,color:s,...i})=>e.createElement(Ze,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...i},e.createElement(m.s,null,e.createElement(ze,{color:s,"aria-hidden":!0,background:`${s}200`},a),e.createElement(g.a,{paddingLeft:3},e.createElement(A.o,{variant:"pi",fontWeight:"bold",textColor:`${s}600`},t))));ve.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const Ke=ve,Ve=(0,$.Ay)(g.a)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`;function ie({addComponentToDZ:t,customRowComponent:a,editTarget:s,firstLoopComponentUid:i,isFromDynamicZone:u,isMain:d,isNestedInDZComponent:y,isSub:F,items:L,secondLoopComponentUid:R,targetUid:h}){const{formatMessage:c}=(0,k.A)(),{trackUsage:p}=(0,r.z1)(),{isInDevelopmentMode:E,modifiedData:K,isInContentTypeView:S}=(0,H.A)(),{onOpenModalAddField:U}=(0,ye.A)(),P=()=>{p("hasClickedCTBAddFieldBanner"),U({forTarget:s,targetUid:h})};return h?L.length===0&&d?e.createElement(J.X,{colCount:2,rowCount:2},e.createElement(ge.d,null,e.createElement(fe.Tr,null,e.createElement(_.Th,null,e.createElement(A.o,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(A.o,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(r.m5,{action:e.createElement(j.$,{onClick:P,size:"L",startIcon:e.createElement(M.A,null),variant:"secondary"},c({id:(0,C.A)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:S?{id:(0,C.A)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,C.A)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(Ve,null,e.createElement(g.a,{paddingLeft:6,paddingRight:d?6:0,...d&&{style:{overflowX:"auto"}}},e.createElement("table",null,d&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(A.o,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(A.o,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,L.map(w=>{const{type:V}=w,Y=a;return e.createElement(e.Fragment,{key:w.name},e.createElement(Y,{...w,isNestedInDZComponent:y,targetUid:h,editTarget:s,firstLoopComponentUid:i,isFromDynamicZone:u,secondLoopComponentUid:R}),V==="component"&&e.createElement(Ee,{...w,customRowComponent:a,targetUid:h,isNestedInDZComponent:u,editTarget:s,firstLoopComponentUid:i}),V==="dynamiczone"&&e.createElement(Ne,{...w,customRowComponent:a,addComponent:t,targetUid:h}))})))),d&&E&&e.createElement(Be.S,{icon:e.createElement(M.A,null),onClick:P},c({id:(0,C.A)(`form.button.add.field.to.${K.contentType?K.contentType.schema.kind:s||"collectionType"}`),defaultMessage:"Add another field"})),F&&E&&e.createElement(Ke,{icon:e.createElement(M.A,null),onClick:P,color:u?"primary":"neutral"},c({id:(0,C.A)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(J.X,{colCount:2,rowCount:2},e.createElement(ge.d,null,e.createElement(fe.Tr,null,e.createElement(_.Th,null,e.createElement(A.o,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(A.o,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(r.m5,{colSpan:2,content:{id:(0,C.A)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}ie.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},ie.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const Te=ie;var xe=n(98528),He=n(95709),Xe=n(7292);const Ge=(0,$.Ay)(g.a)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,Qe=$.Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,Ae=t=>e.createElement(Ge,null,e.createElement(Qe,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ae.propTypes={color:o().string.isRequired};const Je=Ae;var Ye=n(82310);const ce=({content:t})=>Z()(t);ce.defaultProps={content:null},ce.propTypes={content:o().string};const qe=ce,_e=(0,$.Ay)(g.a)`
  position: relative;
`,de=({type:t,customField:a,repeatable:s})=>{const{formatMessage:i}=(0,k.A)();let u=t;return["integer","biginteger","float","decimal"].includes(t)?u="number":["string"].includes(t)&&(u="text"),a?e.createElement(A.o,null,i({id:(0,C.A)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(A.o,null,i({id:(0,C.A)(`attribute.${u}`),defaultMessage:t}),"\xA0",s&&i({id:(0,C.A)("component.repeatable"),defaultMessage:"(repeatable)"}))};de.defaultProps={customField:null,repeatable:!1},de.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const et=de;function me({configurable:t,customField:a,editTarget:s,firstLoopComponentUid:i,isFromDynamicZone:u,name:d,onClick:y,relation:F,repeatable:L,secondLoopComponentUid:R,target:h,targetUid:c,type:p}){const{contentTypes:E,isInDevelopmentMode:K,removeAttribute:S}=(0,H.A)(),{formatMessage:U}=(0,k.A)(),P=p==="relation"&&F.includes("morph"),w=["integer","biginteger","float","decimal"].includes(p)?"number":p,V=l()(E,[h],{}),Y=l()(V,["schema","displayName"],""),q=l()(V,"plugin"),pe=h?"relation":w,ee=()=>{P||t!==!1&&y(s,R||i||c,d,p,a)};let N;return R&&i?N=2:i?N=1:N=0,e.createElement(_e,{as:"tr",...(0,r.qM)({fn:ee,condition:K&&t&&!P})},e.createElement("td",{style:{position:"relative"}},N!==0&&e.createElement(Je,{color:u?"primary200":"neutral150"}),e.createElement(m.s,{paddingLeft:2,gap:4},e.createElement(Ye.A,{type:pe,customField:a}),e.createElement(A.o,{fontWeight:"bold"},d))),e.createElement("td",null,h?e.createElement(A.o,null,U({id:(0,C.A)(`modelPage.attribute.${P?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(qe,{content:Y}),"\xA0",q&&`(${U({id:(0,C.A)("from"),defaultMessage:"from"})}: ${q})`)):e.createElement(et,{type:p,customField:a,repeatable:L})),e.createElement("td",null,K?e.createElement(m.s,{justifyContent:"flex-end",...r.dG},t?e.createElement(m.s,{gap:1},!P&&e.createElement(xe.K,{onClick:ee,label:`${U({id:"app.utils.edit",defaultMessage:"Edit"})} ${d}`,noBorder:!0,icon:e.createElement(D.A,null)}),e.createElement(xe.K,{onClick:te=>{te.stopPropagation(),S(s,d,R||i||"")},label:`${U({id:"global.delete",defaultMessage:"Delete"})} ${d}`,noBorder:!0,icon:e.createElement(He.A,null)})):e.createElement(Xe.A,null)):e.createElement(g.a,{height:(0,r.a8)(32)})))}me.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},me.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const tt=(0,e.memo)(me),nt=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a};var ot=n(6592);const at={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},ue=({disabled:t,isTemporary:a,isInContentTypeView:s,contentTypeKind:i,targetUid:u})=>{const{formatMessage:d}=(0,k.A)(),{push:y}=(0,Q.W6)(),{collectionTypesConfigurations:F,componentsConfigurations:L,singleTypesConfigurations:R}=at,h=d({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let c=F;const p=()=>(a||y(s?`/content-manager/collectionType/${u}/configurations/edit`:`/content-manager/components/${u}/configurations/edit`),!1);return s&&i==="singleType"&&(c=R),s||(c=L),e.createElement(r.d4,{permissions:c},e.createElement(j.$,{startIcon:e.createElement(ot.A,null),variant:"tertiary",onClick:p,disabled:a||t},h))};ue.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},ue.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const rt=(0,e.memo)(ue),lt=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:s,isInContentTypeView:i,submitData:u}=(0,H.A)(),{formatMessage:d}=(0,k.A)(),{trackUsage:y}=(0,r.z1)(),F=(0,Q.W5)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:L,onOpenModalAddField:R,onOpenModalEditField:h,onOpenModalEditSchema:c,onOpenModalEditCustomField:p}=(0,ye.A)(),E=i?"contentType":"component",K=[E,"schema","attributes"],S=l()(a,[E,"uid"]),U=l()(a,[E,"isTemporary"],!1),P=l()(a,[E,"schema","kind"],null),w=l()(a,K,[]),V=x()(t,[E,"plugin"]),Y=!T()(a,t),q=i?"contentType":"component",pe=B=>{L({dynamicZoneTarget:B,targetUid:S})},ee=async(B,$e,Me,De,Re)=>{const Le=nt(De);Re?p({forTarget:B,targetUid:$e,attributeName:Me,attributeType:Le,customFieldUid:Re}):h({forTarget:B,targetUid:$e,attributeName:Me,attributeType:Le,step:De==="component"?"2":null})};let N=l()(a,[E,"schema","displayName"],"");const te=l()(a,[E,"schema","kind"],""),ne=F?.params.currentUID==="create-content-type";!N&&ne&&(N=d({id:(0,C.A)("button.model.create"),defaultMessage:"Create new collection type"}));const st=()=>{const B=te||E;B==="collectionType"&&y("willEditNameOfContentType"),B==="singleType"&&y("willEditNameOfSingleType"),c({modalType:E,forTarget:E,targetUid:S,kind:B})};return e.createElement(e.Fragment,null,e.createElement(Q.XG,{message:B=>B.hash==="#back"?!1:d({id:(0,C.A)("prompt.unsaved")}),when:Y}),e.createElement(v.Q,{id:"title",primaryAction:s&&e.createElement(m.s,{gap:2},!ne&&e.createElement(j.$,{startIcon:e.createElement(M.A,null),variant:"secondary",onClick:()=>{R({forTarget:q,targetUid:S})}},d({id:(0,C.A)("button.attributes.add.another"),defaultMessage:"Add another field"})),e.createElement(j.$,{startIcon:e.createElement(W.A,null),onClick:()=>u(),type:"submit",disabled:T()(a,t)},d({id:"global.save",defaultMessage:"Save"}))),secondaryAction:s&&!V&&!ne&&e.createElement(j.$,{startIcon:e.createElement(D.A,null),variant:"tertiary",onClick:st},d({id:"app.utils.edit",defaultMessage:"Edit"})),title:Z()(N),subtitle:d({id:(0,C.A)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(r.N_,{startIcon:e.createElement(G.A,null),to:"/plugins/content-type-builder/"},d({id:"global.back",defaultMessage:"Back"}))}),e.createElement(X.s,null,e.createElement(m.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(m.s,{justifyContent:"flex-end"},e.createElement(m.s,{gap:2},e.createElement(rt,{key:"link-to-cm-settings-view",targetUid:S,isTemporary:U,isInContentTypeView:i,contentTypeKind:P,disabled:ne}))),e.createElement(g.a,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(Te,{items:w,customRowComponent:B=>e.createElement(tt,{...B,onClick:ee}),addComponentToDZ:pe,targetUid:S,editTarget:q,isMain:!0})))))}},17433:(oe,O,n)=>{n.d(O,{s:()=>m});var e=n(74848),v=n(28992);const m=({children:j})=>(0,e.jsx)(v.a,{paddingLeft:10,paddingRight:10,children:j})},72660:(oe,O,n)=>{n.d(O,{$:()=>z,Q:()=>D});var e=n(74848),v=n(96540),m=n(67336);const j=l=>{const f=(0,v.useRef)(null),[x,b]=(0,v.useState)(!0),T=([I])=>{b(I.isIntersecting)};return(0,v.useEffect)(()=>{const I=f.current,Z=new IntersectionObserver(T,l);return I&&Z.observe(f.current),()=>{I&&Z.disconnect()}},[f,l]),[f,x]};var X=n(10263);const g=(l,f)=>{const x=(0,X.c)(f);(0,v.useLayoutEffect)(()=>{const b=new ResizeObserver(x);return Array.isArray(l)?l.forEach(T=>{T.current&&b.observe(T.current)}):l.current&&b.observe(l.current),()=>{b.disconnect()}},[l,x])};var r=n(28992),M=n(61160),W=n(63188);const D=l=>{const f=(0,v.useRef)(null),[x,b]=(0,v.useState)(null),[T,I]=j({root:null,rootMargin:"0px",threshold:0});return g(T,()=>{T.current&&b(T.current.getBoundingClientRect())}),(0,v.useEffect)(()=>{f.current&&b(f.current.getBoundingClientRect())},[f]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:x?.height},ref:T,children:I&&(0,e.jsx)(z,{ref:f,...l})}),!I&&(0,e.jsx)(z,{...l,sticky:!0,width:x?.width})]})};D.displayName="HeaderLayout";const G=(0,m.Ay)(r.a)`
  width: ${({width:l})=>l?`${l/16}rem`:void 0};
  z-index: ${({theme:l})=>l.zIndices[1]};
`,z=v.forwardRef(({navigationAction:l,primaryAction:f,secondaryAction:x,subtitle:b,title:T,sticky:I,width:Z,...k},Q)=>{const J=typeof b=="string";return I?(0,e.jsx)(G,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(M.s,{justifyContent:"space-between",children:[(0,e.jsxs)(M.s,{children:[l&&(0,e.jsx)(r.a,{paddingRight:3,children:l}),(0,e.jsxs)(r.a,{children:[(0,e.jsx)(W.o,{variant:"beta",as:"h1",...k,children:T}),J?(0,e.jsx)(W.o,{variant:"pi",textColor:"neutral600",children:b}):b]}),x?(0,e.jsx)(r.a,{paddingLeft:4,children:x}):null]}),(0,e.jsx)(M.s,{children:f?(0,e.jsx)(r.a,{paddingLeft:2,children:f}):void 0})]})}):(0,e.jsxs)(r.a,{ref:Q,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:l?6:8,background:"neutral100","data-strapi-header":!0,children:[l?(0,e.jsx)(r.a,{paddingBottom:2,children:l}):null,(0,e.jsxs)(M.s,{justifyContent:"space-between",children:[(0,e.jsxs)(M.s,{minWidth:0,children:[(0,e.jsx)(W.o,{as:"h1",variant:"alpha",...k,children:T}),x?(0,e.jsx)(r.a,{paddingLeft:4,children:x}):null]}),f]}),J?(0,e.jsx)(W.o,{variant:"epsilon",textColor:"neutral600",as:"p",children:b}):b]})})},32033:(oe,O,n)=>{n.d(O,{S:()=>W});var e=n(74848),v=n(67336),m=n(28992),j=n(64360),X=n(61160),g=n(63188);const r=(0,v.Ay)(m.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:D})=>D.colors.primary600};
  }
`,M=(0,v.Ay)(m.a)`
  border-radius: 0 0 ${({theme:D})=>D.borderRadius} ${({theme:D})=>D.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,W=({children:D,icon:G,...z})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(j.c,{}),(0,e.jsx)(M,{as:"button",background:"primary100",padding:5,...z,children:(0,e.jsxs)(X.s,{children:[(0,e.jsx)(r,{"aria-hidden":!0,background:"primary200",children:G}),(0,e.jsx)(m.a,{paddingLeft:3,children:(0,e.jsx)(g.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:D})})]})})]})}}]);
