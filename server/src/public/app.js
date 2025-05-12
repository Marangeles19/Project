document.addEventListener('DOMContentLoaded' , () => {
    const tasksForm = document.getElementById('taskForm');
    const tasksInput = document.getElementById('taskInput');
    const tasksList = document.getElementById('taskList');

    fetchTasks();

    tasksForm.addEventListener('submit' , async (e) => {
        e.preventDefault();
        await fetch('/addtasks', {
            method:'POST', 
            headers:{'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: tasksInput.value
            })  
        })
        tasksInput.value = '';
        fetchTasks();
    });

    async function fetchTasks() {
        const response = await fetch('/tasks', {
            method: 'GET',
            headers: {'Content-Type': 'application/json' },
        });
        const tasks = await response.json();
        tasksList.innerHTML= tasks.map(task => `<li class="list-group-item d-flex justify-content-between align-items-center">
        ${task.description}
        <span class="badge bg-${task.completed ? 'success' : 'warning'} rounded-pill">
          ${task.completed ? 'Completada' : 'Pendiente'}
        </span>
      </li>`).join('');
    }
});