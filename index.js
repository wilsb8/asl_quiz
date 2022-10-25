const express = require('express');
const app = express();
const quizzesCtrl = require('./src/controllers/quizzes');

// GET /products HTTP/1.1
app.get('/', (req, res) =>  {
    res.send('Home Page');
});

app.use('/quizzes', quizzesCtrl);



app.listen(3000);