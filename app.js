const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const farmersRoutes = require('./routes/routesFarmers')
const productsRoutes = require('./routes/routesProduct')

// bodyparser middleware
app.use(bodyParser.json());

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    next(); 
});

app.use('/api/farmers', farmersRoutes)
app.use('/api/products', productsRoutes)

// non existing route middleware 
app.use((req,res,next) => {
    res.status(404).json({
        message:'404 - Route Not Found.'
    })
})

// error middleware
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }
    res.status(error.code || 500)
    .json({message: error.message || 'An unknown error occured.'})
})

app.listen(4000);