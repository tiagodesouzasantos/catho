'use strict';
const { DiscountRules } = require('./discountRulesModel');

async function get(_id=null) {
    try {
        let discountRules = {};
        if(_id!=null){
            discountRules = await DiscountRules.findAll({ where: { id: _id } });
        }else{
            discountRules = await DiscountRules.findAll();
        }
        return { code: 201, data: discountRules};
    } catch (error) {
        console.error('error', error);
        if (error.code) { throw { code: error.code, msg: error.msg } }
        throw { code: 500, msg: error };
    }
}

module.exports = {
    get
}