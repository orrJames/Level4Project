// custom_script.js
//import { myFunction } from "./firebase";
// Function to be called when the button is clicked
function handleClick() {
    console.log('Hello, World!');
    myFunction;
}

// Create a button and append it to the Jupyter Notebook toolbar
function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Click me';
    button.onclick = handleClick;

    const toolbar = document.querySelector('#maintoolbar-container');
    toolbar.appendChild(button);
}

// Call the function to create the button
createButton();
