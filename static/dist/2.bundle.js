webpackJsonp([2],{490:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function l(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var d=function(){function t(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}}(),r=function(t,n){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n      padding: 20px 0px;\n      tbody {\n        tr {\n          display: inline-table;\n          width:33.33%;\n          cursor: pointer;\n          transition:0.15s;\n          position: relative;\n          border-bottom: 1px solid rgba(0,0,0,0.025);\n          &:active{\n            .cs-copy{\n              display:none;\n\n            }\n             .cs-copied{\n              display:block;\n            \n            }\n          background: ",";}\n          @media screen and (max-width: ",") {\n            width: 50%;\n            max-width: 50%;\n            overflow: hidden;\n            text-overflow: ellipsis;\n          }\n          @media screen and (max-width: ",") {\n            width: 100%;\n            max-width: 100%;\n          }\n          &:hover .cs-copy{\n            display: block;\n          }\n          &:active .cs-copy{\n            display:none;\n          }\n          td {\n\n             line-height: 16px;\n              white-space: nowrap;\n              overflow: hidden;\n              padding: 5px;\n               -webkit-touch-callout: none;\n              -webkit-user-select: none;\n              -khtml-user-select: none;\n              -moz-user-select: none;\n              -ms-user-select: none;\n              user-select: none;\n              font-size: 13px;\n              text-overflow: ellipsis;\n              color: ",";\n              @media screen and (max-width: ",") {\n              font-size: 13px;\n            }\n            .cs-copied {\n    position: absolute;\n     display:none;\n    right: 10px;\n    top: 8px;\n    color:#36b167;\n    font-weight: 700;\n    font-size: 12px!important;\n    i {\n    font-size: 12px!important;\n}\n}\n            .cs-copy{\n                  font-size: 15px;\n                  color: ",";\n                  display: none;\n                  position: absolute;\n                  right: 10px;\n                  top: 10px;\n            }\n            i {\n              font-size: 19px;\n              text-rendering: auto;\n              -webkit-font-smoothing: antialiased;\n              }\n            }\n          }\n        }\n      }\n"],["\n      padding: 20px 0px;\n      tbody {\n        tr {\n          display: inline-table;\n          width:33.33%;\n          cursor: pointer;\n          transition:0.15s;\n          position: relative;\n          border-bottom: 1px solid rgba(0,0,0,0.025);\n          &:active{\n            .cs-copy{\n              display:none;\n\n            }\n             .cs-copied{\n              display:block;\n            \n            }\n          background: ",";}\n          @media screen and (max-width: ",") {\n            width: 50%;\n            max-width: 50%;\n            overflow: hidden;\n            text-overflow: ellipsis;\n          }\n          @media screen and (max-width: ",") {\n            width: 100%;\n            max-width: 100%;\n          }\n          &:hover .cs-copy{\n            display: block;\n          }\n          &:active .cs-copy{\n            display:none;\n          }\n          td {\n\n             line-height: 16px;\n              white-space: nowrap;\n              overflow: hidden;\n              padding: 5px;\n               -webkit-touch-callout: none;\n              -webkit-user-select: none;\n              -khtml-user-select: none;\n              -moz-user-select: none;\n              -ms-user-select: none;\n              user-select: none;\n              font-size: 13px;\n              text-overflow: ellipsis;\n              color: ",";\n              @media screen and (max-width: ",") {\n              font-size: 13px;\n            }\n            .cs-copied {\n    position: absolute;\n     display:none;\n    right: 10px;\n    top: 8px;\n    color:#36b167;\n    font-weight: 700;\n    font-size: 12px!important;\n    i {\n    font-size: 12px!important;\n}\n}\n            .cs-copy{\n                  font-size: 15px;\n                  color: ",";\n                  display: none;\n                  position: absolute;\n                  right: 10px;\n                  top: 10px;\n            }\n            i {\n              font-size: 19px;\n              text-rendering: auto;\n              -webkit-font-smoothing: antialiased;\n              }\n            }\n          }\n        }\n      }\n"]),p=e(5),c=a(p),s=(e(181),e(119)),u=a(s),f=e(515),m=a(f),x=e(516),h=a(x),g=e(502),b=a(g),y=e(48),E=a(y),w=e(47),O=E.default.table(r,w.LIGHT_BACKGROUND,w.BREAKPOINT_LG,w.BREAKPOINT_MD,w.ICON_COLOR,w.BREAKPOINT_MD,w.SECONDARY_FONT_COLOR),v=function(t){function n(t){i(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.state={icons:{data:u.default}},e.copyCode=e.copyCode.bind(e),e}return l(n,t),d(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"copyCode",value:function(t){document.querySelector("input."+t).select(),document.execCommand("copy")}},{key:"render",value:function(){var t=this,n=c.default.createElement("tr",null,c.default.createElement("td",null),c.default.createElement("td",null)),e=c.default.createElement("tr",null,c.default.createElement("td",null),c.default.createElement("td",null)),a=c.default.createElement("tr",null,c.default.createElement("td",null),c.default.createElement("td",null));return null!==this.state.icons.data&&(n=this.state.icons.data.map(function(n,e){if("REGULAR"===n.type_of_icon)return c.default.createElement("tr",{onClick:function(){t.copyCode(n.name)},key:n.id},c.default.createElement("td",{width:"24"},c.default.createElement("i",{className:"bx bx-"+n.name})),c.default.createElement("td",null,n.name,c.default.createElement("input",{className:n.name+" hidden",onChange:function(){},type:"text",value:n.name}),c.default.createElement("i",{className:"bx bx-copy cs-copy"}),c.default.createElement("span",{className:"cs-copied"},"Copied ",c.default.createElement("i",{className:"bx bx-check"}))))}),e=this.state.icons.data.map(function(n,e){if("SOLID"===n.type_of_icon)return c.default.createElement("tr",{onClick:function(){t.copyCode(n.name)},key:n.id},c.default.createElement("td",{width:"24"},c.default.createElement("i",{className:"bx bxs-"+n.name})),c.default.createElement("td",null,n.name,c.default.createElement("input",{className:n.name+" hidden",onChange:function(){},type:"text",value:n.name}),c.default.createElement("i",{className:"bx bx-copy cs-copy"})))}),a=this.state.icons.data.map(function(n,e){if("LOGO"===n.type_of_icon)return c.default.createElement("tr",{onClick:function(){t.copyCode(n.name)},key:n.id},c.default.createElement("td",{width:"24"},c.default.createElement("i",{className:"bx bxl-"+n.name})),c.default.createElement("td",null,n.name,c.default.createElement("input",{className:n.name+" hidden",onChange:function(){},type:"text",value:n.name}),c.default.createElement("i",{className:"bx bx-copy cs-copy"})))})),c.default.createElement("div",null,c.default.createElement(m.default,null,c.default.createElement("div",{className:"page-cont"},c.default.createElement("div",{className:"page-cont-in"},c.default.createElement("div",{className:"page-head"},c.default.createElement("div",{className:"page-head-bg"},c.default.createElement("div",{className:"page-head-in"},c.default.createElement("h1",null,"Cheatsheet"),c.default.createElement("p",null,"Copy paste the name of any of ",null!==this.state.icons.data&&this.state.icons.data.length," icons")))),c.default.createElement("div",{className:"page-body"},c.default.createElement("div",{className:"page-body-in"},c.default.createElement(h.default,null,c.default.createElement("div",{className:"docs-sidebar"},c.default.createElement("ul",{className:"docs-sidebar-list"},c.default.createElement("li",null,c.default.createElement("a",{href:"#"},"Icons"),c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("a",{href:"#regular"},"Regular")),c.default.createElement("li",null,c.default.createElement("a",{href:"#solid"},"Solid")),c.default.createElement("li",null,c.default.createElement("a",{href:"#logos"},"Logos")))))),c.default.createElement("div",{className:"docs-content"},c.default.createElement("h3",{id:"regular",className:"cs"},"Regular Icons"),c.default.createElement(O,null,c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",null),c.default.createElement("th",null))),c.default.createElement("tbody",null,n)),c.default.createElement("h3",{id:"solid",className:"cs"},"Solid Icons"),c.default.createElement(O,null,c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",null),c.default.createElement("th",null))),c.default.createElement("tbody",null,e)),c.default.createElement("h3",{id:"logos",className:"cs"},"Logos"),c.default.createElement(O,null,c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",null),c.default.createElement("th",null))),c.default.createElement("tbody",null,a))))))))),c.default.createElement(b.default,null)," ")}}]),n}(p.Component);n.default=v},502:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function l(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var d=function(){function t(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}}(),r=function(t,n){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n\n  color:",";\ndisplay: block;\n        height: 30px;\n    text-align: right;\n     max-width: ",";\n    padding: 30px 30px;\n    color: #1a1b1c;\n    font-size: 14px;\n    border-top: 1px dotted #e5e5e5;\n    margin: 0 auto;\n        display: flex;\n    justify-content: flex-end;\n\n   span {\n    font-size: 15px;\n    color: #bdc3cc;\n    line-height: 30px;\n    margin-right: 10px;\n}\n  svg {\n    width: 120px;\n    height: 32px;\n}\n  \n\n"],["\n\n  color:",";\ndisplay: block;\n        height: 30px;\n    text-align: right;\n     max-width: ",";\n    padding: 30px 30px;\n    color: #1a1b1c;\n    font-size: 14px;\n    border-top: 1px dotted #e5e5e5;\n    margin: 0 auto;\n        display: flex;\n    justify-content: flex-end;\n\n   span {\n    font-size: 15px;\n    color: #bdc3cc;\n    line-height: 30px;\n    margin-right: 10px;\n}\n  svg {\n    width: 120px;\n    height: 32px;\n}\n  \n\n"]),p=e(5),c=a(p),s=e(48),u=a(s),f=e(47),m=(e(49),u.default.div(r,f.FONT_COLOR,f.MAX_WIDTH)),x=function(t){function n(t){return i(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}return l(n,t),d(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.default.createElement("div",{className:""},c.default.createElement(m,null,c.default.createElement("span",null,"Made with ",c.default.createElement("i",{className:"bx bxs-heart"})," by"),c.default.createElement("a",{href:"https://github.com/atisawd",target:"_blank"},c.default.createElement("svg",{className:"footer-logo",version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"1825.596px",height:"238.593px",viewBox:"0 0 1825.596 238.593"},c.default.createElement("path",{fill:"#bdc3cc",d:"M49.282,228.111"}),c.default.createElement("g",null,c.default.createElement("polyline",{opacity:"0.6",fill:"#bdc3cc",points:"241.149,77.679 241.149,226.777 286.708,226.777 \r 286.708,226.777 329.893,226.777 329.893,226.777 375.448,226.777 375.448,57.378 375.448,11.819 375.448,11.817 329.893,11.817 \r 329.893,11.819 286.708,11.819 286.704,11.819 286.708,11.817 241.149,11.817  "}),c.default.createElement("polyline",{fill:"#bdc3cc",points:"282.99,11.819 282.985,11.819 282.99,11.817 237.43,11.817 237.43,11.817 194.245,11.819 \r 194.245,11.819 148.686,11.819 -0.001,226.777 45.563,226.777 45.563,226.777 88.743,226.777 133.082,226.777 134.303,226.777 \r 237.43,77.679   "})),c.default.createElement("g",null,c.default.createElement("path",{fill:"#bdc3cc",d:"M749.099,238.593l-21.69-50.389h-97.772l-21.69,50.389h-55.394L653.328,5.34h50.388l100.776,233.253\r H749.099z M678.688,74.748l-29.364,67.742h58.396L678.688,74.748z"}),c.default.createElement("path",{fill:"#bdc3cc",d:"M980.018,50.389v188.205h-52.059V50.389h-66.071V5.34h184.201v45.049H980.018z"}),c.default.createElement("path",{fill:"#bdc3cc",d:"M1150.867,5.34h52.057v233.253h-52.057V5.34z"}),c.default.createElement("path",{fill:"#bdc3cc",d:"M1381.615,51.891c-5.007,4.119-7.509,9.568-7.509,16.351c0,6.789,3.056,12.181,9.177,16.187\r c6.114,4.004,20.239,8.732,42.379,14.182c22.134,5.453,39.317,13.629,51.557,24.525c12.232,10.902,18.354,26.813,18.354,47.721\r c0,20.912-7.842,37.873-23.525,50.889c-15.684,13.014-36.32,19.52-61.9,19.52c-36.932,0-70.189-13.68-99.773-41.043l31.032-38.041\r c25.136,22.023,48.386,33.035,69.742,33.035c9.563,0,17.069-2.055,22.524-6.174c5.447-4.113,8.176-9.676,8.176-16.686\r c0-7.008-2.895-12.564-8.678-16.686c-5.786-4.113-17.24-8.285-34.368-12.514c-27.146-6.449-47-14.85-59.565-25.193\r c-12.57-10.345-18.854-26.582-18.854-48.72c0-22.134,7.951-39.21,23.859-51.223C1360.145,6.008,1380,0,1403.807,0\r c15.568,0,31.143,2.67,46.718,8.008c15.568,5.34,29.142,12.906,40.71,22.692l-26.361,38.042\r c-20.244-15.352-41.16-23.025-62.734-23.025C1393.459,45.717,1386.619,47.776,1381.615,51.891z"}),c.default.createElement("path",{fill:"#bdc3cc",d:"M1770.201,238.593l-21.689-50.389h-97.773l-21.689,50.389h-55.395L1674.432,5.34h50.387l100.777,233.253\r H1770.201z M1699.789,74.748l-29.364,67.742h58.397L1699.789,74.748z"}))))))}}]),n}(p.Component);n.default=x},515:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(t,n){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n         background:#FFF;\n         .page-body{\n         \t    padding: 0px 130px;\n         \t     @media screen and (max-width: ",") {padding: 0px 0px;}\n         \th4 {\n\t\t\t  font-size: 21px;\n\t\t\t  font-weight: 400;\n\t\t\t  font-family:",";\n\t\t\t  margin-bottom: 0px;\n\t\t\t  color: ",';\n\t\t\t  margin-top: 15px;\n\t\t\t  margin-bottom: 15px;\n\t\t\t  &:before {\n\t\t\t    display: block;\n\t\t\t    height: 6rem;\n\t\t\t    margin-top: -6rem;\n\t\t\t    visibility: hidden;\n\t\t\t    content: "";\n\t\t\t  }\n\t\t\t}\n\t\t\th3 {\n\t\t\t    font-size: 27px;\n\t\t\t    color:',";\n\t\t\t    font-family:",';\n\t\t\t    margin-bottom: 0px;\n\t\t\t    margin-top: 25px;\n\t\t\t    margin-bottom: -10px;\n\t\t\t    &:before {\n\t\t\t      display: block;\n\t\t\t      height: 6rem;\n\t\t\t      margin-top: -6rem;\n\t\t\t      visibility: hidden;\n\t\t\t      content: "";\n\t\t\t    }\n\t\t\t  }\n\t\t\tdiv {\n\t\t\t  font-size: 15px;\n\t\t\t  margin-top: 15px;margin-bottom: 40px;\n\t\t\t  color: ',";\n\t\t\t}\n\t\t\tpre {\n\t\t\t    white-space: pre-line;\n\t\t\t    margin: 0px;\n\t\t\t}\n\t\t\tmax-width: ",";\n\t\t    margin: 0px auto;\n\t\t    margin-top: 0;\n\t\t    padding-bottom: 50px;\n\t\t    @media screen and (max-width: ",") {\n\t\t\t\tdiv {\n\t\t\t      font-size: 14px;\n\t\t\t    }\n\t\t\t    h3 {\n\t\t\t      font-size: 21px;\n\t\t\t    }\n\t\t    }\n\t\t    .page-body-in{\n\t\t    \t@media screen and (max-width: ",") {\n\t\t\t\t\tmargin-top: 0px!important;\n\t\t    \t}\n\t\t    \tcode.hljs {\n\t\t\t\t    padding: 1em;\n\t\t\t\t}\n\t\t\t\tcode.display {\n\t\t\t\t    border-top-left-radius: 0px;\n\t\t\t\t    border-top-right-radius: 0px;\n\t\t\t\t}\n\t\t\t\tcode.side {\n\t\t\t\t      color: #c7254e;\n    background: #f9f2f4;\n    padding: 1px 5px!important;\n    font-size: 13px;\n    display: -webkit-inline-box!important;\n    display: -webkit-inline-flex!important;\n    display: -ms-inline-flexbox!important;\n    display: inline-flex!important;\n    border-radius: 3px;\n\t\t\t\t \n\t\t\t\t}\n\t\t\t\t.tab {\n\t\t\t\t\t  padding-left: 15px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.tab-2 {\n\t\t\t\t\t  padding-left: 30px;\n\t\t\t\t\t}\n\t\t\t\tspan.hljs-tag {\n\t\t\t\t    margin-bottom: 2px;\n\t\t\t\t    display: inline-block;\n\t\t\t\t}\n\t\t    }\n\n         }\n         .page-head {\n\t\t\t  p {\n\t\t\t    font-size: 19px;\n\t\t\t    padding: 0px 40px;\n\t\t\t    color: ",";\n\t\t\t    margin-top: 0px;\n\t\t\t    font-weight:400;\n\t\t\t  }\n\t\t\t   background-color: ",";\n\t\t\t \n\t\t\t  h1 {\n\t\t\t    font-size: 42px;\n\t\t\t    font-weight:700;\n\t\t\t    font-family:",";\n\t\t\t    color:  ",";\n\t\t\t    margin-bottom: 10px;\n\t\t\t    margin-top: 0;\n\t\t\t    text-align: left;\n\t\t\t    padding: 0px 40px;\n\t\t\t    line-height: 40px;\n\n\t\t\t  }\n\t\t\t  .page-head-in {\n\t\t\t\t  max-width: ",";\n\t\t\t\t  margin: 0 auto;\n\t\t\t\t}\n\t\t\t\t.page-head-bg{\n\t\t\t\t\t background-color:",";\n   \t\t  background-size:100%; \n\t\t\t  padding:50px 150px;\n\t\t\t\t\tpadding-top:140px;\n\t\t\t  @media screen and (max-width: ",") {\n\t\t\t\t\tbackground-size: 200%;\n\t\t\t\t\tpadding:50px 0px;\n\t\t\t\t\tpadding-top:130px;\n\t\t\t\t\th1, p {\n\t\t\t\t      padding: 0px;\n\t\t\t\t    }\n\t\t\t\t    .page-head-in {\n\t\t\t\t\t   padding: 0px 20px;\n\t\t\t\t\t}\n\t\t\t\t\th1 {\n\t\t\t\t\t    font-size: 40px;\n\t\t\t\t\t  }\n\t\t\t\t}\n\t\t\t\t@media screen and (max-width: ",") {\n\t\t\t\t\tbackground-size: 300%;\n\t\t\t\t\th1 {\n\t\t\t\t      font-size: 27px;\n\t\t\t\t      line-height: 1.1;\n\t\t\t\t    }\n\t\t\t\t    p {\n\t\t\t\t      font-size: 16px;\n\t\t\t\t    }\n\t\t\t\t}\n\t\t\t\t@media screen and (max-width: ",") {\n\t\t\t\t\tbackground-size: 400%;\n\t\t\t\t\t\n\t\t\t\t    p {\n\t\t\t\t      font-size: 15px;\n\t\t\t\t    }\n\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t}  \n         @media screen and (max-width: ",") {\n         \t.page-cont-in {\n\t\t\t\tpadding: 0px;\n\t\t\t}\n         } \n        "],["\n         background:#FFF;\n         .page-body{\n         \t    padding: 0px 130px;\n         \t     @media screen and (max-width: ",") {padding: 0px 0px;}\n         \th4 {\n\t\t\t  font-size: 21px;\n\t\t\t  font-weight: 400;\n\t\t\t  font-family:",";\n\t\t\t  margin-bottom: 0px;\n\t\t\t  color: ",';\n\t\t\t  margin-top: 15px;\n\t\t\t  margin-bottom: 15px;\n\t\t\t  &:before {\n\t\t\t    display: block;\n\t\t\t    height: 6rem;\n\t\t\t    margin-top: -6rem;\n\t\t\t    visibility: hidden;\n\t\t\t    content: "";\n\t\t\t  }\n\t\t\t}\n\t\t\th3 {\n\t\t\t    font-size: 27px;\n\t\t\t    color:',";\n\t\t\t    font-family:",';\n\t\t\t    margin-bottom: 0px;\n\t\t\t    margin-top: 25px;\n\t\t\t    margin-bottom: -10px;\n\t\t\t    &:before {\n\t\t\t      display: block;\n\t\t\t      height: 6rem;\n\t\t\t      margin-top: -6rem;\n\t\t\t      visibility: hidden;\n\t\t\t      content: "";\n\t\t\t    }\n\t\t\t  }\n\t\t\tdiv {\n\t\t\t  font-size: 15px;\n\t\t\t  margin-top: 15px;margin-bottom: 40px;\n\t\t\t  color: ',";\n\t\t\t}\n\t\t\tpre {\n\t\t\t    white-space: pre-line;\n\t\t\t    margin: 0px;\n\t\t\t}\n\t\t\tmax-width: ",";\n\t\t    margin: 0px auto;\n\t\t    margin-top: 0;\n\t\t    padding-bottom: 50px;\n\t\t    @media screen and (max-width: ",") {\n\t\t\t\tdiv {\n\t\t\t      font-size: 14px;\n\t\t\t    }\n\t\t\t    h3 {\n\t\t\t      font-size: 21px;\n\t\t\t    }\n\t\t    }\n\t\t    .page-body-in{\n\t\t    \t@media screen and (max-width: ",") {\n\t\t\t\t\tmargin-top: 0px!important;\n\t\t    \t}\n\t\t    \tcode.hljs {\n\t\t\t\t    padding: 1em;\n\t\t\t\t}\n\t\t\t\tcode.display {\n\t\t\t\t    border-top-left-radius: 0px;\n\t\t\t\t    border-top-right-radius: 0px;\n\t\t\t\t}\n\t\t\t\tcode.side {\n\t\t\t\t      color: #c7254e;\n    background: #f9f2f4;\n    padding: 1px 5px!important;\n    font-size: 13px;\n    display: -webkit-inline-box!important;\n    display: -webkit-inline-flex!important;\n    display: -ms-inline-flexbox!important;\n    display: inline-flex!important;\n    border-radius: 3px;\n\t\t\t\t \n\t\t\t\t}\n\t\t\t\t.tab {\n\t\t\t\t\t  padding-left: 15px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.tab-2 {\n\t\t\t\t\t  padding-left: 30px;\n\t\t\t\t\t}\n\t\t\t\tspan.hljs-tag {\n\t\t\t\t    margin-bottom: 2px;\n\t\t\t\t    display: inline-block;\n\t\t\t\t}\n\t\t    }\n\n         }\n         .page-head {\n\t\t\t  p {\n\t\t\t    font-size: 19px;\n\t\t\t    padding: 0px 40px;\n\t\t\t    color: ",";\n\t\t\t    margin-top: 0px;\n\t\t\t    font-weight:400;\n\t\t\t  }\n\t\t\t   background-color: ",";\n\t\t\t \n\t\t\t  h1 {\n\t\t\t    font-size: 42px;\n\t\t\t    font-weight:700;\n\t\t\t    font-family:",";\n\t\t\t    color:  ",";\n\t\t\t    margin-bottom: 10px;\n\t\t\t    margin-top: 0;\n\t\t\t    text-align: left;\n\t\t\t    padding: 0px 40px;\n\t\t\t    line-height: 40px;\n\n\t\t\t  }\n\t\t\t  .page-head-in {\n\t\t\t\t  max-width: ",";\n\t\t\t\t  margin: 0 auto;\n\t\t\t\t}\n\t\t\t\t.page-head-bg{\n\t\t\t\t\t background-color:",";\n   \t\t  background-size:100%; \n\t\t\t  padding:50px 150px;\n\t\t\t\t\tpadding-top:140px;\n\t\t\t  @media screen and (max-width: ",") {\n\t\t\t\t\tbackground-size: 200%;\n\t\t\t\t\tpadding:50px 0px;\n\t\t\t\t\tpadding-top:130px;\n\t\t\t\t\th1, p {\n\t\t\t\t      padding: 0px;\n\t\t\t\t    }\n\t\t\t\t    .page-head-in {\n\t\t\t\t\t   padding: 0px 20px;\n\t\t\t\t\t}\n\t\t\t\t\th1 {\n\t\t\t\t\t    font-size: 40px;\n\t\t\t\t\t  }\n\t\t\t\t}\n\t\t\t\t@media screen and (max-width: ",") {\n\t\t\t\t\tbackground-size: 300%;\n\t\t\t\t\th1 {\n\t\t\t\t      font-size: 27px;\n\t\t\t\t      line-height: 1.1;\n\t\t\t\t    }\n\t\t\t\t    p {\n\t\t\t\t      font-size: 16px;\n\t\t\t\t    }\n\t\t\t\t}\n\t\t\t\t@media screen and (max-width: ",") {\n\t\t\t\t\tbackground-size: 400%;\n\t\t\t\t\t\n\t\t\t\t    p {\n\t\t\t\t      font-size: 15px;\n\t\t\t\t    }\n\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t}  \n         @media screen and (max-width: ",") {\n         \t.page-cont-in {\n\t\t\t\tpadding: 0px;\n\t\t\t}\n         } \n        "]),i=e(48),o=function(t){return t&&t.__esModule?t:{default:t}}(i),l=e(47),d=o.default.div(a,l.BREAKPOINT_LG,l.FONT_FAMILY_HEADER,l.HEADER_COLOR,l.HEADER_COLOR,l.FONT_FAMILY_HEADER,l.ICON_COLOR,l.MAX_WIDTH,l.BREAKPOINT_MD,l.BREAKPOINT_LG,l.SECONDARY_FONT_COLOR,l.HEADER_BACKGROUND,l.FONT_FAMILY_HEADER,l.MAIN_HEADER_COLOR,l.MAX_WIDTH,l.HEADER_BACKGROUND,l.BREAKPOINT_LG,l.BREAKPOINT_MD,l.BREAKPOINT_SM,l.BREAKPOINT_LG);n.default=d},516:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(t,n){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n    \t\t display: flex;\n    \t\t .docs-sidebar {\n\t\t\t\tflex: 1;\n\t\t\t\t order: 1;\n\t\t\t\t @media screen and (max-width: ",") {\n\t\t\t\t \tdisplay:none;\n\t\t\t\t }\n\t\t\t\t .docs-sidebar-list{\n\t\t\t\t \tli {\n\t\t\t\t\t   padding: 1px 10px;\n\t\t\t\t\t   a {\n\t\t\t\t\t   \tfont-weight: 500;\n\t\t\t\t\t  color: ",";\n\t\t\t\t\t  font-size: 14px;\n\t\t\t\t\t  &:hover {\n\t\t\t\t\t    color: ",";\n\t\t\t\t\t  \t\t}\n\t\t\t\t\t\t}\n\t\t\t\t \t}\n\t\t\t\t \tul {\n\t\t\t\t\t  list-style: none;\n\t\t\t\t\t  padding: 5px;\n\t\t\t\t\t  margin: 5px 10px;\n\t\t\t\t\t  margin-right: 0px;\n\t\t\t\t\t  padding-right: 0px;\n\t\t\t\t\t  border-left: 1px solid #ebebeb;\n\t\t\t\t\t  li{\n\t\t\t\t\t  \ta{\n\t\t\t\t\t  \t\tfont-weight: 400!important;\n\t\t\t\t\t  \t}\n\t\t\t\t\t  }\n\t\t\t\t\t}\n\t\t\t\t\tposition: -webkit-sticky;\n\t\t\t\t    position: sticky;\n\t\t\t\t    box-sizing: border-box;\n\t\t\t\t    top: 90px;\n\t\t\t\t    list-style: none;\n\t\t\t\t    padding: 0;\n\t\t\t\t    margin: 30px;\n\t\t\t\t    padding-left: 20px;\n\t\t\t\t    border-right: 1px solid ",";\n\n\t\t\t\t }\n\t\t\t}\n\n\t\t\t.docs-content {\n\t\t\t\t overflow: hidden;\n\t\t\t\tflex: 2;\n\t\t\t\torder: 2;\n\t\t\t\tpadding: 0 50px;\n\t\t\t\t @media screen and (max-width: ",") {\n\t\t\t\t \tpadding: 20px;\n\t\t\t\t }\n\t\t\t}\n        "],["\n    \t\t display: flex;\n    \t\t .docs-sidebar {\n\t\t\t\tflex: 1;\n\t\t\t\t order: 1;\n\t\t\t\t @media screen and (max-width: ",") {\n\t\t\t\t \tdisplay:none;\n\t\t\t\t }\n\t\t\t\t .docs-sidebar-list{\n\t\t\t\t \tli {\n\t\t\t\t\t   padding: 1px 10px;\n\t\t\t\t\t   a {\n\t\t\t\t\t   \tfont-weight: 500;\n\t\t\t\t\t  color: ",";\n\t\t\t\t\t  font-size: 14px;\n\t\t\t\t\t  &:hover {\n\t\t\t\t\t    color: ",";\n\t\t\t\t\t  \t\t}\n\t\t\t\t\t\t}\n\t\t\t\t \t}\n\t\t\t\t \tul {\n\t\t\t\t\t  list-style: none;\n\t\t\t\t\t  padding: 5px;\n\t\t\t\t\t  margin: 5px 10px;\n\t\t\t\t\t  margin-right: 0px;\n\t\t\t\t\t  padding-right: 0px;\n\t\t\t\t\t  border-left: 1px solid #ebebeb;\n\t\t\t\t\t  li{\n\t\t\t\t\t  \ta{\n\t\t\t\t\t  \t\tfont-weight: 400!important;\n\t\t\t\t\t  \t}\n\t\t\t\t\t  }\n\t\t\t\t\t}\n\t\t\t\t\tposition: -webkit-sticky;\n\t\t\t\t    position: sticky;\n\t\t\t\t    box-sizing: border-box;\n\t\t\t\t    top: 90px;\n\t\t\t\t    list-style: none;\n\t\t\t\t    padding: 0;\n\t\t\t\t    margin: 30px;\n\t\t\t\t    padding-left: 20px;\n\t\t\t\t    border-right: 1px solid ",";\n\n\t\t\t\t }\n\t\t\t}\n\n\t\t\t.docs-content {\n\t\t\t\t overflow: hidden;\n\t\t\t\tflex: 2;\n\t\t\t\torder: 2;\n\t\t\t\tpadding: 0 50px;\n\t\t\t\t @media screen and (max-width: ",") {\n\t\t\t\t \tpadding: 20px;\n\t\t\t\t }\n\t\t\t}\n        "]),i=e(48),o=function(t){return t&&t.__esModule?t:{default:t}}(i),l=e(47),d=o.default.div(a,l.BREAKPOINT_LG,l.ICON_COLOR,l.HEADER_COLOR,l.BORDER_COLOR,l.BREAKPOINT_LG);n.default=d}});
//# sourceMappingURL=2.bundle.js.map