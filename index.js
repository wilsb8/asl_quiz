const express = require('express');
const app = express();
const quizzesCtrl = require('./src/controllers/quizzes');
const questCtrl = require('./src/controllers/questions');
const choiceCtrl = require('./src/controllers/choices');
const { Quiz } = require('./src/models');

app.set('views', __dirname = './src/views')
app.set('view engine', 'twig')

// GET /products HTTP/1.1
app.get('/', async (req, res) => {
    const quiz = await Quiz.findByPk(1)
    res.render('home/home', {quiz});
});

app.use('/quizzes', quizzesCtrl);
app.use('/questions', questCtrl);
app.use('/choices', choiceCtrl);




app.listen(3000);