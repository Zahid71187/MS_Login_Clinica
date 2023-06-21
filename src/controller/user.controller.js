import LOG from '../commons/logger'
import { UserService } from '../service/user.service'

const saveUser = async (req, res) => {
  LOG.info('CONTROLLER: starting saveUser method')
  const { body } = req
  LOG.traceJSON('body: ', body)
  try {
    const result = await UserService.saveUser(body)
    const id = result.insertId
    LOG.traceJSON('result: ', result)
    res.status(201).json({
        ok : 'ok',
        id
    })
  } catch (err) {
    LOG.info('CONTROLLER: starting saveUser method')
    res.status(400).json({
        message : "Error"
    })
  }
}

export const UserController = {
  saveUser
}

export default null
