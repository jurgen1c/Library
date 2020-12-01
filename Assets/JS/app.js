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

function showForm() {
  form.className = 'show';
}

function showLibrary() {
  libWrap.innerHTML = '';
  for (let i = 0; i < library.length; i += 1) {
    const bookCard = document.createElement('div');
    const btitle = document.createElement('h2');
    const asubtitle = document.createElement('h3');
    const content = document.createElement('p');
    btitle.innerText = library[i].title;
    asubtitle.innerText = 'Author: ' + library[i].author.toUpperCase();
    content.innerHTML = `Pages: ${library[i].numpages} ${library[i].read}`;

    bookCard.setAttribute('class', 'book-card');
    btitle.setAttribute('class', 'card-title');
    asubtitle.setAttribute('class', 'card-author');
    content.classList = 'card-content';

    const rbtn = document.createElement('button');
    rbtn.innerHTML = 'Delete Book';
    rbtn.id = `remove-${i}`;
    rbtn.className = 'btn';
    rbtn.setAttribute('onclick', `deleteBook(${i})`);
    const sbtn = document.createElement('button');
    sbtn.innerHTML = 'Status';
    sbtn.id = `status-${i}`;
    sbtn.className = 'btn';
    sbtn.setAttribute('onclick', `readStatus(${i})`);
    bookCard.appendChild(btitle);
    bookCard.appendChild(asubtitle);
    bookCard.appendChild(content);
    bookCard.appendChild(rbtn);
    bookCard.appendChild(sbtn);
    libWrap.appendChild(bookCard);
  }
}

function createBook() {
  const book = new Book();
  book.title = tinput.value;
  book.author = ainput.value;
  book.numpages = ninput.value;
  library.push(book);
  form.className = 'hide';
  showLibrary();
}

function readStatus(b) {
  if (library[b].read === 'Read') {
    library[b].read = 'Not Read';
  } else {
    library[b].read = 'Read';
  }
  showLibrary();
}

function deleteBook(idx) {
  library.splice(idx, 1);
  showLibrary();
}

showLibrary();
