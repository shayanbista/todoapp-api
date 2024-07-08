import { Router } from "express";
import todo_router from "./todo";
const router = Router();

router.use("/todo", todo_router);

export default router;
