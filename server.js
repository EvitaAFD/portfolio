'use strict';

const pg = require('pg');

const express= require ('express');

const app = express();

const PORT = process.env.PORT || 3333;

const conString = 'postgres://localhost:5432';

const client = new pg.Client(conString);
client.connect();

app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));


app.listen (PORT, function() {
  console.log('This fantastic app is being server on localhost 3333');
});
