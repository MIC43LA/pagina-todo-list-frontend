document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.querySelector(".btn-primary");
    const taskTitleInput = document.getElementById("titulo");
    const taskDescriptionInput = document.getElementById("descripcion");
    const taskPrioritySelect = document.getElementById("prioridad");
    const taskContainer = document.querySelector(".row");

    addTaskButton.addEventListener("click", function() {
        const title = taskTitleInput.value.trim();
        const description = taskDescriptionInput.value.trim();
        const priority = taskPrioritySelect.value;

        if (title !== "" && description !== "") {
             const newTask = document.createElement("div");
            newTask.classList.add("col-md-4", "task-card");
            

            newTask.innerHTML = `
                <h5>${title}</h5>
                <p>${description}</p>
                <span class="badge bg-${priority === 'alta' ? 'danger' : (priority === 'media' ? 'warning' : 'success')}">${priority}</span>
            `;

            taskContainer.appendChild(newTask);


            taskTitleInput.value = "";
            taskDescriptionInput.value = "";
            taskPrioritySelect.value = "media";


            const modal = bootstrap.Modal.getInstance(document.getElementById('addTaskModal'));
            modal.hide();
        } else {
            alert("Por favor, completa todos los campos para agregar una tarea.");
        }
    });
});