
const path = require('path');



module.exports = (app) => {

 
  // return notes file
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
  });

  // return index file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  })
};