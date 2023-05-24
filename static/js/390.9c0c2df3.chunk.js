"use strict";(self.webpackChunknasa_aplication=self.webpackChunknasa_aplication||[]).push([[390],{508:function(t,e,n){n.d(e,{C:function(){return i}});var i=n(9434).v9},3390:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var i=n(1413),r=n(6893),o=n(2791),a=n(8316),l=n(3329),s={color:"#fff",maxHeight:"500px",width:"100%",minWidth:"300px",textAlign:"center",borderRadius:"10px"},d=function(t){var e,n=t.collection;return console.log(n),(0,l.jsx)(a.Z,{autoplay:!0,style:{width:"100%",maxWidth:"1200px",height:"500px",borderRadius:"10px",backgroundColor:"#969696"},children:null===(e=n.items)||void 0===e?void 0:e.map((function(t,e){return(0,l.jsx)(o.Fragment,{children:(0,l.jsx)("img",{style:s,alt:"project-carousel",src:t.href})},"".concat(t,"-").concat(e))}))})},c=function(t){var e=t.image,n=t.photographer,i=t.location,o=r.Z.Paragraph;return(0,l.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",alignSelf:"flex-start",marginBottom:"30px",height:"100%"},children:[(0,l.jsx)("img",{style:{width:"100%",height:"auto",borderRadius:"10px"},src:"".concat(e),alt:"img"}),(0,l.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,l.jsxs)(o,{style:{fontWeight:600,fontSize:"18px"},children:["Photographer : ",(null===n||void 0===n?void 0:n.length)>0?n:"Unknown"]}),(0,l.jsxs)(o,{style:{fontWeight:600,fontSize:"18px"},children:["Location : ",(null===i||void 0===i?void 0:i.length)>0?i:"Not specified"]})]})]})},u=n(7689),p=n(3433),h=n(4165),x=n(5861),f=n(9439),v=n(1243),g=function(){var t=(0,x.Z)((0,h.Z)().mark((function t(e){var n,i;return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://images-api.nasa.gov/asset",t.prev=1,t.next=4,fetch("".concat("https://images-api.nasa.gov/asset","/").concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:return i=t.sent,t.abrupt("return",i);case 11:throw t.prev=11,t.t0=t.catch(1),console.error("Error fetching data:",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();var m=function(t){var e=t.dependencies,n=t.params,i=t.disabled,r=void 0!==i&&i,a=(0,o.useState)({collection:{version:"",href:"",items:[{href:""}]}}),l=(0,f.Z)(a,2),s=l[0],d=l[1],c=(0,o.useState)(!1),u=(0,f.Z)(c,2),m=u[0],y=u[1],j=(0,o.useState)(""),w=(0,f.Z)(j,2),Z=w[0],b=w[1];return(0,o.useEffect)((function(){y(!0),b("");var t=v.Z.CancelToken.source();return!r&&(0,x.Z)((0,h.Z)().mark((function t(){var e;return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n);case 2:e=t.sent,d(e),y(!1);case 5:case"end":return t.stop()}}),t)})))(),function(){return t.cancel()}}),(0,p.Z)(e)),{data:s,loading:m,error:Z,clearError:function(){return b("")}}},y=n(508),j=function(){var t,e,n,o,a,s,p,h=r.Z.Paragraph,x=(0,u.TH)().state.index,f=(0,y.C)((function(t){var e,n;return null===(e=t.results)||void 0===e||null===(n=e.collection)||void 0===n?void 0:n.items[x]})),v=m({dependencies:[],disabled:!1,params:null===f||void 0===f||null===(t=f.data[0])||void 0===t?void 0:t.nasa_id}).data;return(0,l.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",marginBottom:"30px",marginTop:"30px",alignItems:"center",borderLeft:"1px solid #696969",borderRight:"1px solid #696969"},children:[(0,l.jsx)("h1",{children:null===f||void 0===f?void 0:f.data[0].title}),(0,l.jsx)("div",{style:{maxWidth:"1200px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},children:(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(c,{image:"".concat(null===f||void 0===f?void 0:f.links[0].href),photographer:null!==f&&void 0!==f&&null!==(e=f.data[0])&&void 0!==e&&e.photographer?null===f||void 0===f||null===(n=f.data[0])||void 0===n?void 0:n.photographer:"",location:null!==f&&void 0!==f&&null!==(o=f.data[0])&&void 0!==o&&o.location?null===f||void 0===f||null===(a=f.data[0])||void 0===a?void 0:a.location:""})})}),(0,l.jsx)(h,{style:{maxHeight:"50%",maxWidth:"1200px",fontSize:"18px"},children:null===f||void 0===f?void 0:f.data[0].description}),(0,l.jsx)("div",{style:{width:"100%",maxWidth:"1200px",display:"flex",justifyContent:"center",marginTop:"24px"},children:(0,l.jsxs)(h,{style:{display:"flex",fontWeight:600},children:["Keywords: ","",null===f||void 0===f||null===(s=f.data[0])||void 0===s||null===(p=s.keywords)||void 0===p?void 0:p.join(", ")," "]})}),(0,l.jsx)(d,(0,i.Z)({},v))]})}}}]);
//# sourceMappingURL=390.9c0c2df3.chunk.js.map