import{O as J,g as K}from"./InitMap-547857b1.js";import{S as Q,b as N,a as Y,V as k,F as X}from"./Vector-b5c0ef0a.js";import{L as W}from"./LineString-ec620191.js";import{g as tt}from"./render-ac84978c.js";import{_ as et,M as rt,p as st,U as at}from"./framework-e921cdd2.js";function it(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var D={},ot={get exports(){return D},set exports(a){D=a}},O={},nt={get exports(){return O},set exports(a){O=a}};(function(a){var n=Math.PI/180,u=180/Math.PI,o=function(e,r){this.lon=e,this.lat=r,this.x=n*e,this.y=n*r},g=function(e){for(var r=6,t=Math.pow(10,r),i=0;i<e.length;i++)e[i]=Math.round((e[i]+Number.EPSILON)*t)/t;return e};o.prototype.view=function(){return String(this.lon).slice(0,4)+","+String(this.lat).slice(0,4)},o.prototype.antipode=function(){var e=-1*this.lat,r=this.lon<0?180+this.lon:(180-this.lon)*-1;return new o(r,e)};var f=function(){this.coords=[],this.length=0};f.prototype.move_to=function(e){this.length++,this.coords.push(e)};var h=function(e){this.properties=e||{},this.geometries=[]};h.prototype.json=function(){if(this.geometries.length<=0)return{geometry:{type:"LineString",coordinates:null},type:"Feature",properties:this.properties};if(this.geometries.length==1)return{geometry:{type:"LineString",coordinates:this.geometries[0].coords},type:"Feature",properties:this.properties};for(var e=[],r=0;r<this.geometries.length;r++)e.push(this.geometries[r].coords);return{geometry:{type:"MultiLineString",coordinates:e},type:"Feature",properties:this.properties}},h.prototype.wkt=function(){for(var e="",r="LINESTRING(",t=function(v){r+=v[0]+" "+v[1]+","},i=0;i<this.geometries.length;i++){if(this.geometries[i].coords.length===0)return"LINESTRING(empty)";var c=this.geometries[i].coords;c.forEach(t),e+=r.substring(0,r.length-1)+")"}return e};var y=function(e,r,t){if(!e||e.x===void 0||e.y===void 0)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");if(!r||r.x===void 0||r.y===void 0)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");this.start=new o(e.x,e.y),this.end=new o(r.x,r.y),this.properties=t||{};var i=this.start.x-this.end.x,c=this.start.y-this.end.y,v=Math.pow(Math.sin(c/2),2)+Math.cos(this.start.y)*Math.cos(this.end.y)*Math.pow(Math.sin(i/2),2);if(this.g=2*Math.asin(Math.sqrt(v)),this.g==Math.PI)throw new Error("it appears "+this.start.view()+" and "+this.end.view()+" are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");if(isNaN(this.g))throw new Error("could not calculate great circle between "+e+" and "+r)};y.prototype.interpolate=function(e){var r=Math.sin((1-e)*this.g)/Math.sin(this.g),t=Math.sin(e*this.g)/Math.sin(this.g),i=r*Math.cos(this.start.y)*Math.cos(this.start.x)+t*Math.cos(this.end.y)*Math.cos(this.end.x),c=r*Math.cos(this.start.y)*Math.sin(this.start.x)+t*Math.cos(this.end.y)*Math.sin(this.end.x),v=r*Math.sin(this.start.y)+t*Math.sin(this.end.y),E=u*Math.atan2(v,Math.sqrt(Math.pow(i,2)+Math.pow(c,2))),w=u*Math.atan2(c,i);return[w,E]},y.prototype.Arc=function(e,r){var t=[];if(!e||e<=2)t.push([this.start.lon,this.start.lat]),t.push([this.end.lon,this.end.lat]);else for(var i=1/(e-1),c=0;c<e;++c){var v=i*c,E=this.interpolate(v);t.push(E)}for(var w=!1,F=0,x=r&&r.offset?r.offset:10,m=180-x,M=-180+x,B=360-x,$=1;$<t.length;++$){var C=t[$-1][0],G=t[$][0],I=Math.abs(G-C);I>B&&(G>m&&C<M||C>m&&G<M)?w=!0:I>F&&(F=I)}var _=[];if(w&&F<x){var l=[];_.push(l);for(var s=0;s<t.length;++s){var R=parseFloat(t[s][0]);if(s>0&&Math.abs(R-t[s-1][0])>B){var p=parseFloat(t[s-1][0]),P=parseFloat(t[s-1][1]),d=parseFloat(t[s][0]),b=parseFloat(t[s][1]);if(p>-180&&p<M&&d==180&&s+1<t.length&&t[s-1][0]>-180&&t[s-1][0]<M){l.push([-180,t[s][1]]),s++,l.push([t[s][0],t[s][1]]);continue}else if(p>m&&p<180&&d==-180&&s+1<t.length&&t[s-1][0]>m&&t[s-1][0]<180){l.push([180,t[s][1]]),s++,l.push([t[s][0],t[s][1]]);continue}if(p<M&&d>m){var Z=p;p=d,d=Z;var H=P;P=b,b=H}if(p>m&&d<M&&(d+=360),p<=180&&d>=180&&p<d){var A=(180-p)/(d-p),T=A*b+(1-A)*P;l.push([t[s-1][0]>m?180:-180,T]),l=[],l.push([t[s-1][0]>m?-180:180,T]),_.push(l)}else l=[],_.push(l);l.push([R,t[s][1]])}else l.push([t[s][0],t[s][1]])}}else{var j=[];_.push(j);for(var S=0;S<t.length;++S)j.push([t[S][0],t[S][1]])}for(var q=new h(this.properties),L=0;L<_.length;++L){var z=new f;q.geometries.push(z);for(var U=_[L],V=0;V<U.length;++V)z.move_to(g(U[V]))}return q},a.exports.Coord=o,a.exports.Arc=h,a.exports.GreatCircle=y})(nt);(function(a){a.exports=O})(ot);const ht=it(D),lt={components:{OlMap:J},data(){return{_map:null,_tileLayer:null,_pointsPerMs:.2,_flightsSource:null,_flightsStyle:new Q({stroke:new N({color:"#ffa86f",width:4})})}},mounted(){this.$data._map=this.$refs.map.getMap(),this.$data._tileLayer=this.$data._map.getLayers().array_[0],this.$data._map.getView().setMinZoom(0),this.$data._map.getView().setZoom(0),this.addFlights()},methods:{addFlights(){this.$data._flightsSource=this.flightsSource();const a=new Y({source:this.$data._flightsSource,style:n=>n.get("finished")?this.$data._flightsStyle:null});this.$data._map.addLayer(a)},flightsSource(){return new k({loader:()=>{fetch("json/flights.json").then(function(n){return n.json()}).then(n=>{const u=n.flights;for(let o=0;o<u.length;o+=1){const g=u[o],f=g[0],h=g[1],e=new ht.GreatCircle({x:f[1],y:f[0]},{x:h[1],y:h[0]}).Arc(100,{offset:10}),r=[];e.geometries.forEach(function(t){const i=new W(t.coords);i.transform("EPSG:4326","EPSG:3857"),r.push(new X({geometry:i,finished:!1}))}),this.addLater(r,o*50)}this.$data._tileLayer.on("postrender",this.animateFlights)})}})},animateFlights(a){const n=tt(a),u=a.frameState;n.setStyle(this.$data._flightsStyle);const o=this.$data._flightsSource.getFeatures();for(let g=0;g<o.length;g+=1){const f=o[g];if(!f.get("finished")){const h=f.getGeometry().getCoordinates(),y=u.time-f.get("start");if(y>=0){const e=y*this.$data._pointsPerMs;e>=h.length&&f.set("finished",!0);const r=Math.min(e,h.length),t=new W(h.slice(0,r)),i=K(this.$data._map.getView().getProjection().getExtent()),c=Math.floor(this.$data._map.getView().getCenter()[0]/i);t.translate(c*i,0),n.drawGeometry(t),t.translate(i,0),n.drawGeometry(t)}}}this.$data._map.render()},addLater(a,n){window.setTimeout(()=>{let u=Date.now();a.forEach(o=>{o.set("start",u),this.$data._flightsSource.addFeature(o);const g=o.getGeometry().getCoordinates()/this.$data._pointsPerMs;u+=g})},n)}}};function ct(a,n,u,o,g,f){const h=rt("ol-map");return st(),at(h,{ref:"map"},null,512)}const vt=et(lt,[["render",ct],["__file","animation_line.vue"]]);export{vt as default};