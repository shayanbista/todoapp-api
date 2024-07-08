import { Router } from "express";
import { addTask } from "../controller/todo";
const todo_router = Router();

todo_router.get("/", addTask);

export default todo_router;
