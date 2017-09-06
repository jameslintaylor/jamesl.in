// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50537 = arguments.length;
var i__43069__auto___50538 = (0);
while(true){
if((i__43069__auto___50538 < len__43068__auto___50537)){
args__43075__auto__.push((arguments[i__43069__auto___50538]));

var G__50539 = (i__43069__auto___50538 + (1));
i__43069__auto___50538 = G__50539;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq50536){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50536));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50541 = arguments.length;
var i__43069__auto___50542 = (0);
while(true){
if((i__43069__auto___50542 < len__43068__auto___50541)){
args__43075__auto__.push((arguments[i__43069__auto___50542]));

var G__50543 = (i__43069__auto___50542 + (1));
i__43069__auto___50542 = G__50543;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq50540){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50540));
});

var g_QMARK__50544 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_50545 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50544){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50544))
,null));
var mkg_50546 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50544,g_50545){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50544,g_50545))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__50544,g_50545,mkg_50546){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50544).call(null,x);
});})(g_QMARK__50544,g_50545,mkg_50546))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__50544,g_50545,mkg_50546){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_50546).call(null,gfn);
});})(g_QMARK__50544,g_50545,mkg_50546))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__50544,g_50545,mkg_50546){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_50545).call(null,generator);
});})(g_QMARK__50544,g_50545,mkg_50546))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50508__auto___50565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__50508__auto___50565){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50566 = arguments.length;
var i__43069__auto___50567 = (0);
while(true){
if((i__43069__auto___50567 < len__43068__auto___50566)){
args__43075__auto__.push((arguments[i__43069__auto___50567]));

var G__50568 = (i__43069__auto___50567 + (1));
i__43069__auto___50567 = G__50568;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50565))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50565){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50565),args);
});})(g__50508__auto___50565))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__50508__auto___50565){
return (function (seq50547){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50547));
});})(g__50508__auto___50565))
;


var g__50508__auto___50569 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__50508__auto___50569){
return (function cljs$spec$impl$gen$list(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50570 = arguments.length;
var i__43069__auto___50571 = (0);
while(true){
if((i__43069__auto___50571 < len__43068__auto___50570)){
args__43075__auto__.push((arguments[i__43069__auto___50571]));

var G__50572 = (i__43069__auto___50571 + (1));
i__43069__auto___50571 = G__50572;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50569))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50569){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50569),args);
});})(g__50508__auto___50569))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__50508__auto___50569){
return (function (seq50548){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50548));
});})(g__50508__auto___50569))
;


var g__50508__auto___50573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__50508__auto___50573){
return (function cljs$spec$impl$gen$map(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50574 = arguments.length;
var i__43069__auto___50575 = (0);
while(true){
if((i__43069__auto___50575 < len__43068__auto___50574)){
args__43075__auto__.push((arguments[i__43069__auto___50575]));

var G__50576 = (i__43069__auto___50575 + (1));
i__43069__auto___50575 = G__50576;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50573))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50573){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50573),args);
});})(g__50508__auto___50573))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__50508__auto___50573){
return (function (seq50549){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50549));
});})(g__50508__auto___50573))
;


var g__50508__auto___50577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__50508__auto___50577){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50578 = arguments.length;
var i__43069__auto___50579 = (0);
while(true){
if((i__43069__auto___50579 < len__43068__auto___50578)){
args__43075__auto__.push((arguments[i__43069__auto___50579]));

var G__50580 = (i__43069__auto___50579 + (1));
i__43069__auto___50579 = G__50580;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50577))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50577),args);
});})(g__50508__auto___50577))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__50508__auto___50577){
return (function (seq50550){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50550));
});})(g__50508__auto___50577))
;


var g__50508__auto___50581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__50508__auto___50581){
return (function cljs$spec$impl$gen$set(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50582 = arguments.length;
var i__43069__auto___50583 = (0);
while(true){
if((i__43069__auto___50583 < len__43068__auto___50582)){
args__43075__auto__.push((arguments[i__43069__auto___50583]));

var G__50584 = (i__43069__auto___50583 + (1));
i__43069__auto___50583 = G__50584;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50581))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50581){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50581),args);
});})(g__50508__auto___50581))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__50508__auto___50581){
return (function (seq50551){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50551));
});})(g__50508__auto___50581))
;


var g__50508__auto___50585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__50508__auto___50585){
return (function cljs$spec$impl$gen$vector(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50586 = arguments.length;
var i__43069__auto___50587 = (0);
while(true){
if((i__43069__auto___50587 < len__43068__auto___50586)){
args__43075__auto__.push((arguments[i__43069__auto___50587]));

var G__50588 = (i__43069__auto___50587 + (1));
i__43069__auto___50587 = G__50588;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50585))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50585),args);
});})(g__50508__auto___50585))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__50508__auto___50585){
return (function (seq50552){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50552));
});})(g__50508__auto___50585))
;


var g__50508__auto___50589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__50508__auto___50589){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50590 = arguments.length;
var i__43069__auto___50591 = (0);
while(true){
if((i__43069__auto___50591 < len__43068__auto___50590)){
args__43075__auto__.push((arguments[i__43069__auto___50591]));

var G__50592 = (i__43069__auto___50591 + (1));
i__43069__auto___50591 = G__50592;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50589))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50589),args);
});})(g__50508__auto___50589))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__50508__auto___50589){
return (function (seq50553){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50553));
});})(g__50508__auto___50589))
;


var g__50508__auto___50593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__50508__auto___50593){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50594 = arguments.length;
var i__43069__auto___50595 = (0);
while(true){
if((i__43069__auto___50595 < len__43068__auto___50594)){
args__43075__auto__.push((arguments[i__43069__auto___50595]));

var G__50596 = (i__43069__auto___50595 + (1));
i__43069__auto___50595 = G__50596;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50593))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50593),args);
});})(g__50508__auto___50593))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__50508__auto___50593){
return (function (seq50554){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50554));
});})(g__50508__auto___50593))
;


var g__50508__auto___50597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__50508__auto___50597){
return (function cljs$spec$impl$gen$elements(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50598 = arguments.length;
var i__43069__auto___50599 = (0);
while(true){
if((i__43069__auto___50599 < len__43068__auto___50598)){
args__43075__auto__.push((arguments[i__43069__auto___50599]));

var G__50600 = (i__43069__auto___50599 + (1));
i__43069__auto___50599 = G__50600;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50597))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50597),args);
});})(g__50508__auto___50597))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__50508__auto___50597){
return (function (seq50555){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50555));
});})(g__50508__auto___50597))
;


var g__50508__auto___50601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__50508__auto___50601){
return (function cljs$spec$impl$gen$bind(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50602 = arguments.length;
var i__43069__auto___50603 = (0);
while(true){
if((i__43069__auto___50603 < len__43068__auto___50602)){
args__43075__auto__.push((arguments[i__43069__auto___50603]));

var G__50604 = (i__43069__auto___50603 + (1));
i__43069__auto___50603 = G__50604;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50601))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50601),args);
});})(g__50508__auto___50601))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__50508__auto___50601){
return (function (seq50556){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50556));
});})(g__50508__auto___50601))
;


var g__50508__auto___50605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__50508__auto___50605){
return (function cljs$spec$impl$gen$choose(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50606 = arguments.length;
var i__43069__auto___50607 = (0);
while(true){
if((i__43069__auto___50607 < len__43068__auto___50606)){
args__43075__auto__.push((arguments[i__43069__auto___50607]));

var G__50608 = (i__43069__auto___50607 + (1));
i__43069__auto___50607 = G__50608;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50605))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50605),args);
});})(g__50508__auto___50605))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__50508__auto___50605){
return (function (seq50557){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50557));
});})(g__50508__auto___50605))
;


var g__50508__auto___50609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__50508__auto___50609){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50610 = arguments.length;
var i__43069__auto___50611 = (0);
while(true){
if((i__43069__auto___50611 < len__43068__auto___50610)){
args__43075__auto__.push((arguments[i__43069__auto___50611]));

var G__50612 = (i__43069__auto___50611 + (1));
i__43069__auto___50611 = G__50612;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50609))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50609),args);
});})(g__50508__auto___50609))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__50508__auto___50609){
return (function (seq50558){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50558));
});})(g__50508__auto___50609))
;


var g__50508__auto___50613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__50508__auto___50613){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50614 = arguments.length;
var i__43069__auto___50615 = (0);
while(true){
if((i__43069__auto___50615 < len__43068__auto___50614)){
args__43075__auto__.push((arguments[i__43069__auto___50615]));

var G__50616 = (i__43069__auto___50615 + (1));
i__43069__auto___50615 = G__50616;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50613))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50613),args);
});})(g__50508__auto___50613))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__50508__auto___50613){
return (function (seq50559){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50559));
});})(g__50508__auto___50613))
;


var g__50508__auto___50617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__50508__auto___50617){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50618 = arguments.length;
var i__43069__auto___50619 = (0);
while(true){
if((i__43069__auto___50619 < len__43068__auto___50618)){
args__43075__auto__.push((arguments[i__43069__auto___50619]));

var G__50620 = (i__43069__auto___50619 + (1));
i__43069__auto___50619 = G__50620;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50617))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50617),args);
});})(g__50508__auto___50617))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__50508__auto___50617){
return (function (seq50560){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50560));
});})(g__50508__auto___50617))
;


var g__50508__auto___50621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__50508__auto___50621){
return (function cljs$spec$impl$gen$sample(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50622 = arguments.length;
var i__43069__auto___50623 = (0);
while(true){
if((i__43069__auto___50623 < len__43068__auto___50622)){
args__43075__auto__.push((arguments[i__43069__auto___50623]));

var G__50624 = (i__43069__auto___50623 + (1));
i__43069__auto___50623 = G__50624;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50621))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50621){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50621),args);
});})(g__50508__auto___50621))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__50508__auto___50621){
return (function (seq50561){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50561));
});})(g__50508__auto___50621))
;


var g__50508__auto___50625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__50508__auto___50625){
return (function cljs$spec$impl$gen$return(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50626 = arguments.length;
var i__43069__auto___50627 = (0);
while(true){
if((i__43069__auto___50627 < len__43068__auto___50626)){
args__43075__auto__.push((arguments[i__43069__auto___50627]));

var G__50628 = (i__43069__auto___50627 + (1));
i__43069__auto___50627 = G__50628;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50625))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50625){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50625),args);
});})(g__50508__auto___50625))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__50508__auto___50625){
return (function (seq50562){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50562));
});})(g__50508__auto___50625))
;


var g__50508__auto___50629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__50508__auto___50629){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50630 = arguments.length;
var i__43069__auto___50631 = (0);
while(true){
if((i__43069__auto___50631 < len__43068__auto___50630)){
args__43075__auto__.push((arguments[i__43069__auto___50631]));

var G__50632 = (i__43069__auto___50631 + (1));
i__43069__auto___50631 = G__50632;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50629))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50629),args);
});})(g__50508__auto___50629))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50508__auto___50629){
return (function (seq50563){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50563));
});})(g__50508__auto___50629))
;


var g__50508__auto___50633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__50508__auto___50633){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50634 = arguments.length;
var i__43069__auto___50635 = (0);
while(true){
if((i__43069__auto___50635 < len__43068__auto___50634)){
args__43075__auto__.push((arguments[i__43069__auto___50635]));

var G__50636 = (i__43069__auto___50635 + (1));
i__43069__auto___50635 = G__50636;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50508__auto___50633))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50508__auto___50633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50508__auto___50633),args);
});})(g__50508__auto___50633))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__50508__auto___50633){
return (function (seq50564){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50564));
});})(g__50508__auto___50633))
;

var g__50521__auto___50658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__50521__auto___50658){
return (function cljs$spec$impl$gen$any(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50659 = arguments.length;
var i__43069__auto___50660 = (0);
while(true){
if((i__43069__auto___50660 < len__43068__auto___50659)){
args__43075__auto__.push((arguments[i__43069__auto___50660]));

var G__50661 = (i__43069__auto___50660 + (1));
i__43069__auto___50660 = G__50661;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50658))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50658){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50658);
});})(g__50521__auto___50658))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__50521__auto___50658){
return (function (seq50637){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50637));
});})(g__50521__auto___50658))
;


var g__50521__auto___50662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__50521__auto___50662){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50663 = arguments.length;
var i__43069__auto___50664 = (0);
while(true){
if((i__43069__auto___50664 < len__43068__auto___50663)){
args__43075__auto__.push((arguments[i__43069__auto___50664]));

var G__50665 = (i__43069__auto___50664 + (1));
i__43069__auto___50664 = G__50665;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50662))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50662){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50662);
});})(g__50521__auto___50662))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__50521__auto___50662){
return (function (seq50638){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50638));
});})(g__50521__auto___50662))
;


var g__50521__auto___50666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__50521__auto___50666){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50667 = arguments.length;
var i__43069__auto___50668 = (0);
while(true){
if((i__43069__auto___50668 < len__43068__auto___50667)){
args__43075__auto__.push((arguments[i__43069__auto___50668]));

var G__50669 = (i__43069__auto___50668 + (1));
i__43069__auto___50668 = G__50669;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50666))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50666){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50666);
});})(g__50521__auto___50666))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__50521__auto___50666){
return (function (seq50639){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50639));
});})(g__50521__auto___50666))
;


var g__50521__auto___50670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__50521__auto___50670){
return (function cljs$spec$impl$gen$char(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50671 = arguments.length;
var i__43069__auto___50672 = (0);
while(true){
if((i__43069__auto___50672 < len__43068__auto___50671)){
args__43075__auto__.push((arguments[i__43069__auto___50672]));

var G__50673 = (i__43069__auto___50672 + (1));
i__43069__auto___50672 = G__50673;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50670))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50670){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50670);
});})(g__50521__auto___50670))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__50521__auto___50670){
return (function (seq50640){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50640));
});})(g__50521__auto___50670))
;


var g__50521__auto___50674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__50521__auto___50674){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50675 = arguments.length;
var i__43069__auto___50676 = (0);
while(true){
if((i__43069__auto___50676 < len__43068__auto___50675)){
args__43075__auto__.push((arguments[i__43069__auto___50676]));

var G__50677 = (i__43069__auto___50676 + (1));
i__43069__auto___50676 = G__50677;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50674))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50674){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50674);
});})(g__50521__auto___50674))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__50521__auto___50674){
return (function (seq50641){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50641));
});})(g__50521__auto___50674))
;


var g__50521__auto___50678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__50521__auto___50678){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50679 = arguments.length;
var i__43069__auto___50680 = (0);
while(true){
if((i__43069__auto___50680 < len__43068__auto___50679)){
args__43075__auto__.push((arguments[i__43069__auto___50680]));

var G__50681 = (i__43069__auto___50680 + (1));
i__43069__auto___50680 = G__50681;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50678))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50678){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50678);
});})(g__50521__auto___50678))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__50521__auto___50678){
return (function (seq50642){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50642));
});})(g__50521__auto___50678))
;


var g__50521__auto___50682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__50521__auto___50682){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50683 = arguments.length;
var i__43069__auto___50684 = (0);
while(true){
if((i__43069__auto___50684 < len__43068__auto___50683)){
args__43075__auto__.push((arguments[i__43069__auto___50684]));

var G__50685 = (i__43069__auto___50684 + (1));
i__43069__auto___50684 = G__50685;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50682))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50682){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50682);
});})(g__50521__auto___50682))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__50521__auto___50682){
return (function (seq50643){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50643));
});})(g__50521__auto___50682))
;


var g__50521__auto___50686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__50521__auto___50686){
return (function cljs$spec$impl$gen$double(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50687 = arguments.length;
var i__43069__auto___50688 = (0);
while(true){
if((i__43069__auto___50688 < len__43068__auto___50687)){
args__43075__auto__.push((arguments[i__43069__auto___50688]));

var G__50689 = (i__43069__auto___50688 + (1));
i__43069__auto___50688 = G__50689;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50686))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50686){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50686);
});})(g__50521__auto___50686))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__50521__auto___50686){
return (function (seq50644){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50644));
});})(g__50521__auto___50686))
;


var g__50521__auto___50690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__50521__auto___50690){
return (function cljs$spec$impl$gen$int(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50691 = arguments.length;
var i__43069__auto___50692 = (0);
while(true){
if((i__43069__auto___50692 < len__43068__auto___50691)){
args__43075__auto__.push((arguments[i__43069__auto___50692]));

var G__50693 = (i__43069__auto___50692 + (1));
i__43069__auto___50692 = G__50693;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50690))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50690){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50690);
});})(g__50521__auto___50690))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__50521__auto___50690){
return (function (seq50645){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50645));
});})(g__50521__auto___50690))
;


var g__50521__auto___50694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__50521__auto___50694){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50695 = arguments.length;
var i__43069__auto___50696 = (0);
while(true){
if((i__43069__auto___50696 < len__43068__auto___50695)){
args__43075__auto__.push((arguments[i__43069__auto___50696]));

var G__50697 = (i__43069__auto___50696 + (1));
i__43069__auto___50696 = G__50697;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50694))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50694){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50694);
});})(g__50521__auto___50694))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__50521__auto___50694){
return (function (seq50646){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50646));
});})(g__50521__auto___50694))
;


var g__50521__auto___50698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__50521__auto___50698){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50699 = arguments.length;
var i__43069__auto___50700 = (0);
while(true){
if((i__43069__auto___50700 < len__43068__auto___50699)){
args__43075__auto__.push((arguments[i__43069__auto___50700]));

var G__50701 = (i__43069__auto___50700 + (1));
i__43069__auto___50700 = G__50701;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50698))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50698){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50698);
});})(g__50521__auto___50698))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__50521__auto___50698){
return (function (seq50647){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50647));
});})(g__50521__auto___50698))
;


var g__50521__auto___50702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__50521__auto___50702){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50703 = arguments.length;
var i__43069__auto___50704 = (0);
while(true){
if((i__43069__auto___50704 < len__43068__auto___50703)){
args__43075__auto__.push((arguments[i__43069__auto___50704]));

var G__50705 = (i__43069__auto___50704 + (1));
i__43069__auto___50704 = G__50705;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50702))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50702){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50702);
});})(g__50521__auto___50702))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__50521__auto___50702){
return (function (seq50648){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50648));
});})(g__50521__auto___50702))
;


var g__50521__auto___50706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__50521__auto___50706){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50707 = arguments.length;
var i__43069__auto___50708 = (0);
while(true){
if((i__43069__auto___50708 < len__43068__auto___50707)){
args__43075__auto__.push((arguments[i__43069__auto___50708]));

var G__50709 = (i__43069__auto___50708 + (1));
i__43069__auto___50708 = G__50709;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50706))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50706){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50706);
});})(g__50521__auto___50706))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__50521__auto___50706){
return (function (seq50649){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50649));
});})(g__50521__auto___50706))
;


var g__50521__auto___50710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__50521__auto___50710){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50711 = arguments.length;
var i__43069__auto___50712 = (0);
while(true){
if((i__43069__auto___50712 < len__43068__auto___50711)){
args__43075__auto__.push((arguments[i__43069__auto___50712]));

var G__50713 = (i__43069__auto___50712 + (1));
i__43069__auto___50712 = G__50713;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50710))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50710){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50710);
});})(g__50521__auto___50710))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__50521__auto___50710){
return (function (seq50650){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50650));
});})(g__50521__auto___50710))
;


var g__50521__auto___50714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__50521__auto___50714){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50715 = arguments.length;
var i__43069__auto___50716 = (0);
while(true){
if((i__43069__auto___50716 < len__43068__auto___50715)){
args__43075__auto__.push((arguments[i__43069__auto___50716]));

var G__50717 = (i__43069__auto___50716 + (1));
i__43069__auto___50716 = G__50717;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50714))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50714){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50714);
});})(g__50521__auto___50714))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__50521__auto___50714){
return (function (seq50651){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50651));
});})(g__50521__auto___50714))
;


var g__50521__auto___50718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__50521__auto___50718){
return (function cljs$spec$impl$gen$string(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50719 = arguments.length;
var i__43069__auto___50720 = (0);
while(true){
if((i__43069__auto___50720 < len__43068__auto___50719)){
args__43075__auto__.push((arguments[i__43069__auto___50720]));

var G__50721 = (i__43069__auto___50720 + (1));
i__43069__auto___50720 = G__50721;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50718))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50718){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50718);
});})(g__50521__auto___50718))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__50521__auto___50718){
return (function (seq50652){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50652));
});})(g__50521__auto___50718))
;


var g__50521__auto___50722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__50521__auto___50722){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50723 = arguments.length;
var i__43069__auto___50724 = (0);
while(true){
if((i__43069__auto___50724 < len__43068__auto___50723)){
args__43075__auto__.push((arguments[i__43069__auto___50724]));

var G__50725 = (i__43069__auto___50724 + (1));
i__43069__auto___50724 = G__50725;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50722))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50722){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50722);
});})(g__50521__auto___50722))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__50521__auto___50722){
return (function (seq50653){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50653));
});})(g__50521__auto___50722))
;


var g__50521__auto___50726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__50521__auto___50726){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50727 = arguments.length;
var i__43069__auto___50728 = (0);
while(true){
if((i__43069__auto___50728 < len__43068__auto___50727)){
args__43075__auto__.push((arguments[i__43069__auto___50728]));

var G__50729 = (i__43069__auto___50728 + (1));
i__43069__auto___50728 = G__50729;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50726))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50726){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50726);
});})(g__50521__auto___50726))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__50521__auto___50726){
return (function (seq50654){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50654));
});})(g__50521__auto___50726))
;


var g__50521__auto___50730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__50521__auto___50730){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50731 = arguments.length;
var i__43069__auto___50732 = (0);
while(true){
if((i__43069__auto___50732 < len__43068__auto___50731)){
args__43075__auto__.push((arguments[i__43069__auto___50732]));

var G__50733 = (i__43069__auto___50732 + (1));
i__43069__auto___50732 = G__50733;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50730))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50730){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50730);
});})(g__50521__auto___50730))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__50521__auto___50730){
return (function (seq50655){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50655));
});})(g__50521__auto___50730))
;


var g__50521__auto___50734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__50521__auto___50734){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50735 = arguments.length;
var i__43069__auto___50736 = (0);
while(true){
if((i__43069__auto___50736 < len__43068__auto___50735)){
args__43075__auto__.push((arguments[i__43069__auto___50736]));

var G__50737 = (i__43069__auto___50736 + (1));
i__43069__auto___50736 = G__50737;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50734))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50734){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50734);
});})(g__50521__auto___50734))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__50521__auto___50734){
return (function (seq50656){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50656));
});})(g__50521__auto___50734))
;


var g__50521__auto___50738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__50521__auto___50738){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50739 = arguments.length;
var i__43069__auto___50740 = (0);
while(true){
if((i__43069__auto___50740 < len__43068__auto___50739)){
args__43075__auto__.push((arguments[i__43069__auto___50740]));

var G__50741 = (i__43069__auto___50740 + (1));
i__43069__auto___50740 = G__50741;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});})(g__50521__auto___50738))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50521__auto___50738){
return (function (args){
return cljs.core.deref.call(null,g__50521__auto___50738);
});})(g__50521__auto___50738))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__50521__auto___50738){
return (function (seq50657){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50657));
});})(g__50521__auto___50738))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__43075__auto__ = [];
var len__43068__auto___50744 = arguments.length;
var i__43069__auto___50745 = (0);
while(true){
if((i__43069__auto___50745 < len__43068__auto___50744)){
args__43075__auto__.push((arguments[i__43069__auto___50745]));

var G__50746 = (i__43069__auto___50745 + (1));
i__43069__auto___50745 = G__50746;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__50742_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50742_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq50743){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50743));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__50747_SHARP_){
return (new Date(p1__50747_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1504724086563