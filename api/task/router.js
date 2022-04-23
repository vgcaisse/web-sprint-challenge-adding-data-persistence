// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Task.get()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => { next(err) })
})

router.post('/', (req, res, next) => {
    Task.add(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => { next(err) })
})

module.exports = router;

