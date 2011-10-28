(function( $ ){

  $.fn.onImgsLoaded = function(cb) {
  	
		var images_len = this.length,
				images_loaded = 0,
				images = this,
				cb_args = Array.prototype.slice.call(arguments, 1);
		
		// If cb is no function, then return
		if(!$.isFunction(cb))
			return this;
		
		return this.each(function() {			
			image = new Image();
			$(image)
				.load(function() {
					if(++images_loaded == images_len)
						cb.call(images, cb_args);
				});
			image.src = this.src;	
		});				
  };
})( jQuery );