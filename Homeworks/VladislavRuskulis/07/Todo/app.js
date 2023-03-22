// TODO app
// Скорировать данные исходники в свою папку
// Посмотреть видео appDemo.mp4 что бы понять как работает апликация

/* Нам небходимо создать приложение которое может создавать, удалять и отмечать задание как сделанное
    для этого нам надо несколько функций
        addTask() - добавить задание
            1 - нам нужно получуть значение из нашего поля ввода selector.value;
            2 - создать объект для нового задания 
                const task = {
                    textTask,
                    done: false
                }
            3 - вызвать функцию saveToLocalStorage

        saveToLocalStorage() - сохранить данные в локальное хранилище
            1 - использовать JSON.stringify
            2 - использовать ключь 'taskList'

        renderTask() - вывести список задач
            1 - использовать innerHTML
            2 - создать цикл которой проёдет по всем данным из локального хранилища и выведит нам ХТМЛ
            3 - можно использовать этот кусочек кода
            return `<li data-index='${i}'>
                        <div class="">
                            ${data.textTask}<span class="remove">❌</span>
                        </div>
                    </li>`;
            4 - Если элемент отмечен как выполнен нам нужно добавить класс .done ../style.css
                для этого надо сделать проверку if else  test.done === 'true'

        toggleDone() - отметить как задание как выполненое
            Для этого на надо добавить несколько eventlisteners
                addEventListener('submit', addTask);   ----> добавить новое задание 
                addEventListener('click', toggleDone); ----> отметить как выделенное

                функция toogleDone делает две операции
                если нажали на Х клавиши удалить то данные стераються из локального хранилища
                если нажали на сам элемент то нам надо добавить класс done и пересохранить данные в локальное хранилище
*/
const taskAdder = document.querySelector('.taskAdder');
const taskInput = document.querySelector('#textTaskAdder');
const myTasks = document.querySelector('.myTasks');


function saveToLocalStorage(taskList) {
    taskListString = (JSON.stringify(taskList))
    localStorage.setItem('taskList', taskListString);
}

function addTask() {
    const taskList = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];
    taskList.push(
        {
            textTask: taskInput.value,
            done: false
        }
    )
    saveToLocalStorage(taskList);
}

taskAdder.addEventListener('submit', addTask)



function renderTask() {
    const tasks = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];
    let res = ""
    tasks.forEach((task, i) => {
        res += `<li data-index='${i}'>
                    <div class="">
                        ${task.textTask}<span class="remove">❌</span>
                    </div>
                </li>`;
    });

    return res;
}


myTasks.innerHTML = renderTask();


const deleteInf = document.querySelectorAll('.remove')

// function toggleDone(event) {

// }

deleteInf.forEach(item => {
    item.addEventListener('click', event => {
        const taskList = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];
        const index = item.parentElement.parentElement.getAttribute('data-index')
        taskList.splice(index, 1);
        saveToLocalStorage(taskList);

        myTasks.innerHTML = renderTask();
    })
})

const toggleDone = (event) => {

    taskIndex = event.target.dataset.index;


    if(taskList[taskIndex].done) {

        taskList[taskIndex].done = false;
    } else {
        taskList[taskIndex].done = true;
    }
    saveStorage();
}