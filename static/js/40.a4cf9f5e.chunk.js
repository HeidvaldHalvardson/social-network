"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[40],{3040:function(t,e,r){r.r(e),r.d(e,{default:function(){return C}});var s=r(8683),n=r(5671),a=r(3144),i=r(136),u=r(7277),o=r(2791),c=r(2398),l=r(885),d=r(184),p=function(t){var e=(0,o.useState)(!1),r=(0,l.Z)(e,2),s=r[0],n=r[1],a=(0,o.useState)(t.status),i=(0,l.Z)(a,2),u=i[0],c=i[1];(0,o.useEffect)((function(){c(t.status)}),[t.status]);return(0,d.jsx)(d.Fragment,{children:s?(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(u)},value:u})}):(0,d.jsx)("div",{children:(0,d.jsx)("span",{onClick:function(){n(!0)},children:t.status||"what's new?"})})})},f=function(t){return t.profile?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:t.profile.photos.large,alt:""}),(0,d.jsx)(p,{status:t.status,updateStatus:t.updateStatus})]})}):(0,d.jsx)(c.Z,{})},h=r(6508),x=r(2982),j=function(t){var e=t.children;return(0,d.jsx)("li",{children:e})},m=r(5705),g=r(132),v=r(2539),P=g.Ry({newPost:g.Z_().required("Field is required").max(100,"Max length is 100 symbols")}),Z=function(t){return(0,d.jsx)(m.J9,{initialValues:{newPost:""},onSubmit:function(e,r){var s=r.setSubmitting,n=r.resetForm;t.addPost(e.newPost),n({values:""}),s(!1)},validateOnBlur:!1,validationSchema:P,children:function(t){var e=t.isSubmitting,r=t.errors,s=t.isValid;return(0,d.jsxs)(m.l0,{children:[(0,d.jsx)("div",{children:(0,d.jsx)(m.gN,{as:v.i,name:"newPost",placeholder:"Enter your post",errors:r})}),(0,d.jsx)("button",{type:"submit",disabled:e||!s,children:"Add post"})]})}})},S=o.memo((function(t){var e=(0,x.Z)(t.postData).reverse().map((function(t){return(0,d.jsx)(j,{children:t.message})}));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{children:"My posts"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(Z,{addPost:t.addPost}),(0,d.jsx)("ul",{children:e})]})]})})),w=r(8687),_=(0,w.$j)((function(t){return{postData:t.profilePage.postData,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t((0,h.q2)(e))}}}))(S),F=function(t){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,d.jsx)(_,{})]})},k=r(7781),b=r(2611),y=function(t){(0,i.Z)(r,t);var e=(0,u.Z)(r);function r(){return(0,n.Z)(this,r),e.apply(this,arguments)}return(0,a.Z)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorisedUserId),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(F,(0,s.Z)((0,s.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status}))})}}]),r}(o.Component),C=(0,k.qC)((0,w.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorisedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{addPost:h.q2,getUserProfile:h.et,getStatus:h.lR,updateStatus:h.Nf}),b.E)(y)},2539:function(t,e,r){r.d(e,{t:function(){return f},i:function(){return p}});var s=r(8683),n=r(5987),a=(r(2791),"CustomTextarea_fieldControl__qQVHB"),i="CustomTextarea_fieldError__9NTyF",u="ErrorMessage_errors__mHYok",o=r(184),c=function(t){var e=t.children;return(0,o.jsx)("p",{className:u,children:e})},l=["errors"],d=["errors"],p=function(t){var e=t.errors,r=(0,n.Z)(t,l);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("textarea",(0,s.Z)({className:"".concat(a," ").concat(e[r.name]?i:"")},r)),(0,o.jsx)(c,{children:e[r.name]})]})},f=function(t){var e=t.errors,r=(0,n.Z)(t,d);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",(0,s.Z)({className:"".concat(a," ").concat(e[r.name]?i:"")},r)),(0,o.jsx)(c,{children:e[r.name]})]})}}}]);
//# sourceMappingURL=40.a4cf9f5e.chunk.js.map