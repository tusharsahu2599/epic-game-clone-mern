const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
            countryName : { type: String, required: true, default : "india"},
            firstName : { type: String, required: true},
            lastName : { type: String, required: true, default : "sahu"},
            email : { type: String, required: true, unique: true},
            displayName : { type: String, required:true, default:"tk123"},
            password : { type: String, required: true}

    },
    {
        timestamps : true, 
        versionKey : false
    }
);


userSchema.pre("save", function (next) {

    if(!this.isModified("password")) return next();

    var hash = bcrypt.hashSync(this.password, 2);
    this.password = hash;
    return next();  
});

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model("user", userSchema);

module.exports = User;