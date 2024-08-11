var app = () => {
    var todoList = [
        {
            id: 1,
            content: '12',
            completed: false,
        },
        {
            id: 2,
            content: '12',
            completed: false,
        },
        {
            id: 3,
            content: '12',
            completed: false,
        },
    ];
    renderTodolist(todoList);
    var todoForm = document.getElementById('todo-form');
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNewTodo(todoList);
    });
};

app();
