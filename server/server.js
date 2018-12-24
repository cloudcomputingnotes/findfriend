const express = require('express');
const assert = require('assert');

var app = new express();
const {log} = require('../utils/utils');
var {createNewGame,getAllGames} = require('../db/db');

var game = [
    {name: "test1"},
    {name: "test0"},
    {name: "test2"}
];

createNewGame(game, (result)=>{
    log(JSON.stringify(result, undefined, 4));
});

getAllGames( (games) =>{
    log(JSON.stringify(games, undefined, 4));

});

return; 

const port = process.env.PORT || 3000;

app.get('/getcurrentgame', () =>{
    log('this is get');
});

app.post('/setupnewgame', () => {
    log('setting up new game');
    var game = {
        date: utils.today(), 
        players: []
    }
});

app.listen(port, () => {
    utils.log(`findfriend listening at port ${port} `);
})