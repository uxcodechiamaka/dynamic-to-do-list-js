// Inside your DOMContentLoaded block…

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // ✅ Create a new list item (li) with task text
  const li = document.createElement('li');
  li.textContent = taskText;

  // ✅ Create a Remove button with the 'remove-btn' class
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  // ✅ When the Remove button is clicked, only remove its li
  removeBtn.onclick = function() {
    li.remove(); // removes THIS list item only :contentReference[oaicite:1]{index=1}
    updateLocalStorage(); // save updated list
  };

  // ✅ Add the Remove button to the list item
  li.appendChild(removeBtn);
  // ✅ Add the list item to the task list
  taskList.appendChild(li);

  taskInput.value = '';         // Clear input
  updateLocalStorage();        // Save to localStorage
}
