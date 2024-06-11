console.log('scripts Loaded!');

const studentName = "Niken Bajracharya";
const studentNumber = "1092758";

// Creating a desired string
const result = `${studentName} - ${studentNumber}`;
console.log(result);

// Access the <h1> and assigning it to a variable
const headerContent = document.querySelector('h1');


// Updating  the <h1> content with your name and student number
headerContent.innerHTML = `${studentName} - ${studentNumber}`;

// Add a class called heading1 to the <h1> element
headerContent.classList.add('heading1');
