const axios = require('axios');

const baseUrl = 'https://api.spacexdata.com/v3/launches/'

exports.getFlightNumber = async () => {
    let response = await axios.get(baseUrl + '3', {responseType: 'json'});
    return  response.this
} 