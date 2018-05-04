# Scromation
A simple jQuery plugin for animate things on screen when scrolling.

When activated, the plugin will add on the selected elements the class of the frame according to the scroll position.

## Documentation

### Simple usage

Just call the scromation() function on any jQuery element.

__Example__

    $('.animation').scromation();

### Options

The plugin currently accepts three options

* total_frames (Integer) - Number of frames in the animation (default: 24)
* smoothness (Integer) - If higher, the animation will be slower (default: 40)
* frame_class_base (String) - The prefix of the class name of the animation (default: frame)

__Example 1__

    $('.animation').scromation({
			total_frames: 12,
			smoothness: 100,
			frame_class_base: 'my_animation',
		});


__Example 2 (the animation will run backwards)__

    $('.animation').scromation({
      smoothness: -50,
		});

You can also set the options on the HTML using data atributtes

__Example__

    <div class="animation my_animation_1" data-total_frames="12" data-smoothness="100" data-frame_class_base="my_animation"></div>
