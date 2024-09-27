let randomPassword = document.getElementById("random_password");
let generateButton = document.getElementById("generate");

let possibilities = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Lettres majuscules
  ..."abcdefghijklmnopqrstuvwxyz", // Lettres minuscules
  ..."0123456789", // Chiffres de 0 à 9
  ..."!@?-_&", // Caractères spéciaux
];

if (generateButton) {
  generateButton.addEventListener("click", () => {
    let length = getPasswordLength(); // Récupère la longueur du mot de passe
    generatePassword(length); // Passe la longueur à la fonction de génération
  });
}

function getPasswordLength() {
  let userChoice = NaN;

  while (isNaN(userChoice) || userChoice <= 0) {
    userChoice = Number(
      prompt(
        "Entrez le nombre de caractères que vous souhaitez pour votre nouveau mot de passe (nombre positif uniquement) :"
      )
    );

    if (isNaN(userChoice) || userChoice <= 0) {
      alert("Merci d'entrer un nombre valide supérieur à 0.");
    }
  }

  return userChoice;
}

function generatePassword(userChoice) {
  let password = ""; // Initialise le mot de passe vide

  // Parcours autant de fois que la longueur choisie
  for (let i = 0; i < userChoice; i++) {
    // Génére un nombre aléatoire à chaque itération
    let randomNumber = Math.floor(Math.random() * possibilities.length);

    // Ajoute le caractère correspondant à `password`
    password += possibilities[randomNumber];
  }

  // Affiche le mot de passe complet
  if (randomPassword) {
    randomPassword.innerHTML = password;
  }
}
