const mongoose = require('mongoose');
const {Schema} = mongoose;

const chatSchema = new Schema({
    id : {
        type : String,
        require: true
    },
    users: [{
        username: String
    }],
    messages: [
        {
            username : {
                type : String,
                required : true
            },
            date : { 
                type : Date,
                default : Date.now
            },
            text :  String,
            image : { 
                data : Buffer,
                contentType : String
            },
            vocalVoice : {
                data : Buffer,
                contentType : String
            },
            hasBeenRead : {
                type : Boolean,
                default : false
            }
        }
    ]
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = { Chat };