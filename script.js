console.log("Don't Remove Poke is working!");
$('._50-0._50z-').css("visibility","hidden");
var observer = new MutationObserver(function(mutations){
    $('._50-0._50z-').css("visibility","hidden");
}).observe($('#poke_live_new').get(0) ,{childList:true,subtree:true});
