// ** Requires's ----------------------------------------------------------------------------------------------
const { Router } = require('express');
const router = Router();

// ** Controller Requires's -----------------------------------------------------------------------------------
const apiProductsController = require("../../controllers/api/products-controller");

// Listado de productos
router.get("/", apiProductsController.list);
router.get("/:id", apiProductsController.detail);

module.exports = router;
