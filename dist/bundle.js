!function(){"use strict";var e={878:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font: bold 20px "Courier";\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background-color: #67b4a8;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 10px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border: 1px solid #67b4a8;\n  position: absolute;\n}\n#main #stage > #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  left: 40px;\n  top: 100px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-content: space-between;\n}\n#main #stage > #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  transform: rotate(45deg);\n}\n#main ¢score-panel {\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n}\n',""]);const r=o},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:function(e,t,n){var i,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function s(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var h=s(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(r[h].references++,r[h].updater(f)):r.push({identifier:l,updater:v(f,t),references:1}),i.push(l)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function f(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,p=0;function v(e,t){var n,i,o;if(t.singleton){var r=p++;n=u||(u=c(t)),i=h.bind(null,n,r,!1),o=h.bind(null,n,r,!0)}else n=c(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);r[o].references--}for(var c=a(e,t),d=0;d<n.length;d++){var l=s(n[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=c}}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(379),t=n.n(e),i=n(878);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const o=new class{constructor(){this.direction="",this.isLive=!0,this.snake=new class{constructor(){this.element=document.getElementById("snake"),this.head=document.querySelector("#snake > div"),this.bodies=this.element.getElementsByTagName("div")}get X(){return this.head.offsetLeft}get Y(){return this.head.offsetTop}set X(e){if(this.X!==e){if(e<0||e>290)throw new Error("蛇撞墙啦!");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(e=e>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left=e+"px",this.checkHeadBodyOverlap()}}set Y(e){if(this.Y!==e){if(e<0||e>290)throw new Error("蛇撞墙啦!");this.bodies[1]&&this.bodies[1].offsetTop===e&&(e=e>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top=e+"px",this.checkHeadBodyOverlap()}}addBody(){this.element.insertAdjacentHTML("beforeend","<div></div>")}moveBody(){for(let e=this.bodies.length-1;e>0;e--){let t=this.bodies[e-1].offsetLeft,n=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"px",this.bodies[e].style.top=n+"px"}}checkHeadBodyOverlap(){for(let e=1;e<this.bodies.length;e++){let t=this.bodies[e];if(this.X===t.offsetLeft&&this.Y===t.offsetTop)throw new Error("撞到自己啦！")}}},this.food=new class{constructor(){this.element=document.getElementById("food")}get X(){return this.element.offsetLeft}get Y(){return this.element.offsetTop}change(){let e=10*Math.round(Math.round(29*Math.random())),t=10*Math.round(Math.round(29*Math.random()));this.element.style.left=t+"px",this.element.style.top=e+"px"}},this.scorePanel=new class{constructor(e=10,t=10){this.score=0,this.level=1,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level"),this.maxLevel=e,this.updateStep=t}addScore(){this.scoreEle.innerHTML=++this.score+"",this.score%this.updateStep==0&&this.updateLevel()}updateLevel(){this.level<this.maxLevel&&(this.levelEle.innerHTML=++this.level+"")}}(10,2)}init(){document.addEventListener("keydown",this.keyDownHandler.bind(this))}start(){this.run()}keyDownHandler(e){console.log(this.direction),e.key&&(this.direction=e.key)}run(){let e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":case"Up":t-=10;break;case"ArrowDown":case"Down":t+=10;break;case"ArrowLeft":case"Left":e-=10;break;case"ArrowRight":case"Right":e+=10}this.checkEat(e,t)&&(this.food.change(),this.scorePanel.addScore(),this.snake.addBody());try{this.snake.X=e,this.snake.Y=t}catch(e){alert(e.message),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),300-25*(this.scorePanel.level-1))}checkEat(e,t){return e===this.food.X&&t===this.food.Y}};o.init(),o.start()}()}();