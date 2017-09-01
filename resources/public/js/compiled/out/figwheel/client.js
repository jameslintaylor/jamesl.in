// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args52237 = [];
var len__43068__auto___52240 = arguments.length;
var i__43069__auto___52241 = (0);
while(true){
if((i__43069__auto___52241 < len__43068__auto___52240)){
args52237.push((arguments[i__43069__auto___52241]));

var G__52242 = (i__43069__auto___52241 + (1));
i__43069__auto___52241 = G__52242;
continue;
} else {
}
break;
}

var G__52239 = args52237.length;
switch (G__52239) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52237.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__43075__auto__ = [];
var len__43068__auto___52245 = arguments.length;
var i__43069__auto___52246 = (0);
while(true){
if((i__43069__auto___52246 < len__43068__auto___52245)){
args__43075__auto__.push((arguments[i__43069__auto___52246]));

var G__52247 = (i__43069__auto___52246 + (1));
i__43069__auto___52246 = G__52247;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq52244){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52244));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__43075__auto__ = [];
var len__43068__auto___52249 = arguments.length;
var i__43069__auto___52250 = (0);
while(true){
if((i__43069__auto___52250 < len__43068__auto___52249)){
args__43075__auto__.push((arguments[i__43069__auto___52250]));

var G__52251 = (i__43069__auto___52250 + (1));
i__43069__auto___52250 = G__52251;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq52248){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52248));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__52252){
var map__52255 = p__52252;
var map__52255__$1 = ((((!((map__52255 == null)))?((((map__52255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52255):map__52255);
var message = cljs.core.get.call(null,map__52255__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__52255__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__41993__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__41981__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__41981__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__41981__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__44869__auto___52417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___52417,ch){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___52417,ch){
return (function (state_52386){
var state_val_52387 = (state_52386[(1)]);
if((state_val_52387 === (7))){
var inst_52382 = (state_52386[(2)]);
var state_52386__$1 = state_52386;
var statearr_52388_52418 = state_52386__$1;
(statearr_52388_52418[(2)] = inst_52382);

(statearr_52388_52418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (1))){
var state_52386__$1 = state_52386;
var statearr_52389_52419 = state_52386__$1;
(statearr_52389_52419[(2)] = null);

(statearr_52389_52419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (4))){
var inst_52339 = (state_52386[(7)]);
var inst_52339__$1 = (state_52386[(2)]);
var state_52386__$1 = (function (){var statearr_52390 = state_52386;
(statearr_52390[(7)] = inst_52339__$1);

return statearr_52390;
})();
if(cljs.core.truth_(inst_52339__$1)){
var statearr_52391_52420 = state_52386__$1;
(statearr_52391_52420[(1)] = (5));

} else {
var statearr_52392_52421 = state_52386__$1;
(statearr_52392_52421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (15))){
var inst_52346 = (state_52386[(8)]);
var inst_52361 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52346);
var inst_52362 = cljs.core.first.call(null,inst_52361);
var inst_52363 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_52362);
var inst_52364 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_52363)].join('');
var inst_52365 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_52364);
var state_52386__$1 = state_52386;
var statearr_52393_52422 = state_52386__$1;
(statearr_52393_52422[(2)] = inst_52365);

(statearr_52393_52422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (13))){
var inst_52370 = (state_52386[(2)]);
var state_52386__$1 = state_52386;
var statearr_52394_52423 = state_52386__$1;
(statearr_52394_52423[(2)] = inst_52370);

(statearr_52394_52423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (6))){
var state_52386__$1 = state_52386;
var statearr_52395_52424 = state_52386__$1;
(statearr_52395_52424[(2)] = null);

(statearr_52395_52424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (17))){
var inst_52368 = (state_52386[(2)]);
var state_52386__$1 = state_52386;
var statearr_52396_52425 = state_52386__$1;
(statearr_52396_52425[(2)] = inst_52368);

(statearr_52396_52425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (3))){
var inst_52384 = (state_52386[(2)]);
var state_52386__$1 = state_52386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52386__$1,inst_52384);
} else {
if((state_val_52387 === (12))){
var inst_52345 = (state_52386[(9)]);
var inst_52359 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_52345,opts);
var state_52386__$1 = state_52386;
if(cljs.core.truth_(inst_52359)){
var statearr_52397_52426 = state_52386__$1;
(statearr_52397_52426[(1)] = (15));

} else {
var statearr_52398_52427 = state_52386__$1;
(statearr_52398_52427[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (2))){
var state_52386__$1 = state_52386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52386__$1,(4),ch);
} else {
if((state_val_52387 === (11))){
var inst_52346 = (state_52386[(8)]);
var inst_52351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52352 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_52346);
var inst_52353 = cljs.core.async.timeout.call(null,(1000));
var inst_52354 = [inst_52352,inst_52353];
var inst_52355 = (new cljs.core.PersistentVector(null,2,(5),inst_52351,inst_52354,null));
var state_52386__$1 = state_52386;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52386__$1,(14),inst_52355);
} else {
if((state_val_52387 === (9))){
var inst_52346 = (state_52386[(8)]);
var inst_52372 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_52373 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52346);
var inst_52374 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52373);
var inst_52375 = [cljs.core.str("Not loading: "),cljs.core.str(inst_52374)].join('');
var inst_52376 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_52375);
var state_52386__$1 = (function (){var statearr_52399 = state_52386;
(statearr_52399[(10)] = inst_52372);

return statearr_52399;
})();
var statearr_52400_52428 = state_52386__$1;
(statearr_52400_52428[(2)] = inst_52376);

(statearr_52400_52428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (5))){
var inst_52339 = (state_52386[(7)]);
var inst_52341 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_52342 = (new cljs.core.PersistentArrayMap(null,2,inst_52341,null));
var inst_52343 = (new cljs.core.PersistentHashSet(null,inst_52342,null));
var inst_52344 = figwheel.client.focus_msgs.call(null,inst_52343,inst_52339);
var inst_52345 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_52344);
var inst_52346 = cljs.core.first.call(null,inst_52344);
var inst_52347 = figwheel.client.autoload_QMARK_.call(null);
var state_52386__$1 = (function (){var statearr_52401 = state_52386;
(statearr_52401[(9)] = inst_52345);

(statearr_52401[(8)] = inst_52346);

return statearr_52401;
})();
if(cljs.core.truth_(inst_52347)){
var statearr_52402_52429 = state_52386__$1;
(statearr_52402_52429[(1)] = (8));

} else {
var statearr_52403_52430 = state_52386__$1;
(statearr_52403_52430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (14))){
var inst_52357 = (state_52386[(2)]);
var state_52386__$1 = state_52386;
var statearr_52404_52431 = state_52386__$1;
(statearr_52404_52431[(2)] = inst_52357);

(statearr_52404_52431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (16))){
var state_52386__$1 = state_52386;
var statearr_52405_52432 = state_52386__$1;
(statearr_52405_52432[(2)] = null);

(statearr_52405_52432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (10))){
var inst_52378 = (state_52386[(2)]);
var state_52386__$1 = (function (){var statearr_52406 = state_52386;
(statearr_52406[(11)] = inst_52378);

return statearr_52406;
})();
var statearr_52407_52433 = state_52386__$1;
(statearr_52407_52433[(2)] = null);

(statearr_52407_52433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52387 === (8))){
var inst_52345 = (state_52386[(9)]);
var inst_52349 = figwheel.client.reload_file_state_QMARK_.call(null,inst_52345,opts);
var state_52386__$1 = state_52386;
if(cljs.core.truth_(inst_52349)){
var statearr_52408_52434 = state_52386__$1;
(statearr_52408_52434[(1)] = (11));

} else {
var statearr_52409_52435 = state_52386__$1;
(statearr_52409_52435[(1)] = (12));

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
});})(c__44869__auto___52417,ch))
;
return ((function (switch__44757__auto__,c__44869__auto___52417,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44758__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44758__auto____0 = (function (){
var statearr_52413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52413[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44758__auto__);

(statearr_52413[(1)] = (1));

return statearr_52413;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44758__auto____1 = (function (state_52386){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_52386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e52414){if((e52414 instanceof Object)){
var ex__44761__auto__ = e52414;
var statearr_52415_52436 = state_52386;
(statearr_52415_52436[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52437 = state_52386;
state_52386 = G__52437;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44758__auto__ = function(state_52386){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44758__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44758__auto____1.call(this,state_52386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44758__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44758__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___52417,ch))
})();
var state__44871__auto__ = (function (){var statearr_52416 = f__44870__auto__.call(null);
(statearr_52416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___52417);

return statearr_52416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___52417,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__52438_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__52438_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_52441 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_52441){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e52440){if((e52440 instanceof Error)){
var e = e52440;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_52441], null));
} else {
var e = e52440;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_52441))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__52442){
var map__52451 = p__52442;
var map__52451__$1 = ((((!((map__52451 == null)))?((((map__52451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52451):map__52451);
var opts = map__52451__$1;
var build_id = cljs.core.get.call(null,map__52451__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__52451,map__52451__$1,opts,build_id){
return (function (p__52453){
var vec__52454 = p__52453;
var seq__52455 = cljs.core.seq.call(null,vec__52454);
var first__52456 = cljs.core.first.call(null,seq__52455);
var seq__52455__$1 = cljs.core.next.call(null,seq__52455);
var map__52457 = first__52456;
var map__52457__$1 = ((((!((map__52457 == null)))?((((map__52457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52457):map__52457);
var msg = map__52457__$1;
var msg_name = cljs.core.get.call(null,map__52457__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52455__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__52454,seq__52455,first__52456,seq__52455__$1,map__52457,map__52457__$1,msg,msg_name,_,map__52451,map__52451__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__52454,seq__52455,first__52456,seq__52455__$1,map__52457,map__52457__$1,msg,msg_name,_,map__52451,map__52451__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__52451,map__52451__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__52465){
var vec__52466 = p__52465;
var seq__52467 = cljs.core.seq.call(null,vec__52466);
var first__52468 = cljs.core.first.call(null,seq__52467);
var seq__52467__$1 = cljs.core.next.call(null,seq__52467);
var map__52469 = first__52468;
var map__52469__$1 = ((((!((map__52469 == null)))?((((map__52469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52469):map__52469);
var msg = map__52469__$1;
var msg_name = cljs.core.get.call(null,map__52469__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52467__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__52471){
var map__52483 = p__52471;
var map__52483__$1 = ((((!((map__52483 == null)))?((((map__52483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52483):map__52483);
var on_compile_warning = cljs.core.get.call(null,map__52483__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__52483__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__52483,map__52483__$1,on_compile_warning,on_compile_fail){
return (function (p__52485){
var vec__52486 = p__52485;
var seq__52487 = cljs.core.seq.call(null,vec__52486);
var first__52488 = cljs.core.first.call(null,seq__52487);
var seq__52487__$1 = cljs.core.next.call(null,seq__52487);
var map__52489 = first__52488;
var map__52489__$1 = ((((!((map__52489 == null)))?((((map__52489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52489):map__52489);
var msg = map__52489__$1;
var msg_name = cljs.core.get.call(null,map__52489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52487__$1;
var pred__52491 = cljs.core._EQ_;
var expr__52492 = msg_name;
if(cljs.core.truth_(pred__52491.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__52492))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__52491.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__52492))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__52483,map__52483__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__,msg_hist,msg_names,msg){
return (function (state_52720){
var state_val_52721 = (state_52720[(1)]);
if((state_val_52721 === (7))){
var inst_52640 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
if(cljs.core.truth_(inst_52640)){
var statearr_52722_52772 = state_52720__$1;
(statearr_52722_52772[(1)] = (8));

} else {
var statearr_52723_52773 = state_52720__$1;
(statearr_52723_52773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (20))){
var inst_52714 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52724_52774 = state_52720__$1;
(statearr_52724_52774[(2)] = inst_52714);

(statearr_52724_52774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (27))){
var inst_52710 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52725_52775 = state_52720__$1;
(statearr_52725_52775[(2)] = inst_52710);

(statearr_52725_52775[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (1))){
var inst_52633 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_52720__$1 = state_52720;
if(cljs.core.truth_(inst_52633)){
var statearr_52726_52776 = state_52720__$1;
(statearr_52726_52776[(1)] = (2));

} else {
var statearr_52727_52777 = state_52720__$1;
(statearr_52727_52777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (24))){
var inst_52712 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52728_52778 = state_52720__$1;
(statearr_52728_52778[(2)] = inst_52712);

(statearr_52728_52778[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (4))){
var inst_52718 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52720__$1,inst_52718);
} else {
if((state_val_52721 === (15))){
var inst_52716 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52729_52779 = state_52720__$1;
(statearr_52729_52779[(2)] = inst_52716);

(statearr_52729_52779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (21))){
var inst_52669 = (state_52720[(2)]);
var inst_52670 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52671 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52670);
var state_52720__$1 = (function (){var statearr_52730 = state_52720;
(statearr_52730[(7)] = inst_52669);

return statearr_52730;
})();
var statearr_52731_52780 = state_52720__$1;
(statearr_52731_52780[(2)] = inst_52671);

(statearr_52731_52780[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (31))){
var inst_52699 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_52720__$1 = state_52720;
if(cljs.core.truth_(inst_52699)){
var statearr_52732_52781 = state_52720__$1;
(statearr_52732_52781[(1)] = (34));

} else {
var statearr_52733_52782 = state_52720__$1;
(statearr_52733_52782[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (32))){
var inst_52708 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52734_52783 = state_52720__$1;
(statearr_52734_52783[(2)] = inst_52708);

(statearr_52734_52783[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (33))){
var inst_52695 = (state_52720[(2)]);
var inst_52696 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52697 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52696);
var state_52720__$1 = (function (){var statearr_52735 = state_52720;
(statearr_52735[(8)] = inst_52695);

return statearr_52735;
})();
var statearr_52736_52784 = state_52720__$1;
(statearr_52736_52784[(2)] = inst_52697);

(statearr_52736_52784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (13))){
var inst_52654 = figwheel.client.heads_up.clear.call(null);
var state_52720__$1 = state_52720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52720__$1,(16),inst_52654);
} else {
if((state_val_52721 === (22))){
var inst_52675 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52676 = figwheel.client.heads_up.append_warning_message.call(null,inst_52675);
var state_52720__$1 = state_52720;
var statearr_52737_52785 = state_52720__$1;
(statearr_52737_52785[(2)] = inst_52676);

(statearr_52737_52785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (36))){
var inst_52706 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52738_52786 = state_52720__$1;
(statearr_52738_52786[(2)] = inst_52706);

(statearr_52738_52786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (29))){
var inst_52686 = (state_52720[(2)]);
var inst_52687 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52688 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52687);
var state_52720__$1 = (function (){var statearr_52739 = state_52720;
(statearr_52739[(9)] = inst_52686);

return statearr_52739;
})();
var statearr_52740_52787 = state_52720__$1;
(statearr_52740_52787[(2)] = inst_52688);

(statearr_52740_52787[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (6))){
var inst_52635 = (state_52720[(10)]);
var state_52720__$1 = state_52720;
var statearr_52741_52788 = state_52720__$1;
(statearr_52741_52788[(2)] = inst_52635);

(statearr_52741_52788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (28))){
var inst_52682 = (state_52720[(2)]);
var inst_52683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52684 = figwheel.client.heads_up.display_warning.call(null,inst_52683);
var state_52720__$1 = (function (){var statearr_52742 = state_52720;
(statearr_52742[(11)] = inst_52682);

return statearr_52742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52720__$1,(29),inst_52684);
} else {
if((state_val_52721 === (25))){
var inst_52680 = figwheel.client.heads_up.clear.call(null);
var state_52720__$1 = state_52720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52720__$1,(28),inst_52680);
} else {
if((state_val_52721 === (34))){
var inst_52701 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52720__$1 = state_52720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52720__$1,(37),inst_52701);
} else {
if((state_val_52721 === (17))){
var inst_52660 = (state_52720[(2)]);
var inst_52661 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52662 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52661);
var state_52720__$1 = (function (){var statearr_52743 = state_52720;
(statearr_52743[(12)] = inst_52660);

return statearr_52743;
})();
var statearr_52744_52789 = state_52720__$1;
(statearr_52744_52789[(2)] = inst_52662);

(statearr_52744_52789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (3))){
var inst_52652 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_52720__$1 = state_52720;
if(cljs.core.truth_(inst_52652)){
var statearr_52745_52790 = state_52720__$1;
(statearr_52745_52790[(1)] = (13));

} else {
var statearr_52746_52791 = state_52720__$1;
(statearr_52746_52791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (12))){
var inst_52648 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52747_52792 = state_52720__$1;
(statearr_52747_52792[(2)] = inst_52648);

(statearr_52747_52792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (2))){
var inst_52635 = (state_52720[(10)]);
var inst_52635__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_52720__$1 = (function (){var statearr_52748 = state_52720;
(statearr_52748[(10)] = inst_52635__$1);

return statearr_52748;
})();
if(cljs.core.truth_(inst_52635__$1)){
var statearr_52749_52793 = state_52720__$1;
(statearr_52749_52793[(1)] = (5));

} else {
var statearr_52750_52794 = state_52720__$1;
(statearr_52750_52794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (23))){
var inst_52678 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_52720__$1 = state_52720;
if(cljs.core.truth_(inst_52678)){
var statearr_52751_52795 = state_52720__$1;
(statearr_52751_52795[(1)] = (25));

} else {
var statearr_52752_52796 = state_52720__$1;
(statearr_52752_52796[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (35))){
var state_52720__$1 = state_52720;
var statearr_52753_52797 = state_52720__$1;
(statearr_52753_52797[(2)] = null);

(statearr_52753_52797[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (19))){
var inst_52673 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_52720__$1 = state_52720;
if(cljs.core.truth_(inst_52673)){
var statearr_52754_52798 = state_52720__$1;
(statearr_52754_52798[(1)] = (22));

} else {
var statearr_52755_52799 = state_52720__$1;
(statearr_52755_52799[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (11))){
var inst_52644 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52756_52800 = state_52720__$1;
(statearr_52756_52800[(2)] = inst_52644);

(statearr_52756_52800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (9))){
var inst_52646 = figwheel.client.heads_up.clear.call(null);
var state_52720__$1 = state_52720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52720__$1,(12),inst_52646);
} else {
if((state_val_52721 === (5))){
var inst_52637 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_52720__$1 = state_52720;
var statearr_52757_52801 = state_52720__$1;
(statearr_52757_52801[(2)] = inst_52637);

(statearr_52757_52801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (14))){
var inst_52664 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_52720__$1 = state_52720;
if(cljs.core.truth_(inst_52664)){
var statearr_52758_52802 = state_52720__$1;
(statearr_52758_52802[(1)] = (18));

} else {
var statearr_52759_52803 = state_52720__$1;
(statearr_52759_52803[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (26))){
var inst_52690 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_52720__$1 = state_52720;
if(cljs.core.truth_(inst_52690)){
var statearr_52760_52804 = state_52720__$1;
(statearr_52760_52804[(1)] = (30));

} else {
var statearr_52761_52805 = state_52720__$1;
(statearr_52761_52805[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (16))){
var inst_52656 = (state_52720[(2)]);
var inst_52657 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52658 = figwheel.client.heads_up.display_exception.call(null,inst_52657);
var state_52720__$1 = (function (){var statearr_52762 = state_52720;
(statearr_52762[(13)] = inst_52656);

return statearr_52762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52720__$1,(17),inst_52658);
} else {
if((state_val_52721 === (30))){
var inst_52692 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52693 = figwheel.client.heads_up.display_warning.call(null,inst_52692);
var state_52720__$1 = state_52720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52720__$1,(33),inst_52693);
} else {
if((state_val_52721 === (10))){
var inst_52650 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52763_52806 = state_52720__$1;
(statearr_52763_52806[(2)] = inst_52650);

(statearr_52763_52806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (18))){
var inst_52666 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52667 = figwheel.client.heads_up.display_exception.call(null,inst_52666);
var state_52720__$1 = state_52720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52720__$1,(21),inst_52667);
} else {
if((state_val_52721 === (37))){
var inst_52703 = (state_52720[(2)]);
var state_52720__$1 = state_52720;
var statearr_52764_52807 = state_52720__$1;
(statearr_52764_52807[(2)] = inst_52703);

(statearr_52764_52807[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52721 === (8))){
var inst_52642 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52720__$1 = state_52720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52720__$1,(11),inst_52642);
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
});})(c__44869__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44757__auto__,c__44869__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto____0 = (function (){
var statearr_52768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52768[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto__);

(statearr_52768[(1)] = (1));

return statearr_52768;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto____1 = (function (state_52720){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_52720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e52769){if((e52769 instanceof Object)){
var ex__44761__auto__ = e52769;
var statearr_52770_52808 = state_52720;
(statearr_52770_52808[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52809 = state_52720;
state_52720 = G__52809;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto__ = function(state_52720){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto____1.call(this,state_52720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__,msg_hist,msg_names,msg))
})();
var state__44871__auto__ = (function (){var statearr_52771 = f__44870__auto__.call(null);
(statearr_52771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_52771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__,msg_hist,msg_names,msg))
);

return c__44869__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44869__auto___52872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___52872,ch){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___52872,ch){
return (function (state_52855){
var state_val_52856 = (state_52855[(1)]);
if((state_val_52856 === (1))){
var state_52855__$1 = state_52855;
var statearr_52857_52873 = state_52855__$1;
(statearr_52857_52873[(2)] = null);

(statearr_52857_52873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52856 === (2))){
var state_52855__$1 = state_52855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52855__$1,(4),ch);
} else {
if((state_val_52856 === (3))){
var inst_52853 = (state_52855[(2)]);
var state_52855__$1 = state_52855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52855__$1,inst_52853);
} else {
if((state_val_52856 === (4))){
var inst_52843 = (state_52855[(7)]);
var inst_52843__$1 = (state_52855[(2)]);
var state_52855__$1 = (function (){var statearr_52858 = state_52855;
(statearr_52858[(7)] = inst_52843__$1);

return statearr_52858;
})();
if(cljs.core.truth_(inst_52843__$1)){
var statearr_52859_52874 = state_52855__$1;
(statearr_52859_52874[(1)] = (5));

} else {
var statearr_52860_52875 = state_52855__$1;
(statearr_52860_52875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52856 === (5))){
var inst_52843 = (state_52855[(7)]);
var inst_52845 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_52843);
var state_52855__$1 = state_52855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52855__$1,(8),inst_52845);
} else {
if((state_val_52856 === (6))){
var state_52855__$1 = state_52855;
var statearr_52861_52876 = state_52855__$1;
(statearr_52861_52876[(2)] = null);

(statearr_52861_52876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52856 === (7))){
var inst_52851 = (state_52855[(2)]);
var state_52855__$1 = state_52855;
var statearr_52862_52877 = state_52855__$1;
(statearr_52862_52877[(2)] = inst_52851);

(statearr_52862_52877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52856 === (8))){
var inst_52847 = (state_52855[(2)]);
var state_52855__$1 = (function (){var statearr_52863 = state_52855;
(statearr_52863[(8)] = inst_52847);

return statearr_52863;
})();
var statearr_52864_52878 = state_52855__$1;
(statearr_52864_52878[(2)] = null);

(statearr_52864_52878[(1)] = (2));


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
});})(c__44869__auto___52872,ch))
;
return ((function (switch__44757__auto__,c__44869__auto___52872,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44758__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44758__auto____0 = (function (){
var statearr_52868 = [null,null,null,null,null,null,null,null,null];
(statearr_52868[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44758__auto__);

(statearr_52868[(1)] = (1));

return statearr_52868;
});
var figwheel$client$heads_up_plugin_$_state_machine__44758__auto____1 = (function (state_52855){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_52855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e52869){if((e52869 instanceof Object)){
var ex__44761__auto__ = e52869;
var statearr_52870_52879 = state_52855;
(statearr_52870_52879[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52880 = state_52855;
state_52855 = G__52880;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44758__auto__ = function(state_52855){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44758__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44758__auto____1.call(this,state_52855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44758__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44758__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___52872,ch))
})();
var state__44871__auto__ = (function (){var statearr_52871 = f__44870__auto__.call(null);
(statearr_52871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___52872);

return statearr_52871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___52872,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__){
return (function (state_52901){
var state_val_52902 = (state_52901[(1)]);
if((state_val_52902 === (1))){
var inst_52896 = cljs.core.async.timeout.call(null,(3000));
var state_52901__$1 = state_52901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52901__$1,(2),inst_52896);
} else {
if((state_val_52902 === (2))){
var inst_52898 = (state_52901[(2)]);
var inst_52899 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52901__$1 = (function (){var statearr_52903 = state_52901;
(statearr_52903[(7)] = inst_52898);

return statearr_52903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52901__$1,inst_52899);
} else {
return null;
}
}
});})(c__44869__auto__))
;
return ((function (switch__44757__auto__,c__44869__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44758__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44758__auto____0 = (function (){
var statearr_52907 = [null,null,null,null,null,null,null,null];
(statearr_52907[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44758__auto__);

(statearr_52907[(1)] = (1));

return statearr_52907;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44758__auto____1 = (function (state_52901){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_52901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e52908){if((e52908 instanceof Object)){
var ex__44761__auto__ = e52908;
var statearr_52909_52911 = state_52901;
(statearr_52909_52911[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52912 = state_52901;
state_52901 = G__52912;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44758__auto__ = function(state_52901){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44758__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44758__auto____1.call(this,state_52901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44758__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44758__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__))
})();
var state__44871__auto__ = (function (){var statearr_52910 = f__44870__auto__.call(null);
(statearr_52910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_52910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__))
);

return c__44869__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__,figwheel_version,temp__4657__auto__){
return (function (state_52935){
var state_val_52936 = (state_52935[(1)]);
if((state_val_52936 === (1))){
var inst_52929 = cljs.core.async.timeout.call(null,(2000));
var state_52935__$1 = state_52935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52935__$1,(2),inst_52929);
} else {
if((state_val_52936 === (2))){
var inst_52931 = (state_52935[(2)]);
var inst_52932 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_52933 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52932);
var state_52935__$1 = (function (){var statearr_52937 = state_52935;
(statearr_52937[(7)] = inst_52931);

return statearr_52937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52935__$1,inst_52933);
} else {
return null;
}
}
});})(c__44869__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__44757__auto__,c__44869__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto____0 = (function (){
var statearr_52941 = [null,null,null,null,null,null,null,null];
(statearr_52941[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto__);

(statearr_52941[(1)] = (1));

return statearr_52941;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto____1 = (function (state_52935){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_52935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e52942){if((e52942 instanceof Object)){
var ex__44761__auto__ = e52942;
var statearr_52943_52945 = state_52935;
(statearr_52943_52945[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52946 = state_52935;
state_52935 = G__52946;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto__ = function(state_52935){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto____1.call(this,state_52935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__,figwheel_version,temp__4657__auto__))
})();
var state__44871__auto__ = (function (){var statearr_52944 = f__44870__auto__.call(null);
(statearr_52944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_52944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__,figwheel_version,temp__4657__auto__))
);

return c__44869__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52947){
var map__52951 = p__52947;
var map__52951__$1 = ((((!((map__52951 == null)))?((((map__52951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52951):map__52951);
var file = cljs.core.get.call(null,map__52951__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52951__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52951__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52953 = "";
var G__52953__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__52953),cljs.core.str("file "),cljs.core.str(file)].join(''):G__52953);
var G__52953__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__52953__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__52953__$1);
if(cljs.core.truth_((function (){var and__41981__auto__ = line;
if(cljs.core.truth_(and__41981__auto__)){
return column;
} else {
return and__41981__auto__;
}
})())){
return [cljs.core.str(G__52953__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__52953__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52954){
var map__52961 = p__52954;
var map__52961__$1 = ((((!((map__52961 == null)))?((((map__52961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52961):map__52961);
var ed = map__52961__$1;
var formatted_exception = cljs.core.get.call(null,map__52961__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52961__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52961__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52963_52967 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52964_52968 = null;
var count__52965_52969 = (0);
var i__52966_52970 = (0);
while(true){
if((i__52966_52970 < count__52965_52969)){
var msg_52971 = cljs.core._nth.call(null,chunk__52964_52968,i__52966_52970);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52971);

var G__52972 = seq__52963_52967;
var G__52973 = chunk__52964_52968;
var G__52974 = count__52965_52969;
var G__52975 = (i__52966_52970 + (1));
seq__52963_52967 = G__52972;
chunk__52964_52968 = G__52973;
count__52965_52969 = G__52974;
i__52966_52970 = G__52975;
continue;
} else {
var temp__4657__auto___52976 = cljs.core.seq.call(null,seq__52963_52967);
if(temp__4657__auto___52976){
var seq__52963_52977__$1 = temp__4657__auto___52976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52963_52977__$1)){
var c__42804__auto___52978 = cljs.core.chunk_first.call(null,seq__52963_52977__$1);
var G__52979 = cljs.core.chunk_rest.call(null,seq__52963_52977__$1);
var G__52980 = c__42804__auto___52978;
var G__52981 = cljs.core.count.call(null,c__42804__auto___52978);
var G__52982 = (0);
seq__52963_52967 = G__52979;
chunk__52964_52968 = G__52980;
count__52965_52969 = G__52981;
i__52966_52970 = G__52982;
continue;
} else {
var msg_52983 = cljs.core.first.call(null,seq__52963_52977__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52983);

var G__52984 = cljs.core.next.call(null,seq__52963_52977__$1);
var G__52985 = null;
var G__52986 = (0);
var G__52987 = (0);
seq__52963_52967 = G__52984;
chunk__52964_52968 = G__52985;
count__52965_52969 = G__52986;
i__52966_52970 = G__52987;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52988){
var map__52991 = p__52988;
var map__52991__$1 = ((((!((map__52991 == null)))?((((map__52991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52991):map__52991);
var w = map__52991__$1;
var message = cljs.core.get.call(null,map__52991__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__41981__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__41981__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__41981__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__53003 = cljs.core.seq.call(null,plugins);
var chunk__53004 = null;
var count__53005 = (0);
var i__53006 = (0);
while(true){
if((i__53006 < count__53005)){
var vec__53007 = cljs.core._nth.call(null,chunk__53004,i__53006);
var k = cljs.core.nth.call(null,vec__53007,(0),null);
var plugin = cljs.core.nth.call(null,vec__53007,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53013 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53003,chunk__53004,count__53005,i__53006,pl_53013,vec__53007,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_53013.call(null,msg_hist);
});})(seq__53003,chunk__53004,count__53005,i__53006,pl_53013,vec__53007,k,plugin))
);
} else {
}

var G__53014 = seq__53003;
var G__53015 = chunk__53004;
var G__53016 = count__53005;
var G__53017 = (i__53006 + (1));
seq__53003 = G__53014;
chunk__53004 = G__53015;
count__53005 = G__53016;
i__53006 = G__53017;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53003);
if(temp__4657__auto__){
var seq__53003__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53003__$1)){
var c__42804__auto__ = cljs.core.chunk_first.call(null,seq__53003__$1);
var G__53018 = cljs.core.chunk_rest.call(null,seq__53003__$1);
var G__53019 = c__42804__auto__;
var G__53020 = cljs.core.count.call(null,c__42804__auto__);
var G__53021 = (0);
seq__53003 = G__53018;
chunk__53004 = G__53019;
count__53005 = G__53020;
i__53006 = G__53021;
continue;
} else {
var vec__53010 = cljs.core.first.call(null,seq__53003__$1);
var k = cljs.core.nth.call(null,vec__53010,(0),null);
var plugin = cljs.core.nth.call(null,vec__53010,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53022 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53003,chunk__53004,count__53005,i__53006,pl_53022,vec__53010,k,plugin,seq__53003__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_53022.call(null,msg_hist);
});})(seq__53003,chunk__53004,count__53005,i__53006,pl_53022,vec__53010,k,plugin,seq__53003__$1,temp__4657__auto__))
);
} else {
}

var G__53023 = cljs.core.next.call(null,seq__53003__$1);
var G__53024 = null;
var G__53025 = (0);
var G__53026 = (0);
seq__53003 = G__53023;
chunk__53004 = G__53024;
count__53005 = G__53025;
i__53006 = G__53026;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args53027 = [];
var len__43068__auto___53034 = arguments.length;
var i__43069__auto___53035 = (0);
while(true){
if((i__43069__auto___53035 < len__43068__auto___53034)){
args53027.push((arguments[i__43069__auto___53035]));

var G__53036 = (i__43069__auto___53035 + (1));
i__43069__auto___53035 = G__53036;
continue;
} else {
}
break;
}

var G__53029 = args53027.length;
switch (G__53029) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53027.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__53030_53038 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__53031_53039 = null;
var count__53032_53040 = (0);
var i__53033_53041 = (0);
while(true){
if((i__53033_53041 < count__53032_53040)){
var msg_53042 = cljs.core._nth.call(null,chunk__53031_53039,i__53033_53041);
figwheel.client.socket.handle_incoming_message.call(null,msg_53042);

var G__53043 = seq__53030_53038;
var G__53044 = chunk__53031_53039;
var G__53045 = count__53032_53040;
var G__53046 = (i__53033_53041 + (1));
seq__53030_53038 = G__53043;
chunk__53031_53039 = G__53044;
count__53032_53040 = G__53045;
i__53033_53041 = G__53046;
continue;
} else {
var temp__4657__auto___53047 = cljs.core.seq.call(null,seq__53030_53038);
if(temp__4657__auto___53047){
var seq__53030_53048__$1 = temp__4657__auto___53047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53030_53048__$1)){
var c__42804__auto___53049 = cljs.core.chunk_first.call(null,seq__53030_53048__$1);
var G__53050 = cljs.core.chunk_rest.call(null,seq__53030_53048__$1);
var G__53051 = c__42804__auto___53049;
var G__53052 = cljs.core.count.call(null,c__42804__auto___53049);
var G__53053 = (0);
seq__53030_53038 = G__53050;
chunk__53031_53039 = G__53051;
count__53032_53040 = G__53052;
i__53033_53041 = G__53053;
continue;
} else {
var msg_53054 = cljs.core.first.call(null,seq__53030_53048__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_53054);

var G__53055 = cljs.core.next.call(null,seq__53030_53048__$1);
var G__53056 = null;
var G__53057 = (0);
var G__53058 = (0);
seq__53030_53038 = G__53055;
chunk__53031_53039 = G__53056;
count__53032_53040 = G__53057;
i__53033_53041 = G__53058;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__43075__auto__ = [];
var len__43068__auto___53063 = arguments.length;
var i__43069__auto___53064 = (0);
while(true){
if((i__43069__auto___53064 < len__43068__auto___53063)){
args__43075__auto__.push((arguments[i__43069__auto___53064]));

var G__53065 = (i__43069__auto___53064 + (1));
i__43069__auto___53064 = G__53065;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__53060){
var map__53061 = p__53060;
var map__53061__$1 = ((((!((map__53061 == null)))?((((map__53061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53061):map__53061);
var opts = map__53061__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq53059){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53059));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e53067){if((e53067 instanceof Error)){
var e = e53067;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e53067;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__53071){
var map__53072 = p__53071;
var map__53072__$1 = ((((!((map__53072 == null)))?((((map__53072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53072):map__53072);
var msg_name = cljs.core.get.call(null,map__53072__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504122782455