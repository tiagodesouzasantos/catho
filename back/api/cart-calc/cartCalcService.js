'use strict';
const { DiscountRules  } = require('./../discount-rules/discountRulesModel');

async function post(data) {
    try {
        let rules = await this.getRules(data.customer.id);
        let withRulesValue = this.aplyRule(rules, data.products);
        return { code: 201, data: { total: withRulesValue}};
    } catch (error) {
        console.error('error', error);
        if (error.code) { throw { code: error.code, msg: error.msg } }
        throw { code: 500, msg: error };
    }
}

async function getRules(idCustomer){
    return await DiscountRules.findAll({
        where: {
            idCustomer: idCustomer
        }, raw: true
    });
}

function aplyRule(rules,products){
// caso o numero de regras seja maior que 1 para produtos
// terei que avaliar uma nova maneira de fazer esse processo
    let valorTotal = 0;
    for(let product of products){
        let value = 0;
        let [rule] = rules.filter(rule=>{
            return rule._idProduct==product._id?true:false;
        });
        let foreach = rule ? rule.forEach: '';
        switch (foreach){
            case 1:
                value = this.ruleForEach(rule.qtMin, product.qtd, product.value,rule.nValue);
                break;
            case 0:
                value = this.ruleForPack(rule.qtMin, product.qtd, product.value, rule.nValue);
                break;
            default:
                value = product.qtd*product.value;
        }
        valorTotal = value + valorTotal;
    }
    console.log(`valor ${valorTotal}`);
    
    return valorTotal;
}

function ruleForEach(start,qtt,value,newValue){
    return start <= qtt ? qtt * newValue : qtt * value;
}

function ruleForPack(packSize,qtt,value,newValue){
    if (qtt < packSize) return qtt * value;
    let packValue = ((Math.trunc(qtt / packSize)) * packSize) * newValue;
    let restValue = (qtt % packSize) * value;
    return packValue + restValue;
}

module.exports = {
    post, getRules, aplyRule, ruleForEach, ruleForPack
}