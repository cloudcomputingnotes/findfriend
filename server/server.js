const express = require('express');
const assert = require('assert');
const bodyparser = require('bodyparser');

const {log, today} = require('../utils/utils');
var {createNewGame,getAllGames} = require('../db/db');

var app = new express();
app.use(bodypar.json());

var game = [
    {name: "test1"},
    {name: "test0"},
    {name: "test2"}
];

// createNewGame(game, (result)=>{
//     log(JSON.stringify(result, undefined, 4));
// });

// getAllGames( (games) =>{
//     log(JSON.stringify(games, undefined, 4));

// });

// return; 

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.get('/getcurrentgame', (req, res) =>{
    log('this is get');
    res.send(game);
});

app.post('/newgame', (req, res) => {
    log('setting up new game');
    var game = {
        date: today(), 
        players: []
    }
});

app.listen(port, () => {
    log(`findfriend listening at port ${port} `);
})