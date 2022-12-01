import { Router } from "express";
const router = Router();

import { create, findAll } from "../controllers/news.controller.js";
import { authMidleware } from "../middlewares/auth.middleware.js";

router.post("/", authMidleware, create);
router.get("/", findAll);

export default router;
