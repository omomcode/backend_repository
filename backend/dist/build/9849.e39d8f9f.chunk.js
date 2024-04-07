"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9849],{20022:(A,o,t)=>{t.d(o,{b:()=>r});var s=t(96540),c=t(78263),i=t(75942);function r({enabled:m}={enabled:!0}){const{get:M}=(0,c.ry)(),{data:E,isError:_,isLoading:l}=(0,i.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:n}}=await M("/admin/license-limit-information");return n},{enabled:m}),e=s.useMemo(()=>E??{},[E]),a=s.useCallback(n=>(e?.features??[]).find(d=>d.name===n)?.options??{},[e?.features]);return{license:e,getFeature:a,isError:_,isLoading:l}}},59849:(A,o,t)=>{t.r(o),t.d(o,{AdminSeatInfoEE:()=>g});var s=t(96540),c=t(81799),i=t(63188),r=t(61160),m=t(58586),M=t(75608),E=t(96808),_=t(78263),l=t(84551),e=t(17716),a=t(6442),n=t(13561),O=t(71526),d=t(20022);const D="https://cloud.strapi.io/profile/billing",P="https://strapi.io/billing/request-seats",g=()=>{const{formatMessage:L}=(0,a.A)(),f=(0,n.d4)(O.G),{isLoading:u,allowedActions:{canRead:v,canCreate:R,canUpdate:B,canDelete:U}}=(0,_.ec)(f.settings.users),{license:{licenseLimitStatus:T,enforcementUserCount:C,permittedSeats:p,isHostedOnStrapiCloud:I},isError:W,isLoading:K}=(0,d.b)({enabled:!u&&v&&R&&B&&U});return W||(u||K)||!p?null:s.createElement(c.E,{col:6,s:12},s.createElement(i.o,{variant:"sigma",textColor:"neutral600"},L({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),s.createElement(r.s,{gap:2},s.createElement(r.s,null,s.createElement(i.o,{as:"p"},L({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:p,enforcementUserCount:C,text:y=>s.createElement(i.o,{fontWeight:"semiBold",textColor:C>p?"danger500":null},y)}))),T==="OVER_LIMIT"&&s.createElement(m.m,{description:L({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},s.createElement(M.I,{width:`${(0,_.a8)(14)}rem`,height:`${(0,_.a8)(14)}rem`,color:"danger500",as:l.A}))),s.createElement(E.N,{href:I?D:P,isExternal:!0,endIcon:s.createElement(e.A,null)},L({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:I})))}},96808:(A,o,t)=>{t.d(o,{N:()=>l});var s=t(74848),c=t(96540),i=t(17716),r=t(67336),m=t(75206),M=t(83055),E=t(17937);const _=(0,r.Ay)(M.s)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:a})=>e?a.colors.neutral600:a.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${m.AP};
`,l=c.forwardRef(({children:e,href:a,disabled:n=!1,startIcon:O,endIcon:d,isExternal:D=!0,...P},g)=>(0,s.jsxs)(_,{ref:g,href:a,disabled:n,isExternal:D,...P,children:[O,(0,s.jsx)(E.o,{textColor:n?"neutral600":"primary600",children:e}),d,a&&!d&&D&&(0,s.jsx)(i.A,{})]}));l.displayName="Link"}}]);
