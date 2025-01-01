require('dotenv').config()
const { ObjectId } = require('mongodb')
const CategoryModel = require('../models/CategoryModel')
const ImageModel = require('../models/ImageModel')


// Add Category Controller

exports.addCategory = async (req, res) => {
    try {
        const catData = req.body
        const insertCat = ({
            category_name: catData.cat_name,
            category_title: catData.cat_title,
            category_image: req.imagePath
        })

        const resData = await CategoryModel.create(insertCat)

        if (resData) {
            res.json({
                status: 'Success',
                message: 'Successfully'
            })
        }
        else {
            res.json({
                status: 'Failed',
                message: 'Failed'
            })
        }
    }
    catch (error) {
        console.log(error)
        res.json({
            message: 'Failed Category'
        })
    }
}

// Delete Category

exports.deleteCategory = async (req, res) => {
    try {
        const delData = { _id: req.params.id }
        const resData = await CategoryModel.deleteOne(delData)

        if (resData) {
            res.json({
                status: "Success",
                message: "Successfully"
            })
        }
        else {
            res.json({
                status: "Failed",
                message: "Failed"
            })
        }
    }
    catch (error) {
        console.log(error)
        res.json({
            status: "Failed",
            message: "Fail"
        })
    }
}

// Update Category

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        const data = {
            category_name: req.body.category_name,
            category_title: req.body.category_title
        }
        const resData = await CategoryModel.updateOne({ _id: id }, data)

        if (resData) {
            res.json({
                status: "Success",
                message: "Successfully"
            })
        }
        else {
            res.json({
                status: "Failed",
                message: "Failed"
            })
        }

    }
    catch (error) {
        console.log(error)
        res.json({
            status: "Failed",
            message: "Fail"
        })
    }
}

// Search Category

exports.searchCategory = async (req, res) => {
    try {
        const { name } = req.query
        const searhQuery = {
            $or: [
                { category_name: { $regex: `^${name}`, $options: 'i' } },
                { category_title: { $regex: `^${name}`, $options: 'i' } }
            ]
        }
        const resData = await CategoryModel.find(searhQuery)

        if (resData.length !== 0) {
            res.json({
                status: "success",
                data: resData
            })
        }
        else {
            res.json({
                message: 'Failed'
            })
        }
    }
    catch (error) {
        console.log(error)
        res.json({
            status: "failed",
            message: "failed to get information",
            error: error
        })
    }
}

// Image Upload

exports.upImage = async (req, res) => {
    try {
        const upImage = {
            cat_id: req.body.cat_id,
            admin_id: req.body.admin_id,
            Icon: req.imagePath
        }

        const resData = await ImageModel.create(upImage)

        if (resData) {
            res.json({
                status: 'Success',
                message: 'Successfully'
            })
        }
        else {
            res.json({
                status: 'Failed',
                message: 'Failed'
            })
        }
    }
    catch (error) {
        console.log(error)
        res.json({
            message: 'Failed to Upload'
        })
    }
}

// Image Aggregate

exports.imageAggregate = async (req, res) => {
    try {
        const id = req.params._id
        const resData = await ImageModel.aggregate([
            { $match: { cat_id: new ObjectId(id) } },
            {
                $lookup: {
                    from: 'images',
                    localField: '_id',
                    foreignField: 'cat_id',
                    as: 'imageData'
                }
            }
        ])

        console.log(resData)

        if (resData) {
            res.json({
                status: 'Success',
                message: 'Successfully'
            })
        }
        else {
            res.json({
                status: 'Failed',
                message: 'Failed'
            })
        }
    }
    catch (error) {
        console.log(error)
        res.json({
            message: 'Failed to Upload'
        })
    }
}

// Get All Category

exports.getAllCategory = async (req, res) => {
    try {
        const allCat = await CategoryModel.find()

        if (allCat) {
            res.json({
                status: 'Success',
                message: 'Successfully'
            })
        }
        else {
            res.json({
                status: 'Failed',
                message: 'Failed'
            })
        }
    }
    catch (error) {
        res.json({
            message: 'Fail'
        })
    }
}

// Get Single Category

exports.singleCategory = async (req, res) => {
    try {
        const getSingle = { _id: req.params.id }
        const getCategory = await CategoryModel.findOne(getSingle)

        if (getCategory) {
            res.json({
                status: 'Success',
                message: 'Successfully'
            })
        }
        else {
            res.json({
                status: 'Failed',
                message: 'Failed'
            })
        }
    }
    catch (error) {
        res.json({
            message: 'Fail'
        })
    }
}