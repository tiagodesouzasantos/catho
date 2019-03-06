'use strict';
const service = require('./userApiService');

exports.auth = async function (req, res) {
    try {
        let auth = await service.auth(req.body);
        if (auth.code) {
            res.status(auth.code).send(auth.msg);
            return;
        }
        res.status(200).send(auth);
    } catch (error) {
        if(error.code){
            res.status(error.code).send(error.msg);
            return;
        }
        res.status(500).send(error);
    }
}
exports.create = async function (req, res) {
    try {
        let create = await service.create(req.body);
        if (create.code) {
            res.status(create.code).send(create.msg);
            return;
        }
        res.status(200).send(create);
    } catch (error) {
        if(error.code){
            res.status(error.code).send(error.msg);
            return;
        }
        res.status(500).send(error);
    }
}
exports.update = async function (req, res) {
    try { 
        let update = await service.update(req.body, req.params.user);
        if (update.code) {
            res.status(update.code).send(update.msg);
            return;
        }
        res.status(200).send(create);
    } catch (error) {
        if(error.code){
            res.status(error.code).send(error.msg);
            return;
        }
        res.status(500).send(error);
    }
}