const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

// sendFile will go here
app.get('/.well-known/acme-challenge/WRsJ_6AvzXDq1Ow29h1r2TUQ-UsVclZbeCrsjGEj0BQ', function(req, res) {
  res.sendFile(path.join(`${__dirname}/public`, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);