// ** Requires's ----------------------------------------------------------------------------------------------
const { Router } = require('express');
const router = Router();

const apiProductsRouter = require('./products-router')

router.use("/products", apiProductsRouter);

module.exports = router;