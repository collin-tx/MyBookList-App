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

  static deleteBook(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    
    }    
 }

  
  static showAlert(message, className){
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
  // disappear after 3 sec
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  
  }

  static clearFields(){
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#isbn').value = "";
  }
}
// Events: Display, Add Books
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  document.querySelector('#book-form').addEventListener('submit', (e) => {
// Prevent actual submit
  e.preventDefault();
  
//Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  
// Validate
  if(title === '' || author === '' || isbn === ''){
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    
  // instantiate new book
  const book = new Book(title, author, isbn);

// Add book to UI
  UI.addBookToList(book);

// Show success alert
    UI.showAlert('Book Added', 'success');
    
//Clear fields
  UI.clearFields();
  }
});
// Remove Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
// Show success alert
    UI.showAlert('Book Removed', 'success');

});




// Store Class: Handles Storage (local)
class Store {
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
  }  else{
      books = JSON.parse(localStorage.getItem('books'));
  }
      return books;
  }
  static addBook(book){
      const books = Store.getBooks();
    
    books.push(book);
    
    localStorage.setItem('books', JSON.stringify(books));

}
  static removeBook(isbn){
    const books = Store.getbooks();
    
    books.forEach((book, index) => {}
         if (book.isbn === isbn){
          books.splice(index, 1);
     }
  });
    localStorage.setItem('books, JSON.stringify(books));
}
