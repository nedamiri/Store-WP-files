(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[22],{143:function(t,e,n){"use strict";var c=n(14),a=n.n(c),r=n(23),o=n.n(r),i=n(76),s=n(6),l=n.n(s),u=n(138),d=(n(251),["className","showSpinner","children"]);e.a=function(t){var e=t.className,n=t.showSpinner,c=void 0!==n&&n,r=t.children,s=o()(t,d),m=l()("wc-block-components-button",e,{"wc-block-components-button--loading":c});return React.createElement(i.a,a()({className:m},s),c&&React.createElement(u.a,null),React.createElement("span",{className:"wc-block-components-button__text"},r))}},187:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var c=n(53),a=n(173),r=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(a.b)(),n=e.paymentMethods,r=e.expressPaymentMethods,o=e.paymentMethodsInitialized,i=e.expressPaymentMethodsInitialized,s=Object(c.a)(n),l=Object(c.a)(r);return{paymentMethods:t?l:s,isInitialized:t?i:o}},o=function(){return r(!1)},i=function(){return r(!0)}},192:function(t,e,n){"use strict";var c=n(14),a=n.n(c),r=n(4),o=n.n(r),i=n(6),s=n.n(i),l=function(t){return"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--".concat(t)},u=function(t){var e=t.id,n=t.src,c=void 0===n?null:n,a=t.alt,r=void 0===a?"":a;return c?React.createElement("img",{className:l(e),src:c,alt:r}):null},d=n(83),m=[{id:"alipay",alt:"Alipay",src:d.l+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:d.l+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:d.l+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:d.l+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:d.l+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:d.l+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:d.l+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:d.l+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:d.l+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:d.l+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:d.l+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:d.l+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:d.l+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:d.l+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:d.l+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:d.l+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:d.l+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:d.l+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:d.l+"payment-methods/wechat.svg"}],p=n(21),b=n.n(p),f=n(49);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(265),e.a=function(t){var e=t.icons,n=void 0===e?[]:e,c=t.align,r=void 0===c?"center":c,o=function(t){var e={};return t.forEach((function(t){var n={};"string"==typeof t&&(n={id:t,alt:t,src:null}),"object"===b()(t)&&(n={id:t.id||"",alt:t.alt||"",src:t.src||null}),n.id&&Object(f.c)(n.id)&&!e[n.id]&&(e[n.id]=n)})),Object.values(e)}(n);if(0===o.length)return null;var i=s()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===r,"wc-block-components-payment-method-icons--align-right":"right"===r});return React.createElement("div",{className:i},o.map((function(t){var e,n=y(y({},t),(e=t.id,m.find((function(t){return t.id===e}))||{}));return React.createElement(u,a()({key:"payment-method-icon-"+t.id},n))})))}},251:function(t,e){},265:function(t,e){},273:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},302:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n(5),a=n.n(c),r=n(0),o={bottom:0,left:0,opacity:0,pointerEvents:"none",position:"absolute",right:0,top:0,zIndex:-1},i=function(){var t=Object(r.useState)(""),e=a()(t,2),n=e[0],c=e[1],i=Object(r.useRef)(null),s=Object(r.useRef)(new IntersectionObserver((function(t){t[0].isIntersecting?c("visible"):c(t[0].boundingClientRect.top>0?"below":"above")}),{threshold:1}));return Object(r.useLayoutEffect)((function(){var t=i.current,e=s.current;return t&&e.observe(t),function(){e.unobserve(t)}}),[]),[React.createElement("div",{"aria-hidden":!0,ref:i,style:o}),n]}},345:function(t,e,n){"use strict";var c=n(14),a=n.n(c),r=n(188);e.a=function(t){return function(e){return function(n){var c=Object(r.a)(t,n);return React.createElement(e,a()({},n,c))}}}},385:function(t,e,n){"use strict";(function(t){var c=n(5),a=n.n(c),r=n(1),o=n(0),i=n(192),s=n(143),l=n(83),u=n(48),d=n(187),m=n(302),p=(n(386),function(t){return Object.values(t).reduce((function(t,e){return null!==e.icons&&(t=t.concat(e.icons)),t}),[])});e.a=function(e){var n=e.link,c=Object(u.b)().isCalculating,b=Object(m.a)(),f=a()(b,2),v=f[0],y=f[1],h=Object(o.useState)(!1),g=a()(h,2),w=g[0],O=g[1],j=Object(d.b)().paymentMethods;Object(o.useEffect)((function(){if("function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener){var e=function(){O(!1)};return t.addEventListener("pageshow",e),function(){t.removeEventListener("pageshow",e)}}}),[]);var k=React.createElement(React.Fragment,null,React.createElement(s.a,{className:"wc-block-cart__submit-button",href:n||l.d,disabled:c,onClick:function(){return O(!0)},showSpinner:w},Object(r.__)("Proceed to Checkout",'woocommerce')),React.createElement(i.a,{icons:p(j)}));return React.createElement("div",{className:"wc-block-cart__submit"},v,React.createElement("div",{className:"wc-block-cart__submit-container"},k),"below"===y&&React.createElement("div",{className:"wc-block-cart__submit-container wc-block-cart__submit-container--sticky"},k))}}).call(this,n(273))},386:function(t,e){},415:function(t,e,n){"use strict";n.r(e);var c=n(345),a=n(2),r=n(385);e.default=Object(c.a)({checkoutPageId:{type:"number",default:0},lock:{type:"object",default:{move:!0,remove:!0}}})((function(t){var e=t.checkoutPageId;return React.createElement(r.a,{link:Object(a.getSetting)("page-"+e,!1)})}))}}]);