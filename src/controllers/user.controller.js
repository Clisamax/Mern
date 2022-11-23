const userService = require("../services/user.services");

const create = async (req, res) => {
  const { name, username, email, avatar, password } = req.body;
  if (!name || !username || !email || !avatar || !password) {
    res.status(400).send({ message: "submit all fields for registration" });
  }

  const user = await userService.createService(req.body);

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

const findAllUsers = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "There are no registered users" });
  }
  res.send(users);
};

const findById = async (req, res) => {
  const user = req.user;

  res.send(user);
};

const update = async (req, res) => {
  const { name, username, email, avatar, password } = req.body;
  if (!name && !username && !email && !avatar && !password) {
    res.status(400).send({ message: "submit at least one field for update" });
  }

  const { id, /*user*/} = req;

  const user = await userService.findByIdService(id);

  await userService.updateService(id, name, username, email, password, avatar);

  res.send({ message: "user successfully update" });
};

module.exports = { create, findAllUsers, findById, update };
