const app = require("./app")
require("dotenv").config()

//process.env.PORT es asignado nuevamente por heroku y nuestra app lo escucha ->
// Si notros dejaramos 8000 como puerto fijo, no funcionaría en el deploy porque
//heroku elige qué puedo abrir
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})