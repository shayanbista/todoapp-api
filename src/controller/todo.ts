import { Request } from "express";
import { Response } from "express";
import * as todoService from "../service/todo";

export const addTask = (req: Request, res: Response) => {
  const newTask = req.body;
  const task = todoService.addTask(newTask);
  res.json({
    status: task.status,
    message: task.message,
  });
};

export const getTasks = (req: Request, res: Response) => {
  const newTask = req.body;
  const task = todoService.getTasks();
  res.json({
    status: task.status,
    message: task.message,
  });
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const exisitingTask = todoService.updateTask(Number(id), data);
  res.json(exisitingTask);
};
