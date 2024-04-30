"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9849],{20022:(A,o,t)=>{t.d(o,{b:()=>r});var s=t(21272),c=t(90602),i=t(74930);function r({enabled:m}={enabled:!0}){const{get:M}=(0,c.ry)(),{data:E,isError:_,isLoading:l}=(0,i.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:n}}=await M("/admin/license-limit-information");return n},{enabled:m}),e=s.useMemo(()=>E??{},[E]),a=s.useCallback(n=>(e?.features??[]).find(d=>d.name===n)?.options??{},[e?.features]);return{license:e,getFeature:a,isError:_,isLoading:l}}},59849:(A,o,t)=>{t.r(o),t.d(o,{AdminSeatInfoEE:()=>g});var s=t(21272),c=t(68065),i=t(57842),r=t(43242),m=t(42035),M=t(27026),E=t(21610),_=t(90602),l=t(54225),e=t(44010),a=t(54894),n=t(82437),O=t(71526),d=t(20022);const D="https://cloud.strapi.io/profile/billing",P="https://strapi.io/billing/request-seats",g=()=>{const{formatMessage:L}=(0,a.A)(),v=(0,n.d4)(O.G),{isLoading:C,allowedActions:{canRead:R,canCreate:B,canUpdate:U,canDelete:T}}=(0,_.ec)(v.settings.users),{license:{licenseLimitStatus:f,enforcementUserCount:u,permittedSeats:p,isHostedOnStrapiCloud:I},isError:W,isLoading:K}=(0,d.b)({enabled:!C&&R&&B&&U&&T});return W||(C||K)||!p?null:s.createElement(c.E,{col:6,s:12},s.createElement(i.o,{variant:"sigma",textColor:"neutral600"},L({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),s.createElement(r.s,{gap:2},s.createElement(r.s,null,s.createElement(i.o,{as:"p"},L({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:p,enforcementUserCount:u,text:y=>s.createElement(i.o,{fontWeight:"semiBold",textColor:u>p?"danger500":null},y)}))),f==="OVER_LIMIT"&&s.createElement(m.m,{description:L({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},s.createElement(M.I,{width:`${(0,_.a8)(14)}rem`,height:`${(0,_.a8)(14)}rem`,color:"danger500",as:l.A}))),s.createElement(E.N,{href:I?D:P,isExternal:!0,endIcon:s.createElement(e.A,null)},L({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:I})))}},21610:(A,o,t)=>{t.d(o,{N:()=>l});var s=t(92132),c=t(21272),i=t(44010),r=t(63891),m=t(78732),M=t(85329),E=t(30893);const _=(0,r.Ay)(M.s)`
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
