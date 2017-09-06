// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('tictactoe.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__53071__delegate = function (x){
if(cljs.core.truth_(tictactoe.core.on_js_reload)){
return cljs.core.apply.call(null,tictactoe.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tictactoe.core/on-js-reload' is missing");
}
};
var G__53071 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__53072__i = 0, G__53072__a = new Array(arguments.length -  0);
while (G__53072__i < G__53072__a.length) {G__53072__a[G__53072__i] = arguments[G__53072__i + 0]; ++G__53072__i;}
  x = new cljs.core.IndexedSeq(G__53072__a,0);
} 
return G__53071__delegate.call(this,x);};
G__53071.cljs$lang$maxFixedArity = 0;
G__53071.cljs$lang$applyTo = (function (arglist__53073){
var x = cljs.core.seq(arglist__53073);
return G__53071__delegate(x);
});
G__53071.cljs$core$IFn$_invoke$arity$variadic = G__53071__delegate;
return G__53071;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3450/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1504724088822