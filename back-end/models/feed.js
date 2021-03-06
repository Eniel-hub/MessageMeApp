const mongoose = require ('mongoose');

const { Schema } = mongoose;

const feedSchema = new Schema ({
    id : Number,
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
    content : {
        type : String,
        required : true
    },
    comments : {
        counter : Number,
        list : [{
        author: {
            type : String,
            required : true
        },
        content : {
            type : String,
            required : true
        }
        }]
    },
    like : {
        counter : {
            type : Number,
            default : 0
        },
        list : [ {username: String} ]
    },
    dislike : {
        counter : {
            type : Number,
            default : 0
        },
        list : [ {username: String} ]
    }
});


const Feed = mongoose.model('Feed', feedSchema);

module.exports = { Feed };