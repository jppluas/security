 /* Autorización */

 var authorizationSession = (req, res, next) => {
    if(process.env.ALL_GRANTED.includes(req.session.role) || process.env.ACCESS_TOKEN.includes(req.session.role)) {
        //Si es admin direcciona a la request enviada
        return next()
    } else{
        //sino redirecciona a la pagina principal
        return res.redirect("/")
    }
}

module.exports = authorizationSession;