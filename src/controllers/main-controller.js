const path = require('path');

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
        res.render('productcart');
    },

    productDetail: (req,res) => {
        res.render('productdetail');
    },
}


module.exports = mainController;