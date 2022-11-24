import User from "../models/User.js";

const createService = (body) => create(body);

const findAllService = () => find();

const findByIdService = (id) => findById(id);

const updateService = (id, name, username, email, password, avatar) =>
  findByIdAndUpdate(
    { _id: id },
    { id, name, username, email, password, avatar }
  );

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
