// Get the todo list and form elements
const todoList = document.getElementById('todo-list');
const addTodoForm = document.getElementById('add-todo-form');
const todoInput = document.getElementById('todo-input');

// Initialize an empty todo list
let todos = [];

// Function to render the todo list
function renderTodoList() {
  // Clear the todo list element
  todoList.innerHTML = '';

  // Loop through the todo list and render each item
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.textContent = todo.text;
    todoItem.dataset.index = index;

    // Add a checkbox to mark the todo item as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      // Update the todo item's completed status
      todos[index].completed = checkbox.checked;
      renderTodoList();
    });
    todoItem.appendChild(checkbox);

    // Add a delete button to remove the todo item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      // Remove the todo item from the list
      todos.splice(index, 1);
      renderTodoList();
    });
    todoItem.appendChild(deleteButton);

    // Add the todo item to the list
    todoList.appendChild(todoItem);

    // Add a fade-in animation to the todo item
    todoItem.classList.add('fade-in');
  });
}

// Function to add a new todo item
function addTodo(text) {
  // Create a new todo item object
  const todo = {
    text,
    completed: false
  };

  // Add the todo item to the list
  todos.push(todo);

  // Render the updated todo list
  renderTodoList();
}

// Event listener for the add todo form
addTodoForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the text from the todo input field
  const text = todoInput.value.trim();

  // Check if the text is not empty
  if (text) {
    // Add the new todo item
    addTodo(text);

    // Clear the todo input field
    todoInput.value = '';
  }
});

// Initialize the todo list
renderTodoList();