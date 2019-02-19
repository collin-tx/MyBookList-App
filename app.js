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
}


// Store Class: Handles Storage (local)


// Events: Display, Add, Remove Books
