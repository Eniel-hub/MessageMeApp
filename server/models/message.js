const mongoose = require('mongoose');
const { buffer } = require('stream/consumers');

const {Schema} = mongoose;

const messageSchema = new Schema({
    chatID : {
        type : String,
        require : true
    },
    date : {
        default: Date.now
    },
    author : {
        type : String,
        require : true
    },
    text :  String,
    image : { 
        data : buffer,
        contentType : String
    },
    vocalVoice : {
        data : buffer,
        contentType : String
    }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = { Message };