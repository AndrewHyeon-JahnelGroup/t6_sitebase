webpackJsonp([1],{"1/oy":function(t,e){},"4Uwr":function(t,e,a){t.exports=a.p+"static/img/logo.48024f0.jpg"},Id91:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("/ocq"),n=a("e6fC"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frontpage"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("p",[t._v(t._s(t.content))]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loadercontainer"},[e("div",{staticClass:"loader"},[e("div",{attrs:{id:"largeBox"}}),this._v(" "),e("div",{attrs:{id:"smallBox"}})])])}]};var l=a("VU/8")({name:"FrontPage",data:function(){return{msg:"Welcome to Team Six, Inc.",content:"Under development"}}},r,!1,function(t){a("WHiv")},"data-v-7ab70581",null).exports,o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("Completed Tasks: "+t._s(t.todos.filter(function(t){return!0===t.done}).length))]),t._v(" "),a("p",[t._v("Pending Tasks: "+t._s(t.todos.filter(function(t){return!1===t.done}).length))]),t._v(" "),t._l(t.todos,function(e){return a("div",{staticClass:"ui centered card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),a("div",{staticClass:"meta"},[t._v("\n        "+t._s(e.project)+"\n      ")]),t._v(" "),t._m(0,!0)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.done,expression:"todo.done"}],staticClass:"ui bottom attached green basic button"},[t._v("\n      Completed\n    ")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.done,expression:"!todo.done"}],staticClass:"ui bottom attached red basic button"},[t._v("\n      Complete\n    ")])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"extra content"},[e("span",{staticClass:"right floated edit icon"},[e("i",{staticClass:"edit icon"})])])}]};var d=a("VU/8")({props:["todos"]},o,!1,function(t){a("PzmS")},null,null).exports,m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark indigo"},[a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),a("span",{staticClass:"sr-only"},[t._v("(current)")])],1)]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/team"}},[t._v("Team")])],1)]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1)]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"http://example.com",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n              Dropdown link\n              ")]),this._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Action")]),this._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Another action")]),this._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Something else here")])])])}]},c=a("VU/8")({name:"NavBar"},m,!1,null,null,null).exports,v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frontpage"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("p",[t._v(t._s(t.content))]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loadercontainer"},[e("div",{staticClass:"loader"},[e("div",{attrs:{id:"largeBox"}}),this._v(" "),e("div",{attrs:{id:"smallBox"}})])])}]},u=a("VU/8")({name:"AboutPage",data:function(){return{msg:"About",content:"Under development"}}},v,!1,null,null,null).exports,f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frontpage"},[a("h1",[t._v("team")]),t._v(" "),a("ul",{attrs:{id:"teamlist"}},t._l(t.team,function(e){return a("li",[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loadercontainer"},[e("div",{staticClass:"loader"},[e("div",{attrs:{id:"largeBox"}}),this._v(" "),e("div",{attrs:{id:"smallBox"}})])])}]},_=a("VU/8")({name:"AboutPage",data:function(){return{team:["team member 1","team member 2","team member 3","team member 4"]}}},f,!1,null,null,null).exports,p=a("ESwS"),h=a("+cKO"),g={name:"EmailForm",mixins:[p.validationMixin],data:function(){return{showDialog:!1,form:{firstName:null,lastName:null,gender:null,age:null,email:null},userSaved:!1,sending:!1,lastUser:null}},validations:{form:{firstName:{required:h.required,minLength:Object(h.minLength)(3)},lastName:{required:h.required,minLength:Object(h.minLength)(3)},age:{required:h.required,maxLength:Object(h.maxLength)(3)},gender:{required:h.required},email:{required:h.required,email:h.email}}},methods:{getValidationClass:function(t){var e=this.$v.form[t];if(e)return{"md-invalid":e.$invalid&&e.$dirty}},clearForm:function(){this.$v.$reset(),this.form.firstName=null,this.form.lastName=null,this.form.age=null,this.form.gender=null,this.form.email=null},saveUser:function(){var t=this;this.sending=!0,window.setTimeout(function(){t.lastUser=t.form.firstName+" "+t.form.lastName,t.userSaved=!0,t.sending=!1,t.clearForm()},1500)},validateUser:function(){this.$v.$touch(),this.$v.$invalid||this.saveUser()}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"emailform"},[a("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e}}},[a("md-dialog-title",[t._v("Preferences")]),t._v(" "),a("md-tabs",{attrs:{"md-dynamic-height":""}},[a("md-tab",{attrs:{"md-label":"General"}},[a("div",[a("form",{staticClass:"md-layout",attrs:{novalidate:""},on:{submit:function(e){e.preventDefault(),t.validateUser(e)}}},[a("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[a("md-card-header",[a("div",{staticClass:"md-title"},[t._v("Users")])]),t._v(" "),a("md-card-content",[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",{class:t.getValidationClass("firstName")},[a("label",{attrs:{for:"first-name"}},[t._v("First Name")]),t._v(" "),a("md-input",{attrs:{name:"first-name",id:"first-name",autocomplete:"given-name",disabled:t.sending},model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}}),t._v(" "),t.$v.form.firstName.required?t.$v.form.firstName.minlength?t._e():a("span",{staticClass:"md-error"},[t._v("Invalid first name")]):a("span",{staticClass:"md-error"},[t._v("The first name is required")])],1)],1),t._v(" "),a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",{class:t.getValidationClass("lastName")},[a("label",{attrs:{for:"last-name"}},[t._v("Last Name")]),t._v(" "),a("md-input",{attrs:{name:"last-name",id:"last-name",autocomplete:"family-name",disabled:t.sending},model:{value:t.form.lastName,callback:function(e){t.$set(t.form,"lastName",e)},expression:"form.lastName"}}),t._v(" "),t.$v.form.lastName.required?t.$v.form.lastName.minlength?t._e():a("span",{staticClass:"md-error"},[t._v("Invalid last name")]):a("span",{staticClass:"md-error"},[t._v("The last name is required")])],1)],1)]),t._v(" "),a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",{class:t.getValidationClass("gender")},[a("label",{attrs:{for:"gender"}},[t._v("Gender")]),t._v(" "),a("md-select",{attrs:{name:"gender",id:"gender","md-dense":"",disabled:t.sending},model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}},[a("md-option"),t._v(" "),a("md-option",{attrs:{value:"M"}},[t._v("M")]),t._v(" "),a("md-option",{attrs:{value:"F"}},[t._v("F")])],1),t._v(" "),a("span",{staticClass:"md-error"},[t._v("The gender is required")])],1)],1),t._v(" "),a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",{class:t.getValidationClass("age")},[a("label",{attrs:{for:"age"}},[t._v("Age")]),t._v(" "),a("md-input",{attrs:{type:"number",id:"age",name:"age",autocomplete:"age",disabled:t.sending},model:{value:t.form.age,callback:function(e){t.$set(t.form,"age",e)},expression:"form.age"}}),t._v(" "),t.$v.form.age.required?t.$v.form.age.maxlength?t._e():a("span",{staticClass:"md-error"},[t._v("Invalid age")]):a("span",{staticClass:"md-error"},[t._v("The age is required")])],1)],1)]),t._v(" "),a("md-field",{class:t.getValidationClass("email")},[a("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("md-input",{attrs:{type:"email",name:"email",id:"email",autocomplete:"email",disabled:t.sending},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),t.$v.form.email.required?t.$v.form.email.email?t._e():a("span",{staticClass:"md-error"},[t._v("Invalid email")]):a("span",{staticClass:"md-error"},[t._v("The email is required")])],1)],1),t._v(" "),t.sending?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e(),t._v(" "),a("md-card-actions",[a("md-button",{staticClass:"md-primary",attrs:{type:"submit",disabled:t.sending}},[t._v("Create user")])],1)],1),t._v(" "),a("md-snackbar",{attrs:{"md-active":t.userSaved},on:{"update:mdActive":function(e){t.userSaved=e}}},[t._v("The user "+t._s(t.lastUser)+" was saved with success!")])],1)])])],1),t._v(" "),a("md-dialog-actions",[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showDialog=!1}}},[t._v("Close")]),t._v(" "),a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showDialog=!1}}},[t._v("Save")])],1)],1),t._v(" "),a("md-button",{staticClass:"md-primary md-raised",on:{click:function(e){t.showDialog=!0}}},[t._v("Show Dialog")])],1)},staticRenderFns:[]};var b=a("VU/8")(g,C,!1,function(t){a("wq/u")},"data-v-793d2c75",null).exports,w={name:"ContactPage",components:{EmailForm:b},data:function(){return{msg:"Contact Us",content:"Under development"}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"frontpage"},[e("email-form"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loadercontainer"},[e("div",{staticClass:"loader"},[e("div",{attrs:{id:"largeBox"}}),this._v(" "),e("div",{attrs:{id:"smallBox"}})])])}]},x=a("VU/8")(w,$,!1,null,null,null).exports,N={name:"App",components:{FrontPage:l,TodoList:d,NavBar:c,AboutPage:u,OurTeam:_,ContactPage:x,EmailForm:b},data:function(){return{todos:[{title:"Todo A",project:"Project A",done:!1},{title:"Todo B",project:"Project B",done:!0},{title:"Todo C",project:"Project C",done:!1},{title:"Todo D",project:"Project D",done:!1}]}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav-bar"),this._v(" "),e("img",{attrs:{id:"logo",src:a("4Uwr")}}),this._v(" "),this._m(0),this._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{id:"stock",src:a("oRmU")}})])}]};var y=a("VU/8")(N,k,!1,function(t){a("gyXK")},null,null).exports,U=a("Lgyv"),q=a.n(U);a("tzNG");s.default.use(n.a),s.default.use(i.a),s.default.use(q.a),s.default.config.productionTip=!1;var E=[{path:"/",component:l},{path:"/about",component:u},{path:"/team",component:_},{path:"/contact",component:x}],F=new i.a({mode:"history",routes:E});new s.default({el:"#app",router:F,components:{App:y},template:"<App/>"})},PzmS:function(t,e){},WHiv:function(t,e){},gyXK:function(t,e){},oRmU:function(t,e,a){t.exports=a.p+"static/img/stock.14fbefa.jpg"},tzNG:function(t,e){},"wq/u":function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e46154d2508755c461ae.js.map