require('dotenv').config()
const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("<p>/</p>")
})

app.get("/hi", (req, res) => {
    res.send("<p>hi</p>")
})


module.exports = app