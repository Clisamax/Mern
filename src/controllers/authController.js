import bcrypt from "bcrypt";
import { loginService, generateToken } from "../services/auth.service.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email);

    if (!user) {
      return res.status(404).send({ message: "Password or User not found" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    console.log(passwordIsValid);

    if (!passwordIsValid) {
      return res.status(404).send({ message: "Password or User not found" });
    }

    const token = generateToken(user.id);

    res.send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { login };
