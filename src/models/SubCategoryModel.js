require('dotenv').config()
const mongoose = require('mongoose')
const { collection } = require('../db/collection')
const { ObjectId } = require('mongodb')

const SubCategorySchema = mongoose.Schema({
    sub_catName: { type: String },
    sub_catTitle: { type: String },
    cat_id: { type: ObjectId, required: [true, "ObjectId must Required"] },
    sub_catImage: { type: String }
},
    { timestamps: true })

const SubCategoryModel = mongoose.model(collection.subCategory, SubCategorySchema)
module.exports = SubCategoryModel