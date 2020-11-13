const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("./config.js");

const generateJwtToken = () => {
  const expiresIn = "1d";
  const tokenObj = { token_type: "Bearer", expiresIn };
  const access_token = jwt.sign({ api: "auth", type: "token", user: "abhinav_ankur" }, config.JWT_SECRET, {
    expiresIn,
  });
  tokenObj.access_token = access_token;
  return tokenObj;
};

const decodeJwtToken = (token) => {
  token = token.trim();
  return jwt.verify(token, config.JWT_SECRET);
};

const encryptPassword = (pwd) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pwd, salt);
};

const comaprePassword = (pwd, hashPwd) => {
  return bcrypt.compareSync(pwd, hashPwd);
};

module.exports = { generateJwtToken, decodeJwtToken, encryptPassword, comaprePassword };
