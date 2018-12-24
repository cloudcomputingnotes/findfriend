const express = require('express');

var app = new express();

const port = process.env.PORT || git 3000;

app.get('', () =>{
    console.log('this is get');
})

app.post('/setupnewgame', () => {
    console.log('setting up new game');
    var game = {
        date: new Date.toString, 
        players: []
    }
})

app.listen(port, () => {
    console.log(`findfriend listening at port ${port} `);
})