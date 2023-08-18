import Task from "./task.js";
import UI from "./ui.js";

const ui = new UI();

document.querySelector(".AddTaskBtn").addEventListener("click", (e) => {
  const addTask = document.querySelector("#newtaskID").value;

  if (addTask.length > 0) {
    const task = new Task(addTask);
    ui.addToUI(task);
    ui.resetForm();
  }
});

document.querySelector(".task-list").addEventListener("click", (e) => {
  if (e.target.className.includes("task__op_delete")) {
    ui.deleteTask(e);
  }

  if (e.target.className.includes("task-check")) {
    ui.completeTask(e);
  }
});
