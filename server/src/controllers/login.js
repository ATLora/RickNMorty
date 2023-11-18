const users = require("../utils/users");

const Login = (req, res) => {
  const { email, password } = req.query;
  const access = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      access = true;
    }
    res.json(access);
  });
};

module.exports = Login;
