(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9bb0afc"],{3539:function(t,e,s){"use strict";var a=s("5072"),n=s.n(a);n.a},5072:function(t,e,s){},b7ff:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("div",{staticClass:"header"},[s("p",[s("span",[t._v(t._s(t.name))])]),s("i",{staticClass:"iconBack",on:{click:t.goBack}})]),s("div",{staticClass:"desc"},[s("p",[t._v(t._s(t._f("timeFormat")(new Date)))]),s("span",[t._v(t._s(t.desc))])]),s("div",{staticClass:"musicBg",style:"background:url("+t.logo+") center no-repeat"}),s("div",{staticClass:"pic goMove",style:"background:url("+t.logo+") center no-repeat"}),s("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},n=[],i=(s("7f7f"),s("96cf"),s("3b8d")),o={data:function(){return{name:"",desc:"",logo:"",loading:!1}},created:function(){this.getAudioUrl()},methods:{getAudioUrl:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,e=this.$route.query.shows,t.next=4,this.axios({url:"https://api.imjad.cn/qqfm/v1/",method:"GET",params:{type:"skip_show",id:this.$route.query.id,shows:e}});case 4:if(s=t.sent,this.loading=!1,200===s.status){t.next=9;break}return console.log(s.message),t.abrupt("return");case 9:this.name=s.data.showList[e].show.name,this.desc=s.data.showList[e].show.owner.desc,this.logo=s.data.showList[e].show.owner.logo;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goBack:function(){this.$router.go(-1)}}},r=o,c=(s("3539"),s("2877")),u=Object(c["a"])(r,a,n,!1,null,"4b991c2a",null);u.options.__file="index.vue";e["default"]=u.exports}}]);