// const express = require('express'); 
// const router = express.Router();
// const User = require('../models/user.model');
// const path = require('path');
// const upload = require('../middlewares/file-uploads');

// console.log(upload.single(),"upload")

// const crudController = require('./crud.controller');

// router.get('',crudController(User).get)

// router.patch('/:id',crudController(User).patch)

// router.post('',crudController(User).post)

// router.delete('/:id',crudController(User).deleteOne)

// router.post('/upload', upload.single("pic"), async(req, res) => {

//     try{
//         req.body.pic = req.file.path
//         const user = await User.create(req.body)
//         res.send(req.file.path)
//     }
//     catch(err){console.log(err.message); res.send(err.message)}
// })

// module.exports =router;






const express = require("express");

const User = require("../models/user.model")

const router = express.Router();


router.get("", async (req, res) => {
    try {
        const user  = await User.find().lean().exec();

        return res.send(user)
    }
    catch (err) {
        return res.send(err)
    }
})

module.exports = router;







