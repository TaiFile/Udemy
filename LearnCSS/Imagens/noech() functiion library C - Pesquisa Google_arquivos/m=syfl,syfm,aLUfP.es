this._s=this._s||{};(function(_){var window=this;
try{
_.Btb=function(a){this.xm=a};
}catch(e){_._DumpException(e)}
try{
var Ctb=function(a){_.vn.call(this,a.Ka);var b=this;this.window=a.service.window.get();this.wa=this.xm();this.oa=window.orientation;this.ka=function(){var c=b.xm(),d=b.HPb()&&90===Math.abs(window.orientation)&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=_.$a(b.Ie);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new _.Btb(c);try{e(f)}catch(g){_.ca(g)}}}};this.Ie=new Set;this.window.addEventListener("resize",this.ka);this.HPb()&&this.window.addEventListener("orientationchange",
this.ka)};_.F(Ctb,_.vn);Ctb.nb=_.vn.nb;Ctb.Ga=function(){return{service:{window:_.wn}}};Ctb.prototype.addListener=function(a){this.Ie.add(a)};Ctb.prototype.removeListener=function(a){this.Ie.delete(a)};
Ctb.prototype.xm=function(){if(Dtb()){var a=_.pl(this.window);a=new _.Tk(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.qc()||(_.ja()?Dtb():this.window.visualViewport)?_.pl(this.window):new _.Tk(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};Ctb.prototype.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};var Dtb=function(){return _.ja()&&_.Le.nJ()&&!navigator.userAgent.includes("GSA")};
Ctb.prototype.qc=function(){return _.Etb};Ctb.prototype.HPb=function(){return"orientation"in window};_.Etb=!1;_.xn(_.UTa,Ctb);
_.Etb=!0;
}catch(e){_._DumpException(e)}
try{
_.z("aLUfP");

_.A();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
