const addBtn = document.querySelector(".add")
const input = document.querySelector(".inp-group")

function removeInput(){
    if (window.confirm('Do you really want to delete row?')) {
        this.parentElement.remove()
        }
}

function addInput(){
    const field = document.createElement("input")
    field.type="text"
    field.disabled = true

    const saveBtn=document.createElement("a")
    saveBtn.className = "save"
    saveBtn.innerHTML = "&#10004;"

    saveBtn.addEventListener("click", saveText)

    const cancelBtn=document.createElement("a")
    cancelBtn.className = "cancel"
    cancelBtn.innerHTML = "&#11148;"

    cancelBtn.addEventListener("click", cancelInput)
 
    const editBtn=document.createElement("a")
    editBtn.className = "edit"
    editBtn.innerHTML = "&#9998;"

    editBtn.addEventListener("click", enableInput)

    const delBtn=document.createElement("a")
    delBtn.className = "delete"
    delBtn.innerHTML = "&#10006;"

    delBtn.addEventListener("click", removeInput)

    const flex=document.createElement("div")
    flex.className = "flex"

    input.appendChild(flex)
    flex.appendChild(delBtn)
    flex.appendChild(editBtn)
    flex.appendChild(field)
    flex.appendChild(saveBtn)
    flex.appendChild(cancelBtn)

    function enableInput(){
        textValue = field.value
        field.disabled = false
        field.focus()
        field.style.background = '#eeff90'

        editBtn.style.visibility = 'hidden'
        saveBtn.style.visibility = 'visible'
        cancelBtn.style.visibility = "visible"
    }

    function saveText(){
        field.disabled = true;
        field.style.background = '#ddd'

        editBtn.style.visibility = 'visible'
        saveBtn.style.visibility = 'hidden'
        cancelBtn.style.visibility = 'hidden'
    }

    function cancelInput(){
        field.disabled = true
        field.style.background = '#ddd'
        field.value = textValue

        editBtn.style.visibility = 'visible'
        saveBtn.style.visibility = 'hidden'
        cancelBtn.style.visibility = 'hidden'
    }
}

addBtn.addEventListener("click", addInput)