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
var args52222 = [];
var len__43068__auto___52225 = arguments.length;
var i__43069__auto___52226 = (0);
while(true){
if((i__43069__auto___52226 < len__43068__auto___52225)){
args52222.push((arguments[i__43069__auto___52226]));

var G__52227 = (i__43069__auto___52226 + (1));
i__43069__auto___52226 = G__52227;
continue;
} else {
}
break;
}

var G__52224 = args52222.length;
switch (G__52224) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52222.length)].join('')));

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
var len__43068__auto___52230 = arguments.length;
var i__43069__auto___52231 = (0);
while(true){
if((i__43069__auto___52231 < len__43068__auto___52230)){
args__43075__auto__.push((arguments[i__43069__auto___52231]));

var G__52232 = (i__43069__auto___52231 + (1));
i__43069__auto___52231 = G__52232;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq52229){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52229));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__43075__auto__ = [];
var len__43068__auto___52234 = arguments.length;
var i__43069__auto___52235 = (0);
while(true){
if((i__43069__auto___52235 < len__43068__auto___52234)){
args__43075__auto__.push((arguments[i__43069__auto___52235]));

var G__52236 = (i__43069__auto___52235 + (1));
i__43069__auto___52235 = G__52236;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq52233){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52233));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__52237){
var map__52240 = p__52237;
var map__52240__$1 = ((((!((map__52240 == null)))?((((map__52240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52240):map__52240);
var message = cljs.core.get.call(null,map__52240__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__52240__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__44165__auto___52402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___52402,ch){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___52402,ch){
return (function (state_52371){
var state_val_52372 = (state_52371[(1)]);
if((state_val_52372 === (7))){
var inst_52367 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52373_52403 = state_52371__$1;
(statearr_52373_52403[(2)] = inst_52367);

(statearr_52373_52403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (1))){
var state_52371__$1 = state_52371;
var statearr_52374_52404 = state_52371__$1;
(statearr_52374_52404[(2)] = null);

(statearr_52374_52404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (4))){
var inst_52324 = (state_52371[(7)]);
var inst_52324__$1 = (state_52371[(2)]);
var state_52371__$1 = (function (){var statearr_52375 = state_52371;
(statearr_52375[(7)] = inst_52324__$1);

return statearr_52375;
})();
if(cljs.core.truth_(inst_52324__$1)){
var statearr_52376_52405 = state_52371__$1;
(statearr_52376_52405[(1)] = (5));

} else {
var statearr_52377_52406 = state_52371__$1;
(statearr_52377_52406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (15))){
var inst_52331 = (state_52371[(8)]);
var inst_52346 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52331);
var inst_52347 = cljs.core.first.call(null,inst_52346);
var inst_52348 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_52347);
var inst_52349 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_52348)].join('');
var inst_52350 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_52349);
var state_52371__$1 = state_52371;
var statearr_52378_52407 = state_52371__$1;
(statearr_52378_52407[(2)] = inst_52350);

(statearr_52378_52407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (13))){
var inst_52355 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52379_52408 = state_52371__$1;
(statearr_52379_52408[(2)] = inst_52355);

(statearr_52379_52408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (6))){
var state_52371__$1 = state_52371;
var statearr_52380_52409 = state_52371__$1;
(statearr_52380_52409[(2)] = null);

(statearr_52380_52409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (17))){
var inst_52353 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52381_52410 = state_52371__$1;
(statearr_52381_52410[(2)] = inst_52353);

(statearr_52381_52410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (3))){
var inst_52369 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52371__$1,inst_52369);
} else {
if((state_val_52372 === (12))){
var inst_52330 = (state_52371[(9)]);
var inst_52344 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_52330,opts);
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52344)){
var statearr_52382_52411 = state_52371__$1;
(statearr_52382_52411[(1)] = (15));

} else {
var statearr_52383_52412 = state_52371__$1;
(statearr_52383_52412[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (2))){
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52371__$1,(4),ch);
} else {
if((state_val_52372 === (11))){
var inst_52331 = (state_52371[(8)]);
var inst_52336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52337 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_52331);
var inst_52338 = cljs.core.async.timeout.call(null,(1000));
var inst_52339 = [inst_52337,inst_52338];
var inst_52340 = (new cljs.core.PersistentVector(null,2,(5),inst_52336,inst_52339,null));
var state_52371__$1 = state_52371;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52371__$1,(14),inst_52340);
} else {
if((state_val_52372 === (9))){
var inst_52331 = (state_52371[(8)]);
var inst_52357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_52358 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52331);
var inst_52359 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52358);
var inst_52360 = [cljs.core.str("Not loading: "),cljs.core.str(inst_52359)].join('');
var inst_52361 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_52360);
var state_52371__$1 = (function (){var statearr_52384 = state_52371;
(statearr_52384[(10)] = inst_52357);

return statearr_52384;
})();
var statearr_52385_52413 = state_52371__$1;
(statearr_52385_52413[(2)] = inst_52361);

(statearr_52385_52413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (5))){
var inst_52324 = (state_52371[(7)]);
var inst_52326 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_52327 = (new cljs.core.PersistentArrayMap(null,2,inst_52326,null));
var inst_52328 = (new cljs.core.PersistentHashSet(null,inst_52327,null));
var inst_52329 = figwheel.client.focus_msgs.call(null,inst_52328,inst_52324);
var inst_52330 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_52329);
var inst_52331 = cljs.core.first.call(null,inst_52329);
var inst_52332 = figwheel.client.autoload_QMARK_.call(null);
var state_52371__$1 = (function (){var statearr_52386 = state_52371;
(statearr_52386[(9)] = inst_52330);

(statearr_52386[(8)] = inst_52331);

return statearr_52386;
})();
if(cljs.core.truth_(inst_52332)){
var statearr_52387_52414 = state_52371__$1;
(statearr_52387_52414[(1)] = (8));

} else {
var statearr_52388_52415 = state_52371__$1;
(statearr_52388_52415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (14))){
var inst_52342 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52389_52416 = state_52371__$1;
(statearr_52389_52416[(2)] = inst_52342);

(statearr_52389_52416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (16))){
var state_52371__$1 = state_52371;
var statearr_52390_52417 = state_52371__$1;
(statearr_52390_52417[(2)] = null);

(statearr_52390_52417[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (10))){
var inst_52363 = (state_52371[(2)]);
var state_52371__$1 = (function (){var statearr_52391 = state_52371;
(statearr_52391[(11)] = inst_52363);

return statearr_52391;
})();
var statearr_52392_52418 = state_52371__$1;
(statearr_52392_52418[(2)] = null);

(statearr_52392_52418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (8))){
var inst_52330 = (state_52371[(9)]);
var inst_52334 = figwheel.client.reload_file_state_QMARK_.call(null,inst_52330,opts);
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52334)){
var statearr_52393_52419 = state_52371__$1;
(statearr_52393_52419[(1)] = (11));

} else {
var statearr_52394_52420 = state_52371__$1;
(statearr_52394_52420[(1)] = (12));

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
});})(c__44165__auto___52402,ch))
;
return ((function (switch__44053__auto__,c__44165__auto___52402,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44054__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44054__auto____0 = (function (){
var statearr_52398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52398[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44054__auto__);

(statearr_52398[(1)] = (1));

return statearr_52398;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44054__auto____1 = (function (state_52371){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_52371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e52399){if((e52399 instanceof Object)){
var ex__44057__auto__ = e52399;
var statearr_52400_52421 = state_52371;
(statearr_52400_52421[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52422 = state_52371;
state_52371 = G__52422;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44054__auto__ = function(state_52371){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44054__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44054__auto____1.call(this,state_52371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44054__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44054__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___52402,ch))
})();
var state__44167__auto__ = (function (){var statearr_52401 = f__44166__auto__.call(null);
(statearr_52401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___52402);

return statearr_52401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___52402,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__52423_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__52423_SHARP_));
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
var base_path_52426 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_52426){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e52425){if((e52425 instanceof Error)){
var e = e52425;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_52426], null));
} else {
var e = e52425;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_52426))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__52427){
var map__52436 = p__52427;
var map__52436__$1 = ((((!((map__52436 == null)))?((((map__52436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52436):map__52436);
var opts = map__52436__$1;
var build_id = cljs.core.get.call(null,map__52436__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__52436,map__52436__$1,opts,build_id){
return (function (p__52438){
var vec__52439 = p__52438;
var seq__52440 = cljs.core.seq.call(null,vec__52439);
var first__52441 = cljs.core.first.call(null,seq__52440);
var seq__52440__$1 = cljs.core.next.call(null,seq__52440);
var map__52442 = first__52441;
var map__52442__$1 = ((((!((map__52442 == null)))?((((map__52442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52442):map__52442);
var msg = map__52442__$1;
var msg_name = cljs.core.get.call(null,map__52442__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52440__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__52439,seq__52440,first__52441,seq__52440__$1,map__52442,map__52442__$1,msg,msg_name,_,map__52436,map__52436__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__52439,seq__52440,first__52441,seq__52440__$1,map__52442,map__52442__$1,msg,msg_name,_,map__52436,map__52436__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__52436,map__52436__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__52450){
var vec__52451 = p__52450;
var seq__52452 = cljs.core.seq.call(null,vec__52451);
var first__52453 = cljs.core.first.call(null,seq__52452);
var seq__52452__$1 = cljs.core.next.call(null,seq__52452);
var map__52454 = first__52453;
var map__52454__$1 = ((((!((map__52454 == null)))?((((map__52454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52454):map__52454);
var msg = map__52454__$1;
var msg_name = cljs.core.get.call(null,map__52454__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52452__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__52456){
var map__52468 = p__52456;
var map__52468__$1 = ((((!((map__52468 == null)))?((((map__52468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52468):map__52468);
var on_compile_warning = cljs.core.get.call(null,map__52468__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__52468__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__52468,map__52468__$1,on_compile_warning,on_compile_fail){
return (function (p__52470){
var vec__52471 = p__52470;
var seq__52472 = cljs.core.seq.call(null,vec__52471);
var first__52473 = cljs.core.first.call(null,seq__52472);
var seq__52472__$1 = cljs.core.next.call(null,seq__52472);
var map__52474 = first__52473;
var map__52474__$1 = ((((!((map__52474 == null)))?((((map__52474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52474):map__52474);
var msg = map__52474__$1;
var msg_name = cljs.core.get.call(null,map__52474__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52472__$1;
var pred__52476 = cljs.core._EQ_;
var expr__52477 = msg_name;
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__52477))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__52477))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__52468,map__52468__$1,on_compile_warning,on_compile_fail))
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
var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__,msg_hist,msg_names,msg){
return (function (state_52705){
var state_val_52706 = (state_52705[(1)]);
if((state_val_52706 === (7))){
var inst_52625 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
if(cljs.core.truth_(inst_52625)){
var statearr_52707_52757 = state_52705__$1;
(statearr_52707_52757[(1)] = (8));

} else {
var statearr_52708_52758 = state_52705__$1;
(statearr_52708_52758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (20))){
var inst_52699 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52709_52759 = state_52705__$1;
(statearr_52709_52759[(2)] = inst_52699);

(statearr_52709_52759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (27))){
var inst_52695 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52710_52760 = state_52705__$1;
(statearr_52710_52760[(2)] = inst_52695);

(statearr_52710_52760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (1))){
var inst_52618 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_52705__$1 = state_52705;
if(cljs.core.truth_(inst_52618)){
var statearr_52711_52761 = state_52705__$1;
(statearr_52711_52761[(1)] = (2));

} else {
var statearr_52712_52762 = state_52705__$1;
(statearr_52712_52762[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (24))){
var inst_52697 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52713_52763 = state_52705__$1;
(statearr_52713_52763[(2)] = inst_52697);

(statearr_52713_52763[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (4))){
var inst_52703 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52705__$1,inst_52703);
} else {
if((state_val_52706 === (15))){
var inst_52701 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52714_52764 = state_52705__$1;
(statearr_52714_52764[(2)] = inst_52701);

(statearr_52714_52764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (21))){
var inst_52654 = (state_52705[(2)]);
var inst_52655 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52656 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52655);
var state_52705__$1 = (function (){var statearr_52715 = state_52705;
(statearr_52715[(7)] = inst_52654);

return statearr_52715;
})();
var statearr_52716_52765 = state_52705__$1;
(statearr_52716_52765[(2)] = inst_52656);

(statearr_52716_52765[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (31))){
var inst_52684 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_52705__$1 = state_52705;
if(cljs.core.truth_(inst_52684)){
var statearr_52717_52766 = state_52705__$1;
(statearr_52717_52766[(1)] = (34));

} else {
var statearr_52718_52767 = state_52705__$1;
(statearr_52718_52767[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (32))){
var inst_52693 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52719_52768 = state_52705__$1;
(statearr_52719_52768[(2)] = inst_52693);

(statearr_52719_52768[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (33))){
var inst_52680 = (state_52705[(2)]);
var inst_52681 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52682 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52681);
var state_52705__$1 = (function (){var statearr_52720 = state_52705;
(statearr_52720[(8)] = inst_52680);

return statearr_52720;
})();
var statearr_52721_52769 = state_52705__$1;
(statearr_52721_52769[(2)] = inst_52682);

(statearr_52721_52769[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (13))){
var inst_52639 = figwheel.client.heads_up.clear.call(null);
var state_52705__$1 = state_52705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52705__$1,(16),inst_52639);
} else {
if((state_val_52706 === (22))){
var inst_52660 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52661 = figwheel.client.heads_up.append_warning_message.call(null,inst_52660);
var state_52705__$1 = state_52705;
var statearr_52722_52770 = state_52705__$1;
(statearr_52722_52770[(2)] = inst_52661);

(statearr_52722_52770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (36))){
var inst_52691 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52723_52771 = state_52705__$1;
(statearr_52723_52771[(2)] = inst_52691);

(statearr_52723_52771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (29))){
var inst_52671 = (state_52705[(2)]);
var inst_52672 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52673 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52672);
var state_52705__$1 = (function (){var statearr_52724 = state_52705;
(statearr_52724[(9)] = inst_52671);

return statearr_52724;
})();
var statearr_52725_52772 = state_52705__$1;
(statearr_52725_52772[(2)] = inst_52673);

(statearr_52725_52772[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (6))){
var inst_52620 = (state_52705[(10)]);
var state_52705__$1 = state_52705;
var statearr_52726_52773 = state_52705__$1;
(statearr_52726_52773[(2)] = inst_52620);

(statearr_52726_52773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (28))){
var inst_52667 = (state_52705[(2)]);
var inst_52668 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52669 = figwheel.client.heads_up.display_warning.call(null,inst_52668);
var state_52705__$1 = (function (){var statearr_52727 = state_52705;
(statearr_52727[(11)] = inst_52667);

return statearr_52727;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52705__$1,(29),inst_52669);
} else {
if((state_val_52706 === (25))){
var inst_52665 = figwheel.client.heads_up.clear.call(null);
var state_52705__$1 = state_52705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52705__$1,(28),inst_52665);
} else {
if((state_val_52706 === (34))){
var inst_52686 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52705__$1 = state_52705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52705__$1,(37),inst_52686);
} else {
if((state_val_52706 === (17))){
var inst_52645 = (state_52705[(2)]);
var inst_52646 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52647 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52646);
var state_52705__$1 = (function (){var statearr_52728 = state_52705;
(statearr_52728[(12)] = inst_52645);

return statearr_52728;
})();
var statearr_52729_52774 = state_52705__$1;
(statearr_52729_52774[(2)] = inst_52647);

(statearr_52729_52774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (3))){
var inst_52637 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_52705__$1 = state_52705;
if(cljs.core.truth_(inst_52637)){
var statearr_52730_52775 = state_52705__$1;
(statearr_52730_52775[(1)] = (13));

} else {
var statearr_52731_52776 = state_52705__$1;
(statearr_52731_52776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (12))){
var inst_52633 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52732_52777 = state_52705__$1;
(statearr_52732_52777[(2)] = inst_52633);

(statearr_52732_52777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (2))){
var inst_52620 = (state_52705[(10)]);
var inst_52620__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_52705__$1 = (function (){var statearr_52733 = state_52705;
(statearr_52733[(10)] = inst_52620__$1);

return statearr_52733;
})();
if(cljs.core.truth_(inst_52620__$1)){
var statearr_52734_52778 = state_52705__$1;
(statearr_52734_52778[(1)] = (5));

} else {
var statearr_52735_52779 = state_52705__$1;
(statearr_52735_52779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (23))){
var inst_52663 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_52705__$1 = state_52705;
if(cljs.core.truth_(inst_52663)){
var statearr_52736_52780 = state_52705__$1;
(statearr_52736_52780[(1)] = (25));

} else {
var statearr_52737_52781 = state_52705__$1;
(statearr_52737_52781[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (35))){
var state_52705__$1 = state_52705;
var statearr_52738_52782 = state_52705__$1;
(statearr_52738_52782[(2)] = null);

(statearr_52738_52782[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (19))){
var inst_52658 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_52705__$1 = state_52705;
if(cljs.core.truth_(inst_52658)){
var statearr_52739_52783 = state_52705__$1;
(statearr_52739_52783[(1)] = (22));

} else {
var statearr_52740_52784 = state_52705__$1;
(statearr_52740_52784[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (11))){
var inst_52629 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52741_52785 = state_52705__$1;
(statearr_52741_52785[(2)] = inst_52629);

(statearr_52741_52785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (9))){
var inst_52631 = figwheel.client.heads_up.clear.call(null);
var state_52705__$1 = state_52705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52705__$1,(12),inst_52631);
} else {
if((state_val_52706 === (5))){
var inst_52622 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_52705__$1 = state_52705;
var statearr_52742_52786 = state_52705__$1;
(statearr_52742_52786[(2)] = inst_52622);

(statearr_52742_52786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (14))){
var inst_52649 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_52705__$1 = state_52705;
if(cljs.core.truth_(inst_52649)){
var statearr_52743_52787 = state_52705__$1;
(statearr_52743_52787[(1)] = (18));

} else {
var statearr_52744_52788 = state_52705__$1;
(statearr_52744_52788[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (26))){
var inst_52675 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_52705__$1 = state_52705;
if(cljs.core.truth_(inst_52675)){
var statearr_52745_52789 = state_52705__$1;
(statearr_52745_52789[(1)] = (30));

} else {
var statearr_52746_52790 = state_52705__$1;
(statearr_52746_52790[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (16))){
var inst_52641 = (state_52705[(2)]);
var inst_52642 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52643 = figwheel.client.heads_up.display_exception.call(null,inst_52642);
var state_52705__$1 = (function (){var statearr_52747 = state_52705;
(statearr_52747[(13)] = inst_52641);

return statearr_52747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52705__$1,(17),inst_52643);
} else {
if((state_val_52706 === (30))){
var inst_52677 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52678 = figwheel.client.heads_up.display_warning.call(null,inst_52677);
var state_52705__$1 = state_52705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52705__$1,(33),inst_52678);
} else {
if((state_val_52706 === (10))){
var inst_52635 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52748_52791 = state_52705__$1;
(statearr_52748_52791[(2)] = inst_52635);

(statearr_52748_52791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (18))){
var inst_52651 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52652 = figwheel.client.heads_up.display_exception.call(null,inst_52651);
var state_52705__$1 = state_52705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52705__$1,(21),inst_52652);
} else {
if((state_val_52706 === (37))){
var inst_52688 = (state_52705[(2)]);
var state_52705__$1 = state_52705;
var statearr_52749_52792 = state_52705__$1;
(statearr_52749_52792[(2)] = inst_52688);

(statearr_52749_52792[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52706 === (8))){
var inst_52627 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52705__$1 = state_52705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52705__$1,(11),inst_52627);
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
});})(c__44165__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44053__auto__,c__44165__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto____0 = (function (){
var statearr_52753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52753[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto__);

(statearr_52753[(1)] = (1));

return statearr_52753;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto____1 = (function (state_52705){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_52705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e52754){if((e52754 instanceof Object)){
var ex__44057__auto__ = e52754;
var statearr_52755_52793 = state_52705;
(statearr_52755_52793[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52794 = state_52705;
state_52705 = G__52794;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto__ = function(state_52705){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto____1.call(this,state_52705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__,msg_hist,msg_names,msg))
})();
var state__44167__auto__ = (function (){var statearr_52756 = f__44166__auto__.call(null);
(statearr_52756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_52756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__,msg_hist,msg_names,msg))
);

return c__44165__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44165__auto___52857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___52857,ch){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___52857,ch){
return (function (state_52840){
var state_val_52841 = (state_52840[(1)]);
if((state_val_52841 === (1))){
var state_52840__$1 = state_52840;
var statearr_52842_52858 = state_52840__$1;
(statearr_52842_52858[(2)] = null);

(statearr_52842_52858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52841 === (2))){
var state_52840__$1 = state_52840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52840__$1,(4),ch);
} else {
if((state_val_52841 === (3))){
var inst_52838 = (state_52840[(2)]);
var state_52840__$1 = state_52840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52840__$1,inst_52838);
} else {
if((state_val_52841 === (4))){
var inst_52828 = (state_52840[(7)]);
var inst_52828__$1 = (state_52840[(2)]);
var state_52840__$1 = (function (){var statearr_52843 = state_52840;
(statearr_52843[(7)] = inst_52828__$1);

return statearr_52843;
})();
if(cljs.core.truth_(inst_52828__$1)){
var statearr_52844_52859 = state_52840__$1;
(statearr_52844_52859[(1)] = (5));

} else {
var statearr_52845_52860 = state_52840__$1;
(statearr_52845_52860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52841 === (5))){
var inst_52828 = (state_52840[(7)]);
var inst_52830 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_52828);
var state_52840__$1 = state_52840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52840__$1,(8),inst_52830);
} else {
if((state_val_52841 === (6))){
var state_52840__$1 = state_52840;
var statearr_52846_52861 = state_52840__$1;
(statearr_52846_52861[(2)] = null);

(statearr_52846_52861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52841 === (7))){
var inst_52836 = (state_52840[(2)]);
var state_52840__$1 = state_52840;
var statearr_52847_52862 = state_52840__$1;
(statearr_52847_52862[(2)] = inst_52836);

(statearr_52847_52862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52841 === (8))){
var inst_52832 = (state_52840[(2)]);
var state_52840__$1 = (function (){var statearr_52848 = state_52840;
(statearr_52848[(8)] = inst_52832);

return statearr_52848;
})();
var statearr_52849_52863 = state_52840__$1;
(statearr_52849_52863[(2)] = null);

(statearr_52849_52863[(1)] = (2));


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
});})(c__44165__auto___52857,ch))
;
return ((function (switch__44053__auto__,c__44165__auto___52857,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44054__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44054__auto____0 = (function (){
var statearr_52853 = [null,null,null,null,null,null,null,null,null];
(statearr_52853[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44054__auto__);

(statearr_52853[(1)] = (1));

return statearr_52853;
});
var figwheel$client$heads_up_plugin_$_state_machine__44054__auto____1 = (function (state_52840){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_52840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e52854){if((e52854 instanceof Object)){
var ex__44057__auto__ = e52854;
var statearr_52855_52864 = state_52840;
(statearr_52855_52864[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52865 = state_52840;
state_52840 = G__52865;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44054__auto__ = function(state_52840){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44054__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44054__auto____1.call(this,state_52840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44054__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44054__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___52857,ch))
})();
var state__44167__auto__ = (function (){var statearr_52856 = f__44166__auto__.call(null);
(statearr_52856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___52857);

return statearr_52856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___52857,ch))
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
var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__){
return (function (state_52886){
var state_val_52887 = (state_52886[(1)]);
if((state_val_52887 === (1))){
var inst_52881 = cljs.core.async.timeout.call(null,(3000));
var state_52886__$1 = state_52886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52886__$1,(2),inst_52881);
} else {
if((state_val_52887 === (2))){
var inst_52883 = (state_52886[(2)]);
var inst_52884 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52886__$1 = (function (){var statearr_52888 = state_52886;
(statearr_52888[(7)] = inst_52883);

return statearr_52888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52886__$1,inst_52884);
} else {
return null;
}
}
});})(c__44165__auto__))
;
return ((function (switch__44053__auto__,c__44165__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44054__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44054__auto____0 = (function (){
var statearr_52892 = [null,null,null,null,null,null,null,null];
(statearr_52892[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44054__auto__);

(statearr_52892[(1)] = (1));

return statearr_52892;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44054__auto____1 = (function (state_52886){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_52886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e52893){if((e52893 instanceof Object)){
var ex__44057__auto__ = e52893;
var statearr_52894_52896 = state_52886;
(statearr_52894_52896[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52897 = state_52886;
state_52886 = G__52897;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44054__auto__ = function(state_52886){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44054__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44054__auto____1.call(this,state_52886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44054__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44054__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__))
})();
var state__44167__auto__ = (function (){var statearr_52895 = f__44166__auto__.call(null);
(statearr_52895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_52895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__))
);

return c__44165__auto__;
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
var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__,figwheel_version,temp__4657__auto__){
return (function (state_52920){
var state_val_52921 = (state_52920[(1)]);
if((state_val_52921 === (1))){
var inst_52914 = cljs.core.async.timeout.call(null,(2000));
var state_52920__$1 = state_52920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52920__$1,(2),inst_52914);
} else {
if((state_val_52921 === (2))){
var inst_52916 = (state_52920[(2)]);
var inst_52917 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_52918 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52917);
var state_52920__$1 = (function (){var statearr_52922 = state_52920;
(statearr_52922[(7)] = inst_52916);

return statearr_52922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52920__$1,inst_52918);
} else {
return null;
}
}
});})(c__44165__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__44053__auto__,c__44165__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto____0 = (function (){
var statearr_52926 = [null,null,null,null,null,null,null,null];
(statearr_52926[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto__);

(statearr_52926[(1)] = (1));

return statearr_52926;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto____1 = (function (state_52920){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_52920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e52927){if((e52927 instanceof Object)){
var ex__44057__auto__ = e52927;
var statearr_52928_52930 = state_52920;
(statearr_52928_52930[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52931 = state_52920;
state_52920 = G__52931;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto__ = function(state_52920){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto____1.call(this,state_52920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__,figwheel_version,temp__4657__auto__))
})();
var state__44167__auto__ = (function (){var statearr_52929 = f__44166__auto__.call(null);
(statearr_52929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_52929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__,figwheel_version,temp__4657__auto__))
);

return c__44165__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52932){
var map__52936 = p__52932;
var map__52936__$1 = ((((!((map__52936 == null)))?((((map__52936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52936):map__52936);
var file = cljs.core.get.call(null,map__52936__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52936__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52936__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52938 = "";
var G__52938__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__52938),cljs.core.str("file "),cljs.core.str(file)].join(''):G__52938);
var G__52938__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__52938__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__52938__$1);
if(cljs.core.truth_((function (){var and__41981__auto__ = line;
if(cljs.core.truth_(and__41981__auto__)){
return column;
} else {
return and__41981__auto__;
}
})())){
return [cljs.core.str(G__52938__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__52938__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52939){
var map__52946 = p__52939;
var map__52946__$1 = ((((!((map__52946 == null)))?((((map__52946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52946):map__52946);
var ed = map__52946__$1;
var formatted_exception = cljs.core.get.call(null,map__52946__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52946__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52946__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52948_52952 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52949_52953 = null;
var count__52950_52954 = (0);
var i__52951_52955 = (0);
while(true){
if((i__52951_52955 < count__52950_52954)){
var msg_52956 = cljs.core._nth.call(null,chunk__52949_52953,i__52951_52955);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52956);

var G__52957 = seq__52948_52952;
var G__52958 = chunk__52949_52953;
var G__52959 = count__52950_52954;
var G__52960 = (i__52951_52955 + (1));
seq__52948_52952 = G__52957;
chunk__52949_52953 = G__52958;
count__52950_52954 = G__52959;
i__52951_52955 = G__52960;
continue;
} else {
var temp__4657__auto___52961 = cljs.core.seq.call(null,seq__52948_52952);
if(temp__4657__auto___52961){
var seq__52948_52962__$1 = temp__4657__auto___52961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52948_52962__$1)){
var c__42804__auto___52963 = cljs.core.chunk_first.call(null,seq__52948_52962__$1);
var G__52964 = cljs.core.chunk_rest.call(null,seq__52948_52962__$1);
var G__52965 = c__42804__auto___52963;
var G__52966 = cljs.core.count.call(null,c__42804__auto___52963);
var G__52967 = (0);
seq__52948_52952 = G__52964;
chunk__52949_52953 = G__52965;
count__52950_52954 = G__52966;
i__52951_52955 = G__52967;
continue;
} else {
var msg_52968 = cljs.core.first.call(null,seq__52948_52962__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52968);

var G__52969 = cljs.core.next.call(null,seq__52948_52962__$1);
var G__52970 = null;
var G__52971 = (0);
var G__52972 = (0);
seq__52948_52952 = G__52969;
chunk__52949_52953 = G__52970;
count__52950_52954 = G__52971;
i__52951_52955 = G__52972;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52973){
var map__52976 = p__52973;
var map__52976__$1 = ((((!((map__52976 == null)))?((((map__52976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52976):map__52976);
var w = map__52976__$1;
var message = cljs.core.get.call(null,map__52976__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__52988 = cljs.core.seq.call(null,plugins);
var chunk__52989 = null;
var count__52990 = (0);
var i__52991 = (0);
while(true){
if((i__52991 < count__52990)){
var vec__52992 = cljs.core._nth.call(null,chunk__52989,i__52991);
var k = cljs.core.nth.call(null,vec__52992,(0),null);
var plugin = cljs.core.nth.call(null,vec__52992,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52998 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52988,chunk__52989,count__52990,i__52991,pl_52998,vec__52992,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_52998.call(null,msg_hist);
});})(seq__52988,chunk__52989,count__52990,i__52991,pl_52998,vec__52992,k,plugin))
);
} else {
}

var G__52999 = seq__52988;
var G__53000 = chunk__52989;
var G__53001 = count__52990;
var G__53002 = (i__52991 + (1));
seq__52988 = G__52999;
chunk__52989 = G__53000;
count__52990 = G__53001;
i__52991 = G__53002;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52988);
if(temp__4657__auto__){
var seq__52988__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52988__$1)){
var c__42804__auto__ = cljs.core.chunk_first.call(null,seq__52988__$1);
var G__53003 = cljs.core.chunk_rest.call(null,seq__52988__$1);
var G__53004 = c__42804__auto__;
var G__53005 = cljs.core.count.call(null,c__42804__auto__);
var G__53006 = (0);
seq__52988 = G__53003;
chunk__52989 = G__53004;
count__52990 = G__53005;
i__52991 = G__53006;
continue;
} else {
var vec__52995 = cljs.core.first.call(null,seq__52988__$1);
var k = cljs.core.nth.call(null,vec__52995,(0),null);
var plugin = cljs.core.nth.call(null,vec__52995,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53007 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52988,chunk__52989,count__52990,i__52991,pl_53007,vec__52995,k,plugin,seq__52988__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_53007.call(null,msg_hist);
});})(seq__52988,chunk__52989,count__52990,i__52991,pl_53007,vec__52995,k,plugin,seq__52988__$1,temp__4657__auto__))
);
} else {
}

var G__53008 = cljs.core.next.call(null,seq__52988__$1);
var G__53009 = null;
var G__53010 = (0);
var G__53011 = (0);
seq__52988 = G__53008;
chunk__52989 = G__53009;
count__52990 = G__53010;
i__52991 = G__53011;
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
var args53012 = [];
var len__43068__auto___53019 = arguments.length;
var i__43069__auto___53020 = (0);
while(true){
if((i__43069__auto___53020 < len__43068__auto___53019)){
args53012.push((arguments[i__43069__auto___53020]));

var G__53021 = (i__43069__auto___53020 + (1));
i__43069__auto___53020 = G__53021;
continue;
} else {
}
break;
}

var G__53014 = args53012.length;
switch (G__53014) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53012.length)].join('')));

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

var seq__53015_53023 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__53016_53024 = null;
var count__53017_53025 = (0);
var i__53018_53026 = (0);
while(true){
if((i__53018_53026 < count__53017_53025)){
var msg_53027 = cljs.core._nth.call(null,chunk__53016_53024,i__53018_53026);
figwheel.client.socket.handle_incoming_message.call(null,msg_53027);

var G__53028 = seq__53015_53023;
var G__53029 = chunk__53016_53024;
var G__53030 = count__53017_53025;
var G__53031 = (i__53018_53026 + (1));
seq__53015_53023 = G__53028;
chunk__53016_53024 = G__53029;
count__53017_53025 = G__53030;
i__53018_53026 = G__53031;
continue;
} else {
var temp__4657__auto___53032 = cljs.core.seq.call(null,seq__53015_53023);
if(temp__4657__auto___53032){
var seq__53015_53033__$1 = temp__4657__auto___53032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53015_53033__$1)){
var c__42804__auto___53034 = cljs.core.chunk_first.call(null,seq__53015_53033__$1);
var G__53035 = cljs.core.chunk_rest.call(null,seq__53015_53033__$1);
var G__53036 = c__42804__auto___53034;
var G__53037 = cljs.core.count.call(null,c__42804__auto___53034);
var G__53038 = (0);
seq__53015_53023 = G__53035;
chunk__53016_53024 = G__53036;
count__53017_53025 = G__53037;
i__53018_53026 = G__53038;
continue;
} else {
var msg_53039 = cljs.core.first.call(null,seq__53015_53033__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_53039);

var G__53040 = cljs.core.next.call(null,seq__53015_53033__$1);
var G__53041 = null;
var G__53042 = (0);
var G__53043 = (0);
seq__53015_53023 = G__53040;
chunk__53016_53024 = G__53041;
count__53017_53025 = G__53042;
i__53018_53026 = G__53043;
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
var len__43068__auto___53048 = arguments.length;
var i__43069__auto___53049 = (0);
while(true){
if((i__43069__auto___53049 < len__43068__auto___53048)){
args__43075__auto__.push((arguments[i__43069__auto___53049]));

var G__53050 = (i__43069__auto___53049 + (1));
i__43069__auto___53049 = G__53050;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((0) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__43076__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__53045){
var map__53046 = p__53045;
var map__53046__$1 = ((((!((map__53046 == null)))?((((map__53046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53046):map__53046);
var opts = map__53046__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq53044){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53044));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e53052){if((e53052 instanceof Error)){
var e = e53052;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e53052;

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
return (function (p__53056){
var map__53057 = p__53056;
var map__53057__$1 = ((((!((map__53057 == null)))?((((map__53057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53057):map__53057);
var msg_name = cljs.core.get.call(null,map__53057__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504724088735