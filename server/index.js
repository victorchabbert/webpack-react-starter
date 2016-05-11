/*
  eslint no-console: 0,
  no-underscore-dangle: 0,
  prefer-template: 0,
  prefer-arrow-callback: 0
*/

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.config.js');

const __DEV__ = process.env.NODE_ENV !== 'production';
const port = __DEV__ ? 3000 : process.env.PORT || 8080;
const app = express();

// use api here (graphQl, mangodb, etc)

if (__DEV__) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  // In production
  app.use(express.static(path.join(__dirname, '..', '/dist')));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
  });
}

app.listen(port, '127.0.0.1', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.', port, port);
});
