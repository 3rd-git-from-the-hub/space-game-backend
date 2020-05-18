# Create Alchemy SQL BE

## Getting started
1. Change all the files in the `data` directory to match the data model of your app.
1. Run `heroku create`
1. Run `npm run setup-heroku` to create a heroku SQL database in the cloud to go with your heroku app.
1. Run `heroku config:get DATABASE_URL` to get your heroku sql database url from the cloud. Put this in your .env file, under `DATABASE_URL`
1. Run `npm run setup-db`
1. Run `npm run start:watch` to start the dev server
1. Routes are in `app.js`, not in `server.js`. This is so our tests will not launch a server every time.

## Adding auth routes and protecting routes:

At the top of `app.js`:

```js
// Auth
const ensureAuth = require('./lib/auth/ensure-auth');
const createAuthRoutes = require('./lib/auth/create-auth-routes');

const authRoutes = createAuthRoutes();


// setup authentication routes to give user an auth token
// creates a /auth/signin and a /auth/signup POST route. 
// each requires a POST body with a .email and a .password
app.use('/auth', authRoutes);

// everything that starts with "/api" below here requires an auth token!
app.use('/api', ensureAuth);

// and now every request that has a token in the Authorization header will have a `req.userId` property for us to see who's talking
app.get('/api/test', (req, res) => {
    res.json({
        message: `in this proctected route, we get the user's id like so: ${req.userId}`
    });
});
```

## HARD MODE: Override default queries

```js
// OPTIONALLY pass in new queries to override defaults

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
        console.log(user);
        return client.query(`
            INSERT into users (email, hash)
            VALUES ($1, $2)
            RETURNING id, email;
        `,
        [user.email, hash]
        ).then(result => result.rows[0]);
    }
});
```