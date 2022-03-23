const mongoose = require ('mongoose');

const { Schema } = mongoose;

const feedSchema = new Schema ({
    author : {
        type: String,
        require: true
    },
    date : { 
        type : Date,
        default : Date.now
    },
    title : String,
    image : {
        data : Buffer,
        contentType : String
    },
    comments : [{
        author: {
            type : String,
            required : true
        },
        content : {
            type : String,
            required : true
        }
    }],
    like : {
        counter : {
            type : Number,
            default : 0
        }
    },
    dislike : {
        counter : {
            type : Number,
            default : 0
        }
    }
});


const Feed = mongoose.model('Feed', feedSchema);

module.exports = { Feed };