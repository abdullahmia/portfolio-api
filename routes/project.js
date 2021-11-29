const express = require('express');
const router = express.Router();


const {createProject, getAllProjects} = require('../controllers/project');

router.post('/create', createProject);
router.get('/', getAllProjects);

module.exports = router;