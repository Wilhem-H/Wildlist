// ----------- Local storage -------------

// let toDoList;
// if (localStorage.getItem("toDoList")) {
//   toDoList = JSON.parse(localStorage.getItem("toDoList"));
//   createTask();
// } else toDoList = [];


// ------------- Selectors -----------------------
let toDoList = []

const submit = document.querySelector("#form")
const task = document.querySelector("#nameOfItem")
const toDoDiv = document.querySelector("#listItems")

// ----------- Add task to array ----------------

function addTask() {
    toDoList.push(task.value)
    task.value = ""
    console.log(toDoList)
}

// ---------- Remove task to array ---------------

function removeTask(task) {
    toDoList.splice(task, 1)
    // createTask()
    console.log(toDoList)
}

// ----------- Create task -----------------

function createTask(task, index) {


    // JE CREE LE BOUTON, JE LAJOUTE 
    const deleteButton = document.createElement("button")

    deleteButton.classList.add("deleteButton")
    deleteButton.innerHTML = "X"

    deleteButton.addEventListener("click", function (event) {
        event.preventDefault()
        removeTask(index)
        loadToDoList()
    })

    // JE CREE UNE TACHE, JE LAJOUTE

    const newTask = document.createElement("li")

    newTask.innerHTML = task
    newTask.id = index
    newTask.classList.add("task")

    if (index % 2 === 0) {
        newTask.classList.add("lightGrey")
    } else { newTask.classList.add("grey") }

    newTask.appendChild(deleteButton)
    toDoDiv.appendChild(newTask)



    // localStorage.setItem("toDoList", JSON.stringify(toDoList));

    return newTask
}

// ----------- Upload array ----------------

function loadToDoList() {
    document.querySelector("#listItems").innerHTML = "";
    for (let i = 0; i < toDoList.length; i++) {
        document.querySelector("#listItems").appendChild(createTask(toDoList[i], i));
    }
}

// ------------ Listener ---------------

submit.addEventListener("submit", function (event) {
    event.preventDefault()
    if (task.value) {
        addTask(task.value)
        console.log(toDoList)
        loadToDoList()
    }

})


