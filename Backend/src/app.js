const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors'); //to allow cross-origin requests or to allow requests from different origins(like from frontend)

const app = express();

app.use(express.json()); //if we don't use this middleware then we'll get request.body undefined(When using POST request)
app.use(cors()); //to allow cross-origin requests or to allow requests from different origins(like from frontend)

app.use('/ai', aiRoutes); 

module.exports = app;