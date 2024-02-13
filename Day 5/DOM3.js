// Create an empty div
const listBooksDiv = document.querySelector('.listBooks');

// Create an array of books
const allBooks = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        image: 'https://example.com/harrypotter.jpg',
        alreadyRead: true
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        image: 'https://example.com/greatgatsby.jpg',
        alreadyRead: false
    }
];

// Create a table element
const table = document.createElement('table');
table.border = '1'; // Optional: Add a border to the table for better visibility

// Loop through each book and create a table row for each
allBooks.forEach(book => {
    const row = table.insertRow();

    // Create cells for title, author, and image
    const titleCell = row.insertCell();
    titleCell.textContent = `Title: ${book.title}`;

    const authorCell = row.insertCell();
    authorCell.textContent = `Author: ${book.author}`;

    const imageCell = row.insertCell();
    const imageElement = document.createElement('img');
    imageElement.src = book.image;
    imageElement.width = 100;
    imageCell.appendChild(imageElement);

    // If the book is already read, set the color to red
    if (book.alreadyRead) {
        titleCell.style.color = 'red';
        authorCell.style.color = 'red';
        imageElement.style.border = '1px solid red'; // Optional: Add a red border to the image
    }
});

// Append the table to the div
listBooksDiv.appendChild(table);
