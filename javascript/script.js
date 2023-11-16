document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Hämta data från formuläret
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var numberOfPeople = document.getElementById('numberOfPeople').value;

    // Här kan du hantera formulärdata enligt dina behov, som att skicka den till en server eller liknande.
    // Du kan till exempel använda fetch API för att skicka data till en server.

    // Exempel på att logga data till konsolen för tillfället.
    console.log("Bokning skickad:");
    console.log("Förnamn: " + firstName);
    console.log("Efternamn: " + lastName);
    console.log("Email: " + email);
    console.log("Telefonnummer: " + phone);
    console.log("Datum: " + date);
    console.log("Antal personer: " + numberOfPeople);
});

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.right === "0px") {
        navLinks.style.right = "-200px";
    } else {
        navLinks.style.right = "0px";
    }
}