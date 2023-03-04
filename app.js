require('dotenv').config()
const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("<p>${req}</p><p>${res}</p>")
})


module.exports = app