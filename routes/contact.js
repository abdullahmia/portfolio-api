const express = require('express');
const router = express.Router();


const {createContact} = require('../controllers/contact');


// Create a contact
router.post('/create', createContact);

module.exports = router;