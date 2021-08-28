# Vanilla5 v6.1

_Copyright Christopher Bishop 2011-2019._

## What is Vanilla5?

Vanilla5 is a HTML5 based foundation to kick start the majority of your projects. Perfectly set up to be HTML5 and mobile ready (responsive design). Uses SCSS, but you are not forced to use it.

### Features:

* Basic HTML5 template with a header, page contents, and a footer
* Basic CSS or SCSS file set up with CSS reset, mixins, variables, includes (where applicable), and responsive stylesheets.
* Print stylesheet included
* Links to the latest jQuery (local and CDN)
* Folders setup for you
* iOS touch icon and Windows Tile included and setup
* PSD included based on the 960grid.
* Set up for Google Analytics
* Can be based on PugJS


You may use this template free of charge with no link backs whatsoever. You may NOT sell this, only give it away to others. If you do give it away, you must credit me by leaving this README with the files unchanged as well as the HTML comments.

If you create a webpage using this template, let me know by sending me a message from www.cibgraphics.com/contact

# How to use

To use just download the latest copy and extract the files to where your site will be. Thats it.

Everything else depends on your work flow.

#### What is not done
Magic. Seriously, this is a foundation, not a framework. You still have to style your site. I do not assume styles like other (much bloated) frameworks.

# Tips and Tricks

There are a lot of things that Vanilla5 does for you automatically, a lot you have to do yourself. Here are a couple helpers that I have included.

## Using Grunt

Grunt is a JavaScript task runner build upon Node.js. This is super helpful for doing things like processing LESS/SCSS, minifying, image optimization, etc. If you are unfamiliar with how to use Grunt visit http://gruntjs.com/getting-started.

The files included are the basics. You still need to know how to install the Grunt CLI and Grunt plugins.

## Using PugJS

PugJS is a template engine influenced by Haml. It is built upon JavaScript for Node.js. If you have yet to use it, please try it out. It is awesome.

The concept is you have pug files in the `app` folder along with your SCSS files and using Grunt (or something else of your choosing) to compile out the files to the `build` folder and running your project from there.

You can install PugJS through NPM with:

```
$ npm install pug
```

or by using the GruntJS version with

```
$ npm install grunt-contrib-pug --save-dev
```

To find out more information on Pug and how to use it visit https://pugjs.org/api/getting-started.html

## Using Vanilla5 without Pug

I realize that PugJS might not be for everyone. So you can use Vanilla5 without PugJS by using the raw HTML file found in the `build` folder. If you still want to use SCSS/LESS just grab those from the `app` folder.

---

## Clearing a Float

Included in Vanilla5 is a progressive way to clear floats. All it uses is a single class name of clear-fix on the element or container that is floated.


```html
<div class="clear-fix">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

It should be noted however that there are better ways to create layouts than using floats such as Flexbox, and CSS Grid. It is preferred that you use those instead.

___

## CSS Custom Properties

Vanilla5 is already set up with some cool CSS custom properties (aka CSS variables). You can find these in  css -> scss -> includes -> variables.scss

Make sure you edit these instead of taking out their references. They can be really useful.
___

## Automatic REM conversion SCSS

You can change px into rems automatically using included LESS or SCSS mixins.

__ALERT: You have to have the font-size variable set in order for this to work!!__ You can find it in your variables file.

### Syntax:

**For SCSS:**

```css
@include rem-size($value, $property);
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

## Media Queries

Media queries have been redone. They are now based off a SCSS Map. The way you call it however has been simplified.

**For SCSS:**

```css
@include mq('tablet') {

}
```
Compiles to:
```css
@media only screen and (min-width: 769px) {

}
```

If you would like to use max-width instead, just pass it through as a second argument.

**For SCSS:**

```css
@include mq('tablet', 'max') {

}
```
Compiles to:
```css
@media only screen and (max-width: 768px) {

}
```

Please note that the breakpoint value has automatically raised by 1px. You you would like to change this or the default min/max, feel free to update it to your preference. It can be found in _variables.scss

---

## Google Analytics

Included in Vanilla5 is the code for Google Analytics. Visit their webpage and create a tracking code.

Inserting them into Vanilla5 is super easy. Open the google-analytics.js file located in js -> lib folder.

All you need to do is edit the two JavaScript variables with your information.

```javascript
var trackingID = '',
    URL        = '';
```

# ChangeLog:

#### Version 6.1:

* NEW! Converts SCSS variables to CSS custom properties. This has no IE support. If you need IE support please use SCSS variables
* NEW! Adds Grixlex grid system (https://gridlex.devlint.fr/)
* Removed HTML5 Shiv. This shouldn't be needed anymore.
* Updates jQuery to 3.6.0
* all lists will not have styled removed. Use class `list-unstyled` for that now.
* Table cell width classes have hyphen in it to make it cleaner and easier to read.
* Adds classes for margin and padding in each direction based on 4px increments.
* Base CSS colors for general purposes
* Breakpoint mixin is now mobile first
* Removes style sheets for just media queries
* Some Pug mixins use loops to be faster

#### Version 5.0:

* Removes LESS (use SCSS instead)
* Moves form basics to general.scss
* Removes mixins prefixes (use autoprefixer)
* Updates jQuery to 3.4.1
* Restructure to variables.scss
* New media query system (uses maps) and new names for breakpoints
* Adds spacing variables