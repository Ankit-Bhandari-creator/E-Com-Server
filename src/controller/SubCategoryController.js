require('dotenv').config()
const SubCategoryModel = require('../models/SubCategoryModel')
const { ObjectId } = require('mongodb')

// Sub Category Model

exports.addsubCategory = async (req, res) => {
    try {
        const subCat = req.body
        const insertSubData = ({
            sub_catName: subCat.sub_catName,
            sub_catTitle: subCat.sub_catTitle,
            cat_id: new ObjectId(subCat.cat_id)
        })

        const resData = await SubCategoryModel.create(insertSubData)
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
            message: 'Failed SubCategory'
        })
    }
}

// Delete SubCategory

exports.deleteSubCategory = async (req, res) => {
    try {
        const delData = { _id: req.params.id }
        console.log(delData)
        const resData = await SubCategoryModel.deleteOne(delData)

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

// Update SubCategory

exports.updateSubCategory = async (req, res) => {
    try {
        console.log(req)
        const { id } = req.params
        const data = {
            sub_catName: req.body.sub_catName,
            sub_catTitle: req.body.sub_catTitle
        }

        const resData = await SubCategoryModel.updateOne({ _id: id }, data)
        console.log(resData)

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

// Search SubCategory

exports.searchSubCategory = async (req, res) => {
    try {
        const { name } = req.query
        const query = {
            $or: [
                { sub_catName: { $regex: `^${name}`, $options: 'i' } },
                { sub_catTitle: { $regex: `^${name}`, $options: 'i' } }
            ]
        }

        const resData = await SubCategoryModel.find(query)

        if (resData) {
            res.json({
                status: "success",
                data: resData
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

// Get All Sub Category

exports.getAllSubCategory = async (req, res) => {
    try {
        const allSubCat = await SubCategoryModel.find()

        if (allSubCat) {
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

// Get Single Sub Category

exports.singleSubCategory = async (req, res) => {
    try {
        const getSingle = { _id: req.params.id }
        const getSubCategory = await SubCategoryModel.findOne(getSingle)

        if (getSubCategory) {
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