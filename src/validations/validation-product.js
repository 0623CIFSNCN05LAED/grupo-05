const { body } = require("express-validator");


module.exports = {
  product_new: [
    body("name").notEmpty().withMessage("Debe completar este campo")
      .isLength({ min: 5, max: 100 }).withMessage("Debe tener al menos 5 caracteres"),
    body("description").isLength({ min: 20, max: 500 }).withMessage("Debe tener al menos 20 caracteres"),
    body("image").isIn(["JPG", "PNG", "JPEG", "GIF"]).withMessage("Debe ingresar un imagien (JPG/PNG/JPEG/GIF)"),
  ],
  product_edit: [
    body("name").notEmpty().withMessage("Debe completar este campo")
      .isLength({ min: 5, max: 100 }).withMessage("Debe tener al menos 5 caracteres"),
    body("description").isLength({ min: 20, max: 500 }).withMessage("Debe tener al menos 20 caracteres"),
    body("image").isIn(["JPG", "PNG", "JPEG", "GIF"]).withMessage("Debe ingresar un imagien (JPG/PNG/JPEG/GIF"),
  ]
}