
const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;


module.exports = {
    query,
    getById,
    add,
    remove,
    update
}



async function query() {
    const collection = await dbService.getCollection('restaurants');
    try {
        const restaurants = await collection.find({}).toArray();
        return restaurants;
        // console.log(collection);
    }
    catch (err) {
        console.log('Restaurant service error', err);
        throw err;
    }
}


async function getById(restaurantId) {
    const collection = await dbService.getCollection('restaurants');
    try {
        const restaurant = await collection.findOne({ '_id': ObjectId(restaurantId) });
        return restaurant;
    }
    catch (err) {
        console.log('Restaurant Service Error. ', err);
        throw err;
    }
}


async function add(restaurant) {
    const collection = await dbService.getCollection('restaurants');
    try {
        await collection.insertOne(restaurant);
        return restaurant;
    }
    catch (err) {
        console.log('Restaurant service, could not ADD restaurant', err);
        throw err;
    }
}



async function remove(restaurantId) {
    const collection = await dbService.getCollection('restaurants');
    try {
        await collection.deleteOne({ '_id': ObjectId(restaurantId) });
    }
    catch (err) {
        console.log('Restaurant service, could not REMOVE restaurant. ', err);
        throw err;
    }
}


async function update(restaurant) {
    const collection = await dbService.getCollection('restaurants');
    restaurant._id = ObjectId(restaurant._id);
    try {
        await collection.updateOne({ '_id': restaurant._id }, { $set: restaurant });
        return restaurant;
    }
    catch (err) {
        console.log('Could not update restaurant (restaurant service). ', err);
        throw err;
    }
}