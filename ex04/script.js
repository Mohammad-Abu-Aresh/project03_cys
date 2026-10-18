const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const taskCountElement = document.getElementById("task-count");

let totalTasks = 0;

function updateTaskCounter() {
    taskCountElement.textContent = totalTasks;
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        return;
    }

    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = text;

    taskSpan.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
        totalTasks--;
        updateTaskCounter();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    totalTasks++;
    updateTaskCounter();

    taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
