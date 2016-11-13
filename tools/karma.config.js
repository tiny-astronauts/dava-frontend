module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [jasmine],
    files: '../src/test/**/*.js',
    preprocessors: {
      'client/**/*.js': ['webpack', 'sourcemap', 'coverage'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'public/reports/coverage',
      type: 'html',
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(jpg|png)$/,
            loader: 'file',
            include: path.resolve(__dirname, 'src/images'),
            exclude: /node_modules/,
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
          },
          {
            test: /\.(scss|css)$/,
            loader: 'style!css!sass',
            exclude: /node_modules/,
          },
        ]
      },
      resolve: {
        root: path.resolve(__dirname, 'client'),
        extensions: [
          '',
          '.js',
          '.jsx',
          '.sass',
          '.css',
        ],
      },
      externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
      },
    },
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
    ],
    babelPreprocessor: {
      options: {
        presets: ['es2015','react','stage-0'],
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
}
