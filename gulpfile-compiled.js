'use strict';

/**
 * Created by david on 17/03/16.
 */
var gulp = require('gulp');
var KarmaServer = require('karma').Server;
var eslint = require('gulp-eslint');
var path = require('path');

gulp.task('lint', function () {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src(['app/**/*.js', 'client/**/*.js', '!client/lib/**/*.js', '!client/_old/**/*.js', '!node_modules/**'])
  // eslint() attaches the lint output to the "eslint" property
  // of the file object so it can be used by other modules.
  .pipe(eslint())
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
  .pipe(eslint.format())
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
  .pipe(eslint.failAfterError());
});

gulp.task('test', function (done) {
  new KarmaServer({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: true
  }, done).start();
});

//# sourceMappingURL=gulpfile-compiled.js.map