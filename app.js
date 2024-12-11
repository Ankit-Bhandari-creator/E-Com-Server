const express = require('express')
const adminRouter = require('./src/routers/AdminRouter')
const app = express()
const path = require('path')
const CategoryRouter = require('./src/routers/CategoryRouter')
const SubCategoryRouter = require('./src/routers/SubCategoryRouter')

app.set('views', path.join(__dirname, 'src/views'))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v8/auth", adminRouter)
app.use("/api/v8/category", CategoryRouter)
app.use("/api/v8/subcategory", SubCategoryRouter)

module.exports = app