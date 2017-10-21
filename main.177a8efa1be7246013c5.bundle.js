webpackJsonp([1],{0:function(n,l,e){n.exports=e("cDNt")},cDNt:function(n,l,e){"use strict";function t(n){return o._23(0,[(n()(),o._22(-1,null,["\n"])),(n()(),o._7(1,0,null,null,7,"div",[["class","header"]],null,null,null,null,null)),(n()(),o._22(-1,null,["\n  "])),(n()(),o._7(3,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o._22(-1,null,["\n    Ultimate Deadline\n  "])),(n()(),o._22(-1,null,["\n  "])),(n()(),o._7(6,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o._22(-1,null,["A visual representation of your remaining (life)time to get things done."])),(n()(),o._22(-1,null,["\n"])),(n()(),o._22(-1,null,["\n\n"])),(n()(),o._7(10,0,null,null,15,"div",[["class","userInput"]],null,null,null,null,null)),(n()(),o._22(-1,null,["\nI am\n"])),(n()(),o._7(12,0,null,null,6,"input",[["id","ageInput"],["max","80"],["min","1"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,e){var t=!0,u=n.component;if("input"===l){t=!1!==o._19(n,13)._handleInput(e.target.value)&&t}if("blur"===l){t=!1!==o._19(n,13).onTouched()&&t}if("compositionstart"===l){t=!1!==o._19(n,13)._compositionStart()&&t}if("compositionend"===l){t=!1!==o._19(n,13)._compositionEnd(e.target.value)&&t}if("change"===l){t=!1!==o._19(n,14).onChange(e.target.value)&&t}if("input"===l){t=!1!==o._19(n,14).onChange(e.target.value)&&t}if("blur"===l){t=!1!==o._19(n,14).onTouched()&&t}if("ngModelChange"===l){t=!1!==(u.age=e)&&t}return t},null,null)),o._5(13,16384,null,0,c.b,[o.G,o.k,[2,c.a]],null,null),o._5(14,16384,null,0,c.i,[o.G,o.k],null,null),o._20(1024,null,c.d,function(n,l){return[n,l]},[c.b,c.i]),o._5(16,671744,null,0,c.g,[[8,null],[8,null],[8,null],[2,c.d]],{model:[0,"model"]},{update:"ngModelChange"}),o._20(2048,null,c.e,null,[c.g]),o._5(18,16384,null,0,c.f,[c.e],null,null),(n()(),o._22(-1,null,["\nyears old.\n"])),(n()(),o._7(20,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._22(-1,null,["\n"])),(n()(),o._7(22,0,null,null,0,"input",[["id","btnDamage"],["type","button"],["value","Show me the damage"]],null,[[null,"click"]],function(n,l,e){var t=!0,u=n.component;if("click"===l){t=!1!==u.checkAllUsedWeeks()&&t}return t},null,null)),(n()(),o._22(-1,null,[" "])),(n()(),o._7(24,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._22(-1,null,["\n"])),(n()(),o._22(-1,null,["\n"])),(n()(),o._7(27,0,null,null,1,"ul",[["id","weeksList"]],null,null,null,null,null)),(n()(),o._22(-1,null,["\n"])),(n()(),o._22(-1,null,["\n"])),(n()(),o._7(30,0,null,null,6,"div",[["id","spacer"]],null,null,null,null,null)),(n()(),o._22(-1,null,["\n"])),(n()(),o._7(32,0,null,null,3,"div",[["class","explanationText"],["id","exp"]],null,null,null,null,null)),(n()(),o._22(-1,null,["\n  "])),(n()(),o._7(34,0,null,null,0,"p",[["id","expPara"]],null,null,null,null,null)),(n()(),o._22(-1,null,["\n"])),(n()(),o._22(-1,null,["\n\n"])),(n()(),o._22(-1,null,["\n\n"]))],function(n,l){n(l,16,0,l.component.age)},function(n,l){n(l,12,0,o._19(l,18).ngClassUntouched,o._19(l,18).ngClassTouched,o._19(l,18).ngClassPristine,o._19(l,18).ngClassDirty,o._19(l,18).ngClassValid,o._19(l,18).ngClassInvalid,o._19(l,18).ngClassPending)})}function u(n){return o._23(0,[(n()(),o._7(0,0,null,null,1,"app-root",[],null,null,null,t,d)),o._5(1,114688,null,0,r,[],null,null)],function(n,l){n(l,1,0)},null)}Object.defineProperty(l,"__esModule",{value:!0});var o=e("/oeL"),i={production:!0},a=function(){function n(){}return n}(),r=function(){function n(){this.age=30,this.weeks=4160}return n.prototype.ngOnInit=function(){this.generateWeeks(),this.cbs=document.getElementsByClassName("cbWeek")},n.prototype.generateWeeks=function(){for(var n=0;n<this.weeks;n++){var l=document.getElementById("weeksList"),e=document.createElement("input");e.type="checkbox",e.className="cbWeek",e.id="week"+n,l.appendChild(e)}},n.prototype.checkAllUsedWeeks=function(){this.setDefaults();var n=52*this.age;this.clearCheckedWeeks();for(var l=0;l<n;l++){this.cbs[l].checked=!0}this.generateExplanation()},n.prototype.setDefaults=function(){this.age<1&&(this.age=1),this.age>80&&(this.age=80)},n.prototype.clearCheckedWeeks=function(){for(var n=0;n<this.cbs.length;n++){this.cbs[n].checked=!1}},n.prototype.generateExplanation=function(){var n=52*this.age,l=n/this.weeks*100,e=n/3.3,t=(new Date).getFullYear()+(80-this.age),u=document.getElementById("exp"),o=document.getElementById("expPara");o.innerHTML="The average human lifespan lies somewhere around 80 years.<br><br>You used up <strong><u>"+n+"</u></strong> weeks already, or <strong><u>"+l.toFixed(1)+"%</u></strong> of your available time. Approximately <strong><u>"+e.toFixed(0)+"</u></strong> weeks (<strong><u>"+33..toFixed(1)+"%</u></strong>) of your life have been spent asleep.<br><br>If you think about doing something (anything, really), you should do it now because you'll most likely be dead sometime around the year <strong><u>"+t+"</u></strong>.<br><br>Have a nice day!",u.appendChild(o)},n}(),s=["@import url(https://fonts.googleapis.com/css?family=Montserrat);*[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif}.header[_ngcontent-%COMP%]{padding:1.5em;text-align:center;background:#000;color:#fff}.userInput[_ngcontent-%COMP%]{padding:.5em;text-align:center}#ageInput[_ngcontent-%COMP%]{width:50px;font-size:18px}#btnDamage[_ngcontent-%COMP%]{margin-top:.5em;padding:.5em}ul[_ngcontent-%COMP%]{-webkit-padding-end:5px;-webkit-padding-start:10px}#spacer[_ngcontent-%COMP%]{width:100%;text-align:center}.explanationText[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px;padding-bottom:5em;text-align:left;display:inline-block;font-size:18px}"],c=e("bm2B"),_=[s],d=o._4({encapsulation:0,styles:_,data:{}}),g=o._2("app-root",r,u,{},{},[]),p=e("qbdv"),h=e("fc+i"),f=o._3(a,[r],function(n){return o._17([o._18(512,o.i,o._0,[[8,[g]],[3,o.i],o.x]),o._18(5120,o.v,o._16,[[3,o.v]]),o._18(4608,p.d,p.c,[o.v]),o._18(4608,o.h,o.h,[]),o._18(5120,o.a,o._8,[]),o._18(5120,o.t,o._13,[]),o._18(5120,o.u,o._14,[]),o._18(4608,h.b,h.s,[p.b]),o._18(6144,o.J,null,[h.b]),o._18(4608,h.e,h.f,[]),o._18(5120,h.c,function(n,l,e,t){return[new h.k(n),new h.o(l),new h.n(e,t)]},[p.b,p.b,p.b,h.e]),o._18(4608,h.d,h.d,[h.c,o.z]),o._18(135680,h.m,h.m,[p.b]),o._18(4608,h.l,h.l,[h.d,h.m]),o._18(6144,o.H,null,[h.l]),o._18(6144,h.p,null,[h.m]),o._18(4608,o.O,o.O,[o.z]),o._18(4608,h.g,h.g,[p.b]),o._18(4608,h.i,h.i,[p.b]),o._18(4608,c.j,c.j,[]),o._18(512,p.a,p.a,[]),o._18(1024,o.l,h.q,[]),o._18(1024,o.b,function(n,l){return[h.r(n,l)]},[[2,h.h],[2,o.y]]),o._18(512,o.c,o.c,[[2,o.b]]),o._18(131584,o._6,o._6,[o.z,o._1,o.r,o.l,o.i,o.c]),o._18(2048,o.e,null,[o._6]),o._18(512,o.d,o.d,[o.e]),o._18(512,h.a,h.a,[[3,h.a]]),o._18(512,c.h,c.h,[]),o._18(512,c.c,c.c,[]),o._18(512,a,a,[])])});i.production&&Object(o.U)(),Object(h.j)().bootstrapModuleFactory(f).catch(function(n){return console.log(n)})},gFIY:function(n,l){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="gFIY"}},[0]);