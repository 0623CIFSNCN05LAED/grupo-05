module.exports = (req,res, next)=>{
    const category = req.session.userData.id_category
    if (category === 1){
        next();
    }else{
        
        req.session.oldUrl = req.originalUrl
        console.log(req.session.oldUrl)
        res.redirect("/");
    }
}