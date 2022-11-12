const express = require('express')
const router = express.Router()
const { Question } = require('../models');
const bodyParser = require('body-parser')


router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', async (req, res) => {
    const questions = await Question.findAll();
    res.render('question/index', { questions }) 
});

router.get('/new', (req, res) => {
    res.render('question/create')
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    const question = await Question.create({ name })
    res.redirect('/questions/' + question.id)
});

router.get('/:id', async (req, res) => {
    const question = await Question.findByPk(req.params.id)
    res.render('question/show', { question })
});

router.get('/:id/edit', async (req, res) => {
    const question = await Question.findByPk(req.params.id)
    res.render('question/edit', { question })
});

router.post('/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const question = await Question.update({ name }, {
        where: { id }
    }); 
    res.redirect('/questions/' + id)
});

router.get('/:id/delete', async (req, res) => {
    const { id } = req.params;
     await Question.destroy({
         where: { id }
    })
    res.redirect('/questions')
});

module.exports = router;