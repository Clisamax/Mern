const userService = require("../services/user.services");

const create = async (req, res) => {
  const { name, username, email, avatar, password } = req.body;
  if (!name || !username || !email || !avatar || !password) {
    res.status(400).send({ message: "submit all fields for registration" });
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating User" });
  }

  res.status(201).send({
    message: "User create successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
    },
  });
};
module.exports = { create };
