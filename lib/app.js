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

app.get('/events/:eventId', async(req, res) => {
  const data = await client.query(`
  select * from events where events.planet_id = $1
  `, [req.params.eventId]);

  res.json(data.rows);
});

app.get('/shipchoices', async(req, res) => {
  const data = await client.query('SELECT * from shipchoices');

  res.json(data.rows);
});

app.get('/usership/:id', async(req, res) => {
  const data = await client.query(` 
  SELECT shipchoices.id, shipchoices.ship_name, shipchoices.ship_image, shipchoices.ship_fuel, shipchoices.ship_hull, shipchoices.base_combat, shipchoices.base_diplomacy, shipchoices.base_science, shipchoices.used_item_slots, shipchoices.max_item_slots
  FROM shipchoices
  WHERE shipchoices.id = $1
`, [req.params.id]);

  res.json(data.rows);
});

app.get('/randomPlanet', async(req, res) => {
  const data = await client.query(` 
  SELECT locations.id, locations.location_name, locations.location_type, locations.location_image, locations.location_description, locations.been_visited, events
  FROM locations
  JOIN events 
  on locations.event_id = events.planet_id
  WHERE locations.been_visited=false
`,);



  res.json(data.rows);
});

app.use(require('./middleware/error'));

module.exports = app;
