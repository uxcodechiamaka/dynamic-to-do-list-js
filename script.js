function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // ✅ Create li and set text
  const li = document.createElement('li');
  li.textContent = taskText;

  // ✅ Create Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn'); // ✅ USE classList.add here

  // ✅ When clicked, remove this li
  removeBtn.onclick = function() {
    taskList.removeChild(li);
  };

  // ✅ Add button to li and li to list
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // ✅ Clear the input field
  taskInput.value = '';
}
