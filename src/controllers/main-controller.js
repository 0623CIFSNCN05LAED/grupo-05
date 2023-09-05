const path = require('path');

const mainController = {
    home: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },

    register: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'))
    },

    login: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },

    productCart: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/productcart.html'));
    },

    productDetail: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/productdetail.html'));
    },
}


module.exports = mainController;