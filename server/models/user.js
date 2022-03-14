const mongoose = require('mongoose');
const { buffer } = require('stream/consumers');

const {schema} = mongoose;

const userSchema = new schema({
    username:{
        type : String,
        require : true
    },
    password: {
        type : String,
        require: true
    },
    profilePicture: {
        data: buffer,
        contentType: String
    },
    darkTheme:{
        type: Boolean,
        default: false
    },
    Background:{
        data: buffer,
        contentType: String
    }
});

const User = moongose.model('User', userSchema);

module.exports = { User: User }