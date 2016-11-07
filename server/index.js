const express = require('express');
const port = 8080
var app = express();

//app.use()

app.get('*', function(req, res) {
  res.send('works')
});


app.listen(port, function(err) {
  if (err) {
    console.log('error starting server: ', err);
  } else {
    console.log('server listening on port: ', port);
  }
});
