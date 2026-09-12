const container = document.querySelector(".book-list");
const dialog = document.getElementById("bookDialog");
const openBtn = document.getElementById("show");
const closeBtn = document.getElementById("close");


openBtn.addEventListener('click', () => {
  dialog.showModal(); 
});

// 2. Close the dialog
closeBtn.addEventListener('click', () => {
  dialog.close();
});


const myLibrary = [];

function Book() {
  constructor(title, author, numOfPages);{
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = 0;
    this.id = crypto.randomUUID();
    
    this.displaySelf = function(){
        return `
                Title : ${this.title}
                Author: ${this.author}
                Number of pages: ${this.numOfPages}
                Read : ${this.isRead}
                ID    : ${this.id}`;
    }

  }
}

function addBookToLibrary(book) {

}

function displayBooks(){
    myLibrary.forEach(element => {
    
  });
}

