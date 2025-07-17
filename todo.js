const todoForm = document.querySelector("form")
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-list');

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("hyfutfy");
    addTodo();
})
function addTodo(){
    const todoText = todoInput.value.trim();
    console.log(todoText);
    if(todoText.length > 0){
        const todoObject = {
            text : todoText,
            completed: false
        }
        console.log("inside if");
        allTodos.push(todoObject);
        updateTodoList();
        saveTodos();
        console.log(saveTodos);
        const todoLi = createTodoItem(todoText, allTodos.length -1);
        console.log(todoLi);
        todoUl.appendChild(todoLi)
        todoInput.value = "";
    }
}
function createTodoItem(todo, todoIndex) {
    console.log(todo);
    console.log(todoIndex);
    const todoId = "todo" + todoIndex;
    const todoLI = document.createElement("li");
    const todoText = todo.text
    todoLI.className = "todo";
    todoLI.innerHTML = `
        <input type="checkbox" id="${todoId}">
        <label for="${todoId}" class="custom-checkbox">
            <img src="icons/check_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="svg image">
            <!-- <i class="fa-solid fa-square-check"></i> -->
        </label>
        <label for="${todoId}" class="todo-text">
            ${todoText}
        </label>
        <button class="delete-button">
            <!-- <img src="icons/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="svg image"> -->
            <i class="fa-solid fa-trash" style="font-size: 20px; color: #fff;"></i>
        </button>
    `
    const deleteButton = todoLI.querySelector(".delete-button")
    deleteButton.addEventListener("click", ()=>{
      deleteTodoItem(todoIndex)
    });
    const checkbox = todoLI.querySelector("input");
    checkbox.addEventListener("change", ()=>{
        allTodos[todoIndex].comleted = checkbox.checked;
    })
    return todoLI;
} 
function deleteTodoItem(todoindex){
    allTodos = allTodos.filter((_, i)=> i !== todoindex);
    saveTodos();
    updateTodoList();

}

function saveTodos(){
    const todosJson = JSON.stringify(allTodos);
    localStorage.setItem("todos", todosJson);
}
function getTodos(){
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos);

}