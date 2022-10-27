const express = require('express');
const router = express.Router();
let choices = require('../models/choices');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', (req, res) => {
    res.json(choices)
});

router.post('/', (req, res) => {
    const { id, name} = req.body;
    choices.push({
        id: Number(id),
        name
    });
    res.json(choices)
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const ch = choices.find(c => c.id == id);
    res.json(ch);
});

router.post('/:id', (req, res) => {
    const id = Number(req.params.id);
    const qtn = choices.find(q => q.id == id);
    choices.map((c) => {
        if (id === c.id) {
            q.name = req.body.name;
        }
        return c;
    });
    res.json(choices)
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    choices = choices.filter(c => c.id !== id);
    res.json(choices);
});

module.exports = router;