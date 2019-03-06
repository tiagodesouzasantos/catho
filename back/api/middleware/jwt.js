const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    let token = req.headers['auth-token'];
    if (!token) return res.status(400).send({ auth: false, message: 'Token não enviado!' });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(401).send({ auth: false, message: 'Token invalido!' });
        req.userId = decoded.id;
        next();
    });
}

function getToken(dataToken, expiresIn=3600){
    return jwt.sign(dataToken, process.env.SECRET, {
        expiresIn: expiresIn
    });    
}

module.exports = {
    verifyToken,getToken
}