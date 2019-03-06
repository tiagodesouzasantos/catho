const con = require('./../_dbo/connect');
const Product = con.db.define('products', {
    id: {
        type: con.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    _id: { type: con.Sequelize.STRING },
    name: { type: con.Sequelize.STRING },
    value: { type: con.Sequelize.DECIMAL(10, 2) },
    desc: { type: con.Sequelize.STRING }
});
module.exports = {
    Product,
    Sequelize: con.Sequelize,
    sequelize: con.db
};