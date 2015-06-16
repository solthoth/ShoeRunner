require('dotenv').load();
var $ = require('gulp-load-plugins')({ lazy: true });
var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var runSequence = require('run-sequence');
/**
 * Environment paths
 */
var paths = {
  clean:[

  ],
  js:[

  ],
  lint:[
    'test/**/*.js',
    'gulpfile.js'
  ],
  less:[

  ]
};

/**
 * Clean
 */
gulp.task('clean', function(callback){
  del(paths.clean,callback);
});

/**
 * JSHint Files
 */

gulp.task('lint',function(){
  return gulp.src(paths.lint)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

/**
 * Test task
 */
gulp.task('mocha', function(){
  return gulp.src('./test/*.js', {read:false})
    .pipe($.mocha())
    .once('error',function(){
      process.exit(1);
    })
    .once('end',function(){
      process.exit(0);
    });
});

/**
 * Code coverage (Instanbul)
 */
 gulp.task('test',function(callback){
   exec('istanbul cover _mocha -- -R spec', function(err, stdout, stderr){
     console.log(stdout);
     console.log(stderr);
     callback(err);// finished task
   });
 });

/**
 * Build task
 *  - Build everything
 */
gulp.task('build', function(callback){
  runSequence(
    'clean',
    ['lint'],
    ['test'],
    callback);
});

/**
 * Open task
 */
gulp.task('open', ['build'], function(){
  //TODO
});

/**
 * Default task
 */
gulp.task('default', ['open'], function(){
  //TODO
});
