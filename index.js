const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const completedList = document.getElementById("completedList");

todoInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && todoInput.value.trim() !== "") {
    addTodo(todoInput.value);
    todoInput.value = "";
  }
});

function addTodo(task) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${task}</span>
        <button class="complete-btn">완료</button>
    `;
  li.querySelector(".complete-btn").addEventListener("click", function () {
    moveToCompleted(li);
  });
  todoList.appendChild(li);
}

function moveToCompleted(todoItem) {
  const completedTask = todoItem.querySelector("span").textContent;
  todoItem.remove();

  const li = document.createElement("li");
  li.innerHTML = `
        <span class="completed">${completedTask}</span>
        <button class="delete-btn">삭제</button>
    `;
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  });
  completedList.appendChild(li);
}
