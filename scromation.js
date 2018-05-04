/*
 * Scrollmation jQuery Plugin v1.0.0
 *
 * Author: Walter Darcie Neto
 * https://github.com/walterdarcie/scromation
 * Licensed under the MIT license
 */
;(function ( $, window ) {
  'use strict';
  $.scromation = function(el, options) {
    var base = this;

    // Access to jQuery and DOM versions of element
    base.$el = $(el);
    base.el = el;

    // Cached objects
    base.$win = $(window);

    // Set default options
    base.options = $.extend({}, $.scromation.defaultOptions, options, base.$el.data());

    // Scroll handler
    base.scrollHandler = function() {
      // Previous frame
      base.options.prev_frame_num = base.options.frame_num;

      // Get the page scroll position (with smothness)
      base.options.scroll = Math.trunc( this.scrollY / base.options.smoothness );

      if (base.options.scroll > base.options.prev_scroll) {
        // Animate forward

        if (base.options.frame_num < base.options.total_frames) {
          base.options.frame_num++;
        } else {
          base.options.frame_num = 1;
        }

      } else if (base.options.scroll < base.options.prev_scroll) {
        // Animate backward

        if (base.options.frame_num > 1) {
          base.options.frame_num--;
        } else {
          base.options.frame_num = base.options.total_frames;
        }

      }

      // Remove previous frame
      base.$el.removeClass( base.options.frame_class_base + '_' + base.options.prev_frame_num );
      // Add next frame
      base.$el.addClass( base.options.frame_class_base + '_' + base.options.frame_num );

      // Refresh the previous scroll
      base.options.prev_scroll = base.options.scroll;
    }

    // On scroll and ready listener
    base.$win.on('scroll ready', base.scrollHandler);
  };

  $.scromation.defaultOptions = {
    total_frames: 24,
    smoothness: 40,
    frame_num: 1,
    prev_frame_num: 1,
    scroll: 0,
    prev_scroll: 0,
    frame_class_base: 'frame',
  };

  $.fn.scromation = function (options) {
    this.each(function () {
      (new $.scromation(this, options));
    });
  };

}( jQuery, window ));
