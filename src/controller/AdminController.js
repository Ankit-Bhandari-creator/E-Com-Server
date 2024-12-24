require('dotenv').config()

const AdminModel = require('../models/AdminModel');
const { comparePassword } = require('../utils/Bcrypt');
const sendMail = require('../utils/Mail');
const { signupEmailBody } = require('../utils/Mailbody');
const Jwt = require('jsonwebtoken')

// Sign Up Controller

exports.signup = async (req, res) => {
    try {
        const bodyData = req.body;
        const insertData = {
            name: bodyData.name,
            email: bodyData.email,
            password: bodyData.password,
            phone: bodyData.phone,
            role: bodyData.role
        }

        const resData = await AdminModel.create(insertData)
        console.log(resData)

        if (resData) {
            const subject = 'Important'
            // const htmlBody = signupEmailBody(resData.name, resData._id)
            // await sendMail(resData.email, subject, htmlBody).catch(console.error)
            res.json({
                status: "Success",
                message: "Signup Successfully",
                name: resData.name,
                email: resData.email
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
        const resError = {}
        resError.status = "failed"
        if (error.name === "ValidationError") {
            let errors = {};
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });
            resError.error = errors;
        }
        console.log(error)
        res.json({
            message: "Failed Hai"

        })
    }
}

// Login Up Controller

exports.login = async (req, res) => {
    try {
        const bodyData = req.body
        const query = { $and: [{ email: bodyData.email }, { account_status: 0 }] }
        const resData = await AdminModel.findOne(query)

        console.log(resData)

        if (resData) {
            if (comparePassword(bodyData.password, resData.password)) {
                const payload = {
                    user_id: resData._id,
                    email: bodyData.email,
                    date: Date.now(),
                    name: resData.name,
                    role:resData.role
                }

                const SECRET_KEY = process.env.SECRET_KEY
                const Token = await Jwt.sign(payload, SECRET_KEY, { expiresIn: "10d" })

                res.json({
                    status: "Success",
                    message: "Login Successfully",
                    access_token: Token,
                    name: resData.name
                })
            }
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
            message: "Failed"
        })
    }
}

// Verify Link

exports.verifyLink = async (req, res) => {
    try {
        const id = req.params.id
        const updateRes = await AdminModel.updateOne({ _id: id }, { account_status: 1 })

        if (updateRes) {
            res.render('Account_status', { status: 'Success' })
        }
        else {
            res.render('Account_status', { status: 'Failed' })
        }
    }
    catch (error) {
        console.log(error)
    }
}