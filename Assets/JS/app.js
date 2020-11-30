const library = [];
const form = document.querySelector('form');
const libWrap = document.querySelector('.lib-wrap');
const tinput = document.querySelector('.b-title');
const ainput = document.querySelector('.b-author');
const ninput = document.querySelector('.b-pages');

function Book(title, author, numpages, read) {
  this.title = title;
  this.author = author;
  this.numpages = numpages;
  this.read = read;
}

// Tests -------------------------
const book1 = new Book('may', 'sunday', '500', 'Not Read');
const book2 = new Book('december', 'jurgen', '300', 'Read');

library.push(book1);
library.push(book2);

function createBook() {
  const book = new Book();
  book.title = tinput;
  book.author = ainput;
  library.push(book);
  form.className = 'hide';
}

function showForm() {
  form.className = 'show';
}

function showLibrary() {
  for (let i = 0; i < library.length; i += 1) {
    const bookCard = document.createElement('div');
    const btitle = document.createElement('h2');
    const asubtitle = document.createElement('h3');
    const content = document.createElement('p');
    btitle.innerText = library[i].title;
    asubtitle.innerText = library[i].author;
    content.innerHTML = library[i].numpages + library[i].read;

    bookCard.setAttribute('class', 'book-card');
    btitle.setAttribute('class', 'card-title');
    asubtitle.setAttribute('class', 'card-author');
    content.classList = 'card-content';


    bookCard.appendChild(btitle);
    bookCard.appendChild(asubtitle);
    bookCard.appendChild(content);
    libWrap.appendChild(bookCard);
  }
}

showLibrary();
