const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

const orderService = require('./services/order.service');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const conf = require('./config/conf');


app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: conf.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


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
const authRoutes = require('./api/auth/auth.routes');
const userRoutes = require('./api/user/user.routes');

app.use('/api/restaurants', restaurantsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);



app.post('/submitOrder', (req, res) => {
    orderService.sendEmail(req.body);
    res.end();
})


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
const port = process.env.PORT || 3001;
http.listen(port, () => {
    console.log('Server started on port *', port);
})

