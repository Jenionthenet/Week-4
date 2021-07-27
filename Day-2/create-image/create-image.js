const submitButton = document.getElementById("submitButton")
const urlTextBox = document.getElementById("images")
const parentUl = document.getElementById("pasteImages")



submitButton.addEventListener("click", function () {
    const imageURL = urlTextBox.value
    const imageLI = document.createElement("li")
    const imageElement = document.createElement("img")


    parentUl.appendChild(imageLI)
    imageLI.appendChild(imageElement)
    imageElement.setAttribute("src",imageURL)

})




