(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{328:function(v,_,e){"use strict";e.r(_);var o=e(14),c=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"模板内引入静态资源"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模板内引入静态资源"}},[v._v("#")]),v._v(" 模板内引入静态资源")]),v._v(" "),_("blockquote",[_("ul",[_("li",[_("code",[v._v("@")]),v._v(" 开头的绝对路径以及相对路径会经过 "),_("code",[v._v("base64")]),v._v(" 转换规则校验\n在文件系统或网络传输中，有时需要对数据进行编码以进行安全性处理或保证数据完整性。\n"),_("code",[v._v("Base64")]),v._v(" 是一种常见的编码方式，"),_("code",[v._v("Base64")]),v._v(" 要求把每三个 8 Bit 的字节转换为四个 6 Bit 的字节（3 × 8 = 4 × 6 = 24），然后把 6 Bit 再添两位高位 0 ，组成四个 8 Bit 的字节，也就是说，转换后的字符串理论上将要比原来的长 1/3 。\n对文件路径进行 "),_("code",[v._v("base64")]),v._v(' 编码并不常见，因为这会增加路径的复杂性并可能导致解析困难。\n在大多数情况下，文件路径都是以相对路径或绝对路径的形式直接指定，不需要进行编码。\n对于 "@" 开头的路径，"@" 可能是一个特殊的标识符，用于指示接下来的部分应该被视为 '),_("code",[v._v("base64")]),v._v(" 编码的数据。系统或程序在遇到这样的路径时，会对其进行解码并根据解码后的路径进行操作。\n这样的设计可能是出于安全考虑，例如，确保路径不会被恶意用户篡改或隐藏恶意内容。\n通过将路径进行 "),_("code",[v._v("base64")]),v._v(" 编码，可以增加破解的难度并提高系统的安全性。")]),v._v(" "),_("li",[v._v("引入的静态资源在非 "),_("code",[v._v("h5")]),v._v(" 平台，均不转为 "),_("code",[v._v("base64")]),v._v("。\n在 "),_("code",[v._v("web")]),v._v(" 开发中，"),_("code",[v._v("Base64")]),v._v(" 编码常常用于将二进制数据转换为 "),_("code",[v._v("ASCII")]),v._v(" 文本，以便在文本中进行传输。\n有些开发人员会将静态资源（如图片、字体文件、音频文件等）转换为 "),_("code",[v._v("Base64")]),v._v(" 编码，以便它们能够直接在 "),_("code",[v._v("HTML")]),v._v(" 页面中显示或使用。\n这种做法在 "),_("code",[v._v("HTML5")]),v._v(" 平台（如网站）上很常见，但在非 "),_("code",[v._v("HTML5")]),v._v(" 平台（如某些移动应用或桌面应用）上可能不常见。\n如果你在一个非 "),_("code",[v._v("HTML5")]),v._v(" 平台上引入静态资源，这些资源不会被自动转换为 "),_("code",[v._v("Base64")]),v._v(" 编码。\n可能需要使用其他方式来处理这些资源，例如通过文件路径来引用它们，或者使用特定平台的 "),_("code",[v._v("API")]),v._v(" 来加载和处理这些资源。")]),v._v(" "),_("li",[_("code",[v._v("H5")]),v._v(" 平台，小于 "),_("code",[v._v("4kb")]),v._v(" 的资源会被转换成 "),_("code",[v._v("base64")]),v._v("，其余不转。\n性能考虑：对于较小的资源，"),_("code",[v._v("Base64")]),v._v(" 编码会增加资源的大小，从而增加网络传输的开销。因此，将小于 "),_("code",[v._v("4kb")]),v._v(" 的资源转换成 "),_("code",[v._v("Base64")]),v._v(" 可能对性能产生负面影响。\n兼容性考虑：并非所有的服务器和客户端都支持直接传输二进制数据。有些情况下，将资源转换成 "),_("code",[v._v("Base64")]),v._v(" 可以确保它们在不同的环境中正确传输和处理。\n一致性处理："),_("code",[v._v("H5")]),v._v(" 平台可能希望以统一的方式处理资源，以便于管理和维护。将所有资源都转换成 "),_("code",[v._v("Base64")]),v._v(" 可能使得处理和操作资源的代码更加简洁和一致。")]),v._v(" "),_("li",[v._v("自 "),_("code",[v._v("HBuilderX 2.6.6")]),v._v(" 起 "),_("code",[v._v("template")]),v._v(" 内支持 "),_("code",[v._v("@")]),v._v(" 开头路径引入静态资源，旧版本不支持此方式")]),v._v(" "),_("li",[_("code",[v._v("App")]),v._v(" 平台自 "),_("code",[v._v("HBuilderX 2.6.9")]),v._v(" 起 "),_("code",[v._v("template")]),v._v(" 节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致")]),v._v(" "),_("li",[v._v("支付宝小程序组件内 "),_("code",[v._v("image")]),v._v(" 标签不可使用相对路径")])])])])}),[],!1,null,null,null);_.default=c.exports}}]);