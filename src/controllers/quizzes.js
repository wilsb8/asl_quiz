const express = require('express')
const router = express.Router()
const { Quiz } = require('../models');
const bodyParser = require('body-parser')
const { isAuthenticated } = require('../middlewares/auth')


router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', isAuthenticated, async (req, res) => {
    const quizzes = await Quiz.findAll();
    res.render('quiz/index', { quizzes }) 
});

router.get('/new', isAuthenticated,  (req, res) => {
    res.render('quiz/create')
})

router.post('/', isAuthenticated, async (req, res) => {
    const { name } = req.body;
    const quiz = await Quiz.create({ name })
    res.redirect('/quizzes/' + quiz.id)
});

router.get('/:id', isAuthenticated,  async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.render('quiz/show', { quiz })
});

router.get('/:id/edit',isAuthenticated, async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.render('quiz/edit', { quiz })
});

router.post('/:id', isAuthenticated, async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const quiz = await Quiz.update({ name }, {
        where: { id }
    }); 
    res.redirect('/quizzes/' + id)
});

router.get('/:id/delete', isAuthenticated, async (req, res) => {
    const { id } = req.params;
     await Quiz.destroy({
         where: { id }
    })
    res.redirect('/quizzes')
});

module.exports = router;