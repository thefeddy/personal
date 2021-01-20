const express = require('express');
const app = express();
const port = 3000;
const express = require('express');
const hbs = require('express-hbs');


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello s!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
