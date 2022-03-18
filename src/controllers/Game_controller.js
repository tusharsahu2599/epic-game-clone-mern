const express = require('express'); 
const router = express.Router(); // have all the crud functionalities

const Games =  require('../models/All_Games_model');

router.get('', async (req,res)=>{
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 10;
        var offset = (page-1) * size;
        
        //console.log(req.query.title || req.query.genre || req.query.platform)
        let All_Games;
        if (req.query.title || req.query.genre || req.query.platform){
             All_Games = await Games.find({$or:[{"title": req.query.title},{"genre": req.query.genre},{"platform": req.query.platform}]}).skip(offset).limit(size).lean().exec();
             
        }
        else {
            All_Games = await Games.find().skip(offset).limit(size).lean().exec();
            //console.log(All_Games)
        }
        
        //console.log(totalpages)
        res.status(200).send(All_Games);
    } catch (error) {
        res.send(error.message);
    }
})

router.get('/:id', async (req,res)=>{
    try {
        const gameId = req.params.id;
        console.log(gameId)
        const All_Games = await Games.find({"id" : gameId}).lean().exec();
        res.status(200).send(All_Games);
    } catch (error) {
        
    }
})

router.patch('/:id',async (req,res) => {
    try {
        const All_Games = await Games.findByIdAndUpdate(req.params.id,
            req.body,
            {
                new:true,
            }
            )
            .lean().exec();
            return res.status(201).send(All_Games);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const All_Games = await Games.findByIdAndDelete(req.params.id);
        
        return res.status(201).send(All_Games);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})


module.exports =router;
