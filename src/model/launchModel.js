const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let launchSchema = new Schema({
    mission_name: {
        type: String,
        required: true
    },
    launch_year: {
        type: Date,
        default: Date.now
    },
    flight_number: {
        type: Number,
        required: 'un nombre'
    }

})

module.exports = mongoose.model('launch', launchSchema);
