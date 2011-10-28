# jQuery onImgsLoaded

This is a tiny plugin that's just a simple solution to the "Damnit the images where in cache" or "Why doesn't Chrome knows the size of my image ?" issue

## What it does

It ensures all images are loaded before executing the function you pass it as a callback.
Works when images are yet in cache.

## Usage

```javascript
$('#container img')
	.onImgsLoaded(function() {
		// Here `this` is the DOM elements array containing the images from the '#container img' selector
		$(this)
			.each(function() {
				// ...
			});
	});
```

## Function arguments

If you're not passing it an anonymous function, you can pass arguments directly after the callbacks function name

```javascript
var callback = function(arg1, arg2) { 
	// Use those args
}

$('#container img')
	.onImgsLoaded(callback, argA, argB);
```

## More

There's no more, I told you it was simple ...

Any enhancement will be merged if there's something to enhance, just fork'it