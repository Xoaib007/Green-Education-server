const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');
const courses = require('./Data/Courses.json')

app.use(cors());
app.get('/', (req, res) => {
    res.send('Running.....')
  });

app.get('/all-courses', (req, res) =>{
   res.send(courses) 
})

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
  })