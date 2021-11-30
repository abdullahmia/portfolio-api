const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

// Initilize the app
const app = express();


// Import Application Routes
const contactRoutes = require('./routes/contact');
const projectRoutes = require('./routes/project');


// Database connection
mongoose.connect(`mongodb+srv://abdullah:abdullah@portfolio.3ylnd.mongodb.net/PortfolioDatabase?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Database is connected');
    })
    .catch(error => console.log(error))


// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


// Application Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);


// Server Configuration
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is playing at ${port}`);
})