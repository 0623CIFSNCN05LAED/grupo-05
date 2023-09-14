const { Router } = require('express');
const mainController = require('../controllers/main-controller');
const productService = require("./products-router");

const router = Router();

router.get('/', mainController.home);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/productCart', mainController.productCart);

//router.get('/productDetail', mainController.productDetail);


//router.get('/productEdit', mainController.productEdit);

//router.get('/productList', mainController.productList);

router.use('/products',productService) // creacion de porducto

module.exports = router;