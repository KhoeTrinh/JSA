var addNewTodo = (todoList) => {
    var todoInput = document.getElementById('todo-input').value;
    var todonew = {
        id: Date.now(),
        content: todoInput,
        completed: false,
    };
    todoList.push(todonew);

    document.getElementById('todo-input').value = '';
    renderTodolist(todoList);
};
