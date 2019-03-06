const con = require('../_dbo/connect');
const Customer = con.db.define('customers', {
    id: {
        type: con.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: con.Sequelize.STRING },
    desc: { type: con.Sequelize.STRING }
});
module.exports = {
    Customer,
    Sequelize: con.Sequelize,
    sequelize: con.db
};