const router = require('express').Router();
const {
  homeController,
  aboutController,
  contactController,
} = require('./controller');

// app.get('/', (req, res) => {
//   fs.readFile(`${__dirname}/templates/index.html`, 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end(`<h2>Somting went wrong!</h2>`);
//     } else {
//       res.end(data);
//     }
//   });
// });
router.get('/', homeController);

// app.get('/about', middlewareLocal, (req, res) => {
//   fs.readFile(`${__dirname}/templates/about.html`, 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end(`<h2>Somting went wrong!</h2>`);
//     } else {
//       res.end(data);
//     }
//   });
// });
router.get('/about', aboutController);

// app.get('/contact', (req, res) => {
//   fs.readFile(`${__dirname}/templates/contact.html`, 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end(`<h2>Somting went wrong!</h2>`);
//     } else {
//       res.end(data);
//     }
//   });
// });
router.get('/contact', contactController);

module.exports = router;
