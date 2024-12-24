const ProductModel = require('../models/ProductModel')

require('dotenv').config()

// Add Product

exports.addProduct = async (req, res) => {
    try {
        const product = req.body
        const proData = {
            productName: product.productName,
            productPrice: product.productPrice,
            productCurrency: product.productCurrency,
            productRating: product.productRating,
            productFeedback: product.productFeedback,
            productStock: product.productStock,
            productInstock: product.productInstock,
            productCat_id: product.productCat_id,
            productSub_catId: product.productSub_catId,
            productDescription: product.productDescription,
            productTitle: product.productTitle,
            productImg: req.imagePath
        }

        const resData = await ProductModel.create(proData)

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
            message: 'Fail'
        })
    }
}

// Delete Product

exports.deleteProduct = async (req, res) => {
    try {
        const id = { _id: req.params.id }
        const resData = await ProductModel.deleteOne(id)

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
            message: "Fail"
        })
    }
}

// Update Product

exports.updateProduct = async (req, res) => {

    try {
        const id = { _id: req.params.id }
        const updateData = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productCurrency: req.body.productCurrency,
            productRating: req.body.productRating,
            productFeedback: req.body.productFeedback,
            productStock: req.body.productStock,
            productInstock: req.body.productInstock,
            productDescription: req.body.productDescription,
            productTitle: req.body.productTitle,
            productImg: req.imagePath
        }

        const resData = await ProductModel.updateOne({ _id: id }, updateData)

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
            message: "Fail"
        })
    }
}

// Search Product

exports.searchProduct = async (req, res) => {
    try {
        const { name } = req.query

        const data = {
            $or: [
                { productName: { $regex: `^${name}`, $options: "i" } },
                { productTitle: { $regex: `^${name}`, $options: "i" } }
            ]
        }
        const resData = await ProductModel.find(data)

        if (resData.length !== 0) {
            res.json({
                status: "Success",
                data: resData
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
            message: "Fail",
            err: error
        })
    }
}