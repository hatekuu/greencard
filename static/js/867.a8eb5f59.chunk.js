"use strict";(self.webpackChunkthexanh=self.webpackChunkthexanh||[]).push([[867],{3867:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(5043),i=s(6244),n=s(443),r=s(3402),l=s(579);const o=new r.qw({id:"greencard-hgxjomf"}),c=e=>{const[t,s]=(0,a.useState)(!0),[c,d]=(0,a.useState)(""),[h,m]=(0,a.useState)(!1),u={"ui:submitButtonOptions":{props:{disabled:h},norender:!1,submitText:"\u0110\u0103ng nh\u1eadp"}};return(0,l.jsx)("div",{className:"container-wrapper",children:(0,l.jsxs)("div",{className:"containers",children:[h&&(0,l.jsx)("div",{className:"spinner",children:"Loading..."}),t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Ay,{schema:{type:"object",required:["email","password"],properties:{email:{type:"string",title:"T\xean \u0111\u0103ng nh\u1eadp"},password:{type:"string",title:"M\u1eadt kh\u1ea9u",format:"password"}}},validator:n.Ay,uiSchema:u,onSubmit:async t=>{let{formData:s}=t;m(!0);const{email:a,password:i}=s,n=r.Ji.emailPassword(a,i);try{var l;if("Admin"===(null===(l=(await o.logIn(n)).customData)||void 0===l?void 0:l.type))window.location.href="/greencard/admin";else try{e.setNavigate("home"),setTimeout((()=>{window.location.reload()}),1)}catch(c){console.log(c.error)}}catch(c){console.log(c)}finally{m(!1)}},disabled:h}),(0,l.jsxs)("div",{className:"ml-5 mt-4 flex items-center justify-cent",children:[(0,l.jsx)("p",{className:"mr-2",children:"Qu\xean m\u1eadt kh\u1ea9u?"}),(0,l.jsx)("p",{className:"text-blue-500 cursor-pointer hover:text-blue-700 hover:underline",onClick:()=>s(!1),children:"\u0110\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u ngay!"})]}),(0,l.jsx)("p",{className:"text-blue-500 mt-2 cursor-pointer hover:text-blue-700 hover:underline",onClick:()=>e.setNavigate("register"),children:"\u0110\u0103ng k\xfd t\xe0i kho\u1ea3n"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),m(!0);try{await o.emailPasswordAuth.sendResetPasswordEmail({email:c}),alert("\u0110\xe3 g\u1eedi email \u0111\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u th\xe0nh c\xf4ng!")}catch(t){console.log(t)}finally{m(!1)}},children:[(0,l.jsxs)("label",{children:["Email:",(0,l.jsx)("input",{type:"email",value:c,onChange:e=>d(e.target.value),disabled:h})]}),(0,l.jsx)("button",{type:"submit",disabled:h,children:"Submit"})]})}),(0,l.jsx)("p",{className:"text-blue-500 mt-4  cursor-pointer hover:text-blue-700 hover:underline",onClick:()=>s(!0),children:"Tr\u1edf l\u1ea1i \u0111\u0103ng nh\u1eadp"})]})]})})}}}]);
//# sourceMappingURL=867.a8eb5f59.chunk.js.map