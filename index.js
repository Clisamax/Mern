import express from "express";
import * as dotenv from 'dotenv'
import connectDataBase from "./src/database/db.js";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";


dotenv.config()

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

connectDataBase();

app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
