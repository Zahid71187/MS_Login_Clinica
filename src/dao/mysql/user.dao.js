import dbmysql from '../../config/mysql'
import LOG from '../../commons/logger'
import { MYSQL_DATABASE } from '../../commons/constants'

const saveUser = async body => {
  LOG.info('DAO starting saveUser method')
  LOG.traceJSON('body ', body)
  try {
    const result = await dbmysql.query(
      'INSERT INTO `'.concat(`${MYSQL_DATABASE}`).concat('`.usuarios set ?'),
      [body]
    )
    LOG.info('DAO ending saveUser method')
    return result
  } catch (err) {
    LOG.error('DAO: saveUser', err)
    LOG.info('DAO ending saveUser method')
    throw new Error({ text: err.message })
  }
}

export const UserDAO = {
  saveUser
}

export default null
