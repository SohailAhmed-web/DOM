 // Get the todo list from localStorage or initialize it if not present
 let todos = JSON.parse(localStorage.getItem('todos')) || [];

 const todoForm = document.getElementById('todoForm');
 const todoInput = document.getElementById('todoInput');
 const todoList = document.getElementById('todoList');

 // Function to save todos to localStorage
 function saveTodos() {
     localStorage.setItem('todos', JSON.stringify(todos));
 }

 // Function to render todos in the list
 function renderTodos() {
     todoList.innerHTML = '';
     for (let i = 0; i < todos.length; i++) {
         const todo = todos[i];
         const listItem = document.createElement('li');
         const checkbox = document.createElement('input');
         checkbox.type = 'checkbox';
         checkbox.checked = todo.completed;
         const text = document.createElement('span');
         text.textContent = todo.text;
         const deleteButton = document.createElement('button');
         deleteButton.textContent = 'Delete';

         listItem.appendChild(checkbox);
         listItem.appendChild(text);
         listItem.appendChild(deleteButton);

         if (todo.completed) {
             text.classList.add('completed');
         }

         // Mark todo as completed
         checkbox.addEventListener('change', () => {
             todo.completed = checkbox.checked;
             if (todo.completed) {
                 text.classList.add('completed');
             } else {
                 text.classList.remove('completed');
             }
             saveTodos();
         });

         // Remove todo
         deleteButton.addEventListener('click', () => {
             todos.splice(i, 1);
             listItem.remove();
             saveTodos();
         });

         todoList.appendChild(listItem);
     }
 }

 // Add a new todo
 todoForm.addEventListener('submit', (e) => {
     e.preventDefault();
     const todoText = todoInput.value.trim();
     if (todoText) {
         const newTodo = { text: todoText, completed: false };
         todos.push(newTodo);
         saveTodos();
         renderTodos();
         todoInput.value = '';
     }
 });

 // Initial render of todos
 renderTodos();