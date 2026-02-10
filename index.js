const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const REGION = process.env.AWS_REGION || 'local';

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/ping', (req, res) => {
  res.send(REGION);
});

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Region: ${REGION}`);
});
