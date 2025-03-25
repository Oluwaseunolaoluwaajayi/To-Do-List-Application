// Function to add a task
function addTask() {
    // Get the input value
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        li.remove();
    };

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Add the list item to the task list
    const taskList = document.getElementById('taskList');
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Allow adding tasks by pressing Enter
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});