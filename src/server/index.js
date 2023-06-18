import express from "express";
import bodyParser from "body-parser";


const app = express();

const PORT = PORT || 3000

app.use(bodyParser.json({ limit: '90mb' }))
app.use(bodyParser.urlencoded({ limit: '90mb', extended: true }))

app.listen(PORT, () => {
    console.log(`Server corriendo en puerto ${PORT}`)
})

module.exports = app
