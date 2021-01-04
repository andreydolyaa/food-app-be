const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const port = 3001;
const orderService = require('./services/order.service');

app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:8081', 'http://127.0.0.1:3001', 'http://localhost:3001'],
        credentials: true
    };
    app.use(cors(corsOptions));
}



const restaurantsRoutes = require('./api/restaurant/restaurant.routes');


app.use('/api/restaurants', restaurantsRoutes);



app.post('/submitOrder', (req, res) => {
    orderService.sendEmail(req.body);
    res.end();
})


http.listen(port, () => {
    console.log('Server started on port *', port);
})

