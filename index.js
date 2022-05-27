console.log("i am jerry library");

class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(book) {
    let bookTable = document.getElementById("tableBody");
    let bookText = `<tr>
                            <th scope="row">1</th>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                            <td><button type="button" class="btn btn-danger" id="deleteBtn">Delete</button></td>
                        </tr>`;
    bookTable.innerHTML += bookText;
  }

  clear() {
    let formSubmit = document.getElementById("submitForm");
    formSubmit.reset();
  }

  validate(book) {
    if (book.name.length > 2 || book.author.length > 2) {
      return true;
    } else {
      return false;
    }
  }

  show(type, message) {
    let alert = document.getElementById("alert");
    let typetext;
    if (type === "success") {
      typetext = "Success";
    } else {
      typetext = "Error";
    }
    alert.innerHTML += `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${typetext}!</strong> ${message}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
    setTimeout(() => {
      alert.innerHTML = "";
    }, 5000);
  }
}

let formSubmit = document.getElementById("submitForm");
formSubmit.addEventListener("submit", atFormSubmit);

function atFormSubmit(e) {
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("authorName").value;
  let type;

  let adventure = document.getElementById("adventure");
  let fiction = document.getElementById("fiction");
  let comic = document.getElementById("comic");
  let horror = document.getElementById("horror");
  let fantasy = document.getElementById("fantasy");

  if (adventure.checked) {
    type = adventure.value;
  } else if (fiction.checked) {
    type = fiction.value;
  } else if (comic.checked) {
    type = comic.value;
  } else if (horror.checked) {
    type = horror.value;
  } else if (fantasy.checked) {
    type = fantasy.value;
  }
  let book = new Book(name, author, type);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your book has been sucessfully added!");
  } else {
    display.show("danger", "Sorry, you cannot add this book");
  }

  e.preventDefault();
}
