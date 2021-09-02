const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/get',controller.get);
router.post('/post',controller.post);
router.post('/put',controller.put);
router.post('/delete',controller.delete)

module.exports = router
