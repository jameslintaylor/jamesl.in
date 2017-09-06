// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__41993__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_50364 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_50364){
return (function (){
var _STAR_always_update_STAR_50365 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_50365;
}});})(_STAR_always_update_STAR_50364))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_50364;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args50366 = [];
var len__43068__auto___50369 = arguments.length;
var i__43069__auto___50370 = (0);
while(true){
if((i__43069__auto___50370 < len__43068__auto___50369)){
args50366.push((arguments[i__43069__auto___50370]));

var G__50371 = (i__43069__auto___50370 + (1));
i__43069__auto___50370 = G__50371;
continue;
} else {
}
break;
}

var G__50368 = args50366.length;
switch (G__50368) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50366.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__50377_50381 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__50378_50382 = null;
var count__50379_50383 = (0);
var i__50380_50384 = (0);
while(true){
if((i__50380_50384 < count__50379_50383)){
var v_50385 = cljs.core._nth.call(null,chunk__50378_50382,i__50380_50384);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_50385);

var G__50386 = seq__50377_50381;
var G__50387 = chunk__50378_50382;
var G__50388 = count__50379_50383;
var G__50389 = (i__50380_50384 + (1));
seq__50377_50381 = G__50386;
chunk__50378_50382 = G__50387;
count__50379_50383 = G__50388;
i__50380_50384 = G__50389;
continue;
} else {
var temp__4657__auto___50390 = cljs.core.seq.call(null,seq__50377_50381);
if(temp__4657__auto___50390){
var seq__50377_50391__$1 = temp__4657__auto___50390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50377_50391__$1)){
var c__42804__auto___50392 = cljs.core.chunk_first.call(null,seq__50377_50391__$1);
var G__50393 = cljs.core.chunk_rest.call(null,seq__50377_50391__$1);
var G__50394 = c__42804__auto___50392;
var G__50395 = cljs.core.count.call(null,c__42804__auto___50392);
var G__50396 = (0);
seq__50377_50381 = G__50393;
chunk__50378_50382 = G__50394;
count__50379_50383 = G__50395;
i__50380_50384 = G__50396;
continue;
} else {
var v_50397 = cljs.core.first.call(null,seq__50377_50391__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_50397);

var G__50398 = cljs.core.next.call(null,seq__50377_50391__$1);
var G__50399 = null;
var G__50400 = (0);
var G__50401 = (0);
seq__50377_50381 = G__50398;
chunk__50378_50382 = G__50399;
count__50379_50383 = G__50400;
i__50380_50384 = G__50401;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1504724085991