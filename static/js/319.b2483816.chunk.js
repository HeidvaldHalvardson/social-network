"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[319],{3319:function(e,r,s){s.r(r);s(2791);var n=s(5705),i=s(132),a=s(2539),t=s(8687),o=s(7561),l=s(6871),c=s(184),u=i.Ry({email:i.Z_().email("Invalid email address").required("Email address is required"),password:i.Z_().matches(/^[a-zA-Z0-9]+$/,"Password can only contain Latin letters and numbers").required("Password is required")}),d=function(e){return(0,c.jsx)(n.J9,{initialValues:{email:"",password:"",rememberMe:!1},validationSchema:u,onSubmit:function(r,s){var n=s.setSubmitting,i=s.setStatus;e.onSubmit(r,i),n(!1)},children:function(e){var r=e.isSubmitting,s=e.errors,i=e.isValid,t=e.status;return(0,c.jsxs)(n.l0,{children:[(0,c.jsx)("div",{children:(0,c.jsx)(n.gN,{as:a.t,type:"email",name:"email",placeholder:"Email",errors:s})}),(0,c.jsx)("div",{children:(0,c.jsx)(n.gN,{as:a.t,type:"password",name:"password",placeholder:"Password",errors:s})}),(0,c.jsx)("div",{children:t}),(0,c.jsxs)("label",{children:[(0,c.jsx)(n.gN,{type:"checkbox",name:"rememberMe"}),(0,c.jsx)("span",{children:"remember me"})]}),(0,c.jsx)("button",{type:"submit",disabled:r||!i,children:"Login"})]})}})};r.default=(0,t.$j)((function(e){return{isAuth:e.auth.isAuth}}),{login:o.x4})((function(e){return e.isAuth?(0,c.jsx)(l.Fg,{to:"/profile"}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Login"}),(0,c.jsx)(d,{onSubmit:function(r,s){e.login(r.email,r.password,r.rememberMe,s)}})]})}))},2539:function(e,r,s){s.d(r,{t:function(){return h},i:function(){return m}});var n=s(8683),i=s(5987),a=(s(2791),"CustomTextarea_fieldControl__qQVHB"),t="CustomTextarea_fieldError__9NTyF",o="ErrorMessage_errors__mHYok",l=s(184),c=function(e){var r=e.children;return(0,l.jsx)("p",{className:o,children:r})},u=["errors"],d=["errors"],m=function(e){var r=e.errors,s=(0,i.Z)(e,u);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("textarea",(0,n.Z)({className:"".concat(a," ").concat(r[s.name]?t:"")},s)),(0,l.jsx)(c,{children:r[s.name]})]})},h=function(e){var r=e.errors,s=(0,i.Z)(e,d);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",(0,n.Z)({className:"".concat(a," ").concat(r[s.name]?t:"")},s)),(0,l.jsx)(c,{children:r[s.name]})]})}}}]);
//# sourceMappingURL=319.b2483816.chunk.js.map