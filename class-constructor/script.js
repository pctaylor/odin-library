// Define what a book is - 'author', 'title', 'number of pages', 
// 'whether it's been read', and 'rating'
class Book {
    constructor(author, title, pages, readStatus, rating) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.readStatus = readStatus;
        this.rating = rating;
    }
}
const lotr = new Book("JRR Tolkein", "The Lord of the Rings", 1200, "Read", 4);
const _1984 = new Book('George Orwell', '1984', 328, 'Not Read', 4.5);
console.log(_1984)

// Put everything in a class
class Library {

    // Create an array to store books and put the books in
    constructor() {
        this.bookList = []
    }
    add(book) {
        return this.bookList.push(book);
    }
}
const userLibrary = new Library
userLibrary.add(lotr)
userLibrary.add(_1984)
console.log(userLibrary)

// Display each book on a page in a table
function displayInitialBooks(bookList) {
    const tableBody = document.getElementById("data-table").getElementsByTagName('tbody')[0]

    //Clear Existing Rows
    tableBody.inert = "";

    // Loop through the array and populate the table
    bookList.forEach((book, listIndex) => {
        const newRow = tableBody.insertRow(listIndex);
        Object.values(book).forEach((value, i) => {
            const cell = newRow.insertCell(i);
            cell.textContent = value;
        });
    });
};
const userLibraryDisplay = displayInitialBooks(userLibrary.bookList);

// Take user input on books to add to book array

// Add a 'new book' button 

// Create an empty row on table
// Function to add a new row to the table
function addRow() {
    const table = document.getElementById("data-table").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
  
    // Define the input types for each cell
    const inputTypes = ["text", "text", "number", "text", "number"];
  
    // Define the input placeholders for each cell
    const placeholders = ["Author", "Title", "Pages", "Read?", "Rating"];
  
    // Add cells with input fields to the row
    for (let i = 0; i < 5; i++) {
      const cell = newRow.insertCell(i);
      const input = document.createElement("input");
      input.type = inputTypes[i];
      input.placeholder = placeholders[i];
      input.className = "form-input";
      cell.appendChild(input);
    }

    // Add a cell with a "Save" button
    const saveCell = newRow.insertCell(5);
    const saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.className = "save-button";
    saveCell.appendChild(saveButton);
    saveButton.addEventListener("click", function() {
        const row = this.parentNode.parentNode; // Get the parent row of the clicked button
        const inputs = row.querySelectorAll("input"); // Get all input elements in the row
        const rowData = {};

        // Loop through each input to collect their values
        inputs.forEach((input, index) => {
            const placeholder = input.placeholder.toLowerCase().replace("?", "").replace(" ", "-"); // Convert placeholder to key
            rowData[placeholder] = input.value; // Store input value in rowData object
        
            // Replace the input field with its value
            const cell = input.parentNode;
            cell.innerHTML = input.value;
          });

        console.log("Row Data:", rowData);

        // Remove the save button after saving
        this.parentNode.removeChild(this);
    });
  }
  
// Listen for the click event on the button
document.getElementById("newBook").addEventListener("click", addRow);
  

// The 'new book' button brings up a form with 'author', 'title', 
//'number of pages', 'whether it's been read' -- anything else you want

// Display the form in a modal overlay

// Add a button on each book's display to delete it

// Add a button on each book's display to change its read status