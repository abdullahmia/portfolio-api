const Project = require('../models/project');


exports.createProject = async (req, res) => {
    const addProject = new Project(req.body);
    await addProject.save((error) => {
        if(error){
            res.status(500).json({
                message: "There was server side error"
            })
        }
        res.status(200).json({
            message: "Proect added"
        })
    })
}

exports.getAllProjects = async (req, res) => {
    await Project.find({}, (error, projects) => {
        if(error) {
            res.status(500).json({
                message: "There was server side error"
            })
        }
        res.status(200).json({
            projects
        })
    })
}