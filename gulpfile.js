var gulp = require('gulp'),
uglify = require('gulp-uglifyjs'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
sass = require('gulp-sass'),
livereload = require('gulp-livereload');

// Set Folders
var 
	images = "./images/*",
	lib = "./js/lib/*.js",
	js = "./js/*.js",
	sassDir = "./sass/**/*.scss";



gulp.task('compressimg', function() {
	console.log('Lets Compress some Images!');
	gulp.src(images)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('images'));
});


gulp.task('uglifyjs', function() {
	console.log('Lets Minify Some Javascript!');
	gulp.src(lib)
		.pipe(uglify('scripts.min.js'))
    	.pipe(gulp.dest('./js'));
});

gulp.task('sass', function() {
	gulp.src(sassDir)
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(js,['uglifyjs']);
	gulp.watch(sassDir,['sass']);
	gulp.watch(['style.css', '*.php', js, 'parts/**/*.php'], function (files){
		livereload.changed(files);
	});
});

gulp.task('default', ['uglifyjs', 'compressimg', 'watch']);