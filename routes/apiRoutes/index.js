//purpose of this being in a secondary file is to act as somewhat of a preconditioning to noteRoutes
//precursor to feed routes
const router = require('express').Router();
const notesRoutes = require('./noteRoutes')
router.use(notesRoutes);
module.exports = router;