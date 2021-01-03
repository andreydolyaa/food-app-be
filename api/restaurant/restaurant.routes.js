



const express = require('express');
const { getRestaurants, getRestaurant, addRestaurant, removeRestaurant, updateRestaurant } = require('./restaurant.controller');
const router = express.Router();



router.get('/', getRestaurants);
router.post('/', addRestaurant);
router.get('/:id', getRestaurant);
router.delete('/:id', removeRestaurant);
router.put('/:id', updateRestaurant);


module.exports = router;