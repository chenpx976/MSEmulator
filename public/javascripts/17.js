(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{340:function(t,i,r){"use strict";r.r(i),r.d(i,"ChatBalloon",function(){return e});r(332);var h=r(348);class e{constructor(){this._raw=null,this.style=null}async load(t){if(null==t)throw new TypeError;if(e.cache[t]){let i=e.cache[t];Object.assign(this,i)}else{const i=[this._base_path,t].join("/");this.style=t;let r=$get.data(i);e.cache[t]=this,this.$promise=r,Object.defineProperty(this,"_raw",{value:await r}),delete this.$promise;const s=Number("clr"in this._raw?this._raw.clr:defCol),a=(((4278190080&s)>>>24|(16777215&s)<<8)>>>0).toString(16).padStart(8,"0");this.color=-1!=this._raw.clr&&this._raw.clr?"#"+a:"white",this.nw=new h.a(this._raw.nw),this.n=new h.a(this._raw.n),this.ne=new h.a(this._raw.ne),this.w=new h.a(this._raw.w),this.c=new h.a(this._raw.c),this.e=new h.a(this._raw.e),this.sw=new h.a(this._raw.sw),this.s=new h.a(this._raw.s),this.se=new h.a(this._raw.se),this.arrow=new h.a(this._raw.arrow)}}draw(t,i,r,h){let e=i.match(/(.{1,12})/g);if(!e.length)return;const s=t.ctx,a=this.c.height;s.fillStyle=this.color,s.font="12px 微軟正黑體",s.textAlign="center",s.textBaseline="hanging";const n=3*this.n.width;let w=Math.max.apply(null,e.map(t=>s.measureText(t).width+0+0));w<n&&(w=n);const o=Math.trunc(w/2/this.n.width)*this.n.width,c=2*o,d=e.length*a+0+0;r-=o,h=h-d-this.arrow.height,this.nw.draw2(r,h),this.n._drawPattern(r,h,c,this.n.height),this.ne.draw2(r+c,h);{const t=this.w.width-this.w.x;this.w._drawPattern(r+t,h,this.w.width,d),this.c._drawPattern(r+t,h,c,d),this.e._drawPattern(r+t+c,h,this.e.width,d)}{const t=1&this.arrow.width,i=Math.trunc(this.arrow.width/2),e=o-i;this.sw.draw2(r,h+d),this.s._drawPattern(r,h+d,e,this.s.height),this.s._drawPattern(r+o+i+t,h+d,e-t,this.s.height),this.se.draw2(r+c,h+d),this.arrow.draw2(r-i+o,h+d)}for(let t=0,i=h;t<e.length;++t,i+=a){let h=e[t];s.fillText(h,r+o+0,i+0)}}get _base_path(){return"/UI/ChatBalloon"}}e.cache=window.$images_ChatBalloon||{},window.$images_ChatBalloon=e.cache},348:function(t,i,r){"use strict";r.d(i,"b",function(){return s}),r.d(i,"a",function(){return a});var h=r(333),e=(r(332),r(335));class s extends e.Graph{constructor(t,i){t?(super(i,{width:t.__w,height:t.__h}),this._raw=t,i?this._url=i:!1!==s.isTexture(t)&&(this._url=t[""])):super()}static isTexture(t){if(t)if(t.hasOwnProperty("")){if("string"==typeof t[""])return!0}else if(!t.__isEmpty)throw console.group("no texture"),console.warn(t),console.groupEnd(),new Error("no texture");return!1}static isTextureHasData(t){return t&&"string"==typeof t[""]&&t[""].startsWith("data:image/")}set z(t){this._order=t}get z(){return this._order}_get(t,i,r){if(this._raw){if(i in this._raw)return r(this._raw[i])}else;return t}draw(){this._engine.drawGraph(this)}draw2(t,i){this._engine.drawGraph2(this,t-this.x,i-this.y)}draw2i(t,i){this._engine.drawGraph2(this,Math.trunc(t-this.x+.5),Math.trunc(i-this.y+.5))}}class a extends s{constructor(t,i){super(t,i);var r=this._get(new h.Vec2(0,0),"origin",h.Vec2.get);this.x=r.x,this.y=r.y,this.z=this._get(0,"z",Number),this.delay=this._get(100,"delay",Number)}drawPattern(t,i,r,h){if(!this.isLoaded())return;const e=this._engine.ctx;e.save();try{e.rect(t,i,r,h),e.clip();let s=t,a=t+r,n=i+h;for(let t=i;t<n;t+=this.height)for(let i=s;i<a;i+=this.width)this.draw2(i,t)}catch(t){console.error(t)}e.restore()}drawHorizontalPattern(t,i,r){if(!this.isLoaded())return;const h=this._engine.ctx;h.save();try{const h=t+r;for(let r=t;r<h;r+=this.width)this.draw2(r,i)}catch(t){console.error(t)}h.restore()}drawVerticalPattern(t,i,r){if(!this.isLoaded())return;const h=this._engine.ctx;h.save();try{const h=i+r;for(let r=i;r<h;r+=this.height)this.draw2(t,r)}catch(t){console.error(t)}h.restore()}_drawPattern(t,i,r,h){if(!this.isLoaded())return;const e=Math.trunc(r/this.width)*this.width,s=Math.trunc(h/this.height)*this.height,a=t,n=i,w=t+e,o=i+h;let c,d;if(h>=this.height){for(c=n;c<o;c+=this.height)if(r>=this.width){for(d=a;d<w;d+=this.width)this.draw2(d,c);let t=r-e;t>0&&this._engine._drawImage(this,0,0,t,this.height,d-this.x,c-this.y,t,this.height)}else this._engine._drawImage(this,0,0,r,this.height,a-this.x,c-this.y,r,this.height);let t=h-s;t>0&&(console.error(new Error("未完成")),this._engine._drawImage(this,0,0,this.width,t,a-this.x,c-this.y,this.width,t))}else console.error(new Error("未完成")),this._engine._drawImage(this,0,0,this.width,h,a-this.x,n-this.y,this.width,h)}_drawHorizontalPattern(t,i,r){if(!this.isLoaded())return;this._engine.ctx;const h=t+r;for(let r=t;r<h;r+=this.width)this.draw2(r,i)}_drawVerticalPattern(t,i,r){if(!this.isLoaded())return;this._engine.ctx;const h=i+r;for(let r=i;r<h;r+=this.height)this.draw2(t,r)}drawPattern4i(t,i,r,h){this.drawPattern(Math.trunc(t+.5),Math.trunc(i+.5),Math.trunc(r+.5),Math.trunc(h+.5))}drawHorizontalPattern3i(t,i,r){this.drawHorizontalPattern(Math.trunc(t+.5),Math.trunc(i+.5),Math.trunc(r+.5))}drawVerticalPattern3i(t,i,r){this.drawVerticalPattern(Math.trunc(t+.5),Math.trunc(i+.5),Math.trunc(r+.5))}_drawPattern4i(t,i,r,h){this._drawPattern(Math.trunc(t+.5),Math.trunc(i+.5),Math.trunc(r+.5),Math.trunc(h+.5))}_drawHorizontalPattern3i(t,i,r){this._drawHorizontalPattern(Math.trunc(t+.5),Math.trunc(i+.5),Math.trunc(r+.5))}_drawVerticalPattern3i(t,i,r){this._drawVerticalPattern(Math.trunc(t+.5),Math.trunc(i+.5),Math.trunc(r+.5))}}}}]);
//# sourceMappingURL=17.js.map