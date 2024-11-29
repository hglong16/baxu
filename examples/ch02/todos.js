console.log("Hello, world!");
const todos = ["Buy a new phone", "Learn JavaScript", "Go to the gym"];

const addTodoInput = document.getElementById("input-todo");
const addTodoButton = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todos-list");

for (const todo of todos) {
  todoList.append(renderTodoInReadMode(todo));
}

addTodoInput.addEventListener("input", function (event) {
  addTodoButton.disabled = addTodoInput.value.length > 3 ? false : true;
});

addTodoInput.addEventListener("keydown", function (event) {
  if (
    (event.key === "Enter" || event.key === "Return") &&
    addTodoInput.value.length > 3
  ) {
    addTodo();
  }
});

addTodoButton.addEventListener("click", function () {
  if (addTodoInput.value.length > 3) {
    addTodo();
  }
});

function addTodo() {
  const todoText = addTodoInput.value;
  todos.push(todoText);
  addTodoInput.value = "";
  addTodoButton.disabled = true;
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";
  for (const todo of todos) {
    todoList.append(renderTodoInReadMode(todo));
  }
}

function renderTodoInReadMode(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = todo;
  span.addEventListener("dblclick", () => {
    const idx = todos.indexOf(todo);
    todoList.replaceChild(renderTodoInEditMode(todo), todoList.children[idx]);
  });
  li.append(span);

  const button = document.createElement("button");
  button.textContent = "Done";
  button.addEventListener("click", () => {
    const idx = todos.indexOf(todo);
    removeTodo(idx);
  });
  li.append(button);
  return li;
}

const renderTodoInEditMode = (todo) => {
  const input = document.createElement("input");
  input.value = todo;
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === "Return") {
      const idx = todos.indexOf(todo);
      todos[idx] = input.value;
      renderTodos();
    }
  });

  const li = document.createElement("li");
  li.append(input);
  return li;
};

const removeTodo = (idx) => {
  todos.splice(idx, 1);
  renderTodos();
};
