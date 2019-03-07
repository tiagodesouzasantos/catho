const service = require('./cartCalcService');

exports.post = async function(req,res){
    try {  
        let cartCalc = await service.post(req.body);
        res.status(200).send(cartCalc.data);
    } catch (error) {
        if (error.code) {
            res.status(error.code).send(error.msg);
            return;
        }
        res.status(500).send(error);
    }
}