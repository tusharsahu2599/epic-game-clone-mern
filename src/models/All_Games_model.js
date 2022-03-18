const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({ 
    "id":{type:Number, required:true, unique:true},
    "title":{type:String, required:true},
    "strikeprice": {type:Number, required:true},
    "price": {type:Number, required:true},
    "thumbnail" : {type:String, required:true}, 
    "status" : {type:String, required:true},
    "short_description": {type:String, required:true},
    "description" : {type:String, required:true},
    "game_url" : {type:String, required:true},
    "genre" : {type:String, required:true},
    "platform" : {type:String, required:true},
    "publisher": {type:String, required:true},
    "developer" : {type:String, required:true},
    "release_date" : {type:String, required:true},
    "freetogame_profile_url" :{type:String, required:true},
},{
    "versionKey": false, timestamps:true
    })

module.exports =  mongoose.model('All_Games',GameSchema)

