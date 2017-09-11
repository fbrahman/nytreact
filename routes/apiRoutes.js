const express = require ('express');

const controller = require('../controller/controller.js');

const router = express.Router();

router.get('/test', (req, res)=>{
    console.log('in test route');
    res.send("in api route");
});

module.exports = router;