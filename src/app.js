const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = 3000;

const mongoose = require("mongoose")

// //mongoose.connect('mongodb:mongo/apinode'); //docker
mongoose.connect('mongodb://0.0.0.0:27017/apilaunch'); //instllation locale

app.use(express.urlencoded());
app.use(express.json());



const launchRoute = require('./routes/launchRoute');
app.use('/', launchRoute);



app.listen(port);

