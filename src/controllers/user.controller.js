import userService from "../services/user.services.js"

const create = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res.status(400).send({ message: "There are no registered users" });
    }
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const findById = async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, avatar, password } = req.body;
    if (!name && !username && !email && !avatar && !password) {
      res.status(400).send({ message: "submit at least one field for update" });
    }

    const { id } = req;

    const user = await userService.findByIdService(id);

    await userService.updateService(
      id,
      name,
      username,
      email,
      password,
      avatar
    );

    res.send({ message: "user successfully update" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
  
};
export default { create, findAllUsers, findById, update };
