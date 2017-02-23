'use strict';

const pg = require('pg');

const express= require ('express');

const app = express();

const PORT = process.env.PORT || 3000;

const conString = 'postgres://localhost:5432';

const client = new pg.Client(conString);
client.connect();

app.use(express.static('./public'));

app.get('*'), function(request, response) {
  console.log('index.html to user');
  response.sendFile('./public/index.html', {root: '.'});
};

app.listen (PORT, function() {
  console.log('This fantastic app is being server on localhost 3000');
});
