const express = require('express')
const { addsubCategory, deleteSubCategory, updateSubCategory, searchSubCategory } = require('../controller/SubCategoryController')

const SubCategoryRouter = express.Router()

SubCategoryRouter.get('/AddSubCategory', addsubCategory)
SubCategoryRouter.delete('/:id', deleteSubCategory)
SubCategoryRouter.put('/:id', updateSubCategory)
SubCategoryRouter.get('/search', searchSubCategory)

module.exports = SubCategoryRouter