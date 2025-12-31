let searchInput = document.getElementById('searchInput');
let todoItems = document.getElementById('todo-items');
let addBtn = document.getElementById('addBtn');

let todos = JSON.parse(localStorage.getItem('todos')) || []

let addItems = () => {
    let htmlToAdd = "";
    if (todos){
        todos.forEach( todo => {
            if(todo.done){
                htmlToAdd += `<li id="${todo.id}" style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; border: 1px solid black; padding: 10px; background-color: lightgreen;">
                                    <h3>${todo.text}</h3>
                                    <button>DELETE</button>
                                </li>`
            }
            else{
                htmlToAdd += `<li id="${todo.id}" style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; border: 1px solid black; padding: 10px; background-color: red;">
                                    <h3>${todo.text}</h3>
                                    <button>DELETE</button>
                                </li>`
            }
        })
        todoItems.innerHTML = htmlToAdd;
    }
}
addItems()

addBtn.addEventListener('click', function() {
    let item = {
        id : Date.now(),
        text: searchInput.value,
        done: false
    }
    if (item.text){
        todos.push(item)
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log(todos)
        addItems()
    }
})

todoItems.addEventListener("click", (e) => {
  let tagid; 
  if (e.target.tagName === "LI") {
    tagid = e.target.id
    todos.forEach(todo => {
        if(todo.id == tagid){
            todo.done = !todo.done;
            localStorage.setItem('todos', JSON.stringify(todos));
            addItems()
        }
    })
  }
  if (e.target.tagName === "BUTTON") {
    tagid = e.target.parentElement.id;
    todos.forEach((todo, index) => {
        if(todo.id == tagid){
            todos.splice(index,1)
            localStorage.setItem('todos', JSON.stringify(todos));
            addItems()
        }
    })
  }
},true);
