const {MongoClient} = require('mongodb');
const {log, today} = require('../utils/utils');
const assert = require('assert');

var mongodburl = 'mongodb://localhost:27017';
const dbName = 'find_friend';
const colletionName = 'G' + today();

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

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }

module.exports ={
    createNewGame, 
    getAllGames
};




