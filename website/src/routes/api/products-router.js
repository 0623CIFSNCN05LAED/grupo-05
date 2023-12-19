// ** Requires's ----------------------------------------------------------------------------------------------
const { Router } = require('express');
const router = Router();

// ** Controller Requires's -----------------------------------------------------------------------------------
const apiProductsController = require("../../controllers/api/products-controller");

// Listado de productos

router.get("/detail/:id", apiProductsController.detail);
router.get("/", apiProductsController.list);
router.get("/lastProduct", apiProductsController.last);


module.exports = router;
