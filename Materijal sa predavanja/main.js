import { Book } from "./Book.js";
import { UI } from "./UI.js";

const ui = new UI();

document.querySelector("#book-form").addEventListener("submit", dodajKnjigu);
document.querySelector("#book-list").addEventListener("click", brisi);

function dodajKnjigu(e) {
  e.preventDefault();

  let podaci = UI.pokupiPodatke(); //ui.pokupiPodatke();
  // console.log(podaci);
  if (podaci.title == "" || podaci.author == "" || podaci.isbn == "") {
    ui.prikazPoruke("Nisu popunjeni svi podaci", "error");
  } else {
    const knjiga = new Book(podaci.title, podaci.author, podaci.isbn);
    console.log(knjiga);

    ui.prikaziKnjigu(knjiga);
    ui.prikazPoruke("Knjiga uspesno dodata", "success");
    ui.ocistiPolja();
  }
}

function brisi(e) {
  if (e.target.className == "delete") {
    console.log(e);

    ui.brisiKnjigu(e.target);
    ui.prikazPoruke("Knjiga je uspesno obrisana", "success");
  }
}
