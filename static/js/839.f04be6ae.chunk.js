"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[839],{1839:function(e,s,n){n.r(s),n.d(s,{default:function(){return F}});var r=n(9098),a=n(2791),t="Dialogs_dialogs__ysznz",i="Dialogs_dialogsList__CeNL9",c="Dialogs_messagesList__wdQdN",o=n(5987),l="DialogsItem_item__PesbA",u="DialogsItem_link__ptAEl",d="DialogsItem_active__9kJwi",m=n(3504),g=n(184),h=["children"],_=function(e){var s=e.children,n=(0,o.Z)(e,h);return(0,g.jsx)("li",{className:l,children:(0,g.jsx)(m.OL,{className:function(e){return e.isActive?"".concat(u," ").concat(d):u},to:"".concat(n.href),children:s})})},f="Message_item__1SrJI",x=function(e){var s=e.children;return(0,g.jsx)("li",{className:f,children:s})},j=n(5705),v=n(132),p=n(2539),N=v.Ry({message:v.Z_().required(" ").max(100,"Max length is 100 symbols")}),D=function(e){return(0,g.jsx)(j.J9,{initialValues:{message:""},validationSchema:N,validateOnBlur:!1,onSubmit:function(s,n){var r=n.setSubmitting,a=n.resetForm;e.sendMessage(s.message),a({values:""}),r(!1)},children:function(e){var s=e.isSubmitting,n=e.errors,r=e.isValid;return(0,g.jsxs)(j.l0,{children:[(0,g.jsx)("div",{children:(0,g.jsx)(j.gN,{as:p.i,name:"message",placeholder:"Enter your message",errors:n})}),(0,g.jsx)("button",{type:"submit",disabled:s||!r,children:"Send"})]})}})},Z=function(e){var s=e.dialogsData.map((function(e){return(0,g.jsx)(_,{href:e.id,children:e.name},e.id)})),n=e.messagesData.map((function(e){return(0,g.jsx)(x,{children:e.message},e.id)}));return(0,g.jsxs)("div",{className:t,children:[(0,g.jsx)("ul",{className:i,children:s}),(0,g.jsxs)("ul",{className:c,children:[n,(0,g.jsx)(D,{sendMessage:e.sendMessage})]}),(0,g.jsx)("div",{})]})},b=n(8687),k=n(8683),M=n(5671),w=n(3144),y=n(136),C=n(7277),A=n(6871),S=function(e){return{isAuth:e.auth.isAuth}},F=(0,n(7781).qC)((0,b.$j)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messagesData:e.dialogsPage.messagesData,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{sendMessage:function(s){e((0,r.X)(s))}}})),(function(e){var s=function(s){(0,y.Z)(r,s);var n=(0,C.Z)(r);function r(){return(0,M.Z)(this,r),n.apply(this,arguments)}return(0,w.Z)(r,[{key:"render",value:function(){return this.props.isAuth?(0,g.jsx)(e,(0,k.Z)({},this.props)):(0,g.jsx)(A.Fg,{to:"/login"})}}]),r}(a.Component);return(0,b.$j)(S)(s)}))(Z)},2539:function(e,s,n){n.d(s,{t:function(){return g},i:function(){return m}});var r=n(8683),a=n(5987),t=(n(2791),"CustomTextarea_fieldControl__qQVHB"),i="CustomTextarea_fieldError__9NTyF",c="ErrorMessage_errors__mHYok",o=n(184),l=function(e){var s=e.children;return(0,o.jsx)("p",{className:c,children:s})},u=["errors"],d=["errors"],m=function(e){var s=e.errors,n=(0,a.Z)(e,u);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("textarea",(0,r.Z)({className:"".concat(t," ").concat(s[n.name]?i:"")},n)),(0,o.jsx)(l,{children:s[n.name]})]})},g=function(e){var s=e.errors,n=(0,a.Z)(e,d);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",(0,r.Z)({className:"".concat(t," ").concat(s[n.name]?i:"")},n)),(0,o.jsx)(l,{children:s[n.name]})]})}}}]);
//# sourceMappingURL=839.f04be6ae.chunk.js.map