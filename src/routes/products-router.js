// ** Requires's ----------------------------------------------------------------------------------------------
const { Router, urlencoded } = require('express');
const router = Router();
const validationsProduct = require("../validations/validation-product");
const validateProductForms = require("../middlewares/validate-product-forms");
const multer = require("multer");

// ** Controller Requires's -----------------------------------------------------------------------------------
const productsController = require("../controllers/products-controller");
// Multer Products
const upload = require("../middlewares/multer-product")

// Listado de productos
router.get('/', productsController.productList);
// Listado de productos - Descuentos
router.get('/discounts', productsController.productDiscountList)
// Listado de productos - Lo último/Novedades
router.get('/news', productsController.productNewsList)

// Detalle de un producto particular
router.get('/detail/:id', productsController.productDetail);

// Formulario de creación de productos
router.get('/create', productsController.productCreate);
//Acción de creación 
router.post("/", upload.single("image"), validationsProduct.product_new, validateProductForms.product_new, productsController.create);

// Formulario de edición de productos
router.get('/edit/:id', productsController.productEdit);
//Acción de edición 
router.put('/update/:id', upload.single("image"), urlencoded({extended: false,}),  validationsProduct.product_edit, validateProductForms.product_edit, productsController.update);

//Acción de borrado
router.delete('/:id', productsController.delete);

module.exports = router