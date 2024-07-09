import { Router } from "express";
import todoRouter from "./todo";
const router = Router();

router.use("/todo", todoRouter);

export default router;
