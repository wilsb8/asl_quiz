const express = require('express');
const app = express();
const quizzesCtrl = require('./src/controllers/quizzes');
const questCtrl = require('./src/controllers/questions');

// GET /products HTTP/1.1
app.get('/', (req, res) =>  {
    res.send('Home Page');
});

app.use('/quizzes', quizzesCtrl);
app.use('/questions', questCtrl);



app.listen(3000);