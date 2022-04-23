// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.get()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.add(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

module.exports = router;
