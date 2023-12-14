const { body } = require("express-validator");
const Users = require('../services/user-services')


module.exports = {
  login: [
    body("email").notEmpty().withMessage("Debe completar este campo")
      .bail()
      .isEmail()
      .withMessage("Debe ser un email válido"),
    body("password").notEmpty().withMessage("Debe completar este campo"),
  ],
  register: [
    body("firstName").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 2, max: 50 }).withMessage("El nombre debe tener entre 2 y 50 caracteres"),
    body("lastName").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 2, max: 50 }).withMessage("El Apellido debe tener entre 2 y 50 caracteres"),
    body("email").notEmpty().withMessage("Debe completar este campo")
      .bail()
      .isEmail().withMessage("Debe ser un email válido")
      .bail()
      .custom(async value => {
        const existingUser = await Users.getUserByEmail(value);
        if (existingUser) {
          throw new Error('El email ya existe');
        }
      }),
    body("birthDay").notEmpty().withMessage("Debe completar este campo"),
    body("address").notEmpty().withMessage("Debe completar este campo"),
    body("buildtype").notEmpty().withMessage("Debe completar este campo"),
    body("zipcode").notEmpty().withMessage("Debe completar este campo")
    .bail()
    .isInt({ min: 1, max: 9999 ,allow_leading_zeroes: true}).withMessage("Debe ser solo numeros")
    .isLength({ min: 4, max:  4 }).withMessage("Debe contener 4 digitos"),
    body("password").notEmpty().withMessage("Debe completar este campo")
    .bail()
    .isLength({ min: 8, max: 50 }).withMessage("La contrasena debe tener al menos 8 caracteres"),
    body("confirmPassword").notEmpty().withMessage("Debe completar este campo")
    .bail()
    .isLength({ min: 8, max: 50 }).withMessage("La contrasena debe tener al menos 8 caracteres")
    .custom((value,{req}) => {
      if(value !== req.body.password) {
        throw new Error ('Las contraseñas no coinciden')
      }
      return true
      }),
    //body("image").isIn(["JPG", "PNG", "JPEG", "GIF"]).withMessage("Debe ingresar un imagien (JPG/PNG/JPEG/GIF"),
  ]
}