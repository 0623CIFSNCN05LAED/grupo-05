// ** Requires's ----------------------------------------------------------------------------------------------
const { Router } = require("express");
const router = Router();

const apiUsersRouter = require("./users-router");
const apiProductsRouter = require("./products-router");

router.use("/users", apiUsersRouter);
router.use("/products", apiProductsRouter);

module.exports = router;
