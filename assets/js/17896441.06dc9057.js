"use strict";(self.webpackChunkpathvector_io=self.webpackChunkpathvector_io||[]).push([[918],{7684:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7462),l=a(7294),r=a(6010),s=a(8425),i=a(8596),c=a(5281),o=a(9960),d=a(4996),m=a(5999);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function b(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?l.createElement("span",{className:n,itemProp:"name"},t):a?l.createElement(o.Z,{className:n,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:n},t)}function p(e){var t=e.children,a=e.active,s=e.index,i=e.addMicrodata;return l.createElement("li",(0,n.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function h(){var e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},l.createElement(u,{className:v.breadcrumbHomeIcon})))}function E(){var e=(0,s.s1)(),t=(0,i.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(h,null),e.map((function(t,a){var n=a===e.length-1;return l.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(b,{href:t.href,isLast:n},t.label))})))):null}},4533:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var n=a(7294),l=a(6010),r=a(1944),s=a(7524),i=a(5281),c=a(4966),o=a(3120),d=a(4364),m=a(5999);function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function v(e){var t=e.lastUpdatedBy;return n.createElement(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:i.k.common.lastUpdated},n.createElement(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(u,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(v,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var p=a(7462),h=a(3366),E="iconEdit_eYIM",g=["className"];function f(e){var t=e.className,a=(0,h.Z)(e,g);return n.createElement("svg",(0,p.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(E,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function Z(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.k.common.editThisPage},n.createElement(f,null),n.createElement(m.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var N=a(9960),_="tag_zVej",L="tagRegular_sFm0",k="tagWithCount_h2kH";function T(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(N.Z,{href:t,className:(0,l.Z)(_,r?k:L)},a,r&&n.createElement("span",null,r))}var U="tags_jXut",w="tag_QGVx";function y(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(m.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(U,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:w},n.createElement(T,{label:t,permalink:a}))}))))}var A="lastUpdated_vbeJ";function C(e){return n.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(y,e)))}function x(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",A)},(a||r)&&n.createElement(b,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function B(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,o=t.tags,d=o.length>0,m=!!(a||r||c);return d||m?n.createElement("footer",{className:(0,l.Z)(i.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(C,{tags:o}),m&&n.createElement(x,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:c,formattedLastUpdatedAt:s})):null}var I=a(9407),M=a(6043),H=a(3743),V="tocCollapsibleButton_TO0P",P="tocCollapsibleButtonExpanded_MG3E",S=["collapsed"];function D(e){var t=e.collapsed,a=(0,h.Z)(e,S);return n.createElement("button",(0,p.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",V,!t&&P,a.className)}),n.createElement(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var F="tocCollapsible_ETCw",z="tocCollapsibleContent_vkbj",O="tocCollapsibleExpanded_sAul";function R(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,M.u)({initialState:!0}),c=i.collapsed,o=i.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(F,!c&&O,a)},n.createElement(D,{collapsed:c,onClick:o}),n.createElement(M.z,{lazy:!0,className:z,collapsed:c},n.createElement(H.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var j=a(2503),G=a(7684),J=a(3548),q="docItemContainer_Adtb",Q="docItemCol_GujU",W="tocMobile_aoJ5";function X(e){var t,a=e.content,l=a.metadata,s=a.frontMatter,i=a.assets,c=s.keywords,o=l.description,d=l.title,m=null!=(t=i.image)?t:s.image;return n.createElement(r.d,{title:d,description:o,keywords:c,image:m})}function Y(e){var t=e.content,a=t.metadata,r=t.frontMatter,m=r.hide_title,u=r.hide_table_of_contents,v=r.toc_min_heading_level,b=r.toc_max_heading_level,p=a.title,h=!m&&void 0===t.contentTitle,E=(0,s.i)(),g=!u&&t.toc&&t.toc.length>0,f=g&&("desktop"===E||"ssr"===E);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!u&&Q)},n.createElement(o.Z,null),n.createElement("div",{className:q},n.createElement("article",null,n.createElement(G.Z,null),n.createElement(d.Z,null),g&&n.createElement(R,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:b,className:(0,l.Z)(i.k.docs.docTocMobile,W)}),n.createElement("div",{className:(0,l.Z)(i.k.docs.docMarkdown,"markdown")},h&&n.createElement("header",null,n.createElement(j.Z,{as:"h1"},p)),n.createElement(J.Z,null,n.createElement(t,null))),n.createElement(B,e)),n.createElement(c.Z,{previous:a.previous,next:a.next}))),f&&n.createElement("div",{className:"col col--3"},n.createElement(I.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:b,className:i.k.docs.docTocDesktop})))}function K(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(r.FG,{className:t},n.createElement(X,e),n.createElement(Y,e))}},4966:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),l=a(7294),r=a(5999),s=a(6010),i=a(9960);function c(e){var t=e.permalink,a=e.title,n=e.subLabel,r=e.isNext;return l.createElement(i.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(c,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),r=a(5999),s=a(4477),i=a(5281);function c(e){var t=e.className,a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7294),l=a(6010),r=a(2263),s=a(9960),i=a(5999),c=a(143),o=a(373),d=a(5281),m=a(4477);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,s=e.versionMetadata,i=(0,r.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,u=(0,o.J)(m).savePreferredVersionName,p=(0,c.Jo)(m),h=p.latestDocSuggestion,E=p.latestVersionSuggestion,g=null!=h?h:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:s})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:E.label,to:g.path,onClick:function(){return u(E.name)}})))}function h(e){var t=e.className,a=(0,m.E)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}}}]);