import { Router } from "express";
import { addTask, getTasks, updateTask, deleteTask } from "../controller/todo";

const todoRouter = Router();
todoRouter.post("/", addTask);
todoRouter.get("/", getTasks);
todoRouter.put("/:id", updateTask);
todoRouter.delete("/:id", deleteTask);

export default todoRouter;
