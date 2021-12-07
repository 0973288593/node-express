const express =require('express');
const router = express.Router();

const restaurants = require('../data.js');
let currentRestaurantId = 9;

router.get('/',(req, res) => {
    res.json(restaurants);
});

router.post('/',(req,res) => {
    currentRestaurantId += 1;
    const newRestaurant = {
    id: currentRestaurantId,
     ...req.body   
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);
});
router.put('/:id',(req,res) => {
    
    res.send('updatedRestaurant');
});
router.delete('/:id',(req,res) => {
     const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
    restaurants.splice(restaurantIndex, 1);  //คำสั้งลบindexที่1ของrestaurants
    res.sendStatus(204);
    //res.send('GET ONE API');
});
router.get('/:id', (req,res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurant = restaurants.find(
      (restaurant) => restaurant.id === restaurantId);
  res.json(restaurant);
});

module.exports = router;