var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		concat = require('gulp-concat'),
		uglifyjs = require('gulp-uglifyjs'),
		cssnano = require('gulp-cssnano'),
		rename = require('gulp-rename'),
		del = require('del');		
			
gulp.task('scss', async function(){
	return gulp.src('app/scss/**/*.scss')
			.pipe(sass({outputStyle: 'expanded'}))
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', async function(){
	browserSync.init({
		server: {
				baseDir: "app"
		}
});
});

gulp.task('script', async function(){
	return gulp.src(['',
										''])
					.pipe(concat('libs.min.js'))
					.pipe(uglifyjs())
					.pipe(gulp.dest('app/js'))
});

gulp.task('css', async function(){
	return gulp.src('app/css/libs.css')
					.pipe(cssnano())
					.pipe(rename({suffix: '.min'}))
					.pipe(gulp.dest('app/css'))
});

gulp.task('pre-build', async function(){

	var buildCss = gulp.src([
		'app/css/**/*.css',
		'!libs.css'
	])
	.pipe(gulp.dest('dist/css'))

	var buildJs = gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'))

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))

	var buildImg = gulp.src('app/img/**/*')
		.pipe(gulp.dest('dist/img'))

	var buildHtml =  gulp.src('app/*.html')
		.pipe(gulp.dest('dist'))

});

gulp.task('clean', async function(){
	return del.sync('dist')
});

gulp.task('watch', async function(){
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
	gulp.watch('app/*.html', gulp.parallel('html'));
	gulp.watch('app/**/*.js', gulp.parallel('js'));
});

gulp.task('js', async function(){
	return gulp.src('app/js/main.js')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('html', async function(){
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream: true}))		

});

gulp.task('default', gulp.parallel('scss', 'css','browser-sync' ,'watch'));
gulp.task('build', gulp.parallel('clean', 'scss', 'css', 'script', 'pre-build'));
