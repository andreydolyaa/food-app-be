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
user registration with ```encrypted``` passwords supported.
After a purchase is made ```/submitOrder``` handels the order recieved (_right now the data stored in the backend and used for Email sending only_).  
All the data stored in ```MongoDB Atlas```.  
Robo-3T used for local database management.
Uses Session storage.  



### Tools used
Node.js & Express.js & Nodemailer to send emails to users.
