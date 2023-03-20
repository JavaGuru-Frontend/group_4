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
const myTasks   = document.querySelector('.myTasks');
const tasks     = JSON.parse(localStorage.getItem('taskList')) || [];

// addEventListener click 
// addEventListener submit



renderTask();

function addTask(){

}

function saveToLocalStorage() {

}

function renderTask() {

}

function toggleDone(e) {
}