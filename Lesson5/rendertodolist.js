var renderTodolist = (todoList) => {
    var htmlString = '';
    
    for (var index in todoList) {
        htmlString =
            htmlString +
            ` <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="task-text">${todoList[index].content}</span>
            <input
            type="text"
            class="form-control edit-input"
            style="display: none"
            value="Lear HTML"
        />
        <div class="btn-group">
            <button class="btn btn-danger btn-sm delete-btn">✕</button>
            <button class="btn btn-primary btn-sm edit-btn">✎</button>
            <button class="btn btn-success btn-sm edit-btn">👍</button>
        </div>
            
            </li>`;
    }
    
    var TodoListElement = document.getElementById('todo-list');
    TodoListElement.innerHTML = htmlString;
}