'use strict';
const { Product } = require('./productModel');

async function get(_id=null) {
    try {
        let products = {};
        if(_id!=null){
            products = await Product.findAll({ where: { id: _id } });
        }else{
            products = await Product.findAll();
        }
        return { code: 201, data: products};
    } catch (error) {
        console.error('error', error);
        if (error.code) { throw { code: error.code, msg: error.msg } }
        throw { code: 500, msg: error };
    }
}

module.exports = {
    get
}