!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=n(6),r=i(a),s=n(1),u=i(s);n(5),function(){function e(){i.createImages(),i.bindExample(a)}var t={appElement:document.getElementById("app"),images:[{image:"/images/shmeh.jpg",name:"art"},{image:"/images/bear-shark-unicornsurfing.jpg",name:"art"}]},n=new r["default"](t),i=new u["default"](n),a="_open";e()}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n(2);var r=function(){function e(t){i(this,e),this.state=t.state||{},this._images=this._getImages(this.state.images),this.section}return a(e,[{key:"render",value:function(e){void 0===this.section&&(this.section=document.createElement("section")),this.section.setAttribute("class","example"),this.section.innerHTML=e,this.state.appElement.appendChild(this.section)}},{key:"createImages",value:function(){var e='\n            <ul class="image-list">\n              '+this._images.map(function(e){return'\n                <li class="item" style="background-image:url('+e+')" id="'+e+'">\n                </li>'}).join("\n")+"\n            </ul>\n        ";this.render(e)}},{key:"bindExample",value:function(e){var t=this,n=document.querySelector(".image-list");n.addEventListener("click",function(n){n.target.classList.add(e),t.state.appElement.querySelector("h1").innerHTML=n.target.getAttribute("id")})}},{key:"_getImages",value:function(e){var t,n=[];for(t=0;t<e.length;t++)n.push(e[t].image);return n}}]),e}();t["default"]=r,e.exports=t["default"]},function(e,t){},,,function(e,t){},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(t){n(this,e),this.state=t||{}}return i(e,[{key:"set",value:function(e){this.state=e}},{key:"setProperty",value:function(e,t){this.state[e]=t}},{key:"get",value:function(){return this.state}}]),e}();t["default"]=a,e.exports=t["default"]}]);