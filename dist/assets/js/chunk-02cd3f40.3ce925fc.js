(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02cd3f40"],{"0353":function(e,t,i){"use strict";var a=i("6bf8"),n=RegExp.prototype.exec,s=String.prototype.replace,r=n,l="lastIndex",c=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[l]||0!==t[l]}(),o=void 0!==/()??/.exec("")[1],d=c||o;d&&(r=function(e){var t,i,r,d,u=this;return o&&(i=new RegExp("^"+u.source+"$(?!\\s)",a.call(u))),c&&(t=u[l]),r=n.call(u,e),c&&r&&(u[l]=u.global?r.index+r[0].length:t),o&&r&&r.length>1&&s.call(r[0],i,(function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(r[d]=void 0)})),r}),e.exports=r},1663:function(e,t,i){var a=i("212e"),n=i("3ab0");e.exports=function(e){return function(t,i){var s,r,l=String(n(t)),c=a(i),o=l.length;return c<0||c>=o?e?"":void 0:(s=l.charCodeAt(c),s<55296||s>56319||c+1===o||(r=l.charCodeAt(c+1))<56320||r>57343?e?l.charAt(c):s:e?l.slice(c,c+2):r-56320+(s-55296<<10)+65536)}}},"43ec":function(e,t,i){"use strict";var a=i("1663")(!0);e.exports=function(e,t,i){return t+(i?a(e,t).length:1)}},"5e53":function(e,t,i){},"6bf8":function(e,t,i){"use strict";var a=i("a86f");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"8b41":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"detail"},[i("div",{staticClass:"detail-banner"},[i("div",{staticClass:"swiper-container banner-swiper"},[i("div",{staticClass:"swiper-wrapper"},e._l(e.detail.banners,(function(t,a){return i("a",{staticClass:"swiper-slide swiper-no-swiping",class:{"banner-active":e.bannerIndex===a+1}},[i("div",{staticClass:"banner-slide-body"},[i("div",{staticClass:"banner-slide",style:{"background-image":"url("+t.url+")"}})])])})),0),i("div",{staticClass:"banner-pagination"})])]),i("div",{staticClass:"detail-content"},[i("div",{staticClass:"container"},[i("div",{staticClass:"content-header"},[i("div",{staticClass:"detail-title"},[e._v(e._s(e.detail.projectName))])]),i("div",{staticClass:"detail-body"},[i("div",{staticClass:"detail-info"},[i("div",{staticClass:"detail-info-section"},[i("div",{staticClass:"info-item-row"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.address,expression:"detail.address"}],staticClass:"info-item-col"},[e._v("项目地点："+e._s(e.detail.address))]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.size,expression:"detail.size"}],staticClass:"info-item-col"},[e._v("建筑规模："+e._s(e.detail.size))])]),i("div",{staticClass:"info-item-row"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.time,expression:"detail.time"}],staticClass:"info-item-col"},[e._v("设计时间："+e._s(e.detail.time))]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.development,expression:"detail.development"}],staticClass:"info-item-col"},[e._v("开发单位："+e._s(e.detail.development))]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.beds,expression:"detail.beds"}],staticClass:"info-item-col"},[e._v("床位数："+e._s(e.detail.beds))])]),i("div",{staticClass:"info-item-row"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.cooperation,expression:"detail.cooperation"}],staticClass:"info-item-col"},[e._v("合作单位："+e._s(e.detail.cooperation))])])]),i("div",{staticClass:"detail-desc"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.title.length,expression:"detail.title.length"}],staticClass:"detail-desc-title"},e._l(e.detail.title,(function(t){return i("p",[e._v(e._s(t))])})),0),i("div",{staticClass:"detail-desc-text"},e._l(e.detail.content,(function(t){return i("p",[e._v(e._s(t))])})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.honors&&e.detail.honors.length,expression:"detail.honors && detail.honors.length"}],staticClass:"detail-honors"},[i("div",{staticClass:"honor-title"},[e._v("获奖荣誉：")]),e._l(e.detail.honors,(function(t){return i("div",{staticClass:"honor-item"},[e._v(e._s(t))])}))],2),i("div",{staticClass:"detail-handles"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.prevProject.id,expression:"detail.prevProject.id"}],staticClass:"detail-back",on:{click:e.prevLink}},[i("span",{staticClass:"detail-back-label"},[e._v("上一篇：")]),i("span",{staticClass:"detail-back-bd"},[e._v(e._s(e.detail.prevProject.projectName))])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.detail.nextProject.id,expression:"detail.nextProject.id"}],staticClass:"detail-honor",on:{click:e.nextLink}},[i("span",{staticClass:"detail-honor-label"},[e._v("下一篇：")]),i("span",{staticClass:"detail-honor-bd"},[e._v(e._s(e.detail.nextProject.projectName))])]),i("div",{staticClass:"detail-return",on:{click:function(t){return e.$router.back()}}},[e._m(0)])])])])]),i("div",{staticClass:"detail-related"},[i("div",{staticClass:"related-title"},[e._v("相关案例")]),i("div",{staticClass:"case-container"},e._l(e.detail.relatedCase,(function(t){return i("router-link",{staticClass:"case-item",attrs:{to:{name:"caseDetail",query:{id:t.id}}}},[i("div",{staticClass:"case-item-img",style:{"background-image":"url("+t.url+")"}}),i("div",{staticClass:"case-item-bd"},[i("div",{staticClass:"case-item-title"},[e._v(e._s(t.name))]),i("div",{staticClass:"case-item-address"},[e._v("项目地点："+e._s(t.address))])])])})),1)])])])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"detail-honor-item"},[i("i",{staticClass:"iconfont icon-left"}),i("span",[e._v("返回列表")])])}],s=(i("e5b4"),i("8dee"),i("63fe")),r=null,l={name:"caseDetail",data:function(){return{bannerIndex:0,detail:{banners:[],title:[],prevProject:{},nextProject:{}},list:[]}},watch:{detail:{handler:function(e,t){var i=this;e&&this.$nextTick((function(){r.updateSlides(),i.init()}))},deep:!0}},mounted:function(){var e=this;this.$nextTick((function(){e.init()}))},methods:{prevLink:function(){this.detail.prevProject.id?this.$router.replace({name:"caseDetail",query:{id:this.detail.prevProject.id}}):this.$router.replace({name:"community",query:{id:this.detail.prevProject.listId}})},nextLink:function(){this.detail.nextProject.id?this.$router.replace({name:"caseDetail",query:{id:this.detail.nextProject.id}}):this.$router.replace({name:"community",query:{id:this.detail.nextProject.listId}})},init:function(){r=new Swiper(".banner-swiper",{loop:!0,effect:"fade",autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".banner-pagination",clickable:!0}})}},beforeRouteEnter:function(e,t,i){i((function(t){t.detail=s["a"].find((function(t){return t.id===parseInt(e.query.id)}))}))},beforeRouteUpdate:function(e,t,i){i(),this.detail=s["a"].find((function(t){return t.id===parseInt(e.query.id)}))}},c=l,o=(i("d9b7"),i("dda6"),i("cba8")),d=Object(o["a"])(c,a,n,!1,null,"9367872c",null);t["default"]=d.exports},"8dee":function(e,t,i){"use strict";var a=i("a86f"),n=i("8078"),s=i("201c"),r=i("212e"),l=i("43ec"),c=i("f417"),o=Math.max,d=Math.min,u=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};i("c46f")("replace",2,(function(e,t,i,h){return[function(a,n){var s=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,s,n):i.call(String(s),a,n)},function(e,t){var n=h(i,e,this,t);if(n.done)return n.value;var u=a(e),v=String(this),f="function"===typeof t;f||(t=String(t));var b=u.global;if(b){var x=u.unicode;u.lastIndex=0}var w=[];while(1){var g=c(u,v);if(null===g)break;if(w.push(g),!b)break;var C=String(g[0]);""===C&&(u.lastIndex=l(v,s(u.lastIndex),x))}for(var _="",y=0,k=0;k<w.length;k++){g=w[k];for(var j=String(g[0]),$=o(d(r(g.index),v.length),0),P=[],E=1;E<g.length;E++)P.push(p(g[E]));var N=g.groups;if(f){var S=[j].concat(P,$,v);void 0!==N&&S.push(N);var I=String(t.apply(void 0,S))}else I=m(j,v,$,P,N,t);$>=y&&(_+=v.slice(y,$)+I,y=$+j.length)}return _+v.slice(y)}];function m(e,t,a,s,r,l){var c=a+e.length,o=s.length,d=f;return void 0!==r&&(r=n(r),d=v),i.call(l,d,(function(i,n){var l;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(c);case"<":l=r[n.slice(1,-1)];break;default:var d=+n;if(0===d)return i;if(d>o){var v=u(d/10);return 0===v?i:v<=o?void 0===s[v-1]?n.charAt(1):s[v-1]+n.charAt(1):i}l=s[d-1]}return void 0===l?"":l}))}}))},bf73:function(e,t,i){"use strict";var a=i("0353");i("e99b")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},c46f:function(e,t,i){"use strict";i("bf73");var a=i("84e8"),n=i("065d"),s=i("0926"),r=i("3ab0"),l=i("839a"),c=i("0353"),o=l("species"),d=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();e.exports=function(e,t,i){var v=l(e),f=!s((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),p=f?!s((function(){var t=!1,i=/a/;return i.exec=function(){return t=!0,null},"split"===e&&(i.constructor={},i.constructor[o]=function(){return i}),i[v](""),!t})):void 0;if(!f||!p||"replace"===e&&!d||"split"===e&&!u){var h=/./[v],m=i(r,v,""[e],(function(e,t,i,a,n){return t.exec===c?f&&!n?{done:!0,value:h.call(t,i,a)}:{done:!0,value:e.call(i,t,a)}:{done:!1}})),b=m[0],x=m[1];a(String.prototype,e,b),n(RegExp.prototype,v,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},d9b7:function(e,t,i){"use strict";i("5e53")},dda6:function(e,t,i){"use strict";i("e2d6")},e2d6:function(e,t,i){},f417:function(e,t,i){"use strict";var a=i("d445"),n=RegExp.prototype.exec;e.exports=function(e,t){var i=e.exec;if("function"===typeof i){var s=i.call(e,t);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}}}]);