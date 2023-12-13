const { Router, urlencoded } = require("express");
const router = Router();
const validationsAuth = require("../validations/validation-auth");
const validateforms = require("../middlewares/validate-form");
const multer = require("multer");

// ** Controller Requires's -----------------------------------------------------------------------------------
const usersController = require("../controllers/users-controller");
// Multer Users
const upload = require("../middlewares/multer-product");

// Main Routes
router.get("/register", usersController.showRegister);
router.get("/login", usersController.showLogin);

// Listado de usuarios
router.get("/list", usersController.userList);

//Buscar usuario
router.get("/search", usersController.search);

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

// Formulario de edición de usuario

// Detalle de un usuario particular
router.get("/detail/:id", usersController.userDetail);
router.get("/edit/:id", usersController.userEdit);
//Acción de edición
router.post(
  "/update/:id",
  upload.single("image"),
  urlencoded({ extended: false }),
  usersController.update
);

// Acción de actualización depermisos desde el admin
router.post(
  "/updatebyadmin/:id",
  urlencoded({ extended: false }),
  usersController.updateByAdmin
);

//Acción de borrado
router.get("/delete/:id", usersController.delete);

module.exports = router;
