const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncErrors');

// Create product -- ADMIN
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success:true,
    product
  });
});


// Get all Products
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ 
    success:true,
    products  
  });
});


// Update product -- ADMIN
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if(!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
    runValidators:true,
    useFindAndModify:false
  });

  res.status(200).json({
    success:true,
    product
  })
});

// Delete Product -- ADMIN
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if(!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.remove();

  res.status(200).json({
    success:true,
    message:"Product deleted successfully"
  });
});

// Get Single Product
exports.getProductDetails = catchAsyncError(async(req, res, next) => {
  const product = await Product.findById(req.params.id);

  if(!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success:true,
    product
  });
});

