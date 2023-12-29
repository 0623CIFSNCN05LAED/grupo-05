module.exports = (req, res, next) => {
    const id = req.session.userData.id;
    const category = req.session.userData.id_category;
    const idParams = req.params.id;

    // Permitir el acceso si el id coincide o si la categoría del usuario es 1
    if (id === idParams || category === 1) {
        next();
    } else {
        req.session.oldUrl = req.originalUrl;
        console.log(req.session.oldUrl);
        res.redirect("/");
    }
};