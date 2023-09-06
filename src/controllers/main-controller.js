const path = require('path');
const colorServices = require("../services/colors-services");
const sizeServices = require("../services/sizes-services");

const mainController = {
    home: (req,res) => {
        res.render('index');
    },

    register: (req,res) => {
        res.render('register')
    },

    login: (req,res) => {
        res.render('login');
    },

    productCart: (req,res) => {
        res.render('product-cart');
    },

    productDetail: (req,res) => {
        res.render('product-detail');
    },
    productNew: (req,res) => {
        res.render('product-new',{
            colorList: colorServices.listColors(),
            sizeList : sizeServices.listsizes(),
        }
        );
    },

}

module.exports = mainController;