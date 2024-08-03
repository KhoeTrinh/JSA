var todoList = []


var todoForm = document.getElementById("todo-form")

var handleSubmit = (e) => {
    e.preventDefault()
    var todoInput = document.getElementById("todo-input").value
    var todonew = {
        id: Date.now(),
        content: todoInput,
        completed: false
    }
    todoList.push(todonew)
    
    var todolistElement = document.getElementById("todo-list")
    var li = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="task-text">${todoInput}</span>
            <div class="btn-group">
                <button class="btn btn-danger btn-sm delete-btn">✕</button>
                <button class="btn btn-primary btn-sm edit-btn">✎</button>
                <button class="btn btn-success btn-sm edit-btn">👍</button>
            </div>
        </li>`

    todolistElement.insertAdjacentHTML('afterbegin', li)
    document.getElementById("todo-input").value = ""
}

todoForm.addEventListener("submit", handleSubmit)