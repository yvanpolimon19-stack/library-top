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
  container.replaceChildren();
  myLibrary.forEach(element => {

    const newElement = document.createElement("div");
    const newHeader = document.createElement("h1");
    newHeader.textContent = "Title: " + element.title;

    const lineOne = document.createElement("h2");
    lineOne.textContent = "Author: "+ element.author;

    const lineTwo = document.createElement("h2");
    lineTwo.textContent = "Number of Pages: " + element.numOfPages;

    if (element.isRead) {

      const bookStatus = document.createElement("p");
      bookStatus.textContent = "Book has already been read";
      
    } else{
      const bookStatus = document.createElement("p");
      bookStatus.textContent = "Book has not yet been read";
    }

    const removeButton = document.createElement("button");

    removeButton.text = "Remove Book";
    removeButton.type = "button";
    removeButton.id = element.randomUUID;

    removeButton.addEventListener("click",()=>{
      const filteredBooks = myLibrary.filter(book => book.randomUUID !== removeButton.id);
    })

    

    newElement.appendChild(newHeader);
    newElement.appendChild(lineOne);
    newElement.appendChild(lineTwo);
    newElement.appendChild(removeButton);
    //newElement.appendChild(bookStatus);

    newElement.classList.add("book-card")

    container.appendChild(newElement);

  });
}



dialog.addEventListener('close',()=>{

  if(dialog.returnValue === "submitted"){

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const isRead = formData.has('isRead');

    const pages = Number(data.pages);

    console.log("Captured Data: ",data);
    
    const book = new Book(data.title, data.author,pages, isRead);
    addBookToLibrary(book);

    displayBooks();

    form.reset();
  }
})











