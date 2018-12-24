const {MongoClient} = require('mongodb');
const {log} = require('../utils/utils');
const assert = require('assert');

var mongodburl = 'mongodb://localhost:27017';
const dbName = 'ffgames';
const colletionName = 'games';

var createNewGame = function (game, callback){

    const client = new MongoClient(mongodburl);

    // Use connect method to connect to the Server
    client.connect((err) =>{
        assert.strictEqual(null, err);
        log("Connected successfully to server");
    
        const db = client.db(dbName);
        const collection = db.collection(colletionName);

        // Insert some documents
        collection.insertMany(game, (err, result) => {
            log(JSON.stringify(err, undefined, 4));
            callback(result);
        });
    
      client.close();
    });
};

module.exports ={
    createNewGame
};




