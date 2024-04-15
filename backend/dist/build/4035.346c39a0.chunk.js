"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4035],{55205:(G,d,t)=>{t.d(d,{U:()=>e,Z:()=>n});const e="strapi_stage",n="strapi_assignee"},53703:(G,d,t)=>{t.r(d),t.d(d,{InformationBoxEE:()=>ee});var e=t(21272),n=t(90602),r=t(78852),T=t(91894),o=t(43242),v=t(71262),g=t(37373),i=t(54894),u=t(74930),S=t(82437),m=t(98342),A=t(13252),I=t(71526),a=t(55205);function N(){const{initialData:E,layout:{uid:w},isSingleType:W,onChange:x}=(0,n.Cu)(),$=(0,S.d4)(I.G),{formatMessage:l}=(0,i.A)(),{formatAPIError:b}=(0,n.wq)(),p=(0,n.hN)(),{put:Y}=(0,n.ry)(),{allowedActions:{canReadUsers:y},isLoading:R}=(0,n.ec)({readUsers:$.settings.users.read}),{users:F,isLoading:B,isError:H}=(0,A.F)({},{enabled:!R&&y}),L=E?.[a.Z]??null,M=async({value:c})=>{f.mutate({entityId:E.id,assigneeId:parseInt(c,10),uid:w})},f=(0,u.useMutation)(async({entityId:c,assigneeId:X,uid:J})=>{const O=W?"single-types":"collection-types",{data:{data:C}}=await Y(`/admin/content-manager/${O}/${J}/${c}/assignee`,{data:{id:X}});return x({target:{name:a.Z,value:C[a.Z]}},!0),C},{onSuccess(){p({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}})}});return e.createElement(T.D,{name:a.Z,id:a.Z},e.createElement(o.s,{direction:"column",gap:2,alignItems:"stretch"},e.createElement(v.G3,{clearLabel:l({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:H&&y&&l({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||f.error&&b(f.error),disabled:!R&&!B&&F.length===0,name:a.Z,id:a.Z,value:L?L.id:null,onChange:c=>M({value:c}),onClear:()=>M({value:null}),placeholder:l({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:l({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:B||R||f.isLoading},F.map(c=>e.createElement(g.j,{key:c.id,value:c.id,textValue:(0,m.Mn)(c,l)},(0,m.Mn)(c,l))))))}var D=t(19448),K=t(57842),P=t(62228),U=t(21765),k=t(29028),z=t(20022),h=t(59984),s=t(11714);function V({id:E,layout:w}={},W={}){const{kind:x,uid:$}=w,l=x==="collectionType"?"collection-types":"single-types",{get:b}=(0,n.ry)(),{data:p,isLoading:Y,refetch:y}=(0,u.useQuery)(["content-manager",l,w.uid,E,"stages"],async()=>{const{data:B}=await b(`/admin/content-manager/${l}/${$}/${E}/stages`);return B},W),R=e.useMemo(()=>p?.meta??{},[p?.meta]),F=e.useMemo(()=>p?.data??[],[p?.data]);return{meta:R,stages:F,isLoading:Y,refetch:y}}var Z=t(30405);function Q(){const{initialData:E,layout:w,isSingleType:W,onChange:x}=(0,n.Cu)(),{put:$}=(0,n.ry)(),{formatMessage:l}=(0,i.A)(),{formatAPIError:b}=(0,n.wq)(),p=(0,n.hN)(),{meta:Y,stages:y,isLoading:R,refetch:F}=V({id:E.id,layout:w},{enabled:!!E?.id}),{getFeature:B}=(0,z.b)(),[H,L]=e.useState(!1),M=B("review-workflows"),f=E?.[a.U]??null,c=(0,u.useMutation)(async({entityId:O,stageId:C,uid:j})=>{const q=W?"single-types":"collection-types",{data:{data:_}}=await $(`/admin/content-manager/${q}/${j}/${O}/stage`,{data:{id:C}});return x({target:{name:a.U,value:_[a.U]}},!0),await F(),_},{onSuccess(){p({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),X=async({value:O})=>{try{M?.[s.hK]&&parseInt(M[s.hK],10)<Y.workflowCount?L("workflow"):M?.[s.Dp]&&parseInt(M[s.Dp],10)<y.length?L("stage"):c.mutateAsync({entityId:E.id,stageId:O,uid:w.uid})}catch{}},{themeColorName:J}=f?.color?(0,Z.w)(f?.color):{};return e.createElement(e.Fragment,null,e.createElement(T.D,{hint:y.length===0&&l({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:a.U,id:a.U},e.createElement(o.s,{direction:"column",gap:2,alignItems:"stretch"},e.createElement(D.Z,{disabled:y.length===0,error:c.error&&b(c.error)||null,name:a.U,id:a.U,value:f?.id,onChange:O=>X({value:O}),label:l({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:f&&e.createElement(o.s,{as:"span",height:2,background:f?.color,borderColor:J==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>e.createElement(o.s,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},e.createElement(K.o,{textColor:"neutral800",ellipsis:!0},f?.name??""),R?e.createElement(P.a,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null)},y.map(({id:O,color:C,name:j})=>{const{themeColorName:q}=(0,Z.w)(C);return e.createElement(D.eY,{key:O,startIcon:e.createElement(o.s,{height:2,background:C,borderColor:q==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:O,textValue:j},j)})),e.createElement(U.o,null),e.createElement(k.b,null))),e.createElement(h.bL,{isOpen:H==="workflow",onClose:()=>L(!1)},e.createElement(h.hE,null,l({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(h.nB,null,l({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(h.bL,{isOpen:H==="stage",onClose:()=>L(!1)},e.createElement(h.hE,null,l({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(h.nB,null,l({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function ee(){const{isCreatingEntry:E,layout:{options:w}}=(0,n.Cu)(),W=w?.reviewWorkflows??!1;return e.createElement(r.$.Root,null,e.createElement(r.$.Title,null),W&&!E&&e.createElement(e.Fragment,null,e.createElement(Q,null),e.createElement(N,null)),e.createElement(r.$.Body,null))}},20022:(G,d,t)=>{t.d(d,{b:()=>T});var e=t(21272),n=t(90602),r=t(74930);function T({enabled:o}={enabled:!0}){const{get:v}=(0,n.ry)(),{data:g,isError:i,isLoading:u}=(0,r.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:A}}=await v("/admin/license-limit-information");return A},{enabled:o}),S=e.useMemo(()=>g??{},[g]),m=e.useCallback(A=>(S?.features??[]).find(a=>a.name===A)?.options??{},[S?.features]);return{license:S,getFeature:m,isError:i,isLoading:u}}},59984:(G,d,t)=>{t.d(d,{nB:()=>U,bL:()=>h,hE:()=>P});var e=t(21272),n=t(57842),r=t(43242),T=t(50642),o=t(53900),v=t(44370),g=t(19106),i=t(49654),u=t(98889),S=t(33544),m=t.n(S),A=t(54894),I=t(63891);const a=t.p+"0cd5f8915b265d5b1856.png",N="limits-title",D="https://strapi.io/pricing-cloud",K="https://strapi.io/contact-sales";function P({children:s}){return e.createElement(n.o,{variant:"alpha",id:N},s)}P.propTypes={children:m().node.isRequired};function U({children:s}){return e.createElement(n.o,{variant:"omega"},s)}U.propTypes={children:m().node.isRequired};function k(){const{formatMessage:s}=(0,A.A)();return e.createElement(r.s,{gap:2,paddingTop:4},e.createElement(i.z,{variant:"default",isExternal:!0,href:D},s({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(i.z,{variant:"tertiary",isExternal:!0,href:K},s({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const z=I.Ay.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:s})=>`-${s.spaces[7]}`};
  margin-top: ${({theme:s})=>`-${s.spaces[7]}`};
  width: 360px;
`;function h({children:s,isOpen:V,onClose:Z}){const{formatMessage:Q}=(0,A.A)();return V?e.createElement(T.k,{labelledBy:N},e.createElement(o.c,null,e.createElement(r.s,{gap:2,paddingLeft:7,position:"relative"},e.createElement(r.s,{alignItems:"start",direction:"column",gap:2,width:"60%"},s,e.createElement(k,null)),e.createElement(r.s,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(z,{src:a,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(v.a,{display:"flex",position:"absolute",right:0,top:0},e.createElement(g.K,{icon:e.createElement(u.A,null),"aria-label":Q({id:"global.close",defaultMessage:"Close"}),onClick:Z})))))):null}h.defaultProps={isOpen:!1},h.propTypes={children:m().node.isRequired,isOpen:m().bool,onClose:m().func.isRequired}},11714:(G,d,t)=>{t.d(d,{Ae:()=>a,Al:()=>A,Cx:()=>S,Dp:()=>k,T1:()=>i,TE:()=>P,U:()=>u,YT:()=>m,Yy:()=>v,aM:()=>T,fR:()=>r,h$:()=>N,hH:()=>K,hK:()=>U,iz:()=>o,oA:()=>D,p6:()=>n,pq:()=>I,sT:()=>g});var e=t(5538);const n="settings_review-workflows",r="Settings/Review_Workflows/RESET_WORKFLOW",T="Settings/Review_Workflows/SET_CONTENT_TYPES",o="Settings/Review_Workflows/SET_IS_LOADING",v="Settings/Review_Workflows/SET_ROLES",g="Settings/Review_Workflows/SET_WORKFLOW",i="Settings/Review_Workflows/SET_WORKFLOWS",u="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",S="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",m="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",A="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",I="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",a="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",N="Settings/Review_Workflows/WORKFLOW_UPDATE",D={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},K=e._.colors.primary600,P={STAGE:"stage"},U="numberOfWorkflows",k="stagesPerWorkflow"},30405:(G,d,t)=>{t.d(d,{M:()=>T,w:()=>r});var e=t(5538),n=t(11714);function r(o){if(!o)return null;const g=Object.entries(e._.colors).filter(([,i])=>i.toUpperCase()===o.toUpperCase()).reduce((i,[u])=>(n.oA?.[u]&&(i=u),i),null);return g?{themeColorName:g,name:n.oA[g]}:null}function T(){return Object.entries(n.oA).map(([o,v])=>({hex:e._.colors[o].toUpperCase(),name:v}))}}}]);
