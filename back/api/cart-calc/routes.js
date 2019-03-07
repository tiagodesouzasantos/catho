'use strict';
const controller = require('./cartCalcController');
module.exports = function (app) {
    app.post('/api/cartCalc',controller.post);
}