'use strict';

const pg = require('pg');
const express= require ('express');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

const conString = 'postgres://localhost:5432';

const client = new pg.Client(conString);
client.connect();

app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));

app.get('/github/*', proxyGitHub);

function proxyGitHub(request, response) {
  console.log('Routing a GitHub request for ', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.listen (PORT, function() {
  console.log(`This fantastic app is being server on localhost ${PORT}`);
});
