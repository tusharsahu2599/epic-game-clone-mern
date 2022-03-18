const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const connect = require("./configs/db")
const GameCRUD = require("./controllers/Game_controller");
const helpCRUD = require("./controllers/help.controller")
const {register, login} = require("./controllers/auth.controller")
const userController = require("./controllers/user.controller")
const path = require("path")

const PORT = process.env.PORT || 3000;
var cors = require('cors');
app.use(cors())

app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,  "../index.html"));
})

console.log(path.join(__dirname,  "../index.html"))


app.use(express.json());

// Tushar's Code-------------------------

app.post("/register", register);

app.post("/login",login);

// -------------------------

app.use("/games", GameCRUD);
app.use("/help", helpCRUD);
app.use("/users", userController);

app.listen(PORT, async()=>{
    try {
        await connect();
    } catch (error) {
     console.log(error.message)   
    }
    console.log(`Listening on port ${PORT}`);
})