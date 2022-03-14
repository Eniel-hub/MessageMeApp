const mongoose = require('mongoose');
const {Shema} = mongoose;

const chatSchema = new Schema({
    id : {
        type : String,
        require: true
    },
    users: [{
        username: {
            type: String, 
            require: true
        }
    }]
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = { Chat };