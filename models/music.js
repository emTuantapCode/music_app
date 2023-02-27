const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var musicShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    src: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    type: {
        type: String,
        enum: ['music', 'sfx']
    },
    duration: {
        type: Number,
        require: true
    },
    seller: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: 'Artist'
    },
    label: {
        type: Array,
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    copyright: {
        type: String,
        require: true
    }
});

//Export the model
module.exports = mongoose.model('Music', musicShema);