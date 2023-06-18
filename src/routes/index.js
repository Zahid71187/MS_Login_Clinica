import express from 'express'

const router = express.Router()

router.route('/health').get()

router.route('/usuarios', ()=> {}).post()

router.route('/login', ()=> {}).post()

module.exports = router
