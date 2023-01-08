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