(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[4],{64:function(e,t,a){"use strict";var n=a(23);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},67:function(e,t,a){"use strict";a.r(t);var n=a(64),r=a(0),o=a.n(r),c=a(11),s=a(16),l=a(8),i=function(e){var t=e.phone,a=e.handleAdd,n=e.basket,r=t.id,c=t.name,s=t.imageUrl,l=t.snippet;return o.a.createElement("div",{className:"phone"},o.a.createElement("img",{className:"phone__img",src:s,alt:"phoneImg"}),o.a.createElement("div",{className:"phone__info"},o.a.createElement("h3",{className:"phone__name"},c),o.a.createElement("p",{className:"phone__description"},l),n.find((function(e){return e.id===r}))?o.a.createElement("button",{className:"phone__added",type:"button",disabled:!0},"Added to cart"):o.a.createElement("button",{className:"phone__add",type:"button",onClick:function(e){return a(e,r)}},"Add to cart")))},u=a(6),m={loadPhones:u.a,setPhones:u.c,setBasket:u.b},d=Object(c.b)((function(e){return{phones:e.catalogReducer.phones,basket:e.basketReducer.basket}}),m)((function(e){var t=e.filter,a=e.sort,n=e.phones,c=e.basket,u=e.loadPhones,m=e.setPhones,d=e.setBasket,h=function(e,t){e.preventDefault(),d([].concat(Object(s.a)(c),[{id:t,quantity:1,phone:"/phones/".concat(t)}]))};Object(r.useEffect)((function(){u()}),[]),Object(r.useEffect)((function(){switch(a){case"age":m(Object(s.a)(n).sort((function(e,t){return e.age-t.age})));break;case"name":m(Object(s.a)(n).sort((function(e,t){return e.name.localeCompare(t.name)})));break;default:m(n)}}),[a]);var p=Object(r.useMemo)((function(){return n.length?function(e,t){var a=e.toLowerCase();return t.filter((function(e){return e.name.toLocaleLowerCase().includes(a)||e.snippet.toLocaleLowerCase().includes(a)}))}(t,n):[]}),[t,n]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"phones__list"},p.map((function(e){return o.a.createElement("li",{className:"phones__item",key:e.id},o.a.createElement(l.b,{className:"link",to:"/phones/".concat(e.id)},o.a.createElement(i,{phone:e,handleAdd:h,basket:c})))}))))}));a.d(t,"PhonesPageTemplate",(function(){return h})),a.d(t,"PhonesPage",(function(){return p}));var h=function(e){var t=e.phones,a=Object(r.useState)(""),c=Object(n.a)(a,2),s=c[0],l=c[1],i=Object(r.useState)("age"),u=Object(n.a)(i,2),m=u[0],h=u[1];return o.a.createElement("div",{className:"phones"},o.a.createElement("h2",{className:"phones__header"},"Mobile phones"),o.a.createElement("p",{className:"phones__quantity"},t.length," ","models"),o.a.createElement("div",{className:"settings"},o.a.createElement("input",{type:"text",value:s,onChange:function(e){l(e.target.value)},className:"settings__search",placeholder:"Search..."}),o.a.createElement("select",{defaultValue:"disabled",onChange:function(e){return function(e){h(e.target.value)}(e)},className:"settings__select"},o.a.createElement("option",{value:"disabled",disabled:!0},"Sort by"),o.a.createElement("option",{value:"age"},"Date"),o.a.createElement("option",{value:"name"},"Name"))),o.a.createElement(d,{filter:s,sort:m}))},p=Object(c.b)((function(e){return{phones:e.catalogReducer.phones}}),null)(h)}}]);
//# sourceMappingURL=4.adf076b4.chunk.js.map