// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51783){
var map__51808 = p__51783;
var map__51808__$1 = ((((!((map__51808 == null)))?((((map__51808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51808):map__51808);
var m = map__51808__$1;
var n = cljs.core.get.call(null,map__51808__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51810_51832 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51811_51833 = null;
var count__51812_51834 = (0);
var i__51813_51835 = (0);
while(true){
if((i__51813_51835 < count__51812_51834)){
var f_51836 = cljs.core._nth.call(null,chunk__51811_51833,i__51813_51835);
cljs.core.println.call(null,"  ",f_51836);

var G__51837 = seq__51810_51832;
var G__51838 = chunk__51811_51833;
var G__51839 = count__51812_51834;
var G__51840 = (i__51813_51835 + (1));
seq__51810_51832 = G__51837;
chunk__51811_51833 = G__51838;
count__51812_51834 = G__51839;
i__51813_51835 = G__51840;
continue;
} else {
var temp__4657__auto___51841 = cljs.core.seq.call(null,seq__51810_51832);
if(temp__4657__auto___51841){
var seq__51810_51842__$1 = temp__4657__auto___51841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51810_51842__$1)){
var c__42804__auto___51843 = cljs.core.chunk_first.call(null,seq__51810_51842__$1);
var G__51844 = cljs.core.chunk_rest.call(null,seq__51810_51842__$1);
var G__51845 = c__42804__auto___51843;
var G__51846 = cljs.core.count.call(null,c__42804__auto___51843);
var G__51847 = (0);
seq__51810_51832 = G__51844;
chunk__51811_51833 = G__51845;
count__51812_51834 = G__51846;
i__51813_51835 = G__51847;
continue;
} else {
var f_51848 = cljs.core.first.call(null,seq__51810_51842__$1);
cljs.core.println.call(null,"  ",f_51848);

var G__51849 = cljs.core.next.call(null,seq__51810_51842__$1);
var G__51850 = null;
var G__51851 = (0);
var G__51852 = (0);
seq__51810_51832 = G__51849;
chunk__51811_51833 = G__51850;
count__51812_51834 = G__51851;
i__51813_51835 = G__51852;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51853 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41993__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51853);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51853)))?cljs.core.second.call(null,arglists_51853):arglists_51853));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51814_51854 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51815_51855 = null;
var count__51816_51856 = (0);
var i__51817_51857 = (0);
while(true){
if((i__51817_51857 < count__51816_51856)){
var vec__51818_51858 = cljs.core._nth.call(null,chunk__51815_51855,i__51817_51857);
var name_51859 = cljs.core.nth.call(null,vec__51818_51858,(0),null);
var map__51821_51860 = cljs.core.nth.call(null,vec__51818_51858,(1),null);
var map__51821_51861__$1 = ((((!((map__51821_51860 == null)))?((((map__51821_51860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51821_51860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51821_51860):map__51821_51860);
var doc_51862 = cljs.core.get.call(null,map__51821_51861__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51863 = cljs.core.get.call(null,map__51821_51861__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51859);

cljs.core.println.call(null," ",arglists_51863);

if(cljs.core.truth_(doc_51862)){
cljs.core.println.call(null," ",doc_51862);
} else {
}

var G__51864 = seq__51814_51854;
var G__51865 = chunk__51815_51855;
var G__51866 = count__51816_51856;
var G__51867 = (i__51817_51857 + (1));
seq__51814_51854 = G__51864;
chunk__51815_51855 = G__51865;
count__51816_51856 = G__51866;
i__51817_51857 = G__51867;
continue;
} else {
var temp__4657__auto___51868 = cljs.core.seq.call(null,seq__51814_51854);
if(temp__4657__auto___51868){
var seq__51814_51869__$1 = temp__4657__auto___51868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51814_51869__$1)){
var c__42804__auto___51870 = cljs.core.chunk_first.call(null,seq__51814_51869__$1);
var G__51871 = cljs.core.chunk_rest.call(null,seq__51814_51869__$1);
var G__51872 = c__42804__auto___51870;
var G__51873 = cljs.core.count.call(null,c__42804__auto___51870);
var G__51874 = (0);
seq__51814_51854 = G__51871;
chunk__51815_51855 = G__51872;
count__51816_51856 = G__51873;
i__51817_51857 = G__51874;
continue;
} else {
var vec__51823_51875 = cljs.core.first.call(null,seq__51814_51869__$1);
var name_51876 = cljs.core.nth.call(null,vec__51823_51875,(0),null);
var map__51826_51877 = cljs.core.nth.call(null,vec__51823_51875,(1),null);
var map__51826_51878__$1 = ((((!((map__51826_51877 == null)))?((((map__51826_51877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51826_51877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51826_51877):map__51826_51877);
var doc_51879 = cljs.core.get.call(null,map__51826_51878__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51880 = cljs.core.get.call(null,map__51826_51878__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51876);

cljs.core.println.call(null," ",arglists_51880);

if(cljs.core.truth_(doc_51879)){
cljs.core.println.call(null," ",doc_51879);
} else {
}

var G__51881 = cljs.core.next.call(null,seq__51814_51869__$1);
var G__51882 = null;
var G__51883 = (0);
var G__51884 = (0);
seq__51814_51854 = G__51881;
chunk__51815_51855 = G__51882;
count__51816_51856 = G__51883;
i__51817_51857 = G__51884;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__51828 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51829 = null;
var count__51830 = (0);
var i__51831 = (0);
while(true){
if((i__51831 < count__51830)){
var role = cljs.core._nth.call(null,chunk__51829,i__51831);
var temp__4657__auto___51885__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51885__$1)){
var spec_51886 = temp__4657__auto___51885__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_51886));
} else {
}

var G__51887 = seq__51828;
var G__51888 = chunk__51829;
var G__51889 = count__51830;
var G__51890 = (i__51831 + (1));
seq__51828 = G__51887;
chunk__51829 = G__51888;
count__51830 = G__51889;
i__51831 = G__51890;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__51828);
if(temp__4657__auto____$1){
var seq__51828__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51828__$1)){
var c__42804__auto__ = cljs.core.chunk_first.call(null,seq__51828__$1);
var G__51891 = cljs.core.chunk_rest.call(null,seq__51828__$1);
var G__51892 = c__42804__auto__;
var G__51893 = cljs.core.count.call(null,c__42804__auto__);
var G__51894 = (0);
seq__51828 = G__51891;
chunk__51829 = G__51892;
count__51830 = G__51893;
i__51831 = G__51894;
continue;
} else {
var role = cljs.core.first.call(null,seq__51828__$1);
var temp__4657__auto___51895__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51895__$2)){
var spec_51896 = temp__4657__auto___51895__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_51896));
} else {
}

var G__51897 = cljs.core.next.call(null,seq__51828__$1);
var G__51898 = null;
var G__51899 = (0);
var G__51900 = (0);
seq__51828 = G__51897;
chunk__51829 = G__51898;
count__51830 = G__51899;
i__51831 = G__51900;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1504724088017