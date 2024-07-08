import { Request } from "express";
import { Response } from "express";
import * as todoService from "../service/todo";

export const addTask = (req: Request, res: Response) => {
  const newTask = req.body;
  const task = todoService.addTask(newTask);
  res.json({
    status: 201,
    message: "successful",
    data: task,
  });
};

export const getTasks = (req: Request, res: Response) => {
  const newTask = req.body;
  console.log("newtask", newTask);
  const task = todoService.getTasks();
  res.json({
    status: 200,
    message: "successful",
    data: task,
  });
};
