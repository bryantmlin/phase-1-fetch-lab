function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json))

  
}

function addPageNumbers(books) {
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')
  let total = 0
  books.forEach(book => {
    total+= book.numberOfPages
    h2.innerHTML = total
    main.appendChild(h2)
  })

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
