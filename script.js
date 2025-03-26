function validateForm(event) {
    event.preventDefault();
    // Name validation
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmation = document.getElementById("confirmation").value.trim();

    valide = true;
    if (name === "") {
        valide = afficher_error("error-n", "* Name is required", "name");
    }

    if (password === "") {
        valide = afficher_error(
            "error-p",
            "* Password is required",
            "password"
        );
    }

    if (password !== "" && password.length < 6) {
        valide = afficher_error(
            "error-p",
            "* Password should be atleast 6 characters",
            "password"
        );
    }

    if (confirmation === "") {
        valide = afficher_error(
            "error-c",
            "* Password confirmation is required",
            "confirmation"
        );
    }

    if (confirmation !== "" && confirmation !== password) {
        valide = afficher_error(
            "error-c",
            "* Confirmation must be similar as the password",
            "confirmation"
        );
    }

    if (isNaN(age)) {
        valide = afficher_error("error-a", "* Age must be a number", "age");
    }

    if (valide) {
        document.getElementById("form").submit();
    }
}

function afficher_error(errorId, content, input) {
    document.getElementById(errorId).style.color = "red";
    document.getElementById(errorId).innerText = content;
    document.getElementById(input).style.borderBottomColor = "#c96363";
    return false;
}

function inputClick(id, input) {
    const error = document.getElementById(id).innerText.trim();
    if (error !== "*") {
        document.getElementById(id).innerText = "*";
        document.getElementById(input).style.borderBottomColor = "";
    }
}
