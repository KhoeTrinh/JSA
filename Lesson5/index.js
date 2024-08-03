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
    var li = document.createElement("li")
    li.className = "list-group-item d-flex justify-content-between align-items-center"
    li.innerHTML = `
        <span class="task-text">${todoInput}</span>
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
        </div>`
    todolistElement.appendChild(li)
    document.getElementById("todo-input").value = ''
}

todoForm.addEventListener("submit", handleSubmit)