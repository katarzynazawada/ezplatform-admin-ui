!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor")):"function"==typeof define&&define.amd?define(["react","AlloyEditor"],t):"object"==typeof exports?exports.ezBtnMoveUp=t(require("react"),require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnMoveUp=t(e.React,e.AlloyEditor))}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=28)}({2:function(t,o){t.exports=e},28:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(2),c=n(a),f=o(4),p=n(f),s=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"moveUp",value:function(){this.props.editor.get("nativeEditor").execCommand("eZMoveUp")}},{key:"render",value:function(){var e=Translator.trans("move_up_btn.title",{},"alloy_editor");return c.default.createElement("button",{className:"ae-button ez-btn-ae ez-btn-ae--move-up",onClick:this.moveUp.bind(this),tabIndex:this.props.tabIndex,title:e},c.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},c.default.createElement("use",{xlinkHref:"/bundles/ezplatformadminui/img/ez-icons.svg#circle-caret-up"})))}}],[{key:"key",get:function(){return"ezmoveup"}}]),t}(a.Component);t.default=s,p.default.Buttons[s.key]=p.default.EzBtnMoveUp=s,eZ.addConfig("ezAlloyEditor.ezBtnMoveUp",s)},4:function(e,o){e.exports=t}}).default});
//# sourceMappingURL=ezBtnMoveUp.js.map