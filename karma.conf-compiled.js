'use strict';

// Karma configuration
// Generated on Fri Mar 18 2016 14:51:33 GMT-0300 (BRT)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: ['client/lib/angular/angular.min.js', 'client/lib/jquery/dist/jquery.min.js', 'client/lib/bootstrap/dist/js/bootstrap.min.js', 'client/lib/angular-mocks/angular-mocks.js', 'client/lib/angular-route/angular-route.min.js', 'client/lib/angular-crumble/crumble.js', 'client/app/app.module.js', 'client/app/app.config.js', 'client/app/app.main.js', 'client/app/components/head-menu.js', 'client/app/components/sidebar-left.js', 'client/app/components/small-box.js', 'client/app/components/content-header.js', 'client/app/sessions/app.home.js', 'test/client/*Spec.js'],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};

//# sourceMappingURL=karma.conf-compiled.js.map