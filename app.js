const express = require('express'); 
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const root = require('./routes/root')
const env = require('./config/env')
app.listen(5500)

app.use(morgan(`dev`))

mongoose.connect(env.Url, env.configUrl)

mongoose.connection.on(`connected`, () => {
    console.log(`API connected`)
})

app.use(`/`, root)





