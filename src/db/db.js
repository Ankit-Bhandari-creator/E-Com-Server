require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB_URL}`).then(() => {
    console.log("Connected")
}, () => {
    console.log("Failed to Connect")
})