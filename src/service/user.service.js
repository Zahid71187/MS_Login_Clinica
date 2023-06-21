import LOG from '../commons/logger'
import { UserDAO }  from '../dao/mysql/user.dao'

const saveUser = async body => {
    LOG.info('SERVICE: starting saveUser method')
    const resultSave = await UserDAO.saveUser(body)
    return resultSave
    LOG.info('SERVICE: ending saveUser method')
}

export const UserService = {
    saveUser
}

export default null