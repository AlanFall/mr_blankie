Hello from Mr.Blankie!
Mr.Blankie is a blank wordpress project created by Alan Fall for fast wordpress development.

## Requirements:

1. [Node.js](https://nodejs.org/)
2. [Gulp.js](http://gulpjs.com/)

## Installation

Just put mr_blankie folder in the themes folder and run "npm install".

```shell
npm install
```

to install all gulp plugins.

## Features

Most of the features are in gulp. This theme has almost no styling. You only have `clearfix` defined and `_reset.scss` from Eric Mayer as a partial and some empty scss partials.

### Gulp features

* Image optimization
* Sass compilation
* Auto prefixing
* Source maps for css file
* Uglifying and concatinating all js files
* LiveReload

All of these features are run when starting `gulp watch` except for image optimization, you have to run that task separatley.

### Some mixins and functions

You have several mixins and functions in the `_mixins.scss` file along with comments on how to use them. These mixins and functions include:

* Automatic calculation of percentages from pixels
* Automatic calculations of rems from pixels 
* Easy to use Media Queries in your normal css flow

Open an issue for any problems that you encounter. 