/*!
 * jQuery plugin replaceSpriteForPrinting
 * Original author: http://www.github.com/wellnessfx, http://www.github.com/mogox
 * Further changes, comments: http://github.com/mogox/
 * Licensed under the MIT license
 */

/**
 * Plugin that replaces background sprites images
 * with the <img> tags as background for printing.
 */
;(function($){
  $.fn.replaceSpriteForPrinting = function() {
    return this.each(function() {
      var $this = $(this);

      if ($.browser.msie === true) {
        var back_x = $this.css('background-position-x'),
            back_y = $this.css('background-position-y'),
            back_position = back_x+" "+back_y;
      } else {
        var back_position = $this.css('background-position');
      }

      var back_image = $this.css('background-image'),
        width = $this.width(),
        height = $this.height(),
        urlEnd = back_image.indexOf(')');
      var urlStart = back_image.indexOf('(');
      urlStart = urlStart >=0 ? urlStart : 0;

      // Removing the quotation from the url (" or ') due browser
      // compatibility issues.
      // TODO: Replace with a REGEX for background urls
      if(back_image[urlStart+1] === "\"" || back_image[urlStart+1] === "'"){
        urlStart++;
      }
      if(back_image[urlEnd-1] === "\"" || back_image[urlEnd-1] === "'"){
        urlEnd--;
      }
      back_image = back_image.substring(urlStart+1, (urlEnd));

      back_position = back_position.split(" ");

      $this.append('<img src="'+back_image+'" class="replaceSpriteForPrinting">')
        .css('width',width)
        .css('height',height)
        .css('overflow','hidden');

      $this.find('img')
        .css('margin-left',back_position[0])
        .css('margin-top',back_position[1]);
    });
  };

})( jQuery );
