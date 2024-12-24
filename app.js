const express = require('express')
const adminRouter = require('./src/routers/AdminRouter')
const app = express()
const path = require('path')
const CategoryRouter = require('./src/routers/CategoryRouter')
const SubCategoryRouter = require('./src/routers/SubCategoryRouter')
const ProductRouter = require('./src/routers/ProductRouter')

app.set('views', path.join(__dirname, 'src/views'))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v8", adminRouter)
app.use("/images", express.static('public/Images'))
app.use("/api/v8/category", CategoryRouter)
app.use("/api/v8/subcategory", SubCategoryRouter)
app.use("/api/v8/product", ProductRouter)

module.exports = app