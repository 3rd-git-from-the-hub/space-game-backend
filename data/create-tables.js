const client = require('../lib/client');
const { getEmoji } = require('../lib/emoji.js');

// async/await needs to run in a function
run();

async function run() {

  try {
    // initiate connecting to db
    await client.connect();

    // run a query to create tables
    await client.query(`
                CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(256) NOT NULL,
                    hash VARCHAR(512) NOT NULL
                );           
                CREATE TABLE locations (
                    id SERIAL PRIMARY KEY NOT NULL,
                    location_name VARCHAR(512) NOT NULL,
                    location_image VARCHAR(512) NOT NULL,
                    location_description VARCHAR(512) NOT NULL,
                    been_visited BOOLEAN NOT NULL
            );  
                CREATE TABLE events (
              id SERIAL PRIMARY KEY NOT NULL,
              planet_id INTEGER NOT NULL REFERENCES locations(id),
              event_name VARCHAR(512) NOT NULL,
              event_image VARCHAR(512) NOT NULL,
              event_description VARCHAR(512) NOT NULL,
              event_choices VARCHAR(5000) ARRAY NOT NULL
            );
            CREATE TABLE shipchoices (
              id SERIAL PRIMARY KEY NOT NULL,
              ship_name VARCHAR(512) NOT NULL,
              ship_image VARCHAR(512) NOT NULL,
              ship_fuel INTEGER NOT NULL,
              ship_hull INTEGER NOT NULL,
              base_combat INTEGER NOT NULL,
              base_diplomacy INTEGER NOT NULL,
              base_science INTEGER NOT NULL,
              used_item_slots INTEGER NOT NULL,
              max_item_slots INTEGER NOT NULL
            );
        `);

    console.log('create tables complete', getEmoji(), getEmoji(), getEmoji());
  }
  catch(err) {
    // problem? let's see the error...
    console.log(err);
  }
  finally {
    // success or failure, need to close the db connection
    client.end();
  }

}
