const { validationResult } = require("express-validator")

module.exports = {
    product_new:(req, res, next) =>{
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            console.log('Errores:' + errors.mapped());
            req.session.errors = errors.mapped();
            req.session.oldData = req.body;
//            res.redirect('/products/create');
        }
        else{
            next();
        }
    },
    product_edit:(req, res, next) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            req.session.errors = errors.mapped();
            req.session.oldData = req.body;
            res.redirect('/products/create');
        }
        else{
            next();
        }
    }
}