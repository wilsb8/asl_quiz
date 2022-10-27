const express = require('express');
const app = express();
const quizzesCtrl = require('./src/controllers/quizzes');
const questCtrl = require('./src/controllers/questions');
const choiceCtrl = require('./src/controllers/choices');


// GET /products HTTP/1.1
app.get('/', (req, res) =>  {
    res.send('<h1>Home Page</h1>');
});

app.use('/quizzes', quizzesCtrl);
app.use('/questions', questCtrl);
app.use('/choices', choiceCtrl);




app.listen(3000);