// I'm grading off the dev branch here. Is that right? Is dev the most updated code? The master branch didn't seem like it
const express = require('express');
const cors = require('cors');
const client = require('./client.js');
const app = express();
const request = require('superagent');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');

const authRoutes = createAuthRoutes({
  selectUser(email) {
    return client.query(`
          SELECT id, email, hash
          FROM users
          WHERE email = $1;
      `,
    [email]
    ).then(result => result.rows[0]);
  },
  insertUser(user, hash) {
    return client.query(`
          INSERT into users (email, hash)
          VALUES ($1, $2)
          RETURNING id, email;
      `,
    [user.email, hash]
    ).then(result => result.rows[0]);
  }
});

app.use('/auth', authRoutes);
app.use('/api', ensureAuth);

app.get('/color', async(req, res) => {
  // nice work getting this endpoint together so quickly!
  const data = await request.get('http://thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6');

  res.json(data.body);
}); 
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
  SELECT shipchoices.id, shipchoices.ship_name, shipchoices.ship_fuel, shipchoices.ship_hull, shipchoices.base_combat, shipchoices.base_diplomacy, shipchoices.base_science, shipchoices.used_item_slots, shipchoices.max_item_slots
  FROM shipchoices
  WHERE shipchoices.id = $1
`, [req.params.id]);

  res.json(data.rows);
});

app.get('/randomPlanet', async(req, res) => {
  const data = await client.query(` 
  SELECT locations.id, locations.location_name, locations.location_type, locations.location_image, locations.location_description, events
  FROM locations
  JOIN events 
  on locations.event_id = events.planet_id
`,);

  res.json(data.rows);
});


app.post('/api/loggedinuser', async(req, res) => {
  const data = await client.query(`
  INSERT INTO loggedinuser (name, score, owner_id)
  values ($1, $2, $3)
  returning *
  `, [req.body.name, req.body.score, req.userId]);
  res.json(data.rows);
});

app.get('/api/loggedinuser', async(req, res) => {
  const data = await client.query(`
  SELECT * FROM loggedinuser
  WHERE owner_id = $1
  `, [req.userId]);
  res.json(data.rows);
});

// seems like you could have managed this stuff with req.userId
app.put('/api/loggedinuser', async(req, res) => {
  const data = await client.query(`
  UPDATE loggedinuser
  SET score = score + 1
  WHERE owner_id=$1
  `, [req.userId]);
  res.json(data.rows);
});


app.use(require('./middleware/error'));

module.exports = app;
