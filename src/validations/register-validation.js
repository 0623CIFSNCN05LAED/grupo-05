const { body } = require("express-validator");


module.exports = [
    body("name").notEmpty().withMessage("Debe completar este campo"),
    body("surname").notEmpty().withMessage("Debe completar este campo"),
    body("email").notEmpty().withMessage("Debe completar este campo")
      .bail()
      .isEmail().withMessage("Debe ser un email válido"),
    body("birthDay").notEmpty().withMessage("Debe completar este campo"),
    body("address").notEmpty().withMessage("Debe completar este campo"),
    body("zipcode").notEmpty().withMessage("Debe completar este campo"),
    body("password").notEmpty().withMessage("Debe completar este campo"),
    body("confirmPassword").notEmpty().withMessage("Debe completar este campo"),
  ];

