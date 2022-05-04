const express = require('express');

const Projects = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getAll()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Projects.add(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(next)
});

module.exports = router;