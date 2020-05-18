const express = require('express');
const cors = require('cors');
const client = require('./client.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/locations', async(req, res) => {
  const data = await client.query('SELECT * from locations');

  res.json(data.rows);
});

app.get('/events', async(req, res) => {
  const data = await client.query('SELECT * from events');

  res.json(data.rows);
});

app.get('/shipchoices', async(req, res) => {
  const data = await client.query('SELECT * from shipchoices');

  res.json(data.rows);
});

app.use(require('./middleware/error'));

module.exports = app;
