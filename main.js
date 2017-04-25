require('dotenv').config();

var app = require('./app/server');

app.listen(process.env.PORT || 3000, function(){
    console.log('server is running');
})