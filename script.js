const books = document.querySelector('.books');

// let myLibrary = [{
//     title: "Book1",
//     author: "A",
//     pages: "300",
//     read: true
// },
// {
//     title: "Book2",
//     author: "B",
//     pages: "400",
//     read: true
// }
// ];

let myLibrary = [];


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

function addCheckBooks() {
    myLibrary.map(book => {
        const checkBoxInputYes = document.createElement('input');
        const boxLabelYes = document.createElement('label');
        boxLabelYes.textContent = 'yes';
        const checkBoxInputNo = document.createElement('input');
        const boxLabelNo = document.createElement('label');
        boxLabelNo.textContent = 'no';
        checkBoxInputYes.setAttribute('type', 'checkbox');
        checkBoxInputNo.setAttribute('type', 'checkbox');
    })
}

renderBooks();

// New Book toggle appear / disappear
const button = document.querySelector('.btn');
const popup = document.querySelector('.popup');

button.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
})

// Form Submit with button1
const form = document.getElementById('form');
const submitButton = document.getElementById('submit');
const inputName = document.getElementById('bookName');
const inputAuthor = document.getElementById('bookAuthor');
const inputPage = document.getElementById('bookPages');

// submitButton.addEventListener('click', function(index) {
//     const bookItem = document.createElement('div');
//     bookItem.setAttribute('id', index);
//     bookItem.setAttribute('key', index);
//     bookItem.appendChild(createBookElement('h1', `Title: ${inputName.value}`));
//     bookItem.appendChild(createBookElement('h1', `Author: ${inputAuthor.value}`));
//     bookItem.appendChild(createBookElement('h1', `Pages: ${inputPage.value}`));
//     bookItem.appendChild(createBookElement('h1', `Read: ${bookStatus.value}`));
//     books.appendChild(bookItem);
// })

// Form submit with input
const submitInput = document.getElementById('submitInput');

submitInput.addEventListener('click', function(event) {
    myLibrary.push(
    {title: inputName.value, 
    author: inputAuthor.value,
    pages: inputPage.value,
    read: bookStatus.value});

    const bookItem = document.createElement('div');


    const checkBoxInputYes = document.createElement('input');
    const boxLabelYes = document.createElement('label');
    boxLabelYes.textContent = 'yes';
    const checkBoxInputNo = document.createElement('input');
    const boxLabelNo = document.createElement('label');
    boxLabelNo.textContent = 'no';
    checkBoxInputYes.setAttribute('type', 'checkbox');
    checkBoxInputNo.setAttribute('type', 'checkbox');

    bookItem.classList.add('class', 'card');
    let name = document.createElement('h1');
    let author = document.createElement('h1');
    let page = document.createElement('h1');
    let readStatus = document.createElement('h1');
    name.textContent = `Title: ${inputName.value}`;
    author.textContent = `Author: ${inputAuthor.value}`;
    page.textContent = `Pages ${inputPage.value}`;
    readStatus.textContent = `Read: `;
    readStatus.appendChild(checkBoxInputYes);
    readStatus.appendChild(boxLabelYes);
    readStatus.appendChild(checkBoxInputNo);
    readStatus.appendChild(boxLabelNo);
    const deleteBook = document.createElement('button');
    deleteBook.setAttribute('class', 'delete');
    deleteBook.textContent = 'Delete';
    deleteBook.setAttribute('data-book-delete', myLibrary.length);
    bookItem.appendChild(name);
    bookItem.appendChild(author);
    bookItem.appendChild(page);
    bookItem.appendChild(readStatus);
    bookItem.appendChild(deleteBook);
    bookItem.setAttribute('data-book', myLibrary.length);
    books.appendChild(bookItem);
    deleteBook.addEventListener('click', function() {
        if (bookItem.dataset.book === deleteBook.dataset.bookDelete) {
            myLibrary.splice(bookItem.dataset.book - 1 , 1);
            bookItem.remove();
        }
    })
    event.preventDefault();
})