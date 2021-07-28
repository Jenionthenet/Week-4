const firstNameBox = document.getElementById("inputBox")
const lastNameBox = document.getElementById("inputBox2")
const saveButton = document.getElementById("submitButton")
const nameDiv = document.getElementById("firstLast")


function nameChange() {

}
saveButton.innerHTML = "Enter"

saveButton.addEventListener("click", function () {
    const firstName = firstNameBox.value
    const lastName = lastNameBox.value 

    const divName = `
    <input type = "checkbox: onchange = "nameChange( )" />
    <label> ${firstName}
    `
})

