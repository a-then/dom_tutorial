console.log("Hello Path2Tech Trainees have fun with DOM!");
// Selecting an element with an ID of element
const element = document.querySelector("#element");
console.log(element);
// Using .textContent to change the text of an element with an ID of manipulate
const manipulate = document.querySelector("#manipulate");
manipulate.textContent = "I like Italian food!";
// Using .innerHTML to change the HTML of an element with an ID of manipulate-html
const manipulateHtml = document.querySelector("#manipulate-html");
manipulateHtml.innerHTML = `
<strong>Pepperoni Pizza is amazing</strong>
<br>
<em>Tour of Italy is an amazing dish</em>
<br>
<a href="https://npower.org" target="_blank">Npower's Site</a>
`;
// Changing the src of an image with JavaScript
const image = document.querySelector('img');
image.src = './assets/dog.jpg';
// Changing the style of an element with an ID of style
const styleElement = document.querySelector("#style");
styleElement.style.color = "orange";
styleElement.style.backgroundColor = "black";
styleElement.style.fontSize = "2rem";
styleElement.style.padding = "15px";
// Using .classList to remove the "ugly" class from an element
const removeClass = document.querySelector("#remove-class");
removeClass.classList.remove("ugly");
// Using .classList to add "basic" class to an element
const addClass = document.querySelector("#add-class");
addClass.classList.add("basic");
// Using .classList to toggle "dark" class on an elementc
const colorMode = document.querySelector("#color-mode");
colorMode.classList.toggle("dark"); // add
colorMode.classList.toggle("dark"); // remove
colorMode.classList.toggle("dark"); // add
// Add a new element to the section with an ID of add-item
const addItem = document.querySelector("#add-item"); // selecting the section
const newItem = document.createElement("p"); // creating a new paragraph element
newItem.textContent = "Why is Javi's kid so loud and distracting the entire class?"; // changing the text of the new paragraph
addItem.appendChild(newItem); // appending the new paragraph to the section
// Removing an element with an ID of remove-item
const removeItem = document.querySelector("#remove-item"); // selecting the element to be removed
removeItem.remove(); // removing the element from the DOM
// Create a new element when the button with and ID of click is pressed
function createNewElement(event){
    let textToAdd = "";
    if (event.type === "click"){
        textToAdd = "Single click hooray!";
    } else {
        textToAdd = "Double click hooray!";
    }
    const parentElement = document.querySelector("#event-listeners");
    const newElement = document.createElement("p");
    newElement.textContent = textToAdd;
    newElement.style.position = "absolute";
    newElement.style.top = 0;
    newElement.style.right = 0;
    newElement.style.backgroundColor = "whitesmoke";
    newElement.style.padding = "5px";
    parentElement.appendChild(newElement);
    setTimeout(function() {
        newElement.remove();
    }, 2000);
}
const clickButton = document.querySelector("#click");
clickButton.addEventListener("click", createNewElement);
const doubleClickButton = document.querySelector("#dbl-click");
doubleClickButton.addEventListener("dblclick", createNewElement);
// Working with mouse enter and mouse leave events
function handleMouseEvent(event){
    let textToAdd = "";
    if (event.type === "mouseenter") {
        textToAdd = "Mickey Mouse has entered the building!";
    } else if (event.type === "click"){
        textToAdd = "Mickey Mouse has clicked something cool!";
    } else {
        textToAdd = "Add a mouse enter and mouse event to something cool";
    }
    const element = event.target.querySelector("h2");
    element.textContent = textToAdd;
}
const mouseEvent = document.querySelector("#mouse-event");
mouseEvent.addEventListener("mouseenter", handleMouseEvent);
mouseEvent.addEventListener("mouseleave", handleMouseEvent);
mouseEvent.addEventListener("click", handleMouseEvent);
// Working with keyboard events
function handleKeyPress(event){
    const key = event.key;
    if (event.type === "keypress"){
        const element = document.querySelector("#key-press");
        element.textContent = key;
    } else if (event.type === "keydown"){
        const element = document.querySelector("#key-down");
        element.textContent = key;
    } else if (event.type === "keyup") {
        const element = document.querySelector("#key-up");
        element.textContent = key;
    }
}
document.addEventListener("keypress", handleKeyPress);
document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyPress);

// Change Event on Premium Checkbox
const premiumCheckBox = document.querySelector("#premium");
function handlePremiumChange(event) {
    let message = "";
    if (event.target.checked) {
        message = "Premium user!";
    }
    const premiumSelected = document.querySelector("#premium-selected");
    premiumSelected.textContent = message;
}
premiumCheckBox.addEventListener("change", handlePremiumChange);

// Check for Bad Characters in Feedback
const badCharacterList = ["'", "@", "//", "INSERT", "DELETE"];
function handleFeedbackInput(event) {
    const badCharacters = document.querySelector("#bad-characters");
    const val = event.target.value;
    const hasBadCharacter = badCharacterList.some(char => val.toLowerCase().includes(char.toLowerCase()));
    if (hasBadCharacter) {
        badCharacters.textContent = "Bad character detected!";
    } else {
        badCharacters.textContent = "";
    }
}
const feedbackInput = document.querySelector("#feedback");
feedbackInput.addEventListener("input", handleFeedbackInput);

// Focus vs Blur Events
function handleFocusandBlur(event) {
    let message = "";
    const isFocusElement = document.querySelector("#is-focus");
    if (event.type === "focus"){
        message = "focused";
    } else {
        message = "blurred";
    }
    isFocusElement.textContent = message;
}
feedbackInput.addEventListener("focus", handleFocusandBlur);
feedbackInput.addEventListener("blur", handleFocusandBlur);
// Form Submission and Reset events
function handleFormSubmit(event) {
    event.preventDefault();
    const feedbackSection = document.querySelector("#feedback-section");
    const feedBackValue = event.target.feedback.value;
    const premiumValue = event.target.premium.checked;
    const newElement = document.createElement("section");
    newElement.innerHTML = `
    <p>User's feedback: ${feedBackValue}</p>
    <p>Premium status: ${premiumValue ? 'premium user' : 'standard user'}</p>
    `;
    feedbackSection.appendChild(newElement);
    event.target.reset();
}
function handleFormReset() {
    const newElement = document.createElement("p");
    newElement.textContent = "Form reset!";
    newElement.style.position = "fixed";
    newElement.style.top = "0";
    newElement.style.right = "0";
    newElement.style.backgroundColor = "whitesmoke";
    newElement.style.padding = "5px";
    newElement.style.zIndex = "100";
    document.body.appendChild(newElement);
    setTimeout(function() {
        newElement.remove();
    }, 2000);
}
const feedbackForm = document.querySelector("#feedback-form");
feedbackForm.addEventListener("submit", handleFormSubmit);
feedbackForm.addEventListener("reset", handleFormReset);

// AJAX in DOM Example
const fetchTodosButton = document.querySelector("#fetch-todos") 
const todosSection = document.querySelector("#todos-section");
async function fetchTodos(){
    try {
        const apiUrl = "https://jsonplaceholder.typicode.com/todos";
        const response = await fetch(apiUrl);
        const data = await response.json();
        for (const item of data) {
            const newElement = document.createElement("section");
            newElement.innerHTML = `
            <p>${item.title}</p>
            <p>${item.completed ? "Todo is complete" : "Todo is not complete"}</p>
            `;
            todosSection.appendChild(newElement);
        }
    } catch (error) {
        console.log(error.message);
    }
}
// fetchTodos(); // uncomment this to fetch todos on page load
fetchTodosButton.addEventListener("click", fetchTodos);

 const filteredData = data.filter((_, idx) => idx < 10); // Limit to first 10 items
        for (const item of filteredData) {
            const newElement = document.createElement("section");
            newElement.innerHTML = `
            <p>${item.title}</p>
            <p>${item.completed ? "Todo is complete" : "Todo is not complete"}</p>
            `;
            todosSection.appendChild(newElement);
        }