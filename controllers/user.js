const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const { gennerateAccessToken, gennerateRefreshToken } = require('../middlewares/jwt')

const register = asyncHandler(async (req, res) => {
    const { account, password, name } = req.body
    if (!account || !password || !name) throw new Error('Missing inputs')
    const response = await User.findOne({ account })
    if (response) {
        throw new Error('User has existed!')
    } else {
        const newUser = await User.create(req.body)
        return res.status(200).json({
            success: newUser ? true : false,
            mes: newUser ? 'Register done! Please go login' : 'Something went wrong'
        })
    }
})
module.exports = {
    register
}