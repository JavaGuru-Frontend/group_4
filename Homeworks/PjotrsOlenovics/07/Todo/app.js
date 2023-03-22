const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask(e) {
  e.preventDefault();

  const taskText = taskInput.value;
  const task = { text: taskText, done: false };
  tasks.push(task);

  saveToLocalStorage();
  renderTasks();
  taskInput.value = '';
}

function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  let html = '';
  tasks.forEach((task, index) => {
    const doneClass = task.done ? 'done' : '';
    html += `
      <li data-index="${index}">
        <div class="${doneClass}">
          <span class="task-text">${task.text}</span>
          <span class="remove">❌</span>
        </div>
      </li>
    `;
  });
  taskList.innerHTML = html;
}

function toggleDone(e) {
  const target = e.target;
  const parent = target.closest('li');

  if (target.classList.contains('remove')) {
    const index = parent.dataset.index;
    tasks.splice(index, 1);
    saveToLocalStorage();
    renderTasks();
  } else if (target.classList.contains('task-text')) {
    const index = parent.dataset.index;
    tasks[index].done = !tasks[index].done;
    saveToLocalStorage();
    renderTasks();
  }
}

taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', toggleDone);

renderTasks();
