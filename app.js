const express = require("express")

const app = express()


//app.use importa el orden y entra a todos los middleware, con 
//app.get, la url tiene que se exacta, por eso no importa el orden aquí

app.get("/", (req, res) => {
    console.log("heroku")
    res.json({
        message: "Welcome to my app"
    })
})
app.get("/api/v1", (req, res) => {
    console.log("111")
    res.json({
        message: "Testing Heroku Deploy"
    })
})

app.get("/api/v1/users", (req, res) => {
    console.log("entró")
    res.json({
        id: 1,
        firstname: "Academlo",
        lastname: "testing",
        email: "testing@gmail.com"
    })
})

module.exports = app