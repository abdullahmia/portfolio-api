const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    codelink: {
        type: String,
        required: true
    },
    livelink: {
        type: String,
        required: true
    },
    technology: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true} );

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;