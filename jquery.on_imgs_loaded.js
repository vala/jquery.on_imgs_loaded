(function( $ ){

  $.fn.onImgsLoaded = function(cb) {
  	
		var images_len = this.length,
				images_loaded = 0;
		
		if(!$.isFunction(cb))
			return this;
		
		return this.each(function() {
			var $this = $(this);
			
			// Si l'élément actuel n'est pas 
			if(typeof this.src === 'undefined')
				return;
				
			image = new Image();
			$(image)
				.load(function() {
					if(++images_loaded == images_len)
						cb();
				});
			image.src = $(this).attr('src');	
		});				
  };
})( jQuery );