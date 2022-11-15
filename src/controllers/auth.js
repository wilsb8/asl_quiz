const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('auth/login')
});

router.get('/callback', (req, res) => {
    console.log(req.query)
});


module.exports = router
