document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // don't save again during load
        });
    }

    // Save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            tasks.push(li.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add a new task
    function addTask(taskText, save = true) {
        if (!taskText) {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // update Local Storage on removal
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = '';

        if (save) {
            saveTasks(); // update Local Storage on addition
        }
    }

    // Button click adds a task
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
        } else {
            alert('Please enter a task.');
        }
    });

    // Pressing Enter adds a task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
            } else {
                alert('Please enter a task.');
            }
        }
    });

    // Load tasks on page load
    loadTasks();
});
