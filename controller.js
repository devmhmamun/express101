// const fs = require('fs');

exports.homeController = (req, res) => {
  // const err = new Error('BAD request!!!');
  // err.status = 400;
  // throw err;
  const title = 'Home';
  res.render('pages/index', { title });
  // fs.readFile(`${__dirname}/templates/index.html`, 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end(`<h2>Somting went wrong!</h2>`);
  //   } else {
  //     res.end(data);
  //   }
  // });
};

exports.aboutController = (req, res) => {
  const title = 'About';
  res.render('pages/about', { title });
  // fs.readFile(`${__dirname}/templates/about.html`, 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end(`<h2>Somting went wrong!</h2>`);
  //   } else {
  //     res.end(data);
  //   }
  // });
};

exports.contactController = (req, res) => {
  const title = 'Contact';
  res.render('pages/contact', { title });
  // fs.readFile(`${__dirname}/templates/contact.html`, 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end(`<h2>Somting went wrong!</h2>`);
  //   } else {
  //     res.end(data);
  //   }
  // });
};
