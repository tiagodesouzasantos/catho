'use strict';
const controller = require('./productController');
module.exports = function (app) {
    app.get('/api/product',controller.get);
    app.get('/api/product/:id',controller.get);
}