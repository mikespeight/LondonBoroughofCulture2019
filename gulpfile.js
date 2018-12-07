/**
 * Created by Mike Speight on 05/02/2018.
 */

// Gulp plugins
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	prefix = require('gulp-autoprefixer');


var config = {
	sassPath: './sass',
	bowerDir: './assets/components',
	cssPath:  './css',
	imgPath:  './assets/images',
	fontPath: './assets/fonts'
};


// tasks
gulp.task('sass', function(){
	return gulp.src('./sass/styles.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('prefix', function(){
	return gulp.src('css/styles.css')
		.pipe(prefix({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('css'));
});

// Default tasks
gulp.task( 'default', [ 'sass', 'sass:watch' ] );

// For additional tasks please run gulp taskName at the command prompt i.e. gulp prefix
