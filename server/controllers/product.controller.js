const {Product}=require('../models/product.model')


//create
module.exports.createProduct=(request,response)=>{
    const{title,price,description}= request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product=>response.json(product))
        .catch(err=>response.json(err))
}

//getall
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

//getone
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

