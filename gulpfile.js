var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp .task('packagejs', function(){
  return browserify({entries: './main.js', extensions: ['.js'], debug: true})
    .bundle()
    .on('error',function(err){
      console.error(err.message.red);
      console.error(err.stack.yellow);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./assets/'))
    // .pipe(buffer())
    // .pipe(uglify())
    // .pipe(rename('bundle.min.js'))
    // .pipe(gulp.dest('./assets/'));
})

gulp.task('s', function(){
  nodemon({
    script:'./bin/www'
  })
  .on('start',['packagejs'])
  .on('change',['packagejs'])
  .on('restart',['packagejs'])
})