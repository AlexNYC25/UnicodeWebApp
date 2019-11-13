
const express = require('express');
const mariadb = require('mariadb');

const port = 3000;
const host = 'localhost';

const app = express();
const cnx = mariadb.createPool({
    host: host,
    user: 'root',
    password: '',
    connectionLimit: 10
})

app.use(express.static(__dirname + '/public'))

app.set('views', './views')
app.set('view engine', 'pug');



app.get('/', function (req, res) {
    res.render('index', {});
});

// Set uo post action from index page

app.listen(port, function() {
    console.log('Server has started on port 3000')
})