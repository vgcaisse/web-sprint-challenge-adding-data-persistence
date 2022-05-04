// build your `Project` model here
const db = require('../../data/dbConfig');

function getAll() {
    // return db('projects');
    const query = db('projects');
    const projectMap = query.map(project => {
        if (project.project_completed === 0) {
            return {
                ...project,
                project_completed: false
            }
        } else if (project.project_completed === 1) {
            return {
                ...project,
                project_completed: true
            }
        }
    })
    return projectMap;
}

function add(project) {
    const query = db('projects')
        .insert(project)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id)
                .first()
        })

    if (query.project_completed === 0) {
        return {
            ...query,
            project_completed: false
        }
    } else if (query.project_completed === 1) {
        return {
            ...query,
            project_completed: true
        }
    }
}

module.exports = {
    getAll,
    add
}
