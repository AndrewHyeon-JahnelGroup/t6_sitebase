webpackJsonp([1],{"1/oy":function(t,e){},"4Uwr":function(t,e,a){t.exports=a.p+"static/img/logo.48024f0.jpg"},Id91:function(t,e){},Iti7:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("/ocq"),i=a("e6fC"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frontpage"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("p",[t._v(t._s(t.content))]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loadercontainer"},[e("div",{staticClass:"loader"},[e("div",{attrs:{id:"largeBox"}}),this._v(" "),e("div",{attrs:{id:"smallBox"}})])])}]};var r=a("VU/8")({name:"FrontPage",data:function(){return{msg:"Welcome to Team Six, Inc.",content:"Under development"}}},o,!1,function(t){a("WHiv")},"data-v-7ab70581",null).exports,l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("Completed Tasks: "+t._s(t.todos.filter(function(t){return!0===t.done}).length))]),t._v(" "),a("p",[t._v("Pending Tasks: "+t._s(t.todos.filter(function(t){return!1===t.done}).length))]),t._v(" "),t._l(t.todos,function(e){return a("div",{staticClass:"ui centered card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),a("div",{staticClass:"meta"},[t._v("\n        "+t._s(e.project)+"\n      ")]),t._v(" "),t._m(0,!0)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.done,expression:"todo.done"}],staticClass:"ui bottom attached green basic button"},[t._v("\n      Completed\n    ")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.done,expression:"!todo.done"}],staticClass:"ui bottom attached red basic button"},[t._v("\n      Complete\n    ")])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"extra content"},[e("span",{staticClass:"right floated edit icon"},[e("i",{staticClass:"edit icon"})])])}]};var c=a("VU/8")({props:["todos"]},l,!1,function(t){a("PzmS")},null,null).exports,d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("md-tabs",{attrs:{"md-sync-route":""}},[e("md-tab",{attrs:{id:"tab-home","md-label":"Home",to:"/"}}),this._v(" "),e("md-tab",{attrs:{id:"tab-pages","md-label":"About",to:"/about"}}),this._v(" "),e("md-tab",{attrs:{id:"tab-posts","md-label":"Our Team",to:"/team"}}),this._v(" "),e("md-tab",{attrs:{id:"tab-settings","md-label":"Contact",to:"/contact"}})],1)},staticRenderFns:[]},m=a("VU/8")({name:"NavBar"},d,!1,null,null,null).exports,u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frontpage"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("p",[t._v(t._s(t.content))]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loadercontainer"},[e("div",{staticClass:"loader"},[e("div",{attrs:{id:"largeBox"}}),this._v(" "),e("div",{attrs:{id:"smallBox"}})])])}]},v=a("VU/8")({name:"AboutPage",data:function(){return{msg:"About",content:"Team Six is a small group of highly capable and experienced engineers who engage in world-class Product Development. We are skilled at doing basic research and concept development. By nature, we are systems engineers; and our skill set is in the realm of mechanical, thermodynamic, fluid systems, controls, electrical, user interface, computer, and software design. We also have a great deal of experience with industrial design. Our client list is strictly confidential and will remain so for the foreseeable future."}}},u,!1,null,null,null).exports,f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frontpage"},[a("h1",[t._v("team")]),t._v(" "),a("ul",{attrs:{id:"teamlist"}},t._l(t.team,function(e){return a("li",[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loadercontainer"},[e("div",{staticClass:"loader"},[e("div",{attrs:{id:"largeBox"}}),this._v(" "),e("div",{attrs:{id:"smallBox"}})])])}]},_=a("VU/8")({name:"AboutPage",data:function(){return{team:["team member 1","team member 2","team member 3","team member 4"]}}},f,!1,null,null,null).exports,p=a("Xxa5"),g=a.n(p),h=a("exGp"),b=a.n(h),x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("md-field",[a("label",[t._v("Name")]),t._v(" "),a("md-input",{model:{value:t.mgData.name,callback:function(e){t.$set(t.mgData,"name",e)},expression:"mgData.name"}})],1),t._v(" "),a("md-field",[a("label",[t._v("Your Email")]),t._v(" "),a("md-input",{model:{value:t.mgData.from,callback:function(e){t.$set(t.mgData,"from",e)},expression:"mgData.from"}})],1),t._v(" "),a("md-field",[a("label",[t._v("Phone Number")]),t._v(" "),a("md-input",{model:{value:t.mgData.number,callback:function(e){t.$set(t.mgData,"number",e)},expression:"mgData.number"}})],1),t._v(" "),a("md-field",[a("label",[t._v("Subject")]),t._v(" "),a("md-input",{model:{value:t.mgData.subject,callback:function(e){t.$set(t.mgData,"subject",e)},expression:"mgData.subject"}})],1),t._v(" "),a("md-field",[a("label",[t._v("Message")]),t._v(" "),a("md-textarea",{model:{value:t.mgData.text,callback:function(e){t.$set(t.mgData,"text",e)},expression:"mgData.text"}})],1)],1)},staticRenderFns:[]};var C={name:"EmailModal",components:{EmailForm:a("VU/8")({name:"EmailForm",props:["mgData"],data:function(){return{}}},x,!1,function(t){a("e8rE")},null,null).exports},data:function(){return{showDialog:!1,mgData:{name:"",from:"",number:"",subject:"",text:""}}},methods:{sendEmail:function(){var t=b()(g.a.mark(function t(){var e;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(this.$data.mgData,"workshere"),document.getElementById("submit"),e=this.$data.mgData,t.prev=3,t.next=6,this.axios.post("http://localhost:4000/send",e);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log(t.t0,"error");case 11:case"end":return t.stop()}},t,this,[[3,8]])}));return function(){return t.apply(this,arguments)}}()}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e}}},[a("div",{staticClass:"contact-modal"},[a("md-dialog-title",[t._v("Contact Us")]),t._v(" "),a("email-form",{attrs:{mgData:t.mgData}}),t._v(" "),a("md-dialog-actions",[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showDialog=!1}}},[t._v("Close")]),t._v(" "),a("md-button",{staticClass:"md-primary",attrs:{id:"submit"},on:{click:function(e){t.showDialog=!1,t.sendEmail()}}},[t._v("Send")])],1)],1)]),t._v(" "),a("md-button",{staticClass:"md-primary md-raised",on:{click:function(e){t.showDialog=!0}}},[t._v("Contact Us")])],1)},staticRenderFns:[]};var w=a("VU/8")(C,D,!1,function(t){a("l8iw")},null,null).exports,E={name:"ContactPage",components:{EmailModal:w},data:function(){return{msg:"Contact Us",content:"Under development"}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("email-modal")],1)},staticRenderFns:[]},U=a("VU/8")(E,$,!1,null,null,null).exports,k={name:"App",components:{FrontPage:r,TodoList:c,NavBar:m,AboutPage:v,OurTeam:_,ContactPage:U,EmailModal:w},data:function(){return{}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav-bar"),this._v(" "),e("img",{attrs:{id:"logo",src:a("4Uwr")}}),this._v(" "),this._m(0),this._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{id:"stock",src:a("oRmU")}})])}]};var F=a("VU/8")(k,y,!1,function(t){a("Iti7")},null,null).exports,P=a("Lgyv"),R=a.n(P),j=(a("tzNG"),a("giDI"),a("mtWM")),B=a.n(j),N=a("Rf8U"),A=a.n(N);n.default.use(i.a),n.default.use(s.a),n.default.use(R.a),n.default.use(A.a,B.a),n.default.config.productionTip=!1;var V=[{path:"/",component:r},{path:"/about",component:v},{path:"/team",component:_},{path:"/contact",component:U}],T=new s.a({mode:"history",routes:V});new n.default({el:"#app",router:T,components:{App:F},template:"<App/>"})},PzmS:function(t,e){},WHiv:function(t,e){},e8rE:function(t,e){},giDI:function(t,e){},l8iw:function(t,e){},oRmU:function(t,e,a){t.exports=a.p+"static/img/stock.14fbefa.jpg"},tzNG:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d60589c55c2ca3d79aca.js.map