const express = require('express');
const path = require('path');
const fs = require('fs');
const ReactSSR = require('react-dom/server.js');
const serverEntry = require('../dist/server-entry.js').default;

const app = express();

const template = fs.readFileSync(
  path.join(__dirname, '../dist/index.html'),
  'utf8'
);

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  const appString = ReactSSR.renderToString(serverEntry);
  const htmlString = template.replace('<!-- app -->', appString);
  res.send(htmlString);
});

app.listen(3333, hostname => {
  console.log(`server is listening at ${hostname} 3333`);
});
