const express = require('express')
const { addCategory, deleteCategory, updateCategory, searchCategory } = require('../controller/CategoryController')

const CategoryRouter = express.Router()

CategoryRouter.get('/AddCategory', addCategory)
CategoryRouter.delete('/:id', deleteCategory)
CategoryRouter.put('/:id', updateCategory)
CategoryRouter.get('/search', searchCategory)

module.exports = CategoryRouter