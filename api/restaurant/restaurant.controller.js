const restaurantService = require('../restaurant/restaurant.service');


module.exports = {
    getRestaurants,
    getRestaurant,
    addRestaurant,
    removeRestaurant,
    updateRestaurant
}


async function getRestaurants(req, res) {
    const restaurants = await restaurantService.query(req.query);
    res.json(restaurants);
}



async function getRestaurant(req, res) {
    const restaurant = await restaurantService.getById(req.params.id);
    res.json(restaurant);
}


async function addRestaurant(req, res) {
    const restaurant = await restaurantService.add(req.body);
    res.json(restaurant);
}


async function removeRestaurant(req, res) {
    const restaurant = await restaurantService.remove(req.params.id);
    res.json(restaurant);
}


async function updateRestaurant(req, res) {
    const restaurant = req.body;
    await restaurantService.update(restaurant);
    res.json(restaurant);
}