const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

// sendFile will go here
app.get('/.well-known/acme-challenge/67j8tx2ijStLmgXo3ZmJ4N7Y9Cdv-zZt2477xMg4Nwo', function(req, res) {
  res.sendFile(path.join(`${__dirname}/public`, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);