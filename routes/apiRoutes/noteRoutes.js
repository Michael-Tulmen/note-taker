const router = require('express').Router();
const res = require('express/lib/response');
const {notes} = require('../../db/db.json');
const {createNote,deleteNote} = require('../../lib/noteFunc');

router.get('/notes', (req,res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();
    let note = createNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req,res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;