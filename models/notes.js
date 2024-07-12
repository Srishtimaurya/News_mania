


const mongoose = require("mongoose");
const user = require("../models/user");
const NotesSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  
  notes: {
    type: String,
    required: true,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true,
},
}, {
  timestamps: true,
});

// const Notes = mongoose.model("Notes", NotesSchema);

// module.exports = Notes;
module.exports = mongoose.model("Note", NotesSchema);