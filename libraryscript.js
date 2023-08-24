// Constructor function for creating a book
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    Book.prototype.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
    };
}

// function to add book to library
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
  }

// Reference to the table body
const tbody = document.getElementById('libTable').getElementsByTagName('tbody')[0];

//Creating the initial library
const hobbit = new Book("The Hobbit", "JRR Tolkein", 300, "read");
const bible = new Book("The Bible", "Various", 1734, "not read");
const infiniteJest = new Book("Infinite Jest", "David Foster Wallace", 1190, "not read");
const myLibrary = [hobbit, bible, infiniteJest]
console.log(myLibrary);

//Loop through the array of objects in the library and add them to the table
myLibrary.forEach(obj => {
    // For each object, create a new row
    const row = tbody.insertRow();

    // Loop through key-value pairs of the object
    for (let key in obj) {
        
        // exclude the function
        if (typeof obj[key] === 'function') {
            continue;
        }

        // Insert a new cell for the value
        let valueCell = row.insertCell();
        valueCell.textContent = obj[key];
    }
});

// User can delete a row by selecting the delete button
document.addEventListener("DOMContentLoaded", function() {

    // Function to add a delete button next to each row
    function addDeleteButtons() {
        // Get the tbody and button container elements by their ids
        const tbody = document.getElementById("libTable").getElementsByTagName("tbody")[0];
        const buttonContainer = document.getElementById("button-container");

        // Clear existing buttons
        buttonContainer.innerHTML = '';

        // Loop through each row in the tbody
        for (let i = 0; i < tbody.rows.length; i++) {
            const row = tbody.rows[i];

            // Create a delete button
            const deleteButton = document.createElement("div");
            deleteButton.textContent = "x";
            deleteButton.className = "delete-button";

            // Add a click event listener to the delete button
            deleteButton.addEventListener("click", function() {
                // Delete the corresponding row from the table
                row.remove();
                // Update the delete buttons
                addDeleteButtons();
            });

            // Append the delete button to the button container
            buttonContainer.appendChild(deleteButton);
        }
    }

    // Add delete buttons initially (if there are any rows to start with)
    addDeleteButtons();

    // Your existing code to add rows can go here.
    const addButton = document.getElementById("btn-add");
    addButton.addEventListener("click", function() {
        console.log("click");

        // Get the tbody element by its id
        const tbody = document.getElementById("libTable").getElementsByTagName("tbody")[0];

        // Create a new row and append it to the tbody
        const newRow = tbody.insertRow();

        // Define the number of columns in the table
        const numColumns = 4;

        // Loop through each cell in the new row
        for (let i = 0; i < numColumns; i++) {
            // Insert a new cell
            const newCell = newRow.insertCell();

            // Create an input element
            const input = document.createElement("input");

            // Add the input element to the cell
            newCell.appendChild(input);
        }
        addDeleteButtons();
    });
});

// When a user clicks save, save the table input
document.addEventListener("DOMContentLoaded", function() {
    // Get the save button element by its id
    const saveButton = document.getElementById("btn-save");

    // Add a click event listener to the save button
    saveButton.addEventListener("click", function() {
        // Get the tbody element by its id
        const tbody = document.getElementById("libTable").getElementsByTagName("tbody")[0];

        // Loop through each row in the tbody
        for (let i = 0; i < tbody.rows.length; i++) {
            const row = tbody.rows[i];

            // Loop through each cell in the row
            for (let j = 0; j < row.cells.length; j++) {
                const cell = row.cells[j];

                // Get the input element in the cell
                const input = cell.getElementsByTagName("input")[0];

                // If an input element exists, replace it with its value
                if (input) {
                    const value = input.value;
                    cell.innerHTML = value;
                }
            }
        }
    });
});

// Update read based on click
// Function to toggle the "Read" status in the table
function toggleReadStatus(tableId) {
    // Get the tbody element by its id
    const tbody = document.getElementById(tableId).getElementsByTagName("tbody")[0];

    // Loop through each row in the tbody
    for (let i = 0; i < tbody.rows.length; i++) {
        const row = tbody.rows[i];

        // Get the cell in the "Read" column (fourth column, index 3)
        const readCell = row.cells[3];

        // Add a click event listener to the cell
        readCell.addEventListener("click", function() {
            // Toggle the cell's value between "read" and "not read"
            if (readCell.textContent.toLowerCase() === "read") {
                readCell.textContent = "not read";
            } else {
                readCell.textContent = "read";
            }
        });
    }
}

// Call the function for the table with id "libTable"
document.addEventListener("DOMContentLoaded", function() {
    toggleReadStatus("libTable");
});
