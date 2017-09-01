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
var x55809_55810 = value;
x55809_55810.devtools$protocols$IGroup$ = true;


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
var x55814_55815 = value;
x55814_55815.devtools$protocols$ITemplate$ = true;


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
var x55819_55820 = value;
x55819_55820.devtools$protocols$ISurrogate$ = true;


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
var len__43068__auto___55828 = arguments.length;
var i__43069__auto___55829 = (0);
while(true){
if((i__43069__auto___55829 < len__43068__auto___55828)){
args__43075__auto__.push((arguments[i__43069__auto___55829]));

var G__55830 = (i__43069__auto___55829 + (1));
i__43069__auto___55829 = G__55830;
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
var seq__55824_55831 = cljs.core.seq.call(null,items);
var chunk__55825_55832 = null;
var count__55826_55833 = (0);
var i__55827_55834 = (0);
while(true){
if((i__55827_55834 < count__55826_55833)){
var item_55835 = cljs.core._nth.call(null,chunk__55825_55832,i__55827_55834);
if(cljs.core.some_QMARK_.call(null,item_55835)){
if(cljs.core.coll_QMARK_.call(null,item_55835)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_55835)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_55835));
}
} else {
}

var G__55836 = seq__55824_55831;
var G__55837 = chunk__55825_55832;
var G__55838 = count__55826_55833;
var G__55839 = (i__55827_55834 + (1));
seq__55824_55831 = G__55836;
chunk__55825_55832 = G__55837;
count__55826_55833 = G__55838;
i__55827_55834 = G__55839;
continue;
} else {
var temp__4657__auto___55840 = cljs.core.seq.call(null,seq__55824_55831);
if(temp__4657__auto___55840){
var seq__55824_55841__$1 = temp__4657__auto___55840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55824_55841__$1)){
var c__42804__auto___55842 = cljs.core.chunk_first.call(null,seq__55824_55841__$1);
var G__55843 = cljs.core.chunk_rest.call(null,seq__55824_55841__$1);
var G__55844 = c__42804__auto___55842;
var G__55845 = cljs.core.count.call(null,c__42804__auto___55842);
var G__55846 = (0);
seq__55824_55831 = G__55843;
chunk__55825_55832 = G__55844;
count__55826_55833 = G__55845;
i__55827_55834 = G__55846;
continue;
} else {
var item_55847 = cljs.core.first.call(null,seq__55824_55841__$1);
if(cljs.core.some_QMARK_.call(null,item_55847)){
if(cljs.core.coll_QMARK_.call(null,item_55847)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_55847)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_55847));
}
} else {
}

var G__55848 = cljs.core.next.call(null,seq__55824_55841__$1);
var G__55849 = null;
var G__55850 = (0);
var G__55851 = (0);
seq__55824_55831 = G__55848;
chunk__55825_55832 = G__55849;
count__55826_55833 = G__55850;
i__55827_55834 = G__55851;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq55823){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55823));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__43075__auto__ = [];
var len__43068__auto___55859 = arguments.length;
var i__43069__auto___55860 = (0);
while(true){
if((i__43069__auto___55860 < len__43068__auto___55859)){
args__43075__auto__.push((arguments[i__43069__auto___55860]));

var G__55861 = (i__43069__auto___55860 + (1));
i__43069__auto___55860 = G__55861;
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
var seq__55855_55862 = cljs.core.seq.call(null,children);
var chunk__55856_55863 = null;
var count__55857_55864 = (0);
var i__55858_55865 = (0);
while(true){
if((i__55858_55865 < count__55857_55864)){
var child_55866 = cljs.core._nth.call(null,chunk__55856_55863,i__55858_55865);
if(cljs.core.some_QMARK_.call(null,child_55866)){
if(cljs.core.coll_QMARK_.call(null,child_55866)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_55866))));
} else {
var temp__4655__auto___55867 = devtools.formatters.helpers.pref.call(null,child_55866);
if(cljs.core.truth_(temp__4655__auto___55867)){
var child_value_55868 = temp__4655__auto___55867;
template.push(child_value_55868);
} else {
}
}
} else {
}

var G__55869 = seq__55855_55862;
var G__55870 = chunk__55856_55863;
var G__55871 = count__55857_55864;
var G__55872 = (i__55858_55865 + (1));
seq__55855_55862 = G__55869;
chunk__55856_55863 = G__55870;
count__55857_55864 = G__55871;
i__55858_55865 = G__55872;
continue;
} else {
var temp__4657__auto___55873 = cljs.core.seq.call(null,seq__55855_55862);
if(temp__4657__auto___55873){
var seq__55855_55874__$1 = temp__4657__auto___55873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55855_55874__$1)){
var c__42804__auto___55875 = cljs.core.chunk_first.call(null,seq__55855_55874__$1);
var G__55876 = cljs.core.chunk_rest.call(null,seq__55855_55874__$1);
var G__55877 = c__42804__auto___55875;
var G__55878 = cljs.core.count.call(null,c__42804__auto___55875);
var G__55879 = (0);
seq__55855_55862 = G__55876;
chunk__55856_55863 = G__55877;
count__55857_55864 = G__55878;
i__55858_55865 = G__55879;
continue;
} else {
var child_55880 = cljs.core.first.call(null,seq__55855_55874__$1);
if(cljs.core.some_QMARK_.call(null,child_55880)){
if(cljs.core.coll_QMARK_.call(null,child_55880)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_55880))));
} else {
var temp__4655__auto___55881 = devtools.formatters.helpers.pref.call(null,child_55880);
if(cljs.core.truth_(temp__4655__auto___55881)){
var child_value_55882 = temp__4655__auto___55881;
template.push(child_value_55882);
} else {
}
}
} else {
}

var G__55883 = cljs.core.next.call(null,seq__55855_55874__$1);
var G__55884 = null;
var G__55885 = (0);
var G__55886 = (0);
seq__55855_55862 = G__55883;
chunk__55856_55863 = G__55884;
count__55857_55864 = G__55885;
i__55858_55865 = G__55886;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq55852){
var G__55853 = cljs.core.first.call(null,seq55852);
var seq55852__$1 = cljs.core.next.call(null,seq55852);
var G__55854 = cljs.core.first.call(null,seq55852__$1);
var seq55852__$2 = cljs.core.next.call(null,seq55852__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__55853,G__55854,seq55852__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
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
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43076__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq55887){
var G__55888 = cljs.core.first.call(null,seq55887);
var seq55887__$1 = cljs.core.next.call(null,seq55887);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55888,seq55887__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__43075__auto__ = [];
var len__43068__auto___55894 = arguments.length;
var i__43069__auto___55895 = (0);
while(true){
if((i__43069__auto___55895 < len__43068__auto___55894)){
args__43075__auto__.push((arguments[i__43069__auto___55895]));

var G__55896 = (i__43069__auto___55895 + (1));
i__43069__auto___55895 = G__55896;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq55892){
var G__55893 = cljs.core.first.call(null,seq55892);
var seq55892__$1 = cljs.core.next.call(null,seq55892);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55893,seq55892__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args55897 = [];
var len__43068__auto___55902 = arguments.length;
var i__43069__auto___55903 = (0);
while(true){
if((i__43069__auto___55903 < len__43068__auto___55902)){
args55897.push((arguments[i__43069__auto___55903]));

var G__55904 = (i__43069__auto___55903 + (1));
i__43069__auto___55903 = G__55904;
continue;
} else {
}
break;
}

var G__55899 = args55897.length;
switch (G__55899) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55897.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj55901 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__41993__auto__ = start_index;
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
return (0);
}
})()};
return obj55901;
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
var len__43068__auto___55912 = arguments.length;
var i__43069__auto___55913 = (0);
while(true){
if((i__43069__auto___55913 < len__43068__auto___55912)){
args__43075__auto__.push((arguments[i__43069__auto___55913]));

var G__55914 = (i__43069__auto___55913 + (1));
i__43069__auto___55913 = G__55914;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((1) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43076__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__55908){
var vec__55909 = p__55908;
var state_override_fn = cljs.core.nth.call(null,vec__55909,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq55906){
var G__55907 = cljs.core.first.call(null,seq55906);
var seq55906__$1 = cljs.core.next.call(null,seq55906);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__55907,seq55906__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__42979__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_55918_55921 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_55919_55922 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_55918_55921,_STAR_print_fn_STAR_55919_55922,sb__42979__auto__){
return (function (x__42980__auto__){
return sb__42979__auto__.append(x__42980__auto__);
});})(_STAR_print_newline_STAR_55918_55921,_STAR_print_fn_STAR_55919_55922,sb__42979__auto__))
;

try{var _STAR_print_level_STAR_55920_55923 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_55920_55923;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_55919_55922;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_55918_55921;
}
return [cljs.core.str(sb__42979__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_55925 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_55925;
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
var G__55927 = name;
switch (G__55927) {
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
var vec__55932 = tag;
var html_tag = cljs.core.nth.call(null,vec__55932,(0),null);
var style = cljs.core.nth.call(null,vec__55932,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_55936 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_55936;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_55939 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_55940 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_55940;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_55939;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__55941 = initial_value;
var G__55942 = value.call(null);
initial_value = G__55941;
value = G__55942;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__55943 = initial_value;
var G__55944 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__55943;
value = G__55944;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__55945 = initial_value;
var G__55946 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__55945;
value = G__55946;
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

//# sourceMappingURL=templating.js.map?rel=1504122786251