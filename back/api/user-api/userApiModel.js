const con = require('../_dbo/connect');
const UserApi = con.db.define('user_api', {
    _id: {
        type: con.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: con.Sequelize.STRING },
    user: { type: con.Sequelize.STRING },
    password: { type: con.Sequelize.STRING },
    email: { type: con.Sequelize.STRING }
});
module.exports = {
    UserApi,
    Sequelize:con.Sequelize,
    sequelize:con.db
};