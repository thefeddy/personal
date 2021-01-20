require('dotenv').config();

const express = require('express');
const app = express();
const hbs = require('express-hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello s!');
});

app.listen(process.env.PORT, () => { });
