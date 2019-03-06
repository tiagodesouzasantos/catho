const con = require('../_dbo/connect');
const DiscountRules = con.db.define('discount_rules', {
    id: {
        type: con.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idCustomer: { type: con.Sequelize.INTEGER },
    _idProduct: { type: con.Sequelize.STRING },
    qtMin: { type: con.Sequelize.INTEGER },
    nValue: { type: con.Sequelize.DECIMAL(10, 2) },
    forEach: { type: con.Sequelize.INTEGER }
});
module.exports = {
    DiscountRules,
    Sequelize: con.Sequelize,
    sequelize: con.db
};