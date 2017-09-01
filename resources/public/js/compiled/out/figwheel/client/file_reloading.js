// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__41993__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41993__auto__){
return or__41993__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__41993__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49481_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49481_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49486 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49487 = null;
var count__49488 = (0);
var i__49489 = (0);
while(true){
if((i__49489 < count__49488)){
var n = cljs.core._nth.call(null,chunk__49487,i__49489);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49490 = seq__49486;
var G__49491 = chunk__49487;
var G__49492 = count__49488;
var G__49493 = (i__49489 + (1));
seq__49486 = G__49490;
chunk__49487 = G__49491;
count__49488 = G__49492;
i__49489 = G__49493;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49486);
if(temp__4657__auto__){
var seq__49486__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49486__$1)){
var c__42804__auto__ = cljs.core.chunk_first.call(null,seq__49486__$1);
var G__49494 = cljs.core.chunk_rest.call(null,seq__49486__$1);
var G__49495 = c__42804__auto__;
var G__49496 = cljs.core.count.call(null,c__42804__auto__);
var G__49497 = (0);
seq__49486 = G__49494;
chunk__49487 = G__49495;
count__49488 = G__49496;
i__49489 = G__49497;
continue;
} else {
var n = cljs.core.first.call(null,seq__49486__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49498 = cljs.core.next.call(null,seq__49486__$1);
var G__49499 = null;
var G__49500 = (0);
var G__49501 = (0);
seq__49486 = G__49498;
chunk__49487 = G__49499;
count__49488 = G__49500;
i__49489 = G__49501;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49552_49563 = cljs.core.seq.call(null,deps);
var chunk__49553_49564 = null;
var count__49554_49565 = (0);
var i__49555_49566 = (0);
while(true){
if((i__49555_49566 < count__49554_49565)){
var dep_49567 = cljs.core._nth.call(null,chunk__49553_49564,i__49555_49566);
topo_sort_helper_STAR_.call(null,dep_49567,(depth + (1)),state);

var G__49568 = seq__49552_49563;
var G__49569 = chunk__49553_49564;
var G__49570 = count__49554_49565;
var G__49571 = (i__49555_49566 + (1));
seq__49552_49563 = G__49568;
chunk__49553_49564 = G__49569;
count__49554_49565 = G__49570;
i__49555_49566 = G__49571;
continue;
} else {
var temp__4657__auto___49572 = cljs.core.seq.call(null,seq__49552_49563);
if(temp__4657__auto___49572){
var seq__49552_49573__$1 = temp__4657__auto___49572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49552_49573__$1)){
var c__42804__auto___49574 = cljs.core.chunk_first.call(null,seq__49552_49573__$1);
var G__49575 = cljs.core.chunk_rest.call(null,seq__49552_49573__$1);
var G__49576 = c__42804__auto___49574;
var G__49577 = cljs.core.count.call(null,c__42804__auto___49574);
var G__49578 = (0);
seq__49552_49563 = G__49575;
chunk__49553_49564 = G__49576;
count__49554_49565 = G__49577;
i__49555_49566 = G__49578;
continue;
} else {
var dep_49579 = cljs.core.first.call(null,seq__49552_49573__$1);
topo_sort_helper_STAR_.call(null,dep_49579,(depth + (1)),state);

var G__49580 = cljs.core.next.call(null,seq__49552_49573__$1);
var G__49581 = null;
var G__49582 = (0);
var G__49583 = (0);
seq__49552_49563 = G__49580;
chunk__49553_49564 = G__49581;
count__49554_49565 = G__49582;
i__49555_49566 = G__49583;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49556){
var vec__49560 = p__49556;
var seq__49561 = cljs.core.seq.call(null,vec__49560);
var first__49562 = cljs.core.first.call(null,seq__49561);
var seq__49561__$1 = cljs.core.next.call(null,seq__49561);
var x = first__49562;
var xs = seq__49561__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49560,seq__49561,first__49562,seq__49561__$1,x,xs,get_deps__$1){
return (function (p1__49502_SHARP_){
return clojure.set.difference.call(null,p1__49502_SHARP_,x);
});})(vec__49560,seq__49561,first__49562,seq__49561__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49596 = cljs.core.seq.call(null,provides);
var chunk__49597 = null;
var count__49598 = (0);
var i__49599 = (0);
while(true){
if((i__49599 < count__49598)){
var prov = cljs.core._nth.call(null,chunk__49597,i__49599);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49600_49608 = cljs.core.seq.call(null,requires);
var chunk__49601_49609 = null;
var count__49602_49610 = (0);
var i__49603_49611 = (0);
while(true){
if((i__49603_49611 < count__49602_49610)){
var req_49612 = cljs.core._nth.call(null,chunk__49601_49609,i__49603_49611);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49612,prov);

var G__49613 = seq__49600_49608;
var G__49614 = chunk__49601_49609;
var G__49615 = count__49602_49610;
var G__49616 = (i__49603_49611 + (1));
seq__49600_49608 = G__49613;
chunk__49601_49609 = G__49614;
count__49602_49610 = G__49615;
i__49603_49611 = G__49616;
continue;
} else {
var temp__4657__auto___49617 = cljs.core.seq.call(null,seq__49600_49608);
if(temp__4657__auto___49617){
var seq__49600_49618__$1 = temp__4657__auto___49617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49600_49618__$1)){
var c__42804__auto___49619 = cljs.core.chunk_first.call(null,seq__49600_49618__$1);
var G__49620 = cljs.core.chunk_rest.call(null,seq__49600_49618__$1);
var G__49621 = c__42804__auto___49619;
var G__49622 = cljs.core.count.call(null,c__42804__auto___49619);
var G__49623 = (0);
seq__49600_49608 = G__49620;
chunk__49601_49609 = G__49621;
count__49602_49610 = G__49622;
i__49603_49611 = G__49623;
continue;
} else {
var req_49624 = cljs.core.first.call(null,seq__49600_49618__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49624,prov);

var G__49625 = cljs.core.next.call(null,seq__49600_49618__$1);
var G__49626 = null;
var G__49627 = (0);
var G__49628 = (0);
seq__49600_49608 = G__49625;
chunk__49601_49609 = G__49626;
count__49602_49610 = G__49627;
i__49603_49611 = G__49628;
continue;
}
} else {
}
}
break;
}

var G__49629 = seq__49596;
var G__49630 = chunk__49597;
var G__49631 = count__49598;
var G__49632 = (i__49599 + (1));
seq__49596 = G__49629;
chunk__49597 = G__49630;
count__49598 = G__49631;
i__49599 = G__49632;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49596);
if(temp__4657__auto__){
var seq__49596__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49596__$1)){
var c__42804__auto__ = cljs.core.chunk_first.call(null,seq__49596__$1);
var G__49633 = cljs.core.chunk_rest.call(null,seq__49596__$1);
var G__49634 = c__42804__auto__;
var G__49635 = cljs.core.count.call(null,c__42804__auto__);
var G__49636 = (0);
seq__49596 = G__49633;
chunk__49597 = G__49634;
count__49598 = G__49635;
i__49599 = G__49636;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49596__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49604_49637 = cljs.core.seq.call(null,requires);
var chunk__49605_49638 = null;
var count__49606_49639 = (0);
var i__49607_49640 = (0);
while(true){
if((i__49607_49640 < count__49606_49639)){
var req_49641 = cljs.core._nth.call(null,chunk__49605_49638,i__49607_49640);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49641,prov);

var G__49642 = seq__49604_49637;
var G__49643 = chunk__49605_49638;
var G__49644 = count__49606_49639;
var G__49645 = (i__49607_49640 + (1));
seq__49604_49637 = G__49642;
chunk__49605_49638 = G__49643;
count__49606_49639 = G__49644;
i__49607_49640 = G__49645;
continue;
} else {
var temp__4657__auto___49646__$1 = cljs.core.seq.call(null,seq__49604_49637);
if(temp__4657__auto___49646__$1){
var seq__49604_49647__$1 = temp__4657__auto___49646__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49604_49647__$1)){
var c__42804__auto___49648 = cljs.core.chunk_first.call(null,seq__49604_49647__$1);
var G__49649 = cljs.core.chunk_rest.call(null,seq__49604_49647__$1);
var G__49650 = c__42804__auto___49648;
var G__49651 = cljs.core.count.call(null,c__42804__auto___49648);
var G__49652 = (0);
seq__49604_49637 = G__49649;
chunk__49605_49638 = G__49650;
count__49606_49639 = G__49651;
i__49607_49640 = G__49652;
continue;
} else {
var req_49653 = cljs.core.first.call(null,seq__49604_49647__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49653,prov);

var G__49654 = cljs.core.next.call(null,seq__49604_49647__$1);
var G__49655 = null;
var G__49656 = (0);
var G__49657 = (0);
seq__49604_49637 = G__49654;
chunk__49605_49638 = G__49655;
count__49606_49639 = G__49656;
i__49607_49640 = G__49657;
continue;
}
} else {
}
}
break;
}

var G__49658 = cljs.core.next.call(null,seq__49596__$1);
var G__49659 = null;
var G__49660 = (0);
var G__49661 = (0);
seq__49596 = G__49658;
chunk__49597 = G__49659;
count__49598 = G__49660;
i__49599 = G__49661;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49666_49670 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49667_49671 = null;
var count__49668_49672 = (0);
var i__49669_49673 = (0);
while(true){
if((i__49669_49673 < count__49668_49672)){
var ns_49674 = cljs.core._nth.call(null,chunk__49667_49671,i__49669_49673);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49674);

var G__49675 = seq__49666_49670;
var G__49676 = chunk__49667_49671;
var G__49677 = count__49668_49672;
var G__49678 = (i__49669_49673 + (1));
seq__49666_49670 = G__49675;
chunk__49667_49671 = G__49676;
count__49668_49672 = G__49677;
i__49669_49673 = G__49678;
continue;
} else {
var temp__4657__auto___49679 = cljs.core.seq.call(null,seq__49666_49670);
if(temp__4657__auto___49679){
var seq__49666_49680__$1 = temp__4657__auto___49679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49666_49680__$1)){
var c__42804__auto___49681 = cljs.core.chunk_first.call(null,seq__49666_49680__$1);
var G__49682 = cljs.core.chunk_rest.call(null,seq__49666_49680__$1);
var G__49683 = c__42804__auto___49681;
var G__49684 = cljs.core.count.call(null,c__42804__auto___49681);
var G__49685 = (0);
seq__49666_49670 = G__49682;
chunk__49667_49671 = G__49683;
count__49668_49672 = G__49684;
i__49669_49673 = G__49685;
continue;
} else {
var ns_49686 = cljs.core.first.call(null,seq__49666_49680__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49686);

var G__49687 = cljs.core.next.call(null,seq__49666_49680__$1);
var G__49688 = null;
var G__49689 = (0);
var G__49690 = (0);
seq__49666_49670 = G__49687;
chunk__49667_49671 = G__49688;
count__49668_49672 = G__49689;
i__49669_49673 = G__49690;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__41993__auto__ = goog.require__;
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49691__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49692__i = 0, G__49692__a = new Array(arguments.length -  0);
while (G__49692__i < G__49692__a.length) {G__49692__a[G__49692__i] = arguments[G__49692__i + 0]; ++G__49692__i;}
  args = new cljs.core.IndexedSeq(G__49692__a,0);
} 
return G__49691__delegate.call(this,args);};
G__49691.cljs$lang$maxFixedArity = 0;
G__49691.cljs$lang$applyTo = (function (arglist__49693){
var args = cljs.core.seq(arglist__49693);
return G__49691__delegate(args);
});
G__49691.cljs$core$IFn$_invoke$arity$variadic = G__49691__delegate;
return G__49691;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49694 = cljs.core._EQ_;
var expr__49695 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49694.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49695))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49694,expr__49695){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49694,expr__49695))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49694,expr__49695){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49697){if((e49697 instanceof Error)){
var e = e49697;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49697;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49694,expr__49695))
} else {
if(cljs.core.truth_(pred__49694.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49695))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49694.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49695))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49694.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49695))){
return ((function (pred__49694,expr__49695){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49698){if((e49698 instanceof Error)){
var e = e49698;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49698;

}
}})());
});
;})(pred__49694,expr__49695))
} else {
return ((function (pred__49694,expr__49695){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49694,expr__49695))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49699,callback){
var map__49702 = p__49699;
var map__49702__$1 = ((((!((map__49702 == null)))?((((map__49702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49702):map__49702);
var file_msg = map__49702__$1;
var request_url = cljs.core.get.call(null,map__49702__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49702,map__49702__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49702,map__49702__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__){
return (function (state_49726){
var state_val_49727 = (state_49726[(1)]);
if((state_val_49727 === (7))){
var inst_49722 = (state_49726[(2)]);
var state_49726__$1 = state_49726;
var statearr_49728_49748 = state_49726__$1;
(statearr_49728_49748[(2)] = inst_49722);

(statearr_49728_49748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49727 === (1))){
var state_49726__$1 = state_49726;
var statearr_49729_49749 = state_49726__$1;
(statearr_49729_49749[(2)] = null);

(statearr_49729_49749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49727 === (4))){
var inst_49706 = (state_49726[(7)]);
var inst_49706__$1 = (state_49726[(2)]);
var state_49726__$1 = (function (){var statearr_49730 = state_49726;
(statearr_49730[(7)] = inst_49706__$1);

return statearr_49730;
})();
if(cljs.core.truth_(inst_49706__$1)){
var statearr_49731_49750 = state_49726__$1;
(statearr_49731_49750[(1)] = (5));

} else {
var statearr_49732_49751 = state_49726__$1;
(statearr_49732_49751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49727 === (6))){
var state_49726__$1 = state_49726;
var statearr_49733_49752 = state_49726__$1;
(statearr_49733_49752[(2)] = null);

(statearr_49733_49752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49727 === (3))){
var inst_49724 = (state_49726[(2)]);
var state_49726__$1 = state_49726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49726__$1,inst_49724);
} else {
if((state_val_49727 === (2))){
var state_49726__$1 = state_49726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49726__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49727 === (11))){
var inst_49718 = (state_49726[(2)]);
var state_49726__$1 = (function (){var statearr_49734 = state_49726;
(statearr_49734[(8)] = inst_49718);

return statearr_49734;
})();
var statearr_49735_49753 = state_49726__$1;
(statearr_49735_49753[(2)] = null);

(statearr_49735_49753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49727 === (9))){
var inst_49712 = (state_49726[(9)]);
var inst_49710 = (state_49726[(10)]);
var inst_49714 = inst_49712.call(null,inst_49710);
var state_49726__$1 = state_49726;
var statearr_49736_49754 = state_49726__$1;
(statearr_49736_49754[(2)] = inst_49714);

(statearr_49736_49754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49727 === (5))){
var inst_49706 = (state_49726[(7)]);
var inst_49708 = figwheel.client.file_reloading.blocking_load.call(null,inst_49706);
var state_49726__$1 = state_49726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49726__$1,(8),inst_49708);
} else {
if((state_val_49727 === (10))){
var inst_49710 = (state_49726[(10)]);
var inst_49716 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49710);
var state_49726__$1 = state_49726;
var statearr_49737_49755 = state_49726__$1;
(statearr_49737_49755[(2)] = inst_49716);

(statearr_49737_49755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49727 === (8))){
var inst_49712 = (state_49726[(9)]);
var inst_49706 = (state_49726[(7)]);
var inst_49710 = (state_49726[(2)]);
var inst_49711 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49712__$1 = cljs.core.get.call(null,inst_49711,inst_49706);
var state_49726__$1 = (function (){var statearr_49738 = state_49726;
(statearr_49738[(9)] = inst_49712__$1);

(statearr_49738[(10)] = inst_49710);

return statearr_49738;
})();
if(cljs.core.truth_(inst_49712__$1)){
var statearr_49739_49756 = state_49726__$1;
(statearr_49739_49756[(1)] = (9));

} else {
var statearr_49740_49757 = state_49726__$1;
(statearr_49740_49757[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44869__auto__))
;
return ((function (switch__44757__auto__,c__44869__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44758__auto__ = null;
var figwheel$client$file_reloading$state_machine__44758__auto____0 = (function (){
var statearr_49744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49744[(0)] = figwheel$client$file_reloading$state_machine__44758__auto__);

(statearr_49744[(1)] = (1));

return statearr_49744;
});
var figwheel$client$file_reloading$state_machine__44758__auto____1 = (function (state_49726){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_49726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e49745){if((e49745 instanceof Object)){
var ex__44761__auto__ = e49745;
var statearr_49746_49758 = state_49726;
(statearr_49746_49758[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49759 = state_49726;
state_49726 = G__49759;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44758__auto__ = function(state_49726){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44758__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44758__auto____1.call(this,state_49726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44758__auto____0;
figwheel$client$file_reloading$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44758__auto____1;
return figwheel$client$file_reloading$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__))
})();
var state__44871__auto__ = (function (){var statearr_49747 = f__44870__auto__.call(null);
(statearr_49747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_49747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__))
);

return c__44869__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49760,callback){
var map__49763 = p__49760;
var map__49763__$1 = ((((!((map__49763 == null)))?((((map__49763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49763):map__49763);
var file_msg = map__49763__$1;
var namespace = cljs.core.get.call(null,map__49763__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49763,map__49763__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49763,map__49763__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49765){
var map__49768 = p__49765;
var map__49768__$1 = ((((!((map__49768 == null)))?((((map__49768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49768):map__49768);
var file_msg = map__49768__$1;
var namespace = cljs.core.get.call(null,map__49768__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49770){
var map__49773 = p__49770;
var map__49773__$1 = ((((!((map__49773 == null)))?((((map__49773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49773):map__49773);
var file_msg = map__49773__$1;
var namespace = cljs.core.get.call(null,map__49773__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41981__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__41981__auto__){
var or__41993__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
var or__41993__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41993__auto____$1)){
return or__41993__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__41981__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49775,callback){
var map__49778 = p__49775;
var map__49778__$1 = ((((!((map__49778 == null)))?((((map__49778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49778):map__49778);
var file_msg = map__49778__$1;
var request_url = cljs.core.get.call(null,map__49778__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__44869__auto___49882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___49882,out){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___49882,out){
return (function (state_49864){
var state_val_49865 = (state_49864[(1)]);
if((state_val_49865 === (1))){
var inst_49838 = cljs.core.seq.call(null,files);
var inst_49839 = cljs.core.first.call(null,inst_49838);
var inst_49840 = cljs.core.next.call(null,inst_49838);
var inst_49841 = files;
var state_49864__$1 = (function (){var statearr_49866 = state_49864;
(statearr_49866[(7)] = inst_49841);

(statearr_49866[(8)] = inst_49840);

(statearr_49866[(9)] = inst_49839);

return statearr_49866;
})();
var statearr_49867_49883 = state_49864__$1;
(statearr_49867_49883[(2)] = null);

(statearr_49867_49883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49865 === (2))){
var inst_49841 = (state_49864[(7)]);
var inst_49847 = (state_49864[(10)]);
var inst_49846 = cljs.core.seq.call(null,inst_49841);
var inst_49847__$1 = cljs.core.first.call(null,inst_49846);
var inst_49848 = cljs.core.next.call(null,inst_49846);
var inst_49849 = (inst_49847__$1 == null);
var inst_49850 = cljs.core.not.call(null,inst_49849);
var state_49864__$1 = (function (){var statearr_49868 = state_49864;
(statearr_49868[(11)] = inst_49848);

(statearr_49868[(10)] = inst_49847__$1);

return statearr_49868;
})();
if(inst_49850){
var statearr_49869_49884 = state_49864__$1;
(statearr_49869_49884[(1)] = (4));

} else {
var statearr_49870_49885 = state_49864__$1;
(statearr_49870_49885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49865 === (3))){
var inst_49862 = (state_49864[(2)]);
var state_49864__$1 = state_49864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49864__$1,inst_49862);
} else {
if((state_val_49865 === (4))){
var inst_49847 = (state_49864[(10)]);
var inst_49852 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49847);
var state_49864__$1 = state_49864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49864__$1,(7),inst_49852);
} else {
if((state_val_49865 === (5))){
var inst_49858 = cljs.core.async.close_BANG_.call(null,out);
var state_49864__$1 = state_49864;
var statearr_49871_49886 = state_49864__$1;
(statearr_49871_49886[(2)] = inst_49858);

(statearr_49871_49886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49865 === (6))){
var inst_49860 = (state_49864[(2)]);
var state_49864__$1 = state_49864;
var statearr_49872_49887 = state_49864__$1;
(statearr_49872_49887[(2)] = inst_49860);

(statearr_49872_49887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49865 === (7))){
var inst_49848 = (state_49864[(11)]);
var inst_49854 = (state_49864[(2)]);
var inst_49855 = cljs.core.async.put_BANG_.call(null,out,inst_49854);
var inst_49841 = inst_49848;
var state_49864__$1 = (function (){var statearr_49873 = state_49864;
(statearr_49873[(12)] = inst_49855);

(statearr_49873[(7)] = inst_49841);

return statearr_49873;
})();
var statearr_49874_49888 = state_49864__$1;
(statearr_49874_49888[(2)] = null);

(statearr_49874_49888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__44869__auto___49882,out))
;
return ((function (switch__44757__auto__,c__44869__auto___49882,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto____0 = (function (){
var statearr_49878 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49878[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto__);

(statearr_49878[(1)] = (1));

return statearr_49878;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto____1 = (function (state_49864){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_49864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e49879){if((e49879 instanceof Object)){
var ex__44761__auto__ = e49879;
var statearr_49880_49889 = state_49864;
(statearr_49880_49889[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49890 = state_49864;
state_49864 = G__49890;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto__ = function(state_49864){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto____1.call(this,state_49864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___49882,out))
})();
var state__44871__auto__ = (function (){var statearr_49881 = f__44870__auto__.call(null);
(statearr_49881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___49882);

return statearr_49881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___49882,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49891,opts){
var map__49895 = p__49891;
var map__49895__$1 = ((((!((map__49895 == null)))?((((map__49895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49895):map__49895);
var eval_body__$1 = cljs.core.get.call(null,map__49895__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41981__auto__ = eval_body__$1;
if(cljs.core.truth_(and__41981__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__41981__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49897){var e = e49897;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49898_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49898_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49907){
var vec__49908 = p__49907;
var k = cljs.core.nth.call(null,vec__49908,(0),null);
var v = cljs.core.nth.call(null,vec__49908,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49911){
var vec__49912 = p__49911;
var k = cljs.core.nth.call(null,vec__49912,(0),null);
var v = cljs.core.nth.call(null,vec__49912,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49918,p__49919){
var map__50166 = p__49918;
var map__50166__$1 = ((((!((map__50166 == null)))?((((map__50166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50166):map__50166);
var opts = map__50166__$1;
var before_jsload = cljs.core.get.call(null,map__50166__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50166__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50166__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50167 = p__49919;
var map__50167__$1 = ((((!((map__50167 == null)))?((((map__50167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50167):map__50167);
var msg = map__50167__$1;
var files = cljs.core.get.call(null,map__50167__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50167__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50167__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50320){
var state_val_50321 = (state_50320[(1)]);
if((state_val_50321 === (7))){
var inst_50182 = (state_50320[(7)]);
var inst_50183 = (state_50320[(8)]);
var inst_50184 = (state_50320[(9)]);
var inst_50181 = (state_50320[(10)]);
var inst_50189 = cljs.core._nth.call(null,inst_50182,inst_50184);
var inst_50190 = figwheel.client.file_reloading.eval_body.call(null,inst_50189,opts);
var inst_50191 = (inst_50184 + (1));
var tmp50322 = inst_50182;
var tmp50323 = inst_50183;
var tmp50324 = inst_50181;
var inst_50181__$1 = tmp50324;
var inst_50182__$1 = tmp50322;
var inst_50183__$1 = tmp50323;
var inst_50184__$1 = inst_50191;
var state_50320__$1 = (function (){var statearr_50325 = state_50320;
(statearr_50325[(7)] = inst_50182__$1);

(statearr_50325[(11)] = inst_50190);

(statearr_50325[(8)] = inst_50183__$1);

(statearr_50325[(9)] = inst_50184__$1);

(statearr_50325[(10)] = inst_50181__$1);

return statearr_50325;
})();
var statearr_50326_50412 = state_50320__$1;
(statearr_50326_50412[(2)] = null);

(statearr_50326_50412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (20))){
var inst_50224 = (state_50320[(12)]);
var inst_50232 = figwheel.client.file_reloading.sort_files.call(null,inst_50224);
var state_50320__$1 = state_50320;
var statearr_50327_50413 = state_50320__$1;
(statearr_50327_50413[(2)] = inst_50232);

(statearr_50327_50413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (27))){
var state_50320__$1 = state_50320;
var statearr_50328_50414 = state_50320__$1;
(statearr_50328_50414[(2)] = null);

(statearr_50328_50414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (1))){
var inst_50173 = (state_50320[(13)]);
var inst_50170 = before_jsload.call(null,files);
var inst_50171 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50172 = (function (){return ((function (inst_50173,inst_50170,inst_50171,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49915_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49915_SHARP_);
});
;})(inst_50173,inst_50170,inst_50171,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50173__$1 = cljs.core.filter.call(null,inst_50172,files);
var inst_50174 = cljs.core.not_empty.call(null,inst_50173__$1);
var state_50320__$1 = (function (){var statearr_50329 = state_50320;
(statearr_50329[(13)] = inst_50173__$1);

(statearr_50329[(14)] = inst_50170);

(statearr_50329[(15)] = inst_50171);

return statearr_50329;
})();
if(cljs.core.truth_(inst_50174)){
var statearr_50330_50415 = state_50320__$1;
(statearr_50330_50415[(1)] = (2));

} else {
var statearr_50331_50416 = state_50320__$1;
(statearr_50331_50416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (24))){
var state_50320__$1 = state_50320;
var statearr_50332_50417 = state_50320__$1;
(statearr_50332_50417[(2)] = null);

(statearr_50332_50417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (39))){
var inst_50274 = (state_50320[(16)]);
var state_50320__$1 = state_50320;
var statearr_50333_50418 = state_50320__$1;
(statearr_50333_50418[(2)] = inst_50274);

(statearr_50333_50418[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (46))){
var inst_50315 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
var statearr_50334_50419 = state_50320__$1;
(statearr_50334_50419[(2)] = inst_50315);

(statearr_50334_50419[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (4))){
var inst_50218 = (state_50320[(2)]);
var inst_50219 = cljs.core.List.EMPTY;
var inst_50220 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50219);
var inst_50221 = (function (){return ((function (inst_50218,inst_50219,inst_50220,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49916_SHARP_){
var and__41981__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49916_SHARP_);
if(cljs.core.truth_(and__41981__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49916_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49916_SHARP_)));
} else {
return and__41981__auto__;
}
});
;})(inst_50218,inst_50219,inst_50220,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50222 = cljs.core.filter.call(null,inst_50221,files);
var inst_50223 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50224 = cljs.core.concat.call(null,inst_50222,inst_50223);
var state_50320__$1 = (function (){var statearr_50335 = state_50320;
(statearr_50335[(12)] = inst_50224);

(statearr_50335[(17)] = inst_50218);

(statearr_50335[(18)] = inst_50220);

return statearr_50335;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50336_50420 = state_50320__$1;
(statearr_50336_50420[(1)] = (16));

} else {
var statearr_50337_50421 = state_50320__$1;
(statearr_50337_50421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (15))){
var inst_50208 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
var statearr_50338_50422 = state_50320__$1;
(statearr_50338_50422[(2)] = inst_50208);

(statearr_50338_50422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (21))){
var inst_50234 = (state_50320[(19)]);
var inst_50234__$1 = (state_50320[(2)]);
var inst_50235 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50234__$1);
var state_50320__$1 = (function (){var statearr_50339 = state_50320;
(statearr_50339[(19)] = inst_50234__$1);

return statearr_50339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50320__$1,(22),inst_50235);
} else {
if((state_val_50321 === (31))){
var inst_50318 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50320__$1,inst_50318);
} else {
if((state_val_50321 === (32))){
var inst_50274 = (state_50320[(16)]);
var inst_50279 = inst_50274.cljs$lang$protocol_mask$partition0$;
var inst_50280 = (inst_50279 & (64));
var inst_50281 = inst_50274.cljs$core$ISeq$;
var inst_50282 = (inst_50280) || (inst_50281);
var state_50320__$1 = state_50320;
if(cljs.core.truth_(inst_50282)){
var statearr_50340_50423 = state_50320__$1;
(statearr_50340_50423[(1)] = (35));

} else {
var statearr_50341_50424 = state_50320__$1;
(statearr_50341_50424[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (40))){
var inst_50295 = (state_50320[(20)]);
var inst_50294 = (state_50320[(2)]);
var inst_50295__$1 = cljs.core.get.call(null,inst_50294,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50296 = cljs.core.get.call(null,inst_50294,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50297 = cljs.core.not_empty.call(null,inst_50295__$1);
var state_50320__$1 = (function (){var statearr_50342 = state_50320;
(statearr_50342[(20)] = inst_50295__$1);

(statearr_50342[(21)] = inst_50296);

return statearr_50342;
})();
if(cljs.core.truth_(inst_50297)){
var statearr_50343_50425 = state_50320__$1;
(statearr_50343_50425[(1)] = (41));

} else {
var statearr_50344_50426 = state_50320__$1;
(statearr_50344_50426[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (33))){
var state_50320__$1 = state_50320;
var statearr_50345_50427 = state_50320__$1;
(statearr_50345_50427[(2)] = false);

(statearr_50345_50427[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (13))){
var inst_50194 = (state_50320[(22)]);
var inst_50198 = cljs.core.chunk_first.call(null,inst_50194);
var inst_50199 = cljs.core.chunk_rest.call(null,inst_50194);
var inst_50200 = cljs.core.count.call(null,inst_50198);
var inst_50181 = inst_50199;
var inst_50182 = inst_50198;
var inst_50183 = inst_50200;
var inst_50184 = (0);
var state_50320__$1 = (function (){var statearr_50346 = state_50320;
(statearr_50346[(7)] = inst_50182);

(statearr_50346[(8)] = inst_50183);

(statearr_50346[(9)] = inst_50184);

(statearr_50346[(10)] = inst_50181);

return statearr_50346;
})();
var statearr_50347_50428 = state_50320__$1;
(statearr_50347_50428[(2)] = null);

(statearr_50347_50428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (22))){
var inst_50238 = (state_50320[(23)]);
var inst_50237 = (state_50320[(24)]);
var inst_50242 = (state_50320[(25)]);
var inst_50234 = (state_50320[(19)]);
var inst_50237__$1 = (state_50320[(2)]);
var inst_50238__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50237__$1);
var inst_50239 = (function (){var all_files = inst_50234;
var res_SINGLEQUOTE_ = inst_50237__$1;
var res = inst_50238__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50238,inst_50237,inst_50242,inst_50234,inst_50237__$1,inst_50238__$1,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49917_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49917_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50238,inst_50237,inst_50242,inst_50234,inst_50237__$1,inst_50238__$1,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50240 = cljs.core.filter.call(null,inst_50239,inst_50237__$1);
var inst_50241 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50242__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50241);
var inst_50243 = cljs.core.not_empty.call(null,inst_50242__$1);
var state_50320__$1 = (function (){var statearr_50348 = state_50320;
(statearr_50348[(23)] = inst_50238__$1);

(statearr_50348[(24)] = inst_50237__$1);

(statearr_50348[(25)] = inst_50242__$1);

(statearr_50348[(26)] = inst_50240);

return statearr_50348;
})();
if(cljs.core.truth_(inst_50243)){
var statearr_50349_50429 = state_50320__$1;
(statearr_50349_50429[(1)] = (23));

} else {
var statearr_50350_50430 = state_50320__$1;
(statearr_50350_50430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (36))){
var state_50320__$1 = state_50320;
var statearr_50351_50431 = state_50320__$1;
(statearr_50351_50431[(2)] = false);

(statearr_50351_50431[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (41))){
var inst_50295 = (state_50320[(20)]);
var inst_50299 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50300 = cljs.core.map.call(null,inst_50299,inst_50295);
var inst_50301 = cljs.core.pr_str.call(null,inst_50300);
var inst_50302 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_50301)].join('');
var inst_50303 = figwheel.client.utils.log.call(null,inst_50302);
var state_50320__$1 = state_50320;
var statearr_50352_50432 = state_50320__$1;
(statearr_50352_50432[(2)] = inst_50303);

(statearr_50352_50432[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (43))){
var inst_50296 = (state_50320[(21)]);
var inst_50306 = (state_50320[(2)]);
var inst_50307 = cljs.core.not_empty.call(null,inst_50296);
var state_50320__$1 = (function (){var statearr_50353 = state_50320;
(statearr_50353[(27)] = inst_50306);

return statearr_50353;
})();
if(cljs.core.truth_(inst_50307)){
var statearr_50354_50433 = state_50320__$1;
(statearr_50354_50433[(1)] = (44));

} else {
var statearr_50355_50434 = state_50320__$1;
(statearr_50355_50434[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (29))){
var inst_50238 = (state_50320[(23)]);
var inst_50274 = (state_50320[(16)]);
var inst_50237 = (state_50320[(24)]);
var inst_50242 = (state_50320[(25)]);
var inst_50234 = (state_50320[(19)]);
var inst_50240 = (state_50320[(26)]);
var inst_50270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50273 = (function (){var all_files = inst_50234;
var res_SINGLEQUOTE_ = inst_50237;
var res = inst_50238;
var files_not_loaded = inst_50240;
var dependencies_that_loaded = inst_50242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50274,inst_50237,inst_50242,inst_50234,inst_50240,inst_50270,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50272){
var map__50356 = p__50272;
var map__50356__$1 = ((((!((map__50356 == null)))?((((map__50356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50356):map__50356);
var namespace = cljs.core.get.call(null,map__50356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50274,inst_50237,inst_50242,inst_50234,inst_50240,inst_50270,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50274__$1 = cljs.core.group_by.call(null,inst_50273,inst_50240);
var inst_50276 = (inst_50274__$1 == null);
var inst_50277 = cljs.core.not.call(null,inst_50276);
var state_50320__$1 = (function (){var statearr_50358 = state_50320;
(statearr_50358[(16)] = inst_50274__$1);

(statearr_50358[(28)] = inst_50270);

return statearr_50358;
})();
if(inst_50277){
var statearr_50359_50435 = state_50320__$1;
(statearr_50359_50435[(1)] = (32));

} else {
var statearr_50360_50436 = state_50320__$1;
(statearr_50360_50436[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (44))){
var inst_50296 = (state_50320[(21)]);
var inst_50309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50296);
var inst_50310 = cljs.core.pr_str.call(null,inst_50309);
var inst_50311 = [cljs.core.str("not required: "),cljs.core.str(inst_50310)].join('');
var inst_50312 = figwheel.client.utils.log.call(null,inst_50311);
var state_50320__$1 = state_50320;
var statearr_50361_50437 = state_50320__$1;
(statearr_50361_50437[(2)] = inst_50312);

(statearr_50361_50437[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (6))){
var inst_50215 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
var statearr_50362_50438 = state_50320__$1;
(statearr_50362_50438[(2)] = inst_50215);

(statearr_50362_50438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (28))){
var inst_50240 = (state_50320[(26)]);
var inst_50267 = (state_50320[(2)]);
var inst_50268 = cljs.core.not_empty.call(null,inst_50240);
var state_50320__$1 = (function (){var statearr_50363 = state_50320;
(statearr_50363[(29)] = inst_50267);

return statearr_50363;
})();
if(cljs.core.truth_(inst_50268)){
var statearr_50364_50439 = state_50320__$1;
(statearr_50364_50439[(1)] = (29));

} else {
var statearr_50365_50440 = state_50320__$1;
(statearr_50365_50440[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (25))){
var inst_50238 = (state_50320[(23)]);
var inst_50254 = (state_50320[(2)]);
var inst_50255 = cljs.core.not_empty.call(null,inst_50238);
var state_50320__$1 = (function (){var statearr_50366 = state_50320;
(statearr_50366[(30)] = inst_50254);

return statearr_50366;
})();
if(cljs.core.truth_(inst_50255)){
var statearr_50367_50441 = state_50320__$1;
(statearr_50367_50441[(1)] = (26));

} else {
var statearr_50368_50442 = state_50320__$1;
(statearr_50368_50442[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (34))){
var inst_50289 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
if(cljs.core.truth_(inst_50289)){
var statearr_50369_50443 = state_50320__$1;
(statearr_50369_50443[(1)] = (38));

} else {
var statearr_50370_50444 = state_50320__$1;
(statearr_50370_50444[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (17))){
var state_50320__$1 = state_50320;
var statearr_50371_50445 = state_50320__$1;
(statearr_50371_50445[(2)] = recompile_dependents);

(statearr_50371_50445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (3))){
var state_50320__$1 = state_50320;
var statearr_50372_50446 = state_50320__$1;
(statearr_50372_50446[(2)] = null);

(statearr_50372_50446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (12))){
var inst_50211 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
var statearr_50373_50447 = state_50320__$1;
(statearr_50373_50447[(2)] = inst_50211);

(statearr_50373_50447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (2))){
var inst_50173 = (state_50320[(13)]);
var inst_50180 = cljs.core.seq.call(null,inst_50173);
var inst_50181 = inst_50180;
var inst_50182 = null;
var inst_50183 = (0);
var inst_50184 = (0);
var state_50320__$1 = (function (){var statearr_50374 = state_50320;
(statearr_50374[(7)] = inst_50182);

(statearr_50374[(8)] = inst_50183);

(statearr_50374[(9)] = inst_50184);

(statearr_50374[(10)] = inst_50181);

return statearr_50374;
})();
var statearr_50375_50448 = state_50320__$1;
(statearr_50375_50448[(2)] = null);

(statearr_50375_50448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (23))){
var inst_50238 = (state_50320[(23)]);
var inst_50237 = (state_50320[(24)]);
var inst_50242 = (state_50320[(25)]);
var inst_50234 = (state_50320[(19)]);
var inst_50240 = (state_50320[(26)]);
var inst_50245 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50247 = (function (){var all_files = inst_50234;
var res_SINGLEQUOTE_ = inst_50237;
var res = inst_50238;
var files_not_loaded = inst_50240;
var dependencies_that_loaded = inst_50242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50237,inst_50242,inst_50234,inst_50240,inst_50245,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50246){
var map__50376 = p__50246;
var map__50376__$1 = ((((!((map__50376 == null)))?((((map__50376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50376):map__50376);
var request_url = cljs.core.get.call(null,map__50376__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50237,inst_50242,inst_50234,inst_50240,inst_50245,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50248 = cljs.core.reverse.call(null,inst_50242);
var inst_50249 = cljs.core.map.call(null,inst_50247,inst_50248);
var inst_50250 = cljs.core.pr_str.call(null,inst_50249);
var inst_50251 = figwheel.client.utils.log.call(null,inst_50250);
var state_50320__$1 = (function (){var statearr_50378 = state_50320;
(statearr_50378[(31)] = inst_50245);

return statearr_50378;
})();
var statearr_50379_50449 = state_50320__$1;
(statearr_50379_50449[(2)] = inst_50251);

(statearr_50379_50449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (35))){
var state_50320__$1 = state_50320;
var statearr_50380_50450 = state_50320__$1;
(statearr_50380_50450[(2)] = true);

(statearr_50380_50450[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (19))){
var inst_50224 = (state_50320[(12)]);
var inst_50230 = figwheel.client.file_reloading.expand_files.call(null,inst_50224);
var state_50320__$1 = state_50320;
var statearr_50381_50451 = state_50320__$1;
(statearr_50381_50451[(2)] = inst_50230);

(statearr_50381_50451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (11))){
var state_50320__$1 = state_50320;
var statearr_50382_50452 = state_50320__$1;
(statearr_50382_50452[(2)] = null);

(statearr_50382_50452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (9))){
var inst_50213 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
var statearr_50383_50453 = state_50320__$1;
(statearr_50383_50453[(2)] = inst_50213);

(statearr_50383_50453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (5))){
var inst_50183 = (state_50320[(8)]);
var inst_50184 = (state_50320[(9)]);
var inst_50186 = (inst_50184 < inst_50183);
var inst_50187 = inst_50186;
var state_50320__$1 = state_50320;
if(cljs.core.truth_(inst_50187)){
var statearr_50384_50454 = state_50320__$1;
(statearr_50384_50454[(1)] = (7));

} else {
var statearr_50385_50455 = state_50320__$1;
(statearr_50385_50455[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (14))){
var inst_50194 = (state_50320[(22)]);
var inst_50203 = cljs.core.first.call(null,inst_50194);
var inst_50204 = figwheel.client.file_reloading.eval_body.call(null,inst_50203,opts);
var inst_50205 = cljs.core.next.call(null,inst_50194);
var inst_50181 = inst_50205;
var inst_50182 = null;
var inst_50183 = (0);
var inst_50184 = (0);
var state_50320__$1 = (function (){var statearr_50386 = state_50320;
(statearr_50386[(7)] = inst_50182);

(statearr_50386[(8)] = inst_50183);

(statearr_50386[(9)] = inst_50184);

(statearr_50386[(10)] = inst_50181);

(statearr_50386[(32)] = inst_50204);

return statearr_50386;
})();
var statearr_50387_50456 = state_50320__$1;
(statearr_50387_50456[(2)] = null);

(statearr_50387_50456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (45))){
var state_50320__$1 = state_50320;
var statearr_50388_50457 = state_50320__$1;
(statearr_50388_50457[(2)] = null);

(statearr_50388_50457[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (26))){
var inst_50238 = (state_50320[(23)]);
var inst_50237 = (state_50320[(24)]);
var inst_50242 = (state_50320[(25)]);
var inst_50234 = (state_50320[(19)]);
var inst_50240 = (state_50320[(26)]);
var inst_50257 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50259 = (function (){var all_files = inst_50234;
var res_SINGLEQUOTE_ = inst_50237;
var res = inst_50238;
var files_not_loaded = inst_50240;
var dependencies_that_loaded = inst_50242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50237,inst_50242,inst_50234,inst_50240,inst_50257,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50258){
var map__50389 = p__50258;
var map__50389__$1 = ((((!((map__50389 == null)))?((((map__50389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50389):map__50389);
var namespace = cljs.core.get.call(null,map__50389__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50389__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50237,inst_50242,inst_50234,inst_50240,inst_50257,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50260 = cljs.core.map.call(null,inst_50259,inst_50238);
var inst_50261 = cljs.core.pr_str.call(null,inst_50260);
var inst_50262 = figwheel.client.utils.log.call(null,inst_50261);
var inst_50263 = (function (){var all_files = inst_50234;
var res_SINGLEQUOTE_ = inst_50237;
var res = inst_50238;
var files_not_loaded = inst_50240;
var dependencies_that_loaded = inst_50242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50237,inst_50242,inst_50234,inst_50240,inst_50257,inst_50259,inst_50260,inst_50261,inst_50262,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50237,inst_50242,inst_50234,inst_50240,inst_50257,inst_50259,inst_50260,inst_50261,inst_50262,state_val_50321,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50264 = setTimeout(inst_50263,(10));
var state_50320__$1 = (function (){var statearr_50391 = state_50320;
(statearr_50391[(33)] = inst_50262);

(statearr_50391[(34)] = inst_50257);

return statearr_50391;
})();
var statearr_50392_50458 = state_50320__$1;
(statearr_50392_50458[(2)] = inst_50264);

(statearr_50392_50458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (16))){
var state_50320__$1 = state_50320;
var statearr_50393_50459 = state_50320__$1;
(statearr_50393_50459[(2)] = reload_dependents);

(statearr_50393_50459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (38))){
var inst_50274 = (state_50320[(16)]);
var inst_50291 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50274);
var state_50320__$1 = state_50320;
var statearr_50394_50460 = state_50320__$1;
(statearr_50394_50460[(2)] = inst_50291);

(statearr_50394_50460[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (30))){
var state_50320__$1 = state_50320;
var statearr_50395_50461 = state_50320__$1;
(statearr_50395_50461[(2)] = null);

(statearr_50395_50461[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (10))){
var inst_50194 = (state_50320[(22)]);
var inst_50196 = cljs.core.chunked_seq_QMARK_.call(null,inst_50194);
var state_50320__$1 = state_50320;
if(inst_50196){
var statearr_50396_50462 = state_50320__$1;
(statearr_50396_50462[(1)] = (13));

} else {
var statearr_50397_50463 = state_50320__$1;
(statearr_50397_50463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (18))){
var inst_50228 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
if(cljs.core.truth_(inst_50228)){
var statearr_50398_50464 = state_50320__$1;
(statearr_50398_50464[(1)] = (19));

} else {
var statearr_50399_50465 = state_50320__$1;
(statearr_50399_50465[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (42))){
var state_50320__$1 = state_50320;
var statearr_50400_50466 = state_50320__$1;
(statearr_50400_50466[(2)] = null);

(statearr_50400_50466[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (37))){
var inst_50286 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
var statearr_50401_50467 = state_50320__$1;
(statearr_50401_50467[(2)] = inst_50286);

(statearr_50401_50467[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50321 === (8))){
var inst_50194 = (state_50320[(22)]);
var inst_50181 = (state_50320[(10)]);
var inst_50194__$1 = cljs.core.seq.call(null,inst_50181);
var state_50320__$1 = (function (){var statearr_50402 = state_50320;
(statearr_50402[(22)] = inst_50194__$1);

return statearr_50402;
})();
if(inst_50194__$1){
var statearr_50403_50468 = state_50320__$1;
(statearr_50403_50468[(1)] = (10));

} else {
var statearr_50404_50469 = state_50320__$1;
(statearr_50404_50469[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44757__auto__,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto____0 = (function (){
var statearr_50408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50408[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto__);

(statearr_50408[(1)] = (1));

return statearr_50408;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto____1 = (function (state_50320){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_50320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e50409){if((e50409 instanceof Object)){
var ex__44761__auto__ = e50409;
var statearr_50410_50470 = state_50320;
(statearr_50410_50470[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50471 = state_50320;
state_50320 = G__50471;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto__ = function(state_50320){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto____1.call(this,state_50320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44871__auto__ = (function (){var statearr_50411 = f__44870__auto__.call(null);
(statearr_50411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_50411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__,map__50166,map__50166__$1,opts,before_jsload,on_jsload,reload_dependents,map__50167,map__50167__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44869__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50474,link){
var map__50477 = p__50474;
var map__50477__$1 = ((((!((map__50477 == null)))?((((map__50477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50477):map__50477);
var file = cljs.core.get.call(null,map__50477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__50477,map__50477__$1,file){
return (function (p1__50472_SHARP_,p2__50473_SHARP_){
if(cljs.core._EQ_.call(null,p1__50472_SHARP_,p2__50473_SHARP_)){
return p1__50472_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__50477,map__50477__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50483){
var map__50484 = p__50483;
var map__50484__$1 = ((((!((map__50484 == null)))?((((map__50484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50484):map__50484);
var match_length = cljs.core.get.call(null,map__50484__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50484__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50479_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50479_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50486_SHARP_,p2__50487_SHARP_){
return cljs.core.assoc.call(null,p1__50486_SHARP_,cljs.core.get.call(null,p2__50487_SHARP_,key),p2__50487_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50488 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50488);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50488);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50489,p__50490){
var map__50495 = p__50489;
var map__50495__$1 = ((((!((map__50495 == null)))?((((map__50495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50495):map__50495);
var on_cssload = cljs.core.get.call(null,map__50495__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50496 = p__50490;
var map__50496__$1 = ((((!((map__50496 == null)))?((((map__50496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50496):map__50496);
var files_msg = map__50496__$1;
var files = cljs.core.get.call(null,map__50496__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1504122779946