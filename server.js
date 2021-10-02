const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const path = require('path');
const SequelizeStore = require('connect-sessions-sequelize')(session.Store);

// route to other folders
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;
const blogStore = new SequelizeStore({ db: sequelize });

// because of bcrypt stuff
const sesh = {
    secret: process.env.SECRET,
    cookie: { maxAge: 7200000 },
    resave: false,
    saveUnintialized: true,
    store: blogStore
};

app.use(session(sesh));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server initialization complete. Server listening on ${PORT}`);
    });
  });