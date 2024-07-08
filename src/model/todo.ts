import { TODO } from "../interfaces/todo";
import { Tasklist } from "../interfaces/tasklist";

export const taskList: Tasklist = [];

// export const addTask = (newTask: TODO) => {
//   const task = {
//     id: tasklist.length + 1,
//     taskName: newTask.taskName,
//     createdAt: new Date(),
//     isCompleted: false,
//     deletedAt: null,
//   };
//   tasklist.push(task);
//   return tasklist;
// };

// export const getTasks = () => {
//   console.log(tasklist);
//   return tasklist;
// };

// export const updateTask = (id: number, updatedData: TODO) => {
//   if (tasklist.length !== 0) {
//     const index = tasklist.findIndex((task) => task.id === id);
//     if (index !== -1) {
//       console.log("updated data", updatedData);
//       tasklist[index] = { ...tasklist[index], ...updatedData };
//       console.log("updatelist", tasklist);
//       return "Task updated successfully";
//     } else {
//       return "Task with given ID not found";
//     }
//   } else {
//     return "tasklist is empty";
//   }
// };
