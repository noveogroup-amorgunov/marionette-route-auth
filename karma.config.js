module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: '',
    frameworks: ['mocha', 'browserify', 'chai-sinon', 'jquery-chai'],
    files: [
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'test/**/*.spec.js': ['browserify']
    },
    browserify: {
      paths: ['app/scripts'],
      transform: ['babelify', 'hbsfy'],
      extensions: ['.js', '.handlebars']
    },
    reporters: ['spec', 'growl'],
    exclude: [],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: false,
    browsers: ['Chrome'],
    plugins: [
      'karma-browserify',
      'karma-mocha',
      'karma-chai-sinon',
      'karma-jquery-chai',
      'karma-spec-reporter',
      'karma-growl',
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],
  });
};
