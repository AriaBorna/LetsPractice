
let editingTask = null;

//add task button function
document.querySelectorAll(".add_task").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        //get task form infos
        let taskTitleInput = document.querySelector(".task_title");
        let taskDescriptionInput = document.querySelector(".task_description");
        let addTaskButton = document.querySelector(".add_task");

        //edit button
        if (editingTask) {
            editingTask.querySelector(".list_task_title").textContent = taskTitleInput.value;
            editingTask.querySelector(".list_task_description").textContent = taskDescriptionInput.value;

            addTaskButton.textContent = "Add Task";
            addTaskButton.classList.remove("update_task");
            editingTask = null;
        } else {
            let title = taskTitleInput.value.trim();
            let description = taskDescriptionInput.value.trim();

            //add new task
            if (title === "" || description === "") {
                alert("Please enter both title and description.");
                return;
            }

            // Create new task elements
            let newTask = document.createElement("div");
            newTask.classList.add("task");

            let newTaskTitle = document.createElement("p");
            newTaskTitle.classList.add("list_task_title");
            newTaskTitle.textContent = title;

            let newTaskDescription = document.createElement("p");
            newTaskDescription.classList.add("list_task_description");
            newTaskDescription.textContent = description;

            let newTaskStatus = document.createElement("button");
            newTaskStatus.classList.add("list_task_status");
            newTaskStatus.textContent = "Not Started";
            newTaskStatus.style.backgroundColor = "gray";

            // status toggle
            newTaskStatus.addEventListener("click", function() {
                if (newTaskStatus.textContent === "Not Started") {
                    newTaskStatus.textContent = "Done";
                    newTaskStatus.style.backgroundColor = "darkgreen";
                    newTaskStatus.style.color = "white";
                } else {
                    newTaskStatus.textContent = "Not Started";
                    newTaskStatus.style.backgroundColor = "gray";
                    newTaskStatus.style.color = "black";
                }
            });

            // Create edit button
            let newTaskEdit = document.createElement("button");
            newTaskEdit.classList.add("list_task_edit");
            newTaskEdit.textContent = "Edit";

            // Create remove button
            let newTaskRemove = document.createElement("button");
            newTaskRemove.classList.add("list_task_remove");
            newTaskRemove.textContent = "Remove";

            // remove button
            newTaskRemove.addEventListener("click", function() {
                newTask.remove();
            });

            // Edit button
            newTaskEdit.addEventListener("click", function() {
                taskTitleInput.value = newTaskTitle.textContent;
                taskDescriptionInput.value = newTaskDescription.textContent;

                addTaskButton.textContent = "Update Task";
                addTaskButton.classList.add("update_task");

                editingTask = newTask;
            });

            // add elements to parent
            newTask.appendChild(newTaskTitle);
            newTask.appendChild(newTaskDescription);
            newTask.appendChild(newTaskStatus);
            newTask.appendChild(newTaskEdit);
            newTask.appendChild(newTaskRemove);

            document.querySelector(".tasks_list").appendChild(newTask);
        }

        // reset the form values
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";

    });
});

