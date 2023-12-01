// ** Requires's ----------------------------------------------------------------------------------------------
const { Router } = require('express');
const router = Router();

// ** Controller Require --------------------------------------------------------------------------------------
const mainController = require('../controllers/main-controller');

// ** Routes Require ------------------------------------------------------------------------------------------
const productsRouter = require("./products-router");
const usersRouter = require("./users-router");
const apiRouter = require('./api/main-api-router')

// Main Routes
router.get('/', mainController.home);
router.get('/productCart', mainController.productCart);

// Products Routes
router.use('/products', productsRouter) 
// Users Routes
router.use('/users', usersRouter) 

router.use('/api', apiRouter )
module.exports = router;