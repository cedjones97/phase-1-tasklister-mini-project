document.addEventListener("DOMContentLoaded", () => {
   document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    
     buildToDo(updateId.value)
   
  })


});

const updateId = document.querySelector('#new-task-description')


function buildToDo(todo){
   let p = document.createElement('p')
   p.textContent = `${todo} `
   document.querySelector('#list').appendChild(p)
   let btn = document.createElement('button')
   btn.addEventListener('click', handleDelete)
   btn.textContent = ' x'
   p.appendChild(btn)

}


function handleDelete(e) {
   e.target.parentNode.remove()
}