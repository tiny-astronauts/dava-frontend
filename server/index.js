const express = require('express');
const port = 8080;
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas');
const app = express();
const getLabel = require('./fda');
const path = require('path')
const webpack = require('webpack');
const webpackConfig = require('../tools/webpack.config');
const compiler = webpack(webpackConfig);
const server = require('http').Server(app)
const io = require('socket.io')(server);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  root: {hello: () => 'hello world'},
  graphql: true,
}))

if (process.env.NODE_ENV === 'production') {
  app.use('lib', express.static(path.join(__dirname, '..', 'lib')));
} else {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    hot: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('index');
});

getLabel()
.then(function(json) {
  console.log('works');
})

io.on('connection', function(socket) {
  console.log('socket connected');
});

server.listen(port, function(err) {
  if (err) {
    console.log('error starting server: ', err);
  } else {
    console.log('server listening on port: ', port);
  }
});

module.exports = app;
