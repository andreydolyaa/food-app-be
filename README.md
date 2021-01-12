
# About this project
This project created for learning purposes only.  
This backend serves a restaurant app frontend where users and restaurant owners can register their restaurants, edit them and make purchases.
#
REST API for - ```restaurants``` and ```users``` with -
```javascript
GET, POST, PUT, DELETE Methods.
```
```javascript
/api/restaurants
/api/restaurants/:id
/api/users
/api/users/:id
/api/auth/login
/api/auth/signup
/submitOrder
```
### Restaurant data model
```javascript
{
    "_id" : ObjectId("5fec2b87f07512c3c8f4db11"),
    "oldId" : "h45hhtjekkl656gee",
    "name" : "Farmhouse Inn Restaurant",
    "description" : "Vegeterian Culinary & Elite Chef Restaurant and Bar.",
    "phone" : "+(122)434-1111-122",
    "location" : "TA, Resenberg st. 10th Avn.",
    "place_img" : "http://img.com",
    "opening_hours" : [{ "sunday": "10AM - 2PM" }, { "monday": "10AM - 12PM" }, { "tuesday": "10AM - 12PM" }, { "wednesday": "10AM - 12PM" }, { "thursday": "10AM - 2PM" }, {                            "friday": "10AM - 2PM" }, { "saturday": "Closed" }],
    "menu" : [ 
        {
            "name" : "Chillian Rice",
            "description" : "Basmati Rice with onions and papers.",
            "amount" : "300gr",
            "price" : 25.0,
            "img" : "http://img.com"
        }, 
        {
            "name" : "Onion Ramen",
            "description" : "Beef broth ramen with green onions.",
            "amount" : "200gr",
            "price" : 45.0,
            "img" : "http://img.com"
        }, 
        {
            "name" : "Tomato Potatos",
            "description" : "Steamed Potatoes with tomato sauce.",
            "amount" : "300gr",
            "price" : 35.0,
            "img" : "http://img.com"
        }, 
        {
            "name" : "Vegetables Rice",
            "description" : "Rice with fresh season vegetables",
            "amount" : "300gr",
            "price" : 25.0,
            "img" : "http://img.com"
        }, 
        {
            "name" : "Bone Broth",
            "description" : "Fresh chicken bone broth with onions.",
            "amount" : "400gr",
            "price" : 25.0,
            "img" : "http://img.com"
        }, 
        {
            "name" : "Fresh Salad",
            "description" : "Fresh Salad with cabbege, leafy greens, tomatoes and season vegetables.",
            "amount" : "500gr",
            "price" : 40.0,
            "img" : "http://img.com"
        }
    ],
    "place_features" : {
        "accessible" : true,
        "smoking" : false,
        "outside" : true,
        "airConitioner" : true,
        "specialEvents" : true,
        "preOrderSeats" : true,
        "takeAway" : true,
        "deliveries" : true
    },
    "reviews" : []
}
```
### User data model
```javascript
{
    "_id" : ObjectId("5ffd786f7c02011fc02bc60d"),
    "email" : "admin@admin.com",
    "password" : "$2b$10$q54gLkOVHNmF/jjDJ3WVSOHsP5PxJvOfGmXD3.V8D4qP/ocQHa0Gu",
    "username" : "John James",
    "orders" : [],
    "isOwner" : true,
    "ownerOf" : "Burger Queen"
}
```
After a purchase is made ```/submitOrder``` handels the order recieved (_right now the data stored in the backend and used for Email sending only_).  
user registration with ```encrypted``` passwords supported.    
All the data stored in ```MongoDB Atlas```.  
Robo-3T used for local database management.
Uses Session storage.  



### Tools used
Node.js & Express.js & Nodemailer to send emails to users.
