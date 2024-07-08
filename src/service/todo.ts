import { Tasklist } from "../interfaces/tasklist";
import { TODO } from "../interfaces/todo";
import * as todoModel from "../model/todo";

export const addTask = (newTask: TODO) => {
  const task = todoModel.addTask(newTask);
  return task;
};

export const getTasks = () => {
  const task = todoModel.getTasks();
  return task;
};
