const { body } = require("express-validator");


module.exports = {
  login: [
    body("email").notEmpty().withMessage("Debe completar este campo")
      .bail()
      .isEmail()
      .withMessage("Debe ser un email válido"),
    body("password").notEmpty().withMessage("Debe completar este campo"),
  ],
  register: [
    body("name").notEmpty().withMessage("Debe completar este campo"),
    body("surname").notEmpty().withMessage("Debe completar este campo"),
    body("email").notEmpty().withMessage("Debe completar este campo")
      .bail()
      .isEmail().withMessage("Debe ser un email válido"),
    body("birthDay").notEmpty().withMessage("Debe completar este campo"),
    body("address").notEmpty().withMessage("Debe completar este campo"),
    body("buildtype").notEmpty().withMessage("Debe completar este campo"),
    body("zipcode").notEmpty().withMessage("Debe completar este campo"),
    body("password").notEmpty().withMessage("Debe completar este campo"),
    body("confirmPassword").notEmpty().withMessage("Debe completar este campo"),
  ],
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
  ],
}