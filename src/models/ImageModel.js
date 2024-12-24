require('../db/db')
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const { collection } = require('../db/collection')

// Upload Image Schema

const ImageSchema = mongoose.Schema({
    cat_id: { type: ObjectId, required: [true, 'Id is required'] },
    admin_id: { type: ObjectId, required: [true] },
    image: { type: String, default: 'blank.png' }
},
    { timestamps: true })

const ImageModel = mongoose.model(collection.image, ImageSchema)
module.exports = ImageModel
