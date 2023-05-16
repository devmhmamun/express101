const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

const app = express();
// const router = express.Router();
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));
app.use(router);

app.use((req, res, next) => {
  const err = new Error('404, File NOT Found!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log('Error', err);
  if (err.status) {
    res.status(err.status).send(`<h2>${err.message}</h2>`);
  } else {
    res.status(500).send('<h3>Somting went WRONG!<h3>');
  }
});
// Custom global middleware
const middlewareGlobal = function (req, res, next) {
  console.log(`${req.method} - ${req.url}`);
  console.log(`I'm a GLOBAL middleware!`);

  if (req.query.bad) {
    return res.status(400).end('Bad request!');
  }
  next();
};
// Custom global middleware registration
app.use(middlewareGlobal);

// Custom local middleware
const middlewareLocal = function (req, res, next) {
  console.log(`I'm LOCAL middleware.`);
  next();
};

app.listen(2000, '127.0.0.1', () => {
  console.log('Listening from PORT 2000...');
});
