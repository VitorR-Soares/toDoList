const txtTask = document.getElementById('txtTask')
const btnAdd = document.getElementById('btnAddTask')
const containerTasks = document.getElementById('containerTarefas')

btnAdd.addEventListener('click',(evt)=>{
    if (txtTask.value==""){
        alert("Insira uma task")
    } else {
        const item = document.createElement('li')
        item.setAttribute('class','tarefa')
        item.innerHTML = txtTask.value
        containerTasks.appendChild(item)
        
        const btnRemove = document.createElement("span")
        btnRemove.innerHTML = 'x'
        btnRemove.setAttribute('class','btnRemove')
        item.appendChild(btnRemove)
        
        item.addEventListener('click',(e)=>{
            if(e.target.tagName === "LI") {
                e.target.classList.toggle("checked")
            } else if (e.target.tagName === "SPAN"){
                e.target.parentNode.remove()
            }
        })
    }
        

    txtTask.value = ""
})








    












    
