const express = require('express')
const router = express.Router()
const { Quiz } = require('../models');
const bodyParser = require('body-parser')


router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', async (req, res) => {
    const quiz = await Quiz.findAll();
    res.render('quiz/index', {quiz})
});

router.get('/new', (req, res) => {
    res.render('quiz/create')
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    const { weight } = req.body;
    const quiz = await Quiz.create({name, weight})
    res.redirect('/quizzes' + quiz.id) 
});

router.get('/:id', async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.render('quiz/show', { quiz })
});

router.get('/:id/edit', async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.render('quiz/edit', { quiz })
});

router.post('/:id', async (req, res) => {
    const { name } = req.body;
    const { weight } = req.body;
    const { id } = req.params;
    const quiz = await Quiz.update({ name,weight }, {
        where: { id }
    }); 
    res.json(quiz)
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
     await Quiz.destroy({
         where: { id }
    })
    res.redirect('/quizzes')
});

module.exports = router;