const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  const my_hero_academia = [
    {character: 'Izuku Midoriya', quirk: 'One For All', img: './images/izuku_midoriya.jpg'},
    {character: 'Shoto Todoroki', quirk: 'Half-Cold Half-Hot'},
    {character: 'Katsuki Bakugou', quirk: 'Explosion'},
  ];
  res.render('index', { title: 'Home', my_hero_academia });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
