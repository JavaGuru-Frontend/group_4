let taskAdder;
let myTasksContainer;
let taskList;

window.onload = () => {
	taskInput = document.getElementById("taskInput");
	addBtn = document.getElementById("addBtn");
	console.log("Task adder element:", taskAdder);

	myTasksContainer = document.getElementById('myTasks');
	console.log("My task container:", myTaskContainer);
	
	taskList = JSON.parse(localeStorage.getItem('taskList'));

	if(taskList) {

	} else {
		taskList = [];
	}

	console.log("task list:", taskList);
	
	addBtn.addEventListener('click, addTask');

	renderTasks();
}

const addTask = () => {
	console.log("Task description:", taskInput.value);

	const task = {
			taskText: taskInput.value,
			done:false
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

	taskIndex = event.target.datasex.index;

	if(taskList[taskIndex].done) {

		taskList[taskIndex].done = false;

	} else {
		taskList[taskIndex].done = true;
	}
	saveStorage();
}

const saveStorage = () => {
	localeStorage.setItem('taskList', JSON.stringify(taskList));

	const renderTasks = () => {

		let taskToRender = [];

		taskList.forEach((item, i)) => {
			let isTaskChecked = item.done ? "checked" : "";
			let task = 
		}
	}
}