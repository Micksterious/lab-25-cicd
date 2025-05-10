const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('./certs/key.pem'),
  cert: fs.readFileSync('./certs/cert.pem')
};

res.send('CI/CD update works! ✅');


app.get('/', (req, res) => {
  res.send('Hello from Lab 25 CI/CD project!');
});

https.createServer(options, app).listen(3000, () => {
  console.log('Server running at https://localhost:3000/');
});
