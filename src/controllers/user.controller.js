import userService from "../services/user.service.js"

const create = async (req, res) => {
  try { // garantindo que todos os campos sejam preenchidos.
    const { name, username, email, avatar, password } = req.body;
    if (!name || !username || !email || !avatar || !password) {
      res.status(400).send({ message: "submit all fields for registration" });
    }
   

    const user = await userService.createService(req.body);

    if (!user) {// verifica a existencia do usuario.
      return res.status(400).send({ message: "Error creating User" });
    }
      //creando novo usuario
    res.status(201).send({
      message: "User create successfully",
      user: {
        id: user._id, // atrelando id do mongodb
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
// buscando por todos os  usuario
const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.length === 0) { // se não houver usuario cadastrado
      return res.status(400).send({ message: "There are no registered users" });
    }
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const findById = async (req, res) => {
  try { // buscando usuario pelo id
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
// alterar info de user existente
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
export default  { create, findAllUsers, findById, update };
