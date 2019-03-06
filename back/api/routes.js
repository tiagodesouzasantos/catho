'use strict';
module.exports = function(app){
    const product = require('./product/routes');
    product(app);
}