const { Router, urlencoded } = require("express");
const router = Router();
const validationsAuth = require("../validations/validation-auth");
const validateforms = require("../middlewares/validate-form");
const userGuard = require("../middlewares/user-guard")
const adminGuard = require("../middlewares/admin-guard");
const userInfoGuard  =require("../middlewares/users-info-guard")
const multer = require("multer");

// ** Controller Requires's -----------------------------------------------------------------------------------
const usersController = require("../controllers/users-controller");
// Multer Users
const upload = require("../middlewares/multer-product");


// Main Routes
router.get("/register", usersController.showRegister);
router.get("/login", usersController.showLogin);

//router.post('/login', urlencoded({extended: false,}),validations,validateforms,mainController.login);
router.post(
  "/login",
  urlencoded({ extended: false }),
  validationsAuth.login,
  validateforms.login,
  usersController.login
);
router.get("/logout/:id", usersController.logout);
router.post(
  "/register",
  upload.single("image"),
  urlencoded({ extended: false }),
  validationsAuth.register,
  validateforms.register,
  usersController.register
);


// Listado de usuarios
router.get("/list",userGuard,adminGuard, usersController.userList);

//Buscar usuario
router.get("/search",userGuard,adminGuard, usersController.search);

// Detalle de un usuario particular
router.get("/detail/:id",userGuard,userInfoGuard, usersController.userDetail);
router.get("/edit/:id",userGuard,userInfoGuard, usersController.userEdit);
//Acción de edición
router.post(
  "/update/:id",userGuard,userInfoGuard,
  upload.single("image"),
  urlencoded({ extended: false }),
  usersController.update
);

// Acción de actualización depermisos desde el admin
router.post(
  "/updatebyadmin/:id",userGuard,adminGuard,
  urlencoded({ extended: false }),
  usersController.updateByAdmin
);

//Acción de borrado
router.get("/delete/:id",userGuard,adminGuard, usersController.delete);

module.exports = router;
