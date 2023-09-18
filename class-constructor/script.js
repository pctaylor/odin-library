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
function addRow() {
    const addBookTrigger = document.getElementById("data-table").getElementsByTagName('tbody')[0]
    const tableBody = document.getElementById("data-table").getElementsByTagName('tbody')[0]
    const newRow = tableBody.insertRow(tableBody.rows.length);
    
    for (let i=0; i < 5; i++) {
        const cell = newRow.insertCell(i);
        cell.innerHTML = "";
    }
}
// Listen for the click event on the button
document.getElementById("newBook").addEventListener("click", addRow);

// The 'new book' button brings up a form with 'author', 'title', 
//'number of pages', 'whether it's been read' -- anything else you want

// Display the form in a modal overlay

// Add a button on each book's display to delete it

// Add a button on each book's display to change its read status