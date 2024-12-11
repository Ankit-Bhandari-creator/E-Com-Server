const express = require('express')
const { signup, login, verifyLink } = require('../controller/AdminController')

const AdminRouter = express.Router()
AdminRouter.post("/signup", signup)
AdminRouter.post("/login", login)
AdminRouter.get("/verify",verifyLink)

module.exports = AdminRouter