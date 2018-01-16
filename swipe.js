	document.addEventListener('touchstart',handleTouchStart, false);        
	document.addEventListener('touchmove', handleTouchMove, false);
                                                    
	var yDown = null;                                                        

	function handleTouchStart(evt) {
	  if(evt.touches.length == 3){
		yDown = evt.touches[0].clientY;   	  	  
	  } 	                                  
	};                                                

	function handleTouchMove(evt) {
		if ( ! xDown || ! yDown || evt.touches.length != 3) {
			return;
		}

		var yUp = evt.touches[0].clientY;
		var yDiff = yDown - yUp;

		console.log(yDiff);
		map.setPitch(map.getPitch() + yDiff/100);            
	};
