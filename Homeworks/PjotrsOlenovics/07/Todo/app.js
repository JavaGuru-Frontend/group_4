const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

loadTasks();

document.querySelector('#task-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const textTask = taskInput.value;

  const task = {
    textTask,
    done: false
  };

  addTask(task);

  taskInput.value = '';
});

taskList.addEventListener('click', function(event) {
  const target = event.target;

  if (target.classList.contains('remove')) {
    const index = target.parentElement.parentElement.dataset.index;

    removeTask(index);
  } else {
    const index = target.parentElement.dataset.index;

    toggleDone(index);
  }
});

function addTask(task) {
  saveToLocalStorage(task);

  renderTask(task);
}

function removeTask(index) {
  removeFromLocalStorage(index);

  taskList.removeChild(taskList.childNodes[index]);
}

function toggleDone(index) {
  toggleDoneInLocalStorage(index);

  taskList.childNodes[index].classList.toggle('done');
}

function saveToLocalStorage(task) {
  let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

  taskList.push(task);

  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function removeFromLocalStorage(index) {
  let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

  taskList.splice(index, 1);