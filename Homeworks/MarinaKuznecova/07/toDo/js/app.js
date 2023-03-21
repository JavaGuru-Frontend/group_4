const taskAdder = document.querySelector('.taskAdder');
const myTasks   = document.querySelector('.myTasks');
const tasks     = JSON.parse(localStorage.getItem('taskList')) || [];

// addEventListener click 
myTasks.addEventListener('click', toggleDone);

// addEventListener submit
taskAdder.addEventListener('submit', addTask);



renderTask();

function addTask(e){
    e.preventDefault();
    const textTask = this.querySelector('[name=task]').value;
    const task = {
        textTask,
        done: false
    }
    tasks.push(task);
    saveToLocalStorage();
    renderTask();
    this.reset();
}

function renderTask() {
    let html = tasks.map(function(data,i) {
        let myClass = data.done ? 'done' : '';
        return `<li data-index='${i}'>
                    <div class="${myClass}">
                        ${data.textTask}<span class="remove">❌</span>
                    </div>
                </li>`;
    })
    myTasks.innerHTML = html.join('');
}


function saveToLocalStorage() {
    localStorage.setItem( 'taskList' , JSON.stringify(tasks));
}



function toggleDone(e) {
    const myEl = e.target;
    const mySel = myEl.parentElement;
    if(myEl.className === 'remove') {
        let index = mySel.parentElement.dataset.index;
        let temp = tasks.splice(index, 1);                                                      
        console.log(temp);
    } else {
        myEl.classList.toggle('done');
        tasks[mySel.dataset.index].done = !tasks[mySel.dataset.index].done;
    }
    saveToLocalStorage();
    renderTask();
}