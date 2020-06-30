const router = require('express').Router()

router.use('/api', require('./bookRoutes.js'))
router.use('/api', require('./gbookRoutes'))

module.exports = router
