const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String, select: false },
  image: { type: String },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
