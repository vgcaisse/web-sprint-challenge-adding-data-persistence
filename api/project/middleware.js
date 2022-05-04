// const validateProjectData = async (req, res, next) => {
//     const { project_name, project_completed } = req.body;

//     if (!project_name) {
//         res.status(400).json({
//             message: 'Project must have a name'
//         })
//     } else if (!project_completed || project_completed == null) {
//         res.status(400).json({
//             message: 'project_completed must have a true or false value'
//         })
//     } else {
//         next();
//     }
// };

// module.exports = {
//     validateProjectData,
// };


//this middleware causes nothing but trouble