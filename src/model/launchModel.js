const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let launchSchema = new Schema ({
    name: {
        type : String,
        required: true
    },
    message: {
        type : String,
        required: 'un messages'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    post_id: {
        type:String,
    }
})

module.exports = mongoose.model('omments', commentSchema);
