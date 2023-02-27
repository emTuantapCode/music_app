const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    dateOfDeath: {
        type: Date,
    },
    bio: {
        type: String
    },
    thumbnail: {
        type: String
    }
});

//Export the model
module.exports = mongoose.model('Artist', artistSchema);