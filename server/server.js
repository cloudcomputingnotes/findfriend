const express = require('express');

var app = new express();
var {today} = require('../utils/utils');

const port = process.env.PORT || 3000;

app.get('/getcurrentgame', () =>{
    console.log('this is get');
});

app.post('/setupnewgame', () => {
    console.log('setting up new game');
    var game = {
        date: today(), 
        players: []
    }
});

app.listen(port, () => {
    console.log(`findfriend listening at port ${port} `);
})