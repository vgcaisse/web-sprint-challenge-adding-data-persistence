// build your `Project` model here
const db = require('../../data/dbConfig');

const getAll = () => {
    return db('projects');
}

function add(project) {
    const query = db('projects')
        .insert(project)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id)
                .first()
        })
    console.log(query);
    if (query.project_completed === 0) {

        return {
            ...query,
            project_completed: false
        }
    } else {
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
