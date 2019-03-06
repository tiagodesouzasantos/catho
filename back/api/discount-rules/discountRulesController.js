const service = require('./discountRulesService');

exports.get = async function(req,res){
    try {  
        let discountRules = await service.get(req.params.id);
        res.status(200).send(discountRules.data);
    } catch (error) {
        if (error.code) {
            res.status(error.code).send(error.msg);
            return;
        }
        res.status(500).send(error);
    }
}