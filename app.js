//Book Class: Represents a Book
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}


// UI Class: Handle UI tasks
class UI {
  static displayBooks(){
    const storedBooks = [
  
  {
    title: 'Critique of Pure Reason',
    author: 'Immanuel Kant',
    isbn: '98678'
  },
  {
    title: 'Phenomenology of Spirit',
    author: 'Georg Wilhelm Friedrich Hegel',
    isbn: '696969'
  },
  {
    title: 'Thus Spoke Zarathustra',
    author: 'Friedrich Nietzsche',
    isbn: '123546'
  }
 ];

  const books = storedBooks;
  
  books.forEach((book) => UI.addBookToList(book));
 }
 
 static addBookToList(book){
  const list = document.querySelector('#book-list');
   
  const row = document.createElement('tr');
   
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;
   
   list.appendChild(row);
 }

  static clearFields(){
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#isbn').value = "";
  }
}


// Store Class: Handles Storage (local)


// Events: Display, Add, Remove Books
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  document.querySelector('#book-form').addEventListener('submit', (e) => {
// Prevent actual submit
  e.preventDefault();
  
//Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  
// instantiate new book
  const book = new Book(title, author, isbn);

// Add book to UI
  UI.addBookToList(book);

//Clear fields
  UI.clearFields();
  

});





