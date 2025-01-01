const express = require('express')
const { addsubCategory, deleteSubCategory, updateSubCategory, searchSubCategory, getAllSubCategory, singleSubCategory } = require('../controller/SubCategoryController')
const { authMiddleware } = require('../middleware/AuthMiddleware')
const uploadImage = require('../middleware/ImageMiddleware')
const RoleMiddleware = require('../middleware/RoleMiddleware')

const SubCategoryRouter = express.Router()

SubCategoryRouter.post('/addsubcategory', [authMiddleware, RoleMiddleware('admin'), uploadImage.fields([{ name: 'Image' }, { name: 'Image' }])], addsubCategory)
SubCategoryRouter.delete('/:id', [authMiddleware, RoleMiddleware('admin')], deleteSubCategory)
SubCategoryRouter.put('/:id', [authMiddleware, RoleMiddleware('admin')], updateSubCategory)
SubCategoryRouter.get('/search', [authMiddleware, RoleMiddleware('admin', 'user')], searchSubCategory)
SubCategoryRouter.get('/allsubcategory', [authMiddleware, RoleMiddleware('admin', 'user')], getAllSubCategory)
SubCategoryRouter.get('/:id', [authMiddleware, RoleMiddleware('admin', 'user')], singleSubCategory)

module.exports = SubCategoryRouter