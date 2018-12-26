const {MongoClient} = require('mongodb');
const {log, today} = require('../utils/utils');
const mongoose = require('mongoose');
const assert = require('assert');

var mongodburl = 'mongodb://localhost:27017';
const dbName = 'find_friend';
const colletionName = 'G' + today();

var Game = Mongress.Model('Game', {
    gameid: {
        type: string, 
        required: true, 
        trim: true
    },
    name: {
        type: string, 
        required: true,
        minlength: 3, 
        trim: true
    },
    level: {
        type: string, 
        default: '3'
    }});

var game = new Game({
    gameid: '1',
    name: 'Steve'
});

var createNewGame = (game, callback) => {
    const client = new MongoClient(mongodburl);
    client.connect((err) =>{
        assert.strictEqual(null, err);
        const db =  client.db(dbName);
        const collection = db.collection(colletionName);
        
        collection.insertMany(game, (err, result) => {
            if (err)
            {
                log(JSON.stringify(err, undefined, 4));
                return;
            }
            callback(result);
        });
    
      client.close();
    });
};

var getAllGames = (callback) =>{
    const client = new MongoClient(mongodburl);
    client.connect((err) =>{
        assert.strictEqual(null, err);
        const db =  client.db(dbName);
        const collection = db.collection(colletionName);
        
        collection.find({}).toArray((err, docs) =>{
            assert.equal(err, null);
            callback(docs);
        });
    
      client.close();
    });
};

module.exports ={
    createNewGame, 
    getAllGames
};




