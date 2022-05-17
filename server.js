const exp = require('constants');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//purpose: accept string or array for below
app.use(express.urlencoded({ extended: true }));
//purpose: makes files available for fs without server endpoint
app.use(express.static('public'));
//purpose: express to display
app.use(express.json());
//purpose: link to api endpoint
app.use('/api', apiRoutes);
//purpose: link to htmlroutes folder
app.use('/', htmlRoutes);
//this is how app will connect to port
app.listen(PORT, () => {
    console.log(`Successfully connected to port ${PORT}`);
});