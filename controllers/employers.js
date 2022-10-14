const express = require('express')
const router = express.Router()
const Employer = require('../models/employer')

// GET: /employers => show all employers
router.get('/', (req, res) => {
    Employer.find((err, employers) => {
        if (err) {
            console.log(err);
        } else {
            res.render('employers/index'), {
                title: 'Employers', 
                employers: employers
            }
        }
    })
})

// GET: /employers/create => display blank form
router.get('/create', (req, res) => {
    res.render('employers/create', { 
        title: 'Add Employer'
    })
})

// POST: /employers/create => save new employer doc from form body
router.post('/create', (req, res) => {
    Employer.create(req.body, (err, newEmployer) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/employers')
        }
    })
})

module.exports = router