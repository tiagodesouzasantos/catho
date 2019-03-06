'use strict';
const { UserApi } = require('./userApiModel');
const jwt = require('./../middleware/jwt');
const bcrypt = require('bcryptjs');
const validator = require('./userApiValidator');

async function auth(data){
    try {
        let [{dataValues}] = await UserApi.findAll({ where: { user: data.user}}); 
        if (dataValues){
            let validPass = bcrypt.compareSync(data.password, dataValues.password);
            if (validPass){
                let user = this.clearDbUser(dataValues);
                let token = jwt.getToken({ _id: user._id },3600);
                return { token: token, user: user};
            }else{
                throw { code:401, msg:"Senha Incorreta!"};
            }
        }else{
            throw { code:401, msg:"Usuário inexistente!"};
        }
    } catch (error) {
        console.log('\n\r\n\r###########################\n\r\n\r');
        console.error(error);
        console.log('\n\r\n\r###########################\n\r\n\r');
        if (error.code) { throw { code: error.code, msg: error.msg } }
        throw {code:500,msg:error};
    }
}
async function create(data){
    try {
        data.password = this.genHashPass(data.password);
        return await UserApi.create(data);
    } catch (error) {
        if (error.code) { throw { code: error.code, msg: error.msg } }
        throw { code: 500, msg: error };
    }
}

async function update(data,user){
    try {        
        let valid = validator.isValid(data);
        if (!valid) { throw { code: 400, msg: "Bad Request" } }
        data.password = this.genHashPass(data.password);
        let [update] = await UserApi.update(
            data,
            { where: { user: user } }
        );
        if (update){ return { code:204, message:"Updated" } }
        else { return { code: 500, message: "Update fail"} }
    } catch (error) {
        if (error.code) { throw { code: error.code, msg: error.msg } }
        throw { code: 500, msg: error };
    }
}

function genHashPass(pass){
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pass, salt);
}

function clearDbUser(user){
    try {
        delete user.password;
        delete user.createdAt;
        delete user.updatedAt;
        return user;
    } catch (error) {
        throw { code: 500, msg: error };        
    }
}
module.exports = {
    auth, create, genHashPass, clearDbUser, update
}