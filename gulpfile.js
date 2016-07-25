var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

gulp.task('styles', function(){
	gulp.src('./scss/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
	// .pipe(minifyCss())
	// .pipe(rename({extname: '.min.css'}))
	// .pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('serve', function (){
	browserSync.init({
		server: {
			baseDir:'./'
		}
	})

	gulp.watch('./scss/*',['styles']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);