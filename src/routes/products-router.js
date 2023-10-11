// ** Requires's ----------------------------------------------------------------------------------------------
const { Router } = require('express');
const router = Router();
const path = require("path");
const multer = require("multer");

// ** Controller Requires's -----------------------------------------------------------------------------------
const productsController = require("../controllers/products-controller");

// Multer configuration for files management 
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/products"),
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

// Listado de productos
router.get('/list', productsController.productList);
// Detalle de un producto particular
router.get('/detail/:id', productsController.productDetail);

// Formulario de creación de productos
router.get('/create', productsController.create);
//Acción de creación 
router.post("/", upload.single("image"), productsController.createNew);

// Formulario de edición de productos
router.get('/edit/:id', productsController.productEdit);
//Acción de edición 
router.post('/update/:id', productsController.update);
    
//Acción de borrado
router.delete('/:id', productsController.delete);

module.exports = router