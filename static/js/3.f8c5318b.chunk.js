(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[3],{49:function(e,t,n){e.exports=n(50)},50:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function l(e,t,n,r){var a=t&&t.prototype instanceof s?t:s,i=Object.create(a.prototype),o=new b(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return N()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var l=g(o,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=c(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,o),i}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=l;var u={};function s(){}function h(){}function m(){}var f={};f[a]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(x([])));p&&p!==t&&n.call(p,a)&&(f=p);var y=m.prototype=s.prototype=Object.create(f);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e,t){var r;this._invoke=function(a,i){function o(){return new t((function(r,o){!function r(a,i,o,l){var u=c(e[a],e,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,o,l)}),(function(e){r("throw",e,o,l)})):t.resolve(h).then((function(e){s.value=e,o(s)}),(function(e){return r("throw",e,o,l)}))}l(u.arg)}(a,i,r,o)}))}return r=r?r.then(o,o):o()}}function g(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=y.constructor=m,m.constructor=h,m[o]=h.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(E.prototype),E.prototype[i]=function(){return this},e.AsyncIterator=E,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new E(l(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(y),y[o]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},51:function(e,t,n){"use strict";function r(e,t,n,r,a,i,o){try{var l=e[i](o),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function l(e){r(o,a,i,l,c,"next",e)}function c(e){r(o,a,i,l,c,"throw",e)}l(void 0)}))}}n.d(t,"a",(function(){return a}))},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",a=function(e){return"https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(e,".json")}},53:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},56:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(49),o=n.n(i),l=n(51),c=n(53),u=n(52),s=(n(18),function(){return a.a.createElement("div",{className:"not-found"},a.a.createElement("h3",{className:"not-found__header"},"This phone not found"))}),h=function(e){var t=e.id,n=Object(r.useState)(null),i=Object(c.a)(n,2),h=i[0],m=i[1],f=Object(r.useState)(null),d=Object(c.a)(f,2),p=d[0],y=d[1];return Object(r.useEffect)((function(){y(null),fetch(Object(u.a)(t)).then(function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=8;break}return e.t0=m,e.next=4,t.json();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=9;break;case 8:throw new Error(t.statusText);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return y(e)}))}),[]),p?a.a.createElement(s,null):a.a.createElement("section",{className:"details"},a.a.createElement("div",{className:"info"},h&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"info__slider"},a.a.createElement("img",{src:h.images[0],alt:"phone_img",className:"info__slider-img"})),a.a.createElement("div",{className:"info__base"},a.a.createElement("h3",{className:"info__header"},h.id),a.a.createElement("p",{className:"info__description"},h.description),a.a.createElement("ul",{className:"info__list"},h.images.map((function(e){return a.a.createElement("li",{key:e,className:"info__item"},a.a.createElement("img",{src:e,alt:"device",className:"info__item-img"}))})))))),a.a.createElement("ul",{className:"details__list"},h&&h.availability&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Availability and Networks"),a.a.createElement("p",null,h.availability)),h&&h.battery&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Battery"),a.a.createElement("h5",null,"Type"),a.a.createElement("p",null,h.battery.type),a.a.createElement("h5",null,"Talk time"),a.a.createElement("p",null,h.battery.talkTime),a.a.createElement("h5",null,"Standby time (max)"),a.a.createElement("p",null,h.battery.standbyTime)),h&&h.storage&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Storage and Memory"),a.a.createElement("p",null,h.storage.flash),a.a.createElement("h4",null,"RAM"),a.a.createElement("p",null,h.storage.ram)),h&&h.connectivity&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Connectivity"),a.a.createElement("h5",null,"Network support"),a.a.createElement("p",null,h.connectivity.cell),a.a.createElement("h5",null,"WI-FI"),a.a.createElement("p",null,h.connectivity.wifi),a.a.createElement("h5",null,"Bluetooth"),a.a.createElement("p",null,h.connectivity.bluetooth),a.a.createElement("h5",null,"Infrared"),a.a.createElement("p",null,h.connectivity.infrared?"yes":"no"),a.a.createElement("h5",null,"GPS"),a.a.createElement("p",null,h.connectivity.gps?"yes":"no")),h&&h.android&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Android"),a.a.createElement("h5",null,"OS Version"),a.a.createElement("p",null,h.android.os),a.a.createElement("h5",null,"UI"),a.a.createElement("p",null,h.android.ui)),h&&h.android&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Size and Weight"),a.a.createElement("h5",null,"Dimensions"),h.sizeAndWeight.dimensions.map((function(e){return a.a.createElement("p",{key:e},e)})),a.a.createElement("h5",null,"Weight"),a.a.createElement("p",null,h.sizeAndWeight.weight)),h&&h.android&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Display"),a.a.createElement("h5",null,"Screen size"),a.a.createElement("p",null,h.display.screenSize),a.a.createElement("h5",null,"Screen resolution"),a.a.createElement("p",null,h.display.screenResolution),a.a.createElement("h5",null,"TouchScreen"),a.a.createElement("p",null,h.display.touchScreen?"yes":"no")),h&&h.android&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Hardware"),a.a.createElement("h5",null,"CPU"),a.a.createElement("p",null,h.hardware.cpu),a.a.createElement("h5",null,"USB"),a.a.createElement("p",null,h.hardware.usb),a.a.createElement("h5",null,"Audio / headphone jack"),a.a.createElement("p",null,h.hardware.audioJack),a.a.createElement("h5",null,"FM Radio"),a.a.createElement("p",null,h.hardware.fmRadio?"yes":"no"),a.a.createElement("h5",null,"Accelerometer"),a.a.createElement("p",null,h.hardware.accelerometer?"yes":"no")),h&&h.android&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Camera"),a.a.createElement("h5",null,"Primary"),a.a.createElement("p",null,h.camera.primary),a.a.createElement("h5",null,"Features"),h.camera.features.map((function(e){return a.a.createElement("p",{key:e},e)}))),h&&h.android&&a.a.createElement("li",{className:"details__item"},a.a.createElement("h4",null,"Additional features"),a.a.createElement("p",null,h.additionalFeatures))))};n.d(t,"PhoneDetailsPage",(function(){return m}));var m=function(e){var t=e.match;return a.a.createElement("div",{className:"details-page"},a.a.createElement(h,{id:t.params.phoneId}))}}}]);
//# sourceMappingURL=3.f8c5318b.chunk.js.map