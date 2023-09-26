const { Router, urlencoded } = require('express');
const router = Router();
const path = require("path");
const validationsRegister = require('../validations/register-validation');
const validateformsRegister = require('../middlewares/validate-register-form');
const userGuard = require('../middlewares/user-guard');
const multer = require("multer");

// ** Controller Requires's -----------------------------------------------------------------------------------
const usersController = require("../controllers/users-controller");

// Multer configuration for files management 
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/users"),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// Main Routes
router.get('/register', usersController.showRegister);
router.get('/login', usersController.showLogin);

// Listado de usuarios
router.get('/list', usersController.userList);
// Detalle de un producto particular
router.get('/detail/:id', usersController.userDetail);


//router.post('/login', urlencoded({extended: false,}),validations,validateforms,mainController.login);
router.post('/logout', usersController.logout);
router.post('/register', urlencoded({extended: false,}),validationsRegister,validateformsRegister,usersController.register);

// Formulario de edición de usuario
router.get('/edit/:id', usersController.userEdit);
//Acción de edición 
router.put('users/:id', usersController.update);

//Acción de borrado
router.delete('/:id', usersController.delete);

module.exports = router