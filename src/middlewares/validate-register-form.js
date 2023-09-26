const { validationResult } = require("express-validator")

module.exports = (req, res, next) =>{
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()){
        req.session.errors = errors.mapped();
        req.session.oldData = req.body;
        res.redirect('/users/register');
    }
    else{
        next();
    }
}