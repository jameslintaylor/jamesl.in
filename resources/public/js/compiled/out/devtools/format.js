// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__42656__auto__ = (((value == null))?null:value);
var m__42657__auto__ = (devtools.format._header[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,value);
} else {
var m__42657__auto____$1 = (devtools.format._header["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__42656__auto__ = (((value == null))?null:value);
var m__42657__auto__ = (devtools.format._has_body[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,value);
} else {
var m__42657__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__42656__auto__ = (((value == null))?null:value);
var m__42657__auto__ = (devtools.format._body[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,value);
} else {
var m__42657__auto____$1 = (devtools.format._body["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54642__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54642__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54642__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54642__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54641__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54641__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54642__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54642__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54642__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54642__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54641__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54641__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54642__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54642__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54642__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54642__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54641__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54641__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54642__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54642__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54642__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54642__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54641__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54641__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54642__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54642__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54642__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54642__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54641__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54641__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54642__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54642__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54642__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54642__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54641__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54641__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54642__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54642__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54642__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54642__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54641__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54641__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54663 = arguments.length;
var i__43069__auto___54664 = (0);
while(true){
if((i__43069__auto___54664 < len__43068__auto___54663)){
args__43075__auto__.push((arguments[i__43069__auto___54664]));

var G__54665 = (i__43069__auto___54664 + (1));
i__43069__auto___54664 = G__54665;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq54662){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54662));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54667 = arguments.length;
var i__43069__auto___54668 = (0);
while(true){
if((i__43069__auto___54668 < len__43068__auto___54667)){
args__43075__auto__.push((arguments[i__43069__auto___54668]));

var G__54669 = (i__43069__auto___54668 + (1));
i__43069__auto___54668 = G__54669;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq54666){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54666));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54671 = arguments.length;
var i__43069__auto___54672 = (0);
while(true){
if((i__43069__auto___54672 < len__43068__auto___54671)){
args__43075__auto__.push((arguments[i__43069__auto___54672]));

var G__54673 = (i__43069__auto___54672 + (1));
i__43069__auto___54672 = G__54673;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq54670){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54670));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54675 = arguments.length;
var i__43069__auto___54676 = (0);
while(true){
if((i__43069__auto___54676 < len__43068__auto___54675)){
args__43075__auto__.push((arguments[i__43069__auto___54676]));

var G__54677 = (i__43069__auto___54676 + (1));
i__43069__auto___54676 = G__54677;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq54674){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54674));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54679 = arguments.length;
var i__43069__auto___54680 = (0);
while(true){
if((i__43069__auto___54680 < len__43068__auto___54679)){
args__43075__auto__.push((arguments[i__43069__auto___54680]));

var G__54681 = (i__43069__auto___54680 + (1));
i__43069__auto___54680 = G__54681;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq54678){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54678));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54683 = arguments.length;
var i__43069__auto___54684 = (0);
while(true){
if((i__43069__auto___54684 < len__43068__auto___54683)){
args__43075__auto__.push((arguments[i__43069__auto___54684]));

var G__54685 = (i__43069__auto___54684 + (1));
i__43069__auto___54684 = G__54685;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq54682){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54682));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54687 = arguments.length;
var i__43069__auto___54688 = (0);
while(true){
if((i__43069__auto___54688 < len__43068__auto___54687)){
args__43075__auto__.push((arguments[i__43069__auto___54688]));

var G__54689 = (i__43069__auto___54688 + (1));
i__43069__auto___54688 = G__54689;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq54686){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54686));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54697 = arguments.length;
var i__43069__auto___54698 = (0);
while(true){
if((i__43069__auto___54698 < len__43068__auto___54697)){
args__43075__auto__.push((arguments[i__43069__auto___54698]));

var G__54699 = (i__43069__auto___54698 + (1));
i__43069__auto___54698 = G__54699;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((1) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43076__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__54693){
var vec__54694 = p__54693;
var state_override = cljs.core.nth.call(null,vec__54694,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__54694,state_override){
return (function (p1__54690_SHARP_){
return cljs.core.merge.call(null,p1__54690_SHARP_,state_override);
});})(vec__54694,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq54691){
var G__54692 = cljs.core.first.call(null,seq54691);
var seq54691__$1 = cljs.core.next.call(null,seq54691);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__54692,seq54691__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54701 = arguments.length;
var i__43069__auto___54702 = (0);
while(true){
if((i__43069__auto___54702 < len__43068__auto___54701)){
args__43075__auto__.push((arguments[i__43069__auto___54702]));

var G__54703 = (i__43069__auto___54702 + (1));
i__43069__auto___54702 = G__54703;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq54700){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54700));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__43075__auto__ = [];
var len__43068__auto___54706 = arguments.length;
var i__43069__auto___54707 = (0);
while(true){
if((i__43069__auto___54707 < len__43068__auto___54706)){
args__43075__auto__.push((arguments[i__43069__auto___54707]));

var G__54708 = (i__43069__auto___54707 + (1));
i__43069__auto___54707 = G__54708;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((1) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43076__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq54704){
var G__54705 = cljs.core.first.call(null,seq54704);
var seq54704__$1 = cljs.core.next.call(null,seq54704);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__54705,seq54704__$1);
});


//# sourceMappingURL=format.js.map?rel=1504724091390