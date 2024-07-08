import { TODO } from "../interfaces/todo";
import { Tasklist } from "../interfaces/tasklist";

const tasklist: Tasklist = [];

export const addTask = (newTask: TODO) => {
  const task = {
    id: tasklist.length + 1,
    taskName: newTask.taskName,
    createdAt: new Date(),
    isCompleted: false,
    deletedAt: null,
  };
  tasklist.push(task);
  return tasklist;
};
