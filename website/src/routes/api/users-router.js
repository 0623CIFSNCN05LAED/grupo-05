// ** Requires's ----------------------------------------------------------------------------------------------
const { Router } = require("express");
const router = Router();

// ** Controller Requires's -----------------------------------------------------------------------------------
const apiUsersController = require("../../controllers/api/users-controller");

// Listado de usuarios
router.get("/", apiUsersController.list);
router.get("/detail/:id", apiUsersController.detail);

module.exports = router;
