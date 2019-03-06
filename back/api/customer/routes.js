'use strict';
const controller = require('./customerController');
module.exports = function (app) {
    app.get('/api/customer',controller.get);
    app.get('/api/customer/:id',controller.get);
}