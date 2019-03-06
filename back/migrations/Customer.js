async function migrate(){
    const { Customer } = require('../api/customer/customerModel');
    return Customer.bulkCreate(
        [
            { "name":"UNILEVER","desc":""},
            { "name":"APPLE","desc":""},
            { "name":"NIKE","desc":""},
            { "name":"FORD","desc":""},
            { "name":"DEFAULT","desc":""}
        ]
    );
}

module.exports = {
    migrate
}