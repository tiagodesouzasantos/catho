'use strict';
module.exports = function(app){
    const product = require('./product/routes');
    const customer = require('./customer/routes');
    const discountrules = require('./discount-rules/routes');
    const cartCalc = require('./cart-calc/routes');
    product(app);
    customer(app);
    discountrules(app);
    cartCalc(app);
}