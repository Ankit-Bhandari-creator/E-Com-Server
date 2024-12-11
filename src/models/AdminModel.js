require('../db/db')
const mongoose = require('mongoose')
const { collection } = require('../db/collection');
const { encryptPassword } = require('../utils/Bcrypt');

// Sign Up Schema

const AdminSchema = mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    email:
    {
        type: String, unique: true, validate: {

            validator: function (v) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v);
            },
            message: props => `${props.value} is not valid !!`

        },
        required: [true, "Email is required"]
    },
    password: { type: String, required: [true, "Password is required"], min: [6, 'password minimum 6 character is required !!'] },
    phone: { type: Number, unique: true, required: [true, "Number is required"] },
    account_status: { type: Number, default: 0 }
},
    { timestamps: true })

AdminSchema.pre('save', function () {
    this.password = encryptPassword(this.password)
})

const AdminModel = mongoose.model(collection.admin, AdminSchema)
module.exports = AdminModel;