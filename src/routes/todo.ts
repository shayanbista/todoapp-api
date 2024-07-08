import { Router } from "express";
import { addTask, getTasks } from "../controller/todo";
const todo_router = Router();

todo_router.post("/", addTask);
todo_router.get("/", getTasks);

export default todo_router;
