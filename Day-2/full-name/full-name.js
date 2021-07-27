const submitButton = document.getElementById("submitButton")
const firstName = document.getElementById("firstNameTextBox")
const lastName = document.getElementById("lastNameTextBox")
const nameHeading = document.getElementById("nameHeading")


submitButton.addEventListener("click", function () {
    
    const first = firstName.value
    const last = lastName.value

    nameHeading.innerHTML = first + " " + last
} )