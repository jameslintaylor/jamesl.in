// Compiled by ClojureScript 1.9.229 {}
goog.provide('tictactoe.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('tictactoe.components');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tictactoe.core.app_state !== 'undefined'){
} else {
tictactoe.core.app_state = null;
}
tictactoe.core.routes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"work","work",385770312),"/work",new cljs.core.Keyword(null,"rambling","rambling",1294879069),"/rambling",new cljs.core.Keyword(null,"about","about",1423892543),"/about",new cljs.core.Keyword(null,"contact","contact",609093372),"/contact"], null);
tictactoe.core.split_middle = (function tictactoe$core$split_middle(seq){
var n = (cljs.core.count.call(null,seq) / (2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,n,seq),cljs.core.drop.call(null,n,seq)], null);
});
tictactoe.core.app = (function tictactoe$core$app(){
var vec__53066 = tictactoe.core.split_middle.call(null,tictactoe.core.routes);
var lhs_routes = cljs.core.nth.call(null,vec__53066,(0),null);
var rhs_routes = cljs.core.nth.call(null,vec__53066,(1),null);
var route_component = ((function (vec__53066,lhs_routes,rhs_routes){
return (function (route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.route","div.route",-1726914262),clojure.string.join.call(null,cljs.core.rest.call(null,[cljs.core.str(cljs.core.first.call(null,route))].join('')))], null);
});})(vec__53066,lhs_routes,rhs_routes))
;
return ((function (vec__53066,lhs_routes,rhs_routes,route_component){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#outer-container","div#outer-container",-258053118),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#inner-container","div#inner-container",1277064403),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"div#lhs.route-column","div#lhs.route-column",-80219053)),cljs.core.map.call(null,route_component,lhs_routes))))),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"div#rhs.route-column","div#rhs.route-column",-1604534229)),cljs.core.map.call(null,route_component,rhs_routes)))))], null)], null);
});
;})(vec__53066,lhs_routes,rhs_routes,route_component))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.app], null),document.getElementById("app"));
tictactoe.core.on_js_reload = (function tictactoe$core$on_js_reload(){
return cljs.core.println.call(null,"yea");
});

//# sourceMappingURL=core.js.map?rel=1504724088811