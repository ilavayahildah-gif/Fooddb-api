const express = require('express')

const router= express.Router()

router.get('/', (req, res) =>{
    res.send('User List')
})

router.get('/new',(req, res) =>{
    res.send('User New Form')
})

router.post('/',(req, res) =>{
    res.send('Create user')
})

router.get('/:userId',(req, res) =>{
    res.send('Get user with id ${req.params.userId}')
})

module.exports = router