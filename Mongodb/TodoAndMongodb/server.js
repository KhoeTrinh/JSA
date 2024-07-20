const express = require('express');
const path = require('path');
const templatePath = path.join(__dirname, 'templates');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', templatePath);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

