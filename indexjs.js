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
    //toDoList.push({
    //  content: task.value,
    // done: false,
    //}

    task.value = ""
    console.log(toDoList)
}

// ---------- Remove task to array ---------------

function removeTask(task) {
    toDoList.splice(task, 1)
    // createTask()
    console.log(toDoList)
    loadToDoList()
}

// ----------- Create task -----------------

function createTask(task, index) {

    const newDiv = document.createElement("div")
    const newTask = document.createElement("li")
    const deleteButton = document.createElement("button")

    toDoDiv.appendChild(newDiv)
    newDiv.appendChild(newTask)
    newDiv.appendChild(deleteButton)

    newDiv.classList.add(".divTask")
    deleteButton.classList.add(".deleteButton")
    newTask.classList.add(".newLi")


    newTask.innerHTML = task.content
    newDiv.id = index
    deleteButton.innerHTML = "X"


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

    deleteButton.addEventListener("click", function (event) {
        event.preventDefault()
        removeTask(index)
        loadToDoList()
    })


    // localStorage.setItem("toDoList", JSON.stringify(toDoList));

    return newDiv
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
        // addTask(task.value)

        loadToDoList()
    }

})


