(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"a",function(){return i});var a=n(1),o=a.a.observable({});function r(t,e){return a.a.set(o,t,e)}function s(t){return o[t]}function i(t,e){var n=e.matched[0],a=n?n.components.default:{};if(t.stringified&&a.__file)return console.error("An error occurred while executing "+"page-query for ".concat(a.__file,"\n\n")+"Error: ".concat(t.stringified));console.error(t.message)}},194:function(t,e,n){"use strict";var a=n(1),o=n(193),r=n(76),s=a.a.config.optionMergeStrategies;e.a=function(t){var e=t.options,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.__pageQuery)e.__pageQuery=a;else{e.__pageQuery=a,e.computed=s.computed({$page:function(){return Object(o.b)(this.$route.path)}},e.computed);var i=function(t){e[t]=s[t]([c(e)],e[t])},c=function(){return function(t,a,s){n.e(18).then(n.bind(null,195)).then(function(n){n.default(t,e.__pageQuery).then(function(e){404===e.code?s({name:r.b,params:{0:t.path}}):s()}).catch(function(e){e.code===r.a||404===e.code?(console.error(e),s({name:r.b,params:{0:t.path}})):Object(o.a)(e,t)})})}};i("beforeRouteEnter"),i("beforeRouteUpdate")}}},202:function(t,e,n){},203:function(t,e,n){},210:function(t,e,n){"use strict";var a=n(202);n.n(a).a},211:function(t,e,n){"use strict";var a=n(203);n.n(a).a},226:function(t,e,n){"use strict";n.r(e);var a={props:{content:String}},o=(n(210),n(20)),r={components:{JournalContent:Object(o.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"journal-content",domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null).exports},metaInfo:function(){return{title:this.$page.post.title}}},s=(n(211),n(194)),i=function(t){Object(s.a)(t,void 0)},c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"journal"},[n("div",{staticClass:"container journal-container"},[n("div",{staticClass:"journal-header"},[n("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"journal-title",domProps:{innerHTML:t._s(t.$page.post.title)}}),n("div",{staticClass:"journal-meta"},[n("div",{staticClass:"journal-author"},[n("span",{staticClass:"label"},[t._v("Author")]),n("span",{staticClass:"author-name",domProps:{textContent:t._s(t.$page.post.author)}})]),n("div",{staticClass:"journal-date"},[n("span",{staticClass:"label"},[t._v("Date")]),n("div",{domProps:{textContent:t._s(t.$page.post.date)}})]),n("div",{staticClass:"journal-time"},[n("span",{staticClass:"label"},[t._v("Time")]),n("span",[t._v(t._s(t.$page.post.timeToRead)+" min read")])])])]),n("JournalContent",{attrs:{content:t.$page.post.content}})],1)])])},[],!1,null,"2a0eef53",null);"function"==typeof i&&i(c);e.default=c.exports}}]);