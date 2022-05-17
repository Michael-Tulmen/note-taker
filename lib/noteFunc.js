const { del } = require('express/lib/application');
const fs = require('fs');
const path = require('path');


//functions that will be related to the database as well as referenced in the other
//files notably in the routes

//creation function that adds to the body of the notes and writes to the notes array
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray}, null, 2))
    return note;
}
//deletion function that looks at the notes array searches for an ID and deletes it updating the id values of the array per deletion
function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);
    //in retrospect what can be done here instead of the loop is adding variable ID's instead but this would require me to use SQL 
    for(let i = deleteID; i<notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray}, null, 2)
    )
}
//for use in other files
module.exports = {createNote,deleteNote};
