// ----------- Local storage -------------

// let toDoList;
// if (localStorage.getItem("toDoList")) {
//   toDoList = JSON.parse(localStorage.getItem("toDoList"));
//   createTask();
// } else toDoList = [];


// ------------- Selectors -----------------------
let toDoList=[]

const submit= document.querySelector("#form")
const task = document.querySelector("#nameOfItem")
const toDoDiv = document.querySelector("#listItems")

// ----------- Add task to array ----------------

function addTask(){ 
    toDoList.push(task.value)
    task.value = ""
    console.log (toDoList)
}

// ---------- Remove task to array ---------------

function removeTask(task) {
    toDoList.splice(task,1)
    // createTask()
    console.log(toDoList)
}

// ----------- Create task -----------------

function createTask(task, index){
    
    const newDiv = document.createElement("div")
    const newTask = document.createElement("li")
    const deleteButton = document.createElement("button")

    toDoDiv.appendChild(newDiv)
    newDiv.appendChild(newTask)
    newDiv.appendChild(deleteButton)

    newDiv.classList.add(".divTask")
    deleteButton.classList.add(".deleteButton")
    newTask.classList.add(".newLi")

    
    newTask.innerHTML = task
    newDiv.id = index    
    deleteButton.innerHTML= "X"

    deleteButton.addEventListener("click",function (event){
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
    for(let i = 0; i < toDoList.length; i++) {
        document.querySelector("#listItems").appendChild(createTask(toDoList[i], i));
    }
}

// ------------ Listener ---------------

submit.addEventListener("submit",function (event){
    event.preventDefault()
    if (task.value){
        addTask(task.value)
        console.log (toDoList)
        loadToDoList()
    }
    
})

