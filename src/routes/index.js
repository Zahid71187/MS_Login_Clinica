import express from 'express'
import { HealthContoller } from '../controller/health.controller'
import { UserController } from '../controller/user.controller'

const router = express.Router()

router.route('/health').get(HealthContoller.health)

router.route('/usuarios').post(UserController.saveUser)

router.route('/login', ()=> {}).post()

module.exports = router
