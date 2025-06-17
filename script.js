// 1️⃣ Run after page loads
document.addEventListener('DOMContentLoaded', function() {
  // 2️⃣ Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // 3️⃣ Function to create and add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // 3a: get and trim input
    if (taskText === "") {                   // 3b: if empty, alert
      alert("Please enter a task!");
      return;
    }

    // 3c: create the <li> and set its text
    const li = document.createElement('li');
    li.textContent = taskText;

    // 3d: create Remove button with class 'remove-btn'
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // 3e: onclick removes the li element only
    removeBtn.onclick = function() {
      li.remove();                          // removes this specific task :contentReference[oaicite:1]{index=1}
    };

    // 3f: append button to li, then li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // 3g: clear the input for the next task
    taskInput.value = '';
  }

  // 4️⃣ Attach events: button click
  addButton.addEventListener('click', addTask);

  // 5️⃣ Attach events: Enter key pressed in input
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
