(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{322:function(s,a,e){"use strict";e.r(a);var t=e(14),c=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style"}},[s._v("#")]),s._v(" Style")]),s._v(" "),a("h2",{attrs:{id:"scoped-css-的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoped-css-的原理"}},[s._v("#")]),s._v(" "),a("code",[s._v("Scoped")]),s._v(" "),a("code",[s._v("CSS")]),s._v(" 的原理")]),s._v(" "),a("p",[s._v("加了 "),a("code",[s._v("scoped")]),s._v(" ， "),a("code",[s._v("PostCSS")]),s._v(" 给一个组件中的所有 "),a("code",[s._v("dom")]),s._v(" 添加唯一的一个自定义属性（唯一性的标记）"),a("code",[s._v("data-v-实例标识")]),s._v("，即 "),a("code",[s._v("CSS带属性选择器")])]),s._v(" "),a("p",[s._v("以此完成类似作用域的选择方式，从而达到样式私有化，使得组件之间的样式不互相污染。")]),s._v(" "),a("p",[a("code",[s._v("PostCSS")]),s._v(" 是一个用 "),a("code",[s._v("JavaScript")]),s._v(" 工具和插件转换 "),a("code",[s._v("CSS")]),s._v(" 代码的工具")]),s._v(" "),a("h2",{attrs:{id:"深度选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深度选择器"}},[s._v("#")]),s._v(" 深度选择器")]),s._v(" "),a("p",[s._v("深度作用选择器: "),a("code",[s._v("scoped")]),s._v(" 样式中的一个选择器能够选择到子组 或 后代组件中的元素")]),s._v(" "),a("p",[s._v("三种写法：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v(">>>")])])]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v(".class1 div >>> #class2 p\n")])])]),a("ul",[a("li",[a("code",[s._v("/deep/")])])]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v(".class1 div /deep/ #class2 p\n或\n.class1 div /deep/ #class2 p\n")])])]),a("ul",[a("li",[a("code",[s._v("::v-deep")])])]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v(".class1 "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v-deep #class2 p\n或\n.class1 "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v-deep #class2 p\n")])])])])}),[],!1,null,null,null);a.default=c.exports}}]);