const client = require('../lib/client');
const { getEmoji } = require('../lib/emoji.js');

// async/await needs to run in a function
run();

async function run() {

  try {
    // initiate connecting to db
    await client.connect();

    // run a query to create tables
    // Wow!! Look at this data model! So much complexity. My only concern: is it necessary to track the loggedinuser in its own table?
    await client.query(`
                CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(256) NOT NULL,
                    hash VARCHAR(512) NOT NULL,
                    user_ship VARCHAR(512)

                );
                  CREATE TABLE loggedinuser (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(512) NOT NULL,
                    score INTEGER NOT NULL,
                    owner_id INTEGER NOT NULL REFERENCES users(id)
                  );

                CREATE TABLE locations (
                    id SERIAL PRIMARY KEY NOT NULL,
                    location_name VARCHAR(512) NOT NULL,
                    location_type VARCHAR(512) NOT NULL,
                    location_image VARCHAR(512) NOT NULL,
                    location_description VARCHAR(512) NOT NULL,
                    event_id INTEGER NOT NULL UNIQUE
            );  
                CREATE TABLE events (
              id SERIAL PRIMARY KEY NOT NULL,
              planet_id INTEGER REFERENCES locations(event_id),
              event_name VARCHAR(512) NOT NULL,
              event_image VARCHAR(1000) NOT NULL,
              event_description VARCHAR(2000) NOT NULL,
              event_choices VARCHAR(5000) ARRAY NOT NULL
            );
            CREATE TABLE shipchoices (
              id SERIAL PRIMARY KEY NOT NULL,
              ship_name VARCHAR(512) NOT NULL,
              ship_fuel INTEGER NOT NULL,
              ship_hull INTEGER NOT NULL,
              base_combat INTEGER NOT NULL,
              base_diplomacy INTEGER NOT NULL,
              base_science INTEGER NOT NULL,
              used_item_slots INTEGER NOT NULL,
              max_item_slots INTEGER NOT NULL
            );
        `); // Generally, the SQL standard would have put ship_choices in snake case

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
