let draggedItem = null;

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.firstChild.nodeValue.trim(), // Save task text
            completed: li.classList.contains("completed") // Save completed state
        });
    });

    // tasks.sort((a, b) => a.text.localeCompare(b.text)); // Sort before saving
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.sort((a, b) => a.text.localeCompare(b.text)); // Sort when loading
    savedTasks.forEach(task => addTaskToList(task.text, task.completed));
}

function addTaskToList(taskText, isCompleted = false) {
    let li = document.createElement("li");
    li.innerText = taskText;
    li.draggable = true;
    li.classList.add("task-item");

    if (isCompleted) {
        li.classList.add("completed"); // Mark task as completed if it was saved that way
    }

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✓";
    completeBtn.classList.add("completeBtn");
    completeBtn.addEventListener("click", function() {
        li.classList.toggle("completed");
        saveTasks();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function() {
        li.remove();
        saveTasks(); // Update localStorage after deleting
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    li.addEventListener("dragstart", dragStart);
    li.addEventListener("dragover", dragOver);
    li.addEventListener("drop", drop);
    li.addEventListener("dragend", dragEnd);
}

function dragStart(event){
    draggedItem = event.target;
    setTimeout(() =>{
        event.target.style.display = "none";
    }, 0);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (draggedItem !== this) {
        let list = document.getElementById("taskList");
        list.insertBefore(draggedItem, this);
        saveTasks(); // ✅ Save new order
    }
}

function dragEnd(event) {
    event.target.style.display = "block"; // Show item again
    draggedItem = null;
}


document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskText = document.getElementById("taskInput").value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToList(taskText);
    saveTasks(); // Save to localStorage

    document.getElementById("taskInput").value = ""; // Clear input
});

document.getElementById("clearTaskBtn").addEventListener("click", function() {
    document.getElementById("taskList").innerHTML = ""; // Remove all tasks from the UI
    localStorage.removeItem("tasks"); // Clear tasks from localStorage
});

loadTasks(); // Load tasks when the page opens
