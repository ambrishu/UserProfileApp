var gulp = require('gulp');
var uglify = require('gulp-uglify');


//Scripting Task
gulp.task('Script', function() {

gulp.src('routes/*.js').pipe(uglify()).pipe(gulp.dest('routes/minify'));

 });
 
 gulp.task('default', ['Script']);
 