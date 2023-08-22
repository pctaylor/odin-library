const myLibrary = []

function Book(title, author, pages, read) {
    Book.prototype.title = title
    Book.prototype.author = author
    Book.prototype.pages = pages
    Book.prototype.read = read
    Book.prototype.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
    };
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
  }