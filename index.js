const express = require('express');
const app = express();
const quizzesCtrl = require('./src/controllers/quizzes');
const questCtrl = require('./src/controllers/questions');
const choiceCtrl = require('./src/controllers/choices');
const authCtrl = require('./src/controllers/auth')
const { Quiz } = require('./src/models');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { response } = require('express');

app.use(session({
    saveUninitialized: false,
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
}))

// handle CORS
app.use(cors())
// middelware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', __dirname = './src/views')
app.set('view engine', 'twig')




app.get('/', (req, res, next) => {
    res.render('home/home')
})

app.use('/quizzes', quizzesCtrl);
app.use('/questions', questCtrl);
app.use('/choices', choiceCtrl);
app.use('/auth', authCtrl)




app.listen(4000);
console.log("👂 on port 4000");