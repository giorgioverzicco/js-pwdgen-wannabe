// prompt user for his name
const name = prompt("Qual è il tuo nome?");
// prompt user for his last name
const lastName = prompt("Qual è il tuo cognome?");
// prompt user for his favorite color
const favoriteColor = prompt("Qual è il tuo colore preferito?");
// generate password from previous prompts and by appending '21' at the end
const password = `${name}${lastName}${favoriteColor}21`;

// welcome the user
document.getElementById("welcome").innerHTML = `Ciao ${name}!<br>La tua password generata è:`;
// show the password
document.getElementById("password").innerHTML = `${password}`;
