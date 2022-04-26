const mongoose = require('mongoose');

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
        data: Buffer,
        contentType: String
    },
    about : {
        type : String,
        default : "Hey there!!! I am using MessageMeApp!",
        require: true
    },
    darkTheme:{
        type: Boolean,
        default: true
    },
    Background:{
        data: Buffer,
        contentType: String
    }
});

const User = moongose.model('User', userSchema);

module.exports = { User: User }