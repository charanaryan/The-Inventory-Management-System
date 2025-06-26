// const Products = require('../models/Products')
const express = require('express')
const {createProducts, getAllProducts, getProductsByID, updateProducts, deleteProducts} = require('../controllers/productController')
const router = express.Router()


router.post ('/products', createProducts)
router.put('/updateproducts/:id',updateProducts)
router.get ('/getallproducts', getAllProducts)
router.get ('/getproductsbyid/:id', getProductsByID)
router.delete('/deleteproducts/:id',deleteProducts)




module.exports = router