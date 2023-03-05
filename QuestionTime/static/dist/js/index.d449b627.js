(function(){"use strict";var n={145:function(n,t,e){var o=e(9963),a=e(6252);const s={id:"nav"};function r(n,t,e,o,r,i){const u=(0,a.up)("NavbarComponent"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",s,[(0,a.Wm)(u)]),(0,a.Wm)(c)],64)}const i={class:"navbar navbar-expand-lg navbar-light bg-light my-navbar"},u={class:"container"},c=(0,a.uE)('<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ms-auto"><li class="nav-item"><a class="btn btn-outline-secondary" href="/accounts/logout/">Logout</a></li></ul></div>',2);function l(n,t,e,o,s,r){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("div",u,[(0,a.Wm)(l,{class:"navbar-brand",to:{name:"home-two"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" QuestionTime ")])),_:1}),c])])}var d={name:"NavbarComponent"},v=e(3744);const p=(0,v.Z)(d,[["render",l]]);var f=p,b={name:"App",components:{NavbarComponent:f}};const g=(0,v.Z)(b,[["render",r]]);var h=g,m=e(2201),w=e(3577);const y={class:"home mt-3"},x={class:"container"},k={class:"card shadow p-2 mb-4 bg-body rounded"},_={class:"card-body"},C={class:"mb-0"},O={class:"question-author"},Q={class:"mb-0"},j={class:"my-4"};function q(n,t,e,s,r,i){return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.questions,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n.uuid},[(0,a._)("div",k,[(0,a._)("div",_,[(0,a._)("p",C,[(0,a.Uk)(" Posted by: "),(0,a._)("span",O,(0,w.zw)(n.author),1)]),(0,a._)("h2",null,(0,w.zw)(n.content),1),(0,a._)("p",Q," Answers: "+(0,w.zw)(n.answers_count),1)])])])))),128)),(0,a._)("div",j,[(0,a.wy)((0,a._)("p",null,"Loading....",512),[[o.F8,r.loadingQuestion]]),(0,a.wy)((0,a._)("button",{onClick:t[0]||(t[0]=(...n)=>i.getQuestions&&i.getQuestions(...n)),class:"btn btn-sm btn-outline-success"}," Load More ",512),[[o.F8,r.next]])])])])}e(7658);const N=e(7218);N.default.xsrfCookieName="csrftoken",N.default.xsrfCookieName="X-CSRFTOKEN";var T={name:"HomeView",data(){return{questions:[],next:null,loadingQuestion:!1}},methods:{async getQuestions(){let n="/api/v1/questions/";this.next&&(n=this.next),this.loadingQuestion=!0;try{const t=await N.get(n);this.questions.push(...t.data.results),this.loadingQuestion=!1,t.data.next?this.next=t.data.next:this.next=null,console.log(this.questions)}catch(t){console.log(t.response),alert(t.response.statusText)}}},created(){console.log("Created Lifecycle Hook"),this.getQuestions()}};const D=(0,v.Z)(T,[["render",q]]);var F=D;const H=[{path:"/",name:"home",component:F},{path:"/new-one",name:"home-two",component:F}],L=(0,m.p7)({history:(0,m.PO)("/static/dist/"),routes:H});var P=L;(0,o.ri)(h).use(P).mount("#app")}},t={};function e(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return n[o](s,s.exports,e),s.exports}e.m=n,function(){var n=[];e.O=function(t,o,a,s){if(!o){var r=1/0;for(l=0;l<n.length;l++){o=n[l][0],a=n[l][1],s=n[l][2];for(var i=!0,u=0;u<o.length;u++)(!1&s||r>=s)&&Object.keys(e.O).every((function(n){return e.O[n](o[u])}))?o.splice(u--,1):(i=!1,s<r&&(r=s));if(i){n.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=n.length;l>0&&n[l-1][2]>s;l--)n[l]=n[l-1];n[l]=[o,a,s]}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={826:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var a,s,r=o[0],i=o[1],u=o[2],c=0;if(r.some((function(t){return 0!==n[t]}))){for(a in i)e.o(i,a)&&(e.m[a]=i[a]);if(u)var l=u(e)}for(t&&t(o);c<r.length;c++)s=r[c],e.o(n,s)&&n[s]&&n[s][0](),n[s]=0;return e.O(l)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(145)}));o=e.O(o)})();
//# sourceMappingURL=index.d449b627.js.map