const service = require('./productService');

exports.get = async function(req,res){
    try {  
        let product = await service.get(req.params.id);
        res.status(200).send(product.data);
    } catch (error) {
        if (error.code) {
            res.status(error.code).send(error.msg);
            return;
        }
        res.status(500).send(error);
    }
}