import mysql from 'mysql2'
import {
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_N_CONNECTIONS
} from '../commons/constants'

const createTableUsuariosQuery = `
  CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    usuario VARCHAR(50) NOT NULL,
    password VARCHAR(15) NOT NULL
  )
`

export const dbmysql = mysql.createPool({
  connectionLimit: MYSQL_N_CONNECTIONS,
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
})

dbmysql.getConnection(async (err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      LOG.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      LOG.error('Database has to many connections')
    }
    if (err.code === 'ECONNREFUSED') {
      LOG.error('Database connection was refused')
    }
  }
  if (connection) connection.release()
  console.log(`Mysql Connected on: ${MYSQL_HOST}`)
  connection.execute(
    `SELECT 1 FROM information_schema.tables WHERE table_schema = ? AND table_name = ? LIMIT 1`,
    ['clinica', 'usuarios'],
    function (err, results, fields) {
      if (results.length > 0) {
        console.log('La tabla existe')
      } else {
        connection.query(createTableUsuariosQuery, (error, results) => {
          if (error) {
            console.error('Error al crear la tabla:', error)
          } else {
            console.log('Tabla creada exitosamente')
          }
        })
      }
    }
  )
})

export default dbmysql
