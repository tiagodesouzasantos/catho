async function migrate(){
    const { DiscountRules } = require('../api/discount-rules/discountRulesModel');
    return DiscountRules.bulkCreate(
        [
            { "idCustomer": 1, "_idProduct": "classic", "qtMin": 3, "nValue": 179.99, "forEach":0 },
            { "idCustomer": 2, "_idProduct": "standout", "qtMin": 1, "nValue": 299.99, "forEach":1 },
            { "idCustomer": 3, "_idProduct": "premium", "qtMin": 4, "nValue": 379.99, "forEach":1 },
            { "idCustomer": 4, "_idProduct": "classic", "qtMin": 5, "nValue": 215.99, "forEach":0 },
            { "idCustomer": 4, "_idProduct": "standout", "qtMin": 1, "nValue": 309.99, "forEach":1 },
            { "idCustomer": 4, "_idProduct": "premium", "qtMin": 3, "nValue": 389.99, "forEach":1 }
        ]
    );
}

module.exports = {
    migrate
}