const textBox = document.getElementById("textBox")
const addButton = document.getElementById("addButton")
const listUl = document.getElementById("list")
const finishedList = document.getElementById("doneUl")

addButton.addEventListener("click", function() {
    
    const task = textBox.value
    addButton.setAttribute("id", "addButton") // for css
    const taskLi = document.createElement("li")
    taskLi.innerHTML = task
    taskLi.setAttribute("class", "tasks") //for css
    textBox.value = ""
    const removeButton = document.createElement("button")
    removeButton.addEventListener("click", function(){
        this.parentElement.remove()
    
    })
    
    
    const checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("class", "check") //for css
    taskLi.appendChild(checkBox)
    
    listUl.appendChild(taskLi)
    checkBox.addEventListener("change", function(){
        if(this.checked){
            finishedList.appendChild(this.parentElement)
        }else {
            listUl.appendChild(this.parentElement)
        }
    })
    removeButton.innerHTML = "Remove"
    removeButton.setAttribute("class", "remove") //for css
    taskLi.appendChild(removeButton)
    

})