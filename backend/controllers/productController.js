const Product = require('../models/productModel');


// Create product -- ADMIN
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success:true,
    product
  });
}


// Get all Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ 
    success:true,
    products  
  });
};
