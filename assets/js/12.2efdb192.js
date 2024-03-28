(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{287:function(v,_,e){"use strict";e.r(_);var t=e(14),o=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"three-js"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#three-js"}},[v._v("#")]),v._v(" Three.js")]),v._v(" "),_("p",[_("code",[v._v("Three.js")]),v._v(" 是一款基于原生 "),_("code",[v._v("WebGL")]),v._v(" 封装通用 "),_("code",[v._v("Web 3D")]),v._v(" 引擎")]),v._v(" "),_("p",[_("code",[v._v("Three.js")]),v._v(" 是一个基于 "),_("code",[v._v("WebGL")]),v._v(" 的 "),_("code",[v._v("JavaScript")]),v._v(" 库，它封装了 "),_("code",[v._v("WebGL")]),v._v(" 的底层细节，提供了更高级的 "),_("code",[v._v("API")]),v._v(" 和功能，使开发者能够更轻松地创建和展示 "),_("code",[v._v("3D")]),v._v(" 场景。")]),v._v(" "),_("p",[_("code",[v._v("Three.js")]),v._v(" 提供了一系列的类和方法，用于创建和操作 "),_("code",[v._v("3D")]),v._v(" 对象、光照、材质、相机等，简化了 "),_("code",[v._v("WebGL")]),v._v(" 的开发过程。")]),v._v(" "),_("p",[_("strong",[v._v("透视相机（PerspectiveCamera）：")])]),v._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 实例化一个透视投影相机对象")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("const")]),v._v(" camera "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("new")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("THREE"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("PerspectiveCamera")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("45")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" width "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v(" height"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("1000")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\nscene"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("add")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v(" camera "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),_("p",[_("code",[v._v("PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )")])]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("fov")]),v._v(" : 摄像机视锥体垂直视野角度。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("aspect")]),v._v(" : 摄像机视锥体长宽比。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("near")]),v._v(" : 摄像机视锥体近端面。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("far")]),v._v(" : 摄像机视锥体远端面。")])])]),v._v(" "),_("p",[v._v("定义了摄像机的 "),_("code",[v._v("viewing frustum")]),v._v("（视锥体）")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("strong",[v._v("相机动画(.position和.lookAt())：")])]),v._v(" "),_("p",[v._v("通过相机对象 "),_("code",[v._v("Camera")]),v._v(" 的 "),_("code",[v._v(".position")]),v._v(" 属性和 "),_("code",[v._v(".lookAt()")]),v._v(" 方法，实现一段相机动画。")]),v._v(" "),_("p",[_("em",[v._v("相机运动动画")]),v._v("\n连续改变相机的位置 "),_("code",[v._v(".position")]),v._v(" ，就可以获得一个动画效果。")]),v._v(" "),_("p",[_("em",[v._v("相机圆周运动")]),v._v("\n在渲染循环中，改变相机位置，在XOZ平面上绕着y轴圆周运动。")]),v._v(" "),_("p",[_("strong",[v._v("执行 "),_("code",[v._v("lookAt()")]),v._v(" 计算相机视线方向：")])]),v._v(" "),_("p",[v._v("改变 "),_("code",[v._v(".position")]),v._v(" 属性后，如果不执行 "),_("code",[v._v(".lookAt()")]),v._v(" 方法，相机的观察方向默认不变。")]),v._v(" "),_("p",[v._v("如果你希望相机圆周运动的同时，改变相机视线方向，保持相机镜头始终指向坐标原点或其它位置，需要每次改变 "),_("code",[v._v(".position")]),v._v(" 属性后，重新执行一遍 "),_("code",[v._v(".lookAt()")]),v._v(" 方法")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("updateProjectionMatrix()")]),v._v(" 方法更新相机的投影矩阵")]),v._v(" "),_("p",[_("code",[v._v("updateMatrixWorld(true)")]),v._v(" 方法更新相机的世界矩阵")]),v._v(" "),_("p",[_("strong",[v._v("不执行 "),_("code",[v._v(".updateMatrixWorld()")]),v._v(" ， "),_("code",[v._v(".render()")]),v._v(" 之后查看矩阵：")])]),v._v(" "),_("p",[v._v("当你改变 "),_("code",[v._v(".position")]),v._v(" 、 "),_("code",[v._v(".scale")]),v._v(" 等属性，不执行 "),_("code",[v._v(".updateMatrixWorld()")]),v._v(" 更新矩阵矩阵，在 "),_("code",[v._v(".render")]),v._v(" 之后查看本地矩阵和世界矩阵的值，你会发现发生了变化。")]),v._v(" "),_("p",[v._v("这说明 "),_("code",[v._v("three.js")]),v._v(" 默认情况下，在执行 "),_("code",[v._v(".render()")]),v._v(" 的时候，会自动获取 "),_("code",[v._v(".position")]),v._v(" 、 "),_("code",[v._v(".scale")]),v._v(" 等属性的值，更新模型的本地矩阵、世界矩阵属性")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("strong",[v._v("处理片元像素值：")])]),v._v(" "),_("p",[v._v("顶点着色器代码用来计算顶点的坐标，片元着色器代码用来设置片元像素值。")]),v._v(" "),_("p",[v._v("可以用四维向量四个分量表示像素的 "),_("code",[v._v("RGBA")]),v._v(" 四个分量，比如 "),_("code",[v._v("vec4<f32>(1.0, 0.0, 0.0, 1.0)")]),v._v(" 表示把片元的元素像素值设置为红色，透明度为1.0。")]),v._v(" "),_("p",[_("code",[v._v("vec4(position, 0.0, 1.0)")]),v._v(" 是一个向量构造函数，用于创建一个四维向量。(四维向量常用于表示顶点的位置、颜色、纹理坐标)")]),v._v(" "),_("p",[v._v("将 "),_("code",[v._v("position")]),v._v(" 向量的 "),_("code",[v._v("x")]),v._v(" 和 "),_("code",[v._v("y")]),v._v(" 分量作为前两个参数，然后将 "),_("code",[v._v("0.0")]),v._v(" 和 "),_("code",[v._v("1.0")]),v._v(" 作为后两个参数。")]),v._v(" "),_("p",[v._v("这样构造出的四维向量表示了一个顶点的位置信息，其中 "),_("code",[v._v("x")]),v._v(" 和 "),_("code",[v._v("y")]),v._v(" 分量来自 "),_("code",[v._v("position")]),v._v("，而 "),_("code",[v._v("z")]),v._v(" 和 "),_("code",[v._v("w")]),v._v(" 分量分别被设置为 "),_("code",[v._v("0.0")]),v._v(" 和 "),_("code",[v._v("1.0")]),v._v("。")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("attribute vec2 position")]),v._v(" 是一个顶点着色器中的属性声明。")]),v._v(" "),_("p",[v._v("它定义了一个名为 "),_("code",[v._v("position")]),v._v(" 的属性，类型为 "),_("code",[v._v("vec2")]),v._v("，表示该属性是一个二维向量，用于表示顶点的位置信息。")]),v._v(" "),_("p",[v._v("在顶点着色器中，我们可以使用这个属性来操作顶点的位置。")])])}),[],!1,null,null,null);_.default=o.exports}}]);