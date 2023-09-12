const { Router } = require('express');
const mainController = require('../controllers/main-controller');

const router = Router();

router.get('/', mainController.home);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/productCart', mainController.productCart);

router.get('/productDetail', mainController.productDetail);

router.get('/productNew', mainController.productNew);

router.get('/productEdit', mainController.productEdit);

router.get('/productList', mainController.productList);


module.exports = router;