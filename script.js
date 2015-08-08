console.log("Don't Remove Poke is working!");
//For normal page load
handler();
//For javascript page load (from notification)
new MutationObserver(handler).observe($('.fb_content.clearfix').get(0) ,{childList:true});

function handler(mutations){
  var poke_live_new = $('#poke_live_new').get(0);
  if(typeof poke_live_new!="undefined"){
    $('._50z-').addClass("hidden_elem");
    new MutationObserver(function(mutations){
        $('._50z-').addClass("hidden_elem");
    }).observe(poke_live_new ,{childList:true,subtree:true});
  }
}

