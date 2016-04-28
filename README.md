#MR.BLANKIE!
Hello from Mr.Blankie!
Mr.Blankie is a blank wordpress project created by Alan Fall for fast wordpress development.

## Requirements:

1. [Node.js](https://nodejs.org/)
2. [Gulp.js](http://gulpjs.com/)

## Installation

Just put mr_blankie folder in the themes folder and run "npm install" to install all gulp plugins.

```shell
npm install
```

## Structure

All CSS files are processed using using SASS.

- _fonts.scss
- _footer.scss
- _globals.scss
- _headers.scss
- _homepage.scss
- _mixins.scss
- _reset.scss
- _sidebar.scss
- _variables.scss
- _responsive.scss
- style.scss

All styles are imported in style.scss then to style.css which gets minimized.


### Gulp features

* Image optimization
* Sass compilation
* Auto prefixing
* Source maps for css file
* Uglifying and concatinating all js files
* LiveReload

All of these features are run when starting `gulp`

### Some mixins and functions

You have several mixins and functions in the `_mixins.scss` file along with comments on how to use them. These mixins and functions include:

* Automatic calculation of percentages from pixels
* Automatic calculations of rems from pixels 
* Easy to use Media Queries in your normal css flow

changemore