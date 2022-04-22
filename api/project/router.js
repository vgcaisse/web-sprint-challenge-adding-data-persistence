// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

router.use('*', (req, res) => {
    res.json({ api: `up` })
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: "NAaaaaNI!",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;