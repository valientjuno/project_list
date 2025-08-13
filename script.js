let todoArray = [];
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = localStorage.getItem("todo");
  todoArray = todo ? JSON.parse(todo) : [];

  if (text.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  todoArray.push({ text: text.value.trim(), completed: false });
  text.value = "";

  saveTodos();
  displayTodo();
});

text.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});

function saveTodos() {
  localStorage.setItem("todo", JSON.stringify(todoArray));
}

function displayTodo() {
  let todo = localStorage.getItem("todo");
  todoArray = todo ? JSON.parse(todo) : [];

  // ✅ Move completed tasks to the bottom
  todoArray.sort((a, b) => a.completed - b.completed);

  let htmlCode = "";
  todoArray.forEach((item, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
          <p class='w-full font-bold ${
            item.completed ? "line-through text-green-400" : "text-white"
          }'>
            ${item.text}
          </p>
          <button onclick='toggleComplete(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white ${
      item.completed ? "bg-yellow-500" : "bg-blue-500"
    }'>
            ${item.completed ? "Undo" : "Complete"}
          </button>
          <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-green-600'>Edit</button>
          <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-red-500'>Delete</button>
       </div>`;
  });
  listBox.innerHTML = htmlCode;
}

function deleteTodo(ind) {
  todoArray.splice(ind, 1);
  saveTodos();
  displayTodo();
}

function edit(ind) {
  saveInd.value = ind;
  text.value = todoArray[ind].text;
  addTaskButton.style.display = "none";
  saveTaskButton.style.display = "block";
}

saveTaskButton.addEventListener("click", () => {
  let id = saveInd.value;

  if (text.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  todoArray[id].text = text.value.trim();
  saveTodos();

  text.value = "";
  addTaskButton.style.display = "block";
  saveTaskButton.style.display = "none";
  displayTodo();
});

function toggleComplete(ind) {
  todoArray[ind].completed = !todoArray[ind].completed;
  saveTodos();
  displayTodo();
}

window.addEventListener("DOMContentLoaded", displayTodo);
