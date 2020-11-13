const { encryptPassword } = require("./utils");

const signUp = (req, res, next) => {
  try {
    let { name, email, password } = JSON.parse(req.body.data);
    if (!name || !email || !password) {
      throw new Error("Missing Parameters");
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new Error("Invalid email");
    }
    req.body = { name, email, password: encryptPassword(password) };
    next();
  } catch (err) {
    return res.status(401).send({ error: { message: err.message, code: err.code } });
  }
};

module.exports = { signUpMiddleware: signUp };
