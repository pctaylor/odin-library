// Define what a book is - 'author', 'title', 'number of pages', 
// 'whether it's been read' -- anything else you want
class Book {
    constructor(author, title, pages, readStatus, rating) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.rating = rating;
        this.book = {
            author,
            title,
            pages,
            readStatus,
            rating
        };
    }
}
const lotr = new Book("JRR Tolkein", "The Lord of the Rings", 444, "Read", 4);
console.log(lotr)

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
console.log(userLibrary)

// Take user input on books to add to book array

// Display each book on a page in a table

// Add a 'new book' button 

// The 'new book' button brings up a form with 'author', 'title', 
//'number of pages', 'whether it's been read' -- anything else you want

// Display the form in a modal overlay

// Add a button on each book's display to delete it

// Add a button on each book's display to change its read status