// ----------- Local storage -------------

let toDoList;
if (localStorage.getItem("toDoList")) {
  toDoList = JSON.parse(localStorage.getItem("toDoList"));
} else {
    toDoList = []
}


// ------------- Selectors -----------------------


const submit = document.querySelector("#form")
const task = document.querySelector("#nameOfItem")
const toDoDiv = document.querySelector("#listItems")

// ---------- Remove task to array ---------------

function removeTask(task) {
    toDoList.splice(task, 1)
    console.log(toDoList)
    loadToDoList()
}

// ----------- Create task -----------------

function createTask(task, index) {

    // --- Create Delete Button ----
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("deleteButton")
    deleteButton.innerHTML = "X"
    deleteButton.addEventListener("click", function (event) {
        event.preventDefault()
        removeTask(index)
        localStorage.clear()
        loadToDoList()
    })

    // --- Create Task --- 
    const newTask = document.createElement("li")
    newTask.innerHTML = task.content
    newTask.id = index
    newTask.classList.add("task")
    
    // --- Style css LightGrey/Grey ---
    if (index % 2 === 0) {
        newTask.classList.add("lightGrey")
    } else { newTask.classList.add("grey") }

    // --- Listener ---
    newTask.appendChild(deleteButton)
    toDoDiv.appendChild(newTask)
    newTask.addEventListener("click", () => {
        console.log("je passe à true ici")
        let newObject = { ...toDoList[index], done: !toDoList[index].done };
        console.log(newObject)
        toDoList.splice(index, 1, newObject);
        console.log(toDoList)
        console.log("task.done: ", task.done)
        if (newObject.done) {
            console.log("je barre ici")
            newTask.style.textDecorationLine = "line-through";
            newTask.style.color = "red";
        } else {
            console.log("je supprime le trait")
            newTask.style.color = "black";
            newTask.style.textDecorationLine = "none";
        }
    })
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
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
        toDoList.push({
            content: task.value,
            done: false

        })
        task.value = ""
        loadToDoList()
    }

})


const deleteAll = document.querySelector("#deleteall")
deleteAll.addEventListener("click", function(event){
    event.preventDefault()
    toDoList=[]
    localStorage.clear()
    loadToDoList()
}
)


window.onload=(event)=>{
    console.log("ok")
    loadToDoList()
}
