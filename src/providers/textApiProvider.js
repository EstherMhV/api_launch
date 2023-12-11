const axios = require('axios');

const baseUrl = 'https://api.spacexdata.com/v3/launches/'

exports.getFlightNumber = async () => {
    let response = await axios.get(baseUrl + 'flight_number', {responseType: 'Number'});
    return  response.this
}