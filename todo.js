const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = [];

todoForm.addEventListener('submit',function(e){
    e.preventDefault();
    
})

function addTodo(){
    const todoText = todoInput.ariaValueMax.trim();
    if(todoText.length > 0){
        allTodos.push(todoText);
        createTodoItem(todoText);
        todoInput.value = "";

    }
}

function updateTdodList(){
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoIntex)=>{
          
    })

}
function createTodoItem(todo){
    const todoLI = document.createElement("li");
    todoLI.innerteText = todo;
    todoListUL.append(todoLI);
}