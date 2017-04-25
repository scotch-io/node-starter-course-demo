require('dotenv').config();

var app = require('./app/server');

app.listen(5000, function(){
    console.log('server is running');
})