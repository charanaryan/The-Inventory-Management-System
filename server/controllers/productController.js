const Products = require('../models/Products')

const getAllProducts = async(req, res) =>{

    try{
        const getAll = await Products.find()
        res.status(200).json(getAll)

    }catch(err){
        res.status(500).json({
            success :  false,
            message : err.message
            
        })
    }
}

const getProductsByID = async (req, res) => {

    try{
        const {id} = req.params
        const getByID = await Products.findById(id)
        res.status(200).json(getByID)
    }catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        })
    }

    
}

const createProducts = async (req, res) => {
  try {
    const { name, description, supplier, sales, price, quantity } = req.body;

    // Validate required fields
    if (!name || !price || quantity == null) {
      return res.status(400).json({ 
        message: "Name, price, and quantity are required" 
    });
    }

    // We are creating a new product document using the mongoose model Products (at line 1)
    const newProduct = new Products({
      name,
      description,
      supplier,
      sales: sales || 0,
      price,
      quantity,
    });

    // Saving the product document which we created in the MongoDB database and storing it in the variable
    // (savedProducts)
    const savedProduct = await newProduct.save();


    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ message: "Server error" });
  }
}

const updateProducts = async(req, res) => {
    try{
        const {id} = req.params
        const {name, description, supplier, sales, price, quantity} = req.body

        const updatedProducts = await Products.findByIdAndUpdate(id , {name, description, supplier, sales, price, quantity}, {new : true})

        if (! updatedProducts) {
      res.status(404).json({ message: 'Product not found' });
    }

        res.status(200).json(updatedProducts)
    }catch(err){
        res.status(500).json({
            success :  false,
            message : err.message
        })
    }
}

const deleteProducts = async(req, res) => {
    const {id} = req.params
    const itemToBeDeleted = req.body

    if(!itemToBeDeleted){
        res.status(404).json({
            message : "This item does not exist"
        })
    }
    const deletedProduct = await Products.findByIdAndDelete(id)

    res.status(200).json({
        message : "The product is deleted successfully",
        product : deletedProduct
    })
}


module.exports = {createProducts , getAllProducts, getProductsByID, updateProducts, deleteProducts}