"use strict";(self.webpackChunkqt3music_keycloak_theme=self.webpackChunkqt3music_keycloak_theme||[]).push([[990],{2282:function(e,s,a){a.r(s),a.d(s,{default:function(){return L}});var t=a(1413),r=a(2791),n=a(6989);var l=a(885),i=a(5987),o=a(8282),c=a(427),d=a(5110),p=a(6332),u=a(2982),m=a(5769),h=a(8737),x=a(2228),k=a(6196),j=window.kcContext.url.resourcesPath + "/build/static/media/chaincue-logo-crop1-dark.a02c7b07f7918904503c.png",C=a(184),g=(0,r.memo)((function(e){var s=e.displayInfo,a=void 0!==s&&s,t=e.displayMessage,n=void 0!==t&&t,i=e.displayRequiredFields,d=void 0!==i&&i,g=e.displayWide,f=void 0!==g&&g,v=e.showAnotherWayIfPresent,b=void 0===v||v,N=e.headerNode,y=e.showUsernameNode,F=void 0===y?null:y,Z=e.formNode,S=e.infoNode,w=void 0===S?null:S,T=e.kcContext,A=e.i18n,I=e.doFetchDefaultThemeResources,L=void 0!==I&&I,B=(0,c.R)().cx,P=A.msg,W=A.changeLocale,E=A.labelBySupportedLanguageTag,R=(A.currentLanguageTag,(0,h.useCallbackFactory)((function(e){var s=(0,l.Z)(e,1)[0];return W(s)}))),H=(0,o.useConstCallback)((function(){return document.forms["kc-select-try-another-way-form"].submit(),!1})),q=T.realm,U=T.locale,D=T.auth,M=T.url,G=T.message,O=T.isAppInitiatedAction,z=(0,r.useReducer)((function(){return!0}),!1),_=(0,l.Z)(z,2),V=_[0],J=_[1];return(0,r.useEffect)((function(){if(L){var s=!1,a=[],t=function(e){return"string"===typeof e?e.split(" "):null!==e&&void 0!==e?e:[]};if(Promise.all([].concat((0,u.Z)(t(e.stylesCommon).map((function(e){return console.log(e),console.log(M.resourcesCommonPath),(0,k.pathJoin)(M.resourcesCommonPath,e)}))),(0,u.Z)(t(e.styles).map((function(e){return(0,k.pathJoin)(M.resourcesPath,e)})))).reverse().map((function(e){return(0,x.t)({type:"css",href:e,position:"prepend"})}))).then((function(){s||J()})),t(e.scripts).forEach((function(e){return(0,x.t)({type:"javascript",src:(0,k.pathJoin)(M.resourcesPath,e)})})),void 0!==e.kcHtmlClass){var r=document.getElementsByTagName("html")[0].classList,n=B(e.kcHtmlClass).split(" ");r.add.apply(r,(0,u.Z)(n)),a.push((function(){return r.remove.apply(r,(0,u.Z)(n))}))}return function(){s=!0,a.forEach((function(e){return e()}))}}J()}),[e.kcHtmlClass]),V?(0,C.jsxs)("div",{className:B(e.kcLoginClass),children:[(0,C.jsx)(p.ZP,{container:!0,className:B(e.kcHeaderClass),children:(0,C.jsx)("img",{src:j,height:"100%",width:"100%"})}),(0,C.jsxs)("div",{className:B(e.kcFormCardClass,f&&e.kcFormCardAccountClass),children:[(0,C.jsxs)("header",{className:B(e.kcFormHeaderClass),children:[q.internationalizationEnabled&&((0,m.h)(void 0!==U),!0)&&U.supported.length>1&&(0,C.jsx)("div",{id:"kc-locale",children:(0,C.jsx)("div",{id:"kc-locale-wrapper",className:B(e.kcLocaleWrapperClass),children:(0,C.jsx)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:(0,C.jsx)("ul",{children:U.supported.map((function(e){var s=e.languageTag;return(0,C.jsx)("li",{className:"kc-dropdown-item",children:(0,C.jsx)("a",{href:"#",onClick:R(s),children:E[s]})},s)}))})})})}),void 0===D||!D.showUsername||D.showResetCredentials?d?(0,C.jsxs)("div",{className:B(e.kcContentWrapperClass),children:[(0,C.jsx)("div",{className:B(e.kcLabelWrapperClass,"subtitle"),children:(0,C.jsxs)("span",{className:"subtitle",children:[(0,C.jsx)("span",{className:"required",children:"*"}),P("requiredFields")]})}),(0,C.jsx)("div",{className:"col-md-10",children:(0,C.jsx)("h1",{id:"kc-page-title",children:N})})]}):(0,C.jsx)("h1",{id:"kc-page-title",children:N}):d?(0,C.jsxs)("div",{className:B(e.kcContentWrapperClass),children:[(0,C.jsx)("div",{className:B(e.kcLabelWrapperClass,"subtitle"),children:(0,C.jsxs)("span",{className:"subtitle",children:[(0,C.jsx)("span",{className:"required",children:"*"})," ",P("requiredFields")]})}),(0,C.jsxs)("div",{className:"col-md-10",children:[F,(0,C.jsx)("div",{className:B(e.kcFormGroupClass),children:(0,C.jsxs)("div",{id:"kc-username",children:[(0,C.jsx)("label",{id:"kc-attempted-username",children:null===D||void 0===D?void 0:D.attemptedUsername}),(0,C.jsx)("a",{id:"reset-login",href:M.loginRestartFlowUrl,children:(0,C.jsxs)("div",{className:"kc-login-tooltip",children:[(0,C.jsx)("i",{className:B(e.kcResetFlowIcon)}),(0,C.jsx)("span",{className:"kc-tooltip-text",children:P("restartLoginTooltip")})]})})]})})]})]}):(0,C.jsxs)(C.Fragment,{children:[F,(0,C.jsx)("div",{className:B(e.kcFormGroupClass),children:(0,C.jsxs)("div",{id:"kc-username",children:[(0,C.jsx)("label",{id:"kc-attempted-username",children:null===D||void 0===D?void 0:D.attemptedUsername}),(0,C.jsx)("a",{id:"reset-login",href:M.loginRestartFlowUrl,children:(0,C.jsxs)("div",{className:"kc-login-tooltip",children:[(0,C.jsx)("i",{className:B(e.kcResetFlowIcon)}),(0,C.jsx)("span",{className:"kc-tooltip-text",children:P("restartLoginTooltip")})]})})]})})]})]}),(0,C.jsx)("div",{id:"kc-content",children:(0,C.jsxs)("div",{id:"kc-content-wrapper",children:[n&&void 0!==G&&("warning"!==G.type||!O)&&(0,C.jsxs)("div",{className:B("alert","alert-".concat(G.type)),children:["success"===G.type&&(0,C.jsx)("span",{className:B(e.kcFeedbackSuccessIcon)}),"warning"===G.type&&(0,C.jsx)("span",{className:B(e.kcFeedbackWarningIcon)}),"error"===G.type&&(0,C.jsx)("span",{className:B(e.kcFeedbackErrorIcon)}),"info"===G.type&&(0,C.jsx)("span",{className:B(e.kcFeedbackInfoIcon)}),(0,C.jsx)("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:G.summary}})]}),Z,void 0!==D&&D.showTryAnotherWayLink&&b&&(0,C.jsx)("form",{id:"kc-select-try-another-way-form",action:M.loginAction,method:"post",className:B(f&&e.kcContentWrapperClass),children:(0,C.jsx)("div",{className:B(f&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,C.jsxs)("div",{className:B(e.kcFormGroupClass),children:[(0,C.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,C.jsx)("a",{href:"#",id:"try-another-way",onClick:H,children:P("doTryAnotherWay")})]})})}),a&&(0,C.jsx)("div",{id:"kc-info",className:B(e.kcSignUpClass),children:(0,C.jsx)("div",{id:"kc-info-wrapper",className:B(e.kcInfoAreaWrapperClass),children:w})})]})})]})]}):null})),f=a(4142),v=["kcContext","i18n"],b=(0,r.memo)((function(e){var s=e.kcContext,a=e.i18n,n=(0,i.Z)(e,v),u=s.social,m=s.realm,h=s.url,x=s.usernameEditDisabled,k=s.login,j=s.auth,b=s.registrationDisabled,N=(0,f.Z)(),y=((0,d.Z)(N.breakpoints.up("sm")),a.msg),F=a.msgStr,Z=(0,r.useState)(!1),S=(0,l.Z)(Z,2),w=(S[0],S[1],(0,c.R)().cx),T=(0,r.useState)(!1),A=(0,l.Z)(T,2),I=A[0],L=A[1],B=(0,o.useConstCallback)((function(e){var s;e.preventDefault(),L(!0);var a=e.target;null===(s=a.querySelector("input[name='email']"))||void 0===s||s.setAttribute("name","username"),a.submit()})),P="#f68133";return(0,C.jsx)(p.ZP,{container:!0,height:"100vh",width:"100%",justifyContent:"center",children:(0,C.jsx)(p.ZP,{item:!0,xs:8,sx:{"& .card-pf":{borderRadius:10,backgroundColor:"transparent"}},mt:20,children:(0,C.jsx)(g,(0,t.Z)((0,t.Z)({},(0,t.Z)({kcContext:s,i18n:a},n)),{},{doFetchDefaultThemeResources:!0,headerNode:y("doLogIn"),formNode:(0,C.jsxs)(p.ZP,{id:"kc-form",className:w(m.password&&void 0!==u.providers&&n.kcContentWrapperClass),children:[(0,C.jsx)("div",{id:"kc-form-wrapper",className:w(m.password&&u.providers&&[n.kcFormSocialAccountContentClass,n.kcFormSocialAccountClass]),children:m.password&&(0,C.jsxs)("form",{id:"kc-form-login",onSubmit:B,action:h.loginAction,method:"post",children:[(0,C.jsx)(p.ZP,{container:!0,children:function(){var e,s=m.loginWithEmailAllowed?m.registrationEmailAsUsername?"email":"usernameOrEmail":"username",a="usernameOrEmail"===s?"username":s;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("label",{htmlFor:a,className:w(n.kcLabelClass),children:y(s)}),(0,C.jsx)("input",(0,t.Z)({style:{backgroundColor:"transparent",border:"1px solid ".concat(P),color:"#d3d3d3"},tabIndex:1,id:a,className:w(n.kcInputClass),name:a,defaultValue:null!==(e=k.username)&&void 0!==e?e:"chatbot@gmail.com",type:"text"},x?{disabled:!0}:{autoFocus:!0,autoComplete:"off"}))]})}()}),(0,C.jsxs)("div",{className:w(n.kcFormGroupClass),children:[(0,C.jsx)("label",{htmlFor:"password",className:w(n.kcLabelClass),children:y("password")}),(0,C.jsx)("input",{style:{backgroundColor:"transparent",border:"1px solid ".concat(P),color:"#d3d3d3",":focus":{outline:"none",boxShadow:"0 0 0 3px red"}},tabIndex:2,id:"password",className:w(n.kcInputClass),name:"password",type:"password",autoComplete:"off",defaultValue:"chatbot@gmail.com"})]}),(0,C.jsxs)(p.ZP,{container:!0,className:w(n.kcFormGroupClass,n.kcFormSettingClass),children:[(0,C.jsx)(p.ZP,{item:!0,id:"kc-form-options",mt:3,children:m.rememberMe&&!x&&(0,C.jsx)("div",{className:"checkbox",children:(0,C.jsxs)("label",{children:[(0,C.jsx)("input",(0,t.Z)({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},k.rememberMe?{checked:!0}:{})),y("rememberMe")]})})}),(0,C.jsx)(p.ZP,{item:!0,mt:3,className:w(n.kcFormOptionsWrapperClass),children:m.resetPasswordAllowed&&(0,C.jsx)("span",{children:(0,C.jsx)("a",{tabIndex:5,href:h.loginResetCredentialsUrl,children:y("doForgotPassword")})})})]}),(0,C.jsxs)("div",{id:"kc-form-buttons",className:w(n.kcFormGroupClass),children:[(0,C.jsx)("input",(0,t.Z)({type:"hidden",id:"id-hidden-input",name:"credentialId"},void 0!==(null===j||void 0===j?void 0:j.selectedCredential)?{value:j.selectedCredential}:{})),(0,C.jsx)("input",{tabIndex:4,className:w(n.kcButtonClass,n.kcButtonPrimaryClass,n.kcButtonBlockClass,n.kcButtonLargeClass),name:"login",id:"kc-login",type:"submit",value:F("doLogIn"),disabled:I})]})]})}),m.password&&void 0!==u.providers&&(0,C.jsx)("div",{id:"kc-social-providers",className:w(n.kcFormSocialAccountContentClass,n.kcFormSocialAccountClass),children:(0,C.jsx)("ul",{className:w(n.kcFormSocialAccountListClass,u.providers.length>4&&n.kcFormSocialAccountDoubleListClass),children:u.providers.map((function(e){return(0,C.jsx)("li",{className:w(n.kcFormSocialAccountListLinkClass),children:(0,C.jsx)("a",{href:e.loginUrl,id:"zocial-".concat(e.alias),className:w("zocial",e.providerId),children:(0,C.jsx)("span",{children:e.displayName})})},e.providerId)}))})})]}),infoNode:m.password&&m.registrationAllowed&&!b&&(0,C.jsx)("div",{id:"kc-registration",children:(0,C.jsxs)("span",{children:[y("noAccount"),(0,C.jsx)("a",{tabIndex:6,href:h.registrationUrl,children:y("doRegister")})]})})}))})})})),N=a(785),y=["kcContext","i18n"],F=(0,r.memo)((function(e){var s=e.kcContext,a=e.i18n,n=(0,i.Z)(e,y),o=(0,c.R)().cx,d=a.msg,p=a.msgStr,u=s.url,m=s.isAppInitiatedAction,h=(0,r.useState)(!1),x=(0,l.Z)(h,2),k=x[0],j=x[1];return(0,C.jsx)(g,(0,t.Z)((0,t.Z)({},(0,t.Z)({kcContext:s,i18n:a},n)),{},{doFetchDefaultThemeResources:!0,headerNode:d("loginProfileTitle"),formNode:(0,C.jsxs)("form",{id:"kc-update-profile-form",className:o(n.kcFormClass),action:u.loginAction,method:"post",children:[(0,C.jsx)(N.M,(0,t.Z)({kcContext:s,onIsFormSubmittableValueChange:j,i18n:a},n)),(0,C.jsxs)("div",{className:o(n.kcFormGroupClass),children:[(0,C.jsx)("div",{id:"kc-form-options",className:o(n.kcFormOptionsClass),children:(0,C.jsx)("div",{className:o(n.kcFormOptionsWrapperClass)})}),(0,C.jsx)("div",{id:"kc-form-buttons",className:o(n.kcFormButtonsClass),children:m?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("input",{className:o(n.kcButtonClass,n.kcButtonPrimaryClass,n.kcButtonLargeClass),type:"submit",value:p("doSubmit")}),(0,C.jsx)("button",{className:o(n.kcButtonClass,n.kcButtonDefaultClass,n.kcButtonLargeClass),type:"submit",name:"cancel-aia",value:"true",formNoValidate:!0,children:d("doCancel")})]}):(0,C.jsx)("input",{className:o(n.kcButtonClass,n.kcButtonPrimaryClass,n.kcButtonBlockClass,n.kcButtonLargeClass),type:"submit",defaultValue:p("doSubmit"),disabled:!k})})]})]})}))})),Z=["kcContext","i18n"],S=(0,r.memo)((function(e){var s,a=e.kcContext,r=e.i18n,n=(0,i.Z)(e,Z),l=a.url,o=a.isAppInitiatedAction,d=a.totp,p=a.mode,u=a.messagesPerField,m=(0,c.R)().cx,h=r.msg,x=r.msgStr,k={HmacSHA1:"SHA1",HmacSHA256:"SHA256",HmacSHA512:"SHA512"};return(0,C.jsx)(g,(0,t.Z)((0,t.Z)({},(0,t.Z)({kcContext:a,i18n:r},n)),{},{doFetchDefaultThemeResources:!0,headerNode:h("loginTotpTitle"),formNode:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("ol",{id:"kc-totp-settings",children:[(0,C.jsxs)("li",{children:[(0,C.jsx)("p",{children:h("loginTotpStep1")}),(0,C.jsx)("ul",{id:"kc-totp-supported-apps",children:d.policy.supportedApplications.map((function(e){return(0,C.jsx)("li",{children:e})}))})]}),p&&"manual"==p?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("li",{children:[(0,C.jsx)("p",{children:h("loginTotpManualStep2")}),(0,C.jsx)("p",{children:(0,C.jsx)("span",{id:"kc-totp-secret-key",children:d.totpSecretEncoded})}),(0,C.jsx)("p",{children:(0,C.jsx)("a",{href:d.qrUrl,id:"mode-barcode",children:h("loginTotpScanBarcode")})})]}),(0,C.jsxs)("li",{children:[(0,C.jsx)("p",{children:h("loginTotpManualStep3")}),(0,C.jsx)("p",{children:(0,C.jsxs)("ul",{children:[(0,C.jsxs)("li",{id:"kc-totp-type",children:[h("loginTotpType"),": ",h("loginTotp.".concat(d.policy.type))]}),(0,C.jsxs)("li",{id:"kc-totp-algorithm",children:[h("loginTotpAlgorithm"),": ",null!==(s=null===k||void 0===k?void 0:k[d.policy.algorithm])&&void 0!==s?s:d.policy.algorithm]}),(0,C.jsxs)("li",{id:"kc-totp-digits",children:[h("loginTotpDigits"),": ",d.policy.digits]}),"totp"===d.policy.type?(0,C.jsxs)("li",{id:"kc-totp-period",children:[h("loginTotpInterval"),": ",d.policy.period]}):(0,C.jsxs)("li",{id:"kc-totp-counter",children:[h("loginTotpCounter"),": ",d.policy.initialCounter]})]})})]})]}):(0,C.jsxs)("li",{children:[(0,C.jsx)("p",{children:h("loginTotpStep2")}),(0,C.jsx)("img",{id:"kc-totp-secret-qr-code",src:"data:image/png;base64, ".concat(d.totpSecretQrCode),alt:"Figure: Barcode"}),(0,C.jsx)("br",{}),(0,C.jsx)("p",{children:(0,C.jsx)("a",{href:d.manualUrl,id:"mode-manual",children:h("loginTotpUnableToScan")})})]}),(0,C.jsxs)("li",{children:[(0,C.jsx)("p",{children:h("loginTotpStep3")}),(0,C.jsx)("p",{children:h("loginTotpStep3DeviceName")})]})]}),(0,C.jsxs)("form",{action:l.loginAction,className:m(n.kcFormClass),id:"kc-totp-settings-form",method:"post",children:[(0,C.jsxs)("div",{className:m(n.kcFormGroupClass),children:[(0,C.jsxs)("div",{className:m(n.kcInputWrapperClass),children:[(0,C.jsx)("label",{htmlFor:"totp",className:m(n.kcLabelClass),children:h("authenticatorCode")})," ",(0,C.jsx)("span",{className:"required",children:"*"})]}),(0,C.jsxs)("div",{className:m(n.kcInputWrapperClass),children:[(0,C.jsx)("input",{type:"text",id:"totp",name:"totp",autoComplete:"off",className:m(n.kcInputClass),"aria-invalid":u.existsError("totp")}),u.existsError("totp")&&(0,C.jsx)("span",{id:"input-error-otp-code",className:m(n.kcInputErrorMessageClass),"aria-live":"polite",children:u.get("totp")})]}),(0,C.jsx)("input",{type:"hidden",id:"totpSecret",name:"totpSecret",value:d.totpSecret}),p&&(0,C.jsx)("input",{type:"hidden",id:"mode",value:p})]}),(0,C.jsxs)("div",{className:m(n.kcFormGroupClass),children:[(0,C.jsxs)("div",{className:m(n.kcInputWrapperClass),children:[(0,C.jsx)("label",{htmlFor:"userLabel",className:m(n.kcLabelClass),children:h("loginTotpDeviceName")})," ",d.otpCredentials.length>=1&&(0,C.jsx)("span",{className:"required",children:"*"})]}),(0,C.jsxs)("div",{className:m(n.kcInputWrapperClass),children:[(0,C.jsx)("input",{type:"text",id:"userLabel",name:"userLabel",autoComplete:"off",className:m(n.kcInputClass),"aria-invalid":u.existsError("userLabel")}),u.existsError("userLabel")&&(0,C.jsx)("span",{id:"input-error-otp-label",className:m(n.kcInputErrorMessageClass),"aria-live":"polite",children:u.get("userLabel")})]})]}),o?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("input",{type:"submit",className:m(n.kcButtonClass,n.kcButtonPrimaryClass,n.kcButtonLargeClass),id:"saveTOTPBtn",value:x("doSubmit")}),(0,C.jsxs)("button",{type:"submit",className:m(n.kcButtonClass,n.kcButtonDefaultClass,n.kcButtonLargeClass,n.kcButtonLargeClass),id:"cancelTOTPBtn",name:"cancel-aia",value:"true",children:["$",h("doCancel")]})]}):(0,C.jsx)("input",{type:"submit",className:m(n.kcButtonClass,n.kcButtonPrimaryClass,n.kcButtonLargeClass),id:"saveTOTPBtn",value:x("doSubmit")})]})]})}))})),w=(0,r.lazy)((function(){return a.e(749).then(a.bind(a,4749))})),T=(0,r.lazy)((function(){return a.e(339).then(a.bind(a,2467))})),A=(0,r.lazy)((function(){return a.e(347).then(a.bind(a,8347))})),I=(0,r.lazy)((function(){return a.e(628).then(a.bind(a,9628))}));var L=function(e){var s=e.kcContext,a=function(e){var s=e.kcContext;return(0,n.QT)({kcContext:s,extraMessages:{en:{alphanumericalCharsOnly:"Only alphanumerical characters",gender:"Gender",doForgotPassword:"I forgot my password"},fr:{alphanumericalCharsOnly:"Caract\xe8re alphanum\xe9rique uniquement",gender:"Genre",doForgotPassword:"J'ai oubli\xe9 mon mot de passe"}}})}({kcContext:s});if(null===a)return null;var l=(0,t.Z)((0,t.Z)({i18n:a},n.W0),{},{kcHeaderWrapperClass:"my-color my-font"});return(0,C.jsx)(r.Suspense,{children:function(){switch(s.pageId){case"register.ftl":return(0,C.jsx)(w,(0,t.Z)({},(0,t.Z)({kcContext:s},l)));case"login.ftl":return(0,C.jsx)(b,(0,t.Z)({},(0,t.Z)({kcContext:s},l)));case"terms.ftl":return(0,C.jsx)(T,(0,t.Z)({},(0,t.Z)({kcContext:s},l)));case"update-user-profile.ftl":return(0,C.jsx)(F,(0,t.Z)({},(0,t.Z)({kcContext:s},l)));case"login-config-totp.ftl":return(0,C.jsx)(S,(0,t.Z)({},(0,t.Z)({kcContext:s},l)));case"my-extra-page-1.ftl":return(0,C.jsx)(I,(0,t.Z)({},(0,t.Z)({kcContext:s},l)));case"my-extra-page-2.ftl":return(0,C.jsx)(A,(0,t.Z)({},(0,t.Z)({kcContext:s},l)));default:return(0,C.jsx)(n.ZP,(0,t.Z)({},(0,t.Z)({kcContext:s},l)))}}()})}}}]);
//# sourceMappingURL=990.7d10d572.chunk.js.map