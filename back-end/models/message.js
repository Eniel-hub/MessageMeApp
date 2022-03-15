const mongoose = require('mongoose');

const {Schema} = mongoose;

const messageSchema = new Schema({
    chatID : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default: Date.now
    },
    author : {
        type : String,
        require : true
    },
    text :  String,
    image : { 
        data : Buffer,
        contentType : String
    },
    vocalVoice : {
        data : Buffer,
        contentType : String
    }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = { Message };