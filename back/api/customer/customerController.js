const service = require('./customerService');

exports.get = async function(req,res){
    try {  
        let customer = await service.get(req.params.id);
        res.status(200).send(customer.data);
    } catch (error) {
        if (error.code) {
            res.status(error.code).send(error.msg);
            return;
        }
        res.status(500).send(error);
    }
}