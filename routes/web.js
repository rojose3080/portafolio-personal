const express = require('express');
const router = express.Router();
const fs = require('fs');

function renderPage(name, res) {
  const layout = fs.readFileSync('views/layout.html', 'utf8');
  const content = fs.readFileSync(`views/${name}.html`, 'utf8');
  res.send(layout.replace('<!--CONTENT-->', content));
}

router.get('/', (req, res) => renderPage('index', res));
router.get('/about', (req, res) => renderPage('about', res));
router.get('/services', (req, res) => renderPage('services', res));
router.get('/contact', (req, res) => renderPage('contact', res));

router.post('/contact', (req, res) => {
  console.log("Mensaje recibido:", req.body);
  res.send("<h2>Gracias por tu mensaje!</h2><a href='/'>Volver al inicio</a>");
});

module.exports = router;
