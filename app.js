var tasks = [];

const add = () => {
    let input = document.getElementById("taskInput").value
    tasks.push({
        name: input,
        state: "New"
    });
    document.getElementById("taskInput").value = ""; // Clear input
    display();
};

function display() {
    const taskList = document.getElementById('ul');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        taskList.innerHTML +=
            `<p><b>Name:</b> ${task.name}<br><b>State:</b> ${task.state}</p> 
            <select id="state${i}" onChange="changeState(${i})">
                <option value="New" ${task.state === "New" ? "selected" : ""}>New</option>
                <option value="Inprogress" ${task.state === "Inprogress" ? "selected" : ""}>In-Progress</option>
                <option value="Complete" ${task.state === "Complete" ? "selected" : ""}>Complete</option>
            </select><br><br>`;
    }
}

function changeState(index) {
    const selectElement = document.getElementById(`state${index}`);
    const newState = selectElement.value;
    tasks[index].state = newState;
    display();
}

function reset() {
    tasks = tasks.filter((task) => task.state !== 'Complete');
    display();
}

// Initial display
display();
