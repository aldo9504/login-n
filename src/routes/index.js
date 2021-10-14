const express= require('express');
const router = express.Router();


router.get('/' , (req,res) => {
    res.render('index.html', { title: 'login'});
   
});

router.get('/contact' , (req,res) => {
    res.render('contact.html', { title: 'contactame'});
   
});

module.exports = router;
