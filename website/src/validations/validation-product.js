const { body } = require("express-validator");

module.exports = {
  product_new: [
    body("art").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 1, max: 100 }).withMessage("Debe contener como máximo 100 caracteres"),
    body("name").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 5, max: 100 }).withMessage("Debe contener al menos 5 caracteres y como máximo 100"),
    body("description").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 20, max: 500 }).withMessage("Debe contener al menos 20 caracteres y como máximo 500"),
    body("brand").notEmpty().withMessage("Debe especificar una marca"),
    body("collection").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 1, max: 100 }).withMessage("Debe contener como máximo 100 caracteres"),
    body("model").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 1, max: 100 }).withMessage("Debe contener como máximo 100 caracteres"),
    body("gender").notEmpty().withMessage("Debe completar este campo"),
    body("year").notEmpty().withMessage("Debe completar este campo")
    .isInt({ min: 1900, max: 2099 }).withMessage("Debe ser un año entre 1900 y 2099"),
    body("price").notEmpty().withMessage("Debe completar este campo"),
    body("image").isIn(["JPG", "PNG", "JPEG", "GIF","jpg", "png", "jpeg", "gif", ""]).withMessage("Debe ingresar una imagen (JPG/PNG/JPEG/GIF)"),
  ],
  product_edit: [
    body("art").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 1, max: 100 }).withMessage("Debe contener como máximo 100 caracteres"),
    body("name").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 5, max: 100 }).withMessage("Debe contener al menos 5 caracteres y como máximo 100"),
    body("description").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 20, max: 500 }).withMessage("Debe contener al menos 20 caracteres y como máximo 500"),
    body("brand").notEmpty().withMessage("Debe completar este campo"),
    body("collection").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 1, max: 100 }).withMessage("Debe contener como máximo 100 caracteres"),
    body("model").notEmpty().withMessage("Debe completar este campo")
    .isLength({ min: 1, max: 100 }).withMessage("Debe contener como máximo 100 caracteres"),
    body("gender").notEmpty().withMessage("Debe completar este campo"),
    body("year").notEmpty().withMessage("Debe completar este campo")
    .isInt({ min: 1900, max: 2099 }).withMessage("Debe ser un año entre 1900 y 2099"),
    body("price").notEmpty().withMessage("Debe completar este campo"),
    body("image").isIn(["JPG", "PNG", "JPEG", "GIF","jpg", "png", "jpeg", "gif", ""]).withMessage("Debe ingresar una imagen (JPG/PNG/JPEG/GIF)"),
  ]
};