"use strict";(self.webpackChunkthexanh=self.webpackChunkthexanh||[]).push([[826],{7826:(s,a,e)=>{e.r(a),e.d(a,{default:()=>n});var d=e(5043),c=e(6213),o=e(3216),r=e(579);const t=s=>{const a=(0,o.Zp)();return(0,d.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m"}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",children:s.data.map((s=>(0,r.jsx)("div",{className:"border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md",children:(0,r.jsxs)("div",{onClick:()=>a("/greencard/".concat(s._id)),children:[null===s||void 0===s?void 0:s.name,(0,r.jsx)("br",{}),(0,r.jsx)("img",{src:null===s||void 0===s?void 0:s.image[0],alt:null===s||void 0===s?void 0:s.name,className:"mt-2  rounded-lg shadow-md object-contain w-full h-48"})]})},s._id)))})]})},n=()=>{const[s,a]=(0,d.useState)([]);(0,d.useEffect)((()=>{e()}),[]);const e=async()=>{try{const s=(await c.A.get("https://ap-southeast-1.aws.data.mongodb-api.com/app/".concat("greencard-hgxjomf","/endpoint/getproducts"))).data;a(s)}catch(s){console.error("Error fetching data: ",s)}};return(0,r.jsx)("div",{children:(0,r.jsx)(t,{data:s})})}}}]);
//# sourceMappingURL=826.af06981e.chunk.js.map