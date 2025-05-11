const correctPassword = "Nørgård"; // Dette er adgangskoden, der skal bruges til at få adgang til siden
const userPassword = sessionStorage.getItem("accessKey") || prompt("Indtast adgangskode:");

if (userPassword === correctPassword) {
  sessionStorage.setItem("accessKey", userPassword);
} else {
  document.body.innerHTML = "<h1>Adgang nægtet</h1>";
}