async function migrate(){
    const { Product } = require('./../api/product/productModel');
    return Product.bulkCreate(
        [
            { _id: 'classic', name: "Classic Ad", value: 269.99, desc: 'Offers the most basic level of advertisement' },
            { _id: 'standout', name: "Standout Ad", value: 322.99, desc: 'Allows advertisers to use a company logo and use a longer presentation text' },
            { _id: 'premium', name: "Premium Ad", value: 394.99, desc: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility' },
        ]
    );
}

module.exports = {
    migrate
}