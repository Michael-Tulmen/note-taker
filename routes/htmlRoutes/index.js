const path = require('path');
const router = require('express').Router();
//this is the main endpoint where the notes will come from
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
//catchall
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
module.exports = router;