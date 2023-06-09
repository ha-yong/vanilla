const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos(event) {
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDO(event) {
    const li = event.target.parentElement
    toDos = toDos.filter(todo => todo.id!== li.id);
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDO);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

