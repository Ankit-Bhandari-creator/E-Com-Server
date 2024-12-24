const express = require('express')
const { addsubCategory, deleteSubCategory, updateSubCategory, searchSubCategory } = require('../controller/SubCategoryController')
const { authMiddleware } = require('../middleware/AuthMiddleware')

const SubCategoryRouter = express.Router()

SubCategoryRouter.post('/addsubcategory', authMiddleware, addsubCategory)
SubCategoryRouter.delete('/:id', authMiddleware, deleteSubCategory)
SubCategoryRouter.put('/:id', authMiddleware, updateSubCategory)
SubCategoryRouter.get('/search', searchSubCategory)

module.exports = SubCategoryRouter