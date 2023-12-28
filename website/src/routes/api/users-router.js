// ** Requires's ----------------------------------------------------------------------------------------------
const { Router } = require("express");
const router = Router();

// ** Controller Requires's -----------------------------------------------------------------------------------
const apiUsersController = require("../../controllers/api/users-controller");

// Listado de usuarios
router.get("/", apiUsersController.list);
router.get("/detail/:id", apiUsersController.detail);
router.get("/lastUser", apiUsersController.last);
//Acción de borrado
//router.get('/delete/:id', apiProductsController.delete);
//Accion de habilitacion
//router.get("/activate/:id", apiProductsController.activate)

module.exports = router;
