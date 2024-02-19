export class UI {
  static pokupiPodatke() {
    return {
      title: document.querySelector("#title").value,
      author: document.querySelector("#author").value,
      isbn: document.querySelector("#isbn").value,
    };
  }
  prikaziKnjigu(book) {
    const prikaz = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class='delete'>X</a></td>
        `;
    prikaz.appendChild(row);
  }

  ocistiPolja() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  prikazPoruke(poruka, tip){

    const div = document.createElement("div");
    div.className = `alert ${tip}`;
    div.appendChild(document.createTextNode(poruka));
    const container = document.querySelector(".container");
    container.insertBefore(div, document.querySelector("#book-form"));
    setTimeout(() => {
        document.querySelector(".alert").remove();
    }, 3000);
  }

  brisiKnjigu(elem){
    if(elem.className == "delete"){
        console.log(elem)
        elem.parentElement.parentElement.remove()
    }
  }
}
