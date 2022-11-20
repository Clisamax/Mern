const mongoose = require("mongoose");

const connectDataBase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(
      "mongodb+srv://Clisamax:Mka957351*@cluster0.rwynrd1.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDataBase;
