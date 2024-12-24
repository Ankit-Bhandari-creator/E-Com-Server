const RoleMiddleware = (...Roles) => {
    return function (req, res, next) {
        if (!Roles.includes(req.user.role.toLowerCase())) {
            res.json({
                message: `Access Denied to ${req.user.role}`
            })
        }
        else {
            next()
        }
    }
}

module.exports = RoleMiddleware