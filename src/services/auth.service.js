import User from "../models/User.js";
import jwt from "jsonwebtoken";

const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

const generateToken = (id) =>
  jwt.sign({ id: id}, process.env.SECRET_JWT, { expiresIn: 86400 }); // secret_jwt é uma variavel de ambiente

export { loginService, generateToken };
