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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48899_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48899_SHARP_));
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
var seq__48904 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48905 = null;
var count__48906 = (0);
var i__48907 = (0);
while(true){
if((i__48907 < count__48906)){
var n = cljs.core._nth.call(null,chunk__48905,i__48907);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48908 = seq__48904;
var G__48909 = chunk__48905;
var G__48910 = count__48906;
var G__48911 = (i__48907 + (1));
seq__48904 = G__48908;
chunk__48905 = G__48909;
count__48906 = G__48910;
i__48907 = G__48911;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48904);
if(temp__4657__auto__){
var seq__48904__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48904__$1)){
var c__42804__auto__ = cljs.core.chunk_first.call(null,seq__48904__$1);
var G__48912 = cljs.core.chunk_rest.call(null,seq__48904__$1);
var G__48913 = c__42804__auto__;
var G__48914 = cljs.core.count.call(null,c__42804__auto__);
var G__48915 = (0);
seq__48904 = G__48912;
chunk__48905 = G__48913;
count__48906 = G__48914;
i__48907 = G__48915;
continue;
} else {
var n = cljs.core.first.call(null,seq__48904__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48916 = cljs.core.next.call(null,seq__48904__$1);
var G__48917 = null;
var G__48918 = (0);
var G__48919 = (0);
seq__48904 = G__48916;
chunk__48905 = G__48917;
count__48906 = G__48918;
i__48907 = G__48919;
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

var seq__48970_48981 = cljs.core.seq.call(null,deps);
var chunk__48971_48982 = null;
var count__48972_48983 = (0);
var i__48973_48984 = (0);
while(true){
if((i__48973_48984 < count__48972_48983)){
var dep_48985 = cljs.core._nth.call(null,chunk__48971_48982,i__48973_48984);
topo_sort_helper_STAR_.call(null,dep_48985,(depth + (1)),state);

var G__48986 = seq__48970_48981;
var G__48987 = chunk__48971_48982;
var G__48988 = count__48972_48983;
var G__48989 = (i__48973_48984 + (1));
seq__48970_48981 = G__48986;
chunk__48971_48982 = G__48987;
count__48972_48983 = G__48988;
i__48973_48984 = G__48989;
continue;
} else {
var temp__4657__auto___48990 = cljs.core.seq.call(null,seq__48970_48981);
if(temp__4657__auto___48990){
var seq__48970_48991__$1 = temp__4657__auto___48990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48970_48991__$1)){
var c__42804__auto___48992 = cljs.core.chunk_first.call(null,seq__48970_48991__$1);
var G__48993 = cljs.core.chunk_rest.call(null,seq__48970_48991__$1);
var G__48994 = c__42804__auto___48992;
var G__48995 = cljs.core.count.call(null,c__42804__auto___48992);
var G__48996 = (0);
seq__48970_48981 = G__48993;
chunk__48971_48982 = G__48994;
count__48972_48983 = G__48995;
i__48973_48984 = G__48996;
continue;
} else {
var dep_48997 = cljs.core.first.call(null,seq__48970_48991__$1);
topo_sort_helper_STAR_.call(null,dep_48997,(depth + (1)),state);

var G__48998 = cljs.core.next.call(null,seq__48970_48991__$1);
var G__48999 = null;
var G__49000 = (0);
var G__49001 = (0);
seq__48970_48981 = G__48998;
chunk__48971_48982 = G__48999;
count__48972_48983 = G__49000;
i__48973_48984 = G__49001;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48974){
var vec__48978 = p__48974;
var seq__48979 = cljs.core.seq.call(null,vec__48978);
var first__48980 = cljs.core.first.call(null,seq__48979);
var seq__48979__$1 = cljs.core.next.call(null,seq__48979);
var x = first__48980;
var xs = seq__48979__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48978,seq__48979,first__48980,seq__48979__$1,x,xs,get_deps__$1){
return (function (p1__48920_SHARP_){
return clojure.set.difference.call(null,p1__48920_SHARP_,x);
});})(vec__48978,seq__48979,first__48980,seq__48979__$1,x,xs,get_deps__$1))
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
var seq__49014 = cljs.core.seq.call(null,provides);
var chunk__49015 = null;
var count__49016 = (0);
var i__49017 = (0);
while(true){
if((i__49017 < count__49016)){
var prov = cljs.core._nth.call(null,chunk__49015,i__49017);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49018_49026 = cljs.core.seq.call(null,requires);
var chunk__49019_49027 = null;
var count__49020_49028 = (0);
var i__49021_49029 = (0);
while(true){
if((i__49021_49029 < count__49020_49028)){
var req_49030 = cljs.core._nth.call(null,chunk__49019_49027,i__49021_49029);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49030,prov);

var G__49031 = seq__49018_49026;
var G__49032 = chunk__49019_49027;
var G__49033 = count__49020_49028;
var G__49034 = (i__49021_49029 + (1));
seq__49018_49026 = G__49031;
chunk__49019_49027 = G__49032;
count__49020_49028 = G__49033;
i__49021_49029 = G__49034;
continue;
} else {
var temp__4657__auto___49035 = cljs.core.seq.call(null,seq__49018_49026);
if(temp__4657__auto___49035){
var seq__49018_49036__$1 = temp__4657__auto___49035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49018_49036__$1)){
var c__42804__auto___49037 = cljs.core.chunk_first.call(null,seq__49018_49036__$1);
var G__49038 = cljs.core.chunk_rest.call(null,seq__49018_49036__$1);
var G__49039 = c__42804__auto___49037;
var G__49040 = cljs.core.count.call(null,c__42804__auto___49037);
var G__49041 = (0);
seq__49018_49026 = G__49038;
chunk__49019_49027 = G__49039;
count__49020_49028 = G__49040;
i__49021_49029 = G__49041;
continue;
} else {
var req_49042 = cljs.core.first.call(null,seq__49018_49036__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49042,prov);

var G__49043 = cljs.core.next.call(null,seq__49018_49036__$1);
var G__49044 = null;
var G__49045 = (0);
var G__49046 = (0);
seq__49018_49026 = G__49043;
chunk__49019_49027 = G__49044;
count__49020_49028 = G__49045;
i__49021_49029 = G__49046;
continue;
}
} else {
}
}
break;
}

var G__49047 = seq__49014;
var G__49048 = chunk__49015;
var G__49049 = count__49016;
var G__49050 = (i__49017 + (1));
seq__49014 = G__49047;
chunk__49015 = G__49048;
count__49016 = G__49049;
i__49017 = G__49050;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49014);
if(temp__4657__auto__){
var seq__49014__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49014__$1)){
var c__42804__auto__ = cljs.core.chunk_first.call(null,seq__49014__$1);
var G__49051 = cljs.core.chunk_rest.call(null,seq__49014__$1);
var G__49052 = c__42804__auto__;
var G__49053 = cljs.core.count.call(null,c__42804__auto__);
var G__49054 = (0);
seq__49014 = G__49051;
chunk__49015 = G__49052;
count__49016 = G__49053;
i__49017 = G__49054;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49014__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49022_49055 = cljs.core.seq.call(null,requires);
var chunk__49023_49056 = null;
var count__49024_49057 = (0);
var i__49025_49058 = (0);
while(true){
if((i__49025_49058 < count__49024_49057)){
var req_49059 = cljs.core._nth.call(null,chunk__49023_49056,i__49025_49058);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49059,prov);

var G__49060 = seq__49022_49055;
var G__49061 = chunk__49023_49056;
var G__49062 = count__49024_49057;
var G__49063 = (i__49025_49058 + (1));
seq__49022_49055 = G__49060;
chunk__49023_49056 = G__49061;
count__49024_49057 = G__49062;
i__49025_49058 = G__49063;
continue;
} else {
var temp__4657__auto___49064__$1 = cljs.core.seq.call(null,seq__49022_49055);
if(temp__4657__auto___49064__$1){
var seq__49022_49065__$1 = temp__4657__auto___49064__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49022_49065__$1)){
var c__42804__auto___49066 = cljs.core.chunk_first.call(null,seq__49022_49065__$1);
var G__49067 = cljs.core.chunk_rest.call(null,seq__49022_49065__$1);
var G__49068 = c__42804__auto___49066;
var G__49069 = cljs.core.count.call(null,c__42804__auto___49066);
var G__49070 = (0);
seq__49022_49055 = G__49067;
chunk__49023_49056 = G__49068;
count__49024_49057 = G__49069;
i__49025_49058 = G__49070;
continue;
} else {
var req_49071 = cljs.core.first.call(null,seq__49022_49065__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49071,prov);

var G__49072 = cljs.core.next.call(null,seq__49022_49065__$1);
var G__49073 = null;
var G__49074 = (0);
var G__49075 = (0);
seq__49022_49055 = G__49072;
chunk__49023_49056 = G__49073;
count__49024_49057 = G__49074;
i__49025_49058 = G__49075;
continue;
}
} else {
}
}
break;
}

var G__49076 = cljs.core.next.call(null,seq__49014__$1);
var G__49077 = null;
var G__49078 = (0);
var G__49079 = (0);
seq__49014 = G__49076;
chunk__49015 = G__49077;
count__49016 = G__49078;
i__49017 = G__49079;
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
var seq__49084_49088 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49085_49089 = null;
var count__49086_49090 = (0);
var i__49087_49091 = (0);
while(true){
if((i__49087_49091 < count__49086_49090)){
var ns_49092 = cljs.core._nth.call(null,chunk__49085_49089,i__49087_49091);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49092);

var G__49093 = seq__49084_49088;
var G__49094 = chunk__49085_49089;
var G__49095 = count__49086_49090;
var G__49096 = (i__49087_49091 + (1));
seq__49084_49088 = G__49093;
chunk__49085_49089 = G__49094;
count__49086_49090 = G__49095;
i__49087_49091 = G__49096;
continue;
} else {
var temp__4657__auto___49097 = cljs.core.seq.call(null,seq__49084_49088);
if(temp__4657__auto___49097){
var seq__49084_49098__$1 = temp__4657__auto___49097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49084_49098__$1)){
var c__42804__auto___49099 = cljs.core.chunk_first.call(null,seq__49084_49098__$1);
var G__49100 = cljs.core.chunk_rest.call(null,seq__49084_49098__$1);
var G__49101 = c__42804__auto___49099;
var G__49102 = cljs.core.count.call(null,c__42804__auto___49099);
var G__49103 = (0);
seq__49084_49088 = G__49100;
chunk__49085_49089 = G__49101;
count__49086_49090 = G__49102;
i__49087_49091 = G__49103;
continue;
} else {
var ns_49104 = cljs.core.first.call(null,seq__49084_49098__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49104);

var G__49105 = cljs.core.next.call(null,seq__49084_49098__$1);
var G__49106 = null;
var G__49107 = (0);
var G__49108 = (0);
seq__49084_49088 = G__49105;
chunk__49085_49089 = G__49106;
count__49086_49090 = G__49107;
i__49087_49091 = G__49108;
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
var G__49109__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49110__i = 0, G__49110__a = new Array(arguments.length -  0);
while (G__49110__i < G__49110__a.length) {G__49110__a[G__49110__i] = arguments[G__49110__i + 0]; ++G__49110__i;}
  args = new cljs.core.IndexedSeq(G__49110__a,0);
} 
return G__49109__delegate.call(this,args);};
G__49109.cljs$lang$maxFixedArity = 0;
G__49109.cljs$lang$applyTo = (function (arglist__49111){
var args = cljs.core.seq(arglist__49111);
return G__49109__delegate(args);
});
G__49109.cljs$core$IFn$_invoke$arity$variadic = G__49109__delegate;
return G__49109;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49112 = cljs.core._EQ_;
var expr__49113 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49112.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49113))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49112,expr__49113){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49112,expr__49113))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49112,expr__49113){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49115){if((e49115 instanceof Error)){
var e = e49115;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49115;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49112,expr__49113))
} else {
if(cljs.core.truth_(pred__49112.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49113))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49112.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49113))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49112.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49113))){
return ((function (pred__49112,expr__49113){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49116){if((e49116 instanceof Error)){
var e = e49116;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49116;

}
}})());
});
;})(pred__49112,expr__49113))
} else {
return ((function (pred__49112,expr__49113){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49112,expr__49113))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49117,callback){
var map__49120 = p__49117;
var map__49120__$1 = ((((!((map__49120 == null)))?((((map__49120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49120):map__49120);
var file_msg = map__49120__$1;
var request_url = cljs.core.get.call(null,map__49120__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49120,map__49120__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49120,map__49120__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__){
return (function (state_49144){
var state_val_49145 = (state_49144[(1)]);
if((state_val_49145 === (7))){
var inst_49140 = (state_49144[(2)]);
var state_49144__$1 = state_49144;
var statearr_49146_49166 = state_49144__$1;
(statearr_49146_49166[(2)] = inst_49140);

(statearr_49146_49166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49145 === (1))){
var state_49144__$1 = state_49144;
var statearr_49147_49167 = state_49144__$1;
(statearr_49147_49167[(2)] = null);

(statearr_49147_49167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49145 === (4))){
var inst_49124 = (state_49144[(7)]);
var inst_49124__$1 = (state_49144[(2)]);
var state_49144__$1 = (function (){var statearr_49148 = state_49144;
(statearr_49148[(7)] = inst_49124__$1);

return statearr_49148;
})();
if(cljs.core.truth_(inst_49124__$1)){
var statearr_49149_49168 = state_49144__$1;
(statearr_49149_49168[(1)] = (5));

} else {
var statearr_49150_49169 = state_49144__$1;
(statearr_49150_49169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49145 === (6))){
var state_49144__$1 = state_49144;
var statearr_49151_49170 = state_49144__$1;
(statearr_49151_49170[(2)] = null);

(statearr_49151_49170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49145 === (3))){
var inst_49142 = (state_49144[(2)]);
var state_49144__$1 = state_49144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49144__$1,inst_49142);
} else {
if((state_val_49145 === (2))){
var state_49144__$1 = state_49144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49144__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49145 === (11))){
var inst_49136 = (state_49144[(2)]);
var state_49144__$1 = (function (){var statearr_49152 = state_49144;
(statearr_49152[(8)] = inst_49136);

return statearr_49152;
})();
var statearr_49153_49171 = state_49144__$1;
(statearr_49153_49171[(2)] = null);

(statearr_49153_49171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49145 === (9))){
var inst_49128 = (state_49144[(9)]);
var inst_49130 = (state_49144[(10)]);
var inst_49132 = inst_49130.call(null,inst_49128);
var state_49144__$1 = state_49144;
var statearr_49154_49172 = state_49144__$1;
(statearr_49154_49172[(2)] = inst_49132);

(statearr_49154_49172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49145 === (5))){
var inst_49124 = (state_49144[(7)]);
var inst_49126 = figwheel.client.file_reloading.blocking_load.call(null,inst_49124);
var state_49144__$1 = state_49144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49144__$1,(8),inst_49126);
} else {
if((state_val_49145 === (10))){
var inst_49128 = (state_49144[(9)]);
var inst_49134 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49128);
var state_49144__$1 = state_49144;
var statearr_49155_49173 = state_49144__$1;
(statearr_49155_49173[(2)] = inst_49134);

(statearr_49155_49173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49145 === (8))){
var inst_49124 = (state_49144[(7)]);
var inst_49130 = (state_49144[(10)]);
var inst_49128 = (state_49144[(2)]);
var inst_49129 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49130__$1 = cljs.core.get.call(null,inst_49129,inst_49124);
var state_49144__$1 = (function (){var statearr_49156 = state_49144;
(statearr_49156[(9)] = inst_49128);

(statearr_49156[(10)] = inst_49130__$1);

return statearr_49156;
})();
if(cljs.core.truth_(inst_49130__$1)){
var statearr_49157_49174 = state_49144__$1;
(statearr_49157_49174[(1)] = (9));

} else {
var statearr_49158_49175 = state_49144__$1;
(statearr_49158_49175[(1)] = (10));

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
});})(c__44165__auto__))
;
return ((function (switch__44053__auto__,c__44165__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44054__auto__ = null;
var figwheel$client$file_reloading$state_machine__44054__auto____0 = (function (){
var statearr_49162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49162[(0)] = figwheel$client$file_reloading$state_machine__44054__auto__);

(statearr_49162[(1)] = (1));

return statearr_49162;
});
var figwheel$client$file_reloading$state_machine__44054__auto____1 = (function (state_49144){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_49144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e49163){if((e49163 instanceof Object)){
var ex__44057__auto__ = e49163;
var statearr_49164_49176 = state_49144;
(statearr_49164_49176[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49177 = state_49144;
state_49144 = G__49177;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44054__auto__ = function(state_49144){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44054__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44054__auto____1.call(this,state_49144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44054__auto____0;
figwheel$client$file_reloading$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44054__auto____1;
return figwheel$client$file_reloading$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__))
})();
var state__44167__auto__ = (function (){var statearr_49165 = f__44166__auto__.call(null);
(statearr_49165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_49165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__))
);

return c__44165__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49178,callback){
var map__49181 = p__49178;
var map__49181__$1 = ((((!((map__49181 == null)))?((((map__49181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49181):map__49181);
var file_msg = map__49181__$1;
var namespace = cljs.core.get.call(null,map__49181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49181,map__49181__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49181,map__49181__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49183){
var map__49186 = p__49183;
var map__49186__$1 = ((((!((map__49186 == null)))?((((map__49186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49186):map__49186);
var file_msg = map__49186__$1;
var namespace = cljs.core.get.call(null,map__49186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49188){
var map__49191 = p__49188;
var map__49191__$1 = ((((!((map__49191 == null)))?((((map__49191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49191):map__49191);
var file_msg = map__49191__$1;
var namespace = cljs.core.get.call(null,map__49191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49193,callback){
var map__49196 = p__49193;
var map__49196__$1 = ((((!((map__49196 == null)))?((((map__49196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49196):map__49196);
var file_msg = map__49196__$1;
var request_url = cljs.core.get.call(null,map__49196__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49196__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__44165__auto___49300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___49300,out){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___49300,out){
return (function (state_49282){
var state_val_49283 = (state_49282[(1)]);
if((state_val_49283 === (1))){
var inst_49256 = cljs.core.seq.call(null,files);
var inst_49257 = cljs.core.first.call(null,inst_49256);
var inst_49258 = cljs.core.next.call(null,inst_49256);
var inst_49259 = files;
var state_49282__$1 = (function (){var statearr_49284 = state_49282;
(statearr_49284[(7)] = inst_49257);

(statearr_49284[(8)] = inst_49259);

(statearr_49284[(9)] = inst_49258);

return statearr_49284;
})();
var statearr_49285_49301 = state_49282__$1;
(statearr_49285_49301[(2)] = null);

(statearr_49285_49301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49283 === (2))){
var inst_49259 = (state_49282[(8)]);
var inst_49265 = (state_49282[(10)]);
var inst_49264 = cljs.core.seq.call(null,inst_49259);
var inst_49265__$1 = cljs.core.first.call(null,inst_49264);
var inst_49266 = cljs.core.next.call(null,inst_49264);
var inst_49267 = (inst_49265__$1 == null);
var inst_49268 = cljs.core.not.call(null,inst_49267);
var state_49282__$1 = (function (){var statearr_49286 = state_49282;
(statearr_49286[(11)] = inst_49266);

(statearr_49286[(10)] = inst_49265__$1);

return statearr_49286;
})();
if(inst_49268){
var statearr_49287_49302 = state_49282__$1;
(statearr_49287_49302[(1)] = (4));

} else {
var statearr_49288_49303 = state_49282__$1;
(statearr_49288_49303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49283 === (3))){
var inst_49280 = (state_49282[(2)]);
var state_49282__$1 = state_49282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49282__$1,inst_49280);
} else {
if((state_val_49283 === (4))){
var inst_49265 = (state_49282[(10)]);
var inst_49270 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49265);
var state_49282__$1 = state_49282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49282__$1,(7),inst_49270);
} else {
if((state_val_49283 === (5))){
var inst_49276 = cljs.core.async.close_BANG_.call(null,out);
var state_49282__$1 = state_49282;
var statearr_49289_49304 = state_49282__$1;
(statearr_49289_49304[(2)] = inst_49276);

(statearr_49289_49304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49283 === (6))){
var inst_49278 = (state_49282[(2)]);
var state_49282__$1 = state_49282;
var statearr_49290_49305 = state_49282__$1;
(statearr_49290_49305[(2)] = inst_49278);

(statearr_49290_49305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49283 === (7))){
var inst_49266 = (state_49282[(11)]);
var inst_49272 = (state_49282[(2)]);
var inst_49273 = cljs.core.async.put_BANG_.call(null,out,inst_49272);
var inst_49259 = inst_49266;
var state_49282__$1 = (function (){var statearr_49291 = state_49282;
(statearr_49291[(8)] = inst_49259);

(statearr_49291[(12)] = inst_49273);

return statearr_49291;
})();
var statearr_49292_49306 = state_49282__$1;
(statearr_49292_49306[(2)] = null);

(statearr_49292_49306[(1)] = (2));


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
});})(c__44165__auto___49300,out))
;
return ((function (switch__44053__auto__,c__44165__auto___49300,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto____0 = (function (){
var statearr_49296 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49296[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto__);

(statearr_49296[(1)] = (1));

return statearr_49296;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto____1 = (function (state_49282){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_49282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e49297){if((e49297 instanceof Object)){
var ex__44057__auto__ = e49297;
var statearr_49298_49307 = state_49282;
(statearr_49298_49307[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49308 = state_49282;
state_49282 = G__49308;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto__ = function(state_49282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto____1.call(this,state_49282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___49300,out))
})();
var state__44167__auto__ = (function (){var statearr_49299 = f__44166__auto__.call(null);
(statearr_49299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___49300);

return statearr_49299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___49300,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49309,opts){
var map__49313 = p__49309;
var map__49313__$1 = ((((!((map__49313 == null)))?((((map__49313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49313):map__49313);
var eval_body__$1 = cljs.core.get.call(null,map__49313__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e49315){var e = e49315;
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
return (function (p1__49316_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49316_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49325){
var vec__49326 = p__49325;
var k = cljs.core.nth.call(null,vec__49326,(0),null);
var v = cljs.core.nth.call(null,vec__49326,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49329){
var vec__49330 = p__49329;
var k = cljs.core.nth.call(null,vec__49330,(0),null);
var v = cljs.core.nth.call(null,vec__49330,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49336,p__49337){
var map__49584 = p__49336;
var map__49584__$1 = ((((!((map__49584 == null)))?((((map__49584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49584):map__49584);
var opts = map__49584__$1;
var before_jsload = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49585 = p__49337;
var map__49585__$1 = ((((!((map__49585 == null)))?((((map__49585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49585):map__49585);
var msg = map__49585__$1;
var files = cljs.core.get.call(null,map__49585__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49585__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49585__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49738){
var state_val_49739 = (state_49738[(1)]);
if((state_val_49739 === (7))){
var inst_49602 = (state_49738[(7)]);
var inst_49599 = (state_49738[(8)]);
var inst_49600 = (state_49738[(9)]);
var inst_49601 = (state_49738[(10)]);
var inst_49607 = cljs.core._nth.call(null,inst_49600,inst_49602);
var inst_49608 = figwheel.client.file_reloading.eval_body.call(null,inst_49607,opts);
var inst_49609 = (inst_49602 + (1));
var tmp49740 = inst_49599;
var tmp49741 = inst_49600;
var tmp49742 = inst_49601;
var inst_49599__$1 = tmp49740;
var inst_49600__$1 = tmp49741;
var inst_49601__$1 = tmp49742;
var inst_49602__$1 = inst_49609;
var state_49738__$1 = (function (){var statearr_49743 = state_49738;
(statearr_49743[(7)] = inst_49602__$1);

(statearr_49743[(8)] = inst_49599__$1);

(statearr_49743[(9)] = inst_49600__$1);

(statearr_49743[(10)] = inst_49601__$1);

(statearr_49743[(11)] = inst_49608);

return statearr_49743;
})();
var statearr_49744_49830 = state_49738__$1;
(statearr_49744_49830[(2)] = null);

(statearr_49744_49830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (20))){
var inst_49642 = (state_49738[(12)]);
var inst_49650 = figwheel.client.file_reloading.sort_files.call(null,inst_49642);
var state_49738__$1 = state_49738;
var statearr_49745_49831 = state_49738__$1;
(statearr_49745_49831[(2)] = inst_49650);

(statearr_49745_49831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (27))){
var state_49738__$1 = state_49738;
var statearr_49746_49832 = state_49738__$1;
(statearr_49746_49832[(2)] = null);

(statearr_49746_49832[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (1))){
var inst_49591 = (state_49738[(13)]);
var inst_49588 = before_jsload.call(null,files);
var inst_49589 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49590 = (function (){return ((function (inst_49591,inst_49588,inst_49589,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49333_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49333_SHARP_);
});
;})(inst_49591,inst_49588,inst_49589,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49591__$1 = cljs.core.filter.call(null,inst_49590,files);
var inst_49592 = cljs.core.not_empty.call(null,inst_49591__$1);
var state_49738__$1 = (function (){var statearr_49747 = state_49738;
(statearr_49747[(13)] = inst_49591__$1);

(statearr_49747[(14)] = inst_49589);

(statearr_49747[(15)] = inst_49588);

return statearr_49747;
})();
if(cljs.core.truth_(inst_49592)){
var statearr_49748_49833 = state_49738__$1;
(statearr_49748_49833[(1)] = (2));

} else {
var statearr_49749_49834 = state_49738__$1;
(statearr_49749_49834[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (24))){
var state_49738__$1 = state_49738;
var statearr_49750_49835 = state_49738__$1;
(statearr_49750_49835[(2)] = null);

(statearr_49750_49835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (39))){
var inst_49692 = (state_49738[(16)]);
var state_49738__$1 = state_49738;
var statearr_49751_49836 = state_49738__$1;
(statearr_49751_49836[(2)] = inst_49692);

(statearr_49751_49836[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (46))){
var inst_49733 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
var statearr_49752_49837 = state_49738__$1;
(statearr_49752_49837[(2)] = inst_49733);

(statearr_49752_49837[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (4))){
var inst_49636 = (state_49738[(2)]);
var inst_49637 = cljs.core.List.EMPTY;
var inst_49638 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49637);
var inst_49639 = (function (){return ((function (inst_49636,inst_49637,inst_49638,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49334_SHARP_){
var and__41981__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49334_SHARP_);
if(cljs.core.truth_(and__41981__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49334_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49334_SHARP_)));
} else {
return and__41981__auto__;
}
});
;})(inst_49636,inst_49637,inst_49638,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49640 = cljs.core.filter.call(null,inst_49639,files);
var inst_49641 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49642 = cljs.core.concat.call(null,inst_49640,inst_49641);
var state_49738__$1 = (function (){var statearr_49753 = state_49738;
(statearr_49753[(12)] = inst_49642);

(statearr_49753[(17)] = inst_49638);

(statearr_49753[(18)] = inst_49636);

return statearr_49753;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49754_49838 = state_49738__$1;
(statearr_49754_49838[(1)] = (16));

} else {
var statearr_49755_49839 = state_49738__$1;
(statearr_49755_49839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (15))){
var inst_49626 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
var statearr_49756_49840 = state_49738__$1;
(statearr_49756_49840[(2)] = inst_49626);

(statearr_49756_49840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (21))){
var inst_49652 = (state_49738[(19)]);
var inst_49652__$1 = (state_49738[(2)]);
var inst_49653 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49652__$1);
var state_49738__$1 = (function (){var statearr_49757 = state_49738;
(statearr_49757[(19)] = inst_49652__$1);

return statearr_49757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49738__$1,(22),inst_49653);
} else {
if((state_val_49739 === (31))){
var inst_49736 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49738__$1,inst_49736);
} else {
if((state_val_49739 === (32))){
var inst_49692 = (state_49738[(16)]);
var inst_49697 = inst_49692.cljs$lang$protocol_mask$partition0$;
var inst_49698 = (inst_49697 & (64));
var inst_49699 = inst_49692.cljs$core$ISeq$;
var inst_49700 = (inst_49698) || (inst_49699);
var state_49738__$1 = state_49738;
if(cljs.core.truth_(inst_49700)){
var statearr_49758_49841 = state_49738__$1;
(statearr_49758_49841[(1)] = (35));

} else {
var statearr_49759_49842 = state_49738__$1;
(statearr_49759_49842[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (40))){
var inst_49713 = (state_49738[(20)]);
var inst_49712 = (state_49738[(2)]);
var inst_49713__$1 = cljs.core.get.call(null,inst_49712,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49714 = cljs.core.get.call(null,inst_49712,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49715 = cljs.core.not_empty.call(null,inst_49713__$1);
var state_49738__$1 = (function (){var statearr_49760 = state_49738;
(statearr_49760[(20)] = inst_49713__$1);

(statearr_49760[(21)] = inst_49714);

return statearr_49760;
})();
if(cljs.core.truth_(inst_49715)){
var statearr_49761_49843 = state_49738__$1;
(statearr_49761_49843[(1)] = (41));

} else {
var statearr_49762_49844 = state_49738__$1;
(statearr_49762_49844[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (33))){
var state_49738__$1 = state_49738;
var statearr_49763_49845 = state_49738__$1;
(statearr_49763_49845[(2)] = false);

(statearr_49763_49845[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (13))){
var inst_49612 = (state_49738[(22)]);
var inst_49616 = cljs.core.chunk_first.call(null,inst_49612);
var inst_49617 = cljs.core.chunk_rest.call(null,inst_49612);
var inst_49618 = cljs.core.count.call(null,inst_49616);
var inst_49599 = inst_49617;
var inst_49600 = inst_49616;
var inst_49601 = inst_49618;
var inst_49602 = (0);
var state_49738__$1 = (function (){var statearr_49764 = state_49738;
(statearr_49764[(7)] = inst_49602);

(statearr_49764[(8)] = inst_49599);

(statearr_49764[(9)] = inst_49600);

(statearr_49764[(10)] = inst_49601);

return statearr_49764;
})();
var statearr_49765_49846 = state_49738__$1;
(statearr_49765_49846[(2)] = null);

(statearr_49765_49846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (22))){
var inst_49660 = (state_49738[(23)]);
var inst_49656 = (state_49738[(24)]);
var inst_49655 = (state_49738[(25)]);
var inst_49652 = (state_49738[(19)]);
var inst_49655__$1 = (state_49738[(2)]);
var inst_49656__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49655__$1);
var inst_49657 = (function (){var all_files = inst_49652;
var res_SINGLEQUOTE_ = inst_49655__$1;
var res = inst_49656__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49660,inst_49656,inst_49655,inst_49652,inst_49655__$1,inst_49656__$1,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49335_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49335_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49660,inst_49656,inst_49655,inst_49652,inst_49655__$1,inst_49656__$1,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49658 = cljs.core.filter.call(null,inst_49657,inst_49655__$1);
var inst_49659 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49660__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49659);
var inst_49661 = cljs.core.not_empty.call(null,inst_49660__$1);
var state_49738__$1 = (function (){var statearr_49766 = state_49738;
(statearr_49766[(23)] = inst_49660__$1);

(statearr_49766[(24)] = inst_49656__$1);

(statearr_49766[(26)] = inst_49658);

(statearr_49766[(25)] = inst_49655__$1);

return statearr_49766;
})();
if(cljs.core.truth_(inst_49661)){
var statearr_49767_49847 = state_49738__$1;
(statearr_49767_49847[(1)] = (23));

} else {
var statearr_49768_49848 = state_49738__$1;
(statearr_49768_49848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (36))){
var state_49738__$1 = state_49738;
var statearr_49769_49849 = state_49738__$1;
(statearr_49769_49849[(2)] = false);

(statearr_49769_49849[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (41))){
var inst_49713 = (state_49738[(20)]);
var inst_49717 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49718 = cljs.core.map.call(null,inst_49717,inst_49713);
var inst_49719 = cljs.core.pr_str.call(null,inst_49718);
var inst_49720 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_49719)].join('');
var inst_49721 = figwheel.client.utils.log.call(null,inst_49720);
var state_49738__$1 = state_49738;
var statearr_49770_49850 = state_49738__$1;
(statearr_49770_49850[(2)] = inst_49721);

(statearr_49770_49850[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (43))){
var inst_49714 = (state_49738[(21)]);
var inst_49724 = (state_49738[(2)]);
var inst_49725 = cljs.core.not_empty.call(null,inst_49714);
var state_49738__$1 = (function (){var statearr_49771 = state_49738;
(statearr_49771[(27)] = inst_49724);

return statearr_49771;
})();
if(cljs.core.truth_(inst_49725)){
var statearr_49772_49851 = state_49738__$1;
(statearr_49772_49851[(1)] = (44));

} else {
var statearr_49773_49852 = state_49738__$1;
(statearr_49773_49852[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (29))){
var inst_49660 = (state_49738[(23)]);
var inst_49656 = (state_49738[(24)]);
var inst_49658 = (state_49738[(26)]);
var inst_49692 = (state_49738[(16)]);
var inst_49655 = (state_49738[(25)]);
var inst_49652 = (state_49738[(19)]);
var inst_49688 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49691 = (function (){var all_files = inst_49652;
var res_SINGLEQUOTE_ = inst_49655;
var res = inst_49656;
var files_not_loaded = inst_49658;
var dependencies_that_loaded = inst_49660;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49660,inst_49656,inst_49658,inst_49692,inst_49655,inst_49652,inst_49688,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49690){
var map__49774 = p__49690;
var map__49774__$1 = ((((!((map__49774 == null)))?((((map__49774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49774):map__49774);
var namespace = cljs.core.get.call(null,map__49774__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49660,inst_49656,inst_49658,inst_49692,inst_49655,inst_49652,inst_49688,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49692__$1 = cljs.core.group_by.call(null,inst_49691,inst_49658);
var inst_49694 = (inst_49692__$1 == null);
var inst_49695 = cljs.core.not.call(null,inst_49694);
var state_49738__$1 = (function (){var statearr_49776 = state_49738;
(statearr_49776[(16)] = inst_49692__$1);

(statearr_49776[(28)] = inst_49688);

return statearr_49776;
})();
if(inst_49695){
var statearr_49777_49853 = state_49738__$1;
(statearr_49777_49853[(1)] = (32));

} else {
var statearr_49778_49854 = state_49738__$1;
(statearr_49778_49854[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (44))){
var inst_49714 = (state_49738[(21)]);
var inst_49727 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49714);
var inst_49728 = cljs.core.pr_str.call(null,inst_49727);
var inst_49729 = [cljs.core.str("not required: "),cljs.core.str(inst_49728)].join('');
var inst_49730 = figwheel.client.utils.log.call(null,inst_49729);
var state_49738__$1 = state_49738;
var statearr_49779_49855 = state_49738__$1;
(statearr_49779_49855[(2)] = inst_49730);

(statearr_49779_49855[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (6))){
var inst_49633 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
var statearr_49780_49856 = state_49738__$1;
(statearr_49780_49856[(2)] = inst_49633);

(statearr_49780_49856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (28))){
var inst_49658 = (state_49738[(26)]);
var inst_49685 = (state_49738[(2)]);
var inst_49686 = cljs.core.not_empty.call(null,inst_49658);
var state_49738__$1 = (function (){var statearr_49781 = state_49738;
(statearr_49781[(29)] = inst_49685);

return statearr_49781;
})();
if(cljs.core.truth_(inst_49686)){
var statearr_49782_49857 = state_49738__$1;
(statearr_49782_49857[(1)] = (29));

} else {
var statearr_49783_49858 = state_49738__$1;
(statearr_49783_49858[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (25))){
var inst_49656 = (state_49738[(24)]);
var inst_49672 = (state_49738[(2)]);
var inst_49673 = cljs.core.not_empty.call(null,inst_49656);
var state_49738__$1 = (function (){var statearr_49784 = state_49738;
(statearr_49784[(30)] = inst_49672);

return statearr_49784;
})();
if(cljs.core.truth_(inst_49673)){
var statearr_49785_49859 = state_49738__$1;
(statearr_49785_49859[(1)] = (26));

} else {
var statearr_49786_49860 = state_49738__$1;
(statearr_49786_49860[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (34))){
var inst_49707 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
if(cljs.core.truth_(inst_49707)){
var statearr_49787_49861 = state_49738__$1;
(statearr_49787_49861[(1)] = (38));

} else {
var statearr_49788_49862 = state_49738__$1;
(statearr_49788_49862[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (17))){
var state_49738__$1 = state_49738;
var statearr_49789_49863 = state_49738__$1;
(statearr_49789_49863[(2)] = recompile_dependents);

(statearr_49789_49863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (3))){
var state_49738__$1 = state_49738;
var statearr_49790_49864 = state_49738__$1;
(statearr_49790_49864[(2)] = null);

(statearr_49790_49864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (12))){
var inst_49629 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
var statearr_49791_49865 = state_49738__$1;
(statearr_49791_49865[(2)] = inst_49629);

(statearr_49791_49865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (2))){
var inst_49591 = (state_49738[(13)]);
var inst_49598 = cljs.core.seq.call(null,inst_49591);
var inst_49599 = inst_49598;
var inst_49600 = null;
var inst_49601 = (0);
var inst_49602 = (0);
var state_49738__$1 = (function (){var statearr_49792 = state_49738;
(statearr_49792[(7)] = inst_49602);

(statearr_49792[(8)] = inst_49599);

(statearr_49792[(9)] = inst_49600);

(statearr_49792[(10)] = inst_49601);

return statearr_49792;
})();
var statearr_49793_49866 = state_49738__$1;
(statearr_49793_49866[(2)] = null);

(statearr_49793_49866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (23))){
var inst_49660 = (state_49738[(23)]);
var inst_49656 = (state_49738[(24)]);
var inst_49658 = (state_49738[(26)]);
var inst_49655 = (state_49738[(25)]);
var inst_49652 = (state_49738[(19)]);
var inst_49663 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49665 = (function (){var all_files = inst_49652;
var res_SINGLEQUOTE_ = inst_49655;
var res = inst_49656;
var files_not_loaded = inst_49658;
var dependencies_that_loaded = inst_49660;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49660,inst_49656,inst_49658,inst_49655,inst_49652,inst_49663,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49664){
var map__49794 = p__49664;
var map__49794__$1 = ((((!((map__49794 == null)))?((((map__49794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49794):map__49794);
var request_url = cljs.core.get.call(null,map__49794__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49660,inst_49656,inst_49658,inst_49655,inst_49652,inst_49663,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49666 = cljs.core.reverse.call(null,inst_49660);
var inst_49667 = cljs.core.map.call(null,inst_49665,inst_49666);
var inst_49668 = cljs.core.pr_str.call(null,inst_49667);
var inst_49669 = figwheel.client.utils.log.call(null,inst_49668);
var state_49738__$1 = (function (){var statearr_49796 = state_49738;
(statearr_49796[(31)] = inst_49663);

return statearr_49796;
})();
var statearr_49797_49867 = state_49738__$1;
(statearr_49797_49867[(2)] = inst_49669);

(statearr_49797_49867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (35))){
var state_49738__$1 = state_49738;
var statearr_49798_49868 = state_49738__$1;
(statearr_49798_49868[(2)] = true);

(statearr_49798_49868[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (19))){
var inst_49642 = (state_49738[(12)]);
var inst_49648 = figwheel.client.file_reloading.expand_files.call(null,inst_49642);
var state_49738__$1 = state_49738;
var statearr_49799_49869 = state_49738__$1;
(statearr_49799_49869[(2)] = inst_49648);

(statearr_49799_49869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (11))){
var state_49738__$1 = state_49738;
var statearr_49800_49870 = state_49738__$1;
(statearr_49800_49870[(2)] = null);

(statearr_49800_49870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (9))){
var inst_49631 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
var statearr_49801_49871 = state_49738__$1;
(statearr_49801_49871[(2)] = inst_49631);

(statearr_49801_49871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (5))){
var inst_49602 = (state_49738[(7)]);
var inst_49601 = (state_49738[(10)]);
var inst_49604 = (inst_49602 < inst_49601);
var inst_49605 = inst_49604;
var state_49738__$1 = state_49738;
if(cljs.core.truth_(inst_49605)){
var statearr_49802_49872 = state_49738__$1;
(statearr_49802_49872[(1)] = (7));

} else {
var statearr_49803_49873 = state_49738__$1;
(statearr_49803_49873[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (14))){
var inst_49612 = (state_49738[(22)]);
var inst_49621 = cljs.core.first.call(null,inst_49612);
var inst_49622 = figwheel.client.file_reloading.eval_body.call(null,inst_49621,opts);
var inst_49623 = cljs.core.next.call(null,inst_49612);
var inst_49599 = inst_49623;
var inst_49600 = null;
var inst_49601 = (0);
var inst_49602 = (0);
var state_49738__$1 = (function (){var statearr_49804 = state_49738;
(statearr_49804[(7)] = inst_49602);

(statearr_49804[(8)] = inst_49599);

(statearr_49804[(9)] = inst_49600);

(statearr_49804[(10)] = inst_49601);

(statearr_49804[(32)] = inst_49622);

return statearr_49804;
})();
var statearr_49805_49874 = state_49738__$1;
(statearr_49805_49874[(2)] = null);

(statearr_49805_49874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (45))){
var state_49738__$1 = state_49738;
var statearr_49806_49875 = state_49738__$1;
(statearr_49806_49875[(2)] = null);

(statearr_49806_49875[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (26))){
var inst_49660 = (state_49738[(23)]);
var inst_49656 = (state_49738[(24)]);
var inst_49658 = (state_49738[(26)]);
var inst_49655 = (state_49738[(25)]);
var inst_49652 = (state_49738[(19)]);
var inst_49675 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49677 = (function (){var all_files = inst_49652;
var res_SINGLEQUOTE_ = inst_49655;
var res = inst_49656;
var files_not_loaded = inst_49658;
var dependencies_that_loaded = inst_49660;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49660,inst_49656,inst_49658,inst_49655,inst_49652,inst_49675,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49676){
var map__49807 = p__49676;
var map__49807__$1 = ((((!((map__49807 == null)))?((((map__49807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49807):map__49807);
var namespace = cljs.core.get.call(null,map__49807__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49660,inst_49656,inst_49658,inst_49655,inst_49652,inst_49675,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49678 = cljs.core.map.call(null,inst_49677,inst_49656);
var inst_49679 = cljs.core.pr_str.call(null,inst_49678);
var inst_49680 = figwheel.client.utils.log.call(null,inst_49679);
var inst_49681 = (function (){var all_files = inst_49652;
var res_SINGLEQUOTE_ = inst_49655;
var res = inst_49656;
var files_not_loaded = inst_49658;
var dependencies_that_loaded = inst_49660;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49660,inst_49656,inst_49658,inst_49655,inst_49652,inst_49675,inst_49677,inst_49678,inst_49679,inst_49680,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49660,inst_49656,inst_49658,inst_49655,inst_49652,inst_49675,inst_49677,inst_49678,inst_49679,inst_49680,state_val_49739,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49682 = setTimeout(inst_49681,(10));
var state_49738__$1 = (function (){var statearr_49809 = state_49738;
(statearr_49809[(33)] = inst_49680);

(statearr_49809[(34)] = inst_49675);

return statearr_49809;
})();
var statearr_49810_49876 = state_49738__$1;
(statearr_49810_49876[(2)] = inst_49682);

(statearr_49810_49876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (16))){
var state_49738__$1 = state_49738;
var statearr_49811_49877 = state_49738__$1;
(statearr_49811_49877[(2)] = reload_dependents);

(statearr_49811_49877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (38))){
var inst_49692 = (state_49738[(16)]);
var inst_49709 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49692);
var state_49738__$1 = state_49738;
var statearr_49812_49878 = state_49738__$1;
(statearr_49812_49878[(2)] = inst_49709);

(statearr_49812_49878[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (30))){
var state_49738__$1 = state_49738;
var statearr_49813_49879 = state_49738__$1;
(statearr_49813_49879[(2)] = null);

(statearr_49813_49879[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (10))){
var inst_49612 = (state_49738[(22)]);
var inst_49614 = cljs.core.chunked_seq_QMARK_.call(null,inst_49612);
var state_49738__$1 = state_49738;
if(inst_49614){
var statearr_49814_49880 = state_49738__$1;
(statearr_49814_49880[(1)] = (13));

} else {
var statearr_49815_49881 = state_49738__$1;
(statearr_49815_49881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (18))){
var inst_49646 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
if(cljs.core.truth_(inst_49646)){
var statearr_49816_49882 = state_49738__$1;
(statearr_49816_49882[(1)] = (19));

} else {
var statearr_49817_49883 = state_49738__$1;
(statearr_49817_49883[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (42))){
var state_49738__$1 = state_49738;
var statearr_49818_49884 = state_49738__$1;
(statearr_49818_49884[(2)] = null);

(statearr_49818_49884[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (37))){
var inst_49704 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
var statearr_49819_49885 = state_49738__$1;
(statearr_49819_49885[(2)] = inst_49704);

(statearr_49819_49885[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (8))){
var inst_49599 = (state_49738[(8)]);
var inst_49612 = (state_49738[(22)]);
var inst_49612__$1 = cljs.core.seq.call(null,inst_49599);
var state_49738__$1 = (function (){var statearr_49820 = state_49738;
(statearr_49820[(22)] = inst_49612__$1);

return statearr_49820;
})();
if(inst_49612__$1){
var statearr_49821_49886 = state_49738__$1;
(statearr_49821_49886[(1)] = (10));

} else {
var statearr_49822_49887 = state_49738__$1;
(statearr_49822_49887[(1)] = (11));

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
});})(c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44053__auto__,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto____0 = (function (){
var statearr_49826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49826[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto__);

(statearr_49826[(1)] = (1));

return statearr_49826;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto____1 = (function (state_49738){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_49738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e49827){if((e49827 instanceof Object)){
var ex__44057__auto__ = e49827;
var statearr_49828_49888 = state_49738;
(statearr_49828_49888[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49889 = state_49738;
state_49738 = G__49889;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto__ = function(state_49738){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto____1.call(this,state_49738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44167__auto__ = (function (){var statearr_49829 = f__44166__auto__.call(null);
(statearr_49829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_49829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__,map__49584,map__49584__$1,opts,before_jsload,on_jsload,reload_dependents,map__49585,map__49585__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44165__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49892,link){
var map__49895 = p__49892;
var map__49895__$1 = ((((!((map__49895 == null)))?((((map__49895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49895):map__49895);
var file = cljs.core.get.call(null,map__49895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__49895,map__49895__$1,file){
return (function (p1__49890_SHARP_,p2__49891_SHARP_){
if(cljs.core._EQ_.call(null,p1__49890_SHARP_,p2__49891_SHARP_)){
return p1__49890_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__49895,map__49895__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49901){
var map__49902 = p__49901;
var map__49902__$1 = ((((!((map__49902 == null)))?((((map__49902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49902):map__49902);
var match_length = cljs.core.get.call(null,map__49902__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49902__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49897_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49897_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49904_SHARP_,p2__49905_SHARP_){
return cljs.core.assoc.call(null,p1__49904_SHARP_,cljs.core.get.call(null,p2__49905_SHARP_,key),p2__49905_SHARP_);
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
var loaded_f_datas_49906 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49906);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49906);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49907,p__49908){
var map__49913 = p__49907;
var map__49913__$1 = ((((!((map__49913 == null)))?((((map__49913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49913):map__49913);
var on_cssload = cljs.core.get.call(null,map__49913__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49914 = p__49908;
var map__49914__$1 = ((((!((map__49914 == null)))?((((map__49914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49914):map__49914);
var files_msg = map__49914__$1;
var files = cljs.core.get.call(null,map__49914__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1504724085040