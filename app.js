const express = require("express")

const app = express()

app.use("/api/v1", (req, res) => {
    res.json({
        message: "Testing Heroku Deploy"
    })
})

app.use("/api/v1/users", (req, res) => {
    res.json({
        id: 1,
        firstname: "Academlo",
        lastname: "testing",
        email: "testing@gmail.com"
    })
})

module.exports = app