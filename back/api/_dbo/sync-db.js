'use strict';
const { Product } = require('./../product/productModel');
const { Customer } = require('./../customer/customerModel');
const { DiscountRules } = require('./../discount-rules/discountRulesModel');

async function syncDb(){
    let alter = { alter : true};
    await Product.sync(alter); 
    await Customer.sync(alter); 
    await DiscountRules.sync(alter); 
}
module.exports = {
    syncDb
}