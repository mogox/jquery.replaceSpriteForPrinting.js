ReplaceSpriteForPrinting
=========================

A jQuery plugin that that replaces background sprites images
with the <img> tags as background for printing.

Features
--------

* Given a selector replaces all the css sprite images using
the <img> tag.


Dependencies
------------

The plugin requires jQuery v1.4.2 (or higher).


Usage
-----

To replace the default background image, invoke `.replaceSpriteForPrinting`.
To might want to call this funcion in a JS method before executing:
`window.print();`

 - **replaceSpriteImg**
   - $('.selector').replaceSpriteForPrinting();

 - **removing generated images**
   - $('.replaceSpriteForPrinting').remove();
   The images created have the class 'replaceSpriteForPrinting'

You may change the global defaults by modifying the `$.fn.activity.defaults` object.

Links
-----

* Author:  [Mogox](http://github.com/mogox)
* Company: [WellnessFX](http://github.com/wellnessfx)
* License: [MIT](http://www.opensource.org/licenses/mit-license.html)

Please use the [GitHub issue tracker]{http://github.com/mogox/jquery.replaceSpriteForPrinting/issues} for bug
reports and feature requests.