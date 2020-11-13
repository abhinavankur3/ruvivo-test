const UserModel = require("../models/user.model");
const _ = require("lodash");

const signup = async (req, res) => {
  try {
    const { path: filePath } = req.file || {};
    let { name, email, password } = req.body;
    const objToSave = { name, email, password };
    if (filePath) {
      objToSave.image = filePath;
    }
    const result = await UserModel.create(objToSave);
    res.status(200).send(_.pick(result, ["_id", "name", "email", "image"]));
  } catch (err) {
    console.log("ERROR", err.code, err.message);
    res.status((err.code && err.code < 510) || 500).send({ error: err.message, code: err.codes });
  }
};

module.exports = { signup };
