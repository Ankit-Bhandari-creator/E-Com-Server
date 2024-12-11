require('dotenv').config()
const mongoose = require('mongoose')
const { collection } = require('../db/collection')

const CategorySchema = mongoose.Schema({
    category_name: { type: String },
    category_title: { type: String },
    status: { type: Boolean, default: false }
},
    { timestamps: true })

const CategoryModel = mongoose.model(collection.category, CategorySchema)
module.exports = CategoryModel