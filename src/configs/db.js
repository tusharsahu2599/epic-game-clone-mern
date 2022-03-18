require("dotenv").config();
console.log(process.env.MONGOOSE_PASSWORD)
const mongoose = require("mongoose");


const connect = ()=>{
    return mongoose.connect(`mongodb+srv://epic_games:${process.env.MONGOOSE_PASSWORD}@cluster0.vdtmk.mongodb.net/myFirstDatabase
    ?retryWrites=true&w=majority`)
    // return mongoose.connect("mongodb://localhost:27017/epicRegister")

}

module.exports = connect;