// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x55804_55805 = value;
x55804_55805.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x55809_55810 = value;
x55809_55810.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x55814_55815 = value;
x55814_55815.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__41981__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__41981__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__41981__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__43075__auto__ = [];
var len__43068__auto___55823 = arguments.length;
var i__43069__auto___55824 = (0);
while(true){
if((i__43069__auto___55824 < len__43068__auto___55823)){
args__43075__auto__.push((arguments[i__43069__auto___55824]));

var G__55825 = (i__43069__auto___55824 + (1));
i__43069__auto___55824 = G__55825;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__55819_55826 = cljs.core.seq.call(null,items);
var chunk__55820_55827 = null;
var count__55821_55828 = (0);
var i__55822_55829 = (0);
while(true){
if((i__55822_55829 < count__55821_55828)){
var item_55830 = cljs.core._nth.call(null,chunk__55820_55827,i__55822_55829);
if(cljs.core.some_QMARK_.call(null,item_55830)){
if(cljs.core.coll_QMARK_.call(null,item_55830)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_55830)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_55830));
}
} else {
}

var G__55831 = seq__55819_55826;
var G__55832 = chunk__55820_55827;
var G__55833 = count__55821_55828;
var G__55834 = (i__55822_55829 + (1));
seq__55819_55826 = G__55831;
chunk__55820_55827 = G__55832;
count__55821_55828 = G__55833;
i__55822_55829 = G__55834;
continue;
} else {
var temp__4657__auto___55835 = cljs.core.seq.call(null,seq__55819_55826);
if(temp__4657__auto___55835){
var seq__55819_55836__$1 = temp__4657__auto___55835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55819_55836__$1)){
var c__42804__auto___55837 = cljs.core.chunk_first.call(null,seq__55819_55836__$1);
var G__55838 = cljs.core.chunk_rest.call(null,seq__55819_55836__$1);
var G__55839 = c__42804__auto___55837;
var G__55840 = cljs.core.count.call(null,c__42804__auto___55837);
var G__55841 = (0);
seq__55819_55826 = G__55838;
chunk__55820_55827 = G__55839;
count__55821_55828 = G__55840;
i__55822_55829 = G__55841;
continue;
} else {
var item_55842 = cljs.core.first.call(null,seq__55819_55836__$1);
if(cljs.core.some_QMARK_.call(null,item_55842)){
if(cljs.core.coll_QMARK_.call(null,item_55842)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_55842)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_55842));
}
} else {
}

var G__55843 = cljs.core.next.call(null,seq__55819_55836__$1);
var G__55844 = null;
var G__55845 = (0);
var G__55846 = (0);
seq__55819_55826 = G__55843;
chunk__55820_55827 = G__55844;
count__55821_55828 = G__55845;
i__55822_55829 = G__55846;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq55818){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55818));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__43075__auto__ = [];
var len__43068__auto___55854 = arguments.length;
var i__43069__auto___55855 = (0);
while(true){
if((i__43069__auto___55855 < len__43068__auto___55854)){
args__43075__auto__.push((arguments[i__43069__auto___55855]));

var G__55856 = (i__43069__auto___55855 + (1));
i__43069__auto___55855 = G__55856;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((2) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__43076__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__55850_55857 = cljs.core.seq.call(null,children);
var chunk__55851_55858 = null;
var count__55852_55859 = (0);
var i__55853_55860 = (0);
while(true){
if((i__55853_55860 < count__55852_55859)){
var child_55861 = cljs.core._nth.call(null,chunk__55851_55858,i__55853_55860);
if(cljs.core.some_QMARK_.call(null,child_55861)){
if(cljs.core.coll_QMARK_.call(null,child_55861)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_55861))));
} else {
var temp__4655__auto___55862 = devtools.formatters.helpers.pref.call(null,child_55861);
if(cljs.core.truth_(temp__4655__auto___55862)){
var child_value_55863 = temp__4655__auto___55862;
template.push(child_value_55863);
} else {
}
}
} else {
}

var G__55864 = seq__55850_55857;
var G__55865 = chunk__55851_55858;
var G__55866 = count__55852_55859;
var G__55867 = (i__55853_55860 + (1));
seq__55850_55857 = G__55864;
chunk__55851_55858 = G__55865;
count__55852_55859 = G__55866;
i__55853_55860 = G__55867;
continue;
} else {
var temp__4657__auto___55868 = cljs.core.seq.call(null,seq__55850_55857);
if(temp__4657__auto___55868){
var seq__55850_55869__$1 = temp__4657__auto___55868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55850_55869__$1)){
var c__42804__auto___55870 = cljs.core.chunk_first.call(null,seq__55850_55869__$1);
var G__55871 = cljs.core.chunk_rest.call(null,seq__55850_55869__$1);
var G__55872 = c__42804__auto___55870;
var G__55873 = cljs.core.count.call(null,c__42804__auto___55870);
var G__55874 = (0);
seq__55850_55857 = G__55871;
chunk__55851_55858 = G__55872;
count__55852_55859 = G__55873;
i__55853_55860 = G__55874;
continue;
} else {
var child_55875 = cljs.core.first.call(null,seq__55850_55869__$1);
if(cljs.core.some_QMARK_.call(null,child_55875)){
if(cljs.core.coll_QMARK_.call(null,child_55875)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_55875))));
} else {
var temp__4655__auto___55876 = devtools.formatters.helpers.pref.call(null,child_55875);
if(cljs.core.truth_(temp__4655__auto___55876)){
var child_value_55877 = temp__4655__auto___55876;
template.push(child_value_55877);
} else {
}
}
} else {
}

var G__55878 = cljs.core.next.call(null,seq__55850_55869__$1);
var G__55879 = null;
var G__55880 = (0);
var G__55881 = (0);
seq__55850_55857 = G__55878;
chunk__55851_55858 = G__55879;
count__55852_55859 = G__55880;
i__55853_55860 = G__55881;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq55847){
var G__55848 = cljs.core.first.call(null,seq55847);
var seq55847__$1 = cljs.core.next.call(null,seq55847);
var G__55849 = cljs.core.first.call(null,seq55847__$1);
var seq55847__$2 = cljs.core.next.call(null,seq55847__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__55848,G__55849,seq55847__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__43075__auto__ = [];
var len__43068__auto___55884 = arguments.length;
var i__43069__auto___55885 = (0);
while(true){
if((i__43069__auto___55885 < len__43068__auto___55884)){
args__43075__auto__.push((arguments[i__43069__auto___55885]));

var G__55886 = (i__43069__auto___55885 + (1));
i__43069__auto___55885 = G__55886;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((1) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43076__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq55882){
var G__55883 = cljs.core.first.call(null,seq55882);
var seq55882__$1 = cljs.core.next.call(null,seq55882);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55883,seq55882__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__43075__auto__ = [];
var len__43068__auto___55889 = arguments.length;
var i__43069__auto___55890 = (0);
while(true){
if((i__43069__auto___55890 < len__43068__auto___55889)){
args__43075__auto__.push((arguments[i__43069__auto___55890]));

var G__55891 = (i__43069__auto___55890 + (1));
i__43069__auto___55890 = G__55891;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((1) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43076__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq55887){
var G__55888 = cljs.core.first.call(null,seq55887);
var seq55887__$1 = cljs.core.next.call(null,seq55887);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55888,seq55887__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args55892 = [];
var len__43068__auto___55897 = arguments.length;
var i__43069__auto___55898 = (0);
while(true){
if((i__43069__auto___55898 < len__43068__auto___55897)){
args55892.push((arguments[i__43069__auto___55898]));

var G__55899 = (i__43069__auto___55898 + (1));
i__43069__auto___55898 = G__55899;
continue;
} else {
}
break;
}

var G__55894 = args55892.length;
switch (G__55894) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55892.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj55896 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__41993__auto__ = start_index;
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
return (0);
}
})()};
return obj55896;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__43075__auto__ = [];
var len__43068__auto___55907 = arguments.length;
var i__43069__auto___55908 = (0);
while(true){
if((i__43069__auto___55908 < len__43068__auto___55907)){
args__43075__auto__.push((arguments[i__43069__auto___55908]));

var G__55909 = (i__43069__auto___55908 + (1));
i__43069__auto___55908 = G__55909;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((1) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43076__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__55903){
var vec__55904 = p__55903;
var state_override_fn = cljs.core.nth.call(null,vec__55904,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq55901){
var G__55902 = cljs.core.first.call(null,seq55901);
var seq55901__$1 = cljs.core.next.call(null,seq55901);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__55902,seq55901__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__42979__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_55913_55916 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_55914_55917 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_55913_55916,_STAR_print_fn_STAR_55914_55917,sb__42979__auto__){
return (function (x__42980__auto__){
return sb__42979__auto__.append(x__42980__auto__);
});})(_STAR_print_newline_STAR_55913_55916,_STAR_print_fn_STAR_55914_55917,sb__42979__auto__))
;

try{var _STAR_print_level_STAR_55915_55918 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_55915_55918;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_55914_55917;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_55913_55916;
}
return [cljs.core.str(sb__42979__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_55920 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_55920;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__55922 = name;
switch (G__55922) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__55927 = tag;
var html_tag = cljs.core.nth.call(null,vec__55927,(0),null);
var style = cljs.core.nth.call(null,vec__55927,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_55931 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_55931;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_55934 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_55935 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_55935;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_55934;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__55936 = initial_value;
var G__55937 = value.call(null);
initial_value = G__55936;
value = G__55937;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__55938 = initial_value;
var G__55939 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__55938;
value = G__55939;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__55940 = initial_value;
var G__55941 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__55940;
value = G__55941;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1504724092841