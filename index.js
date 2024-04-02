// Remove the <main> element with the id "main"
const mainElement = document.getElementById("main");
mainElement.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id attribute of the <h1> element to "victory"
newHeader.id = "victory";

// Set the text content of the <h1> element to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion";

// Append the <h1> element to the body of the document
document.body.appendChild(newHeader);
