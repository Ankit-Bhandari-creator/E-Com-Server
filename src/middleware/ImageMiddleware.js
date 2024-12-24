const multer = require('multer')

const storage = multer.diskStorage({
    destination: './public/Images',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const path = 'Img' + uniqueSuffix + '-' + file.originalname.split('.')[1]
        req.imagePath = path
        cb(null, path)
    }
})

const uploadImage = multer({ storage: storage })
module.exports = uploadImage