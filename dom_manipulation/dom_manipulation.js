document.addEventListener('DOMContentLoaded', function() {


    // Selecting elements by ID
const headingElement = document.getElementById('heading');
console.log(headingElement.textContent); // Output: Hello, World!

// Selecting elements by class name
const paragraphElements = document.getElementsByClassName('content');
console.log(paragraphElements.length); // Output: 1
console.log(paragraphElements[0].textContent); // Output: This is a paragraph.

// Selecting elements by tag name
const buttonElements = document.getElementsByTagName('button');
console.log(buttonElements.length); // Output: 1
console.log(buttonElements[0].textContent); // Output: Click me



    // Selecting DOM elements
    const heading = document.querySelector('h1');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a dynamically created paragraph.';
    // Modifying element prototype
    heading.style.color = 'blue';
    // Creating and appending elements
    document.body.appendChild(paragraph);

    // Changing background color
    document.body.style.backgroundColor = 'lightgray';

    // Display JavaScript code
    const jsCodeElement = document.getElementById('jsCode');
    jsCodeElement.textContent = `
        // Selecting DOM elements
        const heading = document.querySelector('h1');
        const paragraph = document.createElement('p');
        paragraph.textContent = 'This is a dynamically created paragraph.';
        // Modifying element prototype
        heading.style.color = 'blue';
        // Creating and appending elements
        document.body.appendChild(paragraph);

        // Changing background color
        document.body.style.backgroundColor = 'lightgray';
    `;
});
