// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args44210 = [];
var len__43068__auto___44216 = arguments.length;
var i__43069__auto___44217 = (0);
while(true){
if((i__43069__auto___44217 < len__43068__auto___44216)){
args44210.push((arguments[i__43069__auto___44217]));

var G__44218 = (i__43069__auto___44217 + (1));
i__43069__auto___44217 = G__44218;
continue;
} else {
}
break;
}

var G__44212 = args44210.length;
switch (G__44212) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44210.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44213 = (function (f,blockable,meta44214){
this.f = f;
this.blockable = blockable;
this.meta44214 = meta44214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44215,meta44214__$1){
var self__ = this;
var _44215__$1 = this;
return (new cljs.core.async.t_cljs$core$async44213(self__.f,self__.blockable,meta44214__$1));
});

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44215){
var self__ = this;
var _44215__$1 = this;
return self__.meta44214;
});

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44214","meta44214",-2123347516,null)], null);
});

cljs.core.async.t_cljs$core$async44213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44213";

cljs.core.async.t_cljs$core$async44213.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async44213");
});

cljs.core.async.__GT_t_cljs$core$async44213 = (function cljs$core$async$__GT_t_cljs$core$async44213(f__$1,blockable__$1,meta44214){
return (new cljs.core.async.t_cljs$core$async44213(f__$1,blockable__$1,meta44214));
});

}

return (new cljs.core.async.t_cljs$core$async44213(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args44222 = [];
var len__43068__auto___44225 = arguments.length;
var i__43069__auto___44226 = (0);
while(true){
if((i__43069__auto___44226 < len__43068__auto___44225)){
args44222.push((arguments[i__43069__auto___44226]));

var G__44227 = (i__43069__auto___44226 + (1));
i__43069__auto___44226 = G__44227;
continue;
} else {
}
break;
}

var G__44224 = args44222.length;
switch (G__44224) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44222.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args44229 = [];
var len__43068__auto___44232 = arguments.length;
var i__43069__auto___44233 = (0);
while(true){
if((i__43069__auto___44233 < len__43068__auto___44232)){
args44229.push((arguments[i__43069__auto___44233]));

var G__44234 = (i__43069__auto___44233 + (1));
i__43069__auto___44233 = G__44234;
continue;
} else {
}
break;
}

var G__44231 = args44229.length;
switch (G__44231) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44229.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args44236 = [];
var len__43068__auto___44239 = arguments.length;
var i__43069__auto___44240 = (0);
while(true){
if((i__43069__auto___44240 < len__43068__auto___44239)){
args44236.push((arguments[i__43069__auto___44240]));

var G__44241 = (i__43069__auto___44240 + (1));
i__43069__auto___44240 = G__44241;
continue;
} else {
}
break;
}

var G__44238 = args44236.length;
switch (G__44238) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44236.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44243 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44243);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44243,ret){
return (function (){
return fn1.call(null,val_44243);
});})(val_44243,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args44244 = [];
var len__43068__auto___44247 = arguments.length;
var i__43069__auto___44248 = (0);
while(true){
if((i__43069__auto___44248 < len__43068__auto___44247)){
args44244.push((arguments[i__43069__auto___44248]));

var G__44249 = (i__43069__auto___44248 + (1));
i__43069__auto___44248 = G__44249;
continue;
} else {
}
break;
}

var G__44246 = args44244.length;
switch (G__44246) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44244.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__42908__auto___44251 = n;
var x_44252 = (0);
while(true){
if((x_44252 < n__42908__auto___44251)){
(a[x_44252] = (0));

var G__44253 = (x_44252 + (1));
x_44252 = G__44253;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44254 = (i + (1));
i = G__44254;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44258 = (function (alt_flag,flag,meta44259){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44259 = meta44259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44260,meta44259__$1){
var self__ = this;
var _44260__$1 = this;
return (new cljs.core.async.t_cljs$core$async44258(self__.alt_flag,self__.flag,meta44259__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44260){
var self__ = this;
var _44260__$1 = this;
return self__.meta44259;
});})(flag))
;

cljs.core.async.t_cljs$core$async44258.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44258.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44259","meta44259",-1201809657,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44258";

cljs.core.async.t_cljs$core$async44258.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async44258");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44258 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44258(alt_flag__$1,flag__$1,meta44259){
return (new cljs.core.async.t_cljs$core$async44258(alt_flag__$1,flag__$1,meta44259));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44258(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44264 = (function (alt_handler,flag,cb,meta44265){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44265 = meta44265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44266,meta44265__$1){
var self__ = this;
var _44266__$1 = this;
return (new cljs.core.async.t_cljs$core$async44264(self__.alt_handler,self__.flag,self__.cb,meta44265__$1));
});

cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44266){
var self__ = this;
var _44266__$1 = this;
return self__.meta44265;
});

cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44265","meta44265",2045435880,null)], null);
});

cljs.core.async.t_cljs$core$async44264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44264";

cljs.core.async.t_cljs$core$async44264.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async44264");
});

cljs.core.async.__GT_t_cljs$core$async44264 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44264(alt_handler__$1,flag__$1,cb__$1,meta44265){
return (new cljs.core.async.t_cljs$core$async44264(alt_handler__$1,flag__$1,cb__$1,meta44265));
});

}

return (new cljs.core.async.t_cljs$core$async44264(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44267_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44267_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44268_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44268_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41993__auto__ = wport;
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44269 = (i + (1));
i = G__44269;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41993__auto__ = ret;
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__41981__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41981__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41981__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__43075__auto__ = [];
var len__43068__auto___44275 = arguments.length;
var i__43069__auto___44276 = (0);
while(true){
if((i__43069__auto___44276 < len__43068__auto___44275)){
args__43075__auto__.push((arguments[i__43069__auto___44276]));

var G__44277 = (i__43069__auto___44276 + (1));
i__43069__auto___44276 = G__44277;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((1) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43076__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44272){
var map__44273 = p__44272;
var map__44273__$1 = ((((!((map__44273 == null)))?((((map__44273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44273):map__44273);
var opts = map__44273__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44270){
var G__44271 = cljs.core.first.call(null,seq44270);
var seq44270__$1 = cljs.core.next.call(null,seq44270);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44271,seq44270__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args44278 = [];
var len__43068__auto___44328 = arguments.length;
var i__43069__auto___44329 = (0);
while(true){
if((i__43069__auto___44329 < len__43068__auto___44328)){
args44278.push((arguments[i__43069__auto___44329]));

var G__44330 = (i__43069__auto___44329 + (1));
i__43069__auto___44329 = G__44330;
continue;
} else {
}
break;
}

var G__44280 = args44278.length;
switch (G__44280) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44278.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44165__auto___44332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___44332){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___44332){
return (function (state_44304){
var state_val_44305 = (state_44304[(1)]);
if((state_val_44305 === (7))){
var inst_44300 = (state_44304[(2)]);
var state_44304__$1 = state_44304;
var statearr_44306_44333 = state_44304__$1;
(statearr_44306_44333[(2)] = inst_44300);

(statearr_44306_44333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (1))){
var state_44304__$1 = state_44304;
var statearr_44307_44334 = state_44304__$1;
(statearr_44307_44334[(2)] = null);

(statearr_44307_44334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (4))){
var inst_44283 = (state_44304[(7)]);
var inst_44283__$1 = (state_44304[(2)]);
var inst_44284 = (inst_44283__$1 == null);
var state_44304__$1 = (function (){var statearr_44308 = state_44304;
(statearr_44308[(7)] = inst_44283__$1);

return statearr_44308;
})();
if(cljs.core.truth_(inst_44284)){
var statearr_44309_44335 = state_44304__$1;
(statearr_44309_44335[(1)] = (5));

} else {
var statearr_44310_44336 = state_44304__$1;
(statearr_44310_44336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (13))){
var state_44304__$1 = state_44304;
var statearr_44311_44337 = state_44304__$1;
(statearr_44311_44337[(2)] = null);

(statearr_44311_44337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (6))){
var inst_44283 = (state_44304[(7)]);
var state_44304__$1 = state_44304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44304__$1,(11),to,inst_44283);
} else {
if((state_val_44305 === (3))){
var inst_44302 = (state_44304[(2)]);
var state_44304__$1 = state_44304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44304__$1,inst_44302);
} else {
if((state_val_44305 === (12))){
var state_44304__$1 = state_44304;
var statearr_44312_44338 = state_44304__$1;
(statearr_44312_44338[(2)] = null);

(statearr_44312_44338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (2))){
var state_44304__$1 = state_44304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44304__$1,(4),from);
} else {
if((state_val_44305 === (11))){
var inst_44293 = (state_44304[(2)]);
var state_44304__$1 = state_44304;
if(cljs.core.truth_(inst_44293)){
var statearr_44313_44339 = state_44304__$1;
(statearr_44313_44339[(1)] = (12));

} else {
var statearr_44314_44340 = state_44304__$1;
(statearr_44314_44340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (9))){
var state_44304__$1 = state_44304;
var statearr_44315_44341 = state_44304__$1;
(statearr_44315_44341[(2)] = null);

(statearr_44315_44341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (5))){
var state_44304__$1 = state_44304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44316_44342 = state_44304__$1;
(statearr_44316_44342[(1)] = (8));

} else {
var statearr_44317_44343 = state_44304__$1;
(statearr_44317_44343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (14))){
var inst_44298 = (state_44304[(2)]);
var state_44304__$1 = state_44304;
var statearr_44318_44344 = state_44304__$1;
(statearr_44318_44344[(2)] = inst_44298);

(statearr_44318_44344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (10))){
var inst_44290 = (state_44304[(2)]);
var state_44304__$1 = state_44304;
var statearr_44319_44345 = state_44304__$1;
(statearr_44319_44345[(2)] = inst_44290);

(statearr_44319_44345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (8))){
var inst_44287 = cljs.core.async.close_BANG_.call(null,to);
var state_44304__$1 = state_44304;
var statearr_44320_44346 = state_44304__$1;
(statearr_44320_44346[(2)] = inst_44287);

(statearr_44320_44346[(1)] = (10));


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
});})(c__44165__auto___44332))
;
return ((function (switch__44053__auto__,c__44165__auto___44332){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_44324 = [null,null,null,null,null,null,null,null];
(statearr_44324[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_44324[(1)] = (1));

return statearr_44324;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_44304){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_44304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e44325){if((e44325 instanceof Object)){
var ex__44057__auto__ = e44325;
var statearr_44326_44347 = state_44304;
(statearr_44326_44347[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44348 = state_44304;
state_44304 = G__44348;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_44304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_44304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___44332))
})();
var state__44167__auto__ = (function (){var statearr_44327 = f__44166__auto__.call(null);
(statearr_44327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___44332);

return statearr_44327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___44332))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44536){
var vec__44537 = p__44536;
var v = cljs.core.nth.call(null,vec__44537,(0),null);
var p = cljs.core.nth.call(null,vec__44537,(1),null);
var job = vec__44537;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44165__auto___44723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___44723,res,vec__44537,v,p,job,jobs,results){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___44723,res,vec__44537,v,p,job,jobs,results){
return (function (state_44544){
var state_val_44545 = (state_44544[(1)]);
if((state_val_44545 === (1))){
var state_44544__$1 = state_44544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44544__$1,(2),res,v);
} else {
if((state_val_44545 === (2))){
var inst_44541 = (state_44544[(2)]);
var inst_44542 = cljs.core.async.close_BANG_.call(null,res);
var state_44544__$1 = (function (){var statearr_44546 = state_44544;
(statearr_44546[(7)] = inst_44541);

return statearr_44546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44544__$1,inst_44542);
} else {
return null;
}
}
});})(c__44165__auto___44723,res,vec__44537,v,p,job,jobs,results))
;
return ((function (switch__44053__auto__,c__44165__auto___44723,res,vec__44537,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0 = (function (){
var statearr_44550 = [null,null,null,null,null,null,null,null];
(statearr_44550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__);

(statearr_44550[(1)] = (1));

return statearr_44550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1 = (function (state_44544){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_44544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e44551){if((e44551 instanceof Object)){
var ex__44057__auto__ = e44551;
var statearr_44552_44724 = state_44544;
(statearr_44552_44724[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44725 = state_44544;
state_44544 = G__44725;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = function(state_44544){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1.call(this,state_44544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___44723,res,vec__44537,v,p,job,jobs,results))
})();
var state__44167__auto__ = (function (){var statearr_44553 = f__44166__auto__.call(null);
(statearr_44553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___44723);

return statearr_44553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___44723,res,vec__44537,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44554){
var vec__44555 = p__44554;
var v = cljs.core.nth.call(null,vec__44555,(0),null);
var p = cljs.core.nth.call(null,vec__44555,(1),null);
var job = vec__44555;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__42908__auto___44726 = n;
var __44727 = (0);
while(true){
if((__44727 < n__42908__auto___44726)){
var G__44558_44728 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44558_44728) {
case "compute":
var c__44165__auto___44730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44727,c__44165__auto___44730,G__44558_44728,n__42908__auto___44726,jobs,results,process,async){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (__44727,c__44165__auto___44730,G__44558_44728,n__42908__auto___44726,jobs,results,process,async){
return (function (state_44571){
var state_val_44572 = (state_44571[(1)]);
if((state_val_44572 === (1))){
var state_44571__$1 = state_44571;
var statearr_44573_44731 = state_44571__$1;
(statearr_44573_44731[(2)] = null);

(statearr_44573_44731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44572 === (2))){
var state_44571__$1 = state_44571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44571__$1,(4),jobs);
} else {
if((state_val_44572 === (3))){
var inst_44569 = (state_44571[(2)]);
var state_44571__$1 = state_44571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44571__$1,inst_44569);
} else {
if((state_val_44572 === (4))){
var inst_44561 = (state_44571[(2)]);
var inst_44562 = process.call(null,inst_44561);
var state_44571__$1 = state_44571;
if(cljs.core.truth_(inst_44562)){
var statearr_44574_44732 = state_44571__$1;
(statearr_44574_44732[(1)] = (5));

} else {
var statearr_44575_44733 = state_44571__$1;
(statearr_44575_44733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44572 === (5))){
var state_44571__$1 = state_44571;
var statearr_44576_44734 = state_44571__$1;
(statearr_44576_44734[(2)] = null);

(statearr_44576_44734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44572 === (6))){
var state_44571__$1 = state_44571;
var statearr_44577_44735 = state_44571__$1;
(statearr_44577_44735[(2)] = null);

(statearr_44577_44735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44572 === (7))){
var inst_44567 = (state_44571[(2)]);
var state_44571__$1 = state_44571;
var statearr_44578_44736 = state_44571__$1;
(statearr_44578_44736[(2)] = inst_44567);

(statearr_44578_44736[(1)] = (3));


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
});})(__44727,c__44165__auto___44730,G__44558_44728,n__42908__auto___44726,jobs,results,process,async))
;
return ((function (__44727,switch__44053__auto__,c__44165__auto___44730,G__44558_44728,n__42908__auto___44726,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0 = (function (){
var statearr_44582 = [null,null,null,null,null,null,null];
(statearr_44582[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__);

(statearr_44582[(1)] = (1));

return statearr_44582;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1 = (function (state_44571){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_44571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e44583){if((e44583 instanceof Object)){
var ex__44057__auto__ = e44583;
var statearr_44584_44737 = state_44571;
(statearr_44584_44737[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44738 = state_44571;
state_44571 = G__44738;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = function(state_44571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1.call(this,state_44571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__;
})()
;})(__44727,switch__44053__auto__,c__44165__auto___44730,G__44558_44728,n__42908__auto___44726,jobs,results,process,async))
})();
var state__44167__auto__ = (function (){var statearr_44585 = f__44166__auto__.call(null);
(statearr_44585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___44730);

return statearr_44585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(__44727,c__44165__auto___44730,G__44558_44728,n__42908__auto___44726,jobs,results,process,async))
);


break;
case "async":
var c__44165__auto___44739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44727,c__44165__auto___44739,G__44558_44728,n__42908__auto___44726,jobs,results,process,async){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (__44727,c__44165__auto___44739,G__44558_44728,n__42908__auto___44726,jobs,results,process,async){
return (function (state_44598){
var state_val_44599 = (state_44598[(1)]);
if((state_val_44599 === (1))){
var state_44598__$1 = state_44598;
var statearr_44600_44740 = state_44598__$1;
(statearr_44600_44740[(2)] = null);

(statearr_44600_44740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (2))){
var state_44598__$1 = state_44598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44598__$1,(4),jobs);
} else {
if((state_val_44599 === (3))){
var inst_44596 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44598__$1,inst_44596);
} else {
if((state_val_44599 === (4))){
var inst_44588 = (state_44598[(2)]);
var inst_44589 = async.call(null,inst_44588);
var state_44598__$1 = state_44598;
if(cljs.core.truth_(inst_44589)){
var statearr_44601_44741 = state_44598__$1;
(statearr_44601_44741[(1)] = (5));

} else {
var statearr_44602_44742 = state_44598__$1;
(statearr_44602_44742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (5))){
var state_44598__$1 = state_44598;
var statearr_44603_44743 = state_44598__$1;
(statearr_44603_44743[(2)] = null);

(statearr_44603_44743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (6))){
var state_44598__$1 = state_44598;
var statearr_44604_44744 = state_44598__$1;
(statearr_44604_44744[(2)] = null);

(statearr_44604_44744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (7))){
var inst_44594 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44605_44745 = state_44598__$1;
(statearr_44605_44745[(2)] = inst_44594);

(statearr_44605_44745[(1)] = (3));


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
});})(__44727,c__44165__auto___44739,G__44558_44728,n__42908__auto___44726,jobs,results,process,async))
;
return ((function (__44727,switch__44053__auto__,c__44165__auto___44739,G__44558_44728,n__42908__auto___44726,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0 = (function (){
var statearr_44609 = [null,null,null,null,null,null,null];
(statearr_44609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__);

(statearr_44609[(1)] = (1));

return statearr_44609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1 = (function (state_44598){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_44598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e44610){if((e44610 instanceof Object)){
var ex__44057__auto__ = e44610;
var statearr_44611_44746 = state_44598;
(statearr_44611_44746[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44747 = state_44598;
state_44598 = G__44747;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = function(state_44598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1.call(this,state_44598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__;
})()
;})(__44727,switch__44053__auto__,c__44165__auto___44739,G__44558_44728,n__42908__auto___44726,jobs,results,process,async))
})();
var state__44167__auto__ = (function (){var statearr_44612 = f__44166__auto__.call(null);
(statearr_44612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___44739);

return statearr_44612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(__44727,c__44165__auto___44739,G__44558_44728,n__42908__auto___44726,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__44748 = (__44727 + (1));
__44727 = G__44748;
continue;
} else {
}
break;
}

var c__44165__auto___44749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___44749,jobs,results,process,async){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___44749,jobs,results,process,async){
return (function (state_44634){
var state_val_44635 = (state_44634[(1)]);
if((state_val_44635 === (1))){
var state_44634__$1 = state_44634;
var statearr_44636_44750 = state_44634__$1;
(statearr_44636_44750[(2)] = null);

(statearr_44636_44750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44635 === (2))){
var state_44634__$1 = state_44634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44634__$1,(4),from);
} else {
if((state_val_44635 === (3))){
var inst_44632 = (state_44634[(2)]);
var state_44634__$1 = state_44634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44634__$1,inst_44632);
} else {
if((state_val_44635 === (4))){
var inst_44615 = (state_44634[(7)]);
var inst_44615__$1 = (state_44634[(2)]);
var inst_44616 = (inst_44615__$1 == null);
var state_44634__$1 = (function (){var statearr_44637 = state_44634;
(statearr_44637[(7)] = inst_44615__$1);

return statearr_44637;
})();
if(cljs.core.truth_(inst_44616)){
var statearr_44638_44751 = state_44634__$1;
(statearr_44638_44751[(1)] = (5));

} else {
var statearr_44639_44752 = state_44634__$1;
(statearr_44639_44752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44635 === (5))){
var inst_44618 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44634__$1 = state_44634;
var statearr_44640_44753 = state_44634__$1;
(statearr_44640_44753[(2)] = inst_44618);

(statearr_44640_44753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44635 === (6))){
var inst_44620 = (state_44634[(8)]);
var inst_44615 = (state_44634[(7)]);
var inst_44620__$1 = cljs.core.async.chan.call(null,(1));
var inst_44621 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44622 = [inst_44615,inst_44620__$1];
var inst_44623 = (new cljs.core.PersistentVector(null,2,(5),inst_44621,inst_44622,null));
var state_44634__$1 = (function (){var statearr_44641 = state_44634;
(statearr_44641[(8)] = inst_44620__$1);

return statearr_44641;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44634__$1,(8),jobs,inst_44623);
} else {
if((state_val_44635 === (7))){
var inst_44630 = (state_44634[(2)]);
var state_44634__$1 = state_44634;
var statearr_44642_44754 = state_44634__$1;
(statearr_44642_44754[(2)] = inst_44630);

(statearr_44642_44754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44635 === (8))){
var inst_44620 = (state_44634[(8)]);
var inst_44625 = (state_44634[(2)]);
var state_44634__$1 = (function (){var statearr_44643 = state_44634;
(statearr_44643[(9)] = inst_44625);

return statearr_44643;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44634__$1,(9),results,inst_44620);
} else {
if((state_val_44635 === (9))){
var inst_44627 = (state_44634[(2)]);
var state_44634__$1 = (function (){var statearr_44644 = state_44634;
(statearr_44644[(10)] = inst_44627);

return statearr_44644;
})();
var statearr_44645_44755 = state_44634__$1;
(statearr_44645_44755[(2)] = null);

(statearr_44645_44755[(1)] = (2));


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
});})(c__44165__auto___44749,jobs,results,process,async))
;
return ((function (switch__44053__auto__,c__44165__auto___44749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0 = (function (){
var statearr_44649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__);

(statearr_44649[(1)] = (1));

return statearr_44649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1 = (function (state_44634){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_44634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e44650){if((e44650 instanceof Object)){
var ex__44057__auto__ = e44650;
var statearr_44651_44756 = state_44634;
(statearr_44651_44756[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44757 = state_44634;
state_44634 = G__44757;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = function(state_44634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1.call(this,state_44634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___44749,jobs,results,process,async))
})();
var state__44167__auto__ = (function (){var statearr_44652 = f__44166__auto__.call(null);
(statearr_44652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___44749);

return statearr_44652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___44749,jobs,results,process,async))
);


var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__,jobs,results,process,async){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__,jobs,results,process,async){
return (function (state_44690){
var state_val_44691 = (state_44690[(1)]);
if((state_val_44691 === (7))){
var inst_44686 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44692_44758 = state_44690__$1;
(statearr_44692_44758[(2)] = inst_44686);

(statearr_44692_44758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (20))){
var state_44690__$1 = state_44690;
var statearr_44693_44759 = state_44690__$1;
(statearr_44693_44759[(2)] = null);

(statearr_44693_44759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (1))){
var state_44690__$1 = state_44690;
var statearr_44694_44760 = state_44690__$1;
(statearr_44694_44760[(2)] = null);

(statearr_44694_44760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (4))){
var inst_44655 = (state_44690[(7)]);
var inst_44655__$1 = (state_44690[(2)]);
var inst_44656 = (inst_44655__$1 == null);
var state_44690__$1 = (function (){var statearr_44695 = state_44690;
(statearr_44695[(7)] = inst_44655__$1);

return statearr_44695;
})();
if(cljs.core.truth_(inst_44656)){
var statearr_44696_44761 = state_44690__$1;
(statearr_44696_44761[(1)] = (5));

} else {
var statearr_44697_44762 = state_44690__$1;
(statearr_44697_44762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (15))){
var inst_44668 = (state_44690[(8)]);
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44690__$1,(18),to,inst_44668);
} else {
if((state_val_44691 === (21))){
var inst_44681 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44698_44763 = state_44690__$1;
(statearr_44698_44763[(2)] = inst_44681);

(statearr_44698_44763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (13))){
var inst_44683 = (state_44690[(2)]);
var state_44690__$1 = (function (){var statearr_44699 = state_44690;
(statearr_44699[(9)] = inst_44683);

return statearr_44699;
})();
var statearr_44700_44764 = state_44690__$1;
(statearr_44700_44764[(2)] = null);

(statearr_44700_44764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (6))){
var inst_44655 = (state_44690[(7)]);
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44690__$1,(11),inst_44655);
} else {
if((state_val_44691 === (17))){
var inst_44676 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
if(cljs.core.truth_(inst_44676)){
var statearr_44701_44765 = state_44690__$1;
(statearr_44701_44765[(1)] = (19));

} else {
var statearr_44702_44766 = state_44690__$1;
(statearr_44702_44766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (3))){
var inst_44688 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44690__$1,inst_44688);
} else {
if((state_val_44691 === (12))){
var inst_44665 = (state_44690[(10)]);
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44690__$1,(14),inst_44665);
} else {
if((state_val_44691 === (2))){
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44690__$1,(4),results);
} else {
if((state_val_44691 === (19))){
var state_44690__$1 = state_44690;
var statearr_44703_44767 = state_44690__$1;
(statearr_44703_44767[(2)] = null);

(statearr_44703_44767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (11))){
var inst_44665 = (state_44690[(2)]);
var state_44690__$1 = (function (){var statearr_44704 = state_44690;
(statearr_44704[(10)] = inst_44665);

return statearr_44704;
})();
var statearr_44705_44768 = state_44690__$1;
(statearr_44705_44768[(2)] = null);

(statearr_44705_44768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (9))){
var state_44690__$1 = state_44690;
var statearr_44706_44769 = state_44690__$1;
(statearr_44706_44769[(2)] = null);

(statearr_44706_44769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (5))){
var state_44690__$1 = state_44690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44707_44770 = state_44690__$1;
(statearr_44707_44770[(1)] = (8));

} else {
var statearr_44708_44771 = state_44690__$1;
(statearr_44708_44771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (14))){
var inst_44670 = (state_44690[(11)]);
var inst_44668 = (state_44690[(8)]);
var inst_44668__$1 = (state_44690[(2)]);
var inst_44669 = (inst_44668__$1 == null);
var inst_44670__$1 = cljs.core.not.call(null,inst_44669);
var state_44690__$1 = (function (){var statearr_44709 = state_44690;
(statearr_44709[(11)] = inst_44670__$1);

(statearr_44709[(8)] = inst_44668__$1);

return statearr_44709;
})();
if(inst_44670__$1){
var statearr_44710_44772 = state_44690__$1;
(statearr_44710_44772[(1)] = (15));

} else {
var statearr_44711_44773 = state_44690__$1;
(statearr_44711_44773[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (16))){
var inst_44670 = (state_44690[(11)]);
var state_44690__$1 = state_44690;
var statearr_44712_44774 = state_44690__$1;
(statearr_44712_44774[(2)] = inst_44670);

(statearr_44712_44774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (10))){
var inst_44662 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44713_44775 = state_44690__$1;
(statearr_44713_44775[(2)] = inst_44662);

(statearr_44713_44775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (18))){
var inst_44673 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44714_44776 = state_44690__$1;
(statearr_44714_44776[(2)] = inst_44673);

(statearr_44714_44776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (8))){
var inst_44659 = cljs.core.async.close_BANG_.call(null,to);
var state_44690__$1 = state_44690;
var statearr_44715_44777 = state_44690__$1;
(statearr_44715_44777[(2)] = inst_44659);

(statearr_44715_44777[(1)] = (10));


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
});})(c__44165__auto__,jobs,results,process,async))
;
return ((function (switch__44053__auto__,c__44165__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0 = (function (){
var statearr_44719 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__);

(statearr_44719[(1)] = (1));

return statearr_44719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1 = (function (state_44690){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_44690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e44720){if((e44720 instanceof Object)){
var ex__44057__auto__ = e44720;
var statearr_44721_44778 = state_44690;
(statearr_44721_44778[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44779 = state_44690;
state_44690 = G__44779;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__ = function(state_44690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1.call(this,state_44690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__,jobs,results,process,async))
})();
var state__44167__auto__ = (function (){var statearr_44722 = f__44166__auto__.call(null);
(statearr_44722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_44722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__,jobs,results,process,async))
);

return c__44165__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args44780 = [];
var len__43068__auto___44783 = arguments.length;
var i__43069__auto___44784 = (0);
while(true){
if((i__43069__auto___44784 < len__43068__auto___44783)){
args44780.push((arguments[i__43069__auto___44784]));

var G__44785 = (i__43069__auto___44784 + (1));
i__43069__auto___44784 = G__44785;
continue;
} else {
}
break;
}

var G__44782 = args44780.length;
switch (G__44782) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44780.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args44787 = [];
var len__43068__auto___44790 = arguments.length;
var i__43069__auto___44791 = (0);
while(true){
if((i__43069__auto___44791 < len__43068__auto___44790)){
args44787.push((arguments[i__43069__auto___44791]));

var G__44792 = (i__43069__auto___44791 + (1));
i__43069__auto___44791 = G__44792;
continue;
} else {
}
break;
}

var G__44789 = args44787.length;
switch (G__44789) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44787.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args44794 = [];
var len__43068__auto___44847 = arguments.length;
var i__43069__auto___44848 = (0);
while(true){
if((i__43069__auto___44848 < len__43068__auto___44847)){
args44794.push((arguments[i__43069__auto___44848]));

var G__44849 = (i__43069__auto___44848 + (1));
i__43069__auto___44848 = G__44849;
continue;
} else {
}
break;
}

var G__44796 = args44794.length;
switch (G__44796) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44794.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44165__auto___44851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___44851,tc,fc){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___44851,tc,fc){
return (function (state_44822){
var state_val_44823 = (state_44822[(1)]);
if((state_val_44823 === (7))){
var inst_44818 = (state_44822[(2)]);
var state_44822__$1 = state_44822;
var statearr_44824_44852 = state_44822__$1;
(statearr_44824_44852[(2)] = inst_44818);

(statearr_44824_44852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (1))){
var state_44822__$1 = state_44822;
var statearr_44825_44853 = state_44822__$1;
(statearr_44825_44853[(2)] = null);

(statearr_44825_44853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (4))){
var inst_44799 = (state_44822[(7)]);
var inst_44799__$1 = (state_44822[(2)]);
var inst_44800 = (inst_44799__$1 == null);
var state_44822__$1 = (function (){var statearr_44826 = state_44822;
(statearr_44826[(7)] = inst_44799__$1);

return statearr_44826;
})();
if(cljs.core.truth_(inst_44800)){
var statearr_44827_44854 = state_44822__$1;
(statearr_44827_44854[(1)] = (5));

} else {
var statearr_44828_44855 = state_44822__$1;
(statearr_44828_44855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (13))){
var state_44822__$1 = state_44822;
var statearr_44829_44856 = state_44822__$1;
(statearr_44829_44856[(2)] = null);

(statearr_44829_44856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (6))){
var inst_44799 = (state_44822[(7)]);
var inst_44805 = p.call(null,inst_44799);
var state_44822__$1 = state_44822;
if(cljs.core.truth_(inst_44805)){
var statearr_44830_44857 = state_44822__$1;
(statearr_44830_44857[(1)] = (9));

} else {
var statearr_44831_44858 = state_44822__$1;
(statearr_44831_44858[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (3))){
var inst_44820 = (state_44822[(2)]);
var state_44822__$1 = state_44822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44822__$1,inst_44820);
} else {
if((state_val_44823 === (12))){
var state_44822__$1 = state_44822;
var statearr_44832_44859 = state_44822__$1;
(statearr_44832_44859[(2)] = null);

(statearr_44832_44859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (2))){
var state_44822__$1 = state_44822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44822__$1,(4),ch);
} else {
if((state_val_44823 === (11))){
var inst_44799 = (state_44822[(7)]);
var inst_44809 = (state_44822[(2)]);
var state_44822__$1 = state_44822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44822__$1,(8),inst_44809,inst_44799);
} else {
if((state_val_44823 === (9))){
var state_44822__$1 = state_44822;
var statearr_44833_44860 = state_44822__$1;
(statearr_44833_44860[(2)] = tc);

(statearr_44833_44860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (5))){
var inst_44802 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44803 = cljs.core.async.close_BANG_.call(null,fc);
var state_44822__$1 = (function (){var statearr_44834 = state_44822;
(statearr_44834[(8)] = inst_44802);

return statearr_44834;
})();
var statearr_44835_44861 = state_44822__$1;
(statearr_44835_44861[(2)] = inst_44803);

(statearr_44835_44861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (14))){
var inst_44816 = (state_44822[(2)]);
var state_44822__$1 = state_44822;
var statearr_44836_44862 = state_44822__$1;
(statearr_44836_44862[(2)] = inst_44816);

(statearr_44836_44862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (10))){
var state_44822__$1 = state_44822;
var statearr_44837_44863 = state_44822__$1;
(statearr_44837_44863[(2)] = fc);

(statearr_44837_44863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44823 === (8))){
var inst_44811 = (state_44822[(2)]);
var state_44822__$1 = state_44822;
if(cljs.core.truth_(inst_44811)){
var statearr_44838_44864 = state_44822__$1;
(statearr_44838_44864[(1)] = (12));

} else {
var statearr_44839_44865 = state_44822__$1;
(statearr_44839_44865[(1)] = (13));

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
});})(c__44165__auto___44851,tc,fc))
;
return ((function (switch__44053__auto__,c__44165__auto___44851,tc,fc){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_44843 = [null,null,null,null,null,null,null,null,null];
(statearr_44843[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_44843[(1)] = (1));

return statearr_44843;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_44822){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_44822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e44844){if((e44844 instanceof Object)){
var ex__44057__auto__ = e44844;
var statearr_44845_44866 = state_44822;
(statearr_44845_44866[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44867 = state_44822;
state_44822 = G__44867;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_44822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_44822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___44851,tc,fc))
})();
var state__44167__auto__ = (function (){var statearr_44846 = f__44166__auto__.call(null);
(statearr_44846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___44851);

return statearr_44846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___44851,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__){
return (function (state_44931){
var state_val_44932 = (state_44931[(1)]);
if((state_val_44932 === (7))){
var inst_44927 = (state_44931[(2)]);
var state_44931__$1 = state_44931;
var statearr_44933_44954 = state_44931__$1;
(statearr_44933_44954[(2)] = inst_44927);

(statearr_44933_44954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (1))){
var inst_44911 = init;
var state_44931__$1 = (function (){var statearr_44934 = state_44931;
(statearr_44934[(7)] = inst_44911);

return statearr_44934;
})();
var statearr_44935_44955 = state_44931__$1;
(statearr_44935_44955[(2)] = null);

(statearr_44935_44955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (4))){
var inst_44914 = (state_44931[(8)]);
var inst_44914__$1 = (state_44931[(2)]);
var inst_44915 = (inst_44914__$1 == null);
var state_44931__$1 = (function (){var statearr_44936 = state_44931;
(statearr_44936[(8)] = inst_44914__$1);

return statearr_44936;
})();
if(cljs.core.truth_(inst_44915)){
var statearr_44937_44956 = state_44931__$1;
(statearr_44937_44956[(1)] = (5));

} else {
var statearr_44938_44957 = state_44931__$1;
(statearr_44938_44957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (6))){
var inst_44914 = (state_44931[(8)]);
var inst_44911 = (state_44931[(7)]);
var inst_44918 = (state_44931[(9)]);
var inst_44918__$1 = f.call(null,inst_44911,inst_44914);
var inst_44919 = cljs.core.reduced_QMARK_.call(null,inst_44918__$1);
var state_44931__$1 = (function (){var statearr_44939 = state_44931;
(statearr_44939[(9)] = inst_44918__$1);

return statearr_44939;
})();
if(inst_44919){
var statearr_44940_44958 = state_44931__$1;
(statearr_44940_44958[(1)] = (8));

} else {
var statearr_44941_44959 = state_44931__$1;
(statearr_44941_44959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (3))){
var inst_44929 = (state_44931[(2)]);
var state_44931__$1 = state_44931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44931__$1,inst_44929);
} else {
if((state_val_44932 === (2))){
var state_44931__$1 = state_44931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44931__$1,(4),ch);
} else {
if((state_val_44932 === (9))){
var inst_44918 = (state_44931[(9)]);
var inst_44911 = inst_44918;
var state_44931__$1 = (function (){var statearr_44942 = state_44931;
(statearr_44942[(7)] = inst_44911);

return statearr_44942;
})();
var statearr_44943_44960 = state_44931__$1;
(statearr_44943_44960[(2)] = null);

(statearr_44943_44960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (5))){
var inst_44911 = (state_44931[(7)]);
var state_44931__$1 = state_44931;
var statearr_44944_44961 = state_44931__$1;
(statearr_44944_44961[(2)] = inst_44911);

(statearr_44944_44961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (10))){
var inst_44925 = (state_44931[(2)]);
var state_44931__$1 = state_44931;
var statearr_44945_44962 = state_44931__$1;
(statearr_44945_44962[(2)] = inst_44925);

(statearr_44945_44962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (8))){
var inst_44918 = (state_44931[(9)]);
var inst_44921 = cljs.core.deref.call(null,inst_44918);
var state_44931__$1 = state_44931;
var statearr_44946_44963 = state_44931__$1;
(statearr_44946_44963[(2)] = inst_44921);

(statearr_44946_44963[(1)] = (10));


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
});})(c__44165__auto__))
;
return ((function (switch__44053__auto__,c__44165__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44054__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44054__auto____0 = (function (){
var statearr_44950 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44950[(0)] = cljs$core$async$reduce_$_state_machine__44054__auto__);

(statearr_44950[(1)] = (1));

return statearr_44950;
});
var cljs$core$async$reduce_$_state_machine__44054__auto____1 = (function (state_44931){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_44931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e44951){if((e44951 instanceof Object)){
var ex__44057__auto__ = e44951;
var statearr_44952_44964 = state_44931;
(statearr_44952_44964[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44965 = state_44931;
state_44931 = G__44965;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44054__auto__ = function(state_44931){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44054__auto____1.call(this,state_44931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44054__auto____0;
cljs$core$async$reduce_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44054__auto____1;
return cljs$core$async$reduce_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__))
})();
var state__44167__auto__ = (function (){var statearr_44953 = f__44166__auto__.call(null);
(statearr_44953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_44953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__))
);

return c__44165__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__,f__$1){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__,f__$1){
return (function (state_44985){
var state_val_44986 = (state_44985[(1)]);
if((state_val_44986 === (1))){
var inst_44980 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44985__$1 = state_44985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44985__$1,(2),inst_44980);
} else {
if((state_val_44986 === (2))){
var inst_44982 = (state_44985[(2)]);
var inst_44983 = f__$1.call(null,inst_44982);
var state_44985__$1 = state_44985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44985__$1,inst_44983);
} else {
return null;
}
}
});})(c__44165__auto__,f__$1))
;
return ((function (switch__44053__auto__,c__44165__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44054__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44054__auto____0 = (function (){
var statearr_44990 = [null,null,null,null,null,null,null];
(statearr_44990[(0)] = cljs$core$async$transduce_$_state_machine__44054__auto__);

(statearr_44990[(1)] = (1));

return statearr_44990;
});
var cljs$core$async$transduce_$_state_machine__44054__auto____1 = (function (state_44985){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_44985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e44991){if((e44991 instanceof Object)){
var ex__44057__auto__ = e44991;
var statearr_44992_44994 = state_44985;
(statearr_44992_44994[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44995 = state_44985;
state_44985 = G__44995;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44054__auto__ = function(state_44985){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44054__auto____1.call(this,state_44985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44054__auto____0;
cljs$core$async$transduce_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44054__auto____1;
return cljs$core$async$transduce_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__,f__$1))
})();
var state__44167__auto__ = (function (){var statearr_44993 = f__44166__auto__.call(null);
(statearr_44993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_44993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__,f__$1))
);

return c__44165__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args44996 = [];
var len__43068__auto___45048 = arguments.length;
var i__43069__auto___45049 = (0);
while(true){
if((i__43069__auto___45049 < len__43068__auto___45048)){
args44996.push((arguments[i__43069__auto___45049]));

var G__45050 = (i__43069__auto___45049 + (1));
i__43069__auto___45049 = G__45050;
continue;
} else {
}
break;
}

var G__44998 = args44996.length;
switch (G__44998) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44996.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__){
return (function (state_45023){
var state_val_45024 = (state_45023[(1)]);
if((state_val_45024 === (7))){
var inst_45005 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
var statearr_45025_45052 = state_45023__$1;
(statearr_45025_45052[(2)] = inst_45005);

(statearr_45025_45052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (1))){
var inst_44999 = cljs.core.seq.call(null,coll);
var inst_45000 = inst_44999;
var state_45023__$1 = (function (){var statearr_45026 = state_45023;
(statearr_45026[(7)] = inst_45000);

return statearr_45026;
})();
var statearr_45027_45053 = state_45023__$1;
(statearr_45027_45053[(2)] = null);

(statearr_45027_45053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (4))){
var inst_45000 = (state_45023[(7)]);
var inst_45003 = cljs.core.first.call(null,inst_45000);
var state_45023__$1 = state_45023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45023__$1,(7),ch,inst_45003);
} else {
if((state_val_45024 === (13))){
var inst_45017 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
var statearr_45028_45054 = state_45023__$1;
(statearr_45028_45054[(2)] = inst_45017);

(statearr_45028_45054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (6))){
var inst_45008 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
if(cljs.core.truth_(inst_45008)){
var statearr_45029_45055 = state_45023__$1;
(statearr_45029_45055[(1)] = (8));

} else {
var statearr_45030_45056 = state_45023__$1;
(statearr_45030_45056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (3))){
var inst_45021 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45023__$1,inst_45021);
} else {
if((state_val_45024 === (12))){
var state_45023__$1 = state_45023;
var statearr_45031_45057 = state_45023__$1;
(statearr_45031_45057[(2)] = null);

(statearr_45031_45057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (2))){
var inst_45000 = (state_45023[(7)]);
var state_45023__$1 = state_45023;
if(cljs.core.truth_(inst_45000)){
var statearr_45032_45058 = state_45023__$1;
(statearr_45032_45058[(1)] = (4));

} else {
var statearr_45033_45059 = state_45023__$1;
(statearr_45033_45059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (11))){
var inst_45014 = cljs.core.async.close_BANG_.call(null,ch);
var state_45023__$1 = state_45023;
var statearr_45034_45060 = state_45023__$1;
(statearr_45034_45060[(2)] = inst_45014);

(statearr_45034_45060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (9))){
var state_45023__$1 = state_45023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45035_45061 = state_45023__$1;
(statearr_45035_45061[(1)] = (11));

} else {
var statearr_45036_45062 = state_45023__$1;
(statearr_45036_45062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (5))){
var inst_45000 = (state_45023[(7)]);
var state_45023__$1 = state_45023;
var statearr_45037_45063 = state_45023__$1;
(statearr_45037_45063[(2)] = inst_45000);

(statearr_45037_45063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (10))){
var inst_45019 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
var statearr_45038_45064 = state_45023__$1;
(statearr_45038_45064[(2)] = inst_45019);

(statearr_45038_45064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (8))){
var inst_45000 = (state_45023[(7)]);
var inst_45010 = cljs.core.next.call(null,inst_45000);
var inst_45000__$1 = inst_45010;
var state_45023__$1 = (function (){var statearr_45039 = state_45023;
(statearr_45039[(7)] = inst_45000__$1);

return statearr_45039;
})();
var statearr_45040_45065 = state_45023__$1;
(statearr_45040_45065[(2)] = null);

(statearr_45040_45065[(1)] = (2));


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
});})(c__44165__auto__))
;
return ((function (switch__44053__auto__,c__44165__auto__){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_45044 = [null,null,null,null,null,null,null,null];
(statearr_45044[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_45044[(1)] = (1));

return statearr_45044;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_45023){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_45023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e45045){if((e45045 instanceof Object)){
var ex__44057__auto__ = e45045;
var statearr_45046_45066 = state_45023;
(statearr_45046_45066[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45067 = state_45023;
state_45023 = G__45067;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_45023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_45023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__))
})();
var state__44167__auto__ = (function (){var statearr_45047 = f__44166__auto__.call(null);
(statearr_45047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_45047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__))
);

return c__44165__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__42656__auto__ = (((_ == null))?null:_);
var m__42657__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,_);
} else {
var m__42657__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__42656__auto__ = (((m == null))?null:m);
var m__42657__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__42657__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__42656__auto__ = (((m == null))?null:m);
var m__42657__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,m,ch);
} else {
var m__42657__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__42656__auto__ = (((m == null))?null:m);
var m__42657__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,m);
} else {
var m__42657__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45293 = (function (mult,ch,cs,meta45294){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45294 = meta45294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45295,meta45294__$1){
var self__ = this;
var _45295__$1 = this;
return (new cljs.core.async.t_cljs$core$async45293(self__.mult,self__.ch,self__.cs,meta45294__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45295){
var self__ = this;
var _45295__$1 = this;
return self__.meta45294;
});})(cs))
;

cljs.core.async.t_cljs$core$async45293.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45293.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45293.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45293.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45293.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45293.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45294","meta45294",-603848133,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45293";

cljs.core.async.t_cljs$core$async45293.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async45293");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45293 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45293(mult__$1,ch__$1,cs__$1,meta45294){
return (new cljs.core.async.t_cljs$core$async45293(mult__$1,ch__$1,cs__$1,meta45294));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45293(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__44165__auto___45518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___45518,cs,m,dchan,dctr,done){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___45518,cs,m,dchan,dctr,done){
return (function (state_45430){
var state_val_45431 = (state_45430[(1)]);
if((state_val_45431 === (7))){
var inst_45426 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
var statearr_45432_45519 = state_45430__$1;
(statearr_45432_45519[(2)] = inst_45426);

(statearr_45432_45519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (20))){
var inst_45329 = (state_45430[(7)]);
var inst_45341 = cljs.core.first.call(null,inst_45329);
var inst_45342 = cljs.core.nth.call(null,inst_45341,(0),null);
var inst_45343 = cljs.core.nth.call(null,inst_45341,(1),null);
var state_45430__$1 = (function (){var statearr_45433 = state_45430;
(statearr_45433[(8)] = inst_45342);

return statearr_45433;
})();
if(cljs.core.truth_(inst_45343)){
var statearr_45434_45520 = state_45430__$1;
(statearr_45434_45520[(1)] = (22));

} else {
var statearr_45435_45521 = state_45430__$1;
(statearr_45435_45521[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (27))){
var inst_45378 = (state_45430[(9)]);
var inst_45373 = (state_45430[(10)]);
var inst_45298 = (state_45430[(11)]);
var inst_45371 = (state_45430[(12)]);
var inst_45378__$1 = cljs.core._nth.call(null,inst_45371,inst_45373);
var inst_45379 = cljs.core.async.put_BANG_.call(null,inst_45378__$1,inst_45298,done);
var state_45430__$1 = (function (){var statearr_45436 = state_45430;
(statearr_45436[(9)] = inst_45378__$1);

return statearr_45436;
})();
if(cljs.core.truth_(inst_45379)){
var statearr_45437_45522 = state_45430__$1;
(statearr_45437_45522[(1)] = (30));

} else {
var statearr_45438_45523 = state_45430__$1;
(statearr_45438_45523[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (1))){
var state_45430__$1 = state_45430;
var statearr_45439_45524 = state_45430__$1;
(statearr_45439_45524[(2)] = null);

(statearr_45439_45524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (24))){
var inst_45329 = (state_45430[(7)]);
var inst_45348 = (state_45430[(2)]);
var inst_45349 = cljs.core.next.call(null,inst_45329);
var inst_45307 = inst_45349;
var inst_45308 = null;
var inst_45309 = (0);
var inst_45310 = (0);
var state_45430__$1 = (function (){var statearr_45440 = state_45430;
(statearr_45440[(13)] = inst_45308);

(statearr_45440[(14)] = inst_45309);

(statearr_45440[(15)] = inst_45310);

(statearr_45440[(16)] = inst_45348);

(statearr_45440[(17)] = inst_45307);

return statearr_45440;
})();
var statearr_45441_45525 = state_45430__$1;
(statearr_45441_45525[(2)] = null);

(statearr_45441_45525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (39))){
var state_45430__$1 = state_45430;
var statearr_45445_45526 = state_45430__$1;
(statearr_45445_45526[(2)] = null);

(statearr_45445_45526[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (4))){
var inst_45298 = (state_45430[(11)]);
var inst_45298__$1 = (state_45430[(2)]);
var inst_45299 = (inst_45298__$1 == null);
var state_45430__$1 = (function (){var statearr_45446 = state_45430;
(statearr_45446[(11)] = inst_45298__$1);

return statearr_45446;
})();
if(cljs.core.truth_(inst_45299)){
var statearr_45447_45527 = state_45430__$1;
(statearr_45447_45527[(1)] = (5));

} else {
var statearr_45448_45528 = state_45430__$1;
(statearr_45448_45528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (15))){
var inst_45308 = (state_45430[(13)]);
var inst_45309 = (state_45430[(14)]);
var inst_45310 = (state_45430[(15)]);
var inst_45307 = (state_45430[(17)]);
var inst_45325 = (state_45430[(2)]);
var inst_45326 = (inst_45310 + (1));
var tmp45442 = inst_45308;
var tmp45443 = inst_45309;
var tmp45444 = inst_45307;
var inst_45307__$1 = tmp45444;
var inst_45308__$1 = tmp45442;
var inst_45309__$1 = tmp45443;
var inst_45310__$1 = inst_45326;
var state_45430__$1 = (function (){var statearr_45449 = state_45430;
(statearr_45449[(13)] = inst_45308__$1);

(statearr_45449[(14)] = inst_45309__$1);

(statearr_45449[(15)] = inst_45310__$1);

(statearr_45449[(18)] = inst_45325);

(statearr_45449[(17)] = inst_45307__$1);

return statearr_45449;
})();
var statearr_45450_45529 = state_45430__$1;
(statearr_45450_45529[(2)] = null);

(statearr_45450_45529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (21))){
var inst_45352 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
var statearr_45454_45530 = state_45430__$1;
(statearr_45454_45530[(2)] = inst_45352);

(statearr_45454_45530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (31))){
var inst_45378 = (state_45430[(9)]);
var inst_45382 = done.call(null,null);
var inst_45383 = cljs.core.async.untap_STAR_.call(null,m,inst_45378);
var state_45430__$1 = (function (){var statearr_45455 = state_45430;
(statearr_45455[(19)] = inst_45382);

return statearr_45455;
})();
var statearr_45456_45531 = state_45430__$1;
(statearr_45456_45531[(2)] = inst_45383);

(statearr_45456_45531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (32))){
var inst_45373 = (state_45430[(10)]);
var inst_45372 = (state_45430[(20)]);
var inst_45371 = (state_45430[(12)]);
var inst_45370 = (state_45430[(21)]);
var inst_45385 = (state_45430[(2)]);
var inst_45386 = (inst_45373 + (1));
var tmp45451 = inst_45372;
var tmp45452 = inst_45371;
var tmp45453 = inst_45370;
var inst_45370__$1 = tmp45453;
var inst_45371__$1 = tmp45452;
var inst_45372__$1 = tmp45451;
var inst_45373__$1 = inst_45386;
var state_45430__$1 = (function (){var statearr_45457 = state_45430;
(statearr_45457[(10)] = inst_45373__$1);

(statearr_45457[(20)] = inst_45372__$1);

(statearr_45457[(22)] = inst_45385);

(statearr_45457[(12)] = inst_45371__$1);

(statearr_45457[(21)] = inst_45370__$1);

return statearr_45457;
})();
var statearr_45458_45532 = state_45430__$1;
(statearr_45458_45532[(2)] = null);

(statearr_45458_45532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (40))){
var inst_45398 = (state_45430[(23)]);
var inst_45402 = done.call(null,null);
var inst_45403 = cljs.core.async.untap_STAR_.call(null,m,inst_45398);
var state_45430__$1 = (function (){var statearr_45459 = state_45430;
(statearr_45459[(24)] = inst_45402);

return statearr_45459;
})();
var statearr_45460_45533 = state_45430__$1;
(statearr_45460_45533[(2)] = inst_45403);

(statearr_45460_45533[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (33))){
var inst_45389 = (state_45430[(25)]);
var inst_45391 = cljs.core.chunked_seq_QMARK_.call(null,inst_45389);
var state_45430__$1 = state_45430;
if(inst_45391){
var statearr_45461_45534 = state_45430__$1;
(statearr_45461_45534[(1)] = (36));

} else {
var statearr_45462_45535 = state_45430__$1;
(statearr_45462_45535[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (13))){
var inst_45319 = (state_45430[(26)]);
var inst_45322 = cljs.core.async.close_BANG_.call(null,inst_45319);
var state_45430__$1 = state_45430;
var statearr_45463_45536 = state_45430__$1;
(statearr_45463_45536[(2)] = inst_45322);

(statearr_45463_45536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (22))){
var inst_45342 = (state_45430[(8)]);
var inst_45345 = cljs.core.async.close_BANG_.call(null,inst_45342);
var state_45430__$1 = state_45430;
var statearr_45464_45537 = state_45430__$1;
(statearr_45464_45537[(2)] = inst_45345);

(statearr_45464_45537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (36))){
var inst_45389 = (state_45430[(25)]);
var inst_45393 = cljs.core.chunk_first.call(null,inst_45389);
var inst_45394 = cljs.core.chunk_rest.call(null,inst_45389);
var inst_45395 = cljs.core.count.call(null,inst_45393);
var inst_45370 = inst_45394;
var inst_45371 = inst_45393;
var inst_45372 = inst_45395;
var inst_45373 = (0);
var state_45430__$1 = (function (){var statearr_45465 = state_45430;
(statearr_45465[(10)] = inst_45373);

(statearr_45465[(20)] = inst_45372);

(statearr_45465[(12)] = inst_45371);

(statearr_45465[(21)] = inst_45370);

return statearr_45465;
})();
var statearr_45466_45538 = state_45430__$1;
(statearr_45466_45538[(2)] = null);

(statearr_45466_45538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (41))){
var inst_45389 = (state_45430[(25)]);
var inst_45405 = (state_45430[(2)]);
var inst_45406 = cljs.core.next.call(null,inst_45389);
var inst_45370 = inst_45406;
var inst_45371 = null;
var inst_45372 = (0);
var inst_45373 = (0);
var state_45430__$1 = (function (){var statearr_45467 = state_45430;
(statearr_45467[(10)] = inst_45373);

(statearr_45467[(20)] = inst_45372);

(statearr_45467[(27)] = inst_45405);

(statearr_45467[(12)] = inst_45371);

(statearr_45467[(21)] = inst_45370);

return statearr_45467;
})();
var statearr_45468_45539 = state_45430__$1;
(statearr_45468_45539[(2)] = null);

(statearr_45468_45539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (43))){
var state_45430__$1 = state_45430;
var statearr_45469_45540 = state_45430__$1;
(statearr_45469_45540[(2)] = null);

(statearr_45469_45540[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (29))){
var inst_45414 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
var statearr_45470_45541 = state_45430__$1;
(statearr_45470_45541[(2)] = inst_45414);

(statearr_45470_45541[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (44))){
var inst_45423 = (state_45430[(2)]);
var state_45430__$1 = (function (){var statearr_45471 = state_45430;
(statearr_45471[(28)] = inst_45423);

return statearr_45471;
})();
var statearr_45472_45542 = state_45430__$1;
(statearr_45472_45542[(2)] = null);

(statearr_45472_45542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (6))){
var inst_45362 = (state_45430[(29)]);
var inst_45361 = cljs.core.deref.call(null,cs);
var inst_45362__$1 = cljs.core.keys.call(null,inst_45361);
var inst_45363 = cljs.core.count.call(null,inst_45362__$1);
var inst_45364 = cljs.core.reset_BANG_.call(null,dctr,inst_45363);
var inst_45369 = cljs.core.seq.call(null,inst_45362__$1);
var inst_45370 = inst_45369;
var inst_45371 = null;
var inst_45372 = (0);
var inst_45373 = (0);
var state_45430__$1 = (function (){var statearr_45473 = state_45430;
(statearr_45473[(30)] = inst_45364);

(statearr_45473[(10)] = inst_45373);

(statearr_45473[(20)] = inst_45372);

(statearr_45473[(29)] = inst_45362__$1);

(statearr_45473[(12)] = inst_45371);

(statearr_45473[(21)] = inst_45370);

return statearr_45473;
})();
var statearr_45474_45543 = state_45430__$1;
(statearr_45474_45543[(2)] = null);

(statearr_45474_45543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (28))){
var inst_45389 = (state_45430[(25)]);
var inst_45370 = (state_45430[(21)]);
var inst_45389__$1 = cljs.core.seq.call(null,inst_45370);
var state_45430__$1 = (function (){var statearr_45475 = state_45430;
(statearr_45475[(25)] = inst_45389__$1);

return statearr_45475;
})();
if(inst_45389__$1){
var statearr_45476_45544 = state_45430__$1;
(statearr_45476_45544[(1)] = (33));

} else {
var statearr_45477_45545 = state_45430__$1;
(statearr_45477_45545[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (25))){
var inst_45373 = (state_45430[(10)]);
var inst_45372 = (state_45430[(20)]);
var inst_45375 = (inst_45373 < inst_45372);
var inst_45376 = inst_45375;
var state_45430__$1 = state_45430;
if(cljs.core.truth_(inst_45376)){
var statearr_45478_45546 = state_45430__$1;
(statearr_45478_45546[(1)] = (27));

} else {
var statearr_45479_45547 = state_45430__$1;
(statearr_45479_45547[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (34))){
var state_45430__$1 = state_45430;
var statearr_45480_45548 = state_45430__$1;
(statearr_45480_45548[(2)] = null);

(statearr_45480_45548[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (17))){
var state_45430__$1 = state_45430;
var statearr_45481_45549 = state_45430__$1;
(statearr_45481_45549[(2)] = null);

(statearr_45481_45549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (3))){
var inst_45428 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45430__$1,inst_45428);
} else {
if((state_val_45431 === (12))){
var inst_45357 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
var statearr_45482_45550 = state_45430__$1;
(statearr_45482_45550[(2)] = inst_45357);

(statearr_45482_45550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (2))){
var state_45430__$1 = state_45430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45430__$1,(4),ch);
} else {
if((state_val_45431 === (23))){
var state_45430__$1 = state_45430;
var statearr_45483_45551 = state_45430__$1;
(statearr_45483_45551[(2)] = null);

(statearr_45483_45551[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (35))){
var inst_45412 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
var statearr_45484_45552 = state_45430__$1;
(statearr_45484_45552[(2)] = inst_45412);

(statearr_45484_45552[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (19))){
var inst_45329 = (state_45430[(7)]);
var inst_45333 = cljs.core.chunk_first.call(null,inst_45329);
var inst_45334 = cljs.core.chunk_rest.call(null,inst_45329);
var inst_45335 = cljs.core.count.call(null,inst_45333);
var inst_45307 = inst_45334;
var inst_45308 = inst_45333;
var inst_45309 = inst_45335;
var inst_45310 = (0);
var state_45430__$1 = (function (){var statearr_45485 = state_45430;
(statearr_45485[(13)] = inst_45308);

(statearr_45485[(14)] = inst_45309);

(statearr_45485[(15)] = inst_45310);

(statearr_45485[(17)] = inst_45307);

return statearr_45485;
})();
var statearr_45486_45553 = state_45430__$1;
(statearr_45486_45553[(2)] = null);

(statearr_45486_45553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (11))){
var inst_45329 = (state_45430[(7)]);
var inst_45307 = (state_45430[(17)]);
var inst_45329__$1 = cljs.core.seq.call(null,inst_45307);
var state_45430__$1 = (function (){var statearr_45487 = state_45430;
(statearr_45487[(7)] = inst_45329__$1);

return statearr_45487;
})();
if(inst_45329__$1){
var statearr_45488_45554 = state_45430__$1;
(statearr_45488_45554[(1)] = (16));

} else {
var statearr_45489_45555 = state_45430__$1;
(statearr_45489_45555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (9))){
var inst_45359 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
var statearr_45490_45556 = state_45430__$1;
(statearr_45490_45556[(2)] = inst_45359);

(statearr_45490_45556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (5))){
var inst_45305 = cljs.core.deref.call(null,cs);
var inst_45306 = cljs.core.seq.call(null,inst_45305);
var inst_45307 = inst_45306;
var inst_45308 = null;
var inst_45309 = (0);
var inst_45310 = (0);
var state_45430__$1 = (function (){var statearr_45491 = state_45430;
(statearr_45491[(13)] = inst_45308);

(statearr_45491[(14)] = inst_45309);

(statearr_45491[(15)] = inst_45310);

(statearr_45491[(17)] = inst_45307);

return statearr_45491;
})();
var statearr_45492_45557 = state_45430__$1;
(statearr_45492_45557[(2)] = null);

(statearr_45492_45557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (14))){
var state_45430__$1 = state_45430;
var statearr_45493_45558 = state_45430__$1;
(statearr_45493_45558[(2)] = null);

(statearr_45493_45558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (45))){
var inst_45420 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
var statearr_45494_45559 = state_45430__$1;
(statearr_45494_45559[(2)] = inst_45420);

(statearr_45494_45559[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (26))){
var inst_45362 = (state_45430[(29)]);
var inst_45416 = (state_45430[(2)]);
var inst_45417 = cljs.core.seq.call(null,inst_45362);
var state_45430__$1 = (function (){var statearr_45495 = state_45430;
(statearr_45495[(31)] = inst_45416);

return statearr_45495;
})();
if(inst_45417){
var statearr_45496_45560 = state_45430__$1;
(statearr_45496_45560[(1)] = (42));

} else {
var statearr_45497_45561 = state_45430__$1;
(statearr_45497_45561[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (16))){
var inst_45329 = (state_45430[(7)]);
var inst_45331 = cljs.core.chunked_seq_QMARK_.call(null,inst_45329);
var state_45430__$1 = state_45430;
if(inst_45331){
var statearr_45498_45562 = state_45430__$1;
(statearr_45498_45562[(1)] = (19));

} else {
var statearr_45499_45563 = state_45430__$1;
(statearr_45499_45563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (38))){
var inst_45409 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
var statearr_45500_45564 = state_45430__$1;
(statearr_45500_45564[(2)] = inst_45409);

(statearr_45500_45564[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (30))){
var state_45430__$1 = state_45430;
var statearr_45501_45565 = state_45430__$1;
(statearr_45501_45565[(2)] = null);

(statearr_45501_45565[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (10))){
var inst_45308 = (state_45430[(13)]);
var inst_45310 = (state_45430[(15)]);
var inst_45318 = cljs.core._nth.call(null,inst_45308,inst_45310);
var inst_45319 = cljs.core.nth.call(null,inst_45318,(0),null);
var inst_45320 = cljs.core.nth.call(null,inst_45318,(1),null);
var state_45430__$1 = (function (){var statearr_45502 = state_45430;
(statearr_45502[(26)] = inst_45319);

return statearr_45502;
})();
if(cljs.core.truth_(inst_45320)){
var statearr_45503_45566 = state_45430__$1;
(statearr_45503_45566[(1)] = (13));

} else {
var statearr_45504_45567 = state_45430__$1;
(statearr_45504_45567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (18))){
var inst_45355 = (state_45430[(2)]);
var state_45430__$1 = state_45430;
var statearr_45505_45568 = state_45430__$1;
(statearr_45505_45568[(2)] = inst_45355);

(statearr_45505_45568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (42))){
var state_45430__$1 = state_45430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45430__$1,(45),dchan);
} else {
if((state_val_45431 === (37))){
var inst_45398 = (state_45430[(23)]);
var inst_45298 = (state_45430[(11)]);
var inst_45389 = (state_45430[(25)]);
var inst_45398__$1 = cljs.core.first.call(null,inst_45389);
var inst_45399 = cljs.core.async.put_BANG_.call(null,inst_45398__$1,inst_45298,done);
var state_45430__$1 = (function (){var statearr_45506 = state_45430;
(statearr_45506[(23)] = inst_45398__$1);

return statearr_45506;
})();
if(cljs.core.truth_(inst_45399)){
var statearr_45507_45569 = state_45430__$1;
(statearr_45507_45569[(1)] = (39));

} else {
var statearr_45508_45570 = state_45430__$1;
(statearr_45508_45570[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45431 === (8))){
var inst_45309 = (state_45430[(14)]);
var inst_45310 = (state_45430[(15)]);
var inst_45312 = (inst_45310 < inst_45309);
var inst_45313 = inst_45312;
var state_45430__$1 = state_45430;
if(cljs.core.truth_(inst_45313)){
var statearr_45509_45571 = state_45430__$1;
(statearr_45509_45571[(1)] = (10));

} else {
var statearr_45510_45572 = state_45430__$1;
(statearr_45510_45572[(1)] = (11));

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
});})(c__44165__auto___45518,cs,m,dchan,dctr,done))
;
return ((function (switch__44053__auto__,c__44165__auto___45518,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44054__auto__ = null;
var cljs$core$async$mult_$_state_machine__44054__auto____0 = (function (){
var statearr_45514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45514[(0)] = cljs$core$async$mult_$_state_machine__44054__auto__);

(statearr_45514[(1)] = (1));

return statearr_45514;
});
var cljs$core$async$mult_$_state_machine__44054__auto____1 = (function (state_45430){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_45430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e45515){if((e45515 instanceof Object)){
var ex__44057__auto__ = e45515;
var statearr_45516_45573 = state_45430;
(statearr_45516_45573[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45574 = state_45430;
state_45430 = G__45574;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44054__auto__ = function(state_45430){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44054__auto____1.call(this,state_45430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44054__auto____0;
cljs$core$async$mult_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44054__auto____1;
return cljs$core$async$mult_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___45518,cs,m,dchan,dctr,done))
})();
var state__44167__auto__ = (function (){var statearr_45517 = f__44166__auto__.call(null);
(statearr_45517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___45518);

return statearr_45517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___45518,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args45575 = [];
var len__43068__auto___45578 = arguments.length;
var i__43069__auto___45579 = (0);
while(true){
if((i__43069__auto___45579 < len__43068__auto___45578)){
args45575.push((arguments[i__43069__auto___45579]));

var G__45580 = (i__43069__auto___45579 + (1));
i__43069__auto___45579 = G__45580;
continue;
} else {
}
break;
}

var G__45577 = args45575.length;
switch (G__45577) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45575.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__42656__auto__ = (((m == null))?null:m);
var m__42657__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,m,ch);
} else {
var m__42657__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__42656__auto__ = (((m == null))?null:m);
var m__42657__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,m,ch);
} else {
var m__42657__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__42656__auto__ = (((m == null))?null:m);
var m__42657__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,m);
} else {
var m__42657__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__42656__auto__ = (((m == null))?null:m);
var m__42657__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,m,state_map);
} else {
var m__42657__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__42656__auto__ = (((m == null))?null:m);
var m__42657__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,m,mode);
} else {
var m__42657__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__43075__auto__ = [];
var len__43068__auto___45592 = arguments.length;
var i__43069__auto___45593 = (0);
while(true){
if((i__43069__auto___45593 < len__43068__auto___45592)){
args__43075__auto__.push((arguments[i__43069__auto___45593]));

var G__45594 = (i__43069__auto___45593 + (1));
i__43069__auto___45593 = G__45594;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((3) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__43076__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45586){
var map__45587 = p__45586;
var map__45587__$1 = ((((!((map__45587 == null)))?((((map__45587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45587):map__45587);
var opts = map__45587__$1;
var statearr_45589_45595 = state;
(statearr_45589_45595[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45587,map__45587__$1,opts){
return (function (val){
var statearr_45590_45596 = state;
(statearr_45590_45596[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45587,map__45587__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45591_45597 = state;
(statearr_45591_45597[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45582){
var G__45583 = cljs.core.first.call(null,seq45582);
var seq45582__$1 = cljs.core.next.call(null,seq45582);
var G__45584 = cljs.core.first.call(null,seq45582__$1);
var seq45582__$2 = cljs.core.next.call(null,seq45582__$1);
var G__45585 = cljs.core.first.call(null,seq45582__$2);
var seq45582__$3 = cljs.core.next.call(null,seq45582__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45583,G__45584,G__45585,seq45582__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45763 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45764){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45764 = meta45764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45765,meta45764__$1){
var self__ = this;
var _45765__$1 = this;
return (new cljs.core.async.t_cljs$core$async45763(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45764__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45765){
var self__ = this;
var _45765__$1 = this;
return self__.meta45764;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45763.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45763.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45764","meta45764",946375508,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45763";

cljs.core.async.t_cljs$core$async45763.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async45763");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45763 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45763(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45764){
return (new cljs.core.async.t_cljs$core$async45763(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45764));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45763(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44165__auto___45928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___45928,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___45928,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45865){
var state_val_45866 = (state_45865[(1)]);
if((state_val_45866 === (7))){
var inst_45781 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
var statearr_45867_45929 = state_45865__$1;
(statearr_45867_45929[(2)] = inst_45781);

(statearr_45867_45929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (20))){
var inst_45793 = (state_45865[(7)]);
var state_45865__$1 = state_45865;
var statearr_45868_45930 = state_45865__$1;
(statearr_45868_45930[(2)] = inst_45793);

(statearr_45868_45930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (27))){
var state_45865__$1 = state_45865;
var statearr_45869_45931 = state_45865__$1;
(statearr_45869_45931[(2)] = null);

(statearr_45869_45931[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (1))){
var inst_45769 = (state_45865[(8)]);
var inst_45769__$1 = calc_state.call(null);
var inst_45771 = (inst_45769__$1 == null);
var inst_45772 = cljs.core.not.call(null,inst_45771);
var state_45865__$1 = (function (){var statearr_45870 = state_45865;
(statearr_45870[(8)] = inst_45769__$1);

return statearr_45870;
})();
if(inst_45772){
var statearr_45871_45932 = state_45865__$1;
(statearr_45871_45932[(1)] = (2));

} else {
var statearr_45872_45933 = state_45865__$1;
(statearr_45872_45933[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (24))){
var inst_45825 = (state_45865[(9)]);
var inst_45839 = (state_45865[(10)]);
var inst_45816 = (state_45865[(11)]);
var inst_45839__$1 = inst_45816.call(null,inst_45825);
var state_45865__$1 = (function (){var statearr_45873 = state_45865;
(statearr_45873[(10)] = inst_45839__$1);

return statearr_45873;
})();
if(cljs.core.truth_(inst_45839__$1)){
var statearr_45874_45934 = state_45865__$1;
(statearr_45874_45934[(1)] = (29));

} else {
var statearr_45875_45935 = state_45865__$1;
(statearr_45875_45935[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (4))){
var inst_45784 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
if(cljs.core.truth_(inst_45784)){
var statearr_45876_45936 = state_45865__$1;
(statearr_45876_45936[(1)] = (8));

} else {
var statearr_45877_45937 = state_45865__$1;
(statearr_45877_45937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (15))){
var inst_45810 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
if(cljs.core.truth_(inst_45810)){
var statearr_45878_45938 = state_45865__$1;
(statearr_45878_45938[(1)] = (19));

} else {
var statearr_45879_45939 = state_45865__$1;
(statearr_45879_45939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (21))){
var inst_45815 = (state_45865[(12)]);
var inst_45815__$1 = (state_45865[(2)]);
var inst_45816 = cljs.core.get.call(null,inst_45815__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45817 = cljs.core.get.call(null,inst_45815__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45818 = cljs.core.get.call(null,inst_45815__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45865__$1 = (function (){var statearr_45880 = state_45865;
(statearr_45880[(12)] = inst_45815__$1);

(statearr_45880[(11)] = inst_45816);

(statearr_45880[(13)] = inst_45817);

return statearr_45880;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45865__$1,(22),inst_45818);
} else {
if((state_val_45866 === (31))){
var inst_45847 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
if(cljs.core.truth_(inst_45847)){
var statearr_45881_45940 = state_45865__$1;
(statearr_45881_45940[(1)] = (32));

} else {
var statearr_45882_45941 = state_45865__$1;
(statearr_45882_45941[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (32))){
var inst_45824 = (state_45865[(14)]);
var state_45865__$1 = state_45865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45865__$1,(35),out,inst_45824);
} else {
if((state_val_45866 === (33))){
var inst_45815 = (state_45865[(12)]);
var inst_45793 = inst_45815;
var state_45865__$1 = (function (){var statearr_45883 = state_45865;
(statearr_45883[(7)] = inst_45793);

return statearr_45883;
})();
var statearr_45884_45942 = state_45865__$1;
(statearr_45884_45942[(2)] = null);

(statearr_45884_45942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (13))){
var inst_45793 = (state_45865[(7)]);
var inst_45800 = inst_45793.cljs$lang$protocol_mask$partition0$;
var inst_45801 = (inst_45800 & (64));
var inst_45802 = inst_45793.cljs$core$ISeq$;
var inst_45803 = (inst_45801) || (inst_45802);
var state_45865__$1 = state_45865;
if(cljs.core.truth_(inst_45803)){
var statearr_45885_45943 = state_45865__$1;
(statearr_45885_45943[(1)] = (16));

} else {
var statearr_45886_45944 = state_45865__$1;
(statearr_45886_45944[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (22))){
var inst_45825 = (state_45865[(9)]);
var inst_45824 = (state_45865[(14)]);
var inst_45823 = (state_45865[(2)]);
var inst_45824__$1 = cljs.core.nth.call(null,inst_45823,(0),null);
var inst_45825__$1 = cljs.core.nth.call(null,inst_45823,(1),null);
var inst_45826 = (inst_45824__$1 == null);
var inst_45827 = cljs.core._EQ_.call(null,inst_45825__$1,change);
var inst_45828 = (inst_45826) || (inst_45827);
var state_45865__$1 = (function (){var statearr_45887 = state_45865;
(statearr_45887[(9)] = inst_45825__$1);

(statearr_45887[(14)] = inst_45824__$1);

return statearr_45887;
})();
if(cljs.core.truth_(inst_45828)){
var statearr_45888_45945 = state_45865__$1;
(statearr_45888_45945[(1)] = (23));

} else {
var statearr_45889_45946 = state_45865__$1;
(statearr_45889_45946[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (36))){
var inst_45815 = (state_45865[(12)]);
var inst_45793 = inst_45815;
var state_45865__$1 = (function (){var statearr_45890 = state_45865;
(statearr_45890[(7)] = inst_45793);

return statearr_45890;
})();
var statearr_45891_45947 = state_45865__$1;
(statearr_45891_45947[(2)] = null);

(statearr_45891_45947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (29))){
var inst_45839 = (state_45865[(10)]);
var state_45865__$1 = state_45865;
var statearr_45892_45948 = state_45865__$1;
(statearr_45892_45948[(2)] = inst_45839);

(statearr_45892_45948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (6))){
var state_45865__$1 = state_45865;
var statearr_45893_45949 = state_45865__$1;
(statearr_45893_45949[(2)] = false);

(statearr_45893_45949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (28))){
var inst_45835 = (state_45865[(2)]);
var inst_45836 = calc_state.call(null);
var inst_45793 = inst_45836;
var state_45865__$1 = (function (){var statearr_45894 = state_45865;
(statearr_45894[(15)] = inst_45835);

(statearr_45894[(7)] = inst_45793);

return statearr_45894;
})();
var statearr_45895_45950 = state_45865__$1;
(statearr_45895_45950[(2)] = null);

(statearr_45895_45950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (25))){
var inst_45861 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
var statearr_45896_45951 = state_45865__$1;
(statearr_45896_45951[(2)] = inst_45861);

(statearr_45896_45951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (34))){
var inst_45859 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
var statearr_45897_45952 = state_45865__$1;
(statearr_45897_45952[(2)] = inst_45859);

(statearr_45897_45952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (17))){
var state_45865__$1 = state_45865;
var statearr_45898_45953 = state_45865__$1;
(statearr_45898_45953[(2)] = false);

(statearr_45898_45953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (3))){
var state_45865__$1 = state_45865;
var statearr_45899_45954 = state_45865__$1;
(statearr_45899_45954[(2)] = false);

(statearr_45899_45954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (12))){
var inst_45863 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45865__$1,inst_45863);
} else {
if((state_val_45866 === (2))){
var inst_45769 = (state_45865[(8)]);
var inst_45774 = inst_45769.cljs$lang$protocol_mask$partition0$;
var inst_45775 = (inst_45774 & (64));
var inst_45776 = inst_45769.cljs$core$ISeq$;
var inst_45777 = (inst_45775) || (inst_45776);
var state_45865__$1 = state_45865;
if(cljs.core.truth_(inst_45777)){
var statearr_45900_45955 = state_45865__$1;
(statearr_45900_45955[(1)] = (5));

} else {
var statearr_45901_45956 = state_45865__$1;
(statearr_45901_45956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (23))){
var inst_45824 = (state_45865[(14)]);
var inst_45830 = (inst_45824 == null);
var state_45865__$1 = state_45865;
if(cljs.core.truth_(inst_45830)){
var statearr_45902_45957 = state_45865__$1;
(statearr_45902_45957[(1)] = (26));

} else {
var statearr_45903_45958 = state_45865__$1;
(statearr_45903_45958[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (35))){
var inst_45850 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
if(cljs.core.truth_(inst_45850)){
var statearr_45904_45959 = state_45865__$1;
(statearr_45904_45959[(1)] = (36));

} else {
var statearr_45905_45960 = state_45865__$1;
(statearr_45905_45960[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (19))){
var inst_45793 = (state_45865[(7)]);
var inst_45812 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45793);
var state_45865__$1 = state_45865;
var statearr_45906_45961 = state_45865__$1;
(statearr_45906_45961[(2)] = inst_45812);

(statearr_45906_45961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (11))){
var inst_45793 = (state_45865[(7)]);
var inst_45797 = (inst_45793 == null);
var inst_45798 = cljs.core.not.call(null,inst_45797);
var state_45865__$1 = state_45865;
if(inst_45798){
var statearr_45907_45962 = state_45865__$1;
(statearr_45907_45962[(1)] = (13));

} else {
var statearr_45908_45963 = state_45865__$1;
(statearr_45908_45963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (9))){
var inst_45769 = (state_45865[(8)]);
var state_45865__$1 = state_45865;
var statearr_45909_45964 = state_45865__$1;
(statearr_45909_45964[(2)] = inst_45769);

(statearr_45909_45964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (5))){
var state_45865__$1 = state_45865;
var statearr_45910_45965 = state_45865__$1;
(statearr_45910_45965[(2)] = true);

(statearr_45910_45965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (14))){
var state_45865__$1 = state_45865;
var statearr_45911_45966 = state_45865__$1;
(statearr_45911_45966[(2)] = false);

(statearr_45911_45966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (26))){
var inst_45825 = (state_45865[(9)]);
var inst_45832 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45825);
var state_45865__$1 = state_45865;
var statearr_45912_45967 = state_45865__$1;
(statearr_45912_45967[(2)] = inst_45832);

(statearr_45912_45967[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (16))){
var state_45865__$1 = state_45865;
var statearr_45913_45968 = state_45865__$1;
(statearr_45913_45968[(2)] = true);

(statearr_45913_45968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (38))){
var inst_45855 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
var statearr_45914_45969 = state_45865__$1;
(statearr_45914_45969[(2)] = inst_45855);

(statearr_45914_45969[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (30))){
var inst_45825 = (state_45865[(9)]);
var inst_45816 = (state_45865[(11)]);
var inst_45817 = (state_45865[(13)]);
var inst_45842 = cljs.core.empty_QMARK_.call(null,inst_45816);
var inst_45843 = inst_45817.call(null,inst_45825);
var inst_45844 = cljs.core.not.call(null,inst_45843);
var inst_45845 = (inst_45842) && (inst_45844);
var state_45865__$1 = state_45865;
var statearr_45915_45970 = state_45865__$1;
(statearr_45915_45970[(2)] = inst_45845);

(statearr_45915_45970[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (10))){
var inst_45769 = (state_45865[(8)]);
var inst_45789 = (state_45865[(2)]);
var inst_45790 = cljs.core.get.call(null,inst_45789,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45791 = cljs.core.get.call(null,inst_45789,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45792 = cljs.core.get.call(null,inst_45789,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45793 = inst_45769;
var state_45865__$1 = (function (){var statearr_45916 = state_45865;
(statearr_45916[(16)] = inst_45791);

(statearr_45916[(17)] = inst_45790);

(statearr_45916[(7)] = inst_45793);

(statearr_45916[(18)] = inst_45792);

return statearr_45916;
})();
var statearr_45917_45971 = state_45865__$1;
(statearr_45917_45971[(2)] = null);

(statearr_45917_45971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (18))){
var inst_45807 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
var statearr_45918_45972 = state_45865__$1;
(statearr_45918_45972[(2)] = inst_45807);

(statearr_45918_45972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (37))){
var state_45865__$1 = state_45865;
var statearr_45919_45973 = state_45865__$1;
(statearr_45919_45973[(2)] = null);

(statearr_45919_45973[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (8))){
var inst_45769 = (state_45865[(8)]);
var inst_45786 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45769);
var state_45865__$1 = state_45865;
var statearr_45920_45974 = state_45865__$1;
(statearr_45920_45974[(2)] = inst_45786);

(statearr_45920_45974[(1)] = (10));


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
});})(c__44165__auto___45928,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44053__auto__,c__44165__auto___45928,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44054__auto__ = null;
var cljs$core$async$mix_$_state_machine__44054__auto____0 = (function (){
var statearr_45924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45924[(0)] = cljs$core$async$mix_$_state_machine__44054__auto__);

(statearr_45924[(1)] = (1));

return statearr_45924;
});
var cljs$core$async$mix_$_state_machine__44054__auto____1 = (function (state_45865){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_45865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e45925){if((e45925 instanceof Object)){
var ex__44057__auto__ = e45925;
var statearr_45926_45975 = state_45865;
(statearr_45926_45975[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45976 = state_45865;
state_45865 = G__45976;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44054__auto__ = function(state_45865){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44054__auto____1.call(this,state_45865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44054__auto____0;
cljs$core$async$mix_$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44054__auto____1;
return cljs$core$async$mix_$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___45928,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44167__auto__ = (function (){var statearr_45927 = f__44166__auto__.call(null);
(statearr_45927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___45928);

return statearr_45927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___45928,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__42656__auto__ = (((p == null))?null:p);
var m__42657__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__42657__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__42656__auto__ = (((p == null))?null:p);
var m__42657__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,p,v,ch);
} else {
var m__42657__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args45977 = [];
var len__43068__auto___45980 = arguments.length;
var i__43069__auto___45981 = (0);
while(true){
if((i__43069__auto___45981 < len__43068__auto___45980)){
args45977.push((arguments[i__43069__auto___45981]));

var G__45982 = (i__43069__auto___45981 + (1));
i__43069__auto___45981 = G__45982;
continue;
} else {
}
break;
}

var G__45979 = args45977.length;
switch (G__45979) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45977.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__42656__auto__ = (((p == null))?null:p);
var m__42657__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,p);
} else {
var m__42657__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__42656__auto__ = (((p == null))?null:p);
var m__42657__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42656__auto__)]);
if(!((m__42657__auto__ == null))){
return m__42657__auto__.call(null,p,v);
} else {
var m__42657__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42657__auto____$1 == null))){
return m__42657__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args45985 = [];
var len__43068__auto___46110 = arguments.length;
var i__43069__auto___46111 = (0);
while(true){
if((i__43069__auto___46111 < len__43068__auto___46110)){
args45985.push((arguments[i__43069__auto___46111]));

var G__46112 = (i__43069__auto___46111 + (1));
i__43069__auto___46111 = G__46112;
continue;
} else {
}
break;
}

var G__45987 = args45985.length;
switch (G__45987) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45985.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__41993__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41993__auto__,mults){
return (function (p1__45984_SHARP_){
if(cljs.core.truth_(p1__45984_SHARP_.call(null,topic))){
return p1__45984_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45984_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41993__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45988 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45989){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45989 = meta45989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45990,meta45989__$1){
var self__ = this;
var _45990__$1 = this;
return (new cljs.core.async.t_cljs$core$async45988(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45989__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45990){
var self__ = this;
var _45990__$1 = this;
return self__.meta45989;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45988.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45988.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45988.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async45988.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45988.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45988.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45988.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45988.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45989","meta45989",680706241,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45988";

cljs.core.async.t_cljs$core$async45988.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async45988");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45988 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45988(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45989){
return (new cljs.core.async.t_cljs$core$async45988(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45989));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45988(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44165__auto___46114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___46114,mults,ensure_mult,p){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___46114,mults,ensure_mult,p){
return (function (state_46062){
var state_val_46063 = (state_46062[(1)]);
if((state_val_46063 === (7))){
var inst_46058 = (state_46062[(2)]);
var state_46062__$1 = state_46062;
var statearr_46064_46115 = state_46062__$1;
(statearr_46064_46115[(2)] = inst_46058);

(statearr_46064_46115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (20))){
var state_46062__$1 = state_46062;
var statearr_46065_46116 = state_46062__$1;
(statearr_46065_46116[(2)] = null);

(statearr_46065_46116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (1))){
var state_46062__$1 = state_46062;
var statearr_46066_46117 = state_46062__$1;
(statearr_46066_46117[(2)] = null);

(statearr_46066_46117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (24))){
var inst_46041 = (state_46062[(7)]);
var inst_46050 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46041);
var state_46062__$1 = state_46062;
var statearr_46067_46118 = state_46062__$1;
(statearr_46067_46118[(2)] = inst_46050);

(statearr_46067_46118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (4))){
var inst_45993 = (state_46062[(8)]);
var inst_45993__$1 = (state_46062[(2)]);
var inst_45994 = (inst_45993__$1 == null);
var state_46062__$1 = (function (){var statearr_46068 = state_46062;
(statearr_46068[(8)] = inst_45993__$1);

return statearr_46068;
})();
if(cljs.core.truth_(inst_45994)){
var statearr_46069_46119 = state_46062__$1;
(statearr_46069_46119[(1)] = (5));

} else {
var statearr_46070_46120 = state_46062__$1;
(statearr_46070_46120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (15))){
var inst_46035 = (state_46062[(2)]);
var state_46062__$1 = state_46062;
var statearr_46071_46121 = state_46062__$1;
(statearr_46071_46121[(2)] = inst_46035);

(statearr_46071_46121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (21))){
var inst_46055 = (state_46062[(2)]);
var state_46062__$1 = (function (){var statearr_46072 = state_46062;
(statearr_46072[(9)] = inst_46055);

return statearr_46072;
})();
var statearr_46073_46122 = state_46062__$1;
(statearr_46073_46122[(2)] = null);

(statearr_46073_46122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (13))){
var inst_46017 = (state_46062[(10)]);
var inst_46019 = cljs.core.chunked_seq_QMARK_.call(null,inst_46017);
var state_46062__$1 = state_46062;
if(inst_46019){
var statearr_46074_46123 = state_46062__$1;
(statearr_46074_46123[(1)] = (16));

} else {
var statearr_46075_46124 = state_46062__$1;
(statearr_46075_46124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (22))){
var inst_46047 = (state_46062[(2)]);
var state_46062__$1 = state_46062;
if(cljs.core.truth_(inst_46047)){
var statearr_46076_46125 = state_46062__$1;
(statearr_46076_46125[(1)] = (23));

} else {
var statearr_46077_46126 = state_46062__$1;
(statearr_46077_46126[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (6))){
var inst_45993 = (state_46062[(8)]);
var inst_46043 = (state_46062[(11)]);
var inst_46041 = (state_46062[(7)]);
var inst_46041__$1 = topic_fn.call(null,inst_45993);
var inst_46042 = cljs.core.deref.call(null,mults);
var inst_46043__$1 = cljs.core.get.call(null,inst_46042,inst_46041__$1);
var state_46062__$1 = (function (){var statearr_46078 = state_46062;
(statearr_46078[(11)] = inst_46043__$1);

(statearr_46078[(7)] = inst_46041__$1);

return statearr_46078;
})();
if(cljs.core.truth_(inst_46043__$1)){
var statearr_46079_46127 = state_46062__$1;
(statearr_46079_46127[(1)] = (19));

} else {
var statearr_46080_46128 = state_46062__$1;
(statearr_46080_46128[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (25))){
var inst_46052 = (state_46062[(2)]);
var state_46062__$1 = state_46062;
var statearr_46081_46129 = state_46062__$1;
(statearr_46081_46129[(2)] = inst_46052);

(statearr_46081_46129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (17))){
var inst_46017 = (state_46062[(10)]);
var inst_46026 = cljs.core.first.call(null,inst_46017);
var inst_46027 = cljs.core.async.muxch_STAR_.call(null,inst_46026);
var inst_46028 = cljs.core.async.close_BANG_.call(null,inst_46027);
var inst_46029 = cljs.core.next.call(null,inst_46017);
var inst_46003 = inst_46029;
var inst_46004 = null;
var inst_46005 = (0);
var inst_46006 = (0);
var state_46062__$1 = (function (){var statearr_46082 = state_46062;
(statearr_46082[(12)] = inst_46005);

(statearr_46082[(13)] = inst_46006);

(statearr_46082[(14)] = inst_46028);

(statearr_46082[(15)] = inst_46004);

(statearr_46082[(16)] = inst_46003);

return statearr_46082;
})();
var statearr_46083_46130 = state_46062__$1;
(statearr_46083_46130[(2)] = null);

(statearr_46083_46130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (3))){
var inst_46060 = (state_46062[(2)]);
var state_46062__$1 = state_46062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46062__$1,inst_46060);
} else {
if((state_val_46063 === (12))){
var inst_46037 = (state_46062[(2)]);
var state_46062__$1 = state_46062;
var statearr_46084_46131 = state_46062__$1;
(statearr_46084_46131[(2)] = inst_46037);

(statearr_46084_46131[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (2))){
var state_46062__$1 = state_46062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46062__$1,(4),ch);
} else {
if((state_val_46063 === (23))){
var state_46062__$1 = state_46062;
var statearr_46085_46132 = state_46062__$1;
(statearr_46085_46132[(2)] = null);

(statearr_46085_46132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (19))){
var inst_45993 = (state_46062[(8)]);
var inst_46043 = (state_46062[(11)]);
var inst_46045 = cljs.core.async.muxch_STAR_.call(null,inst_46043);
var state_46062__$1 = state_46062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46062__$1,(22),inst_46045,inst_45993);
} else {
if((state_val_46063 === (11))){
var inst_46017 = (state_46062[(10)]);
var inst_46003 = (state_46062[(16)]);
var inst_46017__$1 = cljs.core.seq.call(null,inst_46003);
var state_46062__$1 = (function (){var statearr_46086 = state_46062;
(statearr_46086[(10)] = inst_46017__$1);

return statearr_46086;
})();
if(inst_46017__$1){
var statearr_46087_46133 = state_46062__$1;
(statearr_46087_46133[(1)] = (13));

} else {
var statearr_46088_46134 = state_46062__$1;
(statearr_46088_46134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (9))){
var inst_46039 = (state_46062[(2)]);
var state_46062__$1 = state_46062;
var statearr_46089_46135 = state_46062__$1;
(statearr_46089_46135[(2)] = inst_46039);

(statearr_46089_46135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (5))){
var inst_46000 = cljs.core.deref.call(null,mults);
var inst_46001 = cljs.core.vals.call(null,inst_46000);
var inst_46002 = cljs.core.seq.call(null,inst_46001);
var inst_46003 = inst_46002;
var inst_46004 = null;
var inst_46005 = (0);
var inst_46006 = (0);
var state_46062__$1 = (function (){var statearr_46090 = state_46062;
(statearr_46090[(12)] = inst_46005);

(statearr_46090[(13)] = inst_46006);

(statearr_46090[(15)] = inst_46004);

(statearr_46090[(16)] = inst_46003);

return statearr_46090;
})();
var statearr_46091_46136 = state_46062__$1;
(statearr_46091_46136[(2)] = null);

(statearr_46091_46136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (14))){
var state_46062__$1 = state_46062;
var statearr_46095_46137 = state_46062__$1;
(statearr_46095_46137[(2)] = null);

(statearr_46095_46137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (16))){
var inst_46017 = (state_46062[(10)]);
var inst_46021 = cljs.core.chunk_first.call(null,inst_46017);
var inst_46022 = cljs.core.chunk_rest.call(null,inst_46017);
var inst_46023 = cljs.core.count.call(null,inst_46021);
var inst_46003 = inst_46022;
var inst_46004 = inst_46021;
var inst_46005 = inst_46023;
var inst_46006 = (0);
var state_46062__$1 = (function (){var statearr_46096 = state_46062;
(statearr_46096[(12)] = inst_46005);

(statearr_46096[(13)] = inst_46006);

(statearr_46096[(15)] = inst_46004);

(statearr_46096[(16)] = inst_46003);

return statearr_46096;
})();
var statearr_46097_46138 = state_46062__$1;
(statearr_46097_46138[(2)] = null);

(statearr_46097_46138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (10))){
var inst_46005 = (state_46062[(12)]);
var inst_46006 = (state_46062[(13)]);
var inst_46004 = (state_46062[(15)]);
var inst_46003 = (state_46062[(16)]);
var inst_46011 = cljs.core._nth.call(null,inst_46004,inst_46006);
var inst_46012 = cljs.core.async.muxch_STAR_.call(null,inst_46011);
var inst_46013 = cljs.core.async.close_BANG_.call(null,inst_46012);
var inst_46014 = (inst_46006 + (1));
var tmp46092 = inst_46005;
var tmp46093 = inst_46004;
var tmp46094 = inst_46003;
var inst_46003__$1 = tmp46094;
var inst_46004__$1 = tmp46093;
var inst_46005__$1 = tmp46092;
var inst_46006__$1 = inst_46014;
var state_46062__$1 = (function (){var statearr_46098 = state_46062;
(statearr_46098[(12)] = inst_46005__$1);

(statearr_46098[(13)] = inst_46006__$1);

(statearr_46098[(17)] = inst_46013);

(statearr_46098[(15)] = inst_46004__$1);

(statearr_46098[(16)] = inst_46003__$1);

return statearr_46098;
})();
var statearr_46099_46139 = state_46062__$1;
(statearr_46099_46139[(2)] = null);

(statearr_46099_46139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (18))){
var inst_46032 = (state_46062[(2)]);
var state_46062__$1 = state_46062;
var statearr_46100_46140 = state_46062__$1;
(statearr_46100_46140[(2)] = inst_46032);

(statearr_46100_46140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46063 === (8))){
var inst_46005 = (state_46062[(12)]);
var inst_46006 = (state_46062[(13)]);
var inst_46008 = (inst_46006 < inst_46005);
var inst_46009 = inst_46008;
var state_46062__$1 = state_46062;
if(cljs.core.truth_(inst_46009)){
var statearr_46101_46141 = state_46062__$1;
(statearr_46101_46141[(1)] = (10));

} else {
var statearr_46102_46142 = state_46062__$1;
(statearr_46102_46142[(1)] = (11));

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
});})(c__44165__auto___46114,mults,ensure_mult,p))
;
return ((function (switch__44053__auto__,c__44165__auto___46114,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_46106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46106[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_46106[(1)] = (1));

return statearr_46106;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_46062){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_46062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e46107){if((e46107 instanceof Object)){
var ex__44057__auto__ = e46107;
var statearr_46108_46143 = state_46062;
(statearr_46108_46143[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46144 = state_46062;
state_46062 = G__46144;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_46062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_46062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___46114,mults,ensure_mult,p))
})();
var state__44167__auto__ = (function (){var statearr_46109 = f__44166__auto__.call(null);
(statearr_46109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___46114);

return statearr_46109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___46114,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args46145 = [];
var len__43068__auto___46148 = arguments.length;
var i__43069__auto___46149 = (0);
while(true){
if((i__43069__auto___46149 < len__43068__auto___46148)){
args46145.push((arguments[i__43069__auto___46149]));

var G__46150 = (i__43069__auto___46149 + (1));
i__43069__auto___46149 = G__46150;
continue;
} else {
}
break;
}

var G__46147 = args46145.length;
switch (G__46147) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46145.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args46152 = [];
var len__43068__auto___46155 = arguments.length;
var i__43069__auto___46156 = (0);
while(true){
if((i__43069__auto___46156 < len__43068__auto___46155)){
args46152.push((arguments[i__43069__auto___46156]));

var G__46157 = (i__43069__auto___46156 + (1));
i__43069__auto___46156 = G__46157;
continue;
} else {
}
break;
}

var G__46154 = args46152.length;
switch (G__46154) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46152.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args46159 = [];
var len__43068__auto___46230 = arguments.length;
var i__43069__auto___46231 = (0);
while(true){
if((i__43069__auto___46231 < len__43068__auto___46230)){
args46159.push((arguments[i__43069__auto___46231]));

var G__46232 = (i__43069__auto___46231 + (1));
i__43069__auto___46231 = G__46232;
continue;
} else {
}
break;
}

var G__46161 = args46159.length;
switch (G__46161) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46159.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__44165__auto___46234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___46234,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___46234,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46200){
var state_val_46201 = (state_46200[(1)]);
if((state_val_46201 === (7))){
var state_46200__$1 = state_46200;
var statearr_46202_46235 = state_46200__$1;
(statearr_46202_46235[(2)] = null);

(statearr_46202_46235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (1))){
var state_46200__$1 = state_46200;
var statearr_46203_46236 = state_46200__$1;
(statearr_46203_46236[(2)] = null);

(statearr_46203_46236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (4))){
var inst_46164 = (state_46200[(7)]);
var inst_46166 = (inst_46164 < cnt);
var state_46200__$1 = state_46200;
if(cljs.core.truth_(inst_46166)){
var statearr_46204_46237 = state_46200__$1;
(statearr_46204_46237[(1)] = (6));

} else {
var statearr_46205_46238 = state_46200__$1;
(statearr_46205_46238[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (15))){
var inst_46196 = (state_46200[(2)]);
var state_46200__$1 = state_46200;
var statearr_46206_46239 = state_46200__$1;
(statearr_46206_46239[(2)] = inst_46196);

(statearr_46206_46239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (13))){
var inst_46189 = cljs.core.async.close_BANG_.call(null,out);
var state_46200__$1 = state_46200;
var statearr_46207_46240 = state_46200__$1;
(statearr_46207_46240[(2)] = inst_46189);

(statearr_46207_46240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (6))){
var state_46200__$1 = state_46200;
var statearr_46208_46241 = state_46200__$1;
(statearr_46208_46241[(2)] = null);

(statearr_46208_46241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (3))){
var inst_46198 = (state_46200[(2)]);
var state_46200__$1 = state_46200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46200__$1,inst_46198);
} else {
if((state_val_46201 === (12))){
var inst_46186 = (state_46200[(8)]);
var inst_46186__$1 = (state_46200[(2)]);
var inst_46187 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46186__$1);
var state_46200__$1 = (function (){var statearr_46209 = state_46200;
(statearr_46209[(8)] = inst_46186__$1);

return statearr_46209;
})();
if(cljs.core.truth_(inst_46187)){
var statearr_46210_46242 = state_46200__$1;
(statearr_46210_46242[(1)] = (13));

} else {
var statearr_46211_46243 = state_46200__$1;
(statearr_46211_46243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (2))){
var inst_46163 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46164 = (0);
var state_46200__$1 = (function (){var statearr_46212 = state_46200;
(statearr_46212[(7)] = inst_46164);

(statearr_46212[(9)] = inst_46163);

return statearr_46212;
})();
var statearr_46213_46244 = state_46200__$1;
(statearr_46213_46244[(2)] = null);

(statearr_46213_46244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (11))){
var inst_46164 = (state_46200[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46200,(10),Object,null,(9));
var inst_46173 = chs__$1.call(null,inst_46164);
var inst_46174 = done.call(null,inst_46164);
var inst_46175 = cljs.core.async.take_BANG_.call(null,inst_46173,inst_46174);
var state_46200__$1 = state_46200;
var statearr_46214_46245 = state_46200__$1;
(statearr_46214_46245[(2)] = inst_46175);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46200__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (9))){
var inst_46164 = (state_46200[(7)]);
var inst_46177 = (state_46200[(2)]);
var inst_46178 = (inst_46164 + (1));
var inst_46164__$1 = inst_46178;
var state_46200__$1 = (function (){var statearr_46215 = state_46200;
(statearr_46215[(10)] = inst_46177);

(statearr_46215[(7)] = inst_46164__$1);

return statearr_46215;
})();
var statearr_46216_46246 = state_46200__$1;
(statearr_46216_46246[(2)] = null);

(statearr_46216_46246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (5))){
var inst_46184 = (state_46200[(2)]);
var state_46200__$1 = (function (){var statearr_46217 = state_46200;
(statearr_46217[(11)] = inst_46184);

return statearr_46217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46200__$1,(12),dchan);
} else {
if((state_val_46201 === (14))){
var inst_46186 = (state_46200[(8)]);
var inst_46191 = cljs.core.apply.call(null,f,inst_46186);
var state_46200__$1 = state_46200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46200__$1,(16),out,inst_46191);
} else {
if((state_val_46201 === (16))){
var inst_46193 = (state_46200[(2)]);
var state_46200__$1 = (function (){var statearr_46218 = state_46200;
(statearr_46218[(12)] = inst_46193);

return statearr_46218;
})();
var statearr_46219_46247 = state_46200__$1;
(statearr_46219_46247[(2)] = null);

(statearr_46219_46247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (10))){
var inst_46168 = (state_46200[(2)]);
var inst_46169 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46200__$1 = (function (){var statearr_46220 = state_46200;
(statearr_46220[(13)] = inst_46168);

return statearr_46220;
})();
var statearr_46221_46248 = state_46200__$1;
(statearr_46221_46248[(2)] = inst_46169);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46200__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46201 === (8))){
var inst_46182 = (state_46200[(2)]);
var state_46200__$1 = state_46200;
var statearr_46222_46249 = state_46200__$1;
(statearr_46222_46249[(2)] = inst_46182);

(statearr_46222_46249[(1)] = (5));


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
});})(c__44165__auto___46234,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44053__auto__,c__44165__auto___46234,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_46226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46226[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_46226[(1)] = (1));

return statearr_46226;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_46200){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_46200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e46227){if((e46227 instanceof Object)){
var ex__44057__auto__ = e46227;
var statearr_46228_46250 = state_46200;
(statearr_46228_46250[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46251 = state_46200;
state_46200 = G__46251;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_46200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_46200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___46234,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44167__auto__ = (function (){var statearr_46229 = f__44166__auto__.call(null);
(statearr_46229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___46234);

return statearr_46229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___46234,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args46253 = [];
var len__43068__auto___46311 = arguments.length;
var i__43069__auto___46312 = (0);
while(true){
if((i__43069__auto___46312 < len__43068__auto___46311)){
args46253.push((arguments[i__43069__auto___46312]));

var G__46313 = (i__43069__auto___46312 + (1));
i__43069__auto___46312 = G__46313;
continue;
} else {
}
break;
}

var G__46255 = args46253.length;
switch (G__46255) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46253.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44165__auto___46315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___46315,out){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___46315,out){
return (function (state_46287){
var state_val_46288 = (state_46287[(1)]);
if((state_val_46288 === (7))){
var inst_46266 = (state_46287[(7)]);
var inst_46267 = (state_46287[(8)]);
var inst_46266__$1 = (state_46287[(2)]);
var inst_46267__$1 = cljs.core.nth.call(null,inst_46266__$1,(0),null);
var inst_46268 = cljs.core.nth.call(null,inst_46266__$1,(1),null);
var inst_46269 = (inst_46267__$1 == null);
var state_46287__$1 = (function (){var statearr_46289 = state_46287;
(statearr_46289[(7)] = inst_46266__$1);

(statearr_46289[(9)] = inst_46268);

(statearr_46289[(8)] = inst_46267__$1);

return statearr_46289;
})();
if(cljs.core.truth_(inst_46269)){
var statearr_46290_46316 = state_46287__$1;
(statearr_46290_46316[(1)] = (8));

} else {
var statearr_46291_46317 = state_46287__$1;
(statearr_46291_46317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46288 === (1))){
var inst_46256 = cljs.core.vec.call(null,chs);
var inst_46257 = inst_46256;
var state_46287__$1 = (function (){var statearr_46292 = state_46287;
(statearr_46292[(10)] = inst_46257);

return statearr_46292;
})();
var statearr_46293_46318 = state_46287__$1;
(statearr_46293_46318[(2)] = null);

(statearr_46293_46318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46288 === (4))){
var inst_46257 = (state_46287[(10)]);
var state_46287__$1 = state_46287;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46287__$1,(7),inst_46257);
} else {
if((state_val_46288 === (6))){
var inst_46283 = (state_46287[(2)]);
var state_46287__$1 = state_46287;
var statearr_46294_46319 = state_46287__$1;
(statearr_46294_46319[(2)] = inst_46283);

(statearr_46294_46319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46288 === (3))){
var inst_46285 = (state_46287[(2)]);
var state_46287__$1 = state_46287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46287__$1,inst_46285);
} else {
if((state_val_46288 === (2))){
var inst_46257 = (state_46287[(10)]);
var inst_46259 = cljs.core.count.call(null,inst_46257);
var inst_46260 = (inst_46259 > (0));
var state_46287__$1 = state_46287;
if(cljs.core.truth_(inst_46260)){
var statearr_46296_46320 = state_46287__$1;
(statearr_46296_46320[(1)] = (4));

} else {
var statearr_46297_46321 = state_46287__$1;
(statearr_46297_46321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46288 === (11))){
var inst_46257 = (state_46287[(10)]);
var inst_46276 = (state_46287[(2)]);
var tmp46295 = inst_46257;
var inst_46257__$1 = tmp46295;
var state_46287__$1 = (function (){var statearr_46298 = state_46287;
(statearr_46298[(10)] = inst_46257__$1);

(statearr_46298[(11)] = inst_46276);

return statearr_46298;
})();
var statearr_46299_46322 = state_46287__$1;
(statearr_46299_46322[(2)] = null);

(statearr_46299_46322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46288 === (9))){
var inst_46267 = (state_46287[(8)]);
var state_46287__$1 = state_46287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46287__$1,(11),out,inst_46267);
} else {
if((state_val_46288 === (5))){
var inst_46281 = cljs.core.async.close_BANG_.call(null,out);
var state_46287__$1 = state_46287;
var statearr_46300_46323 = state_46287__$1;
(statearr_46300_46323[(2)] = inst_46281);

(statearr_46300_46323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46288 === (10))){
var inst_46279 = (state_46287[(2)]);
var state_46287__$1 = state_46287;
var statearr_46301_46324 = state_46287__$1;
(statearr_46301_46324[(2)] = inst_46279);

(statearr_46301_46324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46288 === (8))){
var inst_46266 = (state_46287[(7)]);
var inst_46268 = (state_46287[(9)]);
var inst_46257 = (state_46287[(10)]);
var inst_46267 = (state_46287[(8)]);
var inst_46271 = (function (){var cs = inst_46257;
var vec__46262 = inst_46266;
var v = inst_46267;
var c = inst_46268;
return ((function (cs,vec__46262,v,c,inst_46266,inst_46268,inst_46257,inst_46267,state_val_46288,c__44165__auto___46315,out){
return (function (p1__46252_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46252_SHARP_);
});
;})(cs,vec__46262,v,c,inst_46266,inst_46268,inst_46257,inst_46267,state_val_46288,c__44165__auto___46315,out))
})();
var inst_46272 = cljs.core.filterv.call(null,inst_46271,inst_46257);
var inst_46257__$1 = inst_46272;
var state_46287__$1 = (function (){var statearr_46302 = state_46287;
(statearr_46302[(10)] = inst_46257__$1);

return statearr_46302;
})();
var statearr_46303_46325 = state_46287__$1;
(statearr_46303_46325[(2)] = null);

(statearr_46303_46325[(1)] = (2));


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
});})(c__44165__auto___46315,out))
;
return ((function (switch__44053__auto__,c__44165__auto___46315,out){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_46307 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46307[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_46307[(1)] = (1));

return statearr_46307;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_46287){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_46287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e46308){if((e46308 instanceof Object)){
var ex__44057__auto__ = e46308;
var statearr_46309_46326 = state_46287;
(statearr_46309_46326[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46327 = state_46287;
state_46287 = G__46327;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_46287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_46287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___46315,out))
})();
var state__44167__auto__ = (function (){var statearr_46310 = f__44166__auto__.call(null);
(statearr_46310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___46315);

return statearr_46310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___46315,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args46328 = [];
var len__43068__auto___46377 = arguments.length;
var i__43069__auto___46378 = (0);
while(true){
if((i__43069__auto___46378 < len__43068__auto___46377)){
args46328.push((arguments[i__43069__auto___46378]));

var G__46379 = (i__43069__auto___46378 + (1));
i__43069__auto___46378 = G__46379;
continue;
} else {
}
break;
}

var G__46330 = args46328.length;
switch (G__46330) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46328.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44165__auto___46381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___46381,out){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___46381,out){
return (function (state_46354){
var state_val_46355 = (state_46354[(1)]);
if((state_val_46355 === (7))){
var inst_46336 = (state_46354[(7)]);
var inst_46336__$1 = (state_46354[(2)]);
var inst_46337 = (inst_46336__$1 == null);
var inst_46338 = cljs.core.not.call(null,inst_46337);
var state_46354__$1 = (function (){var statearr_46356 = state_46354;
(statearr_46356[(7)] = inst_46336__$1);

return statearr_46356;
})();
if(inst_46338){
var statearr_46357_46382 = state_46354__$1;
(statearr_46357_46382[(1)] = (8));

} else {
var statearr_46358_46383 = state_46354__$1;
(statearr_46358_46383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (1))){
var inst_46331 = (0);
var state_46354__$1 = (function (){var statearr_46359 = state_46354;
(statearr_46359[(8)] = inst_46331);

return statearr_46359;
})();
var statearr_46360_46384 = state_46354__$1;
(statearr_46360_46384[(2)] = null);

(statearr_46360_46384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (4))){
var state_46354__$1 = state_46354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46354__$1,(7),ch);
} else {
if((state_val_46355 === (6))){
var inst_46349 = (state_46354[(2)]);
var state_46354__$1 = state_46354;
var statearr_46361_46385 = state_46354__$1;
(statearr_46361_46385[(2)] = inst_46349);

(statearr_46361_46385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (3))){
var inst_46351 = (state_46354[(2)]);
var inst_46352 = cljs.core.async.close_BANG_.call(null,out);
var state_46354__$1 = (function (){var statearr_46362 = state_46354;
(statearr_46362[(9)] = inst_46351);

return statearr_46362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46354__$1,inst_46352);
} else {
if((state_val_46355 === (2))){
var inst_46331 = (state_46354[(8)]);
var inst_46333 = (inst_46331 < n);
var state_46354__$1 = state_46354;
if(cljs.core.truth_(inst_46333)){
var statearr_46363_46386 = state_46354__$1;
(statearr_46363_46386[(1)] = (4));

} else {
var statearr_46364_46387 = state_46354__$1;
(statearr_46364_46387[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (11))){
var inst_46331 = (state_46354[(8)]);
var inst_46341 = (state_46354[(2)]);
var inst_46342 = (inst_46331 + (1));
var inst_46331__$1 = inst_46342;
var state_46354__$1 = (function (){var statearr_46365 = state_46354;
(statearr_46365[(10)] = inst_46341);

(statearr_46365[(8)] = inst_46331__$1);

return statearr_46365;
})();
var statearr_46366_46388 = state_46354__$1;
(statearr_46366_46388[(2)] = null);

(statearr_46366_46388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (9))){
var state_46354__$1 = state_46354;
var statearr_46367_46389 = state_46354__$1;
(statearr_46367_46389[(2)] = null);

(statearr_46367_46389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (5))){
var state_46354__$1 = state_46354;
var statearr_46368_46390 = state_46354__$1;
(statearr_46368_46390[(2)] = null);

(statearr_46368_46390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (10))){
var inst_46346 = (state_46354[(2)]);
var state_46354__$1 = state_46354;
var statearr_46369_46391 = state_46354__$1;
(statearr_46369_46391[(2)] = inst_46346);

(statearr_46369_46391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (8))){
var inst_46336 = (state_46354[(7)]);
var state_46354__$1 = state_46354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46354__$1,(11),out,inst_46336);
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
});})(c__44165__auto___46381,out))
;
return ((function (switch__44053__auto__,c__44165__auto___46381,out){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_46373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46373[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_46373[(1)] = (1));

return statearr_46373;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_46354){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_46354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e46374){if((e46374 instanceof Object)){
var ex__44057__auto__ = e46374;
var statearr_46375_46392 = state_46354;
(statearr_46375_46392[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46393 = state_46354;
state_46354 = G__46393;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_46354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_46354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___46381,out))
})();
var state__44167__auto__ = (function (){var statearr_46376 = f__44166__auto__.call(null);
(statearr_46376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___46381);

return statearr_46376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___46381,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46401 = (function (map_LT_,f,ch,meta46402){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46402 = meta46402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46403,meta46402__$1){
var self__ = this;
var _46403__$1 = this;
return (new cljs.core.async.t_cljs$core$async46401(self__.map_LT_,self__.f,self__.ch,meta46402__$1));
});

cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46403){
var self__ = this;
var _46403__$1 = this;
return self__.meta46402;
});

cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46404 = (function (map_LT_,f,ch,meta46402,_,fn1,meta46405){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46402 = meta46402;
this._ = _;
this.fn1 = fn1;
this.meta46405 = meta46405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46406,meta46405__$1){
var self__ = this;
var _46406__$1 = this;
return (new cljs.core.async.t_cljs$core$async46404(self__.map_LT_,self__.f,self__.ch,self__.meta46402,self__._,self__.fn1,meta46405__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46406){
var self__ = this;
var _46406__$1 = this;
return self__.meta46405;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46394_SHARP_){
return f1.call(null,(((p1__46394_SHARP_ == null))?null:self__.f.call(null,p1__46394_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46404.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46402","meta46402",634878410,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46401","cljs.core.async/t_cljs$core$async46401",603230330,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46405","meta46405",-289815137,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46404";

cljs.core.async.t_cljs$core$async46404.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async46404");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46404 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46404(map_LT___$1,f__$1,ch__$1,meta46402__$1,___$2,fn1__$1,meta46405){
return (new cljs.core.async.t_cljs$core$async46404(map_LT___$1,f__$1,ch__$1,meta46402__$1,___$2,fn1__$1,meta46405));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46404(self__.map_LT_,self__.f,self__.ch,self__.meta46402,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41981__auto__ = ret;
if(cljs.core.truth_(and__41981__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41981__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46402","meta46402",634878410,null)], null);
});

cljs.core.async.t_cljs$core$async46401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46401";

cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async46401");
});

cljs.core.async.__GT_t_cljs$core$async46401 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46401(map_LT___$1,f__$1,ch__$1,meta46402){
return (new cljs.core.async.t_cljs$core$async46401(map_LT___$1,f__$1,ch__$1,meta46402));
});

}

return (new cljs.core.async.t_cljs$core$async46401(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46410 = (function (map_GT_,f,ch,meta46411){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta46411 = meta46411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46412,meta46411__$1){
var self__ = this;
var _46412__$1 = this;
return (new cljs.core.async.t_cljs$core$async46410(self__.map_GT_,self__.f,self__.ch,meta46411__$1));
});

cljs.core.async.t_cljs$core$async46410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46412){
var self__ = this;
var _46412__$1 = this;
return self__.meta46411;
});

cljs.core.async.t_cljs$core$async46410.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46410.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46410.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46411","meta46411",-1536804463,null)], null);
});

cljs.core.async.t_cljs$core$async46410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46410";

cljs.core.async.t_cljs$core$async46410.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async46410");
});

cljs.core.async.__GT_t_cljs$core$async46410 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46410(map_GT___$1,f__$1,ch__$1,meta46411){
return (new cljs.core.async.t_cljs$core$async46410(map_GT___$1,f__$1,ch__$1,meta46411));
});

}

return (new cljs.core.async.t_cljs$core$async46410(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46416 = (function (filter_GT_,p,ch,meta46417){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta46417 = meta46417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46418,meta46417__$1){
var self__ = this;
var _46418__$1 = this;
return (new cljs.core.async.t_cljs$core$async46416(self__.filter_GT_,self__.p,self__.ch,meta46417__$1));
});

cljs.core.async.t_cljs$core$async46416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46418){
var self__ = this;
var _46418__$1 = this;
return self__.meta46417;
});

cljs.core.async.t_cljs$core$async46416.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46416.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46416.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46416.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46417","meta46417",-225522182,null)], null);
});

cljs.core.async.t_cljs$core$async46416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46416";

cljs.core.async.t_cljs$core$async46416.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async46416");
});

cljs.core.async.__GT_t_cljs$core$async46416 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46416(filter_GT___$1,p__$1,ch__$1,meta46417){
return (new cljs.core.async.t_cljs$core$async46416(filter_GT___$1,p__$1,ch__$1,meta46417));
});

}

return (new cljs.core.async.t_cljs$core$async46416(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args46419 = [];
var len__43068__auto___46463 = arguments.length;
var i__43069__auto___46464 = (0);
while(true){
if((i__43069__auto___46464 < len__43068__auto___46463)){
args46419.push((arguments[i__43069__auto___46464]));

var G__46465 = (i__43069__auto___46464 + (1));
i__43069__auto___46464 = G__46465;
continue;
} else {
}
break;
}

var G__46421 = args46419.length;
switch (G__46421) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46419.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44165__auto___46467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___46467,out){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___46467,out){
return (function (state_46442){
var state_val_46443 = (state_46442[(1)]);
if((state_val_46443 === (7))){
var inst_46438 = (state_46442[(2)]);
var state_46442__$1 = state_46442;
var statearr_46444_46468 = state_46442__$1;
(statearr_46444_46468[(2)] = inst_46438);

(statearr_46444_46468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (1))){
var state_46442__$1 = state_46442;
var statearr_46445_46469 = state_46442__$1;
(statearr_46445_46469[(2)] = null);

(statearr_46445_46469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (4))){
var inst_46424 = (state_46442[(7)]);
var inst_46424__$1 = (state_46442[(2)]);
var inst_46425 = (inst_46424__$1 == null);
var state_46442__$1 = (function (){var statearr_46446 = state_46442;
(statearr_46446[(7)] = inst_46424__$1);

return statearr_46446;
})();
if(cljs.core.truth_(inst_46425)){
var statearr_46447_46470 = state_46442__$1;
(statearr_46447_46470[(1)] = (5));

} else {
var statearr_46448_46471 = state_46442__$1;
(statearr_46448_46471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (6))){
var inst_46424 = (state_46442[(7)]);
var inst_46429 = p.call(null,inst_46424);
var state_46442__$1 = state_46442;
if(cljs.core.truth_(inst_46429)){
var statearr_46449_46472 = state_46442__$1;
(statearr_46449_46472[(1)] = (8));

} else {
var statearr_46450_46473 = state_46442__$1;
(statearr_46450_46473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (3))){
var inst_46440 = (state_46442[(2)]);
var state_46442__$1 = state_46442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46442__$1,inst_46440);
} else {
if((state_val_46443 === (2))){
var state_46442__$1 = state_46442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46442__$1,(4),ch);
} else {
if((state_val_46443 === (11))){
var inst_46432 = (state_46442[(2)]);
var state_46442__$1 = state_46442;
var statearr_46451_46474 = state_46442__$1;
(statearr_46451_46474[(2)] = inst_46432);

(statearr_46451_46474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (9))){
var state_46442__$1 = state_46442;
var statearr_46452_46475 = state_46442__$1;
(statearr_46452_46475[(2)] = null);

(statearr_46452_46475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (5))){
var inst_46427 = cljs.core.async.close_BANG_.call(null,out);
var state_46442__$1 = state_46442;
var statearr_46453_46476 = state_46442__$1;
(statearr_46453_46476[(2)] = inst_46427);

(statearr_46453_46476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (10))){
var inst_46435 = (state_46442[(2)]);
var state_46442__$1 = (function (){var statearr_46454 = state_46442;
(statearr_46454[(8)] = inst_46435);

return statearr_46454;
})();
var statearr_46455_46477 = state_46442__$1;
(statearr_46455_46477[(2)] = null);

(statearr_46455_46477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (8))){
var inst_46424 = (state_46442[(7)]);
var state_46442__$1 = state_46442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46442__$1,(11),out,inst_46424);
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
});})(c__44165__auto___46467,out))
;
return ((function (switch__44053__auto__,c__44165__auto___46467,out){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_46459 = [null,null,null,null,null,null,null,null,null];
(statearr_46459[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_46459[(1)] = (1));

return statearr_46459;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_46442){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_46442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e46460){if((e46460 instanceof Object)){
var ex__44057__auto__ = e46460;
var statearr_46461_46478 = state_46442;
(statearr_46461_46478[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46479 = state_46442;
state_46442 = G__46479;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_46442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_46442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___46467,out))
})();
var state__44167__auto__ = (function (){var statearr_46462 = f__44166__auto__.call(null);
(statearr_46462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___46467);

return statearr_46462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___46467,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args46480 = [];
var len__43068__auto___46483 = arguments.length;
var i__43069__auto___46484 = (0);
while(true){
if((i__43069__auto___46484 < len__43068__auto___46483)){
args46480.push((arguments[i__43069__auto___46484]));

var G__46485 = (i__43069__auto___46484 + (1));
i__43069__auto___46484 = G__46485;
continue;
} else {
}
break;
}

var G__46482 = args46480.length;
switch (G__46482) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46480.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44165__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto__){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto__){
return (function (state_46652){
var state_val_46653 = (state_46652[(1)]);
if((state_val_46653 === (7))){
var inst_46648 = (state_46652[(2)]);
var state_46652__$1 = state_46652;
var statearr_46654_46695 = state_46652__$1;
(statearr_46654_46695[(2)] = inst_46648);

(statearr_46654_46695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (20))){
var inst_46618 = (state_46652[(7)]);
var inst_46629 = (state_46652[(2)]);
var inst_46630 = cljs.core.next.call(null,inst_46618);
var inst_46604 = inst_46630;
var inst_46605 = null;
var inst_46606 = (0);
var inst_46607 = (0);
var state_46652__$1 = (function (){var statearr_46655 = state_46652;
(statearr_46655[(8)] = inst_46605);

(statearr_46655[(9)] = inst_46604);

(statearr_46655[(10)] = inst_46629);

(statearr_46655[(11)] = inst_46606);

(statearr_46655[(12)] = inst_46607);

return statearr_46655;
})();
var statearr_46656_46696 = state_46652__$1;
(statearr_46656_46696[(2)] = null);

(statearr_46656_46696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (1))){
var state_46652__$1 = state_46652;
var statearr_46657_46697 = state_46652__$1;
(statearr_46657_46697[(2)] = null);

(statearr_46657_46697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (4))){
var inst_46593 = (state_46652[(13)]);
var inst_46593__$1 = (state_46652[(2)]);
var inst_46594 = (inst_46593__$1 == null);
var state_46652__$1 = (function (){var statearr_46658 = state_46652;
(statearr_46658[(13)] = inst_46593__$1);

return statearr_46658;
})();
if(cljs.core.truth_(inst_46594)){
var statearr_46659_46698 = state_46652__$1;
(statearr_46659_46698[(1)] = (5));

} else {
var statearr_46660_46699 = state_46652__$1;
(statearr_46660_46699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (15))){
var state_46652__$1 = state_46652;
var statearr_46664_46700 = state_46652__$1;
(statearr_46664_46700[(2)] = null);

(statearr_46664_46700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (21))){
var state_46652__$1 = state_46652;
var statearr_46665_46701 = state_46652__$1;
(statearr_46665_46701[(2)] = null);

(statearr_46665_46701[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (13))){
var inst_46605 = (state_46652[(8)]);
var inst_46604 = (state_46652[(9)]);
var inst_46606 = (state_46652[(11)]);
var inst_46607 = (state_46652[(12)]);
var inst_46614 = (state_46652[(2)]);
var inst_46615 = (inst_46607 + (1));
var tmp46661 = inst_46605;
var tmp46662 = inst_46604;
var tmp46663 = inst_46606;
var inst_46604__$1 = tmp46662;
var inst_46605__$1 = tmp46661;
var inst_46606__$1 = tmp46663;
var inst_46607__$1 = inst_46615;
var state_46652__$1 = (function (){var statearr_46666 = state_46652;
(statearr_46666[(8)] = inst_46605__$1);

(statearr_46666[(9)] = inst_46604__$1);

(statearr_46666[(14)] = inst_46614);

(statearr_46666[(11)] = inst_46606__$1);

(statearr_46666[(12)] = inst_46607__$1);

return statearr_46666;
})();
var statearr_46667_46702 = state_46652__$1;
(statearr_46667_46702[(2)] = null);

(statearr_46667_46702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (22))){
var state_46652__$1 = state_46652;
var statearr_46668_46703 = state_46652__$1;
(statearr_46668_46703[(2)] = null);

(statearr_46668_46703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (6))){
var inst_46593 = (state_46652[(13)]);
var inst_46602 = f.call(null,inst_46593);
var inst_46603 = cljs.core.seq.call(null,inst_46602);
var inst_46604 = inst_46603;
var inst_46605 = null;
var inst_46606 = (0);
var inst_46607 = (0);
var state_46652__$1 = (function (){var statearr_46669 = state_46652;
(statearr_46669[(8)] = inst_46605);

(statearr_46669[(9)] = inst_46604);

(statearr_46669[(11)] = inst_46606);

(statearr_46669[(12)] = inst_46607);

return statearr_46669;
})();
var statearr_46670_46704 = state_46652__$1;
(statearr_46670_46704[(2)] = null);

(statearr_46670_46704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (17))){
var inst_46618 = (state_46652[(7)]);
var inst_46622 = cljs.core.chunk_first.call(null,inst_46618);
var inst_46623 = cljs.core.chunk_rest.call(null,inst_46618);
var inst_46624 = cljs.core.count.call(null,inst_46622);
var inst_46604 = inst_46623;
var inst_46605 = inst_46622;
var inst_46606 = inst_46624;
var inst_46607 = (0);
var state_46652__$1 = (function (){var statearr_46671 = state_46652;
(statearr_46671[(8)] = inst_46605);

(statearr_46671[(9)] = inst_46604);

(statearr_46671[(11)] = inst_46606);

(statearr_46671[(12)] = inst_46607);

return statearr_46671;
})();
var statearr_46672_46705 = state_46652__$1;
(statearr_46672_46705[(2)] = null);

(statearr_46672_46705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (3))){
var inst_46650 = (state_46652[(2)]);
var state_46652__$1 = state_46652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46652__$1,inst_46650);
} else {
if((state_val_46653 === (12))){
var inst_46638 = (state_46652[(2)]);
var state_46652__$1 = state_46652;
var statearr_46673_46706 = state_46652__$1;
(statearr_46673_46706[(2)] = inst_46638);

(statearr_46673_46706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (2))){
var state_46652__$1 = state_46652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46652__$1,(4),in$);
} else {
if((state_val_46653 === (23))){
var inst_46646 = (state_46652[(2)]);
var state_46652__$1 = state_46652;
var statearr_46674_46707 = state_46652__$1;
(statearr_46674_46707[(2)] = inst_46646);

(statearr_46674_46707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (19))){
var inst_46633 = (state_46652[(2)]);
var state_46652__$1 = state_46652;
var statearr_46675_46708 = state_46652__$1;
(statearr_46675_46708[(2)] = inst_46633);

(statearr_46675_46708[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (11))){
var inst_46604 = (state_46652[(9)]);
var inst_46618 = (state_46652[(7)]);
var inst_46618__$1 = cljs.core.seq.call(null,inst_46604);
var state_46652__$1 = (function (){var statearr_46676 = state_46652;
(statearr_46676[(7)] = inst_46618__$1);

return statearr_46676;
})();
if(inst_46618__$1){
var statearr_46677_46709 = state_46652__$1;
(statearr_46677_46709[(1)] = (14));

} else {
var statearr_46678_46710 = state_46652__$1;
(statearr_46678_46710[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (9))){
var inst_46640 = (state_46652[(2)]);
var inst_46641 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46652__$1 = (function (){var statearr_46679 = state_46652;
(statearr_46679[(15)] = inst_46640);

return statearr_46679;
})();
if(cljs.core.truth_(inst_46641)){
var statearr_46680_46711 = state_46652__$1;
(statearr_46680_46711[(1)] = (21));

} else {
var statearr_46681_46712 = state_46652__$1;
(statearr_46681_46712[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (5))){
var inst_46596 = cljs.core.async.close_BANG_.call(null,out);
var state_46652__$1 = state_46652;
var statearr_46682_46713 = state_46652__$1;
(statearr_46682_46713[(2)] = inst_46596);

(statearr_46682_46713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (14))){
var inst_46618 = (state_46652[(7)]);
var inst_46620 = cljs.core.chunked_seq_QMARK_.call(null,inst_46618);
var state_46652__$1 = state_46652;
if(inst_46620){
var statearr_46683_46714 = state_46652__$1;
(statearr_46683_46714[(1)] = (17));

} else {
var statearr_46684_46715 = state_46652__$1;
(statearr_46684_46715[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (16))){
var inst_46636 = (state_46652[(2)]);
var state_46652__$1 = state_46652;
var statearr_46685_46716 = state_46652__$1;
(statearr_46685_46716[(2)] = inst_46636);

(statearr_46685_46716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46653 === (10))){
var inst_46605 = (state_46652[(8)]);
var inst_46607 = (state_46652[(12)]);
var inst_46612 = cljs.core._nth.call(null,inst_46605,inst_46607);
var state_46652__$1 = state_46652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46652__$1,(13),out,inst_46612);
} else {
if((state_val_46653 === (18))){
var inst_46618 = (state_46652[(7)]);
var inst_46627 = cljs.core.first.call(null,inst_46618);
var state_46652__$1 = state_46652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46652__$1,(20),out,inst_46627);
} else {
if((state_val_46653 === (8))){
var inst_46606 = (state_46652[(11)]);
var inst_46607 = (state_46652[(12)]);
var inst_46609 = (inst_46607 < inst_46606);
var inst_46610 = inst_46609;
var state_46652__$1 = state_46652;
if(cljs.core.truth_(inst_46610)){
var statearr_46686_46717 = state_46652__$1;
(statearr_46686_46717[(1)] = (10));

} else {
var statearr_46687_46718 = state_46652__$1;
(statearr_46687_46718[(1)] = (11));

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
});})(c__44165__auto__))
;
return ((function (switch__44053__auto__,c__44165__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44054__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44054__auto____0 = (function (){
var statearr_46691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46691[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44054__auto__);

(statearr_46691[(1)] = (1));

return statearr_46691;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44054__auto____1 = (function (state_46652){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_46652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e46692){if((e46692 instanceof Object)){
var ex__44057__auto__ = e46692;
var statearr_46693_46719 = state_46652;
(statearr_46693_46719[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46720 = state_46652;
state_46652 = G__46720;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44054__auto__ = function(state_46652){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44054__auto____1.call(this,state_46652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44054__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44054__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto__))
})();
var state__44167__auto__ = (function (){var statearr_46694 = f__44166__auto__.call(null);
(statearr_46694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto__);

return statearr_46694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto__))
);

return c__44165__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args46721 = [];
var len__43068__auto___46724 = arguments.length;
var i__43069__auto___46725 = (0);
while(true){
if((i__43069__auto___46725 < len__43068__auto___46724)){
args46721.push((arguments[i__43069__auto___46725]));

var G__46726 = (i__43069__auto___46725 + (1));
i__43069__auto___46725 = G__46726;
continue;
} else {
}
break;
}

var G__46723 = args46721.length;
switch (G__46723) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46721.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args46728 = [];
var len__43068__auto___46731 = arguments.length;
var i__43069__auto___46732 = (0);
while(true){
if((i__43069__auto___46732 < len__43068__auto___46731)){
args46728.push((arguments[i__43069__auto___46732]));

var G__46733 = (i__43069__auto___46732 + (1));
i__43069__auto___46732 = G__46733;
continue;
} else {
}
break;
}

var G__46730 = args46728.length;
switch (G__46730) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46728.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args46735 = [];
var len__43068__auto___46786 = arguments.length;
var i__43069__auto___46787 = (0);
while(true){
if((i__43069__auto___46787 < len__43068__auto___46786)){
args46735.push((arguments[i__43069__auto___46787]));

var G__46788 = (i__43069__auto___46787 + (1));
i__43069__auto___46787 = G__46788;
continue;
} else {
}
break;
}

var G__46737 = args46735.length;
switch (G__46737) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46735.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44165__auto___46790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___46790,out){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___46790,out){
return (function (state_46761){
var state_val_46762 = (state_46761[(1)]);
if((state_val_46762 === (7))){
var inst_46756 = (state_46761[(2)]);
var state_46761__$1 = state_46761;
var statearr_46763_46791 = state_46761__$1;
(statearr_46763_46791[(2)] = inst_46756);

(statearr_46763_46791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (1))){
var inst_46738 = null;
var state_46761__$1 = (function (){var statearr_46764 = state_46761;
(statearr_46764[(7)] = inst_46738);

return statearr_46764;
})();
var statearr_46765_46792 = state_46761__$1;
(statearr_46765_46792[(2)] = null);

(statearr_46765_46792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (4))){
var inst_46741 = (state_46761[(8)]);
var inst_46741__$1 = (state_46761[(2)]);
var inst_46742 = (inst_46741__$1 == null);
var inst_46743 = cljs.core.not.call(null,inst_46742);
var state_46761__$1 = (function (){var statearr_46766 = state_46761;
(statearr_46766[(8)] = inst_46741__$1);

return statearr_46766;
})();
if(inst_46743){
var statearr_46767_46793 = state_46761__$1;
(statearr_46767_46793[(1)] = (5));

} else {
var statearr_46768_46794 = state_46761__$1;
(statearr_46768_46794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (6))){
var state_46761__$1 = state_46761;
var statearr_46769_46795 = state_46761__$1;
(statearr_46769_46795[(2)] = null);

(statearr_46769_46795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (3))){
var inst_46758 = (state_46761[(2)]);
var inst_46759 = cljs.core.async.close_BANG_.call(null,out);
var state_46761__$1 = (function (){var statearr_46770 = state_46761;
(statearr_46770[(9)] = inst_46758);

return statearr_46770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46761__$1,inst_46759);
} else {
if((state_val_46762 === (2))){
var state_46761__$1 = state_46761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46761__$1,(4),ch);
} else {
if((state_val_46762 === (11))){
var inst_46741 = (state_46761[(8)]);
var inst_46750 = (state_46761[(2)]);
var inst_46738 = inst_46741;
var state_46761__$1 = (function (){var statearr_46771 = state_46761;
(statearr_46771[(7)] = inst_46738);

(statearr_46771[(10)] = inst_46750);

return statearr_46771;
})();
var statearr_46772_46796 = state_46761__$1;
(statearr_46772_46796[(2)] = null);

(statearr_46772_46796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (9))){
var inst_46741 = (state_46761[(8)]);
var state_46761__$1 = state_46761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46761__$1,(11),out,inst_46741);
} else {
if((state_val_46762 === (5))){
var inst_46738 = (state_46761[(7)]);
var inst_46741 = (state_46761[(8)]);
var inst_46745 = cljs.core._EQ_.call(null,inst_46741,inst_46738);
var state_46761__$1 = state_46761;
if(inst_46745){
var statearr_46774_46797 = state_46761__$1;
(statearr_46774_46797[(1)] = (8));

} else {
var statearr_46775_46798 = state_46761__$1;
(statearr_46775_46798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (10))){
var inst_46753 = (state_46761[(2)]);
var state_46761__$1 = state_46761;
var statearr_46776_46799 = state_46761__$1;
(statearr_46776_46799[(2)] = inst_46753);

(statearr_46776_46799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46762 === (8))){
var inst_46738 = (state_46761[(7)]);
var tmp46773 = inst_46738;
var inst_46738__$1 = tmp46773;
var state_46761__$1 = (function (){var statearr_46777 = state_46761;
(statearr_46777[(7)] = inst_46738__$1);

return statearr_46777;
})();
var statearr_46778_46800 = state_46761__$1;
(statearr_46778_46800[(2)] = null);

(statearr_46778_46800[(1)] = (2));


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
});})(c__44165__auto___46790,out))
;
return ((function (switch__44053__auto__,c__44165__auto___46790,out){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_46782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46782[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_46782[(1)] = (1));

return statearr_46782;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_46761){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_46761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e46783){if((e46783 instanceof Object)){
var ex__44057__auto__ = e46783;
var statearr_46784_46801 = state_46761;
(statearr_46784_46801[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46802 = state_46761;
state_46761 = G__46802;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_46761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_46761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___46790,out))
})();
var state__44167__auto__ = (function (){var statearr_46785 = f__44166__auto__.call(null);
(statearr_46785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___46790);

return statearr_46785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___46790,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args46803 = [];
var len__43068__auto___46873 = arguments.length;
var i__43069__auto___46874 = (0);
while(true){
if((i__43069__auto___46874 < len__43068__auto___46873)){
args46803.push((arguments[i__43069__auto___46874]));

var G__46875 = (i__43069__auto___46874 + (1));
i__43069__auto___46874 = G__46875;
continue;
} else {
}
break;
}

var G__46805 = args46803.length;
switch (G__46805) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46803.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44165__auto___46877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___46877,out){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___46877,out){
return (function (state_46843){
var state_val_46844 = (state_46843[(1)]);
if((state_val_46844 === (7))){
var inst_46839 = (state_46843[(2)]);
var state_46843__$1 = state_46843;
var statearr_46845_46878 = state_46843__$1;
(statearr_46845_46878[(2)] = inst_46839);

(statearr_46845_46878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (1))){
var inst_46806 = (new Array(n));
var inst_46807 = inst_46806;
var inst_46808 = (0);
var state_46843__$1 = (function (){var statearr_46846 = state_46843;
(statearr_46846[(7)] = inst_46807);

(statearr_46846[(8)] = inst_46808);

return statearr_46846;
})();
var statearr_46847_46879 = state_46843__$1;
(statearr_46847_46879[(2)] = null);

(statearr_46847_46879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (4))){
var inst_46811 = (state_46843[(9)]);
var inst_46811__$1 = (state_46843[(2)]);
var inst_46812 = (inst_46811__$1 == null);
var inst_46813 = cljs.core.not.call(null,inst_46812);
var state_46843__$1 = (function (){var statearr_46848 = state_46843;
(statearr_46848[(9)] = inst_46811__$1);

return statearr_46848;
})();
if(inst_46813){
var statearr_46849_46880 = state_46843__$1;
(statearr_46849_46880[(1)] = (5));

} else {
var statearr_46850_46881 = state_46843__$1;
(statearr_46850_46881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (15))){
var inst_46833 = (state_46843[(2)]);
var state_46843__$1 = state_46843;
var statearr_46851_46882 = state_46843__$1;
(statearr_46851_46882[(2)] = inst_46833);

(statearr_46851_46882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (13))){
var state_46843__$1 = state_46843;
var statearr_46852_46883 = state_46843__$1;
(statearr_46852_46883[(2)] = null);

(statearr_46852_46883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (6))){
var inst_46808 = (state_46843[(8)]);
var inst_46829 = (inst_46808 > (0));
var state_46843__$1 = state_46843;
if(cljs.core.truth_(inst_46829)){
var statearr_46853_46884 = state_46843__$1;
(statearr_46853_46884[(1)] = (12));

} else {
var statearr_46854_46885 = state_46843__$1;
(statearr_46854_46885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (3))){
var inst_46841 = (state_46843[(2)]);
var state_46843__$1 = state_46843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46843__$1,inst_46841);
} else {
if((state_val_46844 === (12))){
var inst_46807 = (state_46843[(7)]);
var inst_46831 = cljs.core.vec.call(null,inst_46807);
var state_46843__$1 = state_46843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46843__$1,(15),out,inst_46831);
} else {
if((state_val_46844 === (2))){
var state_46843__$1 = state_46843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46843__$1,(4),ch);
} else {
if((state_val_46844 === (11))){
var inst_46823 = (state_46843[(2)]);
var inst_46824 = (new Array(n));
var inst_46807 = inst_46824;
var inst_46808 = (0);
var state_46843__$1 = (function (){var statearr_46855 = state_46843;
(statearr_46855[(7)] = inst_46807);

(statearr_46855[(8)] = inst_46808);

(statearr_46855[(10)] = inst_46823);

return statearr_46855;
})();
var statearr_46856_46886 = state_46843__$1;
(statearr_46856_46886[(2)] = null);

(statearr_46856_46886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (9))){
var inst_46807 = (state_46843[(7)]);
var inst_46821 = cljs.core.vec.call(null,inst_46807);
var state_46843__$1 = state_46843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46843__$1,(11),out,inst_46821);
} else {
if((state_val_46844 === (5))){
var inst_46807 = (state_46843[(7)]);
var inst_46816 = (state_46843[(11)]);
var inst_46811 = (state_46843[(9)]);
var inst_46808 = (state_46843[(8)]);
var inst_46815 = (inst_46807[inst_46808] = inst_46811);
var inst_46816__$1 = (inst_46808 + (1));
var inst_46817 = (inst_46816__$1 < n);
var state_46843__$1 = (function (){var statearr_46857 = state_46843;
(statearr_46857[(11)] = inst_46816__$1);

(statearr_46857[(12)] = inst_46815);

return statearr_46857;
})();
if(cljs.core.truth_(inst_46817)){
var statearr_46858_46887 = state_46843__$1;
(statearr_46858_46887[(1)] = (8));

} else {
var statearr_46859_46888 = state_46843__$1;
(statearr_46859_46888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (14))){
var inst_46836 = (state_46843[(2)]);
var inst_46837 = cljs.core.async.close_BANG_.call(null,out);
var state_46843__$1 = (function (){var statearr_46861 = state_46843;
(statearr_46861[(13)] = inst_46836);

return statearr_46861;
})();
var statearr_46862_46889 = state_46843__$1;
(statearr_46862_46889[(2)] = inst_46837);

(statearr_46862_46889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (10))){
var inst_46827 = (state_46843[(2)]);
var state_46843__$1 = state_46843;
var statearr_46863_46890 = state_46843__$1;
(statearr_46863_46890[(2)] = inst_46827);

(statearr_46863_46890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46844 === (8))){
var inst_46807 = (state_46843[(7)]);
var inst_46816 = (state_46843[(11)]);
var tmp46860 = inst_46807;
var inst_46807__$1 = tmp46860;
var inst_46808 = inst_46816;
var state_46843__$1 = (function (){var statearr_46864 = state_46843;
(statearr_46864[(7)] = inst_46807__$1);

(statearr_46864[(8)] = inst_46808);

return statearr_46864;
})();
var statearr_46865_46891 = state_46843__$1;
(statearr_46865_46891[(2)] = null);

(statearr_46865_46891[(1)] = (2));


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
});})(c__44165__auto___46877,out))
;
return ((function (switch__44053__auto__,c__44165__auto___46877,out){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_46869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46869[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_46869[(1)] = (1));

return statearr_46869;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_46843){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_46843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e46870){if((e46870 instanceof Object)){
var ex__44057__auto__ = e46870;
var statearr_46871_46892 = state_46843;
(statearr_46871_46892[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46893 = state_46843;
state_46843 = G__46893;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_46843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_46843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___46877,out))
})();
var state__44167__auto__ = (function (){var statearr_46872 = f__44166__auto__.call(null);
(statearr_46872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___46877);

return statearr_46872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___46877,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args46894 = [];
var len__43068__auto___46968 = arguments.length;
var i__43069__auto___46969 = (0);
while(true){
if((i__43069__auto___46969 < len__43068__auto___46968)){
args46894.push((arguments[i__43069__auto___46969]));

var G__46970 = (i__43069__auto___46969 + (1));
i__43069__auto___46969 = G__46970;
continue;
} else {
}
break;
}

var G__46896 = args46894.length;
switch (G__46896) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46894.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44165__auto___46972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44165__auto___46972,out){
return (function (){
var f__44166__auto__ = (function (){var switch__44053__auto__ = ((function (c__44165__auto___46972,out){
return (function (state_46938){
var state_val_46939 = (state_46938[(1)]);
if((state_val_46939 === (7))){
var inst_46934 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
var statearr_46940_46973 = state_46938__$1;
(statearr_46940_46973[(2)] = inst_46934);

(statearr_46940_46973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (1))){
var inst_46897 = [];
var inst_46898 = inst_46897;
var inst_46899 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46938__$1 = (function (){var statearr_46941 = state_46938;
(statearr_46941[(7)] = inst_46898);

(statearr_46941[(8)] = inst_46899);

return statearr_46941;
})();
var statearr_46942_46974 = state_46938__$1;
(statearr_46942_46974[(2)] = null);

(statearr_46942_46974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (4))){
var inst_46902 = (state_46938[(9)]);
var inst_46902__$1 = (state_46938[(2)]);
var inst_46903 = (inst_46902__$1 == null);
var inst_46904 = cljs.core.not.call(null,inst_46903);
var state_46938__$1 = (function (){var statearr_46943 = state_46938;
(statearr_46943[(9)] = inst_46902__$1);

return statearr_46943;
})();
if(inst_46904){
var statearr_46944_46975 = state_46938__$1;
(statearr_46944_46975[(1)] = (5));

} else {
var statearr_46945_46976 = state_46938__$1;
(statearr_46945_46976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (15))){
var inst_46928 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
var statearr_46946_46977 = state_46938__$1;
(statearr_46946_46977[(2)] = inst_46928);

(statearr_46946_46977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (13))){
var state_46938__$1 = state_46938;
var statearr_46947_46978 = state_46938__$1;
(statearr_46947_46978[(2)] = null);

(statearr_46947_46978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (6))){
var inst_46898 = (state_46938[(7)]);
var inst_46923 = inst_46898.length;
var inst_46924 = (inst_46923 > (0));
var state_46938__$1 = state_46938;
if(cljs.core.truth_(inst_46924)){
var statearr_46948_46979 = state_46938__$1;
(statearr_46948_46979[(1)] = (12));

} else {
var statearr_46949_46980 = state_46938__$1;
(statearr_46949_46980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (3))){
var inst_46936 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46938__$1,inst_46936);
} else {
if((state_val_46939 === (12))){
var inst_46898 = (state_46938[(7)]);
var inst_46926 = cljs.core.vec.call(null,inst_46898);
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46938__$1,(15),out,inst_46926);
} else {
if((state_val_46939 === (2))){
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46938__$1,(4),ch);
} else {
if((state_val_46939 === (11))){
var inst_46902 = (state_46938[(9)]);
var inst_46906 = (state_46938[(10)]);
var inst_46916 = (state_46938[(2)]);
var inst_46917 = [];
var inst_46918 = inst_46917.push(inst_46902);
var inst_46898 = inst_46917;
var inst_46899 = inst_46906;
var state_46938__$1 = (function (){var statearr_46950 = state_46938;
(statearr_46950[(7)] = inst_46898);

(statearr_46950[(8)] = inst_46899);

(statearr_46950[(11)] = inst_46918);

(statearr_46950[(12)] = inst_46916);

return statearr_46950;
})();
var statearr_46951_46981 = state_46938__$1;
(statearr_46951_46981[(2)] = null);

(statearr_46951_46981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (9))){
var inst_46898 = (state_46938[(7)]);
var inst_46914 = cljs.core.vec.call(null,inst_46898);
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46938__$1,(11),out,inst_46914);
} else {
if((state_val_46939 === (5))){
var inst_46902 = (state_46938[(9)]);
var inst_46906 = (state_46938[(10)]);
var inst_46899 = (state_46938[(8)]);
var inst_46906__$1 = f.call(null,inst_46902);
var inst_46907 = cljs.core._EQ_.call(null,inst_46906__$1,inst_46899);
var inst_46908 = cljs.core.keyword_identical_QMARK_.call(null,inst_46899,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46909 = (inst_46907) || (inst_46908);
var state_46938__$1 = (function (){var statearr_46952 = state_46938;
(statearr_46952[(10)] = inst_46906__$1);

return statearr_46952;
})();
if(cljs.core.truth_(inst_46909)){
var statearr_46953_46982 = state_46938__$1;
(statearr_46953_46982[(1)] = (8));

} else {
var statearr_46954_46983 = state_46938__$1;
(statearr_46954_46983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (14))){
var inst_46931 = (state_46938[(2)]);
var inst_46932 = cljs.core.async.close_BANG_.call(null,out);
var state_46938__$1 = (function (){var statearr_46956 = state_46938;
(statearr_46956[(13)] = inst_46931);

return statearr_46956;
})();
var statearr_46957_46984 = state_46938__$1;
(statearr_46957_46984[(2)] = inst_46932);

(statearr_46957_46984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (10))){
var inst_46921 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
var statearr_46958_46985 = state_46938__$1;
(statearr_46958_46985[(2)] = inst_46921);

(statearr_46958_46985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (8))){
var inst_46902 = (state_46938[(9)]);
var inst_46898 = (state_46938[(7)]);
var inst_46906 = (state_46938[(10)]);
var inst_46911 = inst_46898.push(inst_46902);
var tmp46955 = inst_46898;
var inst_46898__$1 = tmp46955;
var inst_46899 = inst_46906;
var state_46938__$1 = (function (){var statearr_46959 = state_46938;
(statearr_46959[(14)] = inst_46911);

(statearr_46959[(7)] = inst_46898__$1);

(statearr_46959[(8)] = inst_46899);

return statearr_46959;
})();
var statearr_46960_46986 = state_46938__$1;
(statearr_46960_46986[(2)] = null);

(statearr_46960_46986[(1)] = (2));


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
});})(c__44165__auto___46972,out))
;
return ((function (switch__44053__auto__,c__44165__auto___46972,out){
return (function() {
var cljs$core$async$state_machine__44054__auto__ = null;
var cljs$core$async$state_machine__44054__auto____0 = (function (){
var statearr_46964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46964[(0)] = cljs$core$async$state_machine__44054__auto__);

(statearr_46964[(1)] = (1));

return statearr_46964;
});
var cljs$core$async$state_machine__44054__auto____1 = (function (state_46938){
while(true){
var ret_value__44055__auto__ = (function (){try{while(true){
var result__44056__auto__ = switch__44053__auto__.call(null,state_46938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44056__auto__;
}
break;
}
}catch (e46965){if((e46965 instanceof Object)){
var ex__44057__auto__ = e46965;
var statearr_46966_46987 = state_46938;
(statearr_46966_46987[(5)] = ex__44057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46988 = state_46938;
state_46938 = G__46988;
continue;
} else {
return ret_value__44055__auto__;
}
break;
}
});
cljs$core$async$state_machine__44054__auto__ = function(state_46938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44054__auto____1.call(this,state_46938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44054__auto____0;
cljs$core$async$state_machine__44054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44054__auto____1;
return cljs$core$async$state_machine__44054__auto__;
})()
;})(switch__44053__auto__,c__44165__auto___46972,out))
})();
var state__44167__auto__ = (function (){var statearr_46967 = f__44166__auto__.call(null);
(statearr_46967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44165__auto___46972);

return statearr_46967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44167__auto__);
});})(c__44165__auto___46972,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504724081810