document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('create-task-form');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get task description from input field
        const taskDescription = document.getElementById('new-task-description').value;

        // Create new task element
        const taskElement = document.createElement('li');
        taskElement.textContent = taskDescription;

        // Append task to task list
        taskList.appendChild(taskElement);

        // Clear input field after adding task
        document.getElementById('new-task-description').value = '';
    });
});
