"use strict";(self.webpackChunkpathvector_io=self.webpackChunkpathvector_io||[]).push([[951],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},225:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],u={},c="RPKI Validation",l={unversionedId:"filtering/rpki",id:"filtering/rpki",title:"RPKI Validation",description:"Resource Public Key Infrastructure is a system to verify that an ASN is authorized to originate a route. RPKI works in",source:"@site/docs/filtering/rpki.md",sourceDirName:"filtering",slug:"/filtering/rpki",permalink:"/docs/filtering/rpki",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/filtering/rpki.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Route Limits",permalink:"/docs/filtering/route-limits"},next:{title:"Autoconfiguration",permalink:"/docs/autoconfiguration"}},p={},s=[],f={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rpki-validation"},"RPKI Validation"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Resource Public Key Infrastructure")," is a system to verify that an ASN is authorized to originate a route. RPKI works in\n3 parts:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signing")," a prefix involves publishing a ",(0,o.kt)("em",{parentName:"p"},"Route Origin Authorization (ROA)")," for each prefix that you want to\noriginate. ROAs contain the authorized origin ASN and a max length field to indicate how far disaggregation should be\npermitted. For example, you could create a ROA for your /22 permitting announcements up to /24."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Validation")," uses the chain of trust to verify that a ROA is valid."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Policy Enforcement")," uses Validated ROA Payloads (VRPs) to influence routing decisions. These are typically\ndistributed from the validator(s) to routers using the ",(0,o.kt)("em",{parentName:"p"},"RTR (RPKI to Router)")," protocol."),(0,o.kt)("p",null,"The global ",(0,o.kt)("inlineCode",{parentName:"p"},"rtr-server")," option in Pathvector specifies the RTR server for the router. Enable ",(0,o.kt)("inlineCode",{parentName:"p"},"filter-rpki")," to filter\nRPKI invalid routes on a peer. The ",(0,o.kt)("inlineCode",{parentName:"p"},"strict-rpki")," option filters prefixes that are not covered by a RPKI ROA. This is\npotentially dangerous as a large portion of the Internet does not have covering ROAs."))}d.isMDXComponent=!0}}]);