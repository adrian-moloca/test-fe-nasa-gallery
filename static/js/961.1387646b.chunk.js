"use strict";(self.webpackChunknasa_aplication=self.webpackChunknasa_aplication||[]).push([[961],{508:function(t,e,n){n.d(e,{C:function(){return a}});var a=n(9434).v9},6961:function(t,e,n){n.r(e),n.d(e,{default:function(){return q}});var a=n(2791),r=n(6441),i=n(7689),o=n(3329),s=r.Z.Meta,c=function(t){var e=t.title,n=t.location,a=t.thumbnail,c=t.photographerName,l=t.index,d=(0,i.s0)();return(0,o.jsx)("div",{className:"card",children:(0,o.jsx)(r.Z,{onClick:function(){return d("/show",{state:{index:l}})},className:"card-item",style:{width:300,height:400,cursor:"pointer"},cover:(0,o.jsx)("img",{style:{minHeight:"20px",maxHeight:"300px",width:"100%"},alt:"thumbnail",src:a}),children:(0,o.jsx)(s,{title:e,description:"".concat(n," ").concat(c)})})})},l=n(183),d=function(t){var e=t.data,n=t.loading;return(0,o.jsx)("div",{style:{width:"100%",display:"flex",flexWrap:"wrap",marginTop:"24px",gap:"20px",justifyContent:"center"},children:n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z.Image,{style:{width:"350px",height:"350px"},active:!0}),(0,o.jsx)(l.Z.Image,{style:{width:"350px",height:"350px"},active:!0}),(0,o.jsx)(l.Z.Image,{style:{width:"350px",height:"350px"},active:!0}),(0,o.jsx)(l.Z.Image,{style:{width:"350px",height:"350px"},active:!0})]}):(0,o.jsx)(o.Fragment,{children:(null===e||void 0===e?void 0:e.length)>0?e.map((function(t,e){return(0,o.jsx)(c,{index:e,title:"".concat(t.data?t.data.title:"-"," "),location:"Location: ".concat(t.data&&t.data.location?t.data.location:"Not specified"," "),thumbnail:"".concat(t.href),photographerName:"Photographer: ".concat(t.data&&t.data.photographer?t.data.photographer:"Unknown"," ")},"".concat(t,"-").concat(e))})):(0,o.jsx)("p",{children:"No results found"})})})},u=n(4942),h=n(1413),p=n(9439),v=n(999),x=n(177),f=n(6893),g=n(3857),m=n(2312),y=n(1730),j=n(711),Z=n(508),w=function(t){var e=t.search,n=(0,v.ZP.useBreakpoint)(),r=x.Z.Search,i=f.Z.Paragraph,s=(0,a.useState)(!1),c=(0,p.Z)(s,2),l=c[0],d=c[1],w=(0,a.useState)({startYear:1950,endYear:2023}),Y=(0,p.Z)(w,2),k=Y[0],C=Y[1],S=(0,Z.C)((function(t){return null===t||void 0===t?void 0:t.searchedValue})),b=(0,a.useState)(S||""),I=(0,p.Z)(b,2),P=I[0],q=I[1],N=function(t,e){C((function(n){return(0,h.Z)((0,h.Z)({},n),{},(0,u.Z)({},e,t.target.value))}))};return(0,a.useEffect)((function(){S&&S.length&&e({q:P,endYear:String(null===k||void 0===k?void 0:k.endYear),startYear:String(null===k||void 0===k?void 0:k.startYear)})}),[S]),(0,o.jsxs)("div",{style:{padding:"24px 50px",display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,o.jsxs)("div",{style:{width:"100%",display:"flex",gap:"14px",justifyContent:"center"},children:[(0,o.jsx)(r,{value:P,style:{maxWidth:"600px",minWidth:"200px"},placeholder:"Search",onSearch:function(t){return e({q:t,endYear:String(null===k||void 0===k?void 0:k.endYear),startYear:String(null===k||void 0===k?void 0:k.startYear)})},onChange:function(t){return function(t){var e;q(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)}(t)},enterButton:(0,o.jsx)(g.ZP,{style:{backgroundColor:"#7171ef",color:"#000"},children:n.sm?"Search":(0,o.jsx)(y.Z,{})})}),(0,o.jsx)(g.ZP,{onClick:function(t){return function(t){t.preventDefault(),d(!l)}(t)},children:n.sm?"Filter":(0,o.jsx)(j.Z,{})})]}),l&&(0,o.jsx)("div",{style:{maxWidth:"800px",minWidth:"200px",display:"flex",justifyContent:"center",marginTop:"14px"},children:(0,o.jsxs)(m.Z.Compact,{style:{width:"100%",alignItems:"center",marginRight:"15px"},children:[(0,o.jsx)(i,{style:{margin:0,paddingRight:"12px"},children:"Year (1950 - 2023):"}),(0,o.jsx)(x.Z,{type:"number",value:null===k||void 0===k?void 0:k.startYear,style:{width:"30%"},placeholder:"Year to start",onChange:function(t){return N(t,"startYear")}}),(0,o.jsx)(x.Z,{type:"number",value:null===k||void 0===k?void 0:k.endYear,style:{width:"30%"},placeholder:"Year to end",onChange:function(t){return N(t,"endYear")}}),(0,o.jsx)(g.ZP,{style:{backgroundColor:"#7171ef",color:"#000",width:"75px"},onClick:function(t){return function(t){t.preventDefault(),e({q:P,endYear:String(null===k||void 0===k?void 0:k.endYear),startYear:String(null===k||void 0===k?void 0:k.startYear)})}(t)},children:"Apply"})]})})]})},Y=n(4165),k=n(5861);function C(t){return S.apply(this,arguments)}function S(){return(S=(0,k.Z)((0,Y.Z)().mark((function t(e){var n,a,r;return(0,Y.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://images-api.nasa.gov/search",n=new URLSearchParams({q:null===e||void 0===e?void 0:e.q,year_start:null===e||void 0===e?void 0:e.startYear,year_end:null===e||void 0===e?void 0:e.endYear,media_type:"image"}).toString(),t.prev=2,t.next=5,fetch("".concat("https://images-api.nasa.gov/search","?").concat(n));case 5:if((a=t.sent).ok){t.next=8;break}throw new Error("Request failed with status ".concat(a.status));case 8:return t.next=10,a.json();case 10:return r=t.sent,t.abrupt("return",r);case 14:throw t.prev=14,t.t0=t.catch(2),console.error("Error fetching data:",t.t0),t.t0;case 18:case"end":return t.stop()}}),t,null,[[2,14]])})))).apply(this,arguments)}var b=n(9434),I=n(4270);var P=function(){var t=(0,a.useState)(),e=(0,p.Z)(t,2),n=e[0],r=e[1],i=(0,a.useState)(!1),o=(0,p.Z)(i,2),s=o[0],c=o[1],l=(0,b.I0)(),d=(0,a.useCallback)(function(){var t=(0,k.Z)((0,Y.Z)().mark((function t(e){var n;return(0,Y.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,C(e);case 4:n=t.sent,r(n),l((0,I.iM)(n)),c(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error fetching data:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),[r,l]);return{data:n,search:d,loading:s,setData:r}},q=function(){var t=P(),e=t.search,n=t.loading,r=t.data,i=(0,a.useMemo)((function(){var t,e=null===r||void 0===r||null===(t=r.collection)||void 0===t?void 0:t.items;return e&&Array.isArray(e)?e.map((function(t){return{href:t.links?t.links[0].href:void 0,data:t.data?t.data[0]:void 0}})):[]}),[r]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{search:e}),(0,o.jsx)(d,{data:i,loading:n})]})}}}]);
//# sourceMappingURL=961.1387646b.chunk.js.map