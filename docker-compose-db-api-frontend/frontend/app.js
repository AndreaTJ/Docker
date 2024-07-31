const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const response = await fetch('http://api:5000/api/blogs');
  const blogs = await response.json();
  res.render('index', { blogs });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
