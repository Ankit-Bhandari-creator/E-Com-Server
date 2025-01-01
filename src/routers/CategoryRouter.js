const express = require('express')
const { addCategory, deleteCategory, updateCategory, searchCategory, upImage, getAllCategory, singleCategory, imageAggregate } = require('../controller/CategoryController')
const uploadImage = require('../middleware/ImageMiddleware')
const { authMiddleware } = require('../middleware/AuthMiddleware')
const RoleMiddleware = require('../middleware/RoleMiddleware')

const CategoryRouter = express.Router()

CategoryRouter.post('/addcategory', [authMiddleware, RoleMiddleware('admin'), uploadImage.fields([{ name: 'Image' }, { name: 'Image' }])], addCategory)
CategoryRouter.delete('/:id', [authMiddleware, RoleMiddleware('admin')], deleteCategory)
CategoryRouter.put('/:id', [authMiddleware, RoleMiddleware('admin')], updateCategory)
CategoryRouter.get('/search', [authMiddleware, RoleMiddleware('admin', 'user')], searchCategory)
CategoryRouter.get('/allcategory', [authMiddleware, RoleMiddleware('admin', 'user')], getAllCategory)
CategoryRouter.get('/:id', [authMiddleware, RoleMiddleware('admin', 'user')], singleCategory)
CategoryRouter.get('/aggregate/:id', imageAggregate)

// CategoryRouter.post('/uploadImage', [authMiddleware, RoleMiddleware('admin','user')],uploadImage.fields([{ name: 'Icon' }, { name: 'Icon' }]), upImage)

module.exports = CategoryRouter