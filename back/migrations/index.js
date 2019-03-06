const { syncDb } = require('./../api/_dbo/sync-db');
const product = require('./Product');
const customer = require('./Customer');
const discountRule = require('./DiscountRule');
syncDb();

let migrations = [
    product.migrate(),
    customer.migrate(),
    discountRule.migrate()
];

Promise.all(migrations).then(result=>{
    console.log('Migration Ok!');
    process.exit();
}).catch(error=>{
    console.error(error);
    process.exit();
});