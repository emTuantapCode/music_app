const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcryptjs')

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    account: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
        type: String,
        default: 'user'
    },
    password: {
        type: String,
        required: true,
    },
    vip: {
        type: String,
    },
    refreshToken: {
        type: String,
    },
    passwordResetToken: {
        type: String,
    },
    passwordResetExpiry: {
        type: String,
    },
    uploadCounts: {
        type: Number,
        default: 0
    },
    collections: [
        {
            musicType: { type: String },
            values: [{
                type: mongoose.Types.ObjectId,
                ref: 'Music'
            }]
        }
    ],
    address: {
        type: String
    },
    avatar: {
        type: String,
        default: 'https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1870181.jpg'
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    cart: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Music'
        }
    ]
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) next()
    this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync(10))
})

//Export the model
module.exports = mongoose.model('User', userSchema);