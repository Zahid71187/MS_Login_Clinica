import log4JS from 'log4js'
import httpContext from 'express-http-context'

const timezoned = () =>
  new Date().toLocaleString('es-MX', {
    timeZone: process.env.TZ
  })

log4JS.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '[%d{ISO8601}] [%x{id}]%] [%[%-4.5p%]] - [%[%-10c%]] %m',
        tokens: {
          id: () => {
            return httpContext.get('reqId') || ''
          }
        }
      }
    },
    MsServiceLogin: {
      type: 'file',
      filename: './logs/api.log',
      layout: {
        type: 'pattern',
        pattern: '[%d{ISO8601}] [%x{id}]%] [%[%-4.5p%]] - [%[%-10c%]] %m',
        tokens: {
          id: () => {
            return httpContext.get('reqId') || ''
          }
        }
      }
    }
  },
  categories: {
    default: {
      appenders: ['out', 'MsServiceLogin'],
      level: process.env.LOG_LEVEL || 'debug'
    }
  }
})

const LOG = log4JS.getLogger('MsServiceLogin')
LOG.level = process.env.LOG_LEVEL || 'debug'
LOG.traceJSON = (message, json) => {
  if (LOG.isDebugEnabled()) {
    LOG.trace(`${message}: ${JSON.stringify(json)}`)
  }
}

LOG.debugJSON = (message, json) => {
  if (LOG.isDebugEnabled()) {
    LOG.debug(`${message}: ${JSON.stringify(json)}`)
  }
}

LOG.infoJSON = (message, json) => {
  if (LOG.isInfoEnabled()) {
    LOG.info(`${message}: ${JSON.stringify(json)}`)
  }
}

module.exports = LOG
