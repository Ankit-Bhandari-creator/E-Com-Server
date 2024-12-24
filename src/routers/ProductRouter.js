const express = require('express')
const { addProduct, deleteProduct, updateProduct, searchProduct } = require('../controller/ProductController')
const uploadImage = require('../middleware/ImageMiddleware')

const ProductRouter = express.Router()

ProductRouter.post('/addproduct', uploadImage.fields([{ name: 'Image' }]), addProduct)
ProductRouter.delete('/:id', deleteProduct)
ProductRouter.put('/:id', updateProduct)
ProductRouter.get('/search', searchProduct)

module.exports = ProductRouter