(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2bd9a330":"f11421a4","chunk-2d0b5a71":"0986e0be","chunk-2d0c06b5":"96684a26","chunk-2d0d645d":"e15dfe27","chunk-2d0dae84":"c81fb142","chunk-2d20813a":"aa01b7b8","chunk-2d210c47":"444b160f","chunk-2d226384":"817577c0","chunk-2d22892b":"25744f74","chunk-2d22d746":"f8b90184"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}r[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/resourcing/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("8a23"),r=a.n(n);r.a},"0e5f":function(t,e,a){t.exports=a.p+"img/shahrzad_manoocheri.282902a4.jpg"},"0f3a":function(t,e,a){t.exports=a.p+"img/annika_glatz.8a911ca6.jpg"},1595:function(t,e,a){},"1e3b":function(t,e,a){"use strict";var n=a("1595"),r=a.n(n);r.a},"1f8b":function(t,e,a){t.exports=a.p+"img/marie-theres_kugerl.5cecbfda.jpg"},3546:function(t,e,a){t.exports=a.p+"img/andreas_endl.e4a285b7.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("top-toolbar"),a("app-header"),a("v-main",{staticClass:"main"},[a("v-container",{staticClass:"pa-0",class:t.bodyColor,attrs:{fluid:""}},[a("v-sheet",{staticClass:"drop-shadow",attrs:{color:"accent3",height:"38",width:"100%"}}),a("router-view",{class:{"pa-3":t.addPaddingToRouteView}}),t.showBottomSheet?a("v-sheet",{staticClass:"drop-shadow",attrs:{color:"accent3",height:"38",width:"100%"}}):t._e()],1)],1),a("app-footer")],1)},i=[],o=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-header"},[a("navigation-drawer",{attrs:{drawer:t.drawer},on:{"update:drawer":function(e){t.drawer=e}}}),a("app-bar",{on:{"update:drawer":function(e){t.drawer=!t.drawer}}})],1)}),s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticStyle:{"z-index":"2001"},attrs:{value:t.drawer,app:"",temporary:"",dark:"",color:"primary"},on:{input:function(e){return t.$emit("update:drawer",e)}}},[a("v-list",{attrs:{dense:""}},[a("v-subheader",[t._v("ROUTES")]),t._l(t.externalResources,(function(e){return a("v-list-item",{key:e.text,attrs:{title:e.text,to:e.url,exact:""}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)}))],2)],1)},l=[],d={name:"NavigationDrawer",props:{drawer:{type:Boolean,required:!0}},data:function(){return{externalResources:[{icon:"fas fa-home",text:"Home",url:"/"},{icon:"far fa-address-card",text:"About",url:"/about"},{icon:"far fa-flag",text:"Purpose and objectives",url:"/about/purpose_and_objectives"},{icon:"far fa-handshake",text:"Partners",url:"/about/partners"},{icon:"fas fa-users",text:"Target groups",url:"/target_groups"},{icon:"far fa-newspaper",text:"News",url:"/news"},{icon:"far fa-calendar-alt",text:"Events",url:"/events"},{icon:"fas fa-info-circle",text:"Knowledge hub",url:"/knowledge_hub"},{icon:"far fa-address-book",text:"Contact",url:"/contact"}]}}},u=d,p=a("2877"),f=a("6544"),m=a.n(f),v=a("132d"),b=a("8860"),h=a("da13"),g=a("1800"),x=a("5d23"),y=a("f774"),w=a("e0c7"),_=Object(p["a"])(u,c,l,!1,null,"5ea96d74",null),C=_.exports;m()(_,{VIcon:v["a"],VList:b["a"],VListItem:h["a"],VListItemAction:g["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VNavigationDrawer:y["a"],VSubheader:w["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"app-bar",attrs:{dark:"",app:"",color:"primary2",absolute:"",height:"56"}},[a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",attrs:{"aria-label":"Open navigation drawer"},on:{click:function(e){return e.stopPropagation(),t.$emit("update:drawer")}}}),a("v-tooltip",{attrs:{bottom:"",disabled:"Home"===t.$route.name},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-toolbar-title",t._g({staticClass:"ml-4 hidden-md-and-up font-weight-bold",class:{"title-link":"Home"!==t.$route.name},staticStyle:{"letter-spacing":"1.1px"},on:{click:t.goToHomePage}},n),[t._v(" re-sourcing ")])]}}])},[a("span",[t._v("Go to home page")])]),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{text:"",to:"/",exact:""}},[t._v("Home")]),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({class:t.aboutIsActive?"v-btn--active":"",attrs:{text:""}},n),[t._v(" About "),a("v-icon",{attrs:{right:""}},[t._v(t._s(t.aboutDropdown?"fas fa-caret-up":"fas fa-caret-down"))])],1)]}}]),model:{value:t.aboutDropdown,callback:function(e){t.aboutDropdown=e},expression:"aboutDropdown"}},[a("v-list",{attrs:{color:"primary2",dark:""}},[a("v-list-item",{attrs:{to:"/about",exact:""}},[a("v-list-item-title",[t._v("ABOUT")])],1),a("v-list-item",{attrs:{to:"/about/purpose_and_objectives",exact:""}},[a("v-list-item-title",[t._v("PURPOSE AND OBJECTIVES")])],1),a("v-list-item",{attrs:{to:"/about/partners",exact:""}},[a("v-list-item-title",[t._v("PARTNERS")])],1)],1)],1),a("v-btn",{attrs:{text:"",to:"/target_groups",exact:""}},[t._v("Target groups")]),a("v-btn",{attrs:{text:"",to:"/news",exact:""}},[t._v("News")]),a("v-btn",{attrs:{text:"",to:"/events",exact:""}},[t._v("Events")]),a("v-btn",{attrs:{text:"",to:"/knowledge_hub",exact:""}},[t._v("Knowledge hub")]),a("v-btn",{attrs:{text:"",to:"/contact",exact:""}},[t._v("Contact")])],1)],1)},j=[],S={name:"AppBar",data:function(){return{aboutDropdown:!1}},computed:{aboutIsActive:function(){var t=this.$route.name;return"About"===t||"Purpose and objectives"===t||"Partners"===t}},methods:{goToHomePage:function(){"Home"!==this.$route.name&&this.$router.push({path:"/"})}}},V=S,E=(a("63c0"),a("40dc")),A=a("5bc1"),T=a("8336"),P=a("e449"),R=a("2a7f"),O=a("3a2f"),I=Object(p["a"])(V,k,j,!1,null,"dae5c540",null),M=I.exports;m()(I,{VAppBar:E["a"],VAppBarNavIcon:A["a"],VBtn:T["a"],VIcon:v["a"],VList:b["a"],VListItem:h["a"],VListItemTitle:x["b"],VMenu:P["a"],VToolbarItems:R["a"],VToolbarTitle:R["b"],VTooltip:O["a"]});var $={name:"AppHeader",components:{AppBar:M,NavigationDrawer:C},data:function(){return{drawer:!1}}},B=$,L=Object(p["a"])(B,o,s,!1,null,"4151dc16",null),U=L.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"footer",attrs:{color:"primary2",dark:"",padless:""}},[n("v-card",{staticClass:"transparent",attrs:{flat:"",tile:"",width:"100%"}},[n("v-row",{staticClass:"py-4 px-2",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-2 d-flex flex-row justify-space-around",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"align-self-center mr-2"},[n("v-img",{attrs:{src:a("ab02"),"max-width":"100"}})],1),n("div",{staticClass:"align-self-center ml-2"},[t._v(" This project has received funding from the European Union's Horizon 2020 research and innovation program under Grant Agreement No. 869276 ")])]),n("v-col",{staticClass:"pa-2 d-flex",attrs:{cols:"12",sm:"6",md:"3"}},[n("div",{staticClass:"flex-grow-1"}),n("div",[n("p",{staticClass:"mb-0 font-weight-bold"},[t._v("Quick links")]),n("ul",t._l(t.quickLinks,(function(e){return n("li",{key:e.name},[n("router-link",{staticClass:"white--text link",attrs:{to:e.url}},[t._v(t._s(e.name))])],1)})),0)]),n("div",{staticClass:"flex-grow-1"})]),n("v-col",{staticClass:"pa-2 coordinated-by align-self-center d-flex",attrs:{cols:"12",sm:"6",md:"3"}},[n("div",{staticClass:"flex-grow-1"}),n("div",[n("p",{staticClass:"font-weight-bold"},[t._v("Coordinated by:")]),n("p",{staticClass:"font-weight-bold"},[t._v(" Vienna University of Economics and Business, ")]),n("p",{staticClass:"font-weight-bold"},[t._v(" Institute for Managing Sustainability ")]),n("p",[t._v("Welthandelsplatz 1A")]),n("p",[t._v("1020 Vienna")]),n("p",[t._v(" email: "),n("a",{staticClass:"white--text link",attrs:{href:"mailto:info@re-sourcing.eu"}},[t._v("info@re-sourcing.eu")])])]),n("div",{staticClass:"flex-grow-1 flex-sm-grow-0"})])],1)],1),n("v-toolbar",{staticClass:"bottom-toolbar",attrs:{color:"primary3",dense:"",height:"38"}})],1)},F=[],N={name:"AppFooter",data:function(){return{quickLinks:[{name:"Contact us",url:"/contact"},{name:"Partners",url:"/about/partners"},{name:"News",url:"/news"},{name:"Legal Notice",url:"/legal_notice"},{name:"Privacy Policy",url:"/privacy_policy"}]}}},H=N,G=(a("9f62"),a("b0af")),W=a("62ad"),z=a("553a"),K=a("adda"),q=a("0fd9"),J=a("71d9"),Q=Object(p["a"])(H,D,F,!1,null,"4c427a96",null),X=Q.exports;m()(Q,{VCard:G["a"],VCol:W["a"],VFooter:z["a"],VImg:K["a"],VRow:q["a"],VToolbar:J["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-toolbar"},[a("v-toolbar",{attrs:{color:"primary3",dense:"",height:"38"}}),a("landing-banner")],1)},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"landing-banner",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"hidden-xs-only pa-3",attrs:{sm:"4"}},[n("v-img",{staticClass:"project-logo",attrs:{contain:"",src:a("dfd2")}})],1),n("v-col",{attrs:{cols:"12",sm:"8",align:"end"}},[n("video",{staticClass:"landing-banner",class:{"object-fit-cover":t.$vuetify.breakpoint.xsOnly},attrs:{width:t.$vuetify.breakpoint.xsOnly?"100%":"",autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:a("d809"),type:"video/mp4"}})])])],1)},et=[],at={name:"LandingBanner"},nt=at,rt=(a("af1b"),Object(p["a"])(nt,tt,et,!1,null,"745c1730",null)),it=rt.exports;m()(rt,{VCol:W["a"],VImg:K["a"],VRow:q["a"]});var ot={name:"TopToolbar",components:{LandingBanner:it}},st=ot,ct=Object(p["a"])(st,Y,Z,!1,null,"2edc097e",null),lt=ct.exports;m()(ct,{VToolbar:J["a"]});var dt={name:"App",components:{TopToolbar:lt,AppFooter:X,AppHeader:U},computed:{bodyColor:function(){var t=this.$route.name;return"Events"===t||"Home"===t||"About"===t||"Purpose and objectives"===t?"primary5":"primary2"},showBottomSheet:function(){var t=this.$route.name;return"Events"===t},addPaddingToRouteView:function(){var t=this.$route.name;return"Home"!==t&&"About"!==t&&"Purpose and objectives"!==t}}},ut=dt,pt=(a("034f"),a("7496")),ft=a("a523"),mt=a("f6c4"),vt=a("8dd9"),bt=Object(p["a"])(ut,r,i,!1,null,null,null),ht=bt.exports;m()(bt,{VApp:pt["a"],VContainer:ft["a"],VMain:mt["a"],VSheet:vt["a"]});a("d3b7");var gt=a("8c4f"),xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"py-3",class:{"px-5":t.$vuetify.breakpoint.smAndDown,"px-12":t.$vuetify.breakpoint.mdAndUp},attrs:{cols:"12",md:"9"}},[n("div",{staticClass:"primary--text text-h5 font-weight-bold mt-2 mb-5"},[t._v(" RE-SOURCING - Make your case for Responsible Sourcing! ")]),n("div",{staticClass:"text-body-1 mb-3"},[t._v(" Responsible Sourcing is becoming a reality for more and more businesses, NGOs, and policymakers. Everyone is striving to keep ahead of rapidly evolving ecological and social needs, company practices, business models, government regulations, and initiatives spearheaded by civil society, etc. ")]),n("div",{staticClass:"text-body-1 mb-3"},[t._v(" In response to the growing challenge of responsible sourcing, the Vienna University of Economics and Business, together with 11 international partners, started the RE-SOURCING Global Stakeholder Platform in 2020. ")]),n("div",{staticClass:"text-body-1"},[t._v(" Over the period of four years, the RE-SOURCING Platform will help decision-makers in industry, public policy and civil society to: ")]),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"d-flex primary3 white--text",attrs:{"min-height":"200",elevation:"4"}},[n("v-card-title",{staticClass:"font-weight-bold text-h6",staticStyle:{"word-break":"break-word"}},[t._v(" Learn together from innovative business cases for Responsible Sourcing")]),n("v-card",{staticClass:"py-4 px-6 align-self-center mr-4",attrs:{elevation:"6"}},[n("v-icon",{attrs:{color:"primary","x-large":""}},[t._v("far fa-lightbulb")])],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"d-flex primary3 white--text",attrs:{"min-height":"200",elevation:"4"}},[n("v-card-title",{staticClass:"font-weight-bold text-h6",staticStyle:{"word-break":"break-word"}},[t._v(" Create Responsible Sourcing Industry Roadmaps for renewable energy, mobility and electronics in the EU")]),n("v-card",{staticClass:"py-4 px-5 align-self-center mr-4",attrs:{elevation:"6"}},[n("v-icon",{attrs:{color:"primary","x-large":""}},[t._v("fas fa-recycle")])],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"d-flex primary3 white--text",attrs:{"min-height":"200",elevation:"4"}},[n("v-card-title",{staticClass:"font-weight-bold text-h6",staticStyle:{"word-break":"break-word"}},[t._v(" Advance the harmonization of concepts and establish a Global Definition of Responsible Sourcing")]),n("v-card",{staticClass:"pa-4 align-self-center mr-4",attrs:{elevation:"6"}},[n("v-icon",{attrs:{color:"primary","x-large":""}},[t._v("far fa-edit")])],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"d-flex primary3 white--text",attrs:{"min-height":"200",elevation:"4"}},[n("v-card-title",{staticClass:"font-weight-bold text-h6",staticStyle:{"word-break":"break-word"}},[t._v(" Build a global Responsible Sourcing Community by connecting existing networks & stakeholders and expanding their base")]),n("v-card",{staticClass:"py-4 px-5 align-self-center mr-4",attrs:{elevation:"6"}},[n("v-icon",{attrs:{color:"primary","x-large":""}},[t._v("fas fa-expand-arrows-alt")])],1)],1)],1)],1)],1),n("v-col",{staticClass:"d-flex primary2",attrs:{cols:"12",md:"3"}},[n("v-row",{staticClass:"my-3",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"px-5 py-3",attrs:{cols:"12"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 primary--text"},[t._v("Latest news")]),n("v-card-text",[n("div",{staticClass:"d-flex justify-center"},[n("v-img",{attrs:{contain:"","max-width":"400","aspect-ratio":"1.778",src:a("b46b")}})],1),n("div",{staticClass:"mt-2 text-h6"},[n("a",{attrs:{href:"https://www.wu.ac.at/en/sustainability/news-details/detail/eu-project-re-sourcing-successful-project-kick-off-meeting-at-the-wu-vienna",target:"NewsWindow"}},[t._v("EU project RE-SOURCING: Successful project Kick-off meeting at the WU Vienna")])])]),n("v-card-actions",{staticClass:"d-flex flex-wrap"},[n("v-btn",{attrs:{small:"",color:"accent3"},on:{click:function(e){return t.$vuetify.goTo(".subscribe")}}},[t._v(" Subscribe ")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticStyle:{color:"#2867B2"}},[t._v("fab fa-linkedin")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticStyle:{color:"#1DA1F2"}},[t._v("fab fa-twitter")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticStyle:{color:"#4267B2"}},[t._v("fab fa-facebook")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticStyle:{color:"#FF0000"}},[t._v("fab fa-youtube")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("fab fa-instagram")])],1)],1)],1)],1),n("v-col",{staticClass:"px-5 py-3",attrs:{cols:"12"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 primary--text"},[t._v("Upcoming news")]),n("v-card-text",[n("div",{staticClass:"d-flex justify-center"},[n("v-img",{attrs:{contain:"","max-width":"400","aspect-ratio":"1.778",src:a("dfd2")}})],1),n("div",{staticClass:"mt-2 text-h6"},[n("span",[t._v("Register to our opening conference at Vienna, Austria")])])])],1)],1)],1)],1)],1),n("v-sheet",{staticClass:"drop-shadow",attrs:{color:"accent3",height:"38",width:"100%"}}),n("v-row",{staticClass:"primary2",attrs:{"no-gutters":"",justify:"center"}},[n("v-col",{staticClass:"my-3 primary2 white--text",class:{"px-5":t.$vuetify.breakpoint.smAndDown,"px-12":t.$vuetify.breakpoint.mdAndUp},attrs:{cols:"12",md:"9"}},[n("div",{staticClass:"text-h5 font-weight-bold mt-2 mb-5"},[t._v(" A team with diverse backgrounds to match the challenge ")]),n("div",{staticClass:"text-body-1 mb-3"},[t._v(" Our team composition facilitates the setup of the RE-SOURCING Global Stakeholder Platform as a neutral and mediating space that is open to the many perspectives of involved stakeholders. Our skills, comprehensive background and expertise in the area of industry, academia and civil society will create the way forward that works for all: the planet, the people and businesses alike. ")])]),n("v-col",{staticClass:"pa-2 primary5",attrs:{cols:"12"}},[n("carousel-3d",{attrs:{id:"members","controls-visible":!0,space:400,height:300}},t._l(t.members,(function(e,a){return n("slide",{key:e.name,attrs:{index:a}},[n("v-card",{staticClass:"d-flex flex-column transparent fill-height"},[e.img?n("v-avatar",{staticClass:"align-self-center rounded-circle",attrs:{size:"150"}},[n("v-img",{class:e.name.replace(/ /g,"_").toLowerCase(),staticStyle:{"background-position":"top"},attrs:{"aspect-ratio":"1",src:e.img}})],1):t._e(),n("v-card-text",{staticClass:"text-center py-2"},[n("div",{staticClass:"font-weight-bold text-h5 mb-2"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"text-body-1 mb-1"},[t._v(t._s(e.institute))]),n("div",{staticClass:"text-body-2"},[t._v(t._s(e.job))])])],1)],1)})),1)],1),n("v-col",{staticClass:"py-3 text-center white--text subscribe",class:{"px-5":t.$vuetify.breakpoint.smAndDown,"px-12":t.$vuetify.breakpoint.mdAndUp},attrs:{cols:"12",md:"9"}},[n("div",{staticClass:"text-h6 font-weight-bold mt-2"},[t._v(" Be the first to read what's new! Subscribe to mailing list: ")]),n("div",{staticClass:"d-flex flex-row mx-auto mb-2",staticStyle:{"max-width":"400px"}},[n("v-text-field",{staticClass:"mr-2",attrs:{dense:"",height:"44",solo:"","hide-details":"",placeholder:"Enter your email address",type:"email"},model:{value:t.usersEmailAddress,callback:function(e){t.usersEmailAddress=e},expression:"usersEmailAddress"}}),n("v-btn",{attrs:{fab:t.$vuetify.breakpoint.xsOnly,large:t.$vuetify.breakpoint.smAndUp,height:t.$vuetify.breakpoint.xsOnly?44:"",width:t.$vuetify.breakpoint.xsOnly?44:"",color:"accent3"},on:{click:function(e){return t.subscribeToMailingList()}}},[n("span",{staticClass:"hidden-xs-only text-body-1 align-self-center"},[t._v("Subscribe")]),n("v-icon",{attrs:{right:t.$vuetify.breakpoint.smAndUp}},[t._v("far fa-envelope")])],1)],1)])],1),n("v-sheet",{staticClass:"drop-shadow",attrs:{color:"accent3",height:"38",width:"100%"}}),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("iframe",{staticClass:"fill-height",staticStyle:{"min-height":"360px"},attrs:{width:"100%",src:"https://www.youtube.com/embed/48Q2OxH_64w?start=5"}})]),n("v-col",{staticClass:"px-3 pt-3 pb-5",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"text-h6 font-weight-bold primary--text mb-5"},[t._v(" The latest news... ")]),n("div",{staticClass:"d-flex flex-row flex-wrap flex-md-nowrap justify-space-around align-self-center"},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[n("v-card",{staticClass:"py-2 px-3",attrs:{elevation:a?12:4,hover:""}},[n("v-icon",{staticStyle:{color:"#2867B2"},attrs:{"x-large":""}},[t._v("fab fa-linkedin-in")])],1)]}}])}),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[n("v-card",{staticClass:"py-2 px-3",attrs:{elevation:a?12:4,hover:""}},[n("v-icon",{staticStyle:{color:"#4267B2"},attrs:{"x-large":""}},[t._v("fab fa-facebook-square")])],1)]}}])}),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[n("v-card",{staticClass:"py-2 px-3",attrs:{elevation:a?12:4,hover:""}},[n("v-icon",{staticStyle:{color:"#1DA1F2"},attrs:{"x-large":""}},[t._v("fab fa-twitter-square")])],1)]}}])})],1)])],1)],1)},yt=[],wt=a("3cf7"),_t={name:"Home",components:{Carousel3d:wt["Carousel3d"],Slide:wt["Slide"]},data:function(){return{usersEmailAddress:"",members:[{name:"Bas de Leeuw",institute:"World Resources Forum",job:"Managing Director, Communication and Stakeholder Engagement",img:a("de79")},{name:"Mathias Schluep",institute:"World Resources Forum",job:"Program Director, Communication and Stakeholder Engagement",img:a("77de")},{name:"Shahrzad Manoochehri",institute:"World Resources Forum",job:"Project Manager, Communication and Stakeholder Engagement",img:a("0e5f")},{name:"Gerald Berger",institute:"Institute for Managing Sustainability, Vienna University of Economics and Business",job:"Project coordination & event and peer learning design",img:a("f630")},{name:"Andreas Endl",institute:"Vienna University of Economics and Business",job:"Project coordination & research",img:a("3546")},{name:"Tobias Kind",institute:"World Wide Fund For Nature (WWF) Germany",job:"Global Lead Mining & Metals",img:a("5f5b")},{name:"Esther Laabs",institute:"EIT RawMaterials GmbH",job:"Project Manager Innovation",img:a("9b19")},{name:"Patrick Nadoll",institute:"EIT RawMaterials GmbH",job:"Senior Adviser/Exploration and Resource Assessment",img:a("d9b7")},{name:"Annika Glatz",institute:"AHK Chile (German-Chilean Chamber of Commerce and Industry)",job:"Leader Mining & Sustainability",img:a("0f3a")},{name:"Iris Wunderlich",institute:"AHK Chile (German-Chilean Chamber of Commerce and Industry)",job:"Senior Project Manager Energy, Mining & Sustainability",img:a("9bfe")},{name:"Peter Dolega",institute:"Öko-Institut e.V.",job:"Researcher with focus on resources and mobility",img:a("e295")},{name:"Stefanie Degreif",institute:"Öko-Institut e.V.",job:"Researcher, Division Resources & Transport",img:a("6dc7")},{name:"Michael Tost",institute:"Montan Universität Leoben",job:"Chair of Mining Engineering and Mineral Economics, Senior Researcher, Project Manager",img:a("8db7")},{name:"Marie-Theres Kügerl",institute:"Montan Universität Leoben",job:"Chair of Mining Engineering and Mineral Economics, Junior Researcher",img:a("1f8b")},{name:"Noé Barriere",institute:"Vienna University of Economics of Business",job:"Peer learning on innovative business cases",img:a("dd9c")},{name:"Alexander Graf",institute:"Institute for Managing Sustainability, Vienna University of Economics and Business",job:"Project Coordination & Research",img:a("6469")},{name:"Masuma Farooki",institute:"MineHutte",job:"Consulting Director",img:a("a484")}]}},methods:{subscribeToMailingList:function(){this.validateEmail(this.usersEmailAddress)?console.log("Todo: Subscribe to mailing list"):console.log("Todo: This is not a valid email address!")},validateEmail:function(t){var e=/\S+@\S+\.\S+/;return e.test(String(t).toLowerCase())}}},Ct=_t,kt=(a("1e3b"),a("8212")),jt=a("99d9"),St=a("ce87"),Vt=a("2fa4"),Et=a("8654"),At=Object(p["a"])(Ct,xt,yt,!1,null,null,null),Tt=At.exports;m()(At,{VAvatar:kt["a"],VBtn:T["a"],VCard:G["a"],VCardActions:jt["a"],VCardText:jt["b"],VCardTitle:jt["c"],VCol:W["a"],VHover:St["a"],VIcon:v["a"],VImg:K["a"],VRow:q["a"],VSheet:vt["a"],VSpacer:Vt["a"],VTextField:Et["a"]}),n["a"].use(gt["a"]);var Pt=[{path:"/",name:"Home",component:Tt},{path:"/about",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))},children:[{path:"purpose_and_objectives",name:"Purpose and objectives",component:function(){return a.e("chunk-2d0dae84").then(a.bind(null,"6e32"))}},{path:"partners",name:"Partners",component:function(){return a.e("chunk-2d0b5a71").then(a.bind(null,"1a8c"))}}]},{path:"/target_groups",name:"Target groups",component:function(){return a.e("chunk-2d0c06b5").then(a.bind(null,"4267"))}},{path:"/news",name:"News",component:function(){return a.e("chunk-2d20813a").then(a.bind(null,"a2f9"))}},{path:"/events",name:"Events",component:function(){return a.e("chunk-2bd9a330").then(a.bind(null,"aa9c"))}},{path:"/knowledge_hub",name:"Knowledge hub",component:function(){return a.e("chunk-2d226384").then(a.bind(null,"e872"))}},{path:"/contact",name:"Contact",component:function(){return a.e("chunk-2d210c47").then(a.bind(null,"b8fa"))}},{path:"/legal_notice",name:"Legal notice",component:function(){return a.e("chunk-2d22892b").then(a.bind(null,"da80"))}},{path:"/privacy_policy",name:"Privacy policy",component:function(){return a.e("chunk-2d0d645d").then(a.bind(null,"729e"))}}],Rt=new gt["a"]({routes:Pt}),Ot=Rt,It=a("f309");n["a"].use(It["a"]);var Mt=new It["a"]({theme:{themes:{light:{primary:"#1c5469",primary2:"#397992",primary3:"#7cb0bd",primary4:"#c6dde3",primary5:"#eef4f5",accent:"#972e63",accent2:"#a7b32a",accent3:"#f0a846",secondary:"#607D8B",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",mineral:"#E91E63",rock:"#0288D1",meteorite:"#689F38"}}},icons:{iconfont:"fa"}});a("15f5");n["a"].config.productionTip=!1,new n["a"]({router:Ot,vuetify:Mt,render:function(t){return t(ht)}}).$mount("#app")},"5f5b":function(t,e,a){t.exports=a.p+"img/tobias_kind.027f1892.jpg"},"63c0":function(t,e,a){"use strict";var n=a("eb3f"),r=a.n(n);r.a},6469:function(t,e,a){t.exports=a.p+"img/alexander_graf.46199cee.jpg"},"6dc7":function(t,e,a){t.exports=a.p+"img/stefanie_degreif.bad6a24e.jpg"},7438:function(t,e,a){},"77de":function(t,e,a){t.exports=a.p+"img/mathias_schluep.5e02771a.jpg"},"8a23":function(t,e,a){},"8db7":function(t,e,a){t.exports=a.p+"img/michael_tost.745d4615.jpg"},"9b19":function(t,e,a){t.exports=a.p+"img/esther_laabs.bf6476d0.jpg"},"9bfe":function(t,e,a){t.exports=a.p+"img/iris_wunderlich.5fed9c09.jpg"},"9f62":function(t,e,a){"use strict";var n=a("7438"),r=a.n(n);r.a},a484:function(t,e,a){t.exports=a.p+"img/masuma_farooki.750f41d7.jpg"},ab02:function(t,e,a){t.exports=a.p+"img/1200px-Flag_of_Europe.svg.e1a5cb6f.png"},af1b:function(t,e,a){"use strict";var n=a("cb40"),r=a.n(n);r.a},b46b:function(t,e,a){t.exports=a.p+"img/news.9ea80f1f.jpg"},cb40:function(t,e,a){},d809:function(t,e,a){t.exports=a.p+"media/logo_animation.18ca5105.mp4"},d9b7:function(t,e,a){t.exports=a.p+"img/patrick_nadoll.018cec28.jpeg"},dd9c:function(t,e,a){t.exports=a.p+"img/noe_barriere.6f3392f2.jpg"},de79:function(t,e,a){t.exports=a.p+"img/bas_deleeuw.1fa624da.jpg"},dfd2:function(t,e,a){t.exports=a.p+"img/re-sourcing_transparent.08acee02.png"},e295:function(t,e,a){t.exports=a.p+"img/peter_dolega.0a3ec978.jpg"},eb3f:function(t,e,a){},f630:function(t,e,a){t.exports=a.p+"img/gerald_berger.771714a9.jpg"}});
//# sourceMappingURL=app.182a560d.js.map