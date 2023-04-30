// Remove the 'main' element
const main = document.querySelector('#main');
main.remove();

// Create a new 'h1' element
const newHeader = document.createElement('h1');

// Set the 'id' attribute of the 'h1' element to 'victory'
newHeader.id = 'victory';

// Set the text of the 'h1' element
newHeader.textContent = 'YOUR-NAME is the champion'; // replace YOUR-NAME with your name

// Append the 'h1' element to the 'body' element
document.body.appendChild(newHeader);
// Wait for the DOM to load