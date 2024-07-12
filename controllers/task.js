

const Note = require('../models/notes.js');

const user = require('../models/user.js');
//const { ErrorHandler } = require('../middlewares/error.js');

const newNote = async (req, res, next) => {
    try {
        const { topic, notes } = req.body;
          
        console.log(req.body);
        if (!topic || !notes) {
            return res.status(400).send({ message: "Enter all details!" });
        }

        const notesVariable = {
            topic,
            notes,
            user: req.usr,
        };

        const note = await Note.create(notesVariable);
        res.status(201).json({
            success: true,
            note,
        });
    } 
    catch (error) {
        console.log(`Error message : ${error.message}`);
        return res.status(500).send({
            message: error.message
        });
    }
};

const getMyNotes = async (req, res, next) => {
    try {
        const userId = req.usr._id;
        const notes = await Note.find({ user: userId });
        res.status(200).json({
            success: true,
            count: notes.length,
            notes,
        });
    } 
    catch (error) {
        console.log(`Error message : ${error.message}`);
        return res.status(500).send({
            message: error.message
        });
    }
};



const getNoteById= async (req, res) => {
    try {
        //fetch data from database
        const { id } = req.params;
        console.log(`Received ID should be: ${id}`);
        const note = await Note.findById(id);
        return res.status(201).json(note);
 
    } 
    catch (error) {
        console.log(`Error message : ${error.message}`);
        return res.status(500).send({
            message: error.message
        });
    }
};
 

const updateNote = async (req, res) => {
    try {
        // Check if all required fields are provided
        if (!req.body.topic || !req.body.notes) {
            return res.status(400).send({
                message: 'Please provide both topic and notes'
            });
        }

        // Extract note id from request parameters
        const { id } = req.params;
        console.log(`update ka  ID should be: ${id}`);
        // Update the note using findByIdAndUpdate
        const result = await Note.findByIdAndUpdate(id, req.body);

        // Check if note with given id exists
        if (!result) {
            return res.status(404).json({
                message: 'Note not found'
            });
        }

        // Return success message upon successful update
        return res.status(200).send({
            message: 'Note updated successfully'
        });
    } catch (error) {
        console.error(`Error updating note: ${err.message}`);
        return res.status(500).send({
            message: err.message
        });
    }
};


const deleteNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(`Received ID: ${id}`);
        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({
                message: 'Note not found'
            });
        }

        await note.deleteOne();
        res.status(200).json({
            success: true,
            message: 'Note deleted successfully',
        });
    }
    catch (error) {
        console.log(`Error message : ${error.message}`);
        return res.status(500).send({
            message: error.message
        });
    }
};
 
 module.exports = { newNote, getMyNotes, getNoteById, updateNote, deleteNote };
//module.exports = { newNote, getMyNotes,  deleteNote };
