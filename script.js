
const input = document.getElementById('taskInput');
const button = document.getElementById('addBtn');
const list = document.getElementById('taskList');


let tasks = [];


button.addEventListener('click', addTask);


function addTask() {
    const text = input.value.trim();

    if (text === '') {
        alert('Digite uma tarefa!');
        return;
    }

    const task = {
        text: text,
        done: false
    };

    tasks.push(task);
    renderTasks();
    input.value = '';
}

function renderTasks() {
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = task.text;

        if (task.done) {
            span.classList.add('done');
        }

        
        span.addEventListener('click', () => {
            tasks[index].done = !tasks[index].done;
            renderTasks();
        });

       
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'remover';
        removeBtn.className = 'remove-btn';

        removeBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
