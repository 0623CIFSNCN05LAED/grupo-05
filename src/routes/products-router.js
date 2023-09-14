const express = require("express");
const router = express.Router();
const path = require("path");

const multer = require("multer");

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


const productsController = require("../controllers/products-controller");


//Crear Producto
router.get("/create", productsController.create);
router.post("/", upload.single("image"), productsController.createNew);

router.get('/Detail', productsController.productDetail);

router.get('/Edit', productsController.productEdit);

router.get('/List', productsController.productList);



module.exports = router