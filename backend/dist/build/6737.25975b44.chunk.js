"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6737],{86085:(y,l,e)=>{e.d(l,{E:()=>d});var t=e(96540),O=e(78263),E=e(75942);const d=(m={})=>{const{get:_}=(0,O.ry)(),{data:a,isLoading:n}=(0,E.useQuery)(["ee","providers"],async()=>{const{data:c}=await _("/admin/providers");return c},m);return{providers:t.useMemo(()=>a??[],[a]),isLoading:n}}},26737:(y,l,e)=>{e.r(l),e.d(l,{LoginEE:()=>o});var t=e(96540),O=e(64360),E=e(28992),d=e(61160),m=e(63188),_=e(5556),a=e.n(_),n=e(6442),D=e(67336),c=e(11679),u=e(62093),M=e(86085),p=e(40811);const i=(0,D.Ay)(O.c)`
  flex: 1;
`,o=P=>{const{formatMessage:s}=(0,n.A)(),{isLoading:g,providers:A}=(0,M.E)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!g&&A.length===0?t.createElement(c.Zj,null,t.createElement(u.A,{...P})):t.createElement(c.Zj,null,t.createElement(u.A,{...P},t.createElement(E.a,{paddingTop:7},t.createElement(d.s,{direction:"column",alignItems:"stretch",gap:7},t.createElement(d.s,null,t.createElement(i,null),t.createElement(E.a,{paddingLeft:3,paddingRight:3},t.createElement(m.o,{variant:"sigma",textColor:"neutral600"},s({id:"Auth.login.sso.divider"}))),t.createElement(i,null)),t.createElement(p.A,{providers:A,displayAllProviders:!1})))))};o.defaultProps={onSubmit:P=>P.preventDefault(),requestError:null},o.propTypes={formErrors:a().object.isRequired,modifiedData:a().object.isRequired,onChange:a().func.isRequired,onSubmit:a().func,requestError:a().object}},40811:(y,l,e)=>{e.d(l,{A:()=>P});var t=e(96540),O=e(61160),E=e(58586),d=e(63188),m=e(94482),_=e(81799),a=e(5556),n=e.n(a),D=e(6442),c=e(54625),u=e(67336);const M=u.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,p=(0,u.Ay)(O.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,i=({provider:s})=>t.createElement(E.m,{label:s.displayName},t.createElement(M,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?t.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.o,null,s.displayName)));i.propTypes={provider:n().shape({icon:n().string,displayName:n().string.isRequired,uid:n().string.isRequired}).isRequired};const o=({providers:s,displayAllProviders:g})=>{const{formatMessage:A}=(0,D.A)();return g?t.createElement(m.x,{gap:4},s.map(r=>t.createElement(_.E,{key:r.uid,col:4},t.createElement(i,{provider:r})))):s.length>2&&!g?t.createElement(m.x,{gap:4},s.slice(0,2).map(r=>t.createElement(_.E,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(_.E,{col:4},t.createElement(E.m,{label:A({id:"global.see-more"})},t.createElement(M,{as:c.N_,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(p,{justifyContent:"center"},s.map(r=>t.createElement(i,{key:r.uid,provider:r})))};o.defaultProps={displayAllProviders:!0},o.propTypes={providers:n().arrayOf(n().object).isRequired,displayAllProviders:n().bool};const P=o}}]);
