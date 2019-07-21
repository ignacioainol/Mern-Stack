const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req,res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNote = async (req,res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    });

    await newNote.save();
    res.json({message:'Note Created :D'});
}

notesCtrl.getNote = async (req,res) => {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.json(note);
}

notesCtrl.updateNote = async (req,res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id} ,{
        title,
        content,
        author
    });

    res.json({message: 'Updated'})
}

notesCtrl.deleteNote = async (req,res) => {
    const id = req.params.id;
    await Note.findByIdAndDelete(id);
    res.json({message: 'Deleted Note'});
}

module.exports = notesCtrl;