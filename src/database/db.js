import { connect } from "mongoose";

const connectDataBase = () => {
  console.log("Wait connecting to the database");

  connect(process.env.MONGODB_URI, {//monbodb_uri é uma variavel de ambiente
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDataBase;
