const express = require('express');

const app = express();

// creating port
const PORT = process.env.PORT || 3001;


// asks express to create a route for files in the public folder 
app.use(express.static('public'));

// sets up express app to handle data,
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes 
require('./public/routes/apiRoutes')(app);
require('./public/routes/htmlRoutes')(app);


// app listener 
app.listen(PORT, () => {
  console.log(`Server available at ${PORT}`);
});