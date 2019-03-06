'use strict';
const controller = require('./discountRulesController');
module.exports = function (app) {
    app.get('/api/discount_rules',controller.get);
    app.get('/api/discount_rules/:id',controller.get);
}