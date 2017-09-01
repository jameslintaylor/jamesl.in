// Compiled by ClojureScript 1.9.229 {}
goog.provide('tictactoe.components');
goog.require('cljs.core');
goog.require('reagent.core');
tictactoe.components.jlt_toggle_style = (function tictactoe$components$jlt_toggle_style(base_color){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["solid","100px","pointer","1px","0 66px 16px 0","none",base_color,"2px","30px","5px"]);
});
tictactoe.components.jlt_toggle_style_on = (function tictactoe$components$jlt_toggle_style_on(base_color){
return cljs.core.merge.call(null,tictactoe.components.jlt_toggle_style.call(null,base_color),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),base_color], null));
});
tictactoe.components.jlt_toggle_style_off = (function tictactoe$components$jlt_toggle_style_off(base_color){
return cljs.core.merge.call(null,tictactoe.components.jlt_toggle_style.call(null,base_color),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),base_color,new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent"], null));
});
tictactoe.components.jlt_toggle = (function tictactoe$components$jlt_toggle(title,color,is_on,on_toggle){
var is_on__$1 = reagent.core.atom.call(null,is_on);
var style_on = tictactoe.components.jlt_toggle_style_on.call(null,color);
var style_off = tictactoe.components.jlt_toggle_style_off.call(null,color);
cljs.core.add_watch.call(null,is_on__$1,new cljs.core.Keyword(null,"toggled","toggled",1679391819),((function (is_on__$1,style_on,style_off){
return (function (key,watched,old,new$){
return on_toggle.call(null,new$);
});})(is_on__$1,style_on,style_off))
);

return ((function (is_on__$1,style_on,style_off){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref.call(null,is_on__$1))?style_on:style_off),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_on__$1,style_on,style_off){
return (function (){
return cljs.core.swap_BANG_.call(null,is_on__$1,cljs.core.not);
});})(is_on__$1,style_on,style_off))
], null)], null);
});
;})(is_on__$1,style_on,style_off))
});
tictactoe.components.jlt_post_header_style = (function tictactoe$components$jlt_post_header_style(base_color){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),base_color,new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null);
});
tictactoe.components.jlt_post_header = (function tictactoe$components$jlt_post_header(title,color){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tictactoe.components.jlt_post_header_style.call(null,color)], null),title], null);
});
});

//# sourceMappingURL=components.js.map?rel=1504122774640