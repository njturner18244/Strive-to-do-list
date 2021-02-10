//selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners

toDoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions

function addTodo (event){
    event.preventDefault();
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = toDoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)

    //append to list

    todoList.appendChild(todoDiv);

    //clear the value

    toDoInput.value = "";
}

function deleteCheck(e) {
    //console.log(e.target); when i click on tick or trash, shows up on the console.

    const item = e.target;

    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}