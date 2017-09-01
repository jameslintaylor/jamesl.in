// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51798){
var map__51823 = p__51798;
var map__51823__$1 = ((((!((map__51823 == null)))?((((map__51823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51823):map__51823);
var m = map__51823__$1;
var n = cljs.core.get.call(null,map__51823__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__51825_51847 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51826_51848 = null;
var count__51827_51849 = (0);
var i__51828_51850 = (0);
while(true){
if((i__51828_51850 < count__51827_51849)){
var f_51851 = cljs.core._nth.call(null,chunk__51826_51848,i__51828_51850);
cljs.core.println.call(null,"  ",f_51851);

var G__51852 = seq__51825_51847;
var G__51853 = chunk__51826_51848;
var G__51854 = count__51827_51849;
var G__51855 = (i__51828_51850 + (1));
seq__51825_51847 = G__51852;
chunk__51826_51848 = G__51853;
count__51827_51849 = G__51854;
i__51828_51850 = G__51855;
continue;
} else {
var temp__4657__auto___51856 = cljs.core.seq.call(null,seq__51825_51847);
if(temp__4657__auto___51856){
var seq__51825_51857__$1 = temp__4657__auto___51856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51825_51857__$1)){
var c__42804__auto___51858 = cljs.core.chunk_first.call(null,seq__51825_51857__$1);
var G__51859 = cljs.core.chunk_rest.call(null,seq__51825_51857__$1);
var G__51860 = c__42804__auto___51858;
var G__51861 = cljs.core.count.call(null,c__42804__auto___51858);
var G__51862 = (0);
seq__51825_51847 = G__51859;
chunk__51826_51848 = G__51860;
count__51827_51849 = G__51861;
i__51828_51850 = G__51862;
continue;
} else {
var f_51863 = cljs.core.first.call(null,seq__51825_51857__$1);
cljs.core.println.call(null,"  ",f_51863);

var G__51864 = cljs.core.next.call(null,seq__51825_51857__$1);
var G__51865 = null;
var G__51866 = (0);
var G__51867 = (0);
seq__51825_51847 = G__51864;
chunk__51826_51848 = G__51865;
count__51827_51849 = G__51866;
i__51828_51850 = G__51867;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51868 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41993__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41993__auto__)){
return or__41993__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51868);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51868)))?cljs.core.second.call(null,arglists_51868):arglists_51868));
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
var seq__51829_51869 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51830_51870 = null;
var count__51831_51871 = (0);
var i__51832_51872 = (0);
while(true){
if((i__51832_51872 < count__51831_51871)){
var vec__51833_51873 = cljs.core._nth.call(null,chunk__51830_51870,i__51832_51872);
var name_51874 = cljs.core.nth.call(null,vec__51833_51873,(0),null);
var map__51836_51875 = cljs.core.nth.call(null,vec__51833_51873,(1),null);
var map__51836_51876__$1 = ((((!((map__51836_51875 == null)))?((((map__51836_51875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51836_51875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51836_51875):map__51836_51875);
var doc_51877 = cljs.core.get.call(null,map__51836_51876__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51878 = cljs.core.get.call(null,map__51836_51876__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51874);

cljs.core.println.call(null," ",arglists_51878);

if(cljs.core.truth_(doc_51877)){
cljs.core.println.call(null," ",doc_51877);
} else {
}

var G__51879 = seq__51829_51869;
var G__51880 = chunk__51830_51870;
var G__51881 = count__51831_51871;
var G__51882 = (i__51832_51872 + (1));
seq__51829_51869 = G__51879;
chunk__51830_51870 = G__51880;
count__51831_51871 = G__51881;
i__51832_51872 = G__51882;
continue;
} else {
var temp__4657__auto___51883 = cljs.core.seq.call(null,seq__51829_51869);
if(temp__4657__auto___51883){
var seq__51829_51884__$1 = temp__4657__auto___51883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51829_51884__$1)){
var c__42804__auto___51885 = cljs.core.chunk_first.call(null,seq__51829_51884__$1);
var G__51886 = cljs.core.chunk_rest.call(null,seq__51829_51884__$1);
var G__51887 = c__42804__auto___51885;
var G__51888 = cljs.core.count.call(null,c__42804__auto___51885);
var G__51889 = (0);
seq__51829_51869 = G__51886;
chunk__51830_51870 = G__51887;
count__51831_51871 = G__51888;
i__51832_51872 = G__51889;
continue;
} else {
var vec__51838_51890 = cljs.core.first.call(null,seq__51829_51884__$1);
var name_51891 = cljs.core.nth.call(null,vec__51838_51890,(0),null);
var map__51841_51892 = cljs.core.nth.call(null,vec__51838_51890,(1),null);
var map__51841_51893__$1 = ((((!((map__51841_51892 == null)))?((((map__51841_51892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51841_51892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51841_51892):map__51841_51892);
var doc_51894 = cljs.core.get.call(null,map__51841_51893__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51895 = cljs.core.get.call(null,map__51841_51893__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51891);

cljs.core.println.call(null," ",arglists_51895);

if(cljs.core.truth_(doc_51894)){
cljs.core.println.call(null," ",doc_51894);
} else {
}

var G__51896 = cljs.core.next.call(null,seq__51829_51884__$1);
var G__51897 = null;
var G__51898 = (0);
var G__51899 = (0);
seq__51829_51869 = G__51896;
chunk__51830_51870 = G__51897;
count__51831_51871 = G__51898;
i__51832_51872 = G__51899;
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

var seq__51843 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51844 = null;
var count__51845 = (0);
var i__51846 = (0);
while(true){
if((i__51846 < count__51845)){
var role = cljs.core._nth.call(null,chunk__51844,i__51846);
var temp__4657__auto___51900__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51900__$1)){
var spec_51901 = temp__4657__auto___51900__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_51901));
} else {
}

var G__51902 = seq__51843;
var G__51903 = chunk__51844;
var G__51904 = count__51845;
var G__51905 = (i__51846 + (1));
seq__51843 = G__51902;
chunk__51844 = G__51903;
count__51845 = G__51904;
i__51846 = G__51905;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__51843);
if(temp__4657__auto____$1){
var seq__51843__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51843__$1)){
var c__42804__auto__ = cljs.core.chunk_first.call(null,seq__51843__$1);
var G__51906 = cljs.core.chunk_rest.call(null,seq__51843__$1);
var G__51907 = c__42804__auto__;
var G__51908 = cljs.core.count.call(null,c__42804__auto__);
var G__51909 = (0);
seq__51843 = G__51906;
chunk__51844 = G__51907;
count__51845 = G__51908;
i__51846 = G__51909;
continue;
} else {
var role = cljs.core.first.call(null,seq__51843__$1);
var temp__4657__auto___51910__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51910__$2)){
var spec_51911 = temp__4657__auto___51910__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_51911));
} else {
}

var G__51912 = cljs.core.next.call(null,seq__51843__$1);
var G__51913 = null;
var G__51914 = (0);
var G__51915 = (0);
seq__51843 = G__51912;
chunk__51844 = G__51913;
count__51845 = G__51914;
i__51846 = G__51915;
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

//# sourceMappingURL=repl.js.map?rel=1504122781713