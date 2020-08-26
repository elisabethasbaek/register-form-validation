function formValidator(form) {

    let inputFields = form.querySelectorAll("input");
    let success = true;

    form.addEventListener("submit", function(input) {
        event.preventDefault();

        inputFields.forEach(function(input) {
            input.style.background = "#FFF";
            input.style.border = "1px solid #000";
            form.querySelector(".statusMessage." + input.name).innerText = "";

            if (input.type == "number" && !/^[0-9]+$/.test(input.value) && input-value != ""){
                input.style.background = "rgba(209, 112, 112, 0.5)";
                input.style.border = "1px solid rgb(209, 24, 24)";
                form.querySelector(".statusMessage." + input.name).innerText = "Dette felt må kun indeholde tal";
                success = false;
            }

            if (input.hasAttribute("required") && input.value == "") {
                input.style.background = "rgba(209, 112, 112, 0.5)";
                input.style.border = "1px solid rgb(209, 24, 24)";
                form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt";
                success = false;
            }
        });

        if (!success) return;
    });

}

export default formValidator;