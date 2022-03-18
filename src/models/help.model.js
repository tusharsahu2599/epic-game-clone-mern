const mongoose = require("mongoose");

const helpSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    subject: {type: String, required: true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



module.exports = mongoose.model("help", helpSchema);
