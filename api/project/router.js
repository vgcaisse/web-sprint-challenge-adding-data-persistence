// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const { validateProjectData } = require('./middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => { next(err) })
})

router.post('/', validateProjectData, (req, res, next) => {
    Project.add(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => { next(err) })
})

module.exports = router;