import LOG from '../commons/logger'

const health = async (req, res) => {
    LOG.info('CONTROLLER: starting health method')
    LOG.info('CONTROLLER: ending health method')
    res.status(200).json({
        message: 'OK'
    })
}

export const HealthContoller = {
    health
}

export default null
