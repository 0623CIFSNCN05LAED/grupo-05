// ** Requires's ----------------------------------------------------------------------------------------------
const { Router } = require('express');
const router = Router();

// ** Controller Require --------------------------------------------------------------------------------------
const mainController = require('../controllers/main-controller');

// ** Routes Require ------------------------------------------------------------------------------------------
const productsRouter = require("./products-router");

// Main Routes
router.get('/', mainController.home);
router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.get('/productCart', mainController.productCart);

// Products Routes
router.use('/products', productsRouter) 

module.exports = router;