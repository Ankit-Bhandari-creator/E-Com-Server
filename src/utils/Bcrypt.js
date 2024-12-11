const bcrypt = require('bcryptjs');

exports.encryptPassword = (password) => {
    const gen = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, gen);
}

exports.comparePassword = (pass, hash) => {
    return bcrypt.compareSync(pass, hash);
}