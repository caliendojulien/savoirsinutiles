// UI UX
document.getElementById("date").valueAsDate = new Date();
document.getElementById("auteur").focus();
$("#bouton").click(ajouterSavoir);

setInterval(() => {
  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET",
  }).done((donnees) => $("#chucknorris").text(donnees.value));

  let hasard = Math.floor(Math.random() * 1000) + 1;
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + hasard,
    method: "GET",
  }).done((donnees) =>
    $("#pokemon").attr("src", donnees.sprites.front_default)
  );
}, 5000);

// document.getElementById('bouton').addEventListener(
//     'click',
//     () => {
//         let auteur = document.getElementById('auteur').value;
//         let savoir = document.getElementById('savoir').value;
//         let date = document.getElementById('date').value;
//         let nouvelElement = document.createElement('div');
//         nouvelElement.classList.add("card");
//         let nouveauP1 = document.createElement('p');
//         nouveauP1.innerText = savoir;
//         let nouveauP2 = document.createElement('p');
//         nouveauP2.innerText = 'Par ' + auteur + ' le ' + date;
//         nouvelElement.appendChild(nouveauP1);
//         nouvelElement.appendChild(nouveauP2);
//         document.getElementById('cartes').appendChild(nouvelElement);
//     }
// );

function ajouterSavoir() {
  // Je récupère les 3 valeurs
  let auteur = $("#auteur").val();
  let savoir = $("#savoir").val();
  let date = $("#date").val();
  let nouvelElement = $("<div></div>");
  nouvelElement.addClass("card");
  let nouveauP1 = $("<p></p>");
  nouveauP1.text(savoir);
  let nouveauP2 = $("<p></p>");
  nouveauP2.text("Par " + auteur + " le " + date);
  nouvelElement.append(nouveauP1);
  nouvelElement.append(nouveauP2);
  nouvelElement.click(supprimer);
  $("#cartes").append(nouvelElement);
}

function supprimer() {
  if (confirm("On supprime ?")) {
    this.remove();
  }
}
