const R = require("ramda");

const todo = {
    id: 1,
    entry: "This is the first note"
};

let todos = [];
todos.push(todo)

function generateId() {
    return Math.floor(Math.random() * Date.now());
}

function addTodo(text, listOfTodos) {
    return R.prepend({
        id: generateId(), 
        entry: text
    }, listOfTodos);
}

function removeTodo(noteId, listOfTodos) {
    return R.reject(R.propEq(noteId, "id"), listOfTodos);
}

function editTodo (noteId, text, listOfTodos) {
    return R.map(function (note) {
        return R.propEq(noteId, "id", note) ? R.set(R.lensProp("entry"), text, note) : note
    }, listOfTodos);
}

todos = addTodo("Here is the second test", todos);
todos = addTodo("The third example", todos);
// todos = removeTodo(1, todos);
// todos = editTodo(1, "New text here", todos);

console.log(todos);