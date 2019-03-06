'use strict';
const { Customer } = require('./customerModel');

async function get(_id=null) {
    try {
        let customers = {};
        if(_id!=null){
            customers = await Customer.findAll({ where: { id: _id } });
        }else{
            customers = await Customer.findAll();
        }
        return { code: 201, data: customers};
    } catch (error) {
        console.error('error', error);
        if (error.code) { throw { code: error.code, msg: error.msg } }
        throw { code: 500, msg: error };
    }
}

module.exports = {
    get
}