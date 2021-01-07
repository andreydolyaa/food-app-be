

const MongoClient = require('mongodb').MongoClient;
const conf = require('../config/conf');

module.exports = {
    getCollection
}


const dbName = 'restDB';

var dbConn = null;

async function getCollection(collectionName){
    const db = await connect();
    return db.collection(collectionName);
}


async function connect(){
    if(dbConn) return dbConn;
    try{
        const client = await MongoClient.connect(conf.dbURL,{useNewUrlParser:true});
        const db = client.db(dbName);
        dbConn = db;
        return db;
    }
    catch(err){
        console.log('Could not connect to DB. ',err);
        throw err;
    }
}