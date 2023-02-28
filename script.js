// UI UX - Ynov campus
document.getElementById('date').valueAsDate = new Date();
document.getElementById('auteur').focus();
document.getElementById('bouton').addEventListener('click', ajouterSavoir);

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
    let auteur = document.getElementById('auteur').value;
    let savoir = document.getElementById('savoir').value;
    let date = document.getElementById('date').value;
    let nouvelElement = document.createElement('div');
    nouvelElement.classList.add("card");
    let nouveauP1 = document.createElement('p');
    nouveauP1.innerText = savoir;
    let nouveauP2 = document.createElement('p');
    nouveauP2.innerText = 'Par ' + auteur + ' le ' + date;
    nouvelElement.appendChild(nouveauP1);
    nouvelElement.appendChild(nouveauP2);
    nouvelElement.addEventListener('click', supprimer);
    document.getElementById('cartes').appendChild(nouvelElement);
}

function supprimer() {
    if (confirm("On supprime ?")) {
        this.remove();
    }
}