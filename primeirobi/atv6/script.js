
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-check';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.className = 'task-text';

    li.appendChild(checkbox);
    li.appendChild(span);

    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('click', function(e) {
    if (e.target.type === 'checkbox') {
        const liPai = e.target.parentElement;
        liPai.classList.toggle('concluida');
    } 
    else if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});