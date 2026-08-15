const myLibrary = [];

function Book() {
  constructor(title, author){
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
    
    this.displaySelf = function(){
        return `
                Title : ${this.title}
                Author: ${this.author}
                ID    : ${this.id}`;
    }

  }
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

