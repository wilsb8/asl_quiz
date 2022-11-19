const express = require('express')
const router = express.Router()
const request = require('request')
const queryString = require('querystring')
 
router.get('/login', (req, res) => {
    res.render('auth/login')
});

router.get('/callback', async (req, res) => {
    const { code } = req.query
    await request({
        uri: 'https://github.com/login/oauth/access_token',
        qs: {
            client_id: "486c23c454bf9511ecfc",
            client_secret: "705959a50aab44a6d269020ad6e1b35f14c1a802",
            code
        }
    }, async (error, response, body) => {
        const { access_token } = queryString.parse(body)
        req.session.access_token = access_token
        res.redirect('/')
    })
})


module.exports = router
