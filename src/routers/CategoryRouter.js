const express = require('express')
const { addCategory, deleteCategory, updateCategory, searchCategory, upImage, ImageAggregate } = require('../controller/CategoryController')
const uploadImage = require('../middleware/ImageMiddleware')
const { authMiddleware } = require('../middleware/AuthMiddleware')
const RoleMiddleware = require('../middleware/RoleMiddleware')

const CategoryRouter = express.Router()

CategoryRouter.post('/AddCategory', [authMiddleware, RoleMiddleware('admin','user')], addCategory)
CategoryRouter.delete('/:id', authMiddleware, deleteCategory)
CategoryRouter.put('/:id', authMiddleware, updateCategory)
CategoryRouter.get('/search', searchCategory)
CategoryRouter.post('/uploadImage', uploadImage.fields([{ name: 'Icon' }, { name: 'Icon' }]), upImage)
CategoryRouter.get('/aggregate/:id', ImageAggregate)

module.exports = CategoryRouter