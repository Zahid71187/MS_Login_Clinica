import express from 'express'
import { HealthContoller } from '../controller/health'

const router = express.Router()

router.route('/health').get(HealthContoller.healt)

router.route('/usuarios', ()=> {}).post()

router.route('/login', ()=> {}).post()

module.exports = router
