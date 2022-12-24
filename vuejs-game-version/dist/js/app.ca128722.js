(function(){"use strict";var e={8182:function(e,t,s){var i=s(144),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],l=s(1001),r={},o=(0,l.Z)(r,n,a,!1,null,null,null),u=o.exports,c=s(8345),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"GOL"},[t("navbar-app"),t("section",{staticClass:"hero primary-background is-fullheight"},[t("div",{staticClass:"main-content-app"},[t("div",{staticClass:"container is-paddingless"},[t("div",{staticClass:"columns box is-fullwidth is-gapless"},[t("div",{staticClass:"column is-12"},[t("transition",{attrs:{mode:"out-in",name:"fade"}},[t("keep-alive",["gamePage"==e.mainComponent?t("app-grid",{attrs:{message:e.message,"current-speed":e.speed}}):e._e()],1)],1)],1)])])]),t("footer",{staticClass:"footer"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-half is-offset-one-quarter"},[t("app-controller",{attrs:{"is-running":e.isRunning,"main-component":e.mainComponent},on:{send:function(t){return e.delegate(t)}}})],1)])])])])],1)},h=[],f=s(5057),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"box"},[t("div",{staticClass:"field has-addons has-addons-centered is-marginless"},[t("p",{staticClass:"control"},[t("button",{staticClass:"button",class:e.isRunning?"green":"red",attrs:{disabled:"gamePage"!==e.mainComponent,title:"play"},on:{click:function(t){return e.send("play")}}},[t(f.Z,{directives:[{name:"show",rawName:"v-show",value:!e.isRunning,expression:"!isRunning"}]},[e._v("mdi-play")]),t(f.Z,{directives:[{name:"show",rawName:"v-show",value:e.isRunning,expression:"isRunning"}]},[e._v("mdi-pause")])],1)]),t("p",{staticClass:"control"},[t("button",{staticClass:"button",attrs:{disabled:"gamePage"!==e.mainComponent,title:"clear grid"},on:{click:function(t){return e.send("redoSession")}}},[t(f.Z,[e._v(" mdi-restart")])],1)])])])},v=[],m={props:{isRunning:{default:!1,type:Boolean},mainComponent:{default:"gamePage",type:String}},methods:{send:function(e){this.$emit("send",e)}}},g=m,C=(0,l.Z)(g,p,v,!1,null,"d0737c24",null),b=C.exports,w=function(){var e=this,t=e._self._c;return t("div",[t("app-stats",{attrs:{"current-tick":e.currentTick,"cell-count":e.cellCount,"cells-alive":e.cellsAlive,"cells-created":e.cellsCreated,"current-speed":e.currentSpeed}}),t("div",{staticClass:"game-grid columns",on:{mousedown:function(t){e.isMouseDown=!0},mouseup:function(t){e.isMouseDown=!1},mouseleave:function(t){e.isMouseDown=!1}}},e._l(e.gridList,(function(s,i){return t("div",{key:i,staticClass:"game-column"},e._l(s,(function(s,n){return t("app-cell",{key:n,attrs:{"status-obj":s,"x-pos":i,"y-pos":n,"is-mouse-down":e.isMouseDown},on:{wasUpdated:e.updateCellCount}})})),1)})),0)],1)},_=[],y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"cell",class:e.isAlive.isAlive?"alive":"dead",on:{mousedown:function(t){return e.reborn(!0)},mouseover:function(t){return e.reborn(e.isMouseDown)}}})},k=[],x={props:{statusObj:{default:function(){return{isAlive:!1}},type:Object},xPos:{default:-1,type:Number},yPos:{default:-1,type:Number},isMouseDown:{default:!1,type:Boolean}},data(){return{isAlive:this.statusObj}},methods:{reborn:function(e){e&&(this.isAlive.isAlive=!this.isAlive.isAlive,this.$emit("wasUpdated",this.isAlive.isAlive))}}},A=x,Z=(0,l.Z)(A,y,k,!1,null,null,null),S=Z.exports,M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"box"},[t("div",{staticClass:"columns is-fullwidth is-gapless"},[t("div",{staticClass:"column is-size-7-mobile is-half-mobile"},[t("strong",{staticClass:"has-text-white"},[e._v("Contagem Atual: "+e._s(e.currentTick))])]),t("div",{staticClass:"column is-size-7-mobile is-half-mobile"},[t("strong",{staticClass:"has-text-white"},[e._v("Contagem de células: "+e._s(e.cellCount))])]),t("div",{staticClass:"column is-size-7-mobile is-half-mobile"},[t("strong",{staticClass:"has-text-white"},[e._v("Células Vivas: "+e._s(e.cellsAlive))])]),t("div",{staticClass:"column is-size-7-mobile is-half-mobile"},[t("strong",{staticClass:"has-text-white"},[e._v("Células Criadas: "+e._s(e.cellsCreated))])])])])},P=[],O={props:{currentTick:{default:0,type:Number},cellCount:{default:0,type:Number},cellsAlive:{default:0,type:Number},cellsCreated:{default:0,type:Number},currentSpeed:{default:0,type:Number}}},j=O,T=(0,l.Z)(j,M,P,!1,null,"60824ae0",null),N=T.exports,L={components:{"app-cell":S,"app-stats":N},props:{message:{default:"",type:String},importToken:{default:"",type:String},currentSpeed:{default:0,type:Number}},data(){return{width:46,height:20,gridList:[],currentTick:0,cellCount:0,cellsAlive:0,cellsCreated:0,isMouseDown:!1}},computed:{},watch:{message:function(e){"nextStep"===e?(this.update(),this.currentTick++):"redoSession"===e?this.reset():"randomSeed"===e&&this.randomSeed()}},created(){this.cellCalc()},methods:{cellCalc:function(){for(let e=0;e<this.width;e++){this.gridList[e]=[];for(let t=0;t<this.height;t++)this.gridList[e][t]={isAlive:!1}}this.cellCount=this.width*this.height},setCell:function(e,t,s){this.gridList[e][t].isAlive!=s&&(this.gridList[e][t].isAlive=s,this.updateCellCount(s))},update:function(){let e=[];for(let t=0;t<this.width;t++){e[t]=[];for(let s=0;s<this.height;s++){let i=this.gridList[t][s].isAlive,n=this.getNeighbours(t,s),a=!1;i&&n<2&&(a=!1),(i&&2==n||3==n)&&(a=!0),i&&n>3&&(a=!1),i||3!=n||(a=!0),e[t][s]=a}}for(let t=0;t<this.width;t++)for(let s=0;s<this.height;s++)this.setCell(t,s,e[t][s])},getNeighbours:function(e,t){let s=0;if(e<=this.width&&t<=this.height)for(let i=-1;i<2;i++)for(let n=-1;n<2;n++){let a=e+i,l=t+n;(0!=i||0!=n)&&a>=0&&a<this.width&&l>=0&&l<this.height&&1==this.gridList[e+i][t+n].isAlive&&s++}return s},reset:function(){this.currentTick=0,this.cellsAlive=0,this.cellsCreated=0,this.gridList.forEach((e=>{e.forEach((e=>{e.isAlive=!1}))}))},randomSeed:function(){for(let e=0;e<this.width;e++)for(let t=0;t<this.height;t++){let s=Math.random();s<.2?this.setCell(e,t,!0):this.setCell(e,t,!1)}},updateCellCount:function(e){e?(this.cellsAlive++,this.cellsCreated++):this.cellsAlive--}}},R=L,D=(0,l.Z)(R,w,_,!1,null,null,null),I=D.exports,B=s(1228),z=s(555),E=s(3347),V=s(2370),$=function(){var e=this,t=e._self._c;return t("div",[t(B.Z,{attrs:{color:"deep-purple accent-4",dense:"",dark:""}},[t(V.qW,[e._v("The Game of Life - By Lucas Mariano")]),t(E.Z),t(z.Z,{attrs:{href:"https://github.com/lukemariano",target:"_blank"}},[t("svg",{staticClass:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"}},[t("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}})])]),t(z.Z,{attrs:{href:"https://www.linkedin.com/in/lucas-mariano-da-silva-luke/",target:"_blank"}},[t(f.Z,[e._v(" mdi-linkedin")])],1)],1)],1)},q=[],G={name:"NavBar"},H=G,U=(0,l.Z)(H,$,q,!1,null,null,null),F=U.exports,W={name:"HomeView",components:{"app-grid":I,"app-controller":b,"navbar-app":F},data(){return{message:"",isRunning:!1,speed:100,intervalID:0,mainComponent:"gamePage",selectedScenario:"scenario"}},created(){},methods:{delegate:function(e){"play"===e?(this.isRunning=!this.isRunning,this.restartInterval()):this.updateMessage(e)},updateMessage:function(e){this.message=e,i.ZP.nextTick(this.resetMessage)},resetMessage:function(){this.message=""},restartInterval:function(){clearInterval(this.intervalID),this.isRunning&&(this.intervalID=setInterval(this.updateMessage,5e4/this.speed,"nextStep"))}}},J=W,K=(0,l.Z)(J,d,h,!1,null,null,null),Q=K.exports;i.ZP.use(c.ZP);const X=[{path:"/",name:"HomeView",component:Q}],Y=new c.ZP({mode:"history",base:"/coding-game-of-life/",routes:X});var ee=Y,te=s(3806);i.ZP.use(te.Z);var se=new te.Z({});i.ZP.config.productionTip=!1,new i.ZP({router:ee,vuetify:se,render:e=>e(u)}).$mount("#app")}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,i,n,a){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],a=e[c][2];for(var r=!0,o=0;o<i.length;o++)(!1&a||l>=a)&&Object.keys(s.O).every((function(e){return s.O[e](i[o])}))?i.splice(o--,1):(r=!1,a<l&&(l=a));if(r){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,n,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,a,l=i[0],r=i[1],o=i[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(o)var c=o(s)}for(t&&t(i);u<l.length;u++)a=l[u],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(c)},i=self["webpackChunkvuejs_game_version"]=self["webpackChunkvuejs_game_version"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(8182)}));i=s.O(i)})();
//# sourceMappingURL=app.ca128722.js.map