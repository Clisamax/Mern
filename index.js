const express = require("express");
const userRoute = require("./src/routes/user.route");
const connectDataBase = require("./src/database/db")

const app = express();

const port = 3000;

app.use(express.json())

connectDataBase()

app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
