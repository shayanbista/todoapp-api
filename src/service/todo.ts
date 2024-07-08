import { TODO } from "../interfaces/todo";
import * as todoModel from "../model/todo";

import { taskList } from "../model/todo";

export const addTask = (newTask: TODO) => {
  const task = {
    id: taskList.length + 1,
    taskName: newTask.taskName,
    createdAt: new Date(),
    isCompleted: false,
    deletedAt: null,
  };
  taskList.push(task);
  return { status: 201, message: "Task added successfully" };
};

export const getTasks = () => {
  return { status: 200, message: taskList };
};

export const updateTask = (id: number, updatedData: TODO) => {
  let updated = false;
  if (taskList.length !== 0) {
    const index = taskList.findIndex((task) => task.id === id);
    if (index !== -1) {
      taskList[index] = { ...taskList[index], ...updatedData };
      updated = true;
      return { status: 201, message: "Updated Successfully!" };
    } else {
      return { status: 404, message: "Task with given ID not found" };
    }
  } else {
    updated = false;
    return { status: 400, message: "list is empty" };
  }
};
