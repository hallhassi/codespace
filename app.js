require('dotenv').config()
require('./database/database').connect()
const User = require('./model/user')
const express = require('express')
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("<p>/</p>")
})

app.get("/hi", (req, res) => {
    res.send("<p>hi</p>")
})

app.post("/register", async (req, res) => {
    try {
        const body = req.body
        const exists = await User.findOne(body)
        if (exists){
            await User.create(body)
        }        
    } catch (error) {
        console.log(error);
    }
})


module.exports = app