const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

const indexpage = path.join(__dirname, 'index.html');
const aboutpage = path.join(__dirname, 'about.html');
const contactpage = path.join(__dirname, 'contact.html');
const exppage = path.join(__dirname, 'exp.html');

console.log(indexpage);

app.get('/', (req, res) => {
  res.sendFile(indexpage);
});
app.get('/index', (req, res) => {
    res.sendFile(indexpage);
  });

app.get('/about', (req, res) => {
    res.sendFile(aboutpage)
});

app.get('/contact', (req, res) => {
    res.sendFile(contactpage)
})

app.get('/experience', (req, res) => {
    res.sendFile(exppage)
})

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});