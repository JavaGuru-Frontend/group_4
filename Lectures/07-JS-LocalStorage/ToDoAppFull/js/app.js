// const addBtn    = document.getElementById('addBtn');
// const taskInput = document.getElementById("taskInput");



// const addTask = () => {
//     let task = taskInput.value
//     console.log(task)
// }

// const renderTask = () => {}

// const removeTask = () => {}

// const toogleDone = () => {}


// addBtn.addEventListener('click', addTask)



let taskAdder;
let myTasksContainer;
let taskList;


window.onload = () => {
    taskInput = document.getElementById("taskInput");
    addBtn = document.getElementById('addBtn');
    console.log("Task adder element:", taskAdder);

    myTasksContainer = document.getElementById('myTasks');
    console.log("My task container:", myTasksContainer);

    taskList = JSON.parse(localStorage.getItem('taskList'));


    if(taskList) {

    } else {

        taskList = [];
    }

    // if(!taskList) {
    //     taskList = [];
    // }

    console.log("Task list:", taskList);

    addBtn.addEventListener('click', addTask);

    renderTasks();
}


const addTask = () => {
    console.log("Task description:", taskInput.value);

    const task = {
        taskText: taskInput.value,
        done: false
    }


    taskInput.value = "";

    taskList.push(task);
    saveStorage();
    renderTasks();
}

const removeTask = (event) => {
    let taskIndex = event.target.dataset.index;
    taskList.splice(taskIndex,1);

    saveStorage();
    renderTasks();
}

const toggleDone = (event) => {

    taskIndex = event.target.dataset.index;


    if(taskList[taskIndex].done) {

        taskList[taskIndex].done = false;
    } else {
        taskList[taskIndex].done = true;
    }
    saveStorage();
}

const saveStorage = () => {
    localStorage.setItem('taskList' , JSON.stringify(taskList));
}

const renderTasks = () => {

    let tasksToRender = [];


    taskList.forEach((item, i) => {
        let isTaskChecked = item.done ? "checked" : "";
        let task = `
        <li class="list-group-item">
            <input class="form-check-input" onclick="toggleDone(event)" data-index="${i}" type="checkbox" ${isTaskChecked}>
            <span class="task-text">${item.taskText}</span>
            <button class="btn btn-secondary" onclick="removeTask(event)" data-index="${i}">Remove</button>
        </li>`;
        tasksToRender.push(task);
    })

    console.log("Tasks to render:", tasksToRender);
    myTasksContainer.innerHTML = tasksToRender.join('');
}