let gulp = require('gulp');
let babel = require('gulp-babel');
let gulpNotifier = require('gulp-plumber-notifier'); 
let request = require('request-promise');

gulp.task('default', ['compileScripts', 'watchScripts']);

gulp.task('compileScripts', function(){
	gulp.src(['src/**/*.js', 'src/**/*.json', '!src/**/*.test.js'])
		.pipe(gulpNotifier())
		.pipe(babel({
			presets: ['stage-2']
		}))
		.pipe(gulp.dest('assets/scripts'));
});

gulp.task('watchScripts', function(){
	gulp.watch(['src/**/*.js', 'src/**/*.json'], ['compileScripts', 'updateDB']);
});

gulp.task('compileNodeScripts', function(){
	gulp.src(['src/**/*.js', 'src/**/*.json'])
		.pipe(gulpNotifier())
		.pipe(babel({
			presets: ['stage-2'],
			plugins: ["transform-es2015-modules-commonjs"]
		}))
		.pipe(gulp.dest('assets/scripts'));
});

gulp.task('updateDB', function(){
	request('http://localhost:7456/update-db')
	.then(()=>console.log('db updated'))
	.catch((err)=>console.error('error updated db', err));
});