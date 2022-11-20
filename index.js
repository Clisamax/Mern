const express = require("express");
const userRoute = require("./src/routes/user.route");

const app = express();

app.use("/user", userRoute);

const port = 3000;

app.use(express.json());

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
