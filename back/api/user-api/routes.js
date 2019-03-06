'use strict';
const controller = require('./userApiController');
const jwt = require('./../middleware/jwt');
module.exports = function (app) {
    app.post('/api/auth', controller.auth);
    app.post('/api/auth/user',jwt.verifyToken, controller.create);
    app.put('/api/auth/user/:user',jwt.verifyToken, controller.update);
}