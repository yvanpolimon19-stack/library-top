const container = document.querySelector(".book-list");
const dialog = document.getElementById("bookDialog");
const openBtn = document.getElementById("show");
const closeBtn = document.getElementById("close");
const form = document.getElementById("bookForm");
const myLibrary = [];

function Book(title, author, numOfPages, isRead) {

    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
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
openBtn.addEventListener('click', () => {
  dialog.showModal(); 
});

// 2. Close the dialog
closeBtn.addEventListener('click', () => {
  dialog.close();
});

function addBookToLibrary(book) {
  myLibrary.push(book);

  
}

function displayBooks(){

  myLibrary.forEach(element => {

    const newElement = document.createElement("div");
    newElement.textContent =  element.displaySelf;
    container.appendChild(newElement);
    newElement.classList.add("book-card")
  });
}



dialog.addEventListener('close',()=>{
  if(dialog.returnValue === "submitted"){

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

     const isRead = formData.has('isRead');

    const pages = Number(data.pages);

    console.log("Captured Data: ",data);
    const book = new Book(data.title, data.author,pages, data.isRead);
    addBookToLibrary(book);

    displayBooks();

    form.reset();
  }
})







