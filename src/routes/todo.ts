import { Router } from "express";
import { addTask, getTasks, updateTask } from "../controller/todo";
const todo_router = Router();

todo_router.post("/", addTask);
todo_router.get("/", getTasks);
todo_router.put("/:id", updateTask);

export default todo_router;
