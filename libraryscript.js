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