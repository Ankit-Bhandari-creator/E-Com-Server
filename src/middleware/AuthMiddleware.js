require('dotenv').config()
const Token = require('jsonwebtoken')
exports.authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split("")[1]
        console.log("token", token)
        const isValid = Token.verify(token, process.env.SECRET_KEY)
        if (isValid) {
            req.user_id = isValid.user_id,
                next()
        }
        else {
            res.status(403).json({
                status: "Failed",
                message: "Unauthorized User !!"
            })
        }
    }
    catch (error) {
        res.status(403).json({
            status: "Failed",
            message: "Unauthorized User ID !!"
        })
    }
}