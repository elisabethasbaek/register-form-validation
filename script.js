let form = document.getElementsByTagName("form")[0];

let statusFirstname = document.querySelector(".statusMessage.firstname");
let colorFirstname = document.querySelector(".inputGroup #firstname");

let statusSurname = document.querySelector(".statusMessage.surname");
let colorSurname = document.querySelector(".inputGroup #surname");

let statusStreet = document.querySelector(".statusMessage.street");
let colorStreet = document.querySelector(".inputGroup #street");

let statusHouseNumber = document.querySelector(".statusMessage.houseNumber");
let colorHouseNumber = document.querySelector(".inputGroup #houseNumber");

let statusZip = document.querySelector(".statusMessage.zip");
let colorZip = document.querySelector(".inputGroup #zip");

let statusCity = document.querySelector(".statusMessage.city");
let colorCity = document.querySelector(".inputGroup #city");

let statusUsername = document.querySelector(".statusMessage.username");
let colorUsername = document.querySelector(".inputGroup #username");

let statusPassword = document.querySelector(".statusMessage.password");
let colorPassword = document.querySelector(".inputGroup #password");

let statusEmail = document.querySelector(".statusMessage.email");
let colorEmail = document.querySelector(".inputGroup #email");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let status = true;

    statusFirstname.innerText = "";
    statusSurname.innerText = "";
    statusStreet.innerText = "";
    statusHouseNumber.innerText = "";
    statusZip.innerText = "";
    statusCity.innerText = "";
    statusUsername.innerText = "";
    statusPassword.innerText = "";
    statusEmail.innerText = "";

    if (form.firstname.value == "") {
        statusFirstname.innerText = "Du skal udfylde dit fornavn";
        colorFirstname.style.background = "rgba(209, 112, 112, 0.5)";
        colorFirstname.style.border = "1px solid rgb(209, 24, 24)";
        status = false;
    } else {
        colorFirstname.style.background = "rgba(99, 224, 95, 0.5)";
        colorFirstname.style.border = "1px solid rgb(24, 209, 24)";
    }

    if (form.surname.value == "") {
        statusSurname.innerText = "Du skal udfylde dit efternavn";
        colorSurname.style.background = "rgba(209, 112, 112, 0.5)";
        colorSurname.style.border = "1px solid rgb(209, 24, 24)";
        status = false;
    } else {
        colorSurname.style.background = "rgba(99, 224, 95, 0.5)";
        colorSurname.style.border = "1px solid rgb(24, 209, 24)";
    }

    if (form.street.value == "") {
        statusStreet.innerText = "Du skal udfylde dit vejnavn";
        colorStreet.style.background = "rgba(209, 112, 112, 0.5)";
        colorStreet.style.border = "1px solid rgb(209, 24, 24)";
        status = false;
    } else {
        colorStreet.style.background = "rgba(99, 224, 95, 0.5)";
        colorStreet.style.border = "1px solid rgb(24, 209, 24)";
    }

    if (form.houseNumber.value == "") {
        statusHouseNumber.innerText = "Du skal udfylde dit husnummer";
        colorHouseNumber.style.background = "rgba(209, 112, 112, 0.5)";
        colorHouseNumber.style.border = "1px solid rgb(209, 24, 24)";
        status = false;
    } else {
        colorHouseNumber.style.background = "rgba(99, 224, 95, 0.5)";
        colorHouseNumber.style.border = "1px solid rgb(24, 209, 24)";
    }

    if (form.zip.value == "") {
        statusZip.innerText = "Du skal udfylde dit postnummer";
        colorZip.style.background = "rgba(209, 112, 112, 0.5)";
        colorZip.style.border = "1px solid rgb(209, 24, 24)";
        status = false;
    } else {
        colorZip.style.background = "rgba(99, 224, 95, 0.5)";
        colorZip.style.border = "1px solid rgb(24, 209, 24)";
    }

    if (form.city.value == "") {
        statusCity.innerText = "Du skal udfylde din by";
        colorCity.style.background = "rgba(209, 112, 112, 0.5)";
        colorCity.style.border = "1px solid rgb(209, 24, 24)";
        status = false;
    } else {
        colorCity.style.border = "1px solid rgb(24, 209, 24)";
        colorCity.style.background = "rgba(99, 224, 95, 0.5)";
    }

    if (form.username.value == "") {
        statusUsername.innerText = "Du skal udfylde dit brugernavn";
        colorUsername.style.background = "rgba(209, 112, 112, 0.5)";
        colorUsername.style.border = "1px solid rgb(209, 24, 24)";
        status = false;
    } else {
        colorUsername.style.background = "rgba(99, 224, 95, 0.5)";
        colorUsername.style.border = "1px solid rgb(24, 209, 24)";
    }

    if (form.password.value == "") {
        statusPassword.innerText = "Du skal udfylde din adgangskode";
        colorPassword.style.background = "rgba(209, 112, 112, 0.5)";
        colorPassword.style.border = "1px solid rgb(209, 24, 24)";
        status = false;
    } else {
        colorPassword.style.background = "rgba(99, 224, 95, 0.5)";
        colorPassword.style.border = "1px solid rgb(24, 209, 24)";
    }

    if (form.email.value == "") {
        statusEmail.innerText = "Du skal udfylde din email-adresse";
        colorEmail.style.background = "rgba(209, 112, 112, 0.5)";
        colorEmail.style.border = "1px solid rgb(209, 24, 24)";
        status = false;
    } else {
        colorEmail.style.background = "rgba(99, 224, 95, 0.5)";
        colorEmail.style.border = "1px solid rgb(24, 209, 24)";
    }

    if (!status) return; //det samme som: if (status == false) {return;}

    fetch("login.php", {
        method: "post",
        body: JSON.stringify({
            username: form.username,
            password: form.password
        })
    })
        .then (function(response) {
            return response.json();
        })
        
});