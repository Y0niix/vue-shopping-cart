const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const app = express();

app.set('port', (process.env.PORT || 3000))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  next();
});

app.listen(app.get('port'), () => {
  console.log(`Server running at: http://localhost:${app.get('port')}/`)
});