import { connect } from "mongoose";

const connectDataBase = () => {
  console.log("Wait connecting to the database");

  connect(
      "mongodb+srv://Clisamax:Mka957351*@cluster0.rwynrd1.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDataBase;
