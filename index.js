const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.toggleReadStatus = function(){
    this.read = !this.read;
}

function toggleReadStatus(index){
    myLibrary[index].toggleReadStatus();
    render();
}


function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";

    for  ( let index =  0; index < myLibrary.length; index++) {
        let book = myLibrary[index];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `<div id="remove" ><p>Title: ${book.title}</p><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p><p> ${book.read ? "read" :"Not Yet Read"}</p>
        <button class = "remove-btn" onclick="removeBook(${index})" >Remove</button>

        <button class = "read-btn" onclick="toggleReadStatus(${index})">Toggle Read</button>
        </div>`;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}
function checkTitle(title){

    return myLibrary.some(book => book.title === title);
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    if (title === "" || author === "" || pages === "") {
        alert("Please fill in all the required fields.");
        return; // Stop execution if fields are not filled
    }
    if(checkTitle(title)){
        alert("There is  a duplicate of this book")
        return;
    }
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(newBook);
    render();
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function () {
    let newForm = document.querySelector("#new-form-btn");
    newForm.style.display = "block";
});

document.querySelector("#new-form-btn").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();


    
});