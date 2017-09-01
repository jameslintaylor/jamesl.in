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
var args44914 = [];
var len__43068__auto___44920 = arguments.length;
var i__43069__auto___44921 = (0);
while(true){
if((i__43069__auto___44921 < len__43068__auto___44920)){
args44914.push((arguments[i__43069__auto___44921]));

var G__44922 = (i__43069__auto___44921 + (1));
i__43069__auto___44921 = G__44922;
continue;
} else {
}
break;
}

var G__44916 = args44914.length;
switch (G__44916) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44914.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44917 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44917 = (function (f,blockable,meta44918){
this.f = f;
this.blockable = blockable;
this.meta44918 = meta44918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44919,meta44918__$1){
var self__ = this;
var _44919__$1 = this;
return (new cljs.core.async.t_cljs$core$async44917(self__.f,self__.blockable,meta44918__$1));
});

cljs.core.async.t_cljs$core$async44917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44919){
var self__ = this;
var _44919__$1 = this;
return self__.meta44918;
});

cljs.core.async.t_cljs$core$async44917.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44917.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44918","meta44918",1822646239,null)], null);
});

cljs.core.async.t_cljs$core$async44917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44917";

cljs.core.async.t_cljs$core$async44917.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async44917");
});

cljs.core.async.__GT_t_cljs$core$async44917 = (function cljs$core$async$__GT_t_cljs$core$async44917(f__$1,blockable__$1,meta44918){
return (new cljs.core.async.t_cljs$core$async44917(f__$1,blockable__$1,meta44918));
});

}

return (new cljs.core.async.t_cljs$core$async44917(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args44926 = [];
var len__43068__auto___44929 = arguments.length;
var i__43069__auto___44930 = (0);
while(true){
if((i__43069__auto___44930 < len__43068__auto___44929)){
args44926.push((arguments[i__43069__auto___44930]));

var G__44931 = (i__43069__auto___44930 + (1));
i__43069__auto___44930 = G__44931;
continue;
} else {
}
break;
}

var G__44928 = args44926.length;
switch (G__44928) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44926.length)].join('')));

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
var args44933 = [];
var len__43068__auto___44936 = arguments.length;
var i__43069__auto___44937 = (0);
while(true){
if((i__43069__auto___44937 < len__43068__auto___44936)){
args44933.push((arguments[i__43069__auto___44937]));

var G__44938 = (i__43069__auto___44937 + (1));
i__43069__auto___44937 = G__44938;
continue;
} else {
}
break;
}

var G__44935 = args44933.length;
switch (G__44935) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44933.length)].join('')));

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
var args44940 = [];
var len__43068__auto___44943 = arguments.length;
var i__43069__auto___44944 = (0);
while(true){
if((i__43069__auto___44944 < len__43068__auto___44943)){
args44940.push((arguments[i__43069__auto___44944]));

var G__44945 = (i__43069__auto___44944 + (1));
i__43069__auto___44944 = G__44945;
continue;
} else {
}
break;
}

var G__44942 = args44940.length;
switch (G__44942) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44940.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44947 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44947);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44947,ret){
return (function (){
return fn1.call(null,val_44947);
});})(val_44947,ret))
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
var args44948 = [];
var len__43068__auto___44951 = arguments.length;
var i__43069__auto___44952 = (0);
while(true){
if((i__43069__auto___44952 < len__43068__auto___44951)){
args44948.push((arguments[i__43069__auto___44952]));

var G__44953 = (i__43069__auto___44952 + (1));
i__43069__auto___44952 = G__44953;
continue;
} else {
}
break;
}

var G__44950 = args44948.length;
switch (G__44950) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44948.length)].join('')));

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
var n__42908__auto___44955 = n;
var x_44956 = (0);
while(true){
if((x_44956 < n__42908__auto___44955)){
(a[x_44956] = (0));

var G__44957 = (x_44956 + (1));
x_44956 = G__44957;
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

var G__44958 = (i + (1));
i = G__44958;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44962 = (function (alt_flag,flag,meta44963){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44963 = meta44963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44964,meta44963__$1){
var self__ = this;
var _44964__$1 = this;
return (new cljs.core.async.t_cljs$core$async44962(self__.alt_flag,self__.flag,meta44963__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44964){
var self__ = this;
var _44964__$1 = this;
return self__.meta44963;
});})(flag))
;

cljs.core.async.t_cljs$core$async44962.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44962.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44963","meta44963",-1705225389,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44962";

cljs.core.async.t_cljs$core$async44962.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async44962");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44962 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44962(alt_flag__$1,flag__$1,meta44963){
return (new cljs.core.async.t_cljs$core$async44962(alt_flag__$1,flag__$1,meta44963));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44962(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44968 = (function (alt_handler,flag,cb,meta44969){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44969 = meta44969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44970,meta44969__$1){
var self__ = this;
var _44970__$1 = this;
return (new cljs.core.async.t_cljs$core$async44968(self__.alt_handler,self__.flag,self__.cb,meta44969__$1));
});

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44970){
var self__ = this;
var _44970__$1 = this;
return self__.meta44969;
});

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44969","meta44969",-1577693314,null)], null);
});

cljs.core.async.t_cljs$core$async44968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44968";

cljs.core.async.t_cljs$core$async44968.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async44968");
});

cljs.core.async.__GT_t_cljs$core$async44968 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44968(alt_handler__$1,flag__$1,cb__$1,meta44969){
return (new cljs.core.async.t_cljs$core$async44968(alt_handler__$1,flag__$1,cb__$1,meta44969));
});

}

return (new cljs.core.async.t_cljs$core$async44968(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44971_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44971_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44972_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44972_SHARP_,port], null));
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
var G__44973 = (i + (1));
i = G__44973;
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
var len__43068__auto___44979 = arguments.length;
var i__43069__auto___44980 = (0);
while(true){
if((i__43069__auto___44980 < len__43068__auto___44979)){
args__43075__auto__.push((arguments[i__43069__auto___44980]));

var G__44981 = (i__43069__auto___44980 + (1));
i__43069__auto___44980 = G__44981;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((1) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43076__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44976){
var map__44977 = p__44976;
var map__44977__$1 = ((((!((map__44977 == null)))?((((map__44977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44977):map__44977);
var opts = map__44977__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44974){
var G__44975 = cljs.core.first.call(null,seq44974);
var seq44974__$1 = cljs.core.next.call(null,seq44974);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44975,seq44974__$1);
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
var args44982 = [];
var len__43068__auto___45032 = arguments.length;
var i__43069__auto___45033 = (0);
while(true){
if((i__43069__auto___45033 < len__43068__auto___45032)){
args44982.push((arguments[i__43069__auto___45033]));

var G__45034 = (i__43069__auto___45033 + (1));
i__43069__auto___45033 = G__45034;
continue;
} else {
}
break;
}

var G__44984 = args44982.length;
switch (G__44984) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44982.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44869__auto___45036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___45036){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___45036){
return (function (state_45008){
var state_val_45009 = (state_45008[(1)]);
if((state_val_45009 === (7))){
var inst_45004 = (state_45008[(2)]);
var state_45008__$1 = state_45008;
var statearr_45010_45037 = state_45008__$1;
(statearr_45010_45037[(2)] = inst_45004);

(statearr_45010_45037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (1))){
var state_45008__$1 = state_45008;
var statearr_45011_45038 = state_45008__$1;
(statearr_45011_45038[(2)] = null);

(statearr_45011_45038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (4))){
var inst_44987 = (state_45008[(7)]);
var inst_44987__$1 = (state_45008[(2)]);
var inst_44988 = (inst_44987__$1 == null);
var state_45008__$1 = (function (){var statearr_45012 = state_45008;
(statearr_45012[(7)] = inst_44987__$1);

return statearr_45012;
})();
if(cljs.core.truth_(inst_44988)){
var statearr_45013_45039 = state_45008__$1;
(statearr_45013_45039[(1)] = (5));

} else {
var statearr_45014_45040 = state_45008__$1;
(statearr_45014_45040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (13))){
var state_45008__$1 = state_45008;
var statearr_45015_45041 = state_45008__$1;
(statearr_45015_45041[(2)] = null);

(statearr_45015_45041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (6))){
var inst_44987 = (state_45008[(7)]);
var state_45008__$1 = state_45008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45008__$1,(11),to,inst_44987);
} else {
if((state_val_45009 === (3))){
var inst_45006 = (state_45008[(2)]);
var state_45008__$1 = state_45008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45008__$1,inst_45006);
} else {
if((state_val_45009 === (12))){
var state_45008__$1 = state_45008;
var statearr_45016_45042 = state_45008__$1;
(statearr_45016_45042[(2)] = null);

(statearr_45016_45042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (2))){
var state_45008__$1 = state_45008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45008__$1,(4),from);
} else {
if((state_val_45009 === (11))){
var inst_44997 = (state_45008[(2)]);
var state_45008__$1 = state_45008;
if(cljs.core.truth_(inst_44997)){
var statearr_45017_45043 = state_45008__$1;
(statearr_45017_45043[(1)] = (12));

} else {
var statearr_45018_45044 = state_45008__$1;
(statearr_45018_45044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (9))){
var state_45008__$1 = state_45008;
var statearr_45019_45045 = state_45008__$1;
(statearr_45019_45045[(2)] = null);

(statearr_45019_45045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (5))){
var state_45008__$1 = state_45008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45020_45046 = state_45008__$1;
(statearr_45020_45046[(1)] = (8));

} else {
var statearr_45021_45047 = state_45008__$1;
(statearr_45021_45047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (14))){
var inst_45002 = (state_45008[(2)]);
var state_45008__$1 = state_45008;
var statearr_45022_45048 = state_45008__$1;
(statearr_45022_45048[(2)] = inst_45002);

(statearr_45022_45048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (10))){
var inst_44994 = (state_45008[(2)]);
var state_45008__$1 = state_45008;
var statearr_45023_45049 = state_45008__$1;
(statearr_45023_45049[(2)] = inst_44994);

(statearr_45023_45049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45009 === (8))){
var inst_44991 = cljs.core.async.close_BANG_.call(null,to);
var state_45008__$1 = state_45008;
var statearr_45024_45050 = state_45008__$1;
(statearr_45024_45050[(2)] = inst_44991);

(statearr_45024_45050[(1)] = (10));


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
});})(c__44869__auto___45036))
;
return ((function (switch__44757__auto__,c__44869__auto___45036){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_45028 = [null,null,null,null,null,null,null,null];
(statearr_45028[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_45028[(1)] = (1));

return statearr_45028;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_45008){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45029){if((e45029 instanceof Object)){
var ex__44761__auto__ = e45029;
var statearr_45030_45051 = state_45008;
(statearr_45030_45051[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45052 = state_45008;
state_45008 = G__45052;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_45008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_45008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___45036))
})();
var state__44871__auto__ = (function (){var statearr_45031 = f__44870__auto__.call(null);
(statearr_45031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___45036);

return statearr_45031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___45036))
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
return (function (p__45240){
var vec__45241 = p__45240;
var v = cljs.core.nth.call(null,vec__45241,(0),null);
var p = cljs.core.nth.call(null,vec__45241,(1),null);
var job = vec__45241;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44869__auto___45427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___45427,res,vec__45241,v,p,job,jobs,results){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___45427,res,vec__45241,v,p,job,jobs,results){
return (function (state_45248){
var state_val_45249 = (state_45248[(1)]);
if((state_val_45249 === (1))){
var state_45248__$1 = state_45248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45248__$1,(2),res,v);
} else {
if((state_val_45249 === (2))){
var inst_45245 = (state_45248[(2)]);
var inst_45246 = cljs.core.async.close_BANG_.call(null,res);
var state_45248__$1 = (function (){var statearr_45250 = state_45248;
(statearr_45250[(7)] = inst_45245);

return statearr_45250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45248__$1,inst_45246);
} else {
return null;
}
}
});})(c__44869__auto___45427,res,vec__45241,v,p,job,jobs,results))
;
return ((function (switch__44757__auto__,c__44869__auto___45427,res,vec__45241,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0 = (function (){
var statearr_45254 = [null,null,null,null,null,null,null,null];
(statearr_45254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__);

(statearr_45254[(1)] = (1));

return statearr_45254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1 = (function (state_45248){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45255){if((e45255 instanceof Object)){
var ex__44761__auto__ = e45255;
var statearr_45256_45428 = state_45248;
(statearr_45256_45428[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45429 = state_45248;
state_45248 = G__45429;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = function(state_45248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1.call(this,state_45248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___45427,res,vec__45241,v,p,job,jobs,results))
})();
var state__44871__auto__ = (function (){var statearr_45257 = f__44870__auto__.call(null);
(statearr_45257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___45427);

return statearr_45257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___45427,res,vec__45241,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45258){
var vec__45259 = p__45258;
var v = cljs.core.nth.call(null,vec__45259,(0),null);
var p = cljs.core.nth.call(null,vec__45259,(1),null);
var job = vec__45259;
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
var n__42908__auto___45430 = n;
var __45431 = (0);
while(true){
if((__45431 < n__42908__auto___45430)){
var G__45262_45432 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__45262_45432) {
case "compute":
var c__44869__auto___45434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45431,c__44869__auto___45434,G__45262_45432,n__42908__auto___45430,jobs,results,process,async){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (__45431,c__44869__auto___45434,G__45262_45432,n__42908__auto___45430,jobs,results,process,async){
return (function (state_45275){
var state_val_45276 = (state_45275[(1)]);
if((state_val_45276 === (1))){
var state_45275__$1 = state_45275;
var statearr_45277_45435 = state_45275__$1;
(statearr_45277_45435[(2)] = null);

(statearr_45277_45435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45276 === (2))){
var state_45275__$1 = state_45275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45275__$1,(4),jobs);
} else {
if((state_val_45276 === (3))){
var inst_45273 = (state_45275[(2)]);
var state_45275__$1 = state_45275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45275__$1,inst_45273);
} else {
if((state_val_45276 === (4))){
var inst_45265 = (state_45275[(2)]);
var inst_45266 = process.call(null,inst_45265);
var state_45275__$1 = state_45275;
if(cljs.core.truth_(inst_45266)){
var statearr_45278_45436 = state_45275__$1;
(statearr_45278_45436[(1)] = (5));

} else {
var statearr_45279_45437 = state_45275__$1;
(statearr_45279_45437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45276 === (5))){
var state_45275__$1 = state_45275;
var statearr_45280_45438 = state_45275__$1;
(statearr_45280_45438[(2)] = null);

(statearr_45280_45438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45276 === (6))){
var state_45275__$1 = state_45275;
var statearr_45281_45439 = state_45275__$1;
(statearr_45281_45439[(2)] = null);

(statearr_45281_45439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45276 === (7))){
var inst_45271 = (state_45275[(2)]);
var state_45275__$1 = state_45275;
var statearr_45282_45440 = state_45275__$1;
(statearr_45282_45440[(2)] = inst_45271);

(statearr_45282_45440[(1)] = (3));


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
});})(__45431,c__44869__auto___45434,G__45262_45432,n__42908__auto___45430,jobs,results,process,async))
;
return ((function (__45431,switch__44757__auto__,c__44869__auto___45434,G__45262_45432,n__42908__auto___45430,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0 = (function (){
var statearr_45286 = [null,null,null,null,null,null,null];
(statearr_45286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__);

(statearr_45286[(1)] = (1));

return statearr_45286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1 = (function (state_45275){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45287){if((e45287 instanceof Object)){
var ex__44761__auto__ = e45287;
var statearr_45288_45441 = state_45275;
(statearr_45288_45441[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45442 = state_45275;
state_45275 = G__45442;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = function(state_45275){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1.call(this,state_45275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__;
})()
;})(__45431,switch__44757__auto__,c__44869__auto___45434,G__45262_45432,n__42908__auto___45430,jobs,results,process,async))
})();
var state__44871__auto__ = (function (){var statearr_45289 = f__44870__auto__.call(null);
(statearr_45289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___45434);

return statearr_45289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(__45431,c__44869__auto___45434,G__45262_45432,n__42908__auto___45430,jobs,results,process,async))
);


break;
case "async":
var c__44869__auto___45443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45431,c__44869__auto___45443,G__45262_45432,n__42908__auto___45430,jobs,results,process,async){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (__45431,c__44869__auto___45443,G__45262_45432,n__42908__auto___45430,jobs,results,process,async){
return (function (state_45302){
var state_val_45303 = (state_45302[(1)]);
if((state_val_45303 === (1))){
var state_45302__$1 = state_45302;
var statearr_45304_45444 = state_45302__$1;
(statearr_45304_45444[(2)] = null);

(statearr_45304_45444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (2))){
var state_45302__$1 = state_45302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45302__$1,(4),jobs);
} else {
if((state_val_45303 === (3))){
var inst_45300 = (state_45302[(2)]);
var state_45302__$1 = state_45302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45302__$1,inst_45300);
} else {
if((state_val_45303 === (4))){
var inst_45292 = (state_45302[(2)]);
var inst_45293 = async.call(null,inst_45292);
var state_45302__$1 = state_45302;
if(cljs.core.truth_(inst_45293)){
var statearr_45305_45445 = state_45302__$1;
(statearr_45305_45445[(1)] = (5));

} else {
var statearr_45306_45446 = state_45302__$1;
(statearr_45306_45446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (5))){
var state_45302__$1 = state_45302;
var statearr_45307_45447 = state_45302__$1;
(statearr_45307_45447[(2)] = null);

(statearr_45307_45447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (6))){
var state_45302__$1 = state_45302;
var statearr_45308_45448 = state_45302__$1;
(statearr_45308_45448[(2)] = null);

(statearr_45308_45448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (7))){
var inst_45298 = (state_45302[(2)]);
var state_45302__$1 = state_45302;
var statearr_45309_45449 = state_45302__$1;
(statearr_45309_45449[(2)] = inst_45298);

(statearr_45309_45449[(1)] = (3));


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
});})(__45431,c__44869__auto___45443,G__45262_45432,n__42908__auto___45430,jobs,results,process,async))
;
return ((function (__45431,switch__44757__auto__,c__44869__auto___45443,G__45262_45432,n__42908__auto___45430,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0 = (function (){
var statearr_45313 = [null,null,null,null,null,null,null];
(statearr_45313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__);

(statearr_45313[(1)] = (1));

return statearr_45313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1 = (function (state_45302){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45314){if((e45314 instanceof Object)){
var ex__44761__auto__ = e45314;
var statearr_45315_45450 = state_45302;
(statearr_45315_45450[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45451 = state_45302;
state_45302 = G__45451;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = function(state_45302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1.call(this,state_45302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__;
})()
;})(__45431,switch__44757__auto__,c__44869__auto___45443,G__45262_45432,n__42908__auto___45430,jobs,results,process,async))
})();
var state__44871__auto__ = (function (){var statearr_45316 = f__44870__auto__.call(null);
(statearr_45316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___45443);

return statearr_45316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(__45431,c__44869__auto___45443,G__45262_45432,n__42908__auto___45430,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__45452 = (__45431 + (1));
__45431 = G__45452;
continue;
} else {
}
break;
}

var c__44869__auto___45453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___45453,jobs,results,process,async){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___45453,jobs,results,process,async){
return (function (state_45338){
var state_val_45339 = (state_45338[(1)]);
if((state_val_45339 === (1))){
var state_45338__$1 = state_45338;
var statearr_45340_45454 = state_45338__$1;
(statearr_45340_45454[(2)] = null);

(statearr_45340_45454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (2))){
var state_45338__$1 = state_45338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45338__$1,(4),from);
} else {
if((state_val_45339 === (3))){
var inst_45336 = (state_45338[(2)]);
var state_45338__$1 = state_45338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45338__$1,inst_45336);
} else {
if((state_val_45339 === (4))){
var inst_45319 = (state_45338[(7)]);
var inst_45319__$1 = (state_45338[(2)]);
var inst_45320 = (inst_45319__$1 == null);
var state_45338__$1 = (function (){var statearr_45341 = state_45338;
(statearr_45341[(7)] = inst_45319__$1);

return statearr_45341;
})();
if(cljs.core.truth_(inst_45320)){
var statearr_45342_45455 = state_45338__$1;
(statearr_45342_45455[(1)] = (5));

} else {
var statearr_45343_45456 = state_45338__$1;
(statearr_45343_45456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (5))){
var inst_45322 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45338__$1 = state_45338;
var statearr_45344_45457 = state_45338__$1;
(statearr_45344_45457[(2)] = inst_45322);

(statearr_45344_45457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (6))){
var inst_45324 = (state_45338[(8)]);
var inst_45319 = (state_45338[(7)]);
var inst_45324__$1 = cljs.core.async.chan.call(null,(1));
var inst_45325 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45326 = [inst_45319,inst_45324__$1];
var inst_45327 = (new cljs.core.PersistentVector(null,2,(5),inst_45325,inst_45326,null));
var state_45338__$1 = (function (){var statearr_45345 = state_45338;
(statearr_45345[(8)] = inst_45324__$1);

return statearr_45345;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45338__$1,(8),jobs,inst_45327);
} else {
if((state_val_45339 === (7))){
var inst_45334 = (state_45338[(2)]);
var state_45338__$1 = state_45338;
var statearr_45346_45458 = state_45338__$1;
(statearr_45346_45458[(2)] = inst_45334);

(statearr_45346_45458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (8))){
var inst_45324 = (state_45338[(8)]);
var inst_45329 = (state_45338[(2)]);
var state_45338__$1 = (function (){var statearr_45347 = state_45338;
(statearr_45347[(9)] = inst_45329);

return statearr_45347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45338__$1,(9),results,inst_45324);
} else {
if((state_val_45339 === (9))){
var inst_45331 = (state_45338[(2)]);
var state_45338__$1 = (function (){var statearr_45348 = state_45338;
(statearr_45348[(10)] = inst_45331);

return statearr_45348;
})();
var statearr_45349_45459 = state_45338__$1;
(statearr_45349_45459[(2)] = null);

(statearr_45349_45459[(1)] = (2));


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
});})(c__44869__auto___45453,jobs,results,process,async))
;
return ((function (switch__44757__auto__,c__44869__auto___45453,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0 = (function (){
var statearr_45353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__);

(statearr_45353[(1)] = (1));

return statearr_45353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1 = (function (state_45338){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45354){if((e45354 instanceof Object)){
var ex__44761__auto__ = e45354;
var statearr_45355_45460 = state_45338;
(statearr_45355_45460[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45461 = state_45338;
state_45338 = G__45461;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = function(state_45338){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1.call(this,state_45338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___45453,jobs,results,process,async))
})();
var state__44871__auto__ = (function (){var statearr_45356 = f__44870__auto__.call(null);
(statearr_45356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___45453);

return statearr_45356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___45453,jobs,results,process,async))
);


var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__,jobs,results,process,async){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__,jobs,results,process,async){
return (function (state_45394){
var state_val_45395 = (state_45394[(1)]);
if((state_val_45395 === (7))){
var inst_45390 = (state_45394[(2)]);
var state_45394__$1 = state_45394;
var statearr_45396_45462 = state_45394__$1;
(statearr_45396_45462[(2)] = inst_45390);

(statearr_45396_45462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (20))){
var state_45394__$1 = state_45394;
var statearr_45397_45463 = state_45394__$1;
(statearr_45397_45463[(2)] = null);

(statearr_45397_45463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (1))){
var state_45394__$1 = state_45394;
var statearr_45398_45464 = state_45394__$1;
(statearr_45398_45464[(2)] = null);

(statearr_45398_45464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (4))){
var inst_45359 = (state_45394[(7)]);
var inst_45359__$1 = (state_45394[(2)]);
var inst_45360 = (inst_45359__$1 == null);
var state_45394__$1 = (function (){var statearr_45399 = state_45394;
(statearr_45399[(7)] = inst_45359__$1);

return statearr_45399;
})();
if(cljs.core.truth_(inst_45360)){
var statearr_45400_45465 = state_45394__$1;
(statearr_45400_45465[(1)] = (5));

} else {
var statearr_45401_45466 = state_45394__$1;
(statearr_45401_45466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (15))){
var inst_45372 = (state_45394[(8)]);
var state_45394__$1 = state_45394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45394__$1,(18),to,inst_45372);
} else {
if((state_val_45395 === (21))){
var inst_45385 = (state_45394[(2)]);
var state_45394__$1 = state_45394;
var statearr_45402_45467 = state_45394__$1;
(statearr_45402_45467[(2)] = inst_45385);

(statearr_45402_45467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (13))){
var inst_45387 = (state_45394[(2)]);
var state_45394__$1 = (function (){var statearr_45403 = state_45394;
(statearr_45403[(9)] = inst_45387);

return statearr_45403;
})();
var statearr_45404_45468 = state_45394__$1;
(statearr_45404_45468[(2)] = null);

(statearr_45404_45468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (6))){
var inst_45359 = (state_45394[(7)]);
var state_45394__$1 = state_45394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45394__$1,(11),inst_45359);
} else {
if((state_val_45395 === (17))){
var inst_45380 = (state_45394[(2)]);
var state_45394__$1 = state_45394;
if(cljs.core.truth_(inst_45380)){
var statearr_45405_45469 = state_45394__$1;
(statearr_45405_45469[(1)] = (19));

} else {
var statearr_45406_45470 = state_45394__$1;
(statearr_45406_45470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (3))){
var inst_45392 = (state_45394[(2)]);
var state_45394__$1 = state_45394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45394__$1,inst_45392);
} else {
if((state_val_45395 === (12))){
var inst_45369 = (state_45394[(10)]);
var state_45394__$1 = state_45394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45394__$1,(14),inst_45369);
} else {
if((state_val_45395 === (2))){
var state_45394__$1 = state_45394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45394__$1,(4),results);
} else {
if((state_val_45395 === (19))){
var state_45394__$1 = state_45394;
var statearr_45407_45471 = state_45394__$1;
(statearr_45407_45471[(2)] = null);

(statearr_45407_45471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (11))){
var inst_45369 = (state_45394[(2)]);
var state_45394__$1 = (function (){var statearr_45408 = state_45394;
(statearr_45408[(10)] = inst_45369);

return statearr_45408;
})();
var statearr_45409_45472 = state_45394__$1;
(statearr_45409_45472[(2)] = null);

(statearr_45409_45472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (9))){
var state_45394__$1 = state_45394;
var statearr_45410_45473 = state_45394__$1;
(statearr_45410_45473[(2)] = null);

(statearr_45410_45473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (5))){
var state_45394__$1 = state_45394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45411_45474 = state_45394__$1;
(statearr_45411_45474[(1)] = (8));

} else {
var statearr_45412_45475 = state_45394__$1;
(statearr_45412_45475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (14))){
var inst_45372 = (state_45394[(8)]);
var inst_45374 = (state_45394[(11)]);
var inst_45372__$1 = (state_45394[(2)]);
var inst_45373 = (inst_45372__$1 == null);
var inst_45374__$1 = cljs.core.not.call(null,inst_45373);
var state_45394__$1 = (function (){var statearr_45413 = state_45394;
(statearr_45413[(8)] = inst_45372__$1);

(statearr_45413[(11)] = inst_45374__$1);

return statearr_45413;
})();
if(inst_45374__$1){
var statearr_45414_45476 = state_45394__$1;
(statearr_45414_45476[(1)] = (15));

} else {
var statearr_45415_45477 = state_45394__$1;
(statearr_45415_45477[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (16))){
var inst_45374 = (state_45394[(11)]);
var state_45394__$1 = state_45394;
var statearr_45416_45478 = state_45394__$1;
(statearr_45416_45478[(2)] = inst_45374);

(statearr_45416_45478[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (10))){
var inst_45366 = (state_45394[(2)]);
var state_45394__$1 = state_45394;
var statearr_45417_45479 = state_45394__$1;
(statearr_45417_45479[(2)] = inst_45366);

(statearr_45417_45479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (18))){
var inst_45377 = (state_45394[(2)]);
var state_45394__$1 = state_45394;
var statearr_45418_45480 = state_45394__$1;
(statearr_45418_45480[(2)] = inst_45377);

(statearr_45418_45480[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (8))){
var inst_45363 = cljs.core.async.close_BANG_.call(null,to);
var state_45394__$1 = state_45394;
var statearr_45419_45481 = state_45394__$1;
(statearr_45419_45481[(2)] = inst_45363);

(statearr_45419_45481[(1)] = (10));


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
});})(c__44869__auto__,jobs,results,process,async))
;
return ((function (switch__44757__auto__,c__44869__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0 = (function (){
var statearr_45423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__);

(statearr_45423[(1)] = (1));

return statearr_45423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1 = (function (state_45394){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45424){if((e45424 instanceof Object)){
var ex__44761__auto__ = e45424;
var statearr_45425_45482 = state_45394;
(statearr_45425_45482[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45483 = state_45394;
state_45394 = G__45483;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__ = function(state_45394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1.call(this,state_45394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__,jobs,results,process,async))
})();
var state__44871__auto__ = (function (){var statearr_45426 = f__44870__auto__.call(null);
(statearr_45426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_45426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__,jobs,results,process,async))
);

return c__44869__auto__;
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
var args45484 = [];
var len__43068__auto___45487 = arguments.length;
var i__43069__auto___45488 = (0);
while(true){
if((i__43069__auto___45488 < len__43068__auto___45487)){
args45484.push((arguments[i__43069__auto___45488]));

var G__45489 = (i__43069__auto___45488 + (1));
i__43069__auto___45488 = G__45489;
continue;
} else {
}
break;
}

var G__45486 = args45484.length;
switch (G__45486) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45484.length)].join('')));

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
var args45491 = [];
var len__43068__auto___45494 = arguments.length;
var i__43069__auto___45495 = (0);
while(true){
if((i__43069__auto___45495 < len__43068__auto___45494)){
args45491.push((arguments[i__43069__auto___45495]));

var G__45496 = (i__43069__auto___45495 + (1));
i__43069__auto___45495 = G__45496;
continue;
} else {
}
break;
}

var G__45493 = args45491.length;
switch (G__45493) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45491.length)].join('')));

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
var args45498 = [];
var len__43068__auto___45551 = arguments.length;
var i__43069__auto___45552 = (0);
while(true){
if((i__43069__auto___45552 < len__43068__auto___45551)){
args45498.push((arguments[i__43069__auto___45552]));

var G__45553 = (i__43069__auto___45552 + (1));
i__43069__auto___45552 = G__45553;
continue;
} else {
}
break;
}

var G__45500 = args45498.length;
switch (G__45500) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45498.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44869__auto___45555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___45555,tc,fc){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___45555,tc,fc){
return (function (state_45526){
var state_val_45527 = (state_45526[(1)]);
if((state_val_45527 === (7))){
var inst_45522 = (state_45526[(2)]);
var state_45526__$1 = state_45526;
var statearr_45528_45556 = state_45526__$1;
(statearr_45528_45556[(2)] = inst_45522);

(statearr_45528_45556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (1))){
var state_45526__$1 = state_45526;
var statearr_45529_45557 = state_45526__$1;
(statearr_45529_45557[(2)] = null);

(statearr_45529_45557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (4))){
var inst_45503 = (state_45526[(7)]);
var inst_45503__$1 = (state_45526[(2)]);
var inst_45504 = (inst_45503__$1 == null);
var state_45526__$1 = (function (){var statearr_45530 = state_45526;
(statearr_45530[(7)] = inst_45503__$1);

return statearr_45530;
})();
if(cljs.core.truth_(inst_45504)){
var statearr_45531_45558 = state_45526__$1;
(statearr_45531_45558[(1)] = (5));

} else {
var statearr_45532_45559 = state_45526__$1;
(statearr_45532_45559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (13))){
var state_45526__$1 = state_45526;
var statearr_45533_45560 = state_45526__$1;
(statearr_45533_45560[(2)] = null);

(statearr_45533_45560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (6))){
var inst_45503 = (state_45526[(7)]);
var inst_45509 = p.call(null,inst_45503);
var state_45526__$1 = state_45526;
if(cljs.core.truth_(inst_45509)){
var statearr_45534_45561 = state_45526__$1;
(statearr_45534_45561[(1)] = (9));

} else {
var statearr_45535_45562 = state_45526__$1;
(statearr_45535_45562[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (3))){
var inst_45524 = (state_45526[(2)]);
var state_45526__$1 = state_45526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45526__$1,inst_45524);
} else {
if((state_val_45527 === (12))){
var state_45526__$1 = state_45526;
var statearr_45536_45563 = state_45526__$1;
(statearr_45536_45563[(2)] = null);

(statearr_45536_45563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (2))){
var state_45526__$1 = state_45526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45526__$1,(4),ch);
} else {
if((state_val_45527 === (11))){
var inst_45503 = (state_45526[(7)]);
var inst_45513 = (state_45526[(2)]);
var state_45526__$1 = state_45526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45526__$1,(8),inst_45513,inst_45503);
} else {
if((state_val_45527 === (9))){
var state_45526__$1 = state_45526;
var statearr_45537_45564 = state_45526__$1;
(statearr_45537_45564[(2)] = tc);

(statearr_45537_45564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (5))){
var inst_45506 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45507 = cljs.core.async.close_BANG_.call(null,fc);
var state_45526__$1 = (function (){var statearr_45538 = state_45526;
(statearr_45538[(8)] = inst_45506);

return statearr_45538;
})();
var statearr_45539_45565 = state_45526__$1;
(statearr_45539_45565[(2)] = inst_45507);

(statearr_45539_45565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (14))){
var inst_45520 = (state_45526[(2)]);
var state_45526__$1 = state_45526;
var statearr_45540_45566 = state_45526__$1;
(statearr_45540_45566[(2)] = inst_45520);

(statearr_45540_45566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (10))){
var state_45526__$1 = state_45526;
var statearr_45541_45567 = state_45526__$1;
(statearr_45541_45567[(2)] = fc);

(statearr_45541_45567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (8))){
var inst_45515 = (state_45526[(2)]);
var state_45526__$1 = state_45526;
if(cljs.core.truth_(inst_45515)){
var statearr_45542_45568 = state_45526__$1;
(statearr_45542_45568[(1)] = (12));

} else {
var statearr_45543_45569 = state_45526__$1;
(statearr_45543_45569[(1)] = (13));

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
});})(c__44869__auto___45555,tc,fc))
;
return ((function (switch__44757__auto__,c__44869__auto___45555,tc,fc){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_45547 = [null,null,null,null,null,null,null,null,null];
(statearr_45547[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_45547[(1)] = (1));

return statearr_45547;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_45526){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45548){if((e45548 instanceof Object)){
var ex__44761__auto__ = e45548;
var statearr_45549_45570 = state_45526;
(statearr_45549_45570[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45571 = state_45526;
state_45526 = G__45571;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_45526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_45526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___45555,tc,fc))
})();
var state__44871__auto__ = (function (){var statearr_45550 = f__44870__auto__.call(null);
(statearr_45550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___45555);

return statearr_45550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___45555,tc,fc))
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
var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__){
return (function (state_45635){
var state_val_45636 = (state_45635[(1)]);
if((state_val_45636 === (7))){
var inst_45631 = (state_45635[(2)]);
var state_45635__$1 = state_45635;
var statearr_45637_45658 = state_45635__$1;
(statearr_45637_45658[(2)] = inst_45631);

(statearr_45637_45658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45636 === (1))){
var inst_45615 = init;
var state_45635__$1 = (function (){var statearr_45638 = state_45635;
(statearr_45638[(7)] = inst_45615);

return statearr_45638;
})();
var statearr_45639_45659 = state_45635__$1;
(statearr_45639_45659[(2)] = null);

(statearr_45639_45659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45636 === (4))){
var inst_45618 = (state_45635[(8)]);
var inst_45618__$1 = (state_45635[(2)]);
var inst_45619 = (inst_45618__$1 == null);
var state_45635__$1 = (function (){var statearr_45640 = state_45635;
(statearr_45640[(8)] = inst_45618__$1);

return statearr_45640;
})();
if(cljs.core.truth_(inst_45619)){
var statearr_45641_45660 = state_45635__$1;
(statearr_45641_45660[(1)] = (5));

} else {
var statearr_45642_45661 = state_45635__$1;
(statearr_45642_45661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45636 === (6))){
var inst_45618 = (state_45635[(8)]);
var inst_45622 = (state_45635[(9)]);
var inst_45615 = (state_45635[(7)]);
var inst_45622__$1 = f.call(null,inst_45615,inst_45618);
var inst_45623 = cljs.core.reduced_QMARK_.call(null,inst_45622__$1);
var state_45635__$1 = (function (){var statearr_45643 = state_45635;
(statearr_45643[(9)] = inst_45622__$1);

return statearr_45643;
})();
if(inst_45623){
var statearr_45644_45662 = state_45635__$1;
(statearr_45644_45662[(1)] = (8));

} else {
var statearr_45645_45663 = state_45635__$1;
(statearr_45645_45663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45636 === (3))){
var inst_45633 = (state_45635[(2)]);
var state_45635__$1 = state_45635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45635__$1,inst_45633);
} else {
if((state_val_45636 === (2))){
var state_45635__$1 = state_45635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45635__$1,(4),ch);
} else {
if((state_val_45636 === (9))){
var inst_45622 = (state_45635[(9)]);
var inst_45615 = inst_45622;
var state_45635__$1 = (function (){var statearr_45646 = state_45635;
(statearr_45646[(7)] = inst_45615);

return statearr_45646;
})();
var statearr_45647_45664 = state_45635__$1;
(statearr_45647_45664[(2)] = null);

(statearr_45647_45664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45636 === (5))){
var inst_45615 = (state_45635[(7)]);
var state_45635__$1 = state_45635;
var statearr_45648_45665 = state_45635__$1;
(statearr_45648_45665[(2)] = inst_45615);

(statearr_45648_45665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45636 === (10))){
var inst_45629 = (state_45635[(2)]);
var state_45635__$1 = state_45635;
var statearr_45649_45666 = state_45635__$1;
(statearr_45649_45666[(2)] = inst_45629);

(statearr_45649_45666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45636 === (8))){
var inst_45622 = (state_45635[(9)]);
var inst_45625 = cljs.core.deref.call(null,inst_45622);
var state_45635__$1 = state_45635;
var statearr_45650_45667 = state_45635__$1;
(statearr_45650_45667[(2)] = inst_45625);

(statearr_45650_45667[(1)] = (10));


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
});})(c__44869__auto__))
;
return ((function (switch__44757__auto__,c__44869__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44758__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44758__auto____0 = (function (){
var statearr_45654 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45654[(0)] = cljs$core$async$reduce_$_state_machine__44758__auto__);

(statearr_45654[(1)] = (1));

return statearr_45654;
});
var cljs$core$async$reduce_$_state_machine__44758__auto____1 = (function (state_45635){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45655){if((e45655 instanceof Object)){
var ex__44761__auto__ = e45655;
var statearr_45656_45668 = state_45635;
(statearr_45656_45668[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45669 = state_45635;
state_45635 = G__45669;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44758__auto__ = function(state_45635){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44758__auto____1.call(this,state_45635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44758__auto____0;
cljs$core$async$reduce_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44758__auto____1;
return cljs$core$async$reduce_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__))
})();
var state__44871__auto__ = (function (){var statearr_45657 = f__44870__auto__.call(null);
(statearr_45657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_45657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__))
);

return c__44869__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__,f__$1){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__,f__$1){
return (function (state_45689){
var state_val_45690 = (state_45689[(1)]);
if((state_val_45690 === (1))){
var inst_45684 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45689__$1 = state_45689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45689__$1,(2),inst_45684);
} else {
if((state_val_45690 === (2))){
var inst_45686 = (state_45689[(2)]);
var inst_45687 = f__$1.call(null,inst_45686);
var state_45689__$1 = state_45689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45689__$1,inst_45687);
} else {
return null;
}
}
});})(c__44869__auto__,f__$1))
;
return ((function (switch__44757__auto__,c__44869__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44758__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44758__auto____0 = (function (){
var statearr_45694 = [null,null,null,null,null,null,null];
(statearr_45694[(0)] = cljs$core$async$transduce_$_state_machine__44758__auto__);

(statearr_45694[(1)] = (1));

return statearr_45694;
});
var cljs$core$async$transduce_$_state_machine__44758__auto____1 = (function (state_45689){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45695){if((e45695 instanceof Object)){
var ex__44761__auto__ = e45695;
var statearr_45696_45698 = state_45689;
(statearr_45696_45698[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45699 = state_45689;
state_45689 = G__45699;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44758__auto__ = function(state_45689){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44758__auto____1.call(this,state_45689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44758__auto____0;
cljs$core$async$transduce_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44758__auto____1;
return cljs$core$async$transduce_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__,f__$1))
})();
var state__44871__auto__ = (function (){var statearr_45697 = f__44870__auto__.call(null);
(statearr_45697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_45697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__,f__$1))
);

return c__44869__auto__;
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
var args45700 = [];
var len__43068__auto___45752 = arguments.length;
var i__43069__auto___45753 = (0);
while(true){
if((i__43069__auto___45753 < len__43068__auto___45752)){
args45700.push((arguments[i__43069__auto___45753]));

var G__45754 = (i__43069__auto___45753 + (1));
i__43069__auto___45753 = G__45754;
continue;
} else {
}
break;
}

var G__45702 = args45700.length;
switch (G__45702) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45700.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__){
return (function (state_45727){
var state_val_45728 = (state_45727[(1)]);
if((state_val_45728 === (7))){
var inst_45709 = (state_45727[(2)]);
var state_45727__$1 = state_45727;
var statearr_45729_45756 = state_45727__$1;
(statearr_45729_45756[(2)] = inst_45709);

(statearr_45729_45756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (1))){
var inst_45703 = cljs.core.seq.call(null,coll);
var inst_45704 = inst_45703;
var state_45727__$1 = (function (){var statearr_45730 = state_45727;
(statearr_45730[(7)] = inst_45704);

return statearr_45730;
})();
var statearr_45731_45757 = state_45727__$1;
(statearr_45731_45757[(2)] = null);

(statearr_45731_45757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (4))){
var inst_45704 = (state_45727[(7)]);
var inst_45707 = cljs.core.first.call(null,inst_45704);
var state_45727__$1 = state_45727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45727__$1,(7),ch,inst_45707);
} else {
if((state_val_45728 === (13))){
var inst_45721 = (state_45727[(2)]);
var state_45727__$1 = state_45727;
var statearr_45732_45758 = state_45727__$1;
(statearr_45732_45758[(2)] = inst_45721);

(statearr_45732_45758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (6))){
var inst_45712 = (state_45727[(2)]);
var state_45727__$1 = state_45727;
if(cljs.core.truth_(inst_45712)){
var statearr_45733_45759 = state_45727__$1;
(statearr_45733_45759[(1)] = (8));

} else {
var statearr_45734_45760 = state_45727__$1;
(statearr_45734_45760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (3))){
var inst_45725 = (state_45727[(2)]);
var state_45727__$1 = state_45727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45727__$1,inst_45725);
} else {
if((state_val_45728 === (12))){
var state_45727__$1 = state_45727;
var statearr_45735_45761 = state_45727__$1;
(statearr_45735_45761[(2)] = null);

(statearr_45735_45761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (2))){
var inst_45704 = (state_45727[(7)]);
var state_45727__$1 = state_45727;
if(cljs.core.truth_(inst_45704)){
var statearr_45736_45762 = state_45727__$1;
(statearr_45736_45762[(1)] = (4));

} else {
var statearr_45737_45763 = state_45727__$1;
(statearr_45737_45763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (11))){
var inst_45718 = cljs.core.async.close_BANG_.call(null,ch);
var state_45727__$1 = state_45727;
var statearr_45738_45764 = state_45727__$1;
(statearr_45738_45764[(2)] = inst_45718);

(statearr_45738_45764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (9))){
var state_45727__$1 = state_45727;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45739_45765 = state_45727__$1;
(statearr_45739_45765[(1)] = (11));

} else {
var statearr_45740_45766 = state_45727__$1;
(statearr_45740_45766[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (5))){
var inst_45704 = (state_45727[(7)]);
var state_45727__$1 = state_45727;
var statearr_45741_45767 = state_45727__$1;
(statearr_45741_45767[(2)] = inst_45704);

(statearr_45741_45767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (10))){
var inst_45723 = (state_45727[(2)]);
var state_45727__$1 = state_45727;
var statearr_45742_45768 = state_45727__$1;
(statearr_45742_45768[(2)] = inst_45723);

(statearr_45742_45768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45728 === (8))){
var inst_45704 = (state_45727[(7)]);
var inst_45714 = cljs.core.next.call(null,inst_45704);
var inst_45704__$1 = inst_45714;
var state_45727__$1 = (function (){var statearr_45743 = state_45727;
(statearr_45743[(7)] = inst_45704__$1);

return statearr_45743;
})();
var statearr_45744_45769 = state_45727__$1;
(statearr_45744_45769[(2)] = null);

(statearr_45744_45769[(1)] = (2));


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
});})(c__44869__auto__))
;
return ((function (switch__44757__auto__,c__44869__auto__){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_45748 = [null,null,null,null,null,null,null,null];
(statearr_45748[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_45748[(1)] = (1));

return statearr_45748;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_45727){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_45727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e45749){if((e45749 instanceof Object)){
var ex__44761__auto__ = e45749;
var statearr_45750_45770 = state_45727;
(statearr_45750_45770[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45771 = state_45727;
state_45727 = G__45771;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_45727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_45727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__))
})();
var state__44871__auto__ = (function (){var statearr_45751 = f__44870__auto__.call(null);
(statearr_45751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_45751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__))
);

return c__44869__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async45997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45997 = (function (mult,ch,cs,meta45998){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45998 = meta45998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45999,meta45998__$1){
var self__ = this;
var _45999__$1 = this;
return (new cljs.core.async.t_cljs$core$async45997(self__.mult,self__.ch,self__.cs,meta45998__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45999){
var self__ = this;
var _45999__$1 = this;
return self__.meta45998;
});})(cs))
;

cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45997.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45998","meta45998",-957999311,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45997";

cljs.core.async.t_cljs$core$async45997.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async45997");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45997 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45997(mult__$1,ch__$1,cs__$1,meta45998){
return (new cljs.core.async.t_cljs$core$async45997(mult__$1,ch__$1,cs__$1,meta45998));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45997(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44869__auto___46222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___46222,cs,m,dchan,dctr,done){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___46222,cs,m,dchan,dctr,done){
return (function (state_46134){
var state_val_46135 = (state_46134[(1)]);
if((state_val_46135 === (7))){
var inst_46130 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46136_46223 = state_46134__$1;
(statearr_46136_46223[(2)] = inst_46130);

(statearr_46136_46223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (20))){
var inst_46033 = (state_46134[(7)]);
var inst_46045 = cljs.core.first.call(null,inst_46033);
var inst_46046 = cljs.core.nth.call(null,inst_46045,(0),null);
var inst_46047 = cljs.core.nth.call(null,inst_46045,(1),null);
var state_46134__$1 = (function (){var statearr_46137 = state_46134;
(statearr_46137[(8)] = inst_46046);

return statearr_46137;
})();
if(cljs.core.truth_(inst_46047)){
var statearr_46138_46224 = state_46134__$1;
(statearr_46138_46224[(1)] = (22));

} else {
var statearr_46139_46225 = state_46134__$1;
(statearr_46139_46225[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (27))){
var inst_46075 = (state_46134[(9)]);
var inst_46082 = (state_46134[(10)]);
var inst_46002 = (state_46134[(11)]);
var inst_46077 = (state_46134[(12)]);
var inst_46082__$1 = cljs.core._nth.call(null,inst_46075,inst_46077);
var inst_46083 = cljs.core.async.put_BANG_.call(null,inst_46082__$1,inst_46002,done);
var state_46134__$1 = (function (){var statearr_46140 = state_46134;
(statearr_46140[(10)] = inst_46082__$1);

return statearr_46140;
})();
if(cljs.core.truth_(inst_46083)){
var statearr_46141_46226 = state_46134__$1;
(statearr_46141_46226[(1)] = (30));

} else {
var statearr_46142_46227 = state_46134__$1;
(statearr_46142_46227[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (1))){
var state_46134__$1 = state_46134;
var statearr_46143_46228 = state_46134__$1;
(statearr_46143_46228[(2)] = null);

(statearr_46143_46228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (24))){
var inst_46033 = (state_46134[(7)]);
var inst_46052 = (state_46134[(2)]);
var inst_46053 = cljs.core.next.call(null,inst_46033);
var inst_46011 = inst_46053;
var inst_46012 = null;
var inst_46013 = (0);
var inst_46014 = (0);
var state_46134__$1 = (function (){var statearr_46144 = state_46134;
(statearr_46144[(13)] = inst_46052);

(statearr_46144[(14)] = inst_46014);

(statearr_46144[(15)] = inst_46011);

(statearr_46144[(16)] = inst_46013);

(statearr_46144[(17)] = inst_46012);

return statearr_46144;
})();
var statearr_46145_46229 = state_46134__$1;
(statearr_46145_46229[(2)] = null);

(statearr_46145_46229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (39))){
var state_46134__$1 = state_46134;
var statearr_46149_46230 = state_46134__$1;
(statearr_46149_46230[(2)] = null);

(statearr_46149_46230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (4))){
var inst_46002 = (state_46134[(11)]);
var inst_46002__$1 = (state_46134[(2)]);
var inst_46003 = (inst_46002__$1 == null);
var state_46134__$1 = (function (){var statearr_46150 = state_46134;
(statearr_46150[(11)] = inst_46002__$1);

return statearr_46150;
})();
if(cljs.core.truth_(inst_46003)){
var statearr_46151_46231 = state_46134__$1;
(statearr_46151_46231[(1)] = (5));

} else {
var statearr_46152_46232 = state_46134__$1;
(statearr_46152_46232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (15))){
var inst_46014 = (state_46134[(14)]);
var inst_46011 = (state_46134[(15)]);
var inst_46013 = (state_46134[(16)]);
var inst_46012 = (state_46134[(17)]);
var inst_46029 = (state_46134[(2)]);
var inst_46030 = (inst_46014 + (1));
var tmp46146 = inst_46011;
var tmp46147 = inst_46013;
var tmp46148 = inst_46012;
var inst_46011__$1 = tmp46146;
var inst_46012__$1 = tmp46148;
var inst_46013__$1 = tmp46147;
var inst_46014__$1 = inst_46030;
var state_46134__$1 = (function (){var statearr_46153 = state_46134;
(statearr_46153[(18)] = inst_46029);

(statearr_46153[(14)] = inst_46014__$1);

(statearr_46153[(15)] = inst_46011__$1);

(statearr_46153[(16)] = inst_46013__$1);

(statearr_46153[(17)] = inst_46012__$1);

return statearr_46153;
})();
var statearr_46154_46233 = state_46134__$1;
(statearr_46154_46233[(2)] = null);

(statearr_46154_46233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (21))){
var inst_46056 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46158_46234 = state_46134__$1;
(statearr_46158_46234[(2)] = inst_46056);

(statearr_46158_46234[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (31))){
var inst_46082 = (state_46134[(10)]);
var inst_46086 = done.call(null,null);
var inst_46087 = cljs.core.async.untap_STAR_.call(null,m,inst_46082);
var state_46134__$1 = (function (){var statearr_46159 = state_46134;
(statearr_46159[(19)] = inst_46086);

return statearr_46159;
})();
var statearr_46160_46235 = state_46134__$1;
(statearr_46160_46235[(2)] = inst_46087);

(statearr_46160_46235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (32))){
var inst_46075 = (state_46134[(9)]);
var inst_46076 = (state_46134[(20)]);
var inst_46074 = (state_46134[(21)]);
var inst_46077 = (state_46134[(12)]);
var inst_46089 = (state_46134[(2)]);
var inst_46090 = (inst_46077 + (1));
var tmp46155 = inst_46075;
var tmp46156 = inst_46076;
var tmp46157 = inst_46074;
var inst_46074__$1 = tmp46157;
var inst_46075__$1 = tmp46155;
var inst_46076__$1 = tmp46156;
var inst_46077__$1 = inst_46090;
var state_46134__$1 = (function (){var statearr_46161 = state_46134;
(statearr_46161[(9)] = inst_46075__$1);

(statearr_46161[(20)] = inst_46076__$1);

(statearr_46161[(22)] = inst_46089);

(statearr_46161[(21)] = inst_46074__$1);

(statearr_46161[(12)] = inst_46077__$1);

return statearr_46161;
})();
var statearr_46162_46236 = state_46134__$1;
(statearr_46162_46236[(2)] = null);

(statearr_46162_46236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (40))){
var inst_46102 = (state_46134[(23)]);
var inst_46106 = done.call(null,null);
var inst_46107 = cljs.core.async.untap_STAR_.call(null,m,inst_46102);
var state_46134__$1 = (function (){var statearr_46163 = state_46134;
(statearr_46163[(24)] = inst_46106);

return statearr_46163;
})();
var statearr_46164_46237 = state_46134__$1;
(statearr_46164_46237[(2)] = inst_46107);

(statearr_46164_46237[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (33))){
var inst_46093 = (state_46134[(25)]);
var inst_46095 = cljs.core.chunked_seq_QMARK_.call(null,inst_46093);
var state_46134__$1 = state_46134;
if(inst_46095){
var statearr_46165_46238 = state_46134__$1;
(statearr_46165_46238[(1)] = (36));

} else {
var statearr_46166_46239 = state_46134__$1;
(statearr_46166_46239[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (13))){
var inst_46023 = (state_46134[(26)]);
var inst_46026 = cljs.core.async.close_BANG_.call(null,inst_46023);
var state_46134__$1 = state_46134;
var statearr_46167_46240 = state_46134__$1;
(statearr_46167_46240[(2)] = inst_46026);

(statearr_46167_46240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (22))){
var inst_46046 = (state_46134[(8)]);
var inst_46049 = cljs.core.async.close_BANG_.call(null,inst_46046);
var state_46134__$1 = state_46134;
var statearr_46168_46241 = state_46134__$1;
(statearr_46168_46241[(2)] = inst_46049);

(statearr_46168_46241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (36))){
var inst_46093 = (state_46134[(25)]);
var inst_46097 = cljs.core.chunk_first.call(null,inst_46093);
var inst_46098 = cljs.core.chunk_rest.call(null,inst_46093);
var inst_46099 = cljs.core.count.call(null,inst_46097);
var inst_46074 = inst_46098;
var inst_46075 = inst_46097;
var inst_46076 = inst_46099;
var inst_46077 = (0);
var state_46134__$1 = (function (){var statearr_46169 = state_46134;
(statearr_46169[(9)] = inst_46075);

(statearr_46169[(20)] = inst_46076);

(statearr_46169[(21)] = inst_46074);

(statearr_46169[(12)] = inst_46077);

return statearr_46169;
})();
var statearr_46170_46242 = state_46134__$1;
(statearr_46170_46242[(2)] = null);

(statearr_46170_46242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (41))){
var inst_46093 = (state_46134[(25)]);
var inst_46109 = (state_46134[(2)]);
var inst_46110 = cljs.core.next.call(null,inst_46093);
var inst_46074 = inst_46110;
var inst_46075 = null;
var inst_46076 = (0);
var inst_46077 = (0);
var state_46134__$1 = (function (){var statearr_46171 = state_46134;
(statearr_46171[(9)] = inst_46075);

(statearr_46171[(20)] = inst_46076);

(statearr_46171[(21)] = inst_46074);

(statearr_46171[(12)] = inst_46077);

(statearr_46171[(27)] = inst_46109);

return statearr_46171;
})();
var statearr_46172_46243 = state_46134__$1;
(statearr_46172_46243[(2)] = null);

(statearr_46172_46243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (43))){
var state_46134__$1 = state_46134;
var statearr_46173_46244 = state_46134__$1;
(statearr_46173_46244[(2)] = null);

(statearr_46173_46244[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (29))){
var inst_46118 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46174_46245 = state_46134__$1;
(statearr_46174_46245[(2)] = inst_46118);

(statearr_46174_46245[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (44))){
var inst_46127 = (state_46134[(2)]);
var state_46134__$1 = (function (){var statearr_46175 = state_46134;
(statearr_46175[(28)] = inst_46127);

return statearr_46175;
})();
var statearr_46176_46246 = state_46134__$1;
(statearr_46176_46246[(2)] = null);

(statearr_46176_46246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (6))){
var inst_46066 = (state_46134[(29)]);
var inst_46065 = cljs.core.deref.call(null,cs);
var inst_46066__$1 = cljs.core.keys.call(null,inst_46065);
var inst_46067 = cljs.core.count.call(null,inst_46066__$1);
var inst_46068 = cljs.core.reset_BANG_.call(null,dctr,inst_46067);
var inst_46073 = cljs.core.seq.call(null,inst_46066__$1);
var inst_46074 = inst_46073;
var inst_46075 = null;
var inst_46076 = (0);
var inst_46077 = (0);
var state_46134__$1 = (function (){var statearr_46177 = state_46134;
(statearr_46177[(30)] = inst_46068);

(statearr_46177[(29)] = inst_46066__$1);

(statearr_46177[(9)] = inst_46075);

(statearr_46177[(20)] = inst_46076);

(statearr_46177[(21)] = inst_46074);

(statearr_46177[(12)] = inst_46077);

return statearr_46177;
})();
var statearr_46178_46247 = state_46134__$1;
(statearr_46178_46247[(2)] = null);

(statearr_46178_46247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (28))){
var inst_46093 = (state_46134[(25)]);
var inst_46074 = (state_46134[(21)]);
var inst_46093__$1 = cljs.core.seq.call(null,inst_46074);
var state_46134__$1 = (function (){var statearr_46179 = state_46134;
(statearr_46179[(25)] = inst_46093__$1);

return statearr_46179;
})();
if(inst_46093__$1){
var statearr_46180_46248 = state_46134__$1;
(statearr_46180_46248[(1)] = (33));

} else {
var statearr_46181_46249 = state_46134__$1;
(statearr_46181_46249[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (25))){
var inst_46076 = (state_46134[(20)]);
var inst_46077 = (state_46134[(12)]);
var inst_46079 = (inst_46077 < inst_46076);
var inst_46080 = inst_46079;
var state_46134__$1 = state_46134;
if(cljs.core.truth_(inst_46080)){
var statearr_46182_46250 = state_46134__$1;
(statearr_46182_46250[(1)] = (27));

} else {
var statearr_46183_46251 = state_46134__$1;
(statearr_46183_46251[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (34))){
var state_46134__$1 = state_46134;
var statearr_46184_46252 = state_46134__$1;
(statearr_46184_46252[(2)] = null);

(statearr_46184_46252[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (17))){
var state_46134__$1 = state_46134;
var statearr_46185_46253 = state_46134__$1;
(statearr_46185_46253[(2)] = null);

(statearr_46185_46253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (3))){
var inst_46132 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46134__$1,inst_46132);
} else {
if((state_val_46135 === (12))){
var inst_46061 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46186_46254 = state_46134__$1;
(statearr_46186_46254[(2)] = inst_46061);

(statearr_46186_46254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (2))){
var state_46134__$1 = state_46134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46134__$1,(4),ch);
} else {
if((state_val_46135 === (23))){
var state_46134__$1 = state_46134;
var statearr_46187_46255 = state_46134__$1;
(statearr_46187_46255[(2)] = null);

(statearr_46187_46255[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (35))){
var inst_46116 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46188_46256 = state_46134__$1;
(statearr_46188_46256[(2)] = inst_46116);

(statearr_46188_46256[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (19))){
var inst_46033 = (state_46134[(7)]);
var inst_46037 = cljs.core.chunk_first.call(null,inst_46033);
var inst_46038 = cljs.core.chunk_rest.call(null,inst_46033);
var inst_46039 = cljs.core.count.call(null,inst_46037);
var inst_46011 = inst_46038;
var inst_46012 = inst_46037;
var inst_46013 = inst_46039;
var inst_46014 = (0);
var state_46134__$1 = (function (){var statearr_46189 = state_46134;
(statearr_46189[(14)] = inst_46014);

(statearr_46189[(15)] = inst_46011);

(statearr_46189[(16)] = inst_46013);

(statearr_46189[(17)] = inst_46012);

return statearr_46189;
})();
var statearr_46190_46257 = state_46134__$1;
(statearr_46190_46257[(2)] = null);

(statearr_46190_46257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (11))){
var inst_46011 = (state_46134[(15)]);
var inst_46033 = (state_46134[(7)]);
var inst_46033__$1 = cljs.core.seq.call(null,inst_46011);
var state_46134__$1 = (function (){var statearr_46191 = state_46134;
(statearr_46191[(7)] = inst_46033__$1);

return statearr_46191;
})();
if(inst_46033__$1){
var statearr_46192_46258 = state_46134__$1;
(statearr_46192_46258[(1)] = (16));

} else {
var statearr_46193_46259 = state_46134__$1;
(statearr_46193_46259[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (9))){
var inst_46063 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46194_46260 = state_46134__$1;
(statearr_46194_46260[(2)] = inst_46063);

(statearr_46194_46260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (5))){
var inst_46009 = cljs.core.deref.call(null,cs);
var inst_46010 = cljs.core.seq.call(null,inst_46009);
var inst_46011 = inst_46010;
var inst_46012 = null;
var inst_46013 = (0);
var inst_46014 = (0);
var state_46134__$1 = (function (){var statearr_46195 = state_46134;
(statearr_46195[(14)] = inst_46014);

(statearr_46195[(15)] = inst_46011);

(statearr_46195[(16)] = inst_46013);

(statearr_46195[(17)] = inst_46012);

return statearr_46195;
})();
var statearr_46196_46261 = state_46134__$1;
(statearr_46196_46261[(2)] = null);

(statearr_46196_46261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (14))){
var state_46134__$1 = state_46134;
var statearr_46197_46262 = state_46134__$1;
(statearr_46197_46262[(2)] = null);

(statearr_46197_46262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (45))){
var inst_46124 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46198_46263 = state_46134__$1;
(statearr_46198_46263[(2)] = inst_46124);

(statearr_46198_46263[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (26))){
var inst_46066 = (state_46134[(29)]);
var inst_46120 = (state_46134[(2)]);
var inst_46121 = cljs.core.seq.call(null,inst_46066);
var state_46134__$1 = (function (){var statearr_46199 = state_46134;
(statearr_46199[(31)] = inst_46120);

return statearr_46199;
})();
if(inst_46121){
var statearr_46200_46264 = state_46134__$1;
(statearr_46200_46264[(1)] = (42));

} else {
var statearr_46201_46265 = state_46134__$1;
(statearr_46201_46265[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (16))){
var inst_46033 = (state_46134[(7)]);
var inst_46035 = cljs.core.chunked_seq_QMARK_.call(null,inst_46033);
var state_46134__$1 = state_46134;
if(inst_46035){
var statearr_46202_46266 = state_46134__$1;
(statearr_46202_46266[(1)] = (19));

} else {
var statearr_46203_46267 = state_46134__$1;
(statearr_46203_46267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (38))){
var inst_46113 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46204_46268 = state_46134__$1;
(statearr_46204_46268[(2)] = inst_46113);

(statearr_46204_46268[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (30))){
var state_46134__$1 = state_46134;
var statearr_46205_46269 = state_46134__$1;
(statearr_46205_46269[(2)] = null);

(statearr_46205_46269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (10))){
var inst_46014 = (state_46134[(14)]);
var inst_46012 = (state_46134[(17)]);
var inst_46022 = cljs.core._nth.call(null,inst_46012,inst_46014);
var inst_46023 = cljs.core.nth.call(null,inst_46022,(0),null);
var inst_46024 = cljs.core.nth.call(null,inst_46022,(1),null);
var state_46134__$1 = (function (){var statearr_46206 = state_46134;
(statearr_46206[(26)] = inst_46023);

return statearr_46206;
})();
if(cljs.core.truth_(inst_46024)){
var statearr_46207_46270 = state_46134__$1;
(statearr_46207_46270[(1)] = (13));

} else {
var statearr_46208_46271 = state_46134__$1;
(statearr_46208_46271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (18))){
var inst_46059 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46209_46272 = state_46134__$1;
(statearr_46209_46272[(2)] = inst_46059);

(statearr_46209_46272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (42))){
var state_46134__$1 = state_46134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46134__$1,(45),dchan);
} else {
if((state_val_46135 === (37))){
var inst_46093 = (state_46134[(25)]);
var inst_46002 = (state_46134[(11)]);
var inst_46102 = (state_46134[(23)]);
var inst_46102__$1 = cljs.core.first.call(null,inst_46093);
var inst_46103 = cljs.core.async.put_BANG_.call(null,inst_46102__$1,inst_46002,done);
var state_46134__$1 = (function (){var statearr_46210 = state_46134;
(statearr_46210[(23)] = inst_46102__$1);

return statearr_46210;
})();
if(cljs.core.truth_(inst_46103)){
var statearr_46211_46273 = state_46134__$1;
(statearr_46211_46273[(1)] = (39));

} else {
var statearr_46212_46274 = state_46134__$1;
(statearr_46212_46274[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (8))){
var inst_46014 = (state_46134[(14)]);
var inst_46013 = (state_46134[(16)]);
var inst_46016 = (inst_46014 < inst_46013);
var inst_46017 = inst_46016;
var state_46134__$1 = state_46134;
if(cljs.core.truth_(inst_46017)){
var statearr_46213_46275 = state_46134__$1;
(statearr_46213_46275[(1)] = (10));

} else {
var statearr_46214_46276 = state_46134__$1;
(statearr_46214_46276[(1)] = (11));

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
});})(c__44869__auto___46222,cs,m,dchan,dctr,done))
;
return ((function (switch__44757__auto__,c__44869__auto___46222,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44758__auto__ = null;
var cljs$core$async$mult_$_state_machine__44758__auto____0 = (function (){
var statearr_46218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46218[(0)] = cljs$core$async$mult_$_state_machine__44758__auto__);

(statearr_46218[(1)] = (1));

return statearr_46218;
});
var cljs$core$async$mult_$_state_machine__44758__auto____1 = (function (state_46134){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_46134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e46219){if((e46219 instanceof Object)){
var ex__44761__auto__ = e46219;
var statearr_46220_46277 = state_46134;
(statearr_46220_46277[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46278 = state_46134;
state_46134 = G__46278;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44758__auto__ = function(state_46134){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44758__auto____1.call(this,state_46134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44758__auto____0;
cljs$core$async$mult_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44758__auto____1;
return cljs$core$async$mult_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___46222,cs,m,dchan,dctr,done))
})();
var state__44871__auto__ = (function (){var statearr_46221 = f__44870__auto__.call(null);
(statearr_46221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___46222);

return statearr_46221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___46222,cs,m,dchan,dctr,done))
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
var args46279 = [];
var len__43068__auto___46282 = arguments.length;
var i__43069__auto___46283 = (0);
while(true){
if((i__43069__auto___46283 < len__43068__auto___46282)){
args46279.push((arguments[i__43069__auto___46283]));

var G__46284 = (i__43069__auto___46283 + (1));
i__43069__auto___46283 = G__46284;
continue;
} else {
}
break;
}

var G__46281 = args46279.length;
switch (G__46281) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46279.length)].join('')));

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
var len__43068__auto___46296 = arguments.length;
var i__43069__auto___46297 = (0);
while(true){
if((i__43069__auto___46297 < len__43068__auto___46296)){
args__43075__auto__.push((arguments[i__43069__auto___46297]));

var G__46298 = (i__43069__auto___46297 + (1));
i__43069__auto___46297 = G__46298;
continue;
} else {
}
break;
}

var argseq__43076__auto__ = ((((3) < args__43075__auto__.length))?(new cljs.core.IndexedSeq(args__43075__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__43076__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46290){
var map__46291 = p__46290;
var map__46291__$1 = ((((!((map__46291 == null)))?((((map__46291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46291):map__46291);
var opts = map__46291__$1;
var statearr_46293_46299 = state;
(statearr_46293_46299[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46291,map__46291__$1,opts){
return (function (val){
var statearr_46294_46300 = state;
(statearr_46294_46300[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46291,map__46291__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46295_46301 = state;
(statearr_46295_46301[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46286){
var G__46287 = cljs.core.first.call(null,seq46286);
var seq46286__$1 = cljs.core.next.call(null,seq46286);
var G__46288 = cljs.core.first.call(null,seq46286__$1);
var seq46286__$2 = cljs.core.next.call(null,seq46286__$1);
var G__46289 = cljs.core.first.call(null,seq46286__$2);
var seq46286__$3 = cljs.core.next.call(null,seq46286__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46287,G__46288,G__46289,seq46286__$3);
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
if(typeof cljs.core.async.t_cljs$core$async46467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46467 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46468){
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
this.meta46468 = meta46468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46469,meta46468__$1){
var self__ = this;
var _46469__$1 = this;
return (new cljs.core.async.t_cljs$core$async46467(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46468__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46469){
var self__ = this;
var _46469__$1 = this;
return self__.meta46468;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async46467.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46468","meta46468",-750954904,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46467";

cljs.core.async.t_cljs$core$async46467.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async46467");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46467 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46467(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46468){
return (new cljs.core.async.t_cljs$core$async46467(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46468));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46467(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44869__auto___46632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___46632,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___46632,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46569){
var state_val_46570 = (state_46569[(1)]);
if((state_val_46570 === (7))){
var inst_46485 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46571_46633 = state_46569__$1;
(statearr_46571_46633[(2)] = inst_46485);

(statearr_46571_46633[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (20))){
var inst_46497 = (state_46569[(7)]);
var state_46569__$1 = state_46569;
var statearr_46572_46634 = state_46569__$1;
(statearr_46572_46634[(2)] = inst_46497);

(statearr_46572_46634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (27))){
var state_46569__$1 = state_46569;
var statearr_46573_46635 = state_46569__$1;
(statearr_46573_46635[(2)] = null);

(statearr_46573_46635[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (1))){
var inst_46473 = (state_46569[(8)]);
var inst_46473__$1 = calc_state.call(null);
var inst_46475 = (inst_46473__$1 == null);
var inst_46476 = cljs.core.not.call(null,inst_46475);
var state_46569__$1 = (function (){var statearr_46574 = state_46569;
(statearr_46574[(8)] = inst_46473__$1);

return statearr_46574;
})();
if(inst_46476){
var statearr_46575_46636 = state_46569__$1;
(statearr_46575_46636[(1)] = (2));

} else {
var statearr_46576_46637 = state_46569__$1;
(statearr_46576_46637[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (24))){
var inst_46520 = (state_46569[(9)]);
var inst_46529 = (state_46569[(10)]);
var inst_46543 = (state_46569[(11)]);
var inst_46543__$1 = inst_46520.call(null,inst_46529);
var state_46569__$1 = (function (){var statearr_46577 = state_46569;
(statearr_46577[(11)] = inst_46543__$1);

return statearr_46577;
})();
if(cljs.core.truth_(inst_46543__$1)){
var statearr_46578_46638 = state_46569__$1;
(statearr_46578_46638[(1)] = (29));

} else {
var statearr_46579_46639 = state_46569__$1;
(statearr_46579_46639[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (4))){
var inst_46488 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
if(cljs.core.truth_(inst_46488)){
var statearr_46580_46640 = state_46569__$1;
(statearr_46580_46640[(1)] = (8));

} else {
var statearr_46581_46641 = state_46569__$1;
(statearr_46581_46641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (15))){
var inst_46514 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
if(cljs.core.truth_(inst_46514)){
var statearr_46582_46642 = state_46569__$1;
(statearr_46582_46642[(1)] = (19));

} else {
var statearr_46583_46643 = state_46569__$1;
(statearr_46583_46643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (21))){
var inst_46519 = (state_46569[(12)]);
var inst_46519__$1 = (state_46569[(2)]);
var inst_46520 = cljs.core.get.call(null,inst_46519__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46521 = cljs.core.get.call(null,inst_46519__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46522 = cljs.core.get.call(null,inst_46519__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46569__$1 = (function (){var statearr_46584 = state_46569;
(statearr_46584[(13)] = inst_46521);

(statearr_46584[(9)] = inst_46520);

(statearr_46584[(12)] = inst_46519__$1);

return statearr_46584;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46569__$1,(22),inst_46522);
} else {
if((state_val_46570 === (31))){
var inst_46551 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
if(cljs.core.truth_(inst_46551)){
var statearr_46585_46644 = state_46569__$1;
(statearr_46585_46644[(1)] = (32));

} else {
var statearr_46586_46645 = state_46569__$1;
(statearr_46586_46645[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (32))){
var inst_46528 = (state_46569[(14)]);
var state_46569__$1 = state_46569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46569__$1,(35),out,inst_46528);
} else {
if((state_val_46570 === (33))){
var inst_46519 = (state_46569[(12)]);
var inst_46497 = inst_46519;
var state_46569__$1 = (function (){var statearr_46587 = state_46569;
(statearr_46587[(7)] = inst_46497);

return statearr_46587;
})();
var statearr_46588_46646 = state_46569__$1;
(statearr_46588_46646[(2)] = null);

(statearr_46588_46646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (13))){
var inst_46497 = (state_46569[(7)]);
var inst_46504 = inst_46497.cljs$lang$protocol_mask$partition0$;
var inst_46505 = (inst_46504 & (64));
var inst_46506 = inst_46497.cljs$core$ISeq$;
var inst_46507 = (inst_46505) || (inst_46506);
var state_46569__$1 = state_46569;
if(cljs.core.truth_(inst_46507)){
var statearr_46589_46647 = state_46569__$1;
(statearr_46589_46647[(1)] = (16));

} else {
var statearr_46590_46648 = state_46569__$1;
(statearr_46590_46648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (22))){
var inst_46528 = (state_46569[(14)]);
var inst_46529 = (state_46569[(10)]);
var inst_46527 = (state_46569[(2)]);
var inst_46528__$1 = cljs.core.nth.call(null,inst_46527,(0),null);
var inst_46529__$1 = cljs.core.nth.call(null,inst_46527,(1),null);
var inst_46530 = (inst_46528__$1 == null);
var inst_46531 = cljs.core._EQ_.call(null,inst_46529__$1,change);
var inst_46532 = (inst_46530) || (inst_46531);
var state_46569__$1 = (function (){var statearr_46591 = state_46569;
(statearr_46591[(14)] = inst_46528__$1);

(statearr_46591[(10)] = inst_46529__$1);

return statearr_46591;
})();
if(cljs.core.truth_(inst_46532)){
var statearr_46592_46649 = state_46569__$1;
(statearr_46592_46649[(1)] = (23));

} else {
var statearr_46593_46650 = state_46569__$1;
(statearr_46593_46650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (36))){
var inst_46519 = (state_46569[(12)]);
var inst_46497 = inst_46519;
var state_46569__$1 = (function (){var statearr_46594 = state_46569;
(statearr_46594[(7)] = inst_46497);

return statearr_46594;
})();
var statearr_46595_46651 = state_46569__$1;
(statearr_46595_46651[(2)] = null);

(statearr_46595_46651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (29))){
var inst_46543 = (state_46569[(11)]);
var state_46569__$1 = state_46569;
var statearr_46596_46652 = state_46569__$1;
(statearr_46596_46652[(2)] = inst_46543);

(statearr_46596_46652[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (6))){
var state_46569__$1 = state_46569;
var statearr_46597_46653 = state_46569__$1;
(statearr_46597_46653[(2)] = false);

(statearr_46597_46653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (28))){
var inst_46539 = (state_46569[(2)]);
var inst_46540 = calc_state.call(null);
var inst_46497 = inst_46540;
var state_46569__$1 = (function (){var statearr_46598 = state_46569;
(statearr_46598[(15)] = inst_46539);

(statearr_46598[(7)] = inst_46497);

return statearr_46598;
})();
var statearr_46599_46654 = state_46569__$1;
(statearr_46599_46654[(2)] = null);

(statearr_46599_46654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (25))){
var inst_46565 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46600_46655 = state_46569__$1;
(statearr_46600_46655[(2)] = inst_46565);

(statearr_46600_46655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (34))){
var inst_46563 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46601_46656 = state_46569__$1;
(statearr_46601_46656[(2)] = inst_46563);

(statearr_46601_46656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (17))){
var state_46569__$1 = state_46569;
var statearr_46602_46657 = state_46569__$1;
(statearr_46602_46657[(2)] = false);

(statearr_46602_46657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (3))){
var state_46569__$1 = state_46569;
var statearr_46603_46658 = state_46569__$1;
(statearr_46603_46658[(2)] = false);

(statearr_46603_46658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (12))){
var inst_46567 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46569__$1,inst_46567);
} else {
if((state_val_46570 === (2))){
var inst_46473 = (state_46569[(8)]);
var inst_46478 = inst_46473.cljs$lang$protocol_mask$partition0$;
var inst_46479 = (inst_46478 & (64));
var inst_46480 = inst_46473.cljs$core$ISeq$;
var inst_46481 = (inst_46479) || (inst_46480);
var state_46569__$1 = state_46569;
if(cljs.core.truth_(inst_46481)){
var statearr_46604_46659 = state_46569__$1;
(statearr_46604_46659[(1)] = (5));

} else {
var statearr_46605_46660 = state_46569__$1;
(statearr_46605_46660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (23))){
var inst_46528 = (state_46569[(14)]);
var inst_46534 = (inst_46528 == null);
var state_46569__$1 = state_46569;
if(cljs.core.truth_(inst_46534)){
var statearr_46606_46661 = state_46569__$1;
(statearr_46606_46661[(1)] = (26));

} else {
var statearr_46607_46662 = state_46569__$1;
(statearr_46607_46662[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (35))){
var inst_46554 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
if(cljs.core.truth_(inst_46554)){
var statearr_46608_46663 = state_46569__$1;
(statearr_46608_46663[(1)] = (36));

} else {
var statearr_46609_46664 = state_46569__$1;
(statearr_46609_46664[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (19))){
var inst_46497 = (state_46569[(7)]);
var inst_46516 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46497);
var state_46569__$1 = state_46569;
var statearr_46610_46665 = state_46569__$1;
(statearr_46610_46665[(2)] = inst_46516);

(statearr_46610_46665[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (11))){
var inst_46497 = (state_46569[(7)]);
var inst_46501 = (inst_46497 == null);
var inst_46502 = cljs.core.not.call(null,inst_46501);
var state_46569__$1 = state_46569;
if(inst_46502){
var statearr_46611_46666 = state_46569__$1;
(statearr_46611_46666[(1)] = (13));

} else {
var statearr_46612_46667 = state_46569__$1;
(statearr_46612_46667[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (9))){
var inst_46473 = (state_46569[(8)]);
var state_46569__$1 = state_46569;
var statearr_46613_46668 = state_46569__$1;
(statearr_46613_46668[(2)] = inst_46473);

(statearr_46613_46668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (5))){
var state_46569__$1 = state_46569;
var statearr_46614_46669 = state_46569__$1;
(statearr_46614_46669[(2)] = true);

(statearr_46614_46669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (14))){
var state_46569__$1 = state_46569;
var statearr_46615_46670 = state_46569__$1;
(statearr_46615_46670[(2)] = false);

(statearr_46615_46670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (26))){
var inst_46529 = (state_46569[(10)]);
var inst_46536 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46529);
var state_46569__$1 = state_46569;
var statearr_46616_46671 = state_46569__$1;
(statearr_46616_46671[(2)] = inst_46536);

(statearr_46616_46671[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (16))){
var state_46569__$1 = state_46569;
var statearr_46617_46672 = state_46569__$1;
(statearr_46617_46672[(2)] = true);

(statearr_46617_46672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (38))){
var inst_46559 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46618_46673 = state_46569__$1;
(statearr_46618_46673[(2)] = inst_46559);

(statearr_46618_46673[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (30))){
var inst_46521 = (state_46569[(13)]);
var inst_46520 = (state_46569[(9)]);
var inst_46529 = (state_46569[(10)]);
var inst_46546 = cljs.core.empty_QMARK_.call(null,inst_46520);
var inst_46547 = inst_46521.call(null,inst_46529);
var inst_46548 = cljs.core.not.call(null,inst_46547);
var inst_46549 = (inst_46546) && (inst_46548);
var state_46569__$1 = state_46569;
var statearr_46619_46674 = state_46569__$1;
(statearr_46619_46674[(2)] = inst_46549);

(statearr_46619_46674[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (10))){
var inst_46473 = (state_46569[(8)]);
var inst_46493 = (state_46569[(2)]);
var inst_46494 = cljs.core.get.call(null,inst_46493,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46495 = cljs.core.get.call(null,inst_46493,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46496 = cljs.core.get.call(null,inst_46493,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46497 = inst_46473;
var state_46569__$1 = (function (){var statearr_46620 = state_46569;
(statearr_46620[(16)] = inst_46494);

(statearr_46620[(17)] = inst_46496);

(statearr_46620[(18)] = inst_46495);

(statearr_46620[(7)] = inst_46497);

return statearr_46620;
})();
var statearr_46621_46675 = state_46569__$1;
(statearr_46621_46675[(2)] = null);

(statearr_46621_46675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (18))){
var inst_46511 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46622_46676 = state_46569__$1;
(statearr_46622_46676[(2)] = inst_46511);

(statearr_46622_46676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (37))){
var state_46569__$1 = state_46569;
var statearr_46623_46677 = state_46569__$1;
(statearr_46623_46677[(2)] = null);

(statearr_46623_46677[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (8))){
var inst_46473 = (state_46569[(8)]);
var inst_46490 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46473);
var state_46569__$1 = state_46569;
var statearr_46624_46678 = state_46569__$1;
(statearr_46624_46678[(2)] = inst_46490);

(statearr_46624_46678[(1)] = (10));


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
});})(c__44869__auto___46632,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44757__auto__,c__44869__auto___46632,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44758__auto__ = null;
var cljs$core$async$mix_$_state_machine__44758__auto____0 = (function (){
var statearr_46628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46628[(0)] = cljs$core$async$mix_$_state_machine__44758__auto__);

(statearr_46628[(1)] = (1));

return statearr_46628;
});
var cljs$core$async$mix_$_state_machine__44758__auto____1 = (function (state_46569){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_46569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e46629){if((e46629 instanceof Object)){
var ex__44761__auto__ = e46629;
var statearr_46630_46679 = state_46569;
(statearr_46630_46679[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46680 = state_46569;
state_46569 = G__46680;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44758__auto__ = function(state_46569){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44758__auto____1.call(this,state_46569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44758__auto____0;
cljs$core$async$mix_$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44758__auto____1;
return cljs$core$async$mix_$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___46632,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44871__auto__ = (function (){var statearr_46631 = f__44870__auto__.call(null);
(statearr_46631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___46632);

return statearr_46631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___46632,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args46681 = [];
var len__43068__auto___46684 = arguments.length;
var i__43069__auto___46685 = (0);
while(true){
if((i__43069__auto___46685 < len__43068__auto___46684)){
args46681.push((arguments[i__43069__auto___46685]));

var G__46686 = (i__43069__auto___46685 + (1));
i__43069__auto___46685 = G__46686;
continue;
} else {
}
break;
}

var G__46683 = args46681.length;
switch (G__46683) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46681.length)].join('')));

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
var args46689 = [];
var len__43068__auto___46814 = arguments.length;
var i__43069__auto___46815 = (0);
while(true){
if((i__43069__auto___46815 < len__43068__auto___46814)){
args46689.push((arguments[i__43069__auto___46815]));

var G__46816 = (i__43069__auto___46815 + (1));
i__43069__auto___46815 = G__46816;
continue;
} else {
}
break;
}

var G__46691 = args46689.length;
switch (G__46691) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46689.length)].join('')));

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
return (function (p1__46688_SHARP_){
if(cljs.core.truth_(p1__46688_SHARP_.call(null,topic))){
return p1__46688_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46688_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41993__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46692 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46693){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46693 = meta46693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46694,meta46693__$1){
var self__ = this;
var _46694__$1 = this;
return (new cljs.core.async.t_cljs$core$async46692(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46693__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46694){
var self__ = this;
var _46694__$1 = this;
return self__.meta46693;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46692.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46692.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async46692.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46692.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46692.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46692.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46692.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46693","meta46693",-1181005273,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46692";

cljs.core.async.t_cljs$core$async46692.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async46692");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46692 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46692(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46693){
return (new cljs.core.async.t_cljs$core$async46692(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46693));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46692(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44869__auto___46818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___46818,mults,ensure_mult,p){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___46818,mults,ensure_mult,p){
return (function (state_46766){
var state_val_46767 = (state_46766[(1)]);
if((state_val_46767 === (7))){
var inst_46762 = (state_46766[(2)]);
var state_46766__$1 = state_46766;
var statearr_46768_46819 = state_46766__$1;
(statearr_46768_46819[(2)] = inst_46762);

(statearr_46768_46819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (20))){
var state_46766__$1 = state_46766;
var statearr_46769_46820 = state_46766__$1;
(statearr_46769_46820[(2)] = null);

(statearr_46769_46820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (1))){
var state_46766__$1 = state_46766;
var statearr_46770_46821 = state_46766__$1;
(statearr_46770_46821[(2)] = null);

(statearr_46770_46821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (24))){
var inst_46745 = (state_46766[(7)]);
var inst_46754 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46745);
var state_46766__$1 = state_46766;
var statearr_46771_46822 = state_46766__$1;
(statearr_46771_46822[(2)] = inst_46754);

(statearr_46771_46822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (4))){
var inst_46697 = (state_46766[(8)]);
var inst_46697__$1 = (state_46766[(2)]);
var inst_46698 = (inst_46697__$1 == null);
var state_46766__$1 = (function (){var statearr_46772 = state_46766;
(statearr_46772[(8)] = inst_46697__$1);

return statearr_46772;
})();
if(cljs.core.truth_(inst_46698)){
var statearr_46773_46823 = state_46766__$1;
(statearr_46773_46823[(1)] = (5));

} else {
var statearr_46774_46824 = state_46766__$1;
(statearr_46774_46824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (15))){
var inst_46739 = (state_46766[(2)]);
var state_46766__$1 = state_46766;
var statearr_46775_46825 = state_46766__$1;
(statearr_46775_46825[(2)] = inst_46739);

(statearr_46775_46825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (21))){
var inst_46759 = (state_46766[(2)]);
var state_46766__$1 = (function (){var statearr_46776 = state_46766;
(statearr_46776[(9)] = inst_46759);

return statearr_46776;
})();
var statearr_46777_46826 = state_46766__$1;
(statearr_46777_46826[(2)] = null);

(statearr_46777_46826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (13))){
var inst_46721 = (state_46766[(10)]);
var inst_46723 = cljs.core.chunked_seq_QMARK_.call(null,inst_46721);
var state_46766__$1 = state_46766;
if(inst_46723){
var statearr_46778_46827 = state_46766__$1;
(statearr_46778_46827[(1)] = (16));

} else {
var statearr_46779_46828 = state_46766__$1;
(statearr_46779_46828[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (22))){
var inst_46751 = (state_46766[(2)]);
var state_46766__$1 = state_46766;
if(cljs.core.truth_(inst_46751)){
var statearr_46780_46829 = state_46766__$1;
(statearr_46780_46829[(1)] = (23));

} else {
var statearr_46781_46830 = state_46766__$1;
(statearr_46781_46830[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (6))){
var inst_46747 = (state_46766[(11)]);
var inst_46697 = (state_46766[(8)]);
var inst_46745 = (state_46766[(7)]);
var inst_46745__$1 = topic_fn.call(null,inst_46697);
var inst_46746 = cljs.core.deref.call(null,mults);
var inst_46747__$1 = cljs.core.get.call(null,inst_46746,inst_46745__$1);
var state_46766__$1 = (function (){var statearr_46782 = state_46766;
(statearr_46782[(11)] = inst_46747__$1);

(statearr_46782[(7)] = inst_46745__$1);

return statearr_46782;
})();
if(cljs.core.truth_(inst_46747__$1)){
var statearr_46783_46831 = state_46766__$1;
(statearr_46783_46831[(1)] = (19));

} else {
var statearr_46784_46832 = state_46766__$1;
(statearr_46784_46832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (25))){
var inst_46756 = (state_46766[(2)]);
var state_46766__$1 = state_46766;
var statearr_46785_46833 = state_46766__$1;
(statearr_46785_46833[(2)] = inst_46756);

(statearr_46785_46833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (17))){
var inst_46721 = (state_46766[(10)]);
var inst_46730 = cljs.core.first.call(null,inst_46721);
var inst_46731 = cljs.core.async.muxch_STAR_.call(null,inst_46730);
var inst_46732 = cljs.core.async.close_BANG_.call(null,inst_46731);
var inst_46733 = cljs.core.next.call(null,inst_46721);
var inst_46707 = inst_46733;
var inst_46708 = null;
var inst_46709 = (0);
var inst_46710 = (0);
var state_46766__$1 = (function (){var statearr_46786 = state_46766;
(statearr_46786[(12)] = inst_46732);

(statearr_46786[(13)] = inst_46708);

(statearr_46786[(14)] = inst_46710);

(statearr_46786[(15)] = inst_46709);

(statearr_46786[(16)] = inst_46707);

return statearr_46786;
})();
var statearr_46787_46834 = state_46766__$1;
(statearr_46787_46834[(2)] = null);

(statearr_46787_46834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (3))){
var inst_46764 = (state_46766[(2)]);
var state_46766__$1 = state_46766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46766__$1,inst_46764);
} else {
if((state_val_46767 === (12))){
var inst_46741 = (state_46766[(2)]);
var state_46766__$1 = state_46766;
var statearr_46788_46835 = state_46766__$1;
(statearr_46788_46835[(2)] = inst_46741);

(statearr_46788_46835[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (2))){
var state_46766__$1 = state_46766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46766__$1,(4),ch);
} else {
if((state_val_46767 === (23))){
var state_46766__$1 = state_46766;
var statearr_46789_46836 = state_46766__$1;
(statearr_46789_46836[(2)] = null);

(statearr_46789_46836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (19))){
var inst_46747 = (state_46766[(11)]);
var inst_46697 = (state_46766[(8)]);
var inst_46749 = cljs.core.async.muxch_STAR_.call(null,inst_46747);
var state_46766__$1 = state_46766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46766__$1,(22),inst_46749,inst_46697);
} else {
if((state_val_46767 === (11))){
var inst_46721 = (state_46766[(10)]);
var inst_46707 = (state_46766[(16)]);
var inst_46721__$1 = cljs.core.seq.call(null,inst_46707);
var state_46766__$1 = (function (){var statearr_46790 = state_46766;
(statearr_46790[(10)] = inst_46721__$1);

return statearr_46790;
})();
if(inst_46721__$1){
var statearr_46791_46837 = state_46766__$1;
(statearr_46791_46837[(1)] = (13));

} else {
var statearr_46792_46838 = state_46766__$1;
(statearr_46792_46838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (9))){
var inst_46743 = (state_46766[(2)]);
var state_46766__$1 = state_46766;
var statearr_46793_46839 = state_46766__$1;
(statearr_46793_46839[(2)] = inst_46743);

(statearr_46793_46839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (5))){
var inst_46704 = cljs.core.deref.call(null,mults);
var inst_46705 = cljs.core.vals.call(null,inst_46704);
var inst_46706 = cljs.core.seq.call(null,inst_46705);
var inst_46707 = inst_46706;
var inst_46708 = null;
var inst_46709 = (0);
var inst_46710 = (0);
var state_46766__$1 = (function (){var statearr_46794 = state_46766;
(statearr_46794[(13)] = inst_46708);

(statearr_46794[(14)] = inst_46710);

(statearr_46794[(15)] = inst_46709);

(statearr_46794[(16)] = inst_46707);

return statearr_46794;
})();
var statearr_46795_46840 = state_46766__$1;
(statearr_46795_46840[(2)] = null);

(statearr_46795_46840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (14))){
var state_46766__$1 = state_46766;
var statearr_46799_46841 = state_46766__$1;
(statearr_46799_46841[(2)] = null);

(statearr_46799_46841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (16))){
var inst_46721 = (state_46766[(10)]);
var inst_46725 = cljs.core.chunk_first.call(null,inst_46721);
var inst_46726 = cljs.core.chunk_rest.call(null,inst_46721);
var inst_46727 = cljs.core.count.call(null,inst_46725);
var inst_46707 = inst_46726;
var inst_46708 = inst_46725;
var inst_46709 = inst_46727;
var inst_46710 = (0);
var state_46766__$1 = (function (){var statearr_46800 = state_46766;
(statearr_46800[(13)] = inst_46708);

(statearr_46800[(14)] = inst_46710);

(statearr_46800[(15)] = inst_46709);

(statearr_46800[(16)] = inst_46707);

return statearr_46800;
})();
var statearr_46801_46842 = state_46766__$1;
(statearr_46801_46842[(2)] = null);

(statearr_46801_46842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (10))){
var inst_46708 = (state_46766[(13)]);
var inst_46710 = (state_46766[(14)]);
var inst_46709 = (state_46766[(15)]);
var inst_46707 = (state_46766[(16)]);
var inst_46715 = cljs.core._nth.call(null,inst_46708,inst_46710);
var inst_46716 = cljs.core.async.muxch_STAR_.call(null,inst_46715);
var inst_46717 = cljs.core.async.close_BANG_.call(null,inst_46716);
var inst_46718 = (inst_46710 + (1));
var tmp46796 = inst_46708;
var tmp46797 = inst_46709;
var tmp46798 = inst_46707;
var inst_46707__$1 = tmp46798;
var inst_46708__$1 = tmp46796;
var inst_46709__$1 = tmp46797;
var inst_46710__$1 = inst_46718;
var state_46766__$1 = (function (){var statearr_46802 = state_46766;
(statearr_46802[(13)] = inst_46708__$1);

(statearr_46802[(14)] = inst_46710__$1);

(statearr_46802[(15)] = inst_46709__$1);

(statearr_46802[(16)] = inst_46707__$1);

(statearr_46802[(17)] = inst_46717);

return statearr_46802;
})();
var statearr_46803_46843 = state_46766__$1;
(statearr_46803_46843[(2)] = null);

(statearr_46803_46843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (18))){
var inst_46736 = (state_46766[(2)]);
var state_46766__$1 = state_46766;
var statearr_46804_46844 = state_46766__$1;
(statearr_46804_46844[(2)] = inst_46736);

(statearr_46804_46844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46767 === (8))){
var inst_46710 = (state_46766[(14)]);
var inst_46709 = (state_46766[(15)]);
var inst_46712 = (inst_46710 < inst_46709);
var inst_46713 = inst_46712;
var state_46766__$1 = state_46766;
if(cljs.core.truth_(inst_46713)){
var statearr_46805_46845 = state_46766__$1;
(statearr_46805_46845[(1)] = (10));

} else {
var statearr_46806_46846 = state_46766__$1;
(statearr_46806_46846[(1)] = (11));

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
});})(c__44869__auto___46818,mults,ensure_mult,p))
;
return ((function (switch__44757__auto__,c__44869__auto___46818,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_46810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46810[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_46810[(1)] = (1));

return statearr_46810;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_46766){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_46766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e46811){if((e46811 instanceof Object)){
var ex__44761__auto__ = e46811;
var statearr_46812_46847 = state_46766;
(statearr_46812_46847[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46848 = state_46766;
state_46766 = G__46848;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_46766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_46766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___46818,mults,ensure_mult,p))
})();
var state__44871__auto__ = (function (){var statearr_46813 = f__44870__auto__.call(null);
(statearr_46813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___46818);

return statearr_46813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___46818,mults,ensure_mult,p))
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
var args46849 = [];
var len__43068__auto___46852 = arguments.length;
var i__43069__auto___46853 = (0);
while(true){
if((i__43069__auto___46853 < len__43068__auto___46852)){
args46849.push((arguments[i__43069__auto___46853]));

var G__46854 = (i__43069__auto___46853 + (1));
i__43069__auto___46853 = G__46854;
continue;
} else {
}
break;
}

var G__46851 = args46849.length;
switch (G__46851) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46849.length)].join('')));

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
var args46856 = [];
var len__43068__auto___46859 = arguments.length;
var i__43069__auto___46860 = (0);
while(true){
if((i__43069__auto___46860 < len__43068__auto___46859)){
args46856.push((arguments[i__43069__auto___46860]));

var G__46861 = (i__43069__auto___46860 + (1));
i__43069__auto___46860 = G__46861;
continue;
} else {
}
break;
}

var G__46858 = args46856.length;
switch (G__46858) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46856.length)].join('')));

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
var args46863 = [];
var len__43068__auto___46934 = arguments.length;
var i__43069__auto___46935 = (0);
while(true){
if((i__43069__auto___46935 < len__43068__auto___46934)){
args46863.push((arguments[i__43069__auto___46935]));

var G__46936 = (i__43069__auto___46935 + (1));
i__43069__auto___46935 = G__46936;
continue;
} else {
}
break;
}

var G__46865 = args46863.length;
switch (G__46865) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46863.length)].join('')));

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
var c__44869__auto___46938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___46938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___46938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46904){
var state_val_46905 = (state_46904[(1)]);
if((state_val_46905 === (7))){
var state_46904__$1 = state_46904;
var statearr_46906_46939 = state_46904__$1;
(statearr_46906_46939[(2)] = null);

(statearr_46906_46939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (1))){
var state_46904__$1 = state_46904;
var statearr_46907_46940 = state_46904__$1;
(statearr_46907_46940[(2)] = null);

(statearr_46907_46940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (4))){
var inst_46868 = (state_46904[(7)]);
var inst_46870 = (inst_46868 < cnt);
var state_46904__$1 = state_46904;
if(cljs.core.truth_(inst_46870)){
var statearr_46908_46941 = state_46904__$1;
(statearr_46908_46941[(1)] = (6));

} else {
var statearr_46909_46942 = state_46904__$1;
(statearr_46909_46942[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (15))){
var inst_46900 = (state_46904[(2)]);
var state_46904__$1 = state_46904;
var statearr_46910_46943 = state_46904__$1;
(statearr_46910_46943[(2)] = inst_46900);

(statearr_46910_46943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (13))){
var inst_46893 = cljs.core.async.close_BANG_.call(null,out);
var state_46904__$1 = state_46904;
var statearr_46911_46944 = state_46904__$1;
(statearr_46911_46944[(2)] = inst_46893);

(statearr_46911_46944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (6))){
var state_46904__$1 = state_46904;
var statearr_46912_46945 = state_46904__$1;
(statearr_46912_46945[(2)] = null);

(statearr_46912_46945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (3))){
var inst_46902 = (state_46904[(2)]);
var state_46904__$1 = state_46904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46904__$1,inst_46902);
} else {
if((state_val_46905 === (12))){
var inst_46890 = (state_46904[(8)]);
var inst_46890__$1 = (state_46904[(2)]);
var inst_46891 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46890__$1);
var state_46904__$1 = (function (){var statearr_46913 = state_46904;
(statearr_46913[(8)] = inst_46890__$1);

return statearr_46913;
})();
if(cljs.core.truth_(inst_46891)){
var statearr_46914_46946 = state_46904__$1;
(statearr_46914_46946[(1)] = (13));

} else {
var statearr_46915_46947 = state_46904__$1;
(statearr_46915_46947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (2))){
var inst_46867 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46868 = (0);
var state_46904__$1 = (function (){var statearr_46916 = state_46904;
(statearr_46916[(9)] = inst_46867);

(statearr_46916[(7)] = inst_46868);

return statearr_46916;
})();
var statearr_46917_46948 = state_46904__$1;
(statearr_46917_46948[(2)] = null);

(statearr_46917_46948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (11))){
var inst_46868 = (state_46904[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46904,(10),Object,null,(9));
var inst_46877 = chs__$1.call(null,inst_46868);
var inst_46878 = done.call(null,inst_46868);
var inst_46879 = cljs.core.async.take_BANG_.call(null,inst_46877,inst_46878);
var state_46904__$1 = state_46904;
var statearr_46918_46949 = state_46904__$1;
(statearr_46918_46949[(2)] = inst_46879);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46904__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (9))){
var inst_46868 = (state_46904[(7)]);
var inst_46881 = (state_46904[(2)]);
var inst_46882 = (inst_46868 + (1));
var inst_46868__$1 = inst_46882;
var state_46904__$1 = (function (){var statearr_46919 = state_46904;
(statearr_46919[(10)] = inst_46881);

(statearr_46919[(7)] = inst_46868__$1);

return statearr_46919;
})();
var statearr_46920_46950 = state_46904__$1;
(statearr_46920_46950[(2)] = null);

(statearr_46920_46950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (5))){
var inst_46888 = (state_46904[(2)]);
var state_46904__$1 = (function (){var statearr_46921 = state_46904;
(statearr_46921[(11)] = inst_46888);

return statearr_46921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46904__$1,(12),dchan);
} else {
if((state_val_46905 === (14))){
var inst_46890 = (state_46904[(8)]);
var inst_46895 = cljs.core.apply.call(null,f,inst_46890);
var state_46904__$1 = state_46904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46904__$1,(16),out,inst_46895);
} else {
if((state_val_46905 === (16))){
var inst_46897 = (state_46904[(2)]);
var state_46904__$1 = (function (){var statearr_46922 = state_46904;
(statearr_46922[(12)] = inst_46897);

return statearr_46922;
})();
var statearr_46923_46951 = state_46904__$1;
(statearr_46923_46951[(2)] = null);

(statearr_46923_46951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (10))){
var inst_46872 = (state_46904[(2)]);
var inst_46873 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46904__$1 = (function (){var statearr_46924 = state_46904;
(statearr_46924[(13)] = inst_46872);

return statearr_46924;
})();
var statearr_46925_46952 = state_46904__$1;
(statearr_46925_46952[(2)] = inst_46873);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46904__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (8))){
var inst_46886 = (state_46904[(2)]);
var state_46904__$1 = state_46904;
var statearr_46926_46953 = state_46904__$1;
(statearr_46926_46953[(2)] = inst_46886);

(statearr_46926_46953[(1)] = (5));


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
});})(c__44869__auto___46938,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44757__auto__,c__44869__auto___46938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_46930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46930[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_46930[(1)] = (1));

return statearr_46930;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_46904){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_46904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e46931){if((e46931 instanceof Object)){
var ex__44761__auto__ = e46931;
var statearr_46932_46954 = state_46904;
(statearr_46932_46954[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46955 = state_46904;
state_46904 = G__46955;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_46904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_46904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___46938,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44871__auto__ = (function (){var statearr_46933 = f__44870__auto__.call(null);
(statearr_46933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___46938);

return statearr_46933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___46938,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args46957 = [];
var len__43068__auto___47015 = arguments.length;
var i__43069__auto___47016 = (0);
while(true){
if((i__43069__auto___47016 < len__43068__auto___47015)){
args46957.push((arguments[i__43069__auto___47016]));

var G__47017 = (i__43069__auto___47016 + (1));
i__43069__auto___47016 = G__47017;
continue;
} else {
}
break;
}

var G__46959 = args46957.length;
switch (G__46959) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46957.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44869__auto___47019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___47019,out){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___47019,out){
return (function (state_46991){
var state_val_46992 = (state_46991[(1)]);
if((state_val_46992 === (7))){
var inst_46971 = (state_46991[(7)]);
var inst_46970 = (state_46991[(8)]);
var inst_46970__$1 = (state_46991[(2)]);
var inst_46971__$1 = cljs.core.nth.call(null,inst_46970__$1,(0),null);
var inst_46972 = cljs.core.nth.call(null,inst_46970__$1,(1),null);
var inst_46973 = (inst_46971__$1 == null);
var state_46991__$1 = (function (){var statearr_46993 = state_46991;
(statearr_46993[(7)] = inst_46971__$1);

(statearr_46993[(8)] = inst_46970__$1);

(statearr_46993[(9)] = inst_46972);

return statearr_46993;
})();
if(cljs.core.truth_(inst_46973)){
var statearr_46994_47020 = state_46991__$1;
(statearr_46994_47020[(1)] = (8));

} else {
var statearr_46995_47021 = state_46991__$1;
(statearr_46995_47021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (1))){
var inst_46960 = cljs.core.vec.call(null,chs);
var inst_46961 = inst_46960;
var state_46991__$1 = (function (){var statearr_46996 = state_46991;
(statearr_46996[(10)] = inst_46961);

return statearr_46996;
})();
var statearr_46997_47022 = state_46991__$1;
(statearr_46997_47022[(2)] = null);

(statearr_46997_47022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (4))){
var inst_46961 = (state_46991[(10)]);
var state_46991__$1 = state_46991;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46991__$1,(7),inst_46961);
} else {
if((state_val_46992 === (6))){
var inst_46987 = (state_46991[(2)]);
var state_46991__$1 = state_46991;
var statearr_46998_47023 = state_46991__$1;
(statearr_46998_47023[(2)] = inst_46987);

(statearr_46998_47023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (3))){
var inst_46989 = (state_46991[(2)]);
var state_46991__$1 = state_46991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46991__$1,inst_46989);
} else {
if((state_val_46992 === (2))){
var inst_46961 = (state_46991[(10)]);
var inst_46963 = cljs.core.count.call(null,inst_46961);
var inst_46964 = (inst_46963 > (0));
var state_46991__$1 = state_46991;
if(cljs.core.truth_(inst_46964)){
var statearr_47000_47024 = state_46991__$1;
(statearr_47000_47024[(1)] = (4));

} else {
var statearr_47001_47025 = state_46991__$1;
(statearr_47001_47025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (11))){
var inst_46961 = (state_46991[(10)]);
var inst_46980 = (state_46991[(2)]);
var tmp46999 = inst_46961;
var inst_46961__$1 = tmp46999;
var state_46991__$1 = (function (){var statearr_47002 = state_46991;
(statearr_47002[(10)] = inst_46961__$1);

(statearr_47002[(11)] = inst_46980);

return statearr_47002;
})();
var statearr_47003_47026 = state_46991__$1;
(statearr_47003_47026[(2)] = null);

(statearr_47003_47026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (9))){
var inst_46971 = (state_46991[(7)]);
var state_46991__$1 = state_46991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46991__$1,(11),out,inst_46971);
} else {
if((state_val_46992 === (5))){
var inst_46985 = cljs.core.async.close_BANG_.call(null,out);
var state_46991__$1 = state_46991;
var statearr_47004_47027 = state_46991__$1;
(statearr_47004_47027[(2)] = inst_46985);

(statearr_47004_47027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (10))){
var inst_46983 = (state_46991[(2)]);
var state_46991__$1 = state_46991;
var statearr_47005_47028 = state_46991__$1;
(statearr_47005_47028[(2)] = inst_46983);

(statearr_47005_47028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (8))){
var inst_46971 = (state_46991[(7)]);
var inst_46961 = (state_46991[(10)]);
var inst_46970 = (state_46991[(8)]);
var inst_46972 = (state_46991[(9)]);
var inst_46975 = (function (){var cs = inst_46961;
var vec__46966 = inst_46970;
var v = inst_46971;
var c = inst_46972;
return ((function (cs,vec__46966,v,c,inst_46971,inst_46961,inst_46970,inst_46972,state_val_46992,c__44869__auto___47019,out){
return (function (p1__46956_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46956_SHARP_);
});
;})(cs,vec__46966,v,c,inst_46971,inst_46961,inst_46970,inst_46972,state_val_46992,c__44869__auto___47019,out))
})();
var inst_46976 = cljs.core.filterv.call(null,inst_46975,inst_46961);
var inst_46961__$1 = inst_46976;
var state_46991__$1 = (function (){var statearr_47006 = state_46991;
(statearr_47006[(10)] = inst_46961__$1);

return statearr_47006;
})();
var statearr_47007_47029 = state_46991__$1;
(statearr_47007_47029[(2)] = null);

(statearr_47007_47029[(1)] = (2));


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
});})(c__44869__auto___47019,out))
;
return ((function (switch__44757__auto__,c__44869__auto___47019,out){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_47011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47011[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_47011[(1)] = (1));

return statearr_47011;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_46991){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_46991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e47012){if((e47012 instanceof Object)){
var ex__44761__auto__ = e47012;
var statearr_47013_47030 = state_46991;
(statearr_47013_47030[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47031 = state_46991;
state_46991 = G__47031;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_46991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_46991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___47019,out))
})();
var state__44871__auto__ = (function (){var statearr_47014 = f__44870__auto__.call(null);
(statearr_47014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___47019);

return statearr_47014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___47019,out))
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
var args47032 = [];
var len__43068__auto___47081 = arguments.length;
var i__43069__auto___47082 = (0);
while(true){
if((i__43069__auto___47082 < len__43068__auto___47081)){
args47032.push((arguments[i__43069__auto___47082]));

var G__47083 = (i__43069__auto___47082 + (1));
i__43069__auto___47082 = G__47083;
continue;
} else {
}
break;
}

var G__47034 = args47032.length;
switch (G__47034) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47032.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44869__auto___47085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___47085,out){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___47085,out){
return (function (state_47058){
var state_val_47059 = (state_47058[(1)]);
if((state_val_47059 === (7))){
var inst_47040 = (state_47058[(7)]);
var inst_47040__$1 = (state_47058[(2)]);
var inst_47041 = (inst_47040__$1 == null);
var inst_47042 = cljs.core.not.call(null,inst_47041);
var state_47058__$1 = (function (){var statearr_47060 = state_47058;
(statearr_47060[(7)] = inst_47040__$1);

return statearr_47060;
})();
if(inst_47042){
var statearr_47061_47086 = state_47058__$1;
(statearr_47061_47086[(1)] = (8));

} else {
var statearr_47062_47087 = state_47058__$1;
(statearr_47062_47087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (1))){
var inst_47035 = (0);
var state_47058__$1 = (function (){var statearr_47063 = state_47058;
(statearr_47063[(8)] = inst_47035);

return statearr_47063;
})();
var statearr_47064_47088 = state_47058__$1;
(statearr_47064_47088[(2)] = null);

(statearr_47064_47088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (4))){
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47058__$1,(7),ch);
} else {
if((state_val_47059 === (6))){
var inst_47053 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
var statearr_47065_47089 = state_47058__$1;
(statearr_47065_47089[(2)] = inst_47053);

(statearr_47065_47089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (3))){
var inst_47055 = (state_47058[(2)]);
var inst_47056 = cljs.core.async.close_BANG_.call(null,out);
var state_47058__$1 = (function (){var statearr_47066 = state_47058;
(statearr_47066[(9)] = inst_47055);

return statearr_47066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47058__$1,inst_47056);
} else {
if((state_val_47059 === (2))){
var inst_47035 = (state_47058[(8)]);
var inst_47037 = (inst_47035 < n);
var state_47058__$1 = state_47058;
if(cljs.core.truth_(inst_47037)){
var statearr_47067_47090 = state_47058__$1;
(statearr_47067_47090[(1)] = (4));

} else {
var statearr_47068_47091 = state_47058__$1;
(statearr_47068_47091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (11))){
var inst_47035 = (state_47058[(8)]);
var inst_47045 = (state_47058[(2)]);
var inst_47046 = (inst_47035 + (1));
var inst_47035__$1 = inst_47046;
var state_47058__$1 = (function (){var statearr_47069 = state_47058;
(statearr_47069[(8)] = inst_47035__$1);

(statearr_47069[(10)] = inst_47045);

return statearr_47069;
})();
var statearr_47070_47092 = state_47058__$1;
(statearr_47070_47092[(2)] = null);

(statearr_47070_47092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (9))){
var state_47058__$1 = state_47058;
var statearr_47071_47093 = state_47058__$1;
(statearr_47071_47093[(2)] = null);

(statearr_47071_47093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (5))){
var state_47058__$1 = state_47058;
var statearr_47072_47094 = state_47058__$1;
(statearr_47072_47094[(2)] = null);

(statearr_47072_47094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (10))){
var inst_47050 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
var statearr_47073_47095 = state_47058__$1;
(statearr_47073_47095[(2)] = inst_47050);

(statearr_47073_47095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (8))){
var inst_47040 = (state_47058[(7)]);
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47058__$1,(11),out,inst_47040);
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
});})(c__44869__auto___47085,out))
;
return ((function (switch__44757__auto__,c__44869__auto___47085,out){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_47077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47077[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_47077[(1)] = (1));

return statearr_47077;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_47058){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_47058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e47078){if((e47078 instanceof Object)){
var ex__44761__auto__ = e47078;
var statearr_47079_47096 = state_47058;
(statearr_47079_47096[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47097 = state_47058;
state_47058 = G__47097;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_47058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_47058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___47085,out))
})();
var state__44871__auto__ = (function (){var statearr_47080 = f__44870__auto__.call(null);
(statearr_47080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___47085);

return statearr_47080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___47085,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47105 = (function (map_LT_,f,ch,meta47106){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47106 = meta47106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47107,meta47106__$1){
var self__ = this;
var _47107__$1 = this;
return (new cljs.core.async.t_cljs$core$async47105(self__.map_LT_,self__.f,self__.ch,meta47106__$1));
});

cljs.core.async.t_cljs$core$async47105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47107){
var self__ = this;
var _47107__$1 = this;
return self__.meta47106;
});

cljs.core.async.t_cljs$core$async47105.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47105.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47105.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47108 = (function (map_LT_,f,ch,meta47106,_,fn1,meta47109){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47106 = meta47106;
this._ = _;
this.fn1 = fn1;
this.meta47109 = meta47109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47110,meta47109__$1){
var self__ = this;
var _47110__$1 = this;
return (new cljs.core.async.t_cljs$core$async47108(self__.map_LT_,self__.f,self__.ch,self__.meta47106,self__._,self__.fn1,meta47109__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47110){
var self__ = this;
var _47110__$1 = this;
return self__.meta47109;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47108.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47108.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47098_SHARP_){
return f1.call(null,(((p1__47098_SHARP_ == null))?null:self__.f.call(null,p1__47098_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47108.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47106","meta47106",1921807341,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47105","cljs.core.async/t_cljs$core$async47105",-1221516908,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47109","meta47109",1910943228,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47108";

cljs.core.async.t_cljs$core$async47108.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async47108");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47108 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47108(map_LT___$1,f__$1,ch__$1,meta47106__$1,___$2,fn1__$1,meta47109){
return (new cljs.core.async.t_cljs$core$async47108(map_LT___$1,f__$1,ch__$1,meta47106__$1,___$2,fn1__$1,meta47109));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47108(self__.map_LT_,self__.f,self__.ch,self__.meta47106,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async47105.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47106","meta47106",1921807341,null)], null);
});

cljs.core.async.t_cljs$core$async47105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47105";

cljs.core.async.t_cljs$core$async47105.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async47105");
});

cljs.core.async.__GT_t_cljs$core$async47105 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47105(map_LT___$1,f__$1,ch__$1,meta47106){
return (new cljs.core.async.t_cljs$core$async47105(map_LT___$1,f__$1,ch__$1,meta47106));
});

}

return (new cljs.core.async.t_cljs$core$async47105(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47114 = (function (map_GT_,f,ch,meta47115){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta47115 = meta47115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47116,meta47115__$1){
var self__ = this;
var _47116__$1 = this;
return (new cljs.core.async.t_cljs$core$async47114(self__.map_GT_,self__.f,self__.ch,meta47115__$1));
});

cljs.core.async.t_cljs$core$async47114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47116){
var self__ = this;
var _47116__$1 = this;
return self__.meta47115;
});

cljs.core.async.t_cljs$core$async47114.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47114.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47114.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47115","meta47115",-957902649,null)], null);
});

cljs.core.async.t_cljs$core$async47114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47114";

cljs.core.async.t_cljs$core$async47114.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async47114");
});

cljs.core.async.__GT_t_cljs$core$async47114 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47114(map_GT___$1,f__$1,ch__$1,meta47115){
return (new cljs.core.async.t_cljs$core$async47114(map_GT___$1,f__$1,ch__$1,meta47115));
});

}

return (new cljs.core.async.t_cljs$core$async47114(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47120 = (function (filter_GT_,p,ch,meta47121){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta47121 = meta47121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47122,meta47121__$1){
var self__ = this;
var _47122__$1 = this;
return (new cljs.core.async.t_cljs$core$async47120(self__.filter_GT_,self__.p,self__.ch,meta47121__$1));
});

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47122){
var self__ = this;
var _47122__$1 = this;
return self__.meta47121;
});

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47121","meta47121",1875214580,null)], null);
});

cljs.core.async.t_cljs$core$async47120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47120";

cljs.core.async.t_cljs$core$async47120.cljs$lang$ctorPrWriter = (function (this__42599__auto__,writer__42600__auto__,opt__42601__auto__){
return cljs.core._write.call(null,writer__42600__auto__,"cljs.core.async/t_cljs$core$async47120");
});

cljs.core.async.__GT_t_cljs$core$async47120 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47120(filter_GT___$1,p__$1,ch__$1,meta47121){
return (new cljs.core.async.t_cljs$core$async47120(filter_GT___$1,p__$1,ch__$1,meta47121));
});

}

return (new cljs.core.async.t_cljs$core$async47120(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args47123 = [];
var len__43068__auto___47167 = arguments.length;
var i__43069__auto___47168 = (0);
while(true){
if((i__43069__auto___47168 < len__43068__auto___47167)){
args47123.push((arguments[i__43069__auto___47168]));

var G__47169 = (i__43069__auto___47168 + (1));
i__43069__auto___47168 = G__47169;
continue;
} else {
}
break;
}

var G__47125 = args47123.length;
switch (G__47125) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47123.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44869__auto___47171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___47171,out){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___47171,out){
return (function (state_47146){
var state_val_47147 = (state_47146[(1)]);
if((state_val_47147 === (7))){
var inst_47142 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
var statearr_47148_47172 = state_47146__$1;
(statearr_47148_47172[(2)] = inst_47142);

(statearr_47148_47172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (1))){
var state_47146__$1 = state_47146;
var statearr_47149_47173 = state_47146__$1;
(statearr_47149_47173[(2)] = null);

(statearr_47149_47173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (4))){
var inst_47128 = (state_47146[(7)]);
var inst_47128__$1 = (state_47146[(2)]);
var inst_47129 = (inst_47128__$1 == null);
var state_47146__$1 = (function (){var statearr_47150 = state_47146;
(statearr_47150[(7)] = inst_47128__$1);

return statearr_47150;
})();
if(cljs.core.truth_(inst_47129)){
var statearr_47151_47174 = state_47146__$1;
(statearr_47151_47174[(1)] = (5));

} else {
var statearr_47152_47175 = state_47146__$1;
(statearr_47152_47175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (6))){
var inst_47128 = (state_47146[(7)]);
var inst_47133 = p.call(null,inst_47128);
var state_47146__$1 = state_47146;
if(cljs.core.truth_(inst_47133)){
var statearr_47153_47176 = state_47146__$1;
(statearr_47153_47176[(1)] = (8));

} else {
var statearr_47154_47177 = state_47146__$1;
(statearr_47154_47177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (3))){
var inst_47144 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47146__$1,inst_47144);
} else {
if((state_val_47147 === (2))){
var state_47146__$1 = state_47146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47146__$1,(4),ch);
} else {
if((state_val_47147 === (11))){
var inst_47136 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
var statearr_47155_47178 = state_47146__$1;
(statearr_47155_47178[(2)] = inst_47136);

(statearr_47155_47178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (9))){
var state_47146__$1 = state_47146;
var statearr_47156_47179 = state_47146__$1;
(statearr_47156_47179[(2)] = null);

(statearr_47156_47179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (5))){
var inst_47131 = cljs.core.async.close_BANG_.call(null,out);
var state_47146__$1 = state_47146;
var statearr_47157_47180 = state_47146__$1;
(statearr_47157_47180[(2)] = inst_47131);

(statearr_47157_47180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (10))){
var inst_47139 = (state_47146[(2)]);
var state_47146__$1 = (function (){var statearr_47158 = state_47146;
(statearr_47158[(8)] = inst_47139);

return statearr_47158;
})();
var statearr_47159_47181 = state_47146__$1;
(statearr_47159_47181[(2)] = null);

(statearr_47159_47181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (8))){
var inst_47128 = (state_47146[(7)]);
var state_47146__$1 = state_47146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47146__$1,(11),out,inst_47128);
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
});})(c__44869__auto___47171,out))
;
return ((function (switch__44757__auto__,c__44869__auto___47171,out){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_47163 = [null,null,null,null,null,null,null,null,null];
(statearr_47163[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_47163[(1)] = (1));

return statearr_47163;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_47146){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_47146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e47164){if((e47164 instanceof Object)){
var ex__44761__auto__ = e47164;
var statearr_47165_47182 = state_47146;
(statearr_47165_47182[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47183 = state_47146;
state_47146 = G__47183;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_47146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_47146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___47171,out))
})();
var state__44871__auto__ = (function (){var statearr_47166 = f__44870__auto__.call(null);
(statearr_47166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___47171);

return statearr_47166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___47171,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args47184 = [];
var len__43068__auto___47187 = arguments.length;
var i__43069__auto___47188 = (0);
while(true){
if((i__43069__auto___47188 < len__43068__auto___47187)){
args47184.push((arguments[i__43069__auto___47188]));

var G__47189 = (i__43069__auto___47188 + (1));
i__43069__auto___47188 = G__47189;
continue;
} else {
}
break;
}

var G__47186 = args47184.length;
switch (G__47186) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47184.length)].join('')));

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
var c__44869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto__){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto__){
return (function (state_47356){
var state_val_47357 = (state_47356[(1)]);
if((state_val_47357 === (7))){
var inst_47352 = (state_47356[(2)]);
var state_47356__$1 = state_47356;
var statearr_47358_47399 = state_47356__$1;
(statearr_47358_47399[(2)] = inst_47352);

(statearr_47358_47399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (20))){
var inst_47322 = (state_47356[(7)]);
var inst_47333 = (state_47356[(2)]);
var inst_47334 = cljs.core.next.call(null,inst_47322);
var inst_47308 = inst_47334;
var inst_47309 = null;
var inst_47310 = (0);
var inst_47311 = (0);
var state_47356__$1 = (function (){var statearr_47359 = state_47356;
(statearr_47359[(8)] = inst_47333);

(statearr_47359[(9)] = inst_47310);

(statearr_47359[(10)] = inst_47311);

(statearr_47359[(11)] = inst_47309);

(statearr_47359[(12)] = inst_47308);

return statearr_47359;
})();
var statearr_47360_47400 = state_47356__$1;
(statearr_47360_47400[(2)] = null);

(statearr_47360_47400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (1))){
var state_47356__$1 = state_47356;
var statearr_47361_47401 = state_47356__$1;
(statearr_47361_47401[(2)] = null);

(statearr_47361_47401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (4))){
var inst_47297 = (state_47356[(13)]);
var inst_47297__$1 = (state_47356[(2)]);
var inst_47298 = (inst_47297__$1 == null);
var state_47356__$1 = (function (){var statearr_47362 = state_47356;
(statearr_47362[(13)] = inst_47297__$1);

return statearr_47362;
})();
if(cljs.core.truth_(inst_47298)){
var statearr_47363_47402 = state_47356__$1;
(statearr_47363_47402[(1)] = (5));

} else {
var statearr_47364_47403 = state_47356__$1;
(statearr_47364_47403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (15))){
var state_47356__$1 = state_47356;
var statearr_47368_47404 = state_47356__$1;
(statearr_47368_47404[(2)] = null);

(statearr_47368_47404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (21))){
var state_47356__$1 = state_47356;
var statearr_47369_47405 = state_47356__$1;
(statearr_47369_47405[(2)] = null);

(statearr_47369_47405[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (13))){
var inst_47310 = (state_47356[(9)]);
var inst_47311 = (state_47356[(10)]);
var inst_47309 = (state_47356[(11)]);
var inst_47308 = (state_47356[(12)]);
var inst_47318 = (state_47356[(2)]);
var inst_47319 = (inst_47311 + (1));
var tmp47365 = inst_47310;
var tmp47366 = inst_47309;
var tmp47367 = inst_47308;
var inst_47308__$1 = tmp47367;
var inst_47309__$1 = tmp47366;
var inst_47310__$1 = tmp47365;
var inst_47311__$1 = inst_47319;
var state_47356__$1 = (function (){var statearr_47370 = state_47356;
(statearr_47370[(9)] = inst_47310__$1);

(statearr_47370[(14)] = inst_47318);

(statearr_47370[(10)] = inst_47311__$1);

(statearr_47370[(11)] = inst_47309__$1);

(statearr_47370[(12)] = inst_47308__$1);

return statearr_47370;
})();
var statearr_47371_47406 = state_47356__$1;
(statearr_47371_47406[(2)] = null);

(statearr_47371_47406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (22))){
var state_47356__$1 = state_47356;
var statearr_47372_47407 = state_47356__$1;
(statearr_47372_47407[(2)] = null);

(statearr_47372_47407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (6))){
var inst_47297 = (state_47356[(13)]);
var inst_47306 = f.call(null,inst_47297);
var inst_47307 = cljs.core.seq.call(null,inst_47306);
var inst_47308 = inst_47307;
var inst_47309 = null;
var inst_47310 = (0);
var inst_47311 = (0);
var state_47356__$1 = (function (){var statearr_47373 = state_47356;
(statearr_47373[(9)] = inst_47310);

(statearr_47373[(10)] = inst_47311);

(statearr_47373[(11)] = inst_47309);

(statearr_47373[(12)] = inst_47308);

return statearr_47373;
})();
var statearr_47374_47408 = state_47356__$1;
(statearr_47374_47408[(2)] = null);

(statearr_47374_47408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (17))){
var inst_47322 = (state_47356[(7)]);
var inst_47326 = cljs.core.chunk_first.call(null,inst_47322);
var inst_47327 = cljs.core.chunk_rest.call(null,inst_47322);
var inst_47328 = cljs.core.count.call(null,inst_47326);
var inst_47308 = inst_47327;
var inst_47309 = inst_47326;
var inst_47310 = inst_47328;
var inst_47311 = (0);
var state_47356__$1 = (function (){var statearr_47375 = state_47356;
(statearr_47375[(9)] = inst_47310);

(statearr_47375[(10)] = inst_47311);

(statearr_47375[(11)] = inst_47309);

(statearr_47375[(12)] = inst_47308);

return statearr_47375;
})();
var statearr_47376_47409 = state_47356__$1;
(statearr_47376_47409[(2)] = null);

(statearr_47376_47409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (3))){
var inst_47354 = (state_47356[(2)]);
var state_47356__$1 = state_47356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47356__$1,inst_47354);
} else {
if((state_val_47357 === (12))){
var inst_47342 = (state_47356[(2)]);
var state_47356__$1 = state_47356;
var statearr_47377_47410 = state_47356__$1;
(statearr_47377_47410[(2)] = inst_47342);

(statearr_47377_47410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (2))){
var state_47356__$1 = state_47356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47356__$1,(4),in$);
} else {
if((state_val_47357 === (23))){
var inst_47350 = (state_47356[(2)]);
var state_47356__$1 = state_47356;
var statearr_47378_47411 = state_47356__$1;
(statearr_47378_47411[(2)] = inst_47350);

(statearr_47378_47411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (19))){
var inst_47337 = (state_47356[(2)]);
var state_47356__$1 = state_47356;
var statearr_47379_47412 = state_47356__$1;
(statearr_47379_47412[(2)] = inst_47337);

(statearr_47379_47412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (11))){
var inst_47308 = (state_47356[(12)]);
var inst_47322 = (state_47356[(7)]);
var inst_47322__$1 = cljs.core.seq.call(null,inst_47308);
var state_47356__$1 = (function (){var statearr_47380 = state_47356;
(statearr_47380[(7)] = inst_47322__$1);

return statearr_47380;
})();
if(inst_47322__$1){
var statearr_47381_47413 = state_47356__$1;
(statearr_47381_47413[(1)] = (14));

} else {
var statearr_47382_47414 = state_47356__$1;
(statearr_47382_47414[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (9))){
var inst_47344 = (state_47356[(2)]);
var inst_47345 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47356__$1 = (function (){var statearr_47383 = state_47356;
(statearr_47383[(15)] = inst_47344);

return statearr_47383;
})();
if(cljs.core.truth_(inst_47345)){
var statearr_47384_47415 = state_47356__$1;
(statearr_47384_47415[(1)] = (21));

} else {
var statearr_47385_47416 = state_47356__$1;
(statearr_47385_47416[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (5))){
var inst_47300 = cljs.core.async.close_BANG_.call(null,out);
var state_47356__$1 = state_47356;
var statearr_47386_47417 = state_47356__$1;
(statearr_47386_47417[(2)] = inst_47300);

(statearr_47386_47417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (14))){
var inst_47322 = (state_47356[(7)]);
var inst_47324 = cljs.core.chunked_seq_QMARK_.call(null,inst_47322);
var state_47356__$1 = state_47356;
if(inst_47324){
var statearr_47387_47418 = state_47356__$1;
(statearr_47387_47418[(1)] = (17));

} else {
var statearr_47388_47419 = state_47356__$1;
(statearr_47388_47419[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (16))){
var inst_47340 = (state_47356[(2)]);
var state_47356__$1 = state_47356;
var statearr_47389_47420 = state_47356__$1;
(statearr_47389_47420[(2)] = inst_47340);

(statearr_47389_47420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (10))){
var inst_47311 = (state_47356[(10)]);
var inst_47309 = (state_47356[(11)]);
var inst_47316 = cljs.core._nth.call(null,inst_47309,inst_47311);
var state_47356__$1 = state_47356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47356__$1,(13),out,inst_47316);
} else {
if((state_val_47357 === (18))){
var inst_47322 = (state_47356[(7)]);
var inst_47331 = cljs.core.first.call(null,inst_47322);
var state_47356__$1 = state_47356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47356__$1,(20),out,inst_47331);
} else {
if((state_val_47357 === (8))){
var inst_47310 = (state_47356[(9)]);
var inst_47311 = (state_47356[(10)]);
var inst_47313 = (inst_47311 < inst_47310);
var inst_47314 = inst_47313;
var state_47356__$1 = state_47356;
if(cljs.core.truth_(inst_47314)){
var statearr_47390_47421 = state_47356__$1;
(statearr_47390_47421[(1)] = (10));

} else {
var statearr_47391_47422 = state_47356__$1;
(statearr_47391_47422[(1)] = (11));

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
});})(c__44869__auto__))
;
return ((function (switch__44757__auto__,c__44869__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44758__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44758__auto____0 = (function (){
var statearr_47395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47395[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44758__auto__);

(statearr_47395[(1)] = (1));

return statearr_47395;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44758__auto____1 = (function (state_47356){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_47356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e47396){if((e47396 instanceof Object)){
var ex__44761__auto__ = e47396;
var statearr_47397_47423 = state_47356;
(statearr_47397_47423[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47424 = state_47356;
state_47356 = G__47424;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44758__auto__ = function(state_47356){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44758__auto____1.call(this,state_47356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44758__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44758__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto__))
})();
var state__44871__auto__ = (function (){var statearr_47398 = f__44870__auto__.call(null);
(statearr_47398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto__);

return statearr_47398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto__))
);

return c__44869__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args47425 = [];
var len__43068__auto___47428 = arguments.length;
var i__43069__auto___47429 = (0);
while(true){
if((i__43069__auto___47429 < len__43068__auto___47428)){
args47425.push((arguments[i__43069__auto___47429]));

var G__47430 = (i__43069__auto___47429 + (1));
i__43069__auto___47429 = G__47430;
continue;
} else {
}
break;
}

var G__47427 = args47425.length;
switch (G__47427) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47425.length)].join('')));

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
var args47432 = [];
var len__43068__auto___47435 = arguments.length;
var i__43069__auto___47436 = (0);
while(true){
if((i__43069__auto___47436 < len__43068__auto___47435)){
args47432.push((arguments[i__43069__auto___47436]));

var G__47437 = (i__43069__auto___47436 + (1));
i__43069__auto___47436 = G__47437;
continue;
} else {
}
break;
}

var G__47434 = args47432.length;
switch (G__47434) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47432.length)].join('')));

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
var args47439 = [];
var len__43068__auto___47490 = arguments.length;
var i__43069__auto___47491 = (0);
while(true){
if((i__43069__auto___47491 < len__43068__auto___47490)){
args47439.push((arguments[i__43069__auto___47491]));

var G__47492 = (i__43069__auto___47491 + (1));
i__43069__auto___47491 = G__47492;
continue;
} else {
}
break;
}

var G__47441 = args47439.length;
switch (G__47441) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47439.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44869__auto___47494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___47494,out){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___47494,out){
return (function (state_47465){
var state_val_47466 = (state_47465[(1)]);
if((state_val_47466 === (7))){
var inst_47460 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
var statearr_47467_47495 = state_47465__$1;
(statearr_47467_47495[(2)] = inst_47460);

(statearr_47467_47495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (1))){
var inst_47442 = null;
var state_47465__$1 = (function (){var statearr_47468 = state_47465;
(statearr_47468[(7)] = inst_47442);

return statearr_47468;
})();
var statearr_47469_47496 = state_47465__$1;
(statearr_47469_47496[(2)] = null);

(statearr_47469_47496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (4))){
var inst_47445 = (state_47465[(8)]);
var inst_47445__$1 = (state_47465[(2)]);
var inst_47446 = (inst_47445__$1 == null);
var inst_47447 = cljs.core.not.call(null,inst_47446);
var state_47465__$1 = (function (){var statearr_47470 = state_47465;
(statearr_47470[(8)] = inst_47445__$1);

return statearr_47470;
})();
if(inst_47447){
var statearr_47471_47497 = state_47465__$1;
(statearr_47471_47497[(1)] = (5));

} else {
var statearr_47472_47498 = state_47465__$1;
(statearr_47472_47498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (6))){
var state_47465__$1 = state_47465;
var statearr_47473_47499 = state_47465__$1;
(statearr_47473_47499[(2)] = null);

(statearr_47473_47499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (3))){
var inst_47462 = (state_47465[(2)]);
var inst_47463 = cljs.core.async.close_BANG_.call(null,out);
var state_47465__$1 = (function (){var statearr_47474 = state_47465;
(statearr_47474[(9)] = inst_47462);

return statearr_47474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47465__$1,inst_47463);
} else {
if((state_val_47466 === (2))){
var state_47465__$1 = state_47465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47465__$1,(4),ch);
} else {
if((state_val_47466 === (11))){
var inst_47445 = (state_47465[(8)]);
var inst_47454 = (state_47465[(2)]);
var inst_47442 = inst_47445;
var state_47465__$1 = (function (){var statearr_47475 = state_47465;
(statearr_47475[(10)] = inst_47454);

(statearr_47475[(7)] = inst_47442);

return statearr_47475;
})();
var statearr_47476_47500 = state_47465__$1;
(statearr_47476_47500[(2)] = null);

(statearr_47476_47500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (9))){
var inst_47445 = (state_47465[(8)]);
var state_47465__$1 = state_47465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47465__$1,(11),out,inst_47445);
} else {
if((state_val_47466 === (5))){
var inst_47445 = (state_47465[(8)]);
var inst_47442 = (state_47465[(7)]);
var inst_47449 = cljs.core._EQ_.call(null,inst_47445,inst_47442);
var state_47465__$1 = state_47465;
if(inst_47449){
var statearr_47478_47501 = state_47465__$1;
(statearr_47478_47501[(1)] = (8));

} else {
var statearr_47479_47502 = state_47465__$1;
(statearr_47479_47502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (10))){
var inst_47457 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
var statearr_47480_47503 = state_47465__$1;
(statearr_47480_47503[(2)] = inst_47457);

(statearr_47480_47503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (8))){
var inst_47442 = (state_47465[(7)]);
var tmp47477 = inst_47442;
var inst_47442__$1 = tmp47477;
var state_47465__$1 = (function (){var statearr_47481 = state_47465;
(statearr_47481[(7)] = inst_47442__$1);

return statearr_47481;
})();
var statearr_47482_47504 = state_47465__$1;
(statearr_47482_47504[(2)] = null);

(statearr_47482_47504[(1)] = (2));


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
});})(c__44869__auto___47494,out))
;
return ((function (switch__44757__auto__,c__44869__auto___47494,out){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_47486 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47486[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_47486[(1)] = (1));

return statearr_47486;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_47465){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_47465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e47487){if((e47487 instanceof Object)){
var ex__44761__auto__ = e47487;
var statearr_47488_47505 = state_47465;
(statearr_47488_47505[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47506 = state_47465;
state_47465 = G__47506;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_47465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_47465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___47494,out))
})();
var state__44871__auto__ = (function (){var statearr_47489 = f__44870__auto__.call(null);
(statearr_47489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___47494);

return statearr_47489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___47494,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args47507 = [];
var len__43068__auto___47577 = arguments.length;
var i__43069__auto___47578 = (0);
while(true){
if((i__43069__auto___47578 < len__43068__auto___47577)){
args47507.push((arguments[i__43069__auto___47578]));

var G__47579 = (i__43069__auto___47578 + (1));
i__43069__auto___47578 = G__47579;
continue;
} else {
}
break;
}

var G__47509 = args47507.length;
switch (G__47509) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47507.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44869__auto___47581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___47581,out){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___47581,out){
return (function (state_47547){
var state_val_47548 = (state_47547[(1)]);
if((state_val_47548 === (7))){
var inst_47543 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
var statearr_47549_47582 = state_47547__$1;
(statearr_47549_47582[(2)] = inst_47543);

(statearr_47549_47582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (1))){
var inst_47510 = (new Array(n));
var inst_47511 = inst_47510;
var inst_47512 = (0);
var state_47547__$1 = (function (){var statearr_47550 = state_47547;
(statearr_47550[(7)] = inst_47512);

(statearr_47550[(8)] = inst_47511);

return statearr_47550;
})();
var statearr_47551_47583 = state_47547__$1;
(statearr_47551_47583[(2)] = null);

(statearr_47551_47583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (4))){
var inst_47515 = (state_47547[(9)]);
var inst_47515__$1 = (state_47547[(2)]);
var inst_47516 = (inst_47515__$1 == null);
var inst_47517 = cljs.core.not.call(null,inst_47516);
var state_47547__$1 = (function (){var statearr_47552 = state_47547;
(statearr_47552[(9)] = inst_47515__$1);

return statearr_47552;
})();
if(inst_47517){
var statearr_47553_47584 = state_47547__$1;
(statearr_47553_47584[(1)] = (5));

} else {
var statearr_47554_47585 = state_47547__$1;
(statearr_47554_47585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (15))){
var inst_47537 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
var statearr_47555_47586 = state_47547__$1;
(statearr_47555_47586[(2)] = inst_47537);

(statearr_47555_47586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (13))){
var state_47547__$1 = state_47547;
var statearr_47556_47587 = state_47547__$1;
(statearr_47556_47587[(2)] = null);

(statearr_47556_47587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (6))){
var inst_47512 = (state_47547[(7)]);
var inst_47533 = (inst_47512 > (0));
var state_47547__$1 = state_47547;
if(cljs.core.truth_(inst_47533)){
var statearr_47557_47588 = state_47547__$1;
(statearr_47557_47588[(1)] = (12));

} else {
var statearr_47558_47589 = state_47547__$1;
(statearr_47558_47589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (3))){
var inst_47545 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47547__$1,inst_47545);
} else {
if((state_val_47548 === (12))){
var inst_47511 = (state_47547[(8)]);
var inst_47535 = cljs.core.vec.call(null,inst_47511);
var state_47547__$1 = state_47547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47547__$1,(15),out,inst_47535);
} else {
if((state_val_47548 === (2))){
var state_47547__$1 = state_47547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47547__$1,(4),ch);
} else {
if((state_val_47548 === (11))){
var inst_47527 = (state_47547[(2)]);
var inst_47528 = (new Array(n));
var inst_47511 = inst_47528;
var inst_47512 = (0);
var state_47547__$1 = (function (){var statearr_47559 = state_47547;
(statearr_47559[(7)] = inst_47512);

(statearr_47559[(10)] = inst_47527);

(statearr_47559[(8)] = inst_47511);

return statearr_47559;
})();
var statearr_47560_47590 = state_47547__$1;
(statearr_47560_47590[(2)] = null);

(statearr_47560_47590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (9))){
var inst_47511 = (state_47547[(8)]);
var inst_47525 = cljs.core.vec.call(null,inst_47511);
var state_47547__$1 = state_47547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47547__$1,(11),out,inst_47525);
} else {
if((state_val_47548 === (5))){
var inst_47515 = (state_47547[(9)]);
var inst_47512 = (state_47547[(7)]);
var inst_47520 = (state_47547[(11)]);
var inst_47511 = (state_47547[(8)]);
var inst_47519 = (inst_47511[inst_47512] = inst_47515);
var inst_47520__$1 = (inst_47512 + (1));
var inst_47521 = (inst_47520__$1 < n);
var state_47547__$1 = (function (){var statearr_47561 = state_47547;
(statearr_47561[(12)] = inst_47519);

(statearr_47561[(11)] = inst_47520__$1);

return statearr_47561;
})();
if(cljs.core.truth_(inst_47521)){
var statearr_47562_47591 = state_47547__$1;
(statearr_47562_47591[(1)] = (8));

} else {
var statearr_47563_47592 = state_47547__$1;
(statearr_47563_47592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (14))){
var inst_47540 = (state_47547[(2)]);
var inst_47541 = cljs.core.async.close_BANG_.call(null,out);
var state_47547__$1 = (function (){var statearr_47565 = state_47547;
(statearr_47565[(13)] = inst_47540);

return statearr_47565;
})();
var statearr_47566_47593 = state_47547__$1;
(statearr_47566_47593[(2)] = inst_47541);

(statearr_47566_47593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (10))){
var inst_47531 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
var statearr_47567_47594 = state_47547__$1;
(statearr_47567_47594[(2)] = inst_47531);

(statearr_47567_47594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (8))){
var inst_47520 = (state_47547[(11)]);
var inst_47511 = (state_47547[(8)]);
var tmp47564 = inst_47511;
var inst_47511__$1 = tmp47564;
var inst_47512 = inst_47520;
var state_47547__$1 = (function (){var statearr_47568 = state_47547;
(statearr_47568[(7)] = inst_47512);

(statearr_47568[(8)] = inst_47511__$1);

return statearr_47568;
})();
var statearr_47569_47595 = state_47547__$1;
(statearr_47569_47595[(2)] = null);

(statearr_47569_47595[(1)] = (2));


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
});})(c__44869__auto___47581,out))
;
return ((function (switch__44757__auto__,c__44869__auto___47581,out){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_47573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47573[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_47573[(1)] = (1));

return statearr_47573;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_47547){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_47547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e47574){if((e47574 instanceof Object)){
var ex__44761__auto__ = e47574;
var statearr_47575_47596 = state_47547;
(statearr_47575_47596[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47597 = state_47547;
state_47547 = G__47597;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_47547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_47547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___47581,out))
})();
var state__44871__auto__ = (function (){var statearr_47576 = f__44870__auto__.call(null);
(statearr_47576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___47581);

return statearr_47576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___47581,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47598 = [];
var len__43068__auto___47672 = arguments.length;
var i__43069__auto___47673 = (0);
while(true){
if((i__43069__auto___47673 < len__43068__auto___47672)){
args47598.push((arguments[i__43069__auto___47673]));

var G__47674 = (i__43069__auto___47673 + (1));
i__43069__auto___47673 = G__47674;
continue;
} else {
}
break;
}

var G__47600 = args47598.length;
switch (G__47600) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47598.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44869__auto___47676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44869__auto___47676,out){
return (function (){
var f__44870__auto__ = (function (){var switch__44757__auto__ = ((function (c__44869__auto___47676,out){
return (function (state_47642){
var state_val_47643 = (state_47642[(1)]);
if((state_val_47643 === (7))){
var inst_47638 = (state_47642[(2)]);
var state_47642__$1 = state_47642;
var statearr_47644_47677 = state_47642__$1;
(statearr_47644_47677[(2)] = inst_47638);

(statearr_47644_47677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (1))){
var inst_47601 = [];
var inst_47602 = inst_47601;
var inst_47603 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47642__$1 = (function (){var statearr_47645 = state_47642;
(statearr_47645[(7)] = inst_47602);

(statearr_47645[(8)] = inst_47603);

return statearr_47645;
})();
var statearr_47646_47678 = state_47642__$1;
(statearr_47646_47678[(2)] = null);

(statearr_47646_47678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (4))){
var inst_47606 = (state_47642[(9)]);
var inst_47606__$1 = (state_47642[(2)]);
var inst_47607 = (inst_47606__$1 == null);
var inst_47608 = cljs.core.not.call(null,inst_47607);
var state_47642__$1 = (function (){var statearr_47647 = state_47642;
(statearr_47647[(9)] = inst_47606__$1);

return statearr_47647;
})();
if(inst_47608){
var statearr_47648_47679 = state_47642__$1;
(statearr_47648_47679[(1)] = (5));

} else {
var statearr_47649_47680 = state_47642__$1;
(statearr_47649_47680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (15))){
var inst_47632 = (state_47642[(2)]);
var state_47642__$1 = state_47642;
var statearr_47650_47681 = state_47642__$1;
(statearr_47650_47681[(2)] = inst_47632);

(statearr_47650_47681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (13))){
var state_47642__$1 = state_47642;
var statearr_47651_47682 = state_47642__$1;
(statearr_47651_47682[(2)] = null);

(statearr_47651_47682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (6))){
var inst_47602 = (state_47642[(7)]);
var inst_47627 = inst_47602.length;
var inst_47628 = (inst_47627 > (0));
var state_47642__$1 = state_47642;
if(cljs.core.truth_(inst_47628)){
var statearr_47652_47683 = state_47642__$1;
(statearr_47652_47683[(1)] = (12));

} else {
var statearr_47653_47684 = state_47642__$1;
(statearr_47653_47684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (3))){
var inst_47640 = (state_47642[(2)]);
var state_47642__$1 = state_47642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47642__$1,inst_47640);
} else {
if((state_val_47643 === (12))){
var inst_47602 = (state_47642[(7)]);
var inst_47630 = cljs.core.vec.call(null,inst_47602);
var state_47642__$1 = state_47642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47642__$1,(15),out,inst_47630);
} else {
if((state_val_47643 === (2))){
var state_47642__$1 = state_47642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47642__$1,(4),ch);
} else {
if((state_val_47643 === (11))){
var inst_47606 = (state_47642[(9)]);
var inst_47610 = (state_47642[(10)]);
var inst_47620 = (state_47642[(2)]);
var inst_47621 = [];
var inst_47622 = inst_47621.push(inst_47606);
var inst_47602 = inst_47621;
var inst_47603 = inst_47610;
var state_47642__$1 = (function (){var statearr_47654 = state_47642;
(statearr_47654[(7)] = inst_47602);

(statearr_47654[(11)] = inst_47620);

(statearr_47654[(12)] = inst_47622);

(statearr_47654[(8)] = inst_47603);

return statearr_47654;
})();
var statearr_47655_47685 = state_47642__$1;
(statearr_47655_47685[(2)] = null);

(statearr_47655_47685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (9))){
var inst_47602 = (state_47642[(7)]);
var inst_47618 = cljs.core.vec.call(null,inst_47602);
var state_47642__$1 = state_47642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47642__$1,(11),out,inst_47618);
} else {
if((state_val_47643 === (5))){
var inst_47606 = (state_47642[(9)]);
var inst_47610 = (state_47642[(10)]);
var inst_47603 = (state_47642[(8)]);
var inst_47610__$1 = f.call(null,inst_47606);
var inst_47611 = cljs.core._EQ_.call(null,inst_47610__$1,inst_47603);
var inst_47612 = cljs.core.keyword_identical_QMARK_.call(null,inst_47603,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47613 = (inst_47611) || (inst_47612);
var state_47642__$1 = (function (){var statearr_47656 = state_47642;
(statearr_47656[(10)] = inst_47610__$1);

return statearr_47656;
})();
if(cljs.core.truth_(inst_47613)){
var statearr_47657_47686 = state_47642__$1;
(statearr_47657_47686[(1)] = (8));

} else {
var statearr_47658_47687 = state_47642__$1;
(statearr_47658_47687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (14))){
var inst_47635 = (state_47642[(2)]);
var inst_47636 = cljs.core.async.close_BANG_.call(null,out);
var state_47642__$1 = (function (){var statearr_47660 = state_47642;
(statearr_47660[(13)] = inst_47635);

return statearr_47660;
})();
var statearr_47661_47688 = state_47642__$1;
(statearr_47661_47688[(2)] = inst_47636);

(statearr_47661_47688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (10))){
var inst_47625 = (state_47642[(2)]);
var state_47642__$1 = state_47642;
var statearr_47662_47689 = state_47642__$1;
(statearr_47662_47689[(2)] = inst_47625);

(statearr_47662_47689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (8))){
var inst_47606 = (state_47642[(9)]);
var inst_47602 = (state_47642[(7)]);
var inst_47610 = (state_47642[(10)]);
var inst_47615 = inst_47602.push(inst_47606);
var tmp47659 = inst_47602;
var inst_47602__$1 = tmp47659;
var inst_47603 = inst_47610;
var state_47642__$1 = (function (){var statearr_47663 = state_47642;
(statearr_47663[(7)] = inst_47602__$1);

(statearr_47663[(8)] = inst_47603);

(statearr_47663[(14)] = inst_47615);

return statearr_47663;
})();
var statearr_47664_47690 = state_47642__$1;
(statearr_47664_47690[(2)] = null);

(statearr_47664_47690[(1)] = (2));


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
});})(c__44869__auto___47676,out))
;
return ((function (switch__44757__auto__,c__44869__auto___47676,out){
return (function() {
var cljs$core$async$state_machine__44758__auto__ = null;
var cljs$core$async$state_machine__44758__auto____0 = (function (){
var statearr_47668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47668[(0)] = cljs$core$async$state_machine__44758__auto__);

(statearr_47668[(1)] = (1));

return statearr_47668;
});
var cljs$core$async$state_machine__44758__auto____1 = (function (state_47642){
while(true){
var ret_value__44759__auto__ = (function (){try{while(true){
var result__44760__auto__ = switch__44757__auto__.call(null,state_47642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44760__auto__;
}
break;
}
}catch (e47669){if((e47669 instanceof Object)){
var ex__44761__auto__ = e47669;
var statearr_47670_47691 = state_47642;
(statearr_47670_47691[(5)] = ex__44761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47692 = state_47642;
state_47642 = G__47692;
continue;
} else {
return ret_value__44759__auto__;
}
break;
}
});
cljs$core$async$state_machine__44758__auto__ = function(state_47642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44758__auto____1.call(this,state_47642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44758__auto____0;
cljs$core$async$state_machine__44758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44758__auto____1;
return cljs$core$async$state_machine__44758__auto__;
})()
;})(switch__44757__auto__,c__44869__auto___47676,out))
})();
var state__44871__auto__ = (function (){var statearr_47671 = f__44870__auto__.call(null);
(statearr_47671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44869__auto___47676);

return statearr_47671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44871__auto__);
});})(c__44869__auto___47676,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504122776901