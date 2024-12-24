require('dotenv').config()

const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const { collection } = require('../db/collection')

const ProductSchema = mongoose.Schema({
    productName: { type: String },
    productPrice: { type: String },
    productCurrency: { type: String, enm: ["USD", "INR"] },
    productRating: { type: String },
    productFeedback: { type: String },
    productStock: { type: Number },
    productInstock: { type: Boolean },
    productCat_id: { type: ObjectId },
    productSub_catId: { type: ObjectId },
    productDescription: { type: String },
    productTitle: { type: String },
    productImg: { type: String }
},
    { timestamps: true })

const ProductModel = mongoose.model(collection.product, ProductSchema)
module.exports = ProductModel