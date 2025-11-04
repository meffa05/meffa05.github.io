const todos = JSON.parse(localStorage.getItem('todo-list')) || []
const todoList = document.querySelector('.todo-list')
//render function
const renderTodos = () => {
    todoList.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)//append the list element to the unordered list
    });
    

}
//variables
const input = document.querySelector('#new-todo')
const button = document.querySelector('button')

button.addEventListener('click', () => {
todos.push({ text: input.value, completed: false })
localStorage.setItem('todo-list', JSON.stringify(todos))
todoList.innerHTML = ''
renderTodos()
input.value = ''



})
renderTodos()

