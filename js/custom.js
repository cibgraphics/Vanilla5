$(document).ready(function() {
  
  /* Mobile touch events not binded to click but 'touchend'
   Usage:
   $('selector').on(TouchEndEvent, function(){
      Code here
     })
  */
  var hasTouch = "ontouchend" in document,
      touchEndEvent = "touchend";
      
  if(!hasTouch) {
    touchEndEvent = "mouseUp";
  }
  
	// Put all your jQuery goodness here
	
});