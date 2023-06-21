import express from "express";
import bodyParser from "body-parser";
import routes from '../routes/index'
import { PORT } from '../commons/constants'
import LOG from '../commons/logger'
import { dbmysql } from '../config/mysql'


const app = express();

const port = PORT || 3001

app.use(bodyParser.json({ limit: '90mb' }))
app.use(bodyParser.urlencoded({ limit: '90mb', extended: true }))

app.use('/clinica/v1', routes)

app.listen(PORT, () => {

    LOG.info(`Server corriendo en puerto ${port}`)
})

module.exports = app
