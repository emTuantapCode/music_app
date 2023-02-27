const jsonwebtoken = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const verifyToken = asyncHandler(async (req, res, next) => {
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        const token = req.headers.authorization?.split(' ')[1]
        jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    mes: 'Invalid access token'
                })
            }
            req.user = user
            next()
        })
    } else {
        return res.status(401).json({
            success: false,
            mes: 'Require authentication!'
        })
    }
})
const isAdmin = (req, res, next) => {
    const { role } = req.user
    if (role !== 'admin')
        throw new Error('Require Admin Role')
    next()
}
module.exports = {
    verifyToken,
    isAdmin,
}