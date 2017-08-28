# Vanilla5 v3.0

_Copyright Christopher Bishop 2011-2017._

## What is Vanilla5?

Vanilla5 is a HTML5 based foundation to kickstart the majority of your projects. Perfectly set up to be HTML5 and mobile ready (responsive design). Also uses LESS and SCSS, but you are not forced to use them.

### Features:

* Basic HTML5 template with a header, page contents, and a footer
* Basic CSS, LESS, or SCSS file set up with CSS reset, mixins, variables, includes (where applicable), and responsive stylesheets.
* Print stylesheet included
* Links to the latest jQuery (local and CDN)
* Folders setup for images, includes, and creative
* iOS touch icon and Windows Tile included and setup
* PSD included based on the 960grid.
* Javascript and CSS to fix HTML5 support for IE
* Set up for Google Analytics


You may use this template free of charge with no link backs whatsoever. You may NOT sell this, only give it away to others. If you do give it away, you must credit me by leaving this README with the files unchanged as well as the HTML comments.

If you create a webpage using this template, let me know by sending me a message from www.cibgraphics.com/contact

# How to use

To use just download the latest copy and extract the files to where your site will be. Thats it.

Everything else depends on your workflow.

#### What is not done
Magic. Seriously, this is a foundation, not a framework. You still have to style your site. I do not assume styles like other (much bloated) frameworks.

# Tips and Tricks

There are a lot of things that Vanilla5 does for you automatically, a lot you have to do yourself. Here are a couple helpers that I have included.

## Using Grunt

Grunt is a Javascript task runner build upon Node.js. This is super helpful for doing things like processing LESS/SCSS, minifying, image optimization, ect. If you are unfamiliar with how to use Grunt visit http://gruntjs.com/getting-started.

The files included are the basics. You still need to know how to install the Grunt CLI and Grunt plugins.

---

## Clearing a Float

Included in Vanilla5 is a progressive way to clear floats. All it uses is a single class name of clear-fix on the element or container that is floated.


```html
<div class="clear-fix">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

___

## LESS or SCSS Variables

Vanilla5 is already set up with some cool variables. You can find these in the css -> less -> includes -> variables.less or css -> scss -> includes -> variables.scss

Make sure you edit these instead of taking out their references. They can be really useful.
___

## Automatic REM conversion using LESS or SCSS

You can change px into rems automatically using included LESS or SCSS mixins.

__ALERT: You have to have the font-size variable set in order for this to work!!__ You can find it in your variables file.

### Syntax:

**For SCSS:**

```css
@include rem-size($value, $property);
```
**For LESS:**

```css
rem-size(@value, @property);
```

<table>
  <tr>
    <th>Argument</th>
    <th>Required</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>Value</td><td>Required</td><td>None</td>
  </tr>
  <tr>
    <td>Property</td><td>Optional</td><td>'font-size'</td>
  </tr>
</table>

### Usage

**For SCSS:**

```css
p {
  @include rem-size(20px);
}
```
**For LESS:**

```css
p {
  .rem-size(20px);
}
```
Compiles to:
```css
p {
  font-size: 20px;
  font-size: 2rem; // this value depends on what you have set as your font-size base
}
```

### Controlling Property

By default this mixin will output to font-size. If you need to use another property instead of font-size you can pass a 2nd argument with the desired property to the mixin.



---

## Google Analytics

Included in Vanilla5 is the code for Google Analytics. Visit their webpage and create a tracking code.

Inserting them into Vanilla5 is super easy. Open the google-analytics.js file located in js -> lib folder.

All you need to do is edit the two javascript variables with your information.

```javascript
var trackingID = '',
    URL        = '';
```

# ChangeLog:

#### Version 3.0:

* Moved Javascript, CSS, Fonts and Images to assets folder
* Updated jQuery to version 3.2.1
* Improved typography and form styles
* Added variables for responsive styles
* Added Sketch file to Creative files
* updated new path for ieconfig/index for source files
* New way to test for if jquery is from CDN or not


#### Version 2.4.4:

* Adds rem-size mixin to default paragraphs
* Fixes misspelling on layout CSS that was causing errors

#### Version 2.4.3:

* Changes default font size for paragraphs to be controls by variable
* Updated copyright date

#### Version 2.4.2:

* Updates jQuery to version 3.1.1
* Better base layout css
* Variables set in columns for better reading
* Layout in general css changed to layout in SCSS/LESS

#### Version 2.4.1:

* Updates jQuery to version 3.1.0

#### Version 2.4:

* Updates jQuery to current version
* Adds missing SCSS mixins
* Added 100% max width to images by default
* Adds Adobe Illustrator Mockup starter
* Fixed some errors in README

#### Version 2.3.3:

* Updates jQuery to current version
* SCSS partial file name convention

#### Version 2.3.2:

* Gave defaults to some LESS mixins as to not cause errors when being used

#### Version 2.3.1:

* Updated where the font-size is declared for proper calculation of REM Sizing function in LESS and SCSS

#### Version 2.3:

* Complete restructure of LESS and SCSS to make it more module
* Took out Table of Contents
* Inclusion of Grunt files
* Updated the size for Apple Touch icon
* Updated assets for Windows tiles
* Adds ieconfig.xml for multiple tile assets for Windows
* Moves app icons into their own folder in the images directory
* Changed media query to 1224px instead of 1382
* Updated jQuery to latest version

#### Version 2.2:

* Changes starter position for quick gradient LESS mixin
* Fixes syntax for quick gradient LESS mixin

#### Version 2.1:

* Fixes LESS gradient mixin

#### Version 2.0:

* Reached Version 2!!!!!
* Now supports SCSS!
* Updated LESS mixins to included relavant vender prefixes
* Orginizational improvements
* Updated jQuery to latest version and moved to lib folder
* Deleted reference to jQueryUI (if you still want this you need to include it yourself)
* Updated Google Analyics code and moved to it's own file
* Moved responsive LESS/SCSS files to their own files
* Cleaned up clear fix code
* Renamed custom.js to app.js
* New assets for iOS icon and Windows Tile
* Adds LESS/SCSS mixin for calculating REM sizes
* Updated Readme with additional information


#### Version 1.7.1:

* New Photoshop mockup file

#### Version 1.7:

* Moved LESS file into CSS folder for better organization
* box-sizing mixing and applied to everything
* Improvements to class names
* Improvements to selectors
* Change layout position in style sheet
* Improved Windows 8 tile support
* iOS icon is now precomposed
* iOS icon is now 144px x 144px
* Additional helpful mixins
* Variables for type and font size

#### Version 1.6.1:

* Added white quick gradient mixin
* Fixed inner shadow mixin

#### Version 1.6:

* Fixed incorrect order of border radius mixin argument
* Fixed naming conflict in mixins
* Fixed incorrect calculation for IE6-7 opacity mixin
* Restored clear-fix classes that was erroneously deleted
* Added gradient mixin that supports a third stop
* Updated jQueryUI to latest version

#### Version 1.5.7:

* Updates to LESS Mixins
* Default transition time is slower
* Input placeholder styles moved under form styles to prevent overwriting

#### Version 1.5.6:

* Updates jQuery and jQueryUI to latest version
* Gets rid of not used javascript

#### Version 1.5.5:

* Windows 8 Tile tags (meta) with Vanilla5 assets
* Deleted duplicate clearfix
* Deleted admin and flash folder. These are not usual to a standard workflow
* Reformatted form section and included popular input types
* Input placeholder styles
* Classes for responsive stacking (add a class and it will stack any column for tablet or mobile)

#### Version 1.5:

* Table of Contents
* Better CSS organization
* Changed base HTML
* Clearing can be done with CSS class, or LESS mixin
* Print styles have default sans serif font
* Comments that are LESS related will not show in compiled CSS
* Layout and Pages CSS/LESS Sections
* block-content class style (for groups of content)
* Moved font smoothing fix to LESS mixin (was causing issues with rendering)
* Additional HTML comments for closing sections
* Updated jQuery and jQueryUI to latest versions

#### Version 1.4:

* Added new mixins
* Separated Normalize CSS and Mixins into their own files

#### Version 1.3:

* Updated jQueryUI to 1.9.1
* Set up for adaptive font sizes
* CSS fix for font smoothing when page element gets transformed
* Adds different method for clearing (non elemental)
* Fixes anchor focus rendering

#### Version 1.2:

* Updated both jQuery and jQueryUI
* Added styles for easy table cell width

#### Version 1.1:

* Inclusion of LESS Sheet

#### Version 1.0:

* We have Reached Version 1!!!!!
* Corrected placement of JS
* Mobile Enhancements

#### Version 0.9.6:

* Updated CDN & Local JS
* CSS additions
* Mobile First media queries

#### Version 0.9.5:

* Updated CDN
* JS Fallback if CDN not available
* CSS fixes

#### Version 0.9:

* New Name!!
* Template for Wordpress
* Added reset for print
* HTML and CSS for responsive web design

#### Version 0.8:

* Updated CDN links to newest version
* Deleted CSS3 helpers
* Better base CSS
* CSS for Tables

#### Version 0.7.5:

* Updated CDN links to newest version
* General CSS additions

#### Version 0.7:

* Updated CDN links to newest version
* Added support for Chrome Frame
* Better element id’s
* Link for iOS icon

#### Version 0.6:

* Better CSS reset
* Added CSS3 background selection

#### Version 0.5:

* Link for favicon
* Comments for main closing tags
* Updated CDN links to newest version

#### Version 0.4:

* CSS file for print
* CSS3 helpers on HTML5 kit
* Added hgroup tag section

#### Version 0.3:

* Official launch to public
