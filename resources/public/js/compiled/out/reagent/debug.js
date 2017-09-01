// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__43223__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43224__i = 0, G__43224__a = new Array(arguments.length -  0);
while (G__43224__i < G__43224__a.length) {G__43224__a[G__43224__i] = arguments[G__43224__i + 0]; ++G__43224__i;}
  args = new cljs.core.IndexedSeq(G__43224__a,0);
} 
return G__43223__delegate.call(this,args);};
G__43223.cljs$lang$maxFixedArity = 0;
G__43223.cljs$lang$applyTo = (function (arglist__43225){
var args = cljs.core.seq(arglist__43225);
return G__43223__delegate(args);
});
G__43223.cljs$core$IFn$_invoke$arity$variadic = G__43223__delegate;
return G__43223;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__43226__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43227__i = 0, G__43227__a = new Array(arguments.length -  0);
while (G__43227__i < G__43227__a.length) {G__43227__a[G__43227__i] = arguments[G__43227__i + 0]; ++G__43227__i;}
  args = new cljs.core.IndexedSeq(G__43227__a,0);
} 
return G__43226__delegate.call(this,args);};
G__43226.cljs$lang$maxFixedArity = 0;
G__43226.cljs$lang$applyTo = (function (arglist__43228){
var args = cljs.core.seq(arglist__43228);
return G__43226__delegate(args);
});
G__43226.cljs$core$IFn$_invoke$arity$variadic = G__43226__delegate;
return G__43226;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1504122773282