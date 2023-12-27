module.exports = (req,res, next)=>{
    if (req.session.userData){
        next();
    }else{
        
        req.session.oldUrl = req.originalUrl
        console.log(req.session.oldUrl)
        res.redirect('/users/login');
    }
}