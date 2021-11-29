const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
    const newContact = new Contact(req.body);
    await newContact.save(error => {
        if(error){
            res.status(500).json({
                message: "There was a server side error"
            })
        }
        res.status(200).json({
            message: "Message sent successfully"
        })
    })
}