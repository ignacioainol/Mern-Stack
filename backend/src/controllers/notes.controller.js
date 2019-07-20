const notesCtrl = {};

notesCtrl.getNotes = (req,res) => res.json({ message: "sending a note :D" });

notesCtrl.createNote = (req,res) => res.json({message:'Note Created'});

notesCtrl.getNote = (req,res) => res.json({message: "Get one note"});

notesCtrl.updateNote = (req,res) => res.json({message: 'Updated Note'});

notesCtrl.deleteNote = (req,res) => res.json({message: 'Deleted Note'});

module.exports = notesCtrl;