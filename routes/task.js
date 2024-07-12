// const express = require("express");
// import {newNote,getMyNotes,getNoteById,updateNote,deleteNote} from "../controllers/task.js"
// import {isauthenticated} from "../middlewares/auth.js";


// const router=express.Router();

// router.post('/notes', isauthenticated, newNote);
// router.get('/notes', isauthenticated, getMyNotes);
// router.get('/notes/:id', isauthenticated, getNoteById);
// router.put('/notes/:id', isauthenticated, updateNote);
// router.delete('/notes/:id', isauthenticated, deleteNote);

// export default router;


const express = require("express");
const { isauthenticated } = require("../middlewares/auth.js");
const { newNote, getMyNotes, getNoteById, updateNote, deleteNote } = require("../controllers/task.js");
//const { newNote, getMyNotes, deleteNote } = require("../controllers/task.js");
const Note = require('../models/notes.js');
const router = express.Router();

router.post('/notes', isauthenticated, newNote);
router.get('/notes', isauthenticated, getMyNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id',  updateNote);

router.delete('/notes/:id', isauthenticated, deleteNote);



module.exports = router;
