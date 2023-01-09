const books = document.querySelector('.books');

let myLibrary = [{
    title: "Book1",
    author: "A",
    pages: "300",
    read: true
},
{
    title: "Book2",
    author: "B",
    pages: "400",
    read: true
}
];

function createBookElement(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;

}

function createBookItem(book, index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index);
    bookItem.setAttribute('key', index);
    bookItem.appendChild(createBookElement('h1', `Title: ${book.title}`));
    bookItem.appendChild(createBookElement('h1', `Author: ${book.author}`));
    bookItem.appendChild(createBookElement('h1', `Pages: ${book.pages}`));
    bookItem.appendChild(createBookElement('h1', `Read: ${book.read}`));
    books.appendChild(bookItem);
}

function renderBooks() {
    myLibrary.map((book, index) => {
        createBookItem(book, index)
    })
}

renderBooks();

// New Book toggle appear / disappear
const button = document.querySelector('.btn');
const popup = document.querySelector('.popup');

button.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
})

// Form Submit with button!
const form = document.getElementById('form');
const submitButton = document.getElementById('submit');
const inputName = document.getElementById('bookName');
const inputAuthor = document.getElementById('bookAuthor');
const inputPage = document.getElementById('bookPages');

submitButton.addEventListener('click', function(index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index);
    bookItem.setAttribute('key', index);
    bookItem.appendChild(createBookElement('h1', `Title: ${inputName.value}`));
    bookItem.appendChild(createBookElement('h1', `Author: ${inputAuthor.value}`));
    bookItem.appendChild(createBookElement('h1', `Pages: ${inputPage.value}`));
    bookItem.appendChild(createBookElement('h1', `Read: ${bookStatus.value}`));
    books.appendChild(bookItem);
})

// Form submit with input