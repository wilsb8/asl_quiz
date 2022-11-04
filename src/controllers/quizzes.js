const express = require('express')
const router = express.Router()
const { Quiz } = require('../models');
const bodyParser = require('body-parser')


router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', async (req, res) => {
    const quiz = await Quiz.findAll();
    res.json(quiz)
});

router.post('/', async (req, res) => {
    const { name } = req.body;
    const { weight } = req.body;
    const quiz = await Quiz.create({name, weight})
    res.json(quiz)
});

router.get('/:id', async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.json(quiz);
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