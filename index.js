// -----------Local storage-------------
//const myStockage = localStorage;
//let toDoList = Object.toDoList(localStorage);
//for (let toDoList of toDoList) {
//  alert(`${toDoList}: ${localStorage.getItem(toDoList)}`);
//}


// -------------- Create To do list array-------------

const toDoList = ["Pinneaple"]
// test git n
// test git

// ---------------Function create task list-------------

const valid = document.querySelector("#valid");
const note = document.querySelector(".note")
const nameOfItem = document.querySelector("#nameOfItem")

valid.addEventListener("click", function (event) {
  event.preventDefault()
  toDoList.push(nameOfItem.value)

  const divTask = document.createElement("div")
  const newInput = document.createElement("input")
  const deleteButton = document.createElement("button")

  newInput.value = toDoList.slice(-1)

  note.appendChild(divTask)
  divTask.appendChild(newInput)
  divTask.appendChild(deleteButton)

  divTask.classList.add(".divTask")
  deleteButton.classList.add(".deleteButton")
  newInput.classList.add(".newInput")

  deleteButton.addEventListener("click", function (event) {
    console.log(event.target)
    const index = toDoList.indexOf(event.target)
    console.log(index)
    toDoList.splice(index, 1)
    console.log(toDoList)
    divTask.remove()
  })

  deleteButton.innerHTML = "X"
  nameOfItem.value = ""
  console.log(toDoList)
});

// --------------- Delete list --------------------

const buttonS = document.querySelector('.deleteButton')
console.log(buttonS)
buttonS.addEventListener('click', function (event) {
  event.preventDefault()
  deleteButton.addEventListener("click")

  const index = toDoList.findIndex(toDoList => toDoList === "raisin")
  console.log(index)
  console.log(toDoList[index])

})


// --------------Delete all note-----------------

function deleteAll() {
  toDoList = []
}




