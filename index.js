const express = require('express');
const app = express();
const port = 3000;

const webRoutes = require('./routes/web');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Portafolio corriendo en http://localhost:${port}`);
});
