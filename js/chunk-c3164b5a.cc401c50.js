(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3164b5a"],{b431:function(t,e,a){"use strict";var n=a("d206"),i=a.n(n);i.a},d206:function(t,e,a){},dd93:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"detail"}},[a("div",{staticClass:"header"},[a("p",[a("span",[t._v(t._s(t.name))])]),a("p",[t._v(t._s(t.author))]),a("i",{staticClass:"iconBack",on:{click:t.goBack}})]),a("div",{staticClass:"musicBg",style:"background:url("+t.picUrl+") center no-repeat"}),a("div",{staticClass:"pic goMove",style:"background:url("+t.picUrl+") center no-repeat"}),a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},i=[],s=(a("7f7f"),a("96cf"),a("3b8d")),r=(a("cadf"),a("551c"),a("097d"),{data:function(){return{author:"",name:"",picUrl:"",loading:!1}},created:function(){this.getDetail()},methods:{getDetail:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.axios({url:"https://api.imjad.cn/cloudmusic/",method:"get",params:{type:"detail",id:this.$route.query.id}});case 3:if(e=t.sent,this.loading=!1,200===e.status){t.next=8;break}return console.log(e.message),t.abrupt("return");case 8:this.author=e.songs[0].ar[0].name,this.name=e.songs[0].al.name,this.picUrl=e.songs[0].al.picUrl;case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goBack:function(){this.$router.go(-1)}}}),c=r,o=(a("b431"),a("2877")),u=Object(o["a"])(c,n,i,!1,null,"2cc7d9bc",null);u.options.__file="index.vue";e["default"]=u.exports}}]);