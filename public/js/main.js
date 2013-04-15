//javascript goes here
var scrollHeight  = 0
  , deltaToChange = 2000
  , timeoutSet    = false

  , resetTimeout = function() {
  	console.log("reset");
  	scrollHeight = 0;
  	clearTimeout(resetTimeout);
  	timeoutSet = false;
  };

$(window).on("mousewheel", function(e){
	scrollHeight += e.originalEvent.wheelDelta;
	console.log(scrollHeight);

	if (!timeoutSet) {
		timeoutSet = true;
		setTimeout(resetTimeout,5000);
	};
	if (scrollHeight >= deltaToChange) {
		console.log("scroll up");
		$('.at-bat').animate({'left':'+100%'},500);
		$('.on-deck').animate({'left':'+100%'},500);
		resetTimeout();
	};
	if (scrollHeight <= -deltaToChange) {
		console.log("scroll down");
		$('.at-bat').animate({'right':'+100%'},500);
		$('.on-deck').animate({'left':'+100%'},500);
		resetTimeout();
	};
});