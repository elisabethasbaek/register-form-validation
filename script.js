let form = document.getElementsByTagName("form")[0];

let statusFirstname = document.querySelector(".statusMessage.firstname");
let statusSurname = document.querySelector(".statusMessage.surname");
let statusStreet = document.querySelector(".statusMessage.street");
let statusHouseNumber = document.querySelector(".statusMessage.houseNumber");
let statusZip = document.querySelector(".statusMessage.zip");
let statusCity = document.querySelector(".statusMessage.city");
let statusUsername = document.querySelector(".statusMessage.username");
let statusPassword = document.querySelector(".statusMessage.password");
let statusEmail = document.querySelector(".statusMessage.email");

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
        status = false;
    }

    if (form.surname.value == "") {
        statusSurname.innerText = "Du skal udfylde dit efternavn";
        status = false;
    }

    if (form.street.value == "") {
        statusstreet.innerText = "Du skal udfylde dit vejnavn";
        status = false;
    }

    if (form.houseNumber.value == "") {
        statusHouseNumber.innerText = "Du skal udfylde dit husnummer";
        status = false;
    }

    if (form.zip.value == "") {
        statusZip.innerText = "Du skal udfylde dit postnummer";
        status = false;
    }

    if (form.city.value == "") {
        statusCity.innerText = "Du skal udfylde din by";
        status = false;
    }

    if (form.username.value == "") {
        statusUsername.innerText = "Du skal udfylde dit brugernavn";
        status = false;
    }

    if (form.password.value == "") {
        statusPassword.innerText = "Du skal udfylde din adgangskode";
        status = false;
    }

    if (form.email.value == "") {
        statusEmail.innerText = "Du skal udfylde din email-adresse";
        status = false;
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