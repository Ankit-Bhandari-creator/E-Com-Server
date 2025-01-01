const express = require('express')
const { addProduct, deleteProduct, updateProduct, searchProduct, getAllProduct, singleProduct } = require('../controller/ProductController')
const uploadImage = require('../middleware/ImageMiddleware')
const { authMiddleware } = require('../middleware/AuthMiddleware')
const RoleMiddleware = require('../middleware/RoleMiddleware')

const ProductRouter = express.Router()

ProductRouter.post('/addproduct', [authMiddleware, RoleMiddleware('admin'), uploadImage.fields([{ name: 'Image' }, { name: 'Image' }])], addProduct)
ProductRouter.delete('/:id', [authMiddleware, RoleMiddleware('admin')], deleteProduct)
ProductRouter.put('/:id', [authMiddleware, RoleMiddleware('admin')], updateProduct)
ProductRouter.get('/search', [authMiddleware, RoleMiddleware('admin', 'user')], searchProduct)
ProductRouter.get('/allproduct', [authMiddleware, RoleMiddleware('admin', 'user')], getAllProduct)
ProductRouter.get('/:id', [authMiddleware, RoleMiddleware('admin', 'user')], singleProduct)

module.exports = ProductRouter