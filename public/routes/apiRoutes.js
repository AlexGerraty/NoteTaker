const path = require('path');
const fs = require('fs')
var uniqid = require('uniqid');



module.exports = (app) => {

  // GET /api/notes 
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'))
  });


  
  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    // creating body context
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      // creating unique id for each note
      id: uniqid(),
    };
    // Created note pushed into json file
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

  });


  // DELETE /api/notes/:id 
  app.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
    
  })
};